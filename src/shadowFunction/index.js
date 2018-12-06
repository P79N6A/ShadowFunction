"use strict"

import { getObjectType } from '../objectType/index'
import { Sandbox } from '../sandbox/index'
import { safeEval } from '../safeEval/index'

// ShadowFunction
class ShadowFunction {
  constructor(scriptStr) {
    this.sandbox = new Sandbox()
    this.shadowToString = this.sandbox.window.Object.toString
    this.ShadowFunction = this.sandbox.window.Function
    this.init()

    switch (typeof(scriptStr)) {
      case 'object':
        return this.setAllowProtoProperties(scriptStr)
      case 'string':
        return this.runShadow(scriptStr)
      default:
        throw 'Uncaught SyntaxError: Unexpected identifier'
    }
  }

  init() {
    this.allowProtoProperties = {
      Node: [
        'nodeName',
        'nodeType',
        'textContent'
      ],
      Element: [
        'style',
        'onblur',
        'onfocus',
        'onscroll',
        'offsetWidth',
        'offsetHeight',
        'clientWidth',
        'clientHeight',
        'innerText',
        'setAttribute',
        'removeAttribute',
        'createTextNode',
        'addEventListener',
        'getElementsByTagName'
      ],
      HTMLElement: [],
      HTMLBodyElement: [],
      HTMLDivElement: [],
      HTMLUListElement: [],
      HTMLLIElement: [],
      HTMLVideoElement: [],
      HTMLAudioElement: [],
      HTMLSelectElement: [],
      HTMLOptionElement: [],
      HTMLInputElement: [],
      HTMLSpanElement: [],
      HTMLDListElement: [],
      HTMLFontElement: [],
      HTMLHeadingElement: [],
      HTMLParagraphElement: []
    }
    this.tracker = () => {}
  }

  event(tracker) {
    this.tracker = tracker
  }

  getAllowProtoProperties(constructorName) {
    const properties = this.allowProtoProperties
    let allowProperties = properties[constructorName]
    if (typeof(allowProperties) == 'function') return allowProperties()
    if (/HTML(\w+)Element/.exec(constructorName)) {
      allowProperties.concat(properties['HTMLElement'], properties['Element'], properties['Node'])
    }
    return allowProperties
  }

  setAllowProtoProperties(allowProperties) {
    Object.assign(this.allowProtoProperties, allowProperties)
    return this.runShadow.bind(this)
  }

  proxy(object, origin) {
    let propNames = Object.getOwnPropertyNames(object)
    let safeSetter = this.safeSetter.bind(this)
    let safeGetter = this.safeGetter.bind(this)
    return new Proxy(safeEval(`({${propNames.length ? propNames.join(':{},') + ':{}' : ''}})`), {
      get (target, name) {
        return safeGetter(object, name)
      },
      set: (target, name, value) => {
        return safeSetter(origin, name, value)
      }
    })
  }

  proxyEach(object) {
    if (!object) return safeEval('(undefined)')
    let target = safeEval('({})')
    let prototype = getObjectType(object)
    let propNames = Object.getOwnPropertyNames(object)
    let whitelist = this.getAllowProtoProperties(prototype)

    if (whitelist) {
      propNames = propNames.concat(whitelist)
    }

    for (let name of propNames) {
      let value = object[name]
      let valueType = typeof(value)

      if (value) {
        switch (valueType) {
          case 'object':
            if (value.toString.constructor === this.shadowToString.constructor) {
              target[name] = value
            } else {
              target[name] = this.proxyEach(value)
            }
            break
          case 'function':
            target[name] = value.bind(object)
            break
          case 'string':
          case 'number':
          case 'bollean':
            target[name] = value
            break
        }
      }
    }

    return this.proxy(target, object)
  }

  safeSetter (object, name, value) {
    let valueType = typeof(value)
    let proxyEach = this.proxyEach.bind(this)
    let ShadowFunction = this.ShadowFunction
    let prototype = getObjectType(object)
    let propNames = Object.getOwnPropertyNames(object)
    let whitelist = this.allowProtoProperties[prototype]

    if (whitelist) {
      propNames = propNames.concat(whitelist)
    }

    if (propNames.indexOf(name) == -1) {
      this.tracker({
        object,
        name,
        action: 'write',
        value
      })
      return
    }

    switch (valueType) {
      case 'string':
      case 'number':
      case 'bollean':
        object[name] = value
        break
      case 'function':
        object[name] = new ShadowFunction('value', 'object', 'proxy', `
          return function () {
            return proxy(value.apply(object, arguments))
          }`)(value, object, proxyEach)
        break
      default:
        this.tracker({
          object,
          name,
          action: 'write',
          value
        })
        break
    }

    return
  }

  safeGetter (object, name) {
    let value = object[name]
    let valueType = typeof(value)
    let proxyEach = this.proxyEach.bind(this)
    let ShadowFunction = this.ShadowFunction
    let prototype = getObjectType(object)
    let propNames = Object.getOwnPropertyNames(object)
    let whitelist = this.allowProtoProperties[prototype]

    if (whitelist) {
      propNames = propNames.concat(whitelist)
    }

    if (propNames.indexOf(name) == -1) {
      this.tracker({
        object,
        name,
        action: 'read'
      })
      return
    }

    // nor type
    switch (valueType) {
      case 'string':
      case 'number':
      case 'object':
      case 'bollean':
        return value
      case 'function':
        return new ShadowFunction('value', 'object', 'proxy', `
          return function () {
            return proxy(value.apply(object, arguments))
          }`)(value, object, proxyEach)

    }
  }

  runShadow(scriptStr) {
    this.shadowFunction = new this.ShadowFunction('(function(apply){with(apply) {' + scriptStr + '}})(this)')
    return this.runScript.bind(this)
  }

  runScript(that, event) {
    let target = this.proxyEach(that)
    event && this.event(event)
    this.shadowFunction.apply(target)
    return {
      run: this.runShadow.bind(this),
      proxy: this.proxyEach.bind(this),
      sandbox: this.sandbox
    }
  }
}

export {
  ShadowFunction
}

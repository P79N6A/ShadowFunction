"use strict"

import { ShadowFunction } from '../shadowFunction/index'

const DOCUMENT = document

// ShadowDocument
class ShadowDocument {
  constructor(root, template, setting) {
    this.init(root, template, setting)

    return this.shadowFunction.run.bind(this)
  }

  init(root, template, setting) {
    let shadowRoot = root.createShadowRoot ? root.createShadowRoot() : root
    this.template = template
    this.o = 0
    this.TREE = {
      0: shadowRoot
    }
    this.allowTagName = {
      'DIV': true,
      'B': true,
      'P': true,
      'DL': true,
      'DT': true,
      'DD': true,
      'EM': true,
      'HR': true,
      'UL': true,
      'LI': true,
      'OL': true,
      'TD': true,
      'TH': true,
      'TR': true,
      'TT': true,
      'IMG': true,
      'NAV': true,
      'SUP': true,
      'SUB': true,
      'SPAN': true,
      'FONT': true,
      'STYLE': true,
      'SMALL': true,
      'LABEL': true,
      'INPUT': true,
      'TABLE': true,
      'TBODY': true,
      'THEAD': true,
      'TFOOT': true,
      'BUTTON': true,
      'FOOTER': true,
      'HEADER': true,
      'BUTTON': true,
      'STRONG': true
    }

    Object.assign(this.allowTagName, setting)

    this.shadowFunction = new ShadowFunction({})
    this.shadowFunction = this.shadowFunction(this.reject(this.template))({
      __$template__: this.template,
      __$parallel__: this.parallel.bind(this)
    })
  }

  reject(template) {
    let reject = `
      __$parallel__(document.body);
      __$parallel__ = null;
      (function () {
        var __$getEventTarget__ = function (object) {
          if (!object) return
          if ((object.__proto__ + '').indexOf('EventTarget') !== -1) {
            return object.__proto__
          } else {
            return __$getEventTarget__(object.__proto__)
          }
        }
        var __$EventTarget__ = __$getEventTarget__(window)
        __$EventTarget__.addEventListener = function (name, fn, opt) {
          let props = 'on-' + name
          this.setAttribute(props, name)
          if (this[props]) {
            this[props].push(fn)
          } else {
            this[props] = [fn]
          }
        }
        __$EventTarget__.removeEventListener = function (name, fn, opt) {
          let props = 'on-' + name
          this.removeAttribute(props)
          if (!this[props]) return
          let index = this[props].indexOf(fn)
          if (index !== -1) {
            this[props].splice(index, 1)
          }
        }
      })();
      window['$template'] = document.createElement('template');
    `

    return reject + 'window[\'$template\'].innerHTML = \'' + template + '\';'
  }

  uuid(node, uuid) {
    uuid = parseInt(node.parentNode ? node.parentNode.uuid || 0 : 0)
    uuid++
    this.o++
    uuid = uuid + '.' + this.o
    if (!node.uuid) node.uuid = uuid
    return uuid
  }

  iterator(nodes) {
    if (nodes.nextNode) return nodes
    return DOCUMENT.createNodeIterator(nodes, NodeFilter.SHOW_ALL, null, false)
  }

  walker(nodes, target, del) {
    let node
    while (node = nodes.nextNode()) {
      if (node.uuid) continue
      this.uuid(node)
      switch (node.nodeType) {
        case Node.ELEMENT_NODE:
          if (del) {
            this.removeElement(node, target)
          } else {
            this.createElement(node, target)
            for (let i = 0; i < node.attributes.length; i++) {
              this.setAttribute(node.attributes[i].name, node)
            }
          }
          break
        case Node.TEXT_NODE:
          if (del) {
            this.removeTextNode(node, target)
          } else {
            this.createTextNode(node, target)
          }
          break
      }
    }
  }

  getParentId(node, target) {
    return (node.parentNode ? node.parentNode.uuid : target.uuid) || 0
  }

  createElement(node, target) {
    let name = node.nodeName
    let uuid = node.uuid
    let puuid = this.getParentId(node, target)

    switch (name) {
      case !!this.allowTagName[name] ? name : null:
        this.TREE[uuid] = DOCUMENT.createElement(name)
        break
      default:
        throw "The tag name provided ('" + name + "') is not a valid name."
    }

    this.TREE[puuid].appendChild(this.TREE[uuid])
  }

  removeElement(node, target) {
    let uuid = node.uuid
    let puuid = this.getParentId(node, target)

    if (this.TREE[puuid] && this.TREE[uuid]) {
      this.TREE[puuid].removeChild(this.TREE[uuid])
      delete this.TREE[uuid]
    }
  }

  createTextNode(node, target) {
    let uuid = node.uuid
    let puuid = this.getParentId(node, target)
    let text = node.textContent

    this.TREE[uuid] = DOCUMENT.createTextNode(text)
    if (this.TREE[puuid]) {
      this.TREE[puuid].appendChild(this.TREE[uuid])
    }
  }

  removeTextNode(node, target) {
    let uuid = node.uuid
    let puuid = this.getParentId(node, target)

    if (this.TREE[puuid] && this.TREE[uuid]) {
      this.TREE[puuid].removeChild(this.TREE[uuid])
      delete this.TREE[uuid]
    }
  }

  setAttribute(name, node) {
    let attri = this.TREE[node.uuid]
    let allow = this.allowTagName[node.tagName]
    let value = node.getAttribute(name)

    switch (name) {
      case 'on-click':
      case 'on-touchstart':
      case 'on-touchmove':
      case 'on-touchend':
      case 'on-focus':
      case 'on-mouseover':
      case 'on-mouseout':
      case 'on-mousedown':
      case 'on-mouseup':
      case 'on-mousemove':
      case 'on-change':
      case 'on-select':
      case 'on-keypress':
      case 'on-keydown':
      case 'on-keyup':
      case 'on-submit':
      case 'on-reset':
        if (node.hasEventListener) return
        node.hasEventListener = true
        attri.addEventListener(value, (e) => {
          this.shadowFunction.run(`
            for (let i = 0; i < event.length; i++) {
              let even = event[i]
              try {
                typeof(even) === 'function' && even.call(node, e)
              } catch (e) {
                console.log(e, 99)
              }
            }
          `)({event: node[name], node, e: this.shadowEvent(e)})
        }, false)
        return
    }

    if (typeof(allow) === 'function') {
      if (!allow(name, value)) {
        return
      }
    }

    if (attri) {
      attri.setAttribute(name, value)
    }
  }

  setCharacterData(node) {
    let char = this.TREE[node.uuid]
    if (char) char.textContent = node.textContent
  }

  shadowEvent(e) {
    let event = {}
    for (let k in e) {
      switch (typeof(e[k]) ) {
        case 'string':
        case 'number':
        case 'bollean':
          event[k] = e[k]
          break
      }
    }
    return event
  }

  parallel(root) {
    this.shadowFunction('observer()')({observer: () => {
      new MutationObserver((records) => {
        console.log(records, 8889)
        for (let record of records) {
          let target = record.target
          switch (record.type) {
            case "attributes":
              this.setAttribute(record.attributeName, target)
              break
            case "characterData":
              this.setCharacterData(target)
              break
            case "childList":
              for (let node of record.addedNodes) {
                this.walker(this.iterator(node), target)
              }
              for (let node of record.removedNodes) {
                this.walker(this.iterator(node), target, true)
              }
              break
          }
        }
      }).observe(root, {
        subtree: true,
        attributes: true,
        childList: true,
        characterData: true,
        attributeOldValue: true,
        characterDataOldValue: true
      })
    }})
  }
}

export {
  ShadowDocument
}

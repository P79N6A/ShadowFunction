/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./demo/test.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./demo/test.js":
/*!**********************!*\
  !*** ./demo/test.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_shadowFunction_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/shadowFunction/index */ "./src/shadowFunction/index.js");
/* harmony import */ var _src_shadowDocument_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/shadowDocument/index */ "./src/shadowDocument/index.js");
/* harmony import */ var _src_shadowPreact_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/shadowPreact/index */ "./src/shadowPreact/index.js");
/* harmony import */ var _src_jsonp_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/jsonp/index */ "./src/jsonp/index.js");
/* harmony import */ var _src_csp_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/csp/index */ "./src/csp/index.js");
/* harmony import */ var _src_safeEval_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/safeEval/index */ "./src/safeEval/index.js");
/* harmony import */ var _src_workerFunction_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/workerFunction/index */ "./src/workerFunction/index.js");








// test
window.seval = _src_safeEval_index__WEBPACK_IMPORTED_MODULE_5__["safeEval"];
window.ShadowFunction = _src_shadowFunction_index__WEBPACK_IMPORTED_MODULE_0__["ShadowFunction"];
window.WorkerFunction = _src_workerFunction_index__WEBPACK_IMPORTED_MODULE_6__["WorkerFunction"];
window.ShadowDocument = _src_shadowDocument_index__WEBPACK_IMPORTED_MODULE_1__["ShadowDocument"];
window.ShadowPreact = _src_shadowPreact_index__WEBPACK_IMPORTED_MODULE_2__["ShadowPreact"];

// csp("script-src 'self'; object-src 'none'; style-src cdn.example.org third-party.org; child-src https:; report-uri https://www.alibaba-inc.com/xss")

Object(_src_jsonp_index__WEBPACK_IMPORTED_MODULE_3__["jsonp"])({
  url: "http://suggest.taobao.com/sug?code=utf-8&q=iphoneX"
}).then(data => {
  console.log("jsonp:", data);
});

/***/ }),

/***/ "./src/csp/index.js":
/*!**************************!*\
  !*** ./src/csp/index.js ***!
  \**************************/
/*! exports provided: csp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "csp", function() { return csp; });
const csp = desc => {
  const meta = document.createElement('meta');
  meta.charset = 'utf-8';
  meta.setAttribute('http-equiv', 'Content-Security-Policy');
  meta.setAttribute('content', desc);
  document.getElementsByTagName('head')[0].appendChild(meta);

  window.addEventListener('error', function () {
    this.console.log(arguments);
  }, false);

  window.onerror = function () {
    this.console.log(arguments);
  };
};



/***/ }),

/***/ "./src/jsonp/index.js":
/*!****************************!*\
  !*** ./src/jsonp/index.js ***!
  \****************************/
/*! exports provided: jsonp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jsonp", function() { return jsonp; });
/* harmony import */ var _sandbox_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sandbox/index */ "./src/sandbox/index.js");
/* harmony import */ var _try_again_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../try-again/index */ "./src/try-again/index.js");
/* harmony import */ var _url_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../url/index */ "./src/url/index.js");




// callback 自增 id
let JSONP_AUTO_INCREMENT_ID = 0;

const sandbox = new _sandbox_index__WEBPACK_IMPORTED_MODULE_0__["Sandbox"](true);
const sandboxWindow = sandbox.window;
const sandboxDocument = sandboxWindow.document;

// 死亡沙箱覆盖
for (let key in sandboxWindow) {
  if (['top', 'window', 'document', 'chrome', 'caches', 'location'].indexOf(key) !== -1) continue;
  try {
    sandboxWindow[key] = shadowWindow[key];
  } catch (e) {}
}

const jsonp = function (options) {
  return new Promise(function (resolve, reject) {
    let { url, data, callbackKey, callbackName, timeout } = options;
    let script;
    let tryObj;
    let payload = '';
    let timeoutId;
    data = data || {};
    timeout = timeout || 30000;
    callbackKey = callbackKey || 'callback';
    callbackName = callbackName || '__call__' + ++JSONP_AUTO_INCREMENT_ID;
    data[callbackKey] = callbackName;
    sandboxWindow[callbackName] = data => {
      delete sandboxWindow[callbackName];
      if (Object.prototype.toString.call(data) == '[object Object]') {
        resolve(data);
      } else {
        reject();
      }
    };
    payload = Object(_url_index__WEBPACK_IMPORTED_MODULE_2__["object2params"])(data);

    if (!url || typeof url !== 'string') return reject('params url is not defined');
    url += (url.indexOf('?') != -1 ? '&' : '?') + payload;

    // 异常尝试
    tryObj = new _try_again_index__WEBPACK_IMPORTED_MODULE_1__["TryAgain"](send, { timeout: 3000, polls: 2 });

    // abort
    function abort() {
      clearTimeout(timeoutId);
      window.removeEventListener("online", send, false);
      try {
        sandboxDocument.documentElement.removeChild(script);
      } catch (e) {}
    }

    // 错误处理
    function over() {
      abort();
      tryObj.try();
      if (tryObj.polls == 0) {
        reject();
      }
    }

    function send() {
      script = sandboxDocument.createElement("script");
      script.charset = 'utf-8';
      script.src = url;

      // failed
      script.onerror = over;
      script.onload = () => {
        abort();
        tryObj.over();
      };

      sandboxDocument.documentElement.appendChild(script);
    }
    timeoutId = setTimeout(over, timeout);
    send();

    // 断网重连
    if (navigator.onLine === false) {
      tryObj.stop();
      window.addEventListener("online", send, false);
    }
  });
};


/***/ }),

/***/ "./src/objectType/index.js":
/*!*********************************!*\
  !*** ./src/objectType/index.js ***!
  \*********************************/
/*! exports provided: getObjectType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getObjectType", function() { return getObjectType; });
const getObjectType = object => {
  let typeStr = '' + object;
  let objectType = /\s*\[(\w+) (\w+)\]\s*/.exec(typeStr) || [];

  switch (objectType[1]) {
    case 'object':
      return objectType[2];
    case 'native':
      return 'native';
  }

  return 'unknow';
};



/***/ }),

/***/ "./src/safeEval/index.js":
/*!*******************************!*\
  !*** ./src/safeEval/index.js ***!
  \*******************************/
/*! exports provided: safeEval */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "safeEval", function() { return safeEval; });
/* harmony import */ var _sandbox_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sandbox/index */ "./src/sandbox/index.js");




// snadbox && shadowSandbox
const shadowSandbox = new _sandbox_index__WEBPACK_IMPORTED_MODULE_0__["Sandbox"]();
const shadowWindow = shadowSandbox.window;
const safeEval = shadowWindow.eval;



/***/ }),

/***/ "./src/sandbox/index.js":
/*!******************************!*\
  !*** ./src/sandbox/index.js ***!
  \******************************/
/*! exports provided: Sandbox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sandbox", function() { return Sandbox; });


class Sandbox {
  constructor(white) {
    const sandbox = this.sandbox = this.iframe = document.createElement('iframe');
    sandbox.setAttribute('sandbox', 'allow-scripts allow-same-origin');

    sandbox.style.display = 'none';
    document.documentElement.appendChild(sandbox);

    this.content = this.sandbox.contentDocument;
    this.open().write('').close().init();

    if (!white) {
      this.exit();
    }

    return this;
  }

  init() {
    const contentWindow = this.sandbox.contentWindow;
    this.window = contentWindow.window;
    this.document = contentWindow.document;
    return this;
  }

  open() {
    this.content.open();
    return this;
  }

  write(head, body, context) {
    if (head || body) {
      context = '<!DOCTYPE html>' + '<html>' + '<head>' + (head ? head : '') + '</head>' + '<body>' + (body ? body : '') + '</body>' + '</html>';
    } else {
      context = '<head><meta charset="utf-8"></head>';
    }
    this.content.write(context);
    return this;
  }

  close() {
    this.content.close();
    return this;
  }

  exit() {
    this.sandbox.src = 'about:blank';
    this.sandbox.parentNode.removeChild(this.sandbox);
  }
}



/***/ }),

/***/ "./src/shadowDocument/index.js":
/*!*************************************!*\
  !*** ./src/shadowDocument/index.js ***!
  \*************************************/
/*! exports provided: ShadowDocument */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShadowDocument", function() { return ShadowDocument; });
/* harmony import */ var _shadowFunction_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shadowFunction/index */ "./src/shadowFunction/index.js");




const DOCUMENT = document;

// ShadowDocument
class ShadowDocument {
  constructor(root, template, setting) {
    this.init(root, template, setting);

    return this.shadowFunction.run.bind(this);
  }

  init(root, template, setting) {
    let shadowRoot = root.createShadowRoot ? root.createShadowRoot() : root;
    this.template = template;
    this.o = 0;
    this.TREE = {
      0: shadowRoot
    };
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
    };

    Object.assign(this.allowTagName, setting);

    this.shadowFunction = new _shadowFunction_index__WEBPACK_IMPORTED_MODULE_0__["ShadowFunction"]({});
    this.shadowFunction = this.shadowFunction(this.reject(this.template))({
      __$template__: this.template,
      __$parallel__: this.parallel.bind(this)
    });
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
    `;

    return reject + 'window[\'$template\'].innerHTML = \'' + template + '\';';
  }

  uuid(node, uuid) {
    uuid = parseInt(node.parentNode ? node.parentNode.uuid || 0 : 0);
    uuid++;
    this.o++;
    uuid = uuid + '.' + this.o;
    if (!node.uuid) node.uuid = uuid;
    return uuid;
  }

  iterator(nodes) {
    if (nodes.nextNode) return nodes;
    return DOCUMENT.createNodeIterator(nodes, NodeFilter.SHOW_ALL, null, false);
  }

  walker(nodes, target, del) {
    let node;
    while (node = nodes.nextNode()) {
      if (node.uuid) continue;
      this.uuid(node);
      switch (node.nodeType) {
        case Node.ELEMENT_NODE:
          if (del) {
            this.removeElement(node, target);
          } else {
            this.createElement(node, target);
            for (let i = 0; i < node.attributes.length; i++) {
              this.setAttribute(node.attributes[i].name, node);
            }
          }
          break;
        case Node.TEXT_NODE:
          if (del) {
            this.removeTextNode(node, target);
          } else {
            this.createTextNode(node, target);
          }
          break;
      }
    }
  }

  getParentId(node, target) {
    return (node.parentNode ? node.parentNode.uuid : target.uuid) || 0;
  }

  createElement(node, target) {
    let name = node.nodeName;
    let uuid = node.uuid;
    let puuid = this.getParentId(node, target);

    switch (name) {
      case !!this.allowTagName[name] ? name : null:
        this.TREE[uuid] = DOCUMENT.createElement(name);
        break;
      default:
        throw "The tag name provided ('" + name + "') is not a valid name.";
    }

    this.TREE[puuid].appendChild(this.TREE[uuid]);
  }

  removeElement(node, target) {
    let uuid = node.uuid;
    let puuid = this.getParentId(node, target);

    if (this.TREE[puuid] && this.TREE[uuid]) {
      this.TREE[puuid].removeChild(this.TREE[uuid]);
      delete this.TREE[uuid];
    }
  }

  createTextNode(node, target) {
    let uuid = node.uuid;
    let puuid = this.getParentId(node, target);
    let text = node.textContent;

    this.TREE[uuid] = DOCUMENT.createTextNode(text);
    if (this.TREE[puuid]) {
      this.TREE[puuid].appendChild(this.TREE[uuid]);
    }
  }

  removeTextNode(node, target) {
    let uuid = node.uuid;
    let puuid = this.getParentId(node, target);

    if (this.TREE[puuid] && this.TREE[uuid]) {
      this.TREE[puuid].removeChild(this.TREE[uuid]);
      delete this.TREE[uuid];
    }
  }

  setAttribute(name, node) {
    let attri = this.TREE[node.uuid];
    let allow = this.allowTagName[node.tagName];
    let value = node.getAttribute(name);

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
        if (node.hasEventListener) return;
        node.hasEventListener = true;
        attri.addEventListener(value, e => {
          this.shadowFunction.run(`
            for (let i = 0; i < event.length; i++) {
              let even = event[i]
              try {
                typeof(even) === 'function' && even.call(node, e)
              } catch (e) {
                console.log(e, 99)
              }
            }
          `)({ event: node[name], node, e: this.shadowEvent(e) });
        }, false);
        return;
    }

    if (typeof allow === 'function') {
      if (!allow(name, value)) {
        return;
      }
    }

    if (attri) {
      attri.setAttribute(name, value);
    }
  }

  setCharacterData(node) {
    let char = this.TREE[node.uuid];
    if (char) char.textContent = node.textContent;
  }

  shadowEvent(e) {
    let event = {};
    for (let k in e) {
      switch (typeof e[k]) {
        case 'string':
        case 'number':
        case 'bollean':
          event[k] = e[k];
          break;
      }
    }
    return event;
  }

  parallel(root) {
    this.shadowFunction('observer()')({ observer: () => {
        new MutationObserver(records => {
          console.log(records, 8889);
          for (let record of records) {
            let target = record.target;
            switch (record.type) {
              case "attributes":
                this.setAttribute(record.attributeName, target);
                break;
              case "characterData":
                this.setCharacterData(target);
                break;
              case "childList":
                for (let node of record.addedNodes) {
                  this.walker(this.iterator(node), target);
                }
                for (let node of record.removedNodes) {
                  this.walker(this.iterator(node), target, true);
                }
                break;
            }
          }
        }).observe(root, {
          subtree: true,
          attributes: true,
          childList: true,
          characterData: true,
          attributeOldValue: true,
          characterDataOldValue: true
        });
      } });
  }
}



/***/ }),

/***/ "./src/shadowFunction/index.js":
/*!*************************************!*\
  !*** ./src/shadowFunction/index.js ***!
  \*************************************/
/*! exports provided: ShadowFunction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShadowFunction", function() { return ShadowFunction; });
/* harmony import */ var _objectType_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../objectType/index */ "./src/objectType/index.js");
/* harmony import */ var _sandbox_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sandbox/index */ "./src/sandbox/index.js");
/* harmony import */ var _safeEval_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../safeEval/index */ "./src/safeEval/index.js");






// ShadowFunction
class ShadowFunction {
  constructor(scriptStr) {
    this.sandbox = new _sandbox_index__WEBPACK_IMPORTED_MODULE_1__["Sandbox"]();
    this.shadowToString = this.sandbox.window.Object.toString;
    this.ShadowFunction = this.sandbox.window.Function;
    this.init();

    switch (typeof scriptStr) {
      case 'object':
        return this.setAllowProtoProperties(scriptStr);
      case 'string':
        return this.runShadow(scriptStr);
      default:
        throw 'Uncaught SyntaxError: Unexpected identifier';
    }
  }

  init() {
    this.allowProtoProperties = {
      Node: ['nodeName', 'nodeType', 'textContent'],
      Element: ['style', 'onblur', 'onfocus', 'onscroll', 'offsetWidth', 'offsetHeight', 'clientWidth', 'clientHeight', 'innerText', 'setAttribute', 'removeAttribute', 'createTextNode', 'addEventListener', 'getElementsByTagName'],
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
    };
    this.tracker = () => {};
  }

  event(tracker) {
    this.tracker = tracker;
  }

  getAllowProtoProperties(constructorName) {
    const properties = this.allowProtoProperties;
    let allowProperties = properties[constructorName];
    if (typeof allowProperties == 'function') return allowProperties();
    if (/HTML(\w+)Element/.exec(constructorName)) {
      allowProperties.concat(properties['HTMLElement'], properties['Element'], properties['Node']);
    }
    return allowProperties;
  }

  setAllowProtoProperties(allowProperties) {
    Object.assign(this.allowProtoProperties, allowProperties);
    return this.runShadow.bind(this);
  }

  proxy(object, origin) {
    let propNames = Object.getOwnPropertyNames(object);
    let safeSetter = this.safeSetter.bind(this);
    let safeGetter = this.safeGetter.bind(this);
    return new Proxy(Object(_safeEval_index__WEBPACK_IMPORTED_MODULE_2__["safeEval"])(`({${propNames.length ? propNames.join(':{},') + ':{}' : ''}})`), {
      get(target, name) {
        return safeGetter(object, name);
      },
      set: (target, name, value) => {
        return safeSetter(origin, name, value);
      }
    });
  }

  proxyEach(object) {
    if (!object) return Object(_safeEval_index__WEBPACK_IMPORTED_MODULE_2__["safeEval"])('(undefined)');
    let target = Object(_safeEval_index__WEBPACK_IMPORTED_MODULE_2__["safeEval"])('({})');
    let prototype = Object(_objectType_index__WEBPACK_IMPORTED_MODULE_0__["getObjectType"])(object);
    let propNames = Object.getOwnPropertyNames(object);
    let whitelist = this.getAllowProtoProperties(prototype);

    if (whitelist) {
      propNames = propNames.concat(whitelist);
    }

    for (let name of propNames) {
      let value = object[name];
      let valueType = typeof value;

      if (value) {
        switch (valueType) {
          case 'object':
            if (value.toString.constructor === this.shadowToString.constructor) {
              target[name] = value;
            } else {
              target[name] = this.proxyEach(value);
            }
            break;
          case 'function':
            target[name] = value.bind(object);
            break;
          case 'string':
          case 'number':
          case 'bollean':
            target[name] = value;
            break;
        }
      }
    }

    return this.proxy(target, object);
  }

  safeSetter(object, name, value) {
    let valueType = typeof value;
    let proxyEach = this.proxyEach.bind(this);
    let ShadowFunction = this.ShadowFunction;
    let prototype = Object(_objectType_index__WEBPACK_IMPORTED_MODULE_0__["getObjectType"])(object);
    let propNames = Object.getOwnPropertyNames(object);
    let whitelist = this.allowProtoProperties[prototype];

    if (whitelist) {
      propNames = propNames.concat(whitelist);
    }

    if (propNames.indexOf(name) == -1) {
      this.tracker({
        object,
        name,
        action: 'write',
        value
      });
      return;
    }

    switch (valueType) {
      case 'string':
      case 'number':
      case 'bollean':
        object[name] = value;
        break;
      case 'function':
        object[name] = new ShadowFunction('value', 'object', 'proxy', `
          return function () {
            return proxy(value.apply(object, arguments))
          }`)(value, object, proxyEach);
        break;
      default:
        this.tracker({
          object,
          name,
          action: 'write',
          value
        });
        break;
    }

    return;
  }

  safeGetter(object, name) {
    let value = object[name];
    let valueType = typeof value;
    let proxyEach = this.proxyEach.bind(this);
    let ShadowFunction = this.ShadowFunction;
    let prototype = Object(_objectType_index__WEBPACK_IMPORTED_MODULE_0__["getObjectType"])(object);
    let propNames = Object.getOwnPropertyNames(object);
    let whitelist = this.allowProtoProperties[prototype];

    if (whitelist) {
      propNames = propNames.concat(whitelist);
    }

    if (propNames.indexOf(name) == -1) {
      this.tracker({
        object,
        name,
        action: 'read'
      });
      return;
    }

    // nor type
    switch (valueType) {
      case 'string':
      case 'number':
      case 'object':
      case 'bollean':
        return value;
      case 'function':
        return new ShadowFunction('value', 'object', 'proxy', `
          return function () {
            return proxy(value.apply(object, arguments))
          }`)(value, object, proxyEach);

    }
  }

  runShadow(scriptStr) {
    this.shadowFunction = new this.ShadowFunction('(function(apply){with(apply) {' + scriptStr + '}})(this)');
    return this.runScript.bind(this);
  }

  runScript(that, event) {
    let target = this.proxyEach(that);
    event && this.event(event);
    this.shadowFunction.apply(target);
    return {
      run: this.runShadow.bind(this),
      proxy: this.proxyEach.bind(this),
      sandbox: this.sandbox
    };
  }
}



/***/ }),

/***/ "./src/shadowPreact/index.js":
/*!***********************************!*\
  !*** ./src/shadowPreact/index.js ***!
  \***********************************/
/*! exports provided: ShadowPreact */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShadowPreact", function() { return ShadowPreact; });
/* harmony import */ var _shadowDocument_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shadowDocument/index */ "./src/shadowDocument/index.js");




const PREACR = `!function(){"use strict";function e(e,t){var n,o,r,i,l=A;for(i=arguments.length;i-- >2;)P.push(arguments[i]);t&&null!=t.children&&(P.length||P.push(t.children),delete t.children);while(P.length)if((o=P.pop())&&void 0!==o.pop)for(i=o.length;i--;)P.push(o[i]);else"boolean"==typeof o&&(o=null),(r="function"!=typeof e)&&(null==o?o="":"number"==typeof o?o+="":"string"!=typeof o&&(r=!1)),r&&n?l[l.length-1]+=o:l===A?l=[o]:l.push(o),n=r;var a=new T;return a.nodeName=e,a.children=l,a.attributes=null==t?void 0:t,a.key=null==t?void 0:t.key,void 0!==M.vnode&&M.vnode(a),a}function t(e,t){for(var n in t)e[n]=t[n];return e}function n(e,t){null!=e&&("function"==typeof e?e(t):e.current=t)}function o(n,o){return e(n.nodeName,t(t({},n.attributes),o),arguments.length>2?[].slice.call(arguments,2):n.children)}function r(e){!e.__d&&(e.__d=!0)&&1==E.push(e)&&(M.debounceRendering||W)(i)}function i(){var e;while(e=E.pop())e.__d&&x(e)}function l(e,t,n){return"string"==typeof t||"number"==typeof t?void 0!==e.splitText:"string"==typeof t.nodeName?!e._componentConstructor&&a(e,t.nodeName):n||e._componentConstructor===t.nodeName}function a(e,t){return e.__n===t||e.nodeName.toLowerCase()===t.toLowerCase()}function u(e){var n=t({},e.attributes);n.children=e.children;var o=e.nodeName.defaultProps;if(void 0!==o)for(var r in o)void 0===n[r]&&(n[r]=o[r]);return n}function p(e,t){var n=t?document.createElementNS("http://www.w3.org/2000/svg",e):document.createElement(e);return n.__n=e,n}function c(e){var t=e.parentNode;t&&t.removeChild(e)}function s(e,t,o,r,i){if("className"===t&&(t="class"),"key"===t);else if("ref"===t)n(o,null),n(r,e);else if("class"!==t||i)if("style"===t){if(r&&"string"!=typeof r&&"string"!=typeof o||(e.style.cssText=r||""),r&&"object"==typeof r){if("string"!=typeof o)for(var l in o)l in r||(e.style[l]="");for(var l in r)e.style[l]="number"==typeof r[l]&&!1===D.test(l)?r[l]+"px":r[l]}}else if("dangerouslySetInnerHTML"===t)r&&(e.innerHTML=r.__html||"");else if("o"==t[0]&&"n"==t[1]){var a=t!==(t=t.replace(/Capture$/,""));t=t.toLowerCase().substring(2),r?o||e.addEventListener(t,_,a):e.removeEventListener(t,_,a),(e.__l||(e.__l={}))[t]=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];r.apply(this,t)}}else if("list"!==t&&"type"!==t&&!i&&t in e){try{e[t]=null==r?"":r}catch(e){}null!=r&&!1!==r||"spellcheck"==t||e.removeAttribute(t)}else{var u=i&&t!==(t=t.replace(/^xlink:?/,""));null==r||!1===r?u?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.removeAttribute(t):"function"!=typeof r&&(u?e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];r.apply(this,t)}):e.setAttribute(t,function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];r.apply(this,t)}))}else e.className=r||""}function _(e){return this.__l[e.type](M.event&&M.event(e)||e)}function f(){var e,t;for(t=0;t<V.length;++t)e=V[t],M.afterMount&&M.afterMount(e),e.componentDidMount&&e.componentDidMount();V.length=0}function d(e,t,n,o,r,i){H++||(R=null!=r&&void 0!==r.ownerSVGElement,B=null!=e&&!("__preactattr_"in e));var l=h(e,t,n,o,i);return r&&l.parentNode!==r&&r.appendChild(l),--H||(B=!1,i||f()),l}function h(e,t,n,o,r){var i=e,l=R;if(null!=t&&"boolean"!=typeof t||(t=""),"string"==typeof t||"number"==typeof t)return e&&void 0!==e.splitText&&e.parentNode&&(!e._component||r)?e.nodeValue!=t&&(e.nodeValue=t):(i=document.createTextNode(t),e&&(e.parentNode&&e.parentNode.replaceChild(i,e),m(e,!0))),i.__preactattr_=!0,i;var u=t.nodeName;if("function"==typeof u)return N(e,t,n,o);if(R="svg"===u||"foreignObject"!==u&&R,u+="",(!e||!a(e,u))&&(i=p(u,R),e)){while(e.firstChild)i.appendChild(e.firstChild);e.parentNode&&e.parentNode.replaceChild(i,e),m(e,!0)}var c=i.firstChild,s=i.__preactattr_,_=t.children;if(null==s){s=i.__preactattr_={};for(var f=i.attributes,d=f.length;d--;)s[f[d].name]=f[d].value}return!B&&_&&1===_.length&&"string"==typeof _[0]&&null!=c&&void 0!==c.splitText&&null==c.nextSibling?c.nodeValue!=_[0]&&(c.nodeValue=_[0]):(_&&_.length||null!=c)&&v(i,_,n,o,B||null!=s.dangerouslySetInnerHTML),g(i,t.attributes,s),R=l,i}function v(e,t,n,o,r){var i,a,u,p,s,_=e.childNodes,f=[],d={},v=0,y=0,g=_.length,b=0,w=t?t.length:0;if(0!==g)for(var C=0;C<g;C++){var x=_[C],N=x.__preactattr_,k=w&&N?x._component?x._component.__k:N.key:null;null!=k?(v++,d[k]=x):(N||(void 0!==x.splitText?!r||x.nodeValue.trim():r))&&(f[b++]=x)}if(0!==w)for(var C=0;C<w;C++){p=t[C],s=null;var k=p.key;if(null!=k)v&&void 0!==d[k]&&(s=d[k],d[k]=void 0,v--);else if(y<b)for(i=y;i<b;i++)if(void 0!==f[i]&&l(a=f[i],p,r)){s=a,f[i]=void 0,i===b-1&&b--,i===y&&y++;break}s=h(s,p,n,o),u=_[C],s&&s!==e&&s!==u&&(null==u?e.appendChild(s):s===u.nextSibling?c(u):e.insertBefore(s,u))}if(v)for(var C in d)void 0!==d[C]&&m(d[C],!1);while(y<=b)void 0!==(s=f[b--])&&m(s,!1)}function m(e,t){var o=e._component;o?k(o):(null!=e.__preactattr_&&n(e.__preactattr_.ref,null),!1!==t&&null!=e.__preactattr_||c(e),y(e))}function y(e){e=e.lastChild;while(e){var t=e.previousSibling;m(e,!0),e=t}}function g(e,t,n){var o;for(o in n)t&&null!=t[o]||null==n[o]||s(e,o,n[o],n[o]=void 0,R);for(o in t)"children"===o||"innerHTML"===o||o in n&&t[o]===("value"===o||"checked"===o?e[o]:n[o])||s(e,o,n[o],n[o]=t[o],R)}function b(e,t,n){var o,r=F.length;e.prototype&&e.prototype.render?(o=new e(t,n),U.call(o,t,n)):(o=new U(t,n),o.constructor=e,o.render=w);while(r--)if(F[r].constructor===e)return o.__b=F[r].__b,F.splice(r,1),o;return o}function w(e,t,n){return this.constructor(e,n)}function C(e,t,o,i,l){e.__x||(e.__x=!0,e.__r=t.ref,e.__k=t.key,delete t.ref,delete t.key,void 0===e.constructor.getDerivedStateFromProps&&(!e.base||l?e.componentWillMount&&e.componentWillMount():e.componentWillReceiveProps&&e.componentWillReceiveProps(t,i)),i&&i!==e.context&&(e.__c||(e.__c=e.context),e.context=i),e.__p||(e.__p=e.props),e.props=t,e.__x=!1,0!==o&&(1!==o&&!1===M.syncComponentUpdates&&e.base?r(e):x(e,1,l)),n(e.__r,e))}function x(e,n,o,r){if(!e.__x){var i,l,a,p=e.props,c=e.state,s=e.context,_=e.__p||p,h=e.__s||c,v=e.__c||s,y=e.base,g=e.__b,w=y||g,N=e._component,U=!1,S=v;if(e.constructor.getDerivedStateFromProps&&(c=t(t({},c),e.constructor.getDerivedStateFromProps(p,c)),e.state=c),y&&(e.props=_,e.state=h,e.context=v,2!==n&&e.shouldComponentUpdate&&!1===e.shouldComponentUpdate(p,c,s)?U=!0:e.componentWillUpdate&&e.componentWillUpdate(p,c,s),e.props=p,e.state=c,e.context=s),e.__p=e.__s=e.__c=e.__b=null,e.__d=!1,!U){i=e.render(p,c,s),e.getChildContext&&(s=t(t({},s),e.getChildContext())),y&&e.getSnapshotBeforeUpdate&&(S=e.getSnapshotBeforeUpdate(_,h));var L,T,P=i&&i.nodeName;if("function"==typeof P){var A=u(i);l=N,l&&l.constructor===P&&A.key==l.__k?C(l,A,1,s,!1):(L=l,e._component=l=b(P,A,s),l.__b=l.__b||g,l.__u=e,C(l,A,0,s,!1),x(l,1,o,!0)),T=l.base}else a=w,L=N,L&&(a=e._component=null),(w||1===n)&&(a&&(a._component=null),T=d(a,i,s,o||!y,w&&w.parentNode,!0));if(w&&T!==w&&l!==N){var W=w.parentNode;W&&T!==W&&(W.replaceChild(T,w),L||(w._component=null,m(w,!1)))}if(L&&k(L),e.base=T,T&&!r){var D=e,E=e;while(E=E.__u)(D=E).base=T;T._component=D,T._componentConstructor=D.constructor}}!y||o?V.push(e):U||(e.componentDidUpdate&&e.componentDidUpdate(_,h,S),M.afterUpdate&&M.afterUpdate(e));while(e.__h.length)e.__h.pop().call(e);H||r||f()}}function N(e,t,n,o){var r=e&&e._component,i=r,l=e,a=r&&e._componentConstructor===t.nodeName,p=a,c=u(t);while(r&&!p&&(r=r.__u))p=r.constructor===t.nodeName;return r&&p&&(!o||r._component)?(C(r,c,3,n,o),e=r.base):(i&&!a&&(k(i),e=l=null),r=b(t.nodeName,c,n),e&&!r.__b&&(r.__b=e,l=null),C(r,c,1,n,o),e=r.base,l&&e!==l&&(l._component=null,m(l,!1))),e}function k(e){M.beforeUnmount&&M.beforeUnmount(e);var t=e.base;e.__x=!0,e.componentWillUnmount&&e.componentWillUnmount(),e.base=null;var o=e._component;o?k(o):t&&(null!=t.__preactattr_&&n(t.__preactattr_.ref,null),e.__b=t,c(t),F.push(e),y(t)),n(e.__r,null)}function U(e,t){this.__d=!0,this.context=t,this.props=e,this.state=this.state||{},this.__h=[]}function S(e,t,n){return d(n,e,{},!1,t,!1)}function L(){return{}}var T=function(){},M={},P=[],A=[],W="function"==typeof Promise?Promise.resolve().then.bind(Promise.resolve()):setTimeout,D=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,E=[],V=[],H=0,R=!1,B=!1,F=[];t(U.prototype,{setState:function(e,n){this.__s||(this.__s=this.state),this.state=t(t({},this.state),"function"==typeof e?e(this.state,this.props):e),n&&this.__h.push(n),r(this)},forceUpdate:function(e){e&&this.__h.push(e),x(this,2)},render:function(){}});var j={h:e,createElement:e,cloneElement:o,createRef:L,Component:U,render:S,rerender:i,options:M};"undefined"!=typeof module?module.exports=j:window.preact=j}();`;

// ShadowFunction
class ShadowPreact {
  constructor(script) {
    return new _shadowDocument_index__WEBPACK_IMPORTED_MODULE_0__["ShadowDocument"](document.body, '<div id="app"></div>')(PREACR)().run(script);
  }
}



/***/ }),

/***/ "./src/try-again/index.js":
/*!********************************!*\
  !*** ./src/try-again/index.js ***!
  \********************************/
/*! exports provided: TryAgain */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TryAgain", function() { return TryAgain; });

class TryAgain {
  constructor(task, options) {
    this.task = task;
    this.options = options;
    this.polls = options.polls || 2;
    this.timeout = options.timeout || 3000;
    this.timeoutId = null;
  }

  try() {
    if (this.polls <= 0) return false;
    this.timeoutId = setTimeout(() => {
      if (this.polls-- > 0) this.task() && this.try();
    }, this.timeout);
  }

  stop() {
    clearTimeout(this.timeoutId);
  }

  wait(time) {
    this.timeout = time;
  }

  over() {
    this.stop();
    this.polls = 0;
  }
}



/***/ }),

/***/ "./src/url/index.js":
/*!**************************!*\
  !*** ./src/url/index.js ***!
  \**************************/
/*! exports provided: object2params */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "object2params", function() { return object2params; });
const object2params = obj => {
  let url = '';(function (obj) {
    let kvArr = Object.entries(obj);
    kvArr.forEach(v => {
      if (Object.prototype.toString.call(v[1]) == '[object Object]') {
        arguments.callee(v[1]);
      } else {
        url += v.join('=') + '&';
      }
    });
  })(obj);

  return url.substring(0, url.length - 1);
};



/***/ }),

/***/ "./src/workerFunction/index.js":
/*!*************************************!*\
  !*** ./src/workerFunction/index.js ***!
  \*************************************/
/*! exports provided: WorkerFunction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkerFunction", function() { return WorkerFunction; });
class WorkerFunction {
  constructor(code) {
    code = typeof code === 'string' ? code : typeof code === 'function' ? Object.toString.call(code) : '';
    // code = `self.addEventListener('message', function (event) { ` + code + ` }, false)`
    return new Worker(URL.createObjectURL(new Blob([code])));
  }
}



/***/ })

/******/ });
//# sourceMappingURL=test.dev.js.map
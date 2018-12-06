"use strict"

class Sandbox {
  constructor(white) {
    const sandbox = this.sandbox = this.iframe = document.createElement('iframe')
    sandbox.setAttribute('sandbox', 'allow-scripts allow-same-origin')

    sandbox.style.display = 'none'
    document.documentElement.appendChild(sandbox)

    this.content = this.sandbox.contentDocument
    this.open().write('').close().init()

    if (!white) {
      this.exit()
    }

    return this
  }

  init() {
    const contentWindow = this.sandbox.contentWindow
    this.window = contentWindow.window
    this.document = contentWindow.document
    return this
  }

  open() {
    this.content.open()
    return this
  }

  write(head, body, context) {
    if (head || body) {
      context = '<!DOCTYPE html>' +
        '<html>' +
        '<head>' +
        (head ? head : '') +
        '</head>' +
        '<body>' +
        (body ? body : '') +
        '</body>' +
        '</html>'
    } else {
      context = '<head><meta charset="utf-8"></head>'
    }
    this.content.write(context)
    return this
  }

  close() {
    this.content.close()
    return this
  }

  exit() {
    this.sandbox.src = 'about:blank'
    this.sandbox.parentNode.removeChild(this.sandbox)
  }
}

export {
  Sandbox
}

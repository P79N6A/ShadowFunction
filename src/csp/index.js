const csp = (desc) => {
  const meta = document.createElement('meta')
  meta.charset = 'utf-8'
  meta.setAttribute('http-equiv', 'Content-Security-Policy')
  meta.setAttribute('content', desc)
  document.getElementsByTagName('head')[0].appendChild(meta)

  window.addEventListener('error', function () {
    this.console.log(arguments)
  }, false)

  window.onerror = function () {
    this.console.log(arguments)
  }
}

export { csp }
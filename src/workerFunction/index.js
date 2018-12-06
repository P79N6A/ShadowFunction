class WorkerFunction {
  constructor(code) {
    code = typeof(code) === 'string' ? code : typeof(code) === 'function' ? Object.toString.call(code) : ''
    // code = `self.addEventListener('message', function (event) { ` + code + ` }, false)`
    return new Worker(URL.createObjectURL(new Blob([code])))
  }
}

export { WorkerFunction }
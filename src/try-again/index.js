
class TryAgain {
  constructor(task, options) {
    this.task = task
    this.options = options
    this.polls = options.polls || 2
    this.timeout = options.timeout || 3000
    this.timeoutId = null
  }

  try () {
    if (this.polls <= 0) return false
    this.timeoutId = setTimeout(() => {
      if (this.polls-- > 0) this.task() && this.try()
    }, this.timeout)
  }

  stop () {
    clearTimeout(this.timeoutId)
  }

  wait (time) {
    this.timeout = time
  }

  over () {
    this.stop()
    this.polls = 0
  }
}

export { TryAgain }
import { ShadowFunction } from '../src/shadowFunction/index'
import { ShadowDocument } from '../src/shadowDocument/index'
import { ShadowPreact } from '../src/shadowPreact/index'
import { jsonp } from '../src/jsonp/index'
import { csp } from '../src/csp/index'
import { safeEval } from '../src/safeEval/index'
import { WorkerFunction } from '../src/workerFunction/index'

// test
window.seval = safeEval
window.ShadowFunction = ShadowFunction
window.WorkerFunction = WorkerFunction
window.ShadowDocument = ShadowDocument
window.ShadowPreact = ShadowPreact

// csp("script-src 'self'; object-src 'none'; style-src cdn.example.org third-party.org; child-src https:; report-uri https://www.alibaba-inc.com/xss")

jsonp({
  url: "http://suggest.taobao.com/sug?code=utf-8&q=iphoneX"
}).then((data) => {
  console.log("jsonp:", data)
})

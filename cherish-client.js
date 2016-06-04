var client = function () {
  //呈现引擎
  var engine = {
    ie: 0,
    gecko: 0,
    webkit: 0,
    kthml: 0,
    opera: 0,

    //版本号
    ver: null
  }

  //浏览器
  var browser = {
    //主要浏览器
    ie: 0,
    firefox: 0,
    safari: 0,
    opera: 0,
    chrome: 0,

    //版本号
    ver: null
  }

  //平台、设备、主机
  var system = {
    win: false,
    mac: false,
    x11: false,

    //移动设备
    iphone: false,
    ipod: false,
    ipad: false,
    ios: false,
    android: false,
    nokiaN: false,
    winMobile: false,

    //主机
    wii: false,
    ps: false
  }

  //检测呈现引擎和浏览器
  var ua = navigator.userAgent
  if (window.opera) {
    engine.ver = browser.ver = window.opera.version()
    engine.opera = browser.opera = parseFloat(engine.ver)
  } else if (/AppleWebkit\/(\S+)/.test(ua)) {
    engine.ver = RegExp["$1"]
    engine.webkit = parseFloat(engine.ver)

    //确定是Chrome还是Safari
    if (/Chrome\/(\S+)/.test(ua)) {
      browser.ver = RegExp["$1"]
      browser.chrome = parseFloat(browser.ver)
    } else if (/Version\/(\S+)/.test(ua)) {
      browser.ver = RegExp["$1"]
      browser.safari = parseFloat(browser.ver)
    } else {
      //近似确定版本号
      var safariVersion = 1
      if(engine.webkit < 100) {
        safariVersion = 1
      } else if (engine.webkit < 312) {
        safariVersion = 1.2
      } else if (engine.webkit < 412) {
        safariVersion = 1.3
      } else {
        safariVersion = 2
      }

      browser.safari = browser.ver = safariVersion
    }
  } else if (/KHTML\/(\S+)/.test(ua) || /Konqueror\/([^;]+)/.test(ua)) {
    engine.ver = browser.ver = RegExp["$1"]
    engine.khtml = browser.konq = parseFloat(engine.ver)
  } else if (/rv:([^\)]+)\) Gecko\/d{8}/.test(ua)) {
    engine.ver = RegExp["$1"]
    engine.gecko = parseFloat(engine.ver)

    //确定是不是Firefox
    if (/Firefox\/(\S+)/.test(ua)) {
      browser.ver = RegExp["$1"]
      browser.firefox = parseFloat(browser.ver)
    }
  } else if (/MSIE ([^;]+)/.test(ua)) {
    engine.ver = browser.ver = RegExp["$1"]
    engine.ie = browser.ie = parseFloat(engine.ver)
  }

  return {
    engine: engine,
    browser: browser,
    system: system
  }
}
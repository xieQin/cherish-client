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

  var ua = navigator.userAgent

  return {
    engine: engine,
    browser: browser,
    system: system
  }
}
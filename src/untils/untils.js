// 属性----------------
const pageTopStyle = {
  'background': '#347ebd'
};


// methods-------------方法
// 获取随机数方法
function getRandom() {
  var tem = Math.round(Math.random() * 100)
  return tem;
}

// 是否为空
var isNullOrEmpty = function (val) {
  if (typeof val == 'undefined') {
    return true
  }

  if (val == null || val === "") {
    return true
  }
  if (toStr(val).length == 0) {
    return true
  }

  if (toStr(val).trim().length == 0) {
    return true
  }
  return false
}

// 转为字符串
var toStr = function (v) {
  if (v == null) {
    return ''
  }
  return v + ''
}


export default {
  // 属性
  pageTopStyle,
  // 方法

  getRandom,
  isNullOrEmpty,
  toStr
}

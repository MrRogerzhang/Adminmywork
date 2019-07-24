/**
 * Created by linxin on 2017/3/11.
 */
const localEvent = function (item) {
  this.get = function () {
    console.log(localStorage.getItem(item))
      return localStorage.getItem(item) ? JSON.parse(localStorage.getItem(item)) : '';
  }
  this.set = function (obj) {
    console.log(obj)
      localStorage.setItem(item, JSON.stringify(obj));
  }
  this.clear = function () {
      localStorage.removeItem(item);
  }
}

export const local = new localEvent();
export const theme_local = new localEvent('lx_theme');
export const getDate = () => { //获取当天日期
  const date = new Date(),
      mouth = parseInt(date.getMonth()) + 1;
  return date.getFullYear() + '-' + mouth + '-' + date.getDate();
}

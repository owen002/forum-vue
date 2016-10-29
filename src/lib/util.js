/**
 * 格式化date类
 * @param date
 * @param fmt
 * @returns {*}
 */
let util;

const resolveTime = function (tt) {
  return tt < 10 ? '0' + tt : tt;
}

const formatDate = function (date, fmt) {
  date = date || new Date();          //初始化参数
  fmt = fmt || 'YYYY-MM-DD hh:mm:ss';

  let year = date.getFullYear();
  let mon = resolveTime(date.getMonth() + 1);
  let day = resolveTime(date.getDate());
  let hour = resolveTime(date.getHours());
  let min = resolveTime(date.getMinutes());
  let sec = resolveTime(date.getSeconds());

  return fmt.replace(/YYYY/g, year)
    .replace(/MM/g, mon)
    .replace(/DD/g, day)
    .replace(/hh/g, hour)
    .replace(/mm/g, min)
    .replace(/ss/g, sec)
}
util = {
  formatDate
}

export default util

/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
  let arr = [];
  str = str.split(',');
  str = str.join(' ');
  str = str.split(' ');
  for (let i = 0; i < str.length; i++) {
    str[i] = parseFloat(str[i]);
    if (isNaN(str[i]) === false) {
      arr[i] = str[i];
    }
  } str = str.filter(function (v) {
    return v === +v;
  });
  let MinMax = {
    min: Math.min(...str),
    max: Math.max(...str)
  };
  return MinMax;
}
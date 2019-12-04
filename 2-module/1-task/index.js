/**
 * Клонируем объект
 * @param {Object} obj - клонируем объект
 * @returns {Object}
 */
function clone(obj) {
  let newObj = {};
  for (let i in obj) {
    if (obj[i] != null && typeof (obj[i]) == 'object') {
      newObj[i] = clone(obj[i]);
    } else {
      newObj[i] = obj[i];
    } 
  } return newObj;
 
}
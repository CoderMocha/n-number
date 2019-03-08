const util = require('./_util');

module.exports = function numFormat(num, dec) {
  const _ = util.paramHandler(num);
  dec = util.isEmpty(dec) ? 0 : dec;
  let result;
  switch (_.t) {
    case 'num': {
      result = execution(num, dec);
      break;
    }
    case 'arr': {
      result = [];
      _.p.forEach(item => {
        result.push(item === 'err' ? 'NAN' : execution(item, dec));
      });
      break;
    }
    default:
      result = 'NAN';
  }
  return result;
};

function execution(num, dec) {
  let numStr = num + '';
  let flag = numStr.indexOf('.') === -1;
  let result;
  if (flag) {
    result = num.toFixed(dec).replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g, '$&,');
  } else {
    let i = (parseInt(num) + '').replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g, '$&,');
    let f = ((num - parseInt(num)).toFixed(dec)+'').substr(1);
    result = i + f;
  }
  return result;
}
const util = require('./_util');

module.exports = function numToRoman(num) {
  const _ = util.paramHandler(num);
  let result;
  switch (_.t) {
    case 'num': {
      result = execution(_.p);
      break;
    }
    case 'arr': {
      result = [];
      _.p.forEach(item => {
        result.push(item === 'err' ? 'NAN' : execution(item));
      });
      break;
    }
    default:
      result = 'NAN';
  }
  return result;
};

function execution(num) {
  let ans = "";
  const k = Math.floor(num / 1000);
  const h = Math.floor((num % 1000) / 100);
  const t = Math.floor((num % 100) / 10);
  const o = num % 10;
  const one = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
  const ten = ['X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'];
  const hundred = ['C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'];
  const thousand = 'M';
  for (let i = 0; i < k; i++) {
    ans += thousand;
  }
  if (h)
    ans += hundred[h - 1];
  if (t)
    ans += ten[t - 1];
  if (o)
    ans += one[o - 1];
  return ans;
}
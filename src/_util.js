module.exports = {
  paramHandler(param) {
    let _ = {
      t: '',
      p: 0,
    };
    if (typeof param === 'number') {
      _.t = 'num';
      _.p = parseInt(param);
    } else if (typeof param === 'string') {
      if (!isNaN(Number(param))) {
        _.t = 'num';
        _.p = parseInt(param);
      } else {
        _.t = 'err';
        _.p = 0;
      }
    } else {
      if (param instanceof Array) {
        let arr = [];
        param.forEach((item) => {
          if (typeof param === 'number') {
            arr.push(parseInt(item));
          } else if(!isNaN(Number(item))) {
            arr.push(parseInt(item));
          } else {
            arr.push('err');
          }
        });
        _.t = 'arr';
        _.p = arr;
      } else {
        _.t = 'err';
        _.p = 0;
      }
    }
    return _;
  }
};
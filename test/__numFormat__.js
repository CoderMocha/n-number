const nNumber = require('../src/index');

nNumber.numFormat(100, 0); // 100

nNumber.numFormat(100000.123456789, 3); // 100,000.123

nNumber.numFormat(100000.123456789, 0); // 100,000

nNumber.numFormat(3.1415926, 6); // 3.141593

nNumber.numFormat('987654321.123456789', 4); // 987,654,321.1235

nNumber.numFormat(['1000', 10000.123456], 2); // [ '1,000.00', '10,000.00' ]

nNumber.numFormat('a', 0); // NAN

nNumber.numFormat({a: 123}, 2); // NAN

nNumber.numFormat(null, 2); // NAN

nNumber.numFormat(undefined, 2); // NAN
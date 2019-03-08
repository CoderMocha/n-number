const nNumber = require('../src/index');

nNumber.numToRoman(1); // 'I'

nNumber.numToRoman('2'); // 'II'

nNumber.numToRoman('a'); // 'NAN'

nNumber.numToRoman([1, 'a', '2']); // '['I','NAN','II']'

nNumber.numToRoman(undefined); // 'NAN'

nNumber.numToRoman(null); // 'NAN'

nNumber.numToRoman({}); // 'NAN'


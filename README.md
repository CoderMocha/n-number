# n-number
A Digital processing plugin for NelumboUI.
# Installing
Using npm
```bash
$ npm install n-number
```
or
```bash
$ yarn add n-number
```
# Example
### numToRoman(param) 
Number to Roman numerals,
if param is a `number`, a `string` can be converted into numbers or a `array`,
this method return a Roman numerals like 'I'.

if param is other type such as a `object` or a `string` can not be converted into numbers,
the method return 'NAN'.
```ecmascript 6
const {numToRoman} from 'n-number';

numToRoman(1); // output: 'I'

numToRoman('2'); // output: 'II'

numToRoman('a'); // output: 'NAN'

numToRoman([1,'2','a']); // output: ['I','II','NAN']

numToRoman(undefined); // output: 'NAN'

numToRoman(null); // output: 'NAN'

numToRoman({}); // output: 'NAN'
```
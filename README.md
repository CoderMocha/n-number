# n-number
A Digital processing plugin for NelumboUI.
# Installing
Using npm
```bash
$ npm install n-number
```
or Using yarn
```bash
$ yarn add n-number
```
# Example
### numFormat(param, dec)
Number format,this method return formatted number like '1,000.00'.

|param|type|default|description|
|-----|----|-------|-----------|
|num|Number/String/Array\<Number\>|--|`param` is a `Number`, a `String` can be converted into numbers or a `Array`|
|dec|Number|0|`dec` is number of digits reserved after decimal point.|
 ```ecmascript 6
 const {numFormat} from 'n-number';
 
 numFormat(100, 0); // 100
 
 numFormat(100000.123456789, 3); // 100,000.123
 
 numFormat(100000.123456789, 0); // 100,000
 
 numFormat(3.1415926, 6); // 3.141593
 
 numFormat('987654321.123456789', 4); // 987,654,321.1235
 
 numFormat(['1000', 10000.123456], 2); // [ '1,000.00', '10,000.00' ]
 
 numFormat('a', 0); // NAN
 
 numFormat({a: 123}, 2); // NAN
 
 numFormat(null, 2); // NAN
 
 numFormat(undefined, 2); // NAN
 ```
### numToRoman(param) 
Number to Roman numerals,this method return a Roman numerals like 'IV'.

|param|type|default|description|
|-----|----|-------|-----------|
|num|Number/String/Array\<Number\>|--|`param` is a `Number`, a `String` can be converted into numbers or a `Array`|
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

 
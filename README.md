# Light String Utils

<!-- [![npm](https://img.shields.io/npm/dm/light-string-utils.svg)](https://www.npmjs.com/package/light-string-utils) -->

A light weight utility collection on string having size of < 1k (gzipped: 447)

## Install

```bash
$ npm install light-string-utils --save
```

## Usage

<!--
```javascript
// ES2015+
import * as stringz from 'stringz'; // OR:
import { limit, substring, length, substr } from 'stringz';
``` -->

```javascript
// CommonJS
const ltStringUtils = require("light-string-utils"); // OR:
const { length, limit, subString, toArray } = require("ltStringUtils");
```

- [`length()`](#length)
- [`limit()`](#limit)
- [`subString()`](#substring)
- [`toArray()`](#toarray)

### Length

    function length(str)

| Param | Type                | Default | Description          |
| ----- | ------------------- | ------- | -------------------- |
| str   | <code>String</code> | _none_  | To get string length |

#### Examples

```javascript
length("You are my world"); // 16
```

### Limit String to character count and add a string either side

    function limit(str[, strLimit[, padSide[, padString]]])

| Param     | Type                | Default              | Description                                               |
| --------- | ------------------- | -------------------- | --------------------------------------------------------- |
| str       | <code>String</code> | _none_               | The string to be limited                                  |
| strLimit  | <code>Number</code> | _none_               | Required string length                                    |
| padSide   | <code>String</code> | <code>"right"</code> | Padding side: <code>"right"</code> or <code>"left"</code> |
| padString | <code>String</code> | <code>"..."</code>   | String to pad the output with                             |

#### Examples

```javascript
// Truncate:
limit("Its a light weight package.", 20); // "Its a light weight p..."

// Pad:
limit("This is a new line", 10, "left", "123 "); // "123 This is a"
```

### SubString

    function subString(str, start[, countFromStart])

| Param          | Type                | Default                        | Description                                      |
| -------------- | ------------------- | ------------------------------ | ------------------------------------------------ |
| str            | <code>String</code> | _none_                         | String to be devided                             |
| start          | <code>Number</code> | _none_                         | Start position                                   |
| countFromStart | <code>Number</code> | End of string from start value | The number of characters from the start position |

#### Examples

```javascript
subString("Be happy to contribute to open source", 6, 18); // "py to contribute t"
```

### ToArray

    function toArray(str)

| Param | Type                | Default | Description                     |
| ----- | ------------------- | ------- | ------------------------------- |
| str   | <code>String</code> | _none_  | String to be converted to array |

#### Examples

```javascript
toArray("This is a good day"); // "['T', 'h', 'i', 's', ' ', 'i', 's', ' ', 'a', ' ', 'g', 'o', 'o', 'd', ' ', 'd', 'a', 'y']"
```

## Test

```bash
$ npm test
```

## License

This software is released under the
[MIT License](http://sallar.mit-license.org/).

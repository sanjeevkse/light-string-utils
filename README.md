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

## Benchmark

This library scores high in a length benchmark (it's intended usage) and should
be fast for most use case.

```
Stringz .length (accurate) x 861,039 ops/sec ±1.57% (84 runs sampled)
Lodash .toArray (accurate) x 795,108 ops/sec ±2.13% (82 runs sampled)
Emoji Aware .split (inaccurate) x 2,269 ops/sec ±1.38% (85 runs sampled)
Spliddit .length (inaccurate) x 487,718 ops/sec ±2.21% (83 runs sampled)
UTF8 Length (inaccurate) x 232,918 ops/sec ±1.02% (87 runs sampled)
Fastest is Stringz .length
```

To run benchmarks yourself:

```bash
$ cd ./benchmark
$ npm install
$ node run.js
```

## Changelog

[Moved to CHANGELOG.md](CHANGELOG.md)

## License

This software is released under the
[MIT License](http://sallar.mit-license.org/).

# Light String Utils

<!-- [![npm](https://img.shields.io/npm/dm/light-string-utils.svg)](https://www.npmjs.com/package/light-string-utils) -->

A light weight utility collection on string having size of < 1k (gzipped: 447)

## Install

```bash
$ npm install light-string-utils --save
```

## Found a bug?

As its an early release, there might be some bugs. Please feel free to open an issue [here](https://github.com/sanjeevkse/light-string-utils/issues)

## Usage

<!--
```javascript
// ES2015+
import * as light-string-utils from 'light-string-utils'; // OR:
import { limit, substring, length, substr } from 'light-string-utils';
``` -->

```javascript
// CommonJS
const ltStringUtils = require("light-string-utils"); // OR:
const { length, limit, subString, toArray } = require("ltStringUtils");
```

- [`abbreviate()`](#abbreviate)
- [`capitalize()`](#capitalize)
- [`deCapitalize()`](#deCapitalize)
- [`escapeHTML()`](#escapeHTML)
- [`first()`](#first)
- [`last()`](#last)
- [`length()`](#length)
- [`limit()`](#limit)
- [`pad()`](#pad)
- [`replaceBy()`](#replaceBy)
- [`sentenceCase()`](#sentenceCase)
- [`slugify()`](#slugify)
- [`subString()`](#substring)
- [`titleCase()`](#titleCase)
- [`toArray()`](#toarray)

### Abbreviate

    function abbreviate(str)

| Param | Type                | Default | Description             |
| ----- | ------------------- | ------- | ----------------------- |
| str   | <code>String</code> | _none_  | String for abbreviation |

#### Examples

```javascript
abbreviate("You are my world"); // Yamw
```

### Capitalize

    function capitalize(str)

| Param | Type                | Default | Description               |
| ----- | ------------------- | ------- | ------------------------- |
| str   | <code>String</code> | _none_  | String for capitalization |

#### Examples

```javascript
capitalize("keep WORKING!!"); // Keep working!!
```

### DeCapitalize

    function deCapitalize(str)

| Param | Type                | Default | Description                  |
| ----- | ------------------- | ------- | ---------------------------- |
| str   | <code>String</code> | _none_  | String for De Capitalization |

#### Examples

```javascript
deCapitalize("keep WORKING!!"); // keep WORKING!!
```

### escapeHTML

    function escapeHTML(str)

| Param | Type                     | Default | Description |
| ----- | ------------------------ | ------- | ----------- |
| str   | <code>HTML String</code> | _none_  | HTML string |

#### Examples

```javascript
escapeHTML("<p>keep <b>WORKING!!</b></p>"); // &lt;p&gt;keep &lt;b&gt;WORKING!!&lt;/b&gt;&lt;/p&gt;
```

### first

    function first(str, characterCount)

| Param          | Type                | Default | Description                                          |
| -------------- | ------------------- | ------- | ---------------------------------------------------- |
| str            | <code>String</code> | _none_  | String                                               |
| characterCount | <code>Number</code> | 1       | The number of characters to fetch from 0th character |

#### Examples

```javascript
first("Have a great day", 4); // Have
```

### last

    function last(str, characterCount)

| Param          | Type                | Default | Description                                          |
| -------------- | ------------------- | ------- | ---------------------------------------------------- |
| str            | <code>String</code> | _none_  | String                                               |
| characterCount | <code>Number</code> | 1       | The number of characters to fetch from 0th character |

#### Examples

```javascript
last("Have a great day", 6); // at day
```

### Length

    function length(str)

| Param | Type                | Default | Description          |
| ----- | ------------------- | ------- | -------------------- |
| str   | <code>String</code> | _none_  | To get string length |

#### Examples

```javascript
length("You are my world"); // 16
```

### Limit

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

### pad

    function pad(str, side, padWith)

| Param   | Type                           | Default | Description                   |
| ------- | ------------------------------ | ------- | ----------------------------- |
| str     | <code>String</code>            | _none_  | String                        |
| side    | <code>right/ left/ both</code> | _none_  | The side which                |
| padWith | <code>String</code>            | _none_  | String to pad left/right/both |

#### Examples

```javascript
pad("Have a great day", "both", "__"); // __Have a great day__
```

### replaceBy

    function replaceBy(str, searchReplaceObj)

| Param            | Type                | Default | Description  |
| ---------------- | ------------------- | ------- | ------------ |
| str              | <code>String</code> | _none_  | String       |
| searchReplaceObj | <code>object</code> | _none_  | {key: value} |

#### Examples

```javascript
replaceBy("Have a great day. Mr. {{firstName}}", { firstName: "Lion" }); // Have a great day. Mr. Lion
```

### sentenceCase

    function sentenceCase(str)

(supports only full stops for now)

| Param | Type                | Default | Description |
| ----- | ------------------- | ------- | ----------- |
| str   | <code>String</code> | _none_  | String      |

#### Examples

```javascript
sentenceCase(
  "hey charming. welcome to right place. have a great day. Feel free to use it."
); // Hey charming. Welcome to right place. Have a great day. Feel free to use it.
```

### slugify

    function slugify(str)

| Param | Type                | Default | Description |
| ----- | ------------------- | ------- | ----------- |
| str   | <code>String</code> | _none_  | String      |

#### Examples

```javascript
slugify(
  "hey charming. welcome to right place. have a great day. Feel free to use it."
); // hey-charming-welcome-to-right-place-have-a-great-day-feel-free-to-use-it
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

### titleCase

    function titleCase(str)

| Param | Type                | Default | Description |
| ----- | ------------------- | ------- | ----------- |
| str   | <code>String</code> | _none_  | String      |

#### Examples

```javascript
titleCase(
  "hey charming. welcome to right place. have a great day. Feel free to use it."
); // Hey Charming. Welcome To Right Place. Have A Great Day. Feel Free To Use It.
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

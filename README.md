# Light String Utils

[![Buy me a coffee](https://img.shields.io/badge/Buy%20me%20-a%20coffee-048754?logo=buymeacoffee)](https://buymeacoffee.com/sanjeevkse4)
[![npm](https://img.shields.io/npm/v/light-string-utils.svg?orange=blue)](https://www.npmjs.com/package/light-string-utils)
[![npm](https://img.shields.io/npm/l/light-string-utils.svg)](https://www.npmjs.com/package/light-string-utils)
[![npm](https://img.shields.io/npm/dm/light-string-utils.svg)](https://www.npmjs.com/package/light-string-utils)
[![Coverage Status](https://coveralls.io/repos/github/sanjeevkse/light-string-utils/badge.svg?branch=main)](https://coveralls.io/github/sanjeevkse/light-string-utils?branch=main)

A light weight utility collection on string. Without any external dependencies.

The unit test cases are generated by our app [UnitRunner.app](https://unitrunner.app/)

Happy coding!

# Found any bugs/features?

Please feel free to open an issue. I shall be happy to help soon.
[Click here](https://github.com/sanjeevkse/light-string-utils/issues)

## Install

```bash
$ npm install light-string-utils --save
```

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
const { length } = require("light-string-utils");
```

[//]: START GENERATED CODE
- [`abbreviate()`](#abbreviate)
- [`capitalize()`](#capitalize)
- [`center()`](#center)
- [`deCapitalize()`](#deCapitalize)
- [`endsWith()`](#endsWith)
- [`equalsIgnoreCase()`](#equalsIgnoreCase)
- [`escapeHTML()`](#escapeHTML)
- [`first()`](#first)
- [`isAlNum()`](#isAlNum)
- [`isAlpha()`](#isAlpha)
- [`last()`](#last)
- [`length()`](#length)
- [`limit()`](#limit)
- [`occurance()`](#occurance)
- [`pad()`](#pad)
- [`repeat()`](#repeat)
- [`replaceBy()`](#replaceBy)
- [`sentenceCase()`](#sentenceCase)
- [`slugify()`](#slugify)
- [`subString()`](#subString)
- [`titleCase()`](#titleCase)
- [`toArray()`](#toArray)
- [`worldCount()`](#worldCount)
## abbreviate

Abbreviates a string by returning the first character of each word.


### Parameters

| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| str | {string} | _none_ | The input string to be abbreviated. |
### Returns

{string} - The abbreviated string. 

### Examples

```js
abbreviate("Hello World"); // Returns "HW"
abbreviate(" "); // Returns ""
abbreviate("test"); // Returns "t"
```

## capitalize

Capitalizes the first letter of a string and converts the rest to lowercase.


### Parameters

| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| str | {string} | _none_ | The input string to be capitalized. |
### Returns

{string} - The capitalized string. 

### Examples

```js
capitalize("hello world"); // returns "Hello world"
capitalize("hElLo wOrLD"); // returns "Hello world"
capitalize(" A "); // returns "A"
capitalize(""); // returns ""
capitalize(null); // throws Error "Invalid string served"
capitalize(123); // throws Error "Invalid string served"
```

## center

Center aligns the given string within a new string of the specified length, padded with the specified character.


### Parameters

| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| str | {string} | _none_ | The string to center align. |
| totalStringLength | {number} | _none_ | The total length of the resulting string. |
| paddingCharacter | {string} | " " | The character to use for padding. Defaults to a space. |
### Returns

{string} - A new string of the specified length, with the original string centered and padded. 

### Examples

```js
center("Hello World", 20); // Returns "    Hello World     "
center("Hello World", 20, "*"); // Returns "****Hello World*****"
```

## deCapitalize

De-capitalizes the first letter of a string.


### Parameters

| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| str | {string} | _none_ | The string to de |
### Returns

{string} - A new string with the first letter de 

### Examples

```js
deCapitalize("Hello World"); // Returns "hello World"
deCapitalize(" "); // Returns ""
deCapitalize("test"); // Returns "test"
```

## endsWith

Checks if a string ends with the specified substring.


### Parameters

| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| str | {string} | _none_ | The string to center align. |
| compareSubString | {string} | _none_ | The substring to compare. |
### Returns

{boolean} - A boolean indicating if the string ends with the specified substring. 

### Examples

```js
endsWith("Hello World", "World"); // Returns true
endsWith("Hello World", "Worlds"); // Returns false
endsWith("Hello World", " "); // Returns false
endsWith("Hello World", "Hello World"); // Returns true
```

## equalsIgnoreCase

Checks if two strings are equal ignoring the case.


### Parameters

| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| str1 | {string} | _none_ | The first string to compare. |
| str2 | {string} | _none_ | The second string to compare. |
### Returns

{boolean} - A boolean indicating if the strings are equal ignoring the case. 

### Examples

```js
equalsIgnoreCase("Hello World", "hello world"); // Returns true
equalsIgnoreCase("Hello World", "hello worlds"); // Returns false
equalsIgnoreCase("Hello World", " "); // Returns false
equalsIgnoreCase("Hello World", "Hello World"); // Returns true
```

## escapeHTML

Escapes HTML characters.


### Parameters

| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| str | {string} | _none_ | The string to escape. |
### Returns

{string} - The escaped string. 

### Examples

```js
escapeHTML("<p>hello world</p>"); // returns "&lt;p&gt;hello world&lt;/p&gt;"
escapeHTML("hello world"); // returns "hello world"
escapeHTML("hello & world"); // returns "hello &amp; world"
escapeHTML("hello < world"); // returns "hello &lt; world"
```

## first

Returns the first character of a string.


### Parameters

| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| str | {string} | _none_ | The string to get the first character from. |
| characterCount | {number} | 1 | The number of characters to return. |
### Returns

{string} - The first character of the string. 

### Examples

```js
first("Hello World"); // Returns "H"
first(" "); // Returns ""
first("test"); // Returns "t"
first("Hello World", 2); // Returns "He"
```

## isAlNum

Checks if the string contains only alphanumeric characters.


### Parameters

| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| str | {string} | _none_ | The string to check. |
### Returns

{boolean} - A boolean indicating if the string contains only alphanumeric characters. 

### Examples

```js
isAlNum("Hello World"); // Returns false
isAlNum("HelloWorld"); // Returns true
isAlNum("HelloWorld123"); // Returns true
isAlNum("Hello World123"); // Returns false
```

## isAlpha

Checks if the string contains only alphanumeric characters.


### Parameters

| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| str | {string} | _none_ | The string to check. |
### Returns

{boolean} - A boolean indicating if the string contains only alphanumeric characters. 

### Examples

```js
isAlpha("Hello World"); // Returns false
isAlpha("HelloWorld"); // Returns true
isAlpha("HelloWorld123"); // Returns false
isAlpha("Hello World123"); // Returns false
```

## last

Returns the last character of a string.


### Parameters

| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| str | {string} | _none_ | The string to get the last character from. |
| characterCount | {number} | 1 | The number of characters to return. |
### Returns

{string} - The last character of the string. 

### Examples

```js
last("Hello World"); // Returns "d"
last(" "); // Returns ""
last("test"); // Returns "t"
last("Hello World", 2); // Returns "ld"
```

## length

Returns the length of a string.


### Parameters

| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| str | {string} | _none_ | The string to get the length of a string. |
### Returns

{number} - The length of the string. 

### Examples

```js
length("Hello World"); // Returns 11
length(" "); // Returns 1
length("test"); // Returns 4
```

## limit

Limits the length of a string.


### Parameters

| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| str | {string} | _none_ | The string to limit. |
| strLimit | {number} | _none_ | The limit of the string. |
| padSide | {string} | "right" | The side to pad the string. |
| padString | {string} | "..." | The string to pad the string with. |
### Returns

{string} - The limited string. 

### Examples

```js
limit("Hello World", 5); // Returns "Hello..."
limit("Hello World", 4, "left"); // Returns "...Hello "
limit("Hello World", 4, "left", "!!!"); // Returns "!!!Hello"
```

## occurance

Returns the indices of the finding string in the input string.


### Parameters

| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| str | {string} | _none_ | The input string (target string). |
| findStr | {string} | _none_ | The finding string. |
| caseSensitive | {string} | false | Should it be case sensitive or in |
### Returns

{number[]} - The starting indices of the occurances. 

### Examples

```js
occurance("Hello World!!, Hello all", "Hellow"); // Returns []
occurance("You are great as usual", " "); // Returns [3, 7, 13, 16]
occurance("Contributing to the open source encourages mutual side benefits"); // Returns [3, 8, 13, 16, 45, 61]
```

## pad

Pads a string with another string.


### Parameters

| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| str | {string} | _none_ | The string to pad. |
| side | {string} | _none_ | The side to pad the string (left | right | both). |
| padWith | {string} | _none_ | The string to pad the string with. |
### Returns

{string} - The padded string. 

### Examples

```js
pad("Hello World", "left", "!!!"); // Returns "!!!Hello World"
pad("Hello World", "right", "!!!"); // Returns "Hello World!!!"
pad("Hello World", "both", "!!!"); // Returns "!!!Hello World!!!"
pad("Hello World", "both"); // Returns "Hello World"
```

## repeat

repeats a string by defined times.


### Parameters

| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| item | {item} | _none_ | The input string/number to be repeated. |
| times | {number} | 1 | The number of times to repeat the string. |
| delimiter | {string} | "" | The delimiter to be used between the repeated strings. |
### Returns

{string} - The repeated string. 

### Examples

```js
repeat("san"); // Returns "san"
repeat("san", 4); // Returns "sansansansan"
repeat("test ", 2); // Returns "test test"
```

## replaceBy

Replaces all the occurrences of a string with another string.


### Parameters

| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| str | {string} | _none_ | The string to replace. |
| searchReplaceObj | {string} | _none_ | The object containing the search and replace strings. |
### Returns

{string} - The replaced string. 

### Examples

```js
replaceBy("{{{Hello}}} {{{World}}}", { "Hello": "Hi", "World": "Earth" }); // Returns "Hi Earth"
replaceBy("{{{Hello}}} World", { "Hello": "Hi" }); // Returns "Hi World"
replaceBy("{{{Hello}}} {{{World}}}", { "Hello": "Hi", "World": "Earth", "Earth": "World" }); // Returns "Hi World"
```

## sentenceCase

Converts a string to sentence case.


### Parameters

| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| str | {string} | _none_ | The string to convert. |
### Returns

{string} - The converted string. 

### Examples

```js
sentenceCase("hello world"); // Returns "Hello world"
sentenceCase("hello world."); // Returns "Hello world."
```

## slugify

Converts a string to a slug.


### Parameters

| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| str | {string} | _none_ | The string to convert. |
### Returns

{string} - The converted string. 

### Examples

```js
slugify("Hello World"); // Returns "hello-world"
slugify("Hello World!"); // Returns "hello-world"
slugify("Hello World!@#$%^&*()"); // Returns "hello-world"
```

## subString

Returns a substring of a string.


### Parameters

| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| str | {string} | _none_ | The string to get the substring from. |
| start | {number} | 0 | The index to start the substring from. |
| countFromStart | {number} | undefined | The number of characters to return. |
### Returns

{string} - The substring of the string. 

### Examples

```js
subString("Hello World"); // Returns "Hello World"
subString(" "); // Returns " "
subString("Hello World", 2); // Returns "llo World"
subString("Hello World", 2, 3); // Returns "llo"
```

## titleCase

Converts a string to title case.


### Parameters

| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| str | {string} | _none_ | The string to convert. |
### Returns

{string} - The converted string. 

### Examples

```js
titleCase("hello world"); // Returns "Hello World"
titleCase("hello world!@#$%^&*()"); // Returns "Hello World!@#$%^&*()"
```

## toArray

Converts a string to an array.


### Parameters

| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| str | {string} | _none_ | The string to convert. |
| explodeBy | {string} | "" | The separator to use. |
### Returns

{string[]} - The converted string. 

### Examples

```js
toArray("Hello World", " "); // Returns ["Hello", "World"]
toArray("test"); // Returns ["t", "e", "s", "t"]
```

## worldCount

Counts the number of words seperated by spaces or the given seperator.


### Parameters

| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| str | {string} | _none_ | The string to convert. |
| explodeBy | {string} | "" | The separator to use. |
### Returns

{number} - The word count. 

### Examples

```js
worldCount("Hello World", " "); // Returns 2
wc("test me!"); // Returns 2
```


[//]: END GENERATED CODE

## Test

```bash
$ npm test
```

## License

This software is released under the
[MIT License](http://sallar.mit-license.org/).

# regular_expressions cheat sheet

## Defining a pattern

```javascript
var regex = /hello/;
```

## methods

### exec: return the result in an array if there is a match or null if not

```javascript
var $pattern = /hello/;
$pattern.exec('hello');
// returns [ 'hello', index: 0, input: 'hello there', groups: undefined ]

$pattern.exec('something else');
// returns null
```

### test: return true or false based on matching pattern

```javascript
var $pattern = /hello/;
$pattern.test('hello');
// returns true

$pattern.test('something else');
// returns false
```

### match: return the same result as exec if there is a match or null if not

```javascript
var $str = 'hello';
$str.match(/hello/);
// returns [ 'hello', index: 0, input: 'hello there', groups: undefined ]

$str.match('something else');
// returns null
```

### search: returns index of first match if not returns -1

```javascript
var $str = 'hello there';
$str.search(/hello/);
// returns 0

$str.search(/there/);
// returns 6

$str.search(/something/);
// returns -1
```

### replace: return new string with some or all matches of a pattern

```javascript
var $str = 'hello there';

$str.replace(/hello/, 'Howdy');
```

## Flags

### i : case insensitive

```javascript
var $pattern = /hello/i;

$pattern.test('Hello');
// returns true

$pattern.test('hero');
// returns false
```

### g : global, look for all instances

```javascript
var $pattern = /hello/g;

$pattern.exec('hello there hello');
// returns [ 'hello', index: 0, input: 'hello there hello', groups: undefined ]

$pattern.exec('hello');
// returns null : https://stackoverflow.com/questions/11270302/javascript-how-to-get-multiple-matches-in-regex-exec-results

$pattern.exec('something');
// returns null
```

## Metacharacters

### ^ : Must start with

```javascript
var $pattern = /^d/;

$pattern.test('dog');
// returns true

$pattern.test('cat');
// returns false
```

### \$ : must end with

```javascript
var $pattern = /o$/;

$pattern.test('hello');
// returns true

$pattern.test('dog');
// returns false
```

### . : any one character

```js
var $pattern = /h.llo/;

$pattern.test('hello');
// returns true

$pattern.test('hrllo');
// returns true

$pattern.test('heddo');
// returns false
```

### \* : any character 0 or more

```js
var $pattern = /h*llo/;

$pattern.test('heeeeeeeeeeeeeeello');
// returns true

$pattern.test('herer7&&&SDFasdf7llo');
// returns true

$pattern.test('hello!!!');
// returns false

$pattern.test('hllo');
// returns true
```

### ? : optional character

```js
var $pattern = /gre?a?y/;

$pattern.test('grey');
// returns true

$pattern.test('gray');
// returns true

$pattern.test('groy');
// returns false

$pattern.test('gry');
// return true
```

### \ : escape character

```js
var $pattern = /gray\?/;

$pattern.test('gray?');
// returns true

$pattern.test('gray');
// returns false
```

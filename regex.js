/**
 * METHODS
 */

// regular expression pattern
let regex = /hello/;

// exec()
let result = regex.exec('hello world');
result = regex.exec('wordhelloword');
result = regex.exec('Hello');
result = regex.exec('hello')[0];
result = regex.exec('hello').index;
result = regex.exec('hello').input;
result = regex.exec('wordhelloword');

// test()
if (regex.test('hello')) {
	result = regex.test('Hello');
	result = regex.test('hello');
} else {
	console.log('Not a match');
}

let str = 'hello there';

// match()
result = str.match(regex);

// search()
result = str.search(regex);
result = str.search(/walrus/);
result = str.search(/there/);

// replace()
result = str.replace(regex, 'Howdy');
// console.log(str);

var $pattern = /hello/g;

// result = $pattern.exec('hello there hello');
// returns

result = $pattern.exec('hello');
// returns

// WTF? https://stackoverflow.com/questions/11270302/javascript-how-to-get-multiple-matches-in-regex-exec-results

console.log(result);

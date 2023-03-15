#!/usr/bin/node

arg = process.argv[2];

if ((process.argv.length > 2) && (typeof(arg / 1) === 'number')) {
	console.log(`My number is: ${arg}`);
} else {
	console.log('Not a number');
}

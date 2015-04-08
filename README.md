# node-json-math
Package for expressing mathematical operations in JSON. Useful for storing mathematical procedures in a database.
## Examples of use
```javascript
var JSONMath = require('json-math');
var math = new JSONMath();
var result = math.execute({
	"a": {
		"operation": "+",
		"variables": [
			2,
			2
		]
	},
	"b": {
		"operation": "-",
		"variables": [
			5,
			1
		]
	},
	"c": {
		"operation": "*",
		"variables": [
			2,
			2
		]
	},
	"d": {
		"operation": "/",
		"variables": [
			8,
			2
		]
	}
});
```
After this has executed, the value of `a` , `b`, `c` and `d` will be 4.

You can also pass in an array of operations to perform, and even reference variables inside the procedure
``` javascript
[
	{
		"a": 3,
		"b": 4
	},
	{
		"c": {
			"operation": "+",
			"variables": [
				"a",
				"b"
			]
		}
	},
	{
		"c": "c"
	}
]
```
After this the value of `a` will be 3, `b` will be 4 and `c` will be 7.

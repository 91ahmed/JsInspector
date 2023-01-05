## Js-Inspector
### Pure javascript library to validate your application's incoming data. It includes several validation rules that you may apply to the data.

#### How to use
``` html
<!-- Include this file 'src/js-inspector' in your project -->
<script src="src/js-inspector.js"></script>
```
#### Example
``` javascript
// Create new instance from JsInspector
const inspect = new JsInspector()

// Add your validation rules
inspect.data('ahmed').field('username').alpha().required()
inspect.data('ahmed@gmail.com').field('email').email().required()
inspect.data('12345678').field('password').max(30).min(8).required()

// Check whether the validation process is successful or not
if(inspect.valid()){
	// (true - success) the data is valid
} else {
	// (false - fail) the data is not valid

	// Display errors
	console.log(inspect.errors())
}
```
#### Available validation rules
``` required() ```
##### The field must be not empty and it considered "empty" if the value is null or empty string or array.

``` email() ```
##### Must be a valid email address.

``` numeric() ```
##### It should only include "whole numbers" (0,1,2,3..) without negative, fractions or decimals.

``` integer() ```
##### It should only include "integers numbers" that can be positive, negative, or zero.
## Js-Inspector
<dd> Pure javascript library to validate your application's incoming data. It includes several validation rules that you may apply to the data. </dd>

#### # How to Use
``` html
<!-- Include this file 'src/js-inspector' in your project -->
<script src="src/js-inspector.js"></script>
```
#### # Example
``` javascript
// Create new instance from JsInspector
const inspect = new JsInspector()

// Add your validation rules
inspect.data('ahmed')
       .field('username')
       .alpha()
       .required()

inspect.data('ahmed@gmail.com')
       .field('email')
       .email()
       .required()

inspect.data('12345678')
       .field('password')
       .max(30).min(8)
       .required()

// Check whether the validation process is successful or not
if(inspect.valid()){
   // (true - success) the data is valid
} else {
   // (false - fail) the data is not valid

   // Display errors
   console.log(inspect.errors())
}
```
#### # Available Validation Rules
` required() `
> The data must be not empty and it considered **_empty_** if the value is **_null_** or empty string or array.

` numeric() `
> Should only contain **_whole numbers_** (0,1,2,3..) without negative, fractions or decimals.

` integer() `
> Should only contain **_integer numbers_** that can be positive, negative, or zero.

` email() `
> Must be a valid email address.

` decimal() `
> The data under validation must be numeric contains **_whole and a fractional_**.

` alpha() `
> The data must contain only alphabetic characters **_(letters)_**.

` alphas() `
> Similar to `alpha()` but accept spaces **_(letters, spaces)_**.

` alnum() `
> The data must contain only alphanumeric characters **_(letters, numbers)_**.

` alnums() `
> Similar to `alnum()` but accept spaces **_(letters, numbers, spaces)_**.

` url() `
> Must be a valid URL.

` date() `
> Validate the date to match this format ☛ _(YYYY-MM-DD)_.
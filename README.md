## Js-Inspector
### Pure javascript library to validate your application's incoming data.
### It includes several validation rules that you may apply to the data.

#### Example
``` javascript
const inspect = new JsInspector()

inspect.data('ahmed').field('username').alpha().required()
inspect.data('ahmed@gmail.com').field('email').email().required()
inspect.data('12345678').field('password').max(30).min(8).required()

// Check the validation
if(inspect.valid()){
	// (true) if the data is valid
} else {
	// (false) if the data is not valid
}
```
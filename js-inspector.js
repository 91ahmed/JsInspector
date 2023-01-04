/**
 *	Js-Inspector is a validator class to check if the data matches the conditions or not.
 *
 *	@author name ( ahmed hasasn )
 */
class JsInspector 
{
    /**
     * Constructor
     *
     * @return void
     */
	constructor ()
	{
		/** @var string, (Holds the value to be processed) */
		this.value = null

		/** @var string, (Holds the field name) */
		this.fieldName = 'field'

		/** @var object, (Holds incoming error messages) */
		this.error = {}

		/** @var object, (Regular expressions patterns) */
        this.regex = {
            'numeric': /^[0-9]+$/, // (0,1,2 ...)
            'integer': /^\-?[0-9]+$/, // (-1,0,1,2,3 ...)
            'decimal': /^\-?[0-9]*\.?[0-9]+$/,  // (-1,0,1,2,3.5,45.6 ...)
            'email': /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
            'alpha': /^[a-zA-Z]+$/i, // letters
            'alphas': /^[A-Za-z ]*$/, // letters, spaces
            'alnum': /^[a-z0-9]+$/i, // letters, numbers
            'alnums': /^[A-Za-z0-9 ]*$/, // letters, numbers, spaces        
            'ip': /^((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){3}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})$/i,
            'url': /^((http|https):\/\/(\w+:{0,1}\w*@)?(\S+)|)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,
            'date': /^\d{4}-\d{1,2}-\d{1,2}/ // yyy-mm-dd
        }

        /** @var object, (Error messages) */
        this.messages = {
            'required': 'is required',
            'email': 'not a valid email address',
            'numeric': 'must contain numbers only',
            'integer': 'must contain integers only',
            'decimal': 'must contain decimal numbers',
            'alpha': 'must contain letters only',
            'alphas': 'must contain only letters and spaces',
            'alnum': 'must contain only letters and numbers',
            'alnums': 'must contain only letters, numbers and spaces',
            'url': 'not valid url',
            'date': 'not valid date',
            'max': 'must be less than or equal to',
            'min': 'must have a minimum value',
            'match': 'does not match',
            'pattern': 'not valid'
        }
	}

    /**
     *	Get the field name
     *
     *	@param string (field name)
     *	@return void
     */
    field (fieldName)
    {
    	this.fieldName = fieldName
    	return this
    }

    /**
     *	Get the data
     *
     *	@param string (the data for validation)
     *	@return void
     */
    data (value)
    {
    	this.value = value
    	return this
    }

    /**
     *	Check empty value
     *
     *	@param string (custom message)
     *	@return void
     */
    required (message = '')
    {
    	if (this.value == '' || this.value == null) 
    	{
    		if (message == '') {
    			message = this.messages.required
    		}

    		this.error[this.fieldName] = message
    	}

    	return this
    }

    /**
     *	Check email
     *
     *	@param string (custom message)
     *	@return void
     */
    email (message = '')
    {
    	if (this.value != '') 
    	{
	    	if (!this.regex.email.test(this.value)) 
	    	{
	    		if (message == '') {
	    			message = this.messages.email
	    		}

	    		this.error[this.fieldName] = message
	    	}
    	}

    	return this
    }

    /**
     *	Check numeric (counting numbers)
     *
     *	@param string (custom message)
     *	@return void
     */
    numeric (message = '')
    {
    	if (this.value != '') 
    	{
	    	if (!this.regex.numeric.test(this.value)) 
	    	{
	    		if (message == '') {
	    			message = this.messages.numeric
	    		}

	    		this.error[this.fieldName] = message
	    	}
    	}

    	return this
    }

    /**
     *	Check integer
     *
     *	@param string (custom message)
     *	@return void
     */
    integer (message = '')
    {
    	if (this.value != '') 
    	{
	    	if (!this.regex.integer.test(this.value)) 
	    	{
	    		if (message == '') {
	    			message = this.messages.integer
	    		}

	    		this.error[this.fieldName] = message
	    	}
    	}

    	return this
    }

    /**
     *	Check decimal
     *
     *	@param string (custom message)
     *	@return void
     */
    decimal (message = '')
    {
    	if (this.value != '') 
    	{
	    	if (!this.regex.decimal.test(this.value)) 
	    	{
	    		if (message == '') {
	    			message = this.messages.decimal
	    		}

	    		this.error[this.fieldName] = message
	    	}
    	}

    	return this
    }

    /**
     *	Check alpha characters (letters)
     *
     *	@param string (custom message)
     *	@return void
     */
    alpha (message = '')
    {
    	if (this.value != '') 
    	{
	    	if (!this.regex.alpha.test(this.value)) 
	    	{
	    		if (message == '') {
	    			message = this.messages.alpha
	    		}

	    		this.error[this.fieldName] = message
	    	}
    	}

    	return this
    }

    /**
     *	Check alpha characters with spaces (letters - spaces)
     *
     *	@param string (custom message)
     *	@return void
     */
    alphas (message = '')
    {
    	if (this.value != '') 
    	{
	    	if (!this.regex.alphas.test(this.value)) 
	    	{
	    		if (message == '') {
	    			message = this.messages.alphas
	    		}

	    		this.error[this.fieldName] = message
	    	}
    	}

    	return this
    }

    /**
     *	Check alphanumeric characters (letters - numbers)
     *
     *	@param string (custom message)
     *	@return void
     */
    alnum (message = '')
    {
    	if (this.value != '') 
    	{
	    	if (!this.regex.alnum.test(this.value)) 
	    	{
	    		if (message == '') {
	    			message = this.messages.alnum
	    		}

	    		this.error[this.fieldName] = message
	    	}
    	}

    	return this
    }

    /**
     *	Check alphanumeric with spaces (letters - numbers - spaces)
     *
     *	@param string (custom message)
     *	@return void
     */
    alnums (message = '')
    {
    	if (this.value != '') 
    	{
	    	if (!this.regex.alnums.test(this.value)) 
	    	{
	    		if (message == '') {
	    			message = this.messages.alnums
	    		}

	    		this.error[this.fieldName] = message
	    	}
    	}

    	return this
    }

    /**
     *	Check url
     *
     *	@param string (custom message)
     *	@return void
     */
    url (message = '')
    {
    	if (this.value != '') 
    	{
	    	if (!this.regex.url.test(this.value)) 
	    	{
	    		if (message == '') {
	    			message = this.messages.url
	    		}

	    		this.error[this.fieldName] = message
	    	}
    	}

    	return this
    }

    /**
     *	Check date format (yyyy-mm-dd)
     *
     *	@param string (custom message)
     *	@return void
     */
    date (message = '')
    {
    	if (this.value != '') 
    	{
	    	if (!this.regex.date.test(this.value)) 
	    	{
	    		if (message == '') {
	    			message = this.messages.date
	    		}

	    		this.error[this.fieldName] = message
	    	}
    	}

    	return this
    }

    /**
     *	Check maximum value
     *
     *	@param integer (length)
     *	@param string (custom message)
     *	@return void
     */
    max (max, message = '')
    {
    	if (this.value != '') 
    	{
	    	if (this.value.length > max) 
	    	{
	    		if (message == '') {
	    			message = this.messages.max+' '+max
	    		}

	    		this.error[this.fieldName] = message
	    	}
    	}

    	return this
    }

    /**
     *	Check minimum value
     *
     *	@param integer (length)
     *	@param string (custom message)
     *	@return void
     */
    min (min, message = '')
    {
    	if (this.value != '') 
    	{
	    	if (this.value.length < min) 
	    	{
	    		if (message == '') {
	    			message = this.messages.min+' '+min
	    		}

	    		this.error[this.fieldName] = message
	    	}
    	}

    	return this
    }

    /**
     *	Check the value match
     *
     *	@param mixed (the value)
     *	@param string (custom message)
     *	@return void
     */
    match (val, message = '')
    {
    	if (this.value != '') 
    	{
	    	if (this.value !== val) 
	    	{
	    		if (message == '') {
	    			message = this.messages.match
	    		}

	    		this.error[this.fieldName] = message
	    	}
    	}

    	return this
    }

    /**
     *	Check custom regex
     *
	 *	@param string (regex pattern)
     *	@param string (custom message)
     *	@return void
     */
    pattern (pattern, message = '')
    {
    	if (this.value != '')
    	{
	    	if (!pattern.test(this.value)) 
	    	{
	    		if (message == '') {
	    			message = this.messages.min+' '+min
	    		}

	    		this.error[this.fieldName] = message
	    	}
    	}

    	return this
    }

    /**
     *	Get the error messages as object
     *
     *	@return object
     */
    errors () 
    {
    	return this.error
    }

    valid ()
    {
    	if (Object.keys(this.error).length === 0) {
    		return true
    	} else {
    		return false
    	}
    }
}
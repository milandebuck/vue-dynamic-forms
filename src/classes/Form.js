/*
* based upon https://github.com/laracasts/Vue-Forms
*/
import { Errors } from './Errors';

/**
 * @class creates a new Form Objext
 * @param {Array} inputs - A list of all the required form fields with initial values form more info see the params section
 * @param {Object} request - A object containing an optional the configuration for the requests (optional)
 * @param {Headers} request.headers - A Javascript Headers object containing custom headers (optional)
 * @param {String} request.credentials - set credentials option in the request (optional) default value='omit'
 * @param {String} request.url - The url which the form will be send to (optional) default value = ''(self)
 * @param {String} request.method - The method of the request (optional) default value = 'post'
 *
 * @module Dynamic forms component
 * @param {Object} config the configuration of the whole form
 * @see module:dynamic-input
 * @see class:classes/Form.js
 * @see clas:classes/Errors.js
 *
 ** @Module Dynamic Input - all supported inputs
 * @param {Object} input - an input configuration
 * @param {String} input.type(Required) - The type of input supported inputtypes(text,email,password,hidden,tel,date,number,select,textarea)
 * @param {String} input.name(Required) - The name of the input field
 * @param {any} input.value(Optional) - The value of the input field
 * @param {String} input.label(Optional) - The label of the input field 
 * @param {String} input.class(Optional) - The Css class(es) of the input field
 *  
 * **Input specific parameters**
 * @param input.min - minimum value of the input field(date,number)
 * @param input.max - maximum value of the input field(date,number)
 * @param {Number} input.step - increments of the value on increase & decrease(number)
 * @param {Array} options - al the options in a selectbox
*/
export class Form{

	//constructor
	constructor(inputs,request= {}){
		//set custom http headers
		this.headers=request.headers || new Headers({
			'Content-Type':'application/json',
			'Accept':'application/json'
		})

		//allow for custom credentials
		this.credentials= request.credentials || 'omit'

		//post url
		this.url = request.url || ''

		//method of the form
		this.method = request.method || 'post'


		this.originalData = inputs;
		for (let field in inputs) {
			this[field] = inputs[field];
		}
		this.errors = new Errors();
	}

	/**
	* groups all form values in a formData object
	* @returns {FormData} data - a FormData object containing all form values
	*/
	data() {
		let data = new FormData()
		for (let prop in this.originalData) {
			data.append(this[prop].name,this[prop].value)
		}
		return data;
	}

	/**
	 *Resets all values in the form + clears the errors
	*/
	reset() {
		for (let field in this.originalData) {
			this[field] = '';
		}
		this.errors.clear();
	}

	/**
	 * Submit the form with the current values
	 * @returns {Promise} - promise based on the succes or failure of a request done with the fetch API
	 */
	submit() {
		let fetchData= {
			method:this.method,
			body:this.data(),
			headers:this.headers,
			credentials:this.credentials
		}


		return new Promise((resolve, reject) => {
			fetch(this.url, fetchData)
			.then(res => {
				if(res.status === 422)res.json().then(res => {
					this.onFail(res)
					reject(res)
				})
				else res.json().then(resolve)
			})
			.catch(reject)
		})

	}

	/**
	 * Sets the Errors of the form
	 * @param {Array} errors - An array containing error objects
	*/
	onFail(errors) {
		this.errors.set(errors);
	}
}
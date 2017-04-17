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
		let data = {}
		for (let prop in this.originalData) {
			data[this[prop].name]=this[prop].value
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
		console.log()
		let fetchData= {
			method:this.method,
			body:JSON.stringify(this.data()),
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
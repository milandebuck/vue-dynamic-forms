/*
* based upon https://github.com/laracasts/Vue-Forms
*/
import { Errors } from './Errors';


export class Form{

	//constructor
	constructor(data,options){
		//set custom http headers
		this.headers=options.headers || new Headers()
		this.headers.append('Content-Type','application/json')
		this.headers.append('Accept','application/json')

		//allow for custom credentials
		this.credentials= options.credentials || 'omit'

		//post url
		this.url = options.url || ''

		//method of the form
		this.method = options.method || 'post'


		this.originalData = data;
		for (let field in data) {
			this[field] = data[field];
		}
		this.errors = new Errors();
	}

	//fetch form data and restructure it to create a formData object
	data() {
		let data = new FormData()
		for (let prop in this.originalData) {
			data.append(this[prop].name,this[prop].value)
		}
		return data;
	}

	//reset all form fields
	reset() {
		for (let field in this.originalData) {
			this[field] = '';
		}
		this.errors.clear();
	}

	//submit a form
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
				console.log(res)
				if(res.status === 422)res.json().then(res => {
					this.onFail(res)
					reject(res)
				})
				else res.json().then(resolve)
			})
			.catch(reject)
		})

	}

	//handle failed request
	onFail(errors) {
		console.log('we handle errors');
		this.errors.set(errors);
	}
}
/*
* based upon https://github.com/laracasts/Vue-Forms
*/
import { Errors } from './Errors';


export class Form{

	//constructor
	constructor(data) {
        this.originalData = data;
        for (let field in data) {
            this[field] = data[field];
        }
        this.errors = new Errors();
        this.headers = headers
    }

    //fetch form data and restructure it to create a key-value based payload
    data() {
        let data = {};
        for (let prop in this.originalData) {
            data[this[prop].name] = this[prop].value;
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
    submit(requestType,url) {
        let fetchData= {
            method:requestType.toUpperCase(),
            body:this.data(),
        }

        return new Promise((resolve, reject) => {
            fetch(url, fetchData)
                .then(response => {
                    //resest the form state
                    resolve(response.data);
                })
                .catch(error => {
                    //assign errors to the errors objects
                    this.onFail(error.response.data);
                    reject(error.response.data);
                });
        });
    }

    //handle failed request
    onFail(errors) {
        this.errors.set(errors);
    }
}
import { Errors } from './Errors';

export class Form{

	//constructor
	constructor(data) {
        this.originalData = data;
        for (let field in data) {
            this[field] = data[field];
        }
        this.errors = new Errors();
    }

    //fetch form data and restructure it to create a key-value based payload
    data() {
        let data = {};
        for (let property in this.originalData) {
            data[this[property].name] = this[property].value;
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
    submit(requestType, url) {
        return new Promise((resolve, reject) => {
            axios[requestType](url, this.data())
                .then(response => {
                    //resest the form state
                    this.onSuccess(response.data);
                    resolve(response.data);
                })
                .catch(error => {
                    //assign errors to the errors objects
                    this.onFail(error.response.data);
                    reject(error.response.data);
                });
        });
    }

    //handle succesfull request
    onSuccess(data) {
        console.log('succes');
    }

    //handle failed request
    onFail(errors) {
        this.errors.set(errors);
    }
}
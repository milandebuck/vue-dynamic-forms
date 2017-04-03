/*
* based upon https://github.com/laracasts/Vue-Forms
*/
export class Errors{

	//constructor
	constructor(){
		this.errors = {};
	}

	//check if an error exits for a specific field
	has(field){
		return this.errors.hasOwnProperty(field);
	}

	//check for errors
	any(){
		return Objects.keys(this.errors) > 0;
	}

	//get an error
	get(field){
		if(this.errors[field]) return this.errors[field];
		return false;
	}

	//set errors
	set(err){
		this.errors=err;
	}

	//clear errors
	clear(){
		this.erros={};
	}



}

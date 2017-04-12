/*
* based upon https://github.com/laracasts/Vue-Forms
*/
/**
 * @class creates an Error object
 */
export class Errors{

	//constructor
	constructor(){
		this.errors = {};
	}

	/**
	 * Check if an error exists
	 * @param {String} field - the name of the field you are looking for
	 * 
	 */
	has(field){
		return this.errors.hasOwnProperty(field);
	}

	/**
	 * Check if there are any Errors
	 * @returns {Boolean} boolean 
	 */
	any(){
		return Objects.keys(this.errors) > 0;
	}

	/**
	 * get an Error for a particular field
	 * @param {String} field - the name of the field you are looking for
	 * @returns if exists returns the error else returns false
	 */
	get(field){
		if(this.errors[field]) return this.errors[field];
		return false;
	}

	/**
	 * Sets the error Object
	 * @param Errors - errors
	 */
	set(err){
		this.errors=err;
	}

	/**
	 * Clear all the erros
	 */
	clear(){
		this.erros={};
	}



}

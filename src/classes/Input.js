
export class Input{

	constructor(options){
		/*
		 * Global config
		 */

		//input type
		this.type=options.type || 'text'

		//name of the input
		if(!options.name) throw new Error('No name given to new input name is required');
		this.name=options.name

		//value
		this.value=options.value

		//label
		this.label=options.label

		//css class
		this.class=options.class

		/*
		 * Specific input config
		 */
		 switch(options.type){

		 	//select
		 	case 'select' || 'radio' :
		 		if(!options.options)throw new Error('no options provided')
		 		this.options=options.options
		 		break	

		 	case 'date' || 'number':
		 		this.min=options.min
		 		this.max=options.max
		 		if(options.type === 'number')this.step = options.step;
		 		break

		 	case 'button':
		 		this.event=options.event
		 		break

		 	case 'checkboxgroup':
		 		break
		 }
	}
}
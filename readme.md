# Documentation

## dynamic forms

create dynamic forms based on a json config

### usage

add the component to the `components ` section of your Vue component

`demo.vue`

```javascript
<template>
<div>
	<!-- 
		custom html element
		custom atribute formdata is required
	 -->
	<dynamic-form :formdata="formdata"></dynamic-form>
</div>
</template>

<script>
//import the library
import dynamicForm from 'vue-dynamic-forms'

import { createDemo } from './config'

export default {

	name: 'demo',
	components:{
		//add the dynamicForm to the components section
		dynamicForm
	}
	data () {
		return {
			//get the configuration and initialize it
			formdata:createDemo()
		};
	}
};
</script>

<style lang="css" scoped>
</style>

```

### Configuration
 
 configuration in the `config.js` file

```javascript
export fuction createDemo(){

	return {	
		//destination (string) required
		url:'/login',
		//http request type(string) required
		type:'post',
		//legacy form submitting(false) or submit to the api(true -default) 
		api:false,
		//text of the submit button(string) 
		submit:'Login',
		//input fields needed required
		params:[
			{
				type:'email',
				label:'email',
				name:'email',
				class:'form-control',
				value:""
			},
			{
				type:'password',
				label:'password',
				name:'password',
				class:'form-control',
				value:""
			},
		]
	}
}
``` 

 ### input support

**text**
```javascript
{
	type:'text',
	label:'text',
	name:'text',
	class:'',
	value:''
},

```

**email**
```javascript
{
	type:'email',
	label:'email',
	name:'email',
	class:'',
	value:''
},

```

**password**
```javascript
{
	type:'password',
	label:'password',
	name:'password',
	class:'',
	value:''
},
```

**phone**
```javascript
{
	type:'tel',
	label:'Telephone',
	name:'phone',
	class:'',
	value:''
},
```
**pnumber**
```javascript
{
	type:'number',
	label:'Number',
	name:'number',
	class:'',
	value:''
},
```

**texarea**
```javascript
{
	type:'textarea',
	label:'Text area',
	name:'textarea',
	class:'',
	value:''
},
```

**select**
```javascript
{
	type:'select',
	label:'Dropdown',
	name:'select',
	class:'',
	options:['option1','option2']
},
```



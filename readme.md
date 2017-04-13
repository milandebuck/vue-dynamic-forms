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
		//request options 	
		request:{
			//post url
			url:'/register',
			//method
			method:'post',
			//adding the CSRF Token for laravel applications
			headers:new Headers({
				'X-CSRF-TOKEN':window.Laraval.csrfToken
			}),
			//include credentials
			credentials:'include'
		},
		//title
		title:'Demo Form'
		//text of the submit button
		submitText:'Register',
		//inputs
		inputs:[
			{
				type:'text',
				label:'Firtsname',
				name:'firstname',
				class:'form-control',
				value:''
			},
			{
				type:'text',
				label:'Lastname',
				name:'lastname',
				class:'form-control',
				value:''
			},
			{
				type:'email',
				label:'Email',
				name:'email',
				class:'form-control',
				value:''
			},
			{
				type:'password',
				label:'Password',
				name:'password',
				class:'form-control',
				value:''
			},
			{
				type:'password',
				label:'Confirm password',
				name:'password_confirmation',
				class:'form-control',
				value:''
			},
			{
				type:'date',
				label:'Date of birth',
				name:'dateofbirth',
				class:'form-control',
				value:''
			},
			{
				type:'tel',
				label:'Telephone',
				name:'phone',
				class:'form-control',
				value:''
			},
			{
				type:'select',
				label:'Gender',
				name:'gender',
				class:'form-control',
				options:['male','female'],
				value:""
			},

		]
	}
}
``` 

 ### input configuration

 #### global configutation

-	type 		

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



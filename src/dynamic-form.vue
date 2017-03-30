<template>
	<div class="dynamic-form-wrapper">
		<!-- not an api call render a form with normal submission -->
		<form v-if="!api" :method="formdata.type" :action="formdata.url">
			<div class="form-group" v-for="param in formdata.params">
				<dynamic-input :param="param" :error="form.errors.has(param.name) ? form.errors.get(param.name) : false"></dynamic-input> 
			</div>
			<input type="submit" class="btn btn-primary" :value="formdata.submit">
		</form>
		<!-- api call render form with onSubmit method -->
		<form  v-else @submit.prevent='onSubmit'>
			<div class="form-group" v-for="param in formdata.params">
				<dynamic-input :param="param" :error="form.errors.has(param.name) ? form.errors.get(param.name) : false"></dynamic-input> 
			</div>
			<input type="submit" class="btn btn-primary" :value="formdata.submit">
		</form>
	</div>

</template>

<script>
import { Form } from './classes/Form'
import dynamicInput  from './dynamic-input.vue'
export default {

	name: 'dynamic-form',
	components:{
		dynamicInput
	},
	props:{
		formdata:{
			required:true,
			type:Object
		},
		api:{
			type:Boolean,
			required:false,
			default:true
		},
		errors:{
			type:Object,
			required:false,
		}
	},
	data () {
		//create a new form based on the props
		let newForm=new Form(this.formdata.params);
		if(window.csrfToken && !this.api){
			let csrfparam={
				type:'hidden',
				value:window.csrfToken,
				name:'_token',
				label:''
			}
			this.formdata.params.push(csrfparam)
			console.log(this.formdata.url + "token setted")
			console.log(this.formdata.params)
		}
		// set errors to error object on a normal submit
		if(!this.api && this.errors)newForm.onFail(this.errors);
		return {
			form:newForm
		};
	},
	methods:{
		//api submit
		onSubmit(){
			this.form.submit(this.formdata.type,this.formdata.url)
			.then((response) => {
				console.log(response);
				this.$emit('succes',{res:response,formdata:this.form.data()})
			})
			.catch((err) => {
				console.log(err)
				this.$emit('fail',err)
			})
		
		}
	}
};
</script>

<style lang="css" scoped>
</style>
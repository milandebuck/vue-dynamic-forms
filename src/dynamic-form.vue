<template>
	<div class="dynamic-form-wrapper">
		<!-- api call render form with onSubmit method -->
		<form @submit.prevent='onSubmit'>
			<div class="form-group" v-for="param in formdata.params">
				<dynamic-input :param="param" :error="form.errors.has(param.name) ? form.errors.get(param.name) : false"></dynamic-input> 
			</div>
			<input type="submit" class="btn btn-primary" :value="formdata.submitText">
		</form>
	</div>

</template>

<script>
//added the form class
import { Form } from './classes/Form'
//added the dynamic input component
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
		errors:{
			type:Object,
			required:false,
		}
	},
	data () {
		let newForm=new Form(this.formdata.params,this.formdata.options)
		return {
			form:newForm
		};
	},
	methods:{
		onSubmit(){
			this.form.submit(this.formdata.type,this.formdata.url)
			.then((response) => {
				this.$emit('succes',{res:response,formdata:this.form.data()})
			})
			.catch((err) => {
				this.$emit('fail',err)
			})
		
		}
	}
};
</script>

<style lang="css" scoped>
</style>
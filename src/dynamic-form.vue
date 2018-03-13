<template>
	<div class="dynamic-form-wrapper">
		<!-- api call render form with onSubmit method -->
		<h3 v-show="config.title">{{config.title}}</h3>
		<form @submit.prevent='onSubmit'>
			<div class="form-group" v-for="input in config.inputs">
				<dynamic-input v-on:multiSelectNoResults="multiSelectNoResults" :input="input" :error="form.errors.has(input.name) ? form.errors.get(input.name) : false"></dynamic-input>
			</div>
			<input type="submit" :class="config.submitClass" :value="config.submitText || 'Submit'">
		</form>
	</div>

</template>

<script>
//added the form class
import { Form } from './classes'
//added the dynamic input component
import dynamicInput  from './dynamic-input.vue'
/**
 * @module Dynamic forms component
 * @param {Object} config the configuration of the whole form
 * @see module:dynamic-input
 * @see class:classes/Form.js
 * @see clas:classes/Errors.js
*/
export default {

	name: 'dynamic-form',
	components:{
		dynamicInput
	},
	props:{
		config:{
			required:true,
			type:Object
		}
	},
	data () {
		return {
			form:new Form(this.config.inputs,this.config.request)
		};
	},
	watch:{
		config(){
			this.form = new Form(this.config.inputs,this.config.request)
		}
	},
	methods:{
		onSubmit(){
			this.form.submit()
			.then((response) => {
				this.$emit('succes',{res:response,data:this.form.data()})
			})
			.catch((err) => {
				console.error(err)
				this.$emit('fail',err)
			})
		
		},
		multiSelectNoResults() {
				this.$emit('multiSelectNoResults')
		}
	}
};
</script>

<style lang="css" scoped>
</style>
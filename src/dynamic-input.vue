mr<template>
	<div class="dynamic-input-wrapper">
		<label  v-show="input.label" :for="input.name" >{{input.label}}</label>
		
		<!-- start input type if -->

			<!-- file upload not supported yet -->
			<div v-if="input.type === 'file'">
				<span>not supported</span>
			</div>
			
			<!-- hidden input -->
			<input v-else-if="input.type === 'hidden'" :class="input.class" type="hidden" :name="input.name" v-model="input.value">
			
			<!-- text input -->
			<input v-else-if="input.type === 'text'" :class="input.class" type="text" :name="input.name" v-model="input.value">

			<!-- date input -->
			<input v-else-if="input.type === 'date'" :class="input.class" type="date" :name="input.name" v-model="input.value" :>

			<!-- number input -->
			<input v-else-if="input.type === 'number'" :class="input.class" type="number" :name="input.name" v-model="input.value">

			<!-- phone input -->
			<input v-else-if="input.type === 'tel'" :class="input.class" type="tel" :name="input.name" v-model="input.value">

			<!-- email input -->
			<input v-else-if="input.type === 'email'" :class="input.class" type="email" :name="input.name" v-model="input.value">

			<!-- password input -->
			<input v-else-if="input.type === 'password'" :class="input.class" type="password" :name="input.name" v-model="input.value">

			<!-- textarea -->
			<textarea v-else-if="input.type === 'textarea'" :class="input.class" :name="input.name" v-model="input.value"></textarea>

			<!-- select -->
			<select v-else-if="input.type ==='select'" :class="input.class" :name="input.name" v-model="input.value" >
				<option v-for="option in input.options" value="option">{{option}}</option>
			</select>

			<!-- Radio -->
			<div v-else-if="input.type === 'radio'">
				<h4>input.title</h4>			
				<div  v-for="option in options">
					<input  :class="input.class" type="radio" :name="input.name" v-model="input.value" value="option" id="option">
					<label :for="option"></label>
				</div>
			</div>
			


			<!-- Checkbox -->
			<input v-else-if="input.type === 'checkbox'" :class="input.class" type="checkbox" :name="input.name" v-model="input.value">


			<!-- Checkboxgroup -->
			<div v-else-if="input.type === 'checkgroup'">
				<h4>input.title</h4>
				
			</div>


		<!-- end input type if -->

		<!-- error span -->
		<span v-if="error" v-text="error"></span>
	</div>
</template>

<script>
export default {

  name: 'dynamic-input',
  props:{
  	error:{
  		required:false,
  		default:false
  	},
  	input:{
  		type:Object,
  		required:true
  	}
  },
  data () {
    return {

    };
  }
};
</script>

<style lang="css" scoped>
</style>
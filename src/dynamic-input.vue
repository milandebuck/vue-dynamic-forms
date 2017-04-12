mr<template>
	<div class="dynamic-input-wrapper">
		<label  v-show="param.label" :for="param.name" >{{param.label}}</label>
		
		<!-- start input type if -->

			<!-- file upload not supported yet -->
			<div v-if="param.type === 'file'">
				<span>not supported</span>
			</div>
			
			<!-- hidden input -->
			<input v-else-if="param.type === 'hidden'" :class="param.class" type="hidden" :name="param.name" v-model="param.value">
			
			<!-- text input -->
			<input v-else-if="param.type === 'text'" :class="param.class" type="text" :name="param.name" v-model="param.value">

			<!-- date input -->
			<input v-else-if="param.type === 'date'" :class="param.class" type="date" :name="param.name" v-model="param.value" :>

			<!-- number input -->
			<input v-else-if="param.type === 'number'" :class="param.class" type="number" :name="param.name" v-model="param.value">

			<!-- phone input -->
			<input v-else-if="param.type === 'tel'" :class="param.class" type="tel" :name="param.name" v-model="param.value">

			<!-- email input -->
			<input v-else-if="param.type === 'email'" :class="param.class" type="email" :name="param.name" v-model="param.value">

			<!-- password input -->
			<input v-else-if="param.type === 'password'" :class="param.class" type="password" :name="param.name" v-model="param.value">

			<!-- textarea -->
			<textarea v-else-if="param.type === 'textarea'" :class="param.class" :name="param.name" v-model="param.value"></textarea>

			<!-- select -->
			<select v-else-if="param.type ==='select'" :class="param.class" :name="param.name" v-model="param.value" >
				<option v-for="option in param.options" value="option">{{option}}</option>
			</select>

			<!-- Radio -->
			<div v-else-if="param.type === 'radio'">
				<h4>param.title</h4>			
				<div  v-for="option in options">
					<input  :class="param.class" type="radio" :name="param.name" v-model="param.value" value="option" id="option">
					<label :for="option"></label>
				</div>
			</div>
			


			<!-- Checkbox -->
			<input v-else-if="param.type === 'checkbox'" :class="param.class" type="checkbox" :name="param.name" v-model="param.value">


			<!-- Checkboxgroup -->
			<div v-else-if="param.type === 'checkgroup'">
				<h4>param.title</h4>
				
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
  	param:{
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
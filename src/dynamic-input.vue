<template>
	<div class="dynamic-input-wrapper">
		<label  v-show="input.label" :for="input.name" >{{input.label}}</label>

		<!-- error span -->
		<div v-show="error" class="error">
			<ul v-if="error instanceof Array">
				<li v-for="e in error">{{e}}</li>
			</ul>
			<span v-else>{{error}}</span>
		</div>
		
		<!-- start input type if -->
			
			<!-- hidden input -->
			<input v-if="input.type === 'hidden'" :class="input.class" type="hidden" :name="input.name" v-model="input.value">
			
			<!-- text input -->
			<input v-else-if="input.type === 'text'" :class="input.class" type="text" :name="input.name" v-model="input.value">

			<!-- phone input -->
			<input v-else-if="input.type === 'tel'" :class="input.class" type="tel" :name="input.name" v-model="input.value">

			<!-- email input -->
			<input v-else-if="input.type === 'email'" :class="input.class" type="email" :name="input.name" v-model="input.value">

			<!-- password input -->
			<input v-else-if="input.type === 'password'" :class="input.class" type="password" :name="input.name" v-model="input.value">

			<!-- date input -->
			<input v-else-if="input.type === 'date'" :class="input.class" type="date" :name="input.name" :min="input.min" :max="input.max" v-model="input.value">

			<!-- number input -->
			<input v-else-if="input.type === 'number'" :class="input.class" type="number" :name="input.name" :min="input.min" :max="input.max" :step="input.step" v-model="input.value">

			<!-- textarea -->
			<textarea v-else-if="input.type === 'textarea'" :class="input.class" :name="input.name" v-model="input.value" :placeholder="input.placeholder"></textarea>

			<!-- select -->
			<select v-else-if="input.type ==='select'" :class="input.class" :name="input.name" v-model="input.value" :selected="input.value">
				<option v-for="option in input.options" :value="option.value ? option.value : option">{{option.label ? option.label : option}}</option>
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
			
			<!-- multi select -->
			<div v-else-if="input.type === 'multiselect'">
				<multiselect v-model="input.value" :options="input.options || []" :trackBy="input.track" :multiple="true" :close-on-select="true" :clear-on-select="false" :hide-selected="true" :label="input.data_label" :show-labels="false"></multiselect>
			</div>

			<div v-else>
				<span>not supported</span>
			</div>


		<!-- end input type if -->
		
		
	</div>
</template>
<script>

import multiselect from 'vue-multiselect'

/**
 * @Module Dynamic Input - all supported inputs
 * @param {Object} input - an input configuration
 * @param {String} input.type(Required) - The type of input supported inputtypes(text,email,password,hidden,tel,date,number,select,textarea)
 * @param {String} input.name(Required) - The name of the input field
 * @param {any} input.value(Optional) - The value of the input field
 * @param {String} input.label(Optional) - The label of the input field 
 * @param {String} input.class(Optional) - The Css class(es) of the input field
 *  
 * **Input specific parameters**
 * @param input.min - minimum value of the input field(date,number)
 * @param input.max - maximum value of the input field(date,number)
 * @param {Number} input.step - increments of the value on increase & decrease(number)
 * @param {Array} options - al the options in a selectbox
*/
export default {
  name: 'dynamic-input',
  components:{
  	multiselect
  },
  props:{
  	error:{
  		required:false,
  		default:false,
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
label{
	float:left;
}

.error{
	float:right;
}
.dynamic-input-wrapper{
	width:100%;
}
textarea{
	resize:vertical;
}
</style>
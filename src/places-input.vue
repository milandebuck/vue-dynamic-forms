<template>
	<div class="place-wrapper">
		<input type="text" :name="options.name" v-model="location" :class="options.className" :ref="options.name" :placeholder="options.placeholder" @focus="init">
		<input type="hidden" name="lat" v-model="lat">
		<input type="hidden" name="lng" v-model="lng">
	</div>
</template>

<script>
export default {

	name: 'places-input',
	props:{
		options:{
			type:Object,
			required:true
		},
		content:{
			type:String,
			required:false
		}
	},
	data () {
		return {
			element:'',
			location:'',
			lng:'',
			lat:''
		}
	},
	watch:{
		input(){
			this.location=this.input
		}
	},
	methods:{
		init(){
			this.element=new google.maps.places.Autocomplete(this.$refs[this.options.name],this.options.options)
			google.maps.event.addListener(this.element, 'place_changed', () => {
	            let place = this.element.getPlace()
	            console.log(place)
	            this.location=place.name
	            this.lat=place.geometry.location.lat()
	            this.lng=place.geometry.location.lng()
	            this.$emit('change',{
	            	lat:this.lat,
	            	lng:this.lng,
	            	location:this.location

	            })
			})
		}
	}

};
</script>

<style lang="css" scoped>
</style>
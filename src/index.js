import Vue from 'vue';
import dynamicForm from './dynamic-form.vue'

//assign vue to window instance
window.Vue = Vue;

//import component
Vue.component('dynamic-form',dynamicForm);


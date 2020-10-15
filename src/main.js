import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'

/* Include plugins */
import Vuelidate from 'vuelidate'

/* Inlude styles */
import './assets/scss/main.scss'

/* Include global components */
import TextInput from './components/fields/TextInput'
import PasswordInput from './components/fields/PasswordInput'
import DefaultLabel from './components/fields/DefaultLabel'
import DefaultButton from './components/items/DefaultButton'

Vue.config.productionTip = false

/* Install plugins */
Vue.use(Vuelidate)

/* Install global components */
Vue.component('TextInput', TextInput)
Vue.component('PasswordInput', PasswordInput)
Vue.component('DefaultLabel', DefaultLabel)
Vue.component('DefaultButton', DefaultButton)

/* Install firebase */
firebase.initializeApp({
	apiKey: "AIzaSyA_wzhNNw-XcO0nI5ks8RyI47QiDOE6JB8",
	authDomain: "project-crm-12b42.firebaseapp.com",
	databaseURL: "https://project-crm-12b42.firebaseio.com",
	projectId: "project-crm-12b42",
	storageBucket: "project-crm-12b42.appspot.com",
	messagingSenderId: "1080162688862",
	appId: "1:1080162688862:web:7ff277aa03921dc52479cf"
})

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')

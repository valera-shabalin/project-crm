import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import firebaseConfig from './config/config-firebase.js'

/* Include plugins */
import Vuelidate from 'vuelidate'
import messagePlugin from './utils/message.plugin'

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
Vue.use(messagePlugin)

/* Install global components */
Vue.component('TextInput', TextInput)
Vue.component('PasswordInput', PasswordInput)
Vue.component('DefaultLabel', DefaultLabel)
Vue.component('DefaultButton', DefaultButton)

/* Include Firebase to project */
firebase.initializeApp(firebaseConfig)

/* Initialization application */
let app
firebase.auth().onAuthStateChanged(() => {
	if ( !app ) {
		app = new Vue({
			router,
			store,
			render: h => h(App)
		}).$mount('#app')
	}
})

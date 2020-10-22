import firebase from 'firebase/app'

export default {
	state: {
		
	},
	actions: {
		async LOGIN({ dispatch, commit }, { email, password }) {
			try {
				await firebase.auth().signInWithEmailAndPassword(email, password)
			} catch(err) { throw err }
		},
		async REGISTER({ dispatch, commit }, data) {
			try {
				await firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
			} catch(err) { throw err }
		}
	},
	mutations: {

	},
}
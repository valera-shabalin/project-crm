import firebase from 'firebase/app'

export default {
	state: {
		
	},
	actions: {
		LOGIN({ dispatch, commit }, { email, password }) {
			return new Promise((resolve, reject) => {
				firebase.auth().signInWithEmailAndPassword(email, password)
					.then(() => {
						resolve()
					})
					.catch(err => {	
						reject(err.code)
					})
			})
		}
	},
	mutations: {

	},
}
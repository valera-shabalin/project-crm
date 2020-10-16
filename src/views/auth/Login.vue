<template>
	<form class="login-view d-flex flex-column" @submit.prevent="login">
		<TextInput v-model.trim="email" :placeholder="'Адрес электронной почты'" :validate="$v.email" />
		<PasswordInput v-model.trim="password" :placeholder="'Пароль'" :validate="$v.password" />
		<DefaultButton :disable="buttonDisable">Войти</DefaultButton>
		<router-link to="/recovery" class="align-self-center">Забыли пароль?</router-link>
	</form>
</template>

<script>
	import { email, required } from 'vuelidate/lib/validators'

	export default {
		name: 'Login',
		data: () => ({
			email: '',
			password: '',
			buttonDisable: false
		}),
		validations: {
			email: { required, email },
			password: { required }
		},
		methods: {
			login() {
				if (this.$v.$invalid) {
					this.$v.$touch()
					return
				}
				if (this.buttonDisable) return
				this.buttonDisable = true
				// API LOGIN
			}
		}
	}
</script>

<style lang="scss">
	.login-view {
		.text-input {
			margin-bottom: 10px;
		}
		.password-input {
			margin-bottom: 10px;
		}
		.default-button {
			margin-bottom: 20px;
		}
	}
</style>
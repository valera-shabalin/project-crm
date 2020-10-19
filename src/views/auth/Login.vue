<template>
	<form class="login-view d-flex flex-column" @submit.prevent="login">
		<TextInput v-model.trim="email" :placeholder="'Адрес электронной почты'" :title="'Почта'" :validate="$v.email" />
		<PasswordInput v-model.trim="password" :placeholder="'Пароль'" :title="'Пароль'" :validate="$v.password" />
		<DefaultButton :disable="buttonDisable">Войти</DefaultButton>
		<router-link to="/recovery" class="align-self-center">Забыли пароль?</router-link>
	</form>
</template>

<script>
	import { email, required } from 'vuelidate/lib/validators'
	import messages from '@/utils/messages'

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
				const data = {
					email: this.email,
					password: this.password
				}
				this.$store.dispatch('LOGIN', data)
					.then(() => {
						this.buttonDisable = false
						this.$router.push('/')
					})
					.catch(err => {
						alert(messages[err])
						this.buttonDisable = false
					})

			}
		}
	}
</script>

<style lang="scss">
	.login-view {
		.text-input {
			margin-bottom: 15px;
		}
		.password-input {
			margin-bottom: 15px;
		}
		.default-button {
			margin-bottom: 20px;
		}
	}
	@media (max-width: 576px) {
		.login-view {
			.text-input {
				margin-bottom: 10px;
			}
			.password-input {
				margin-bottom: 10px;
			}
			.default-button {
				margin-bottom: 15px;
			}
		}
	}
</style>
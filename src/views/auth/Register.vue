<template>
	<form class="register-view d-flex flex-column" @submit.prevent="register">
		<TextInput v-model.trim="name" :placeholder="'Имя'" :validate="$v.name" />
		<TextInput v-model.trim="surname" :placeholder="'Фамилия'" :validate="$v.surname" />
		<TextInput v-model.trim="email" :placeholder="'Адрес электронной почты'" :validate="$v.email" />
		<PasswordInput v-model.trim="password" :placeholder="'Придумайте пароль'" :validate="$v.password" />
		<PasswordInput v-model.trim="repeatPassword" :placeholder="'Повторите пароль'" :validate="$v.repeatPassword" />
		<DefaultLabel v-model="policy" :id="'register-policy'">Согласен с <a href="/policy">политикой конфиденциальности</a></DefaultLabel>
		<DefaultButton :disable="buttonDisable">Зарегистрироваться</DefaultButton>
	</form>
</template>

<script>
	import { email, required, minLength, maxLength, sameAs } from 'vuelidate/lib/validators'

	export default {
		name: 'Register',
		data: () => ({
			name: '',
			surname: '',
			email: '',
			password: '',
			repeatPassword: '',
			policy: false,
			buttonDisable: false
		}),
		validations: {
			name: { required },
			surname: { required },
			email: { required, email },
			password: { required, minLength: minLength(8), maxLength: maxLength(255), },
			repeatPassword: { required, sameAsPassword: sameAs('password') }
		},
		methods: {
			register() {
				if (this.$v.$invalid) {
					this.$v.$touch()
					return
				}
				if (this.buttonDisable) return
				this.buttonDisable = true
				// API register
			}
		}
	}
</script>

<style lang="scss">
	.register-view {
		.text-input {
			margin-bottom: 10px;
		}
		.password-input {
			margin-bottom: 10px;
		}
		.default-label {
			margin-bottom: 10px;
		}
	}
</style>
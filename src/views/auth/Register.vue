<template>
	<form class="register-view d-flex flex-column" @submit.prevent="register">
		<TextInput v-model.trim="name" :placeholder="'Имя'" :title="'Имя'" :validate="$v.name" />
		<TextInput v-model.trim="surname" :placeholder="'Фамилия'" :title="'Фамилия'" :validate="$v.surname" />
		<TextInput v-model.trim="email" :placeholder="'Адрес электронной почты'" :title="'Почта'" :validate="$v.email" />
		<PasswordInput v-model.trim="password" :placeholder="'Придумайте пароль'" :title="'Пароль'" :validate="$v.password" />
		<PasswordInput v-model.trim="repeatPassword" :placeholder="'Повторите пароль'" :title="'Подтверждение пароля'" :validate="$v.repeatPassword" />
		<DefaultLabel v-model="policy" :id="'register-policy'" @change="$v.policy.$touch()" :validate="$v.policy">Согласен с <a href="/policy">политикой конфиденциальности</a></DefaultLabel>
		<DefaultButton :disable="buttonDisable">Зарегистрироваться</DefaultButton>
	</form>
</template>

<script>
	import { email, required, minLength, maxLength, sameAs } from 'vuelidate/lib/validators'
	import messages from '@/utils/messages'

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
			repeatPassword: { required, sameAsPassword: sameAs('password') },
			policy: { checked: val => val }
		},
		methods: {
			register() {
				console.log(this.$v)
				if (this.$v.$invalid) {
					this.$v.$touch()
					return
				}
				if (this.buttonDisable) return
				this.buttonDisable = true
				const data = {
					email: this.email,
					password: this.password,
					name: this.name,
					surname: this.surname
				}
				this.$store.dispatch('REGISTER', data)
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
	.register-view {
		.text-input {
			margin-bottom: 15px;
		}
		.password-input {
			margin-bottom: 15px;
		}
		.default-label {
			margin-bottom: 15px;
		}
	}
	@media (max-width: 576px) {
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
	}
</style>
<template>
	<form class="register-view d-flex flex-column" @submit.prevent="register">
		<TextInput v-model.trim="name" :placeholder="'Имя'" />
		<TextInput v-model.trim="surname" :placeholder="'Фамилия'" />
		<TextInput v-model.trim="email" :placeholder="'Адрес электронной почты'" />
		<PasswordInput v-model.trim="password" :placeholder="'Придумайте пароль'" />
		<PasswordInput v-model.trim="repeatPassword" :placeholder="'Повторите пароль'" />
		<DefaultLabel v-model="policy" :id="'register-policy'">Согласен с <a href="/policy">политикой конфиденциальности</a></DefaultLabel>
		<DefaultButton>Зарегистрироваться</DefaultButton>
	</form>
</template>

<script>
	export default {
		name: 'Register',
		data: () => ({
			name: '',
			surname: '',
			email: '',
			password: '',
			repeatPassword: '',
			policy: false
		}),
		methods: {
			register() {

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
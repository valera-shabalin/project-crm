<template>
	<form class="login-view d-flex flex-column" @submit.prevent="login">
		<TextInput v-model.trim="email" :placeholder="'Адрес электронной почты'" />
		<TextInput v-model.trim="password" :placeholder="'Пароль'" />
		<DefaultButton>Войти</DefaultButton>
		<router-link to="/recovery" class="align-self-center">Забыли пароль?</router-link>
	</form>
</template>

<script>
	export default {
		name: 'Login',
		data: () => ({
			email: '',
			password: ''
		}),
		methods: {
			login() {

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
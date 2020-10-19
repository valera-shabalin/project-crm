<template>
	<div class="password-input" :class="{ 'invalid': validate != null && validate.$dirty && validate.$invalid }">
		<span class="password-input__title" v-if="title">{{ title }}</span>
		<input 
			class="password-input__main"
			:type="type" 
			:content="content"
			:placeholder="placeholder"
			@input="$emit('input', $event.target.value)">
		<SvgEyeOutline class="show-hide-password" @click="toggle" v-if="type == 'password'"/>
		<SvgEyeLine class="show-hide-password" @click="toggle" v-else/>
		<span class="error" v-if="validate != null && !validate.required">Заполните это поле</span>
		<span class="error" v-else-if="validate.email != null && !validate.email">Некорректный адрес электронной почты</span>
		<span class="error" v-else-if="validate.minLength != null && !validate.minLength">Минимальная длина - {{ validate.$params.minLength.min }}</span>
		<span class="error" v-else-if="validate.maxLength != null && !validate.maxLength">Максимальная длина - {{ validate.$params.maxLength.max }}</span>
		<span class="error" v-else-if="validate.sameAsPassword != null && !validate.sameAsPassword">Значения не совпадают</span>
	</div>
</template>

<script>
	export default {
		name: 'PasswordInput',
		model: {
			prop: 'content',
			event: 'input'
		},
		props: {
			placeholder: { type: String, default: 'Введите данные' },
			content: { type: String, default: '' },
			validate: { type: Object, default: null },
			title: { type: String, default: null }
		},
		data: () => ({
			type: 'password'
		}),
		methods: {
			toggle() {
				this.type = (this.type == 'password') ? 'text' : 'password'
			}
		},
		components: {
			SvgEyeOutline: () => import('@/components/svg/SvgEyeOutline'),
			SvgEyeLine: () => import('@/components/svg/SvgEyeLine')
		}
	}
</script>

<style lang="scss">
	.password-input {
		position: relative;
		&__title {
			position: absolute;
			top: -6px;
			left: 12px;
			padding: 0 3px;
			display: inline-block;
			font-size: 0.7em;
			color: $primary-light;
			background: #fff;
		}
		&__main {
			padding: 12px;
			width: 100%;
			font-size: 1em;
			border: 1px solid $primary-light;
			border-radius: 5px;
			color: $accent;
			transition: all ease .2s;
			&:focus {
				border: 1px solid $primary;
			}
			&::placeholder {
				color: $primary-light;
			}
		}
		.show-hide-password {
			position: absolute;
			top: 10px;
			right: 15px;
			height: 22px;
			width: 22px;
			stroke: $primary-light;
			fill: $primary-light;
			background: #fff;
			cursor: pointer;
		}
		&:focus-within &__title {
			color: $primary;
		}
		&.invalid {
			.password-input__main {
				border: 1px solid $red;
			}
			.password-input__title {
				color: $red;
			}
			.error {
				display: inline-block;
			}
		}
		.error {
			padding-left: 12px;
			font-size: 0.8em;
			display: none;
			color: $red;
		}
	}
	@media (max-width: 576px) {
		.password-input {
			&__main {
				padding: 8px;
			}
			.show-hide-password {
				top: 6px;
				right: 10px;
				height: 20px;
				width: 20px;
			}
		}
	}
</style>
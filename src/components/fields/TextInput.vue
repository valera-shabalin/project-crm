<template>
	<div class="text-input" :class="{ 'invalid': validate != null && validate.$dirty && validate.$invalid }">
		<span class="text-input__title" v-if="title">{{ title }}</span>
		<input 
			type="text" 
			class="text-input__main"
			:content="content"
			:placeholder="placeholder"
			@input="$emit('input', $event.target.value)">
		<span class="error" v-if="validate.required != null && !validate.required">Заполните это поле</span>
		<span class="error" v-else-if="validate.email != null && !validate.email">Некорректный адрес электронной почты</span>
		<span class="error" v-else-if="validate.minLength != null && !validate.minLength">Минимальная длина - {{ content.length }} из {{ validate.$params.minLength.min }}</span>
		<span class="error" v-else-if="validate.maxLength != null && !validate.maxLength">Максимальная длина {{ validate.$params.maxLength.max }}</span>
	</div>
</template>

<script>
	export default {
		name: 'TextInput',
		model: {
			prop: 'content',
			event: 'input'
		},
		props: {
			placeholder: { type: String, default: 'Введите данные' },
			content: { type: String, default: '' },
			validate: { type: Object, default: null },
			title: { type: String, default: null }
		}
	}
</script>

<style lang="scss">
	.text-input {
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
			transition: all ease .2s;
		}
		&__main {
			padding: 12px;
			width: 100%;
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
		&:focus-within &__title {
			color: $primary;
		}
		&.invalid {
			.text-input__main {
				border: 1px solid $red;
			}
			.text-input__title {
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
		.text-input {
			&__main {
				padding: 10px;
			}
		}
	}
</style>
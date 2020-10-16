<template>
	<div class="text-input" :class="{ 'invalid': validate != null && validate.$dirty && validate.$invalid }">
		<input 
			type="text" 
			class="text-input__main"
			:content="content"
			:placeholder="placeholder"
			@input="$emit('input', $event.target.value)">
		<span class="error" v-if="validate != null && !validate.required">Заполните это поле</span>
		<span class="error" v-else-if="validate.email != null && !validate.email">Некорректный адрес электронной почты</span>
		<span class="error" v-else-if="validate.minLength != null && !validate.minLength">Минимальная длина - {{ validate.$params.minLength.min }}</span>
		<span class="error" v-else-if="validate.maxLength != null && !validate.maxLength">Максимальная длина - {{ validate.$params.maxLength.max }}</span>
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
			validate: { type: Object, default: null }
		}
	}
</script>

<style lang="scss">
	.text-input {
		position: relative;
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
		&.invalid {
			.text-input__main {
				border: 1px solid $red;
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
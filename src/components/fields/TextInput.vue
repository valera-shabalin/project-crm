<template>
	<div class="text-input">
		<input 
			type="text" 
			class="text-input__main"
			:content="content"
			:placeholder="placeholder"
			@input="$emit('input', $event.target.value)">
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
			content: { type: String, default: '' }
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
	}
	@media (max-width: 576px) {
		.text-input {
			&__main {
				padding: 10px;
			}
		}
	}
</style>
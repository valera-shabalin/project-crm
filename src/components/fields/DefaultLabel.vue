<template>
	<div class="default-label" :class="{ 'active': checked, 'invalid': validate != null && validate.$dirty && !validate.checked }">
		<label :for="id"></label>
		<input 
			type="checkbox"
			class="default-label__main"
			:checked="checked"
			:id="id"
			@change="$emit('change', $event.target.checked)">
		<span class="default-label__content"><slot></slot></span>
	</div>
</template>

<script>
	export default {
		name: 'DefaultLabel',
		model: {
			prop: 'checked',
			event: 'change'
		},
		props: {
			checked: { type: Boolean, default: false },
			id: { type: String, default: 'default-label' },
			validate: { type: Object, default: null }
		}
	}
</script>

<style lang="scss">
	.default-label {
		display: flex;
		align-items: center;
		label {
			margin-right: 8px;
			height: 15px;
			width: 15px;
			border: 1px solid $primary-light;
			border-radius: 3px;
			cursor: pointer;
		}
		&__main {
			opacity: 0;
			visibility: hidden;
		}
		&.active label {
			border: 1px solid $primary;
			background: $primary;
		}
		&.invalid label {
			border: 1px solid $red;
		}
		&.invalid &__content {
			color: $red;
			a {
				color: $red;
			}
		}
	}
</style>
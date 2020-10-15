<template>
	<div class="default-label d-flex align-items-center" :class="{ 'active': checked }">
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
			id: { type: String, default: 'default-label' }
		}
	}
</script>

<style lang="scss">
	.default-label {
		label {
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
	}
</style>
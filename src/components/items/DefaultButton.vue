<template>
	<button class="default-button"><slot></slot></button>
</template>

<script>
	export default {
		name: 'DefaultButton'
	}
</script>

<style lang="scss">
	.default-button {
		padding: 12px 12px;
		font-family: $o-semibold;
		text-decoration: none;
		text-align: center;
		border: none;
		border-radius: 5px;
		display: inline-block;
		color: #fff;
		background: $primary;
		transition: all ease .2s;
		cursor: pointer;
		&:hover {
			background: darken($primary, 5)
		}
	}
</style>
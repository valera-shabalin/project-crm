<template>
	<button class="default-button d-flex justify-content-center align-items-center" :class="{ 'disable': disable }">
		<Loader v-if="disable" />
		<span class="content" v-else><slot></slot></span>
	</button>
</template>

<script>
	export default {
		name: 'DefaultButton',
		props: {
			disable: { type: Boolean, default: false }
		},
		components: {
			Loader: () => import('@/components/items/Loader')
		}
	}
</script>

<style lang="scss">
	.default-button {
		padding: 12px;
    min-height: 42px;
		text-align: center;
		border: none;
		border-radius: 5px;
		display: inline-block;
		background: $primary;
		transition: all ease .2s;
		cursor: pointer;
		.content {
			font-family: $o-semibold;
			text-decoration: none;
			color: #fff;
		}
		&.disable {
			background: $primary-light!important;
			cursor: default;
		}
		&:hover {
			background: darken($primary, 5)
		}
		&:active {
			background: darken($primary, 5)
		}
	}
	@media (max-width: 576px) {
		.default-button {
			padding: 10px;
		}
	}
</style>
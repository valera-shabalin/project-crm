<template>
	<div class="loader"></div>
</template>

<script>
	export default {
		name: 'Loader'
	}
</script>

<style lang="scss">
	.loader {
	    border: 2px solid #f3f3f3;
	    border-top: 2px solid $primary;
	    border-radius: 50%;
	    min-width: 18px;
	    min-height: 18px;
	    animation: spin 2s linear infinite;
	}
	@keyframes spin {
	    0% { transform: rotate(0deg); }
	    100% { transform: rotate(360deg); }
	}
</style>
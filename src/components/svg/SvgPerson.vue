<template>
	<svg xmlns='http://www.w3.org/2000/svg' :width='size' :height='size' viewBox='0 0 512 512' @click="$emit('click')">
    <title>Person</title>
    <path d='M344 144c-3.92 52.87-44 96-88 96s-84.15-43.12-88-96c-4-55 35-96 88-96s92 42 88 96z' :style="`stroke:${color}`"/>
    <path d='M256 304c-87 0-175.3 48-191.64 138.6C62.39 453.52 68.57 464 80 464h352c11.44 0 17.62-10.48 15.65-21.4C431.3 352 343 304 256 304z' :style="`stroke:${color}`"/>
  </svg>
</template>

<script>
	export default {
		name: 'SvgPerson',
    props: {
		  size: {
		    type: String,
        default: '30px'
      },
      color: {
		    type: String,
        default: '#C5CEE0'
      }
    }
	}
</script>

<style lang="scss" scoped>
	svg {
    path {
      fill: none;
      stroke-linecap: round;
      stroke-miterlimit: 10;
      stroke-width: 12px;
    }
  }
</style>
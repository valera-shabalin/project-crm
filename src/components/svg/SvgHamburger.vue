<template>
	<svg xmlns='http://www.w3.org/2000/svg' :width='size' :height='size' viewBox='0 0 512 512' @click="$emit('click')">
    <title>Menu</title>
    <line x1='80' y1='160' x2='432' y2='160' :style="`stroke:${color}`"/>
    <line x1='80' y1='256' x2='432' y2='256' :style="`stroke:${color}`"/>
    <line x1='80' y1='352' x2='432' y2='352' :style="`stroke:${color}`"/>
  </svg>
</template>

<script>
	export default {
		name: 'SvgHamburger',
    props: {
		  size: {
		    type: String,
        default: '30px'
      },
      color: {
		    type: String,
        default: '#222B45'
      }
    }
	}
</script>

<style lang="scss" scoped>
	svg {
    line {
      fill: none;
      stroke-linecap: round;
      stroke-miterlimit: 10;
      stroke-width: 28px;
    }
  }
</style>
<template>
	<svg xmlns='http://www.w3.org/2000/svg' :width='size' :height='size' viewBox='0 0 512 512' @click="$emit('click')">
    <title>Email</title>
    <rect x='48' y='96' width='416' height='320' rx='40' ry='40' :style="`stroke:${color}`"/>
    <polyline points='112 160 256 272 400 160' :style="`stroke:${color}`"/>
  </svg>
</template>

<script>
	export default {
		name: 'SvgEmail',
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
    rect, polyline {
      fill: none;
      stroke-linecap: round;
      stroke-miterlimit: 10;
      stroke-width: 24px;
    }
  }
</style>
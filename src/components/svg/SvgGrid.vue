<template>
	<svg xmlns='http://www.w3.org/2000/svg' :width='size' :height='size' viewBox='0 0 512 512' @click="$emit('click')">
    <title>Grid</title>
    <rect x='48' y='48' width='176' height='176' rx='20' ry='20' :style="`stroke:${color}`"/>
    <rect x='288' y='48' width='176' height='176' rx='20' ry='20' :style="`stroke:${color}`"/>
    <rect x='48' y='288' width='176' height='176' rx='20' ry='20' :style="`stroke:${color}`"/>
    <rect x='288' y='288' width='176' height='176' rx='20' ry='20' :style="`stroke:${color}`"/>
  </svg>
</template>

<script>
	export default {
		name: 'SvgGrid',
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
    rect {
      fill: none;
      stroke-linecap: round;
      stroke-miterlimit: 10;
      stroke-width: 12px;
    }
  }
</style>
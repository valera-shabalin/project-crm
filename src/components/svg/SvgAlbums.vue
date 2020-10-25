<template>
	<svg xmlns='http://www.w3.org/2000/svg' :width='size' :height='size' viewBox='0 0 512 512' @click="$emit('click')">
    <title>Albums</title>
    <rect x='64' y='176' width='384' height='256' rx='28.87' ry='28.87' :style="`stroke:${color}`"/>
    <line x1='144' y1='80' x2='368' y2='80' :style="`stroke:${color}`"/>
    <line x1='112' y1='128' x2='400' y2='128' :style="`stroke:${color}`"/>
  </svg>
</template>

<script>
	export default {
		name: 'SvgAlbums',
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
    rect, line {
      fill: none;
      stroke-linecap: round;
      stroke-miterlimit: 10;
      stroke-width: 12px;
    }
  }
</style>
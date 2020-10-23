<template>
	<svg xmlns='http://www.w3.org/2000/svg' :width='size' :height='size' viewBox='0 0 512 512' @click="$emit('click')">
    <title>Settings</title>
    <path d='M304 336v40a40 40 0 01-40 40H104a40 40 0 01-40-40V136a40 40 0 0140-40h152c22.09 0 48 17.91 48 40v40M368 336l80-80-80-80M176 256h256' :style="`stroke:${color}`"/>
  </svg>
</template>

<script>
	export default {
		name: 'SvgLogout',
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
      stroke-width: 24px;
    }
  }
</style>
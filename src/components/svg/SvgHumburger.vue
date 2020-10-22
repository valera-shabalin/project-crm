<template>
 <svg xmlns='http://www.w3.org/2000/svg' :width='w' :height='h' viewBox='0 0 512 512'>
   <title>{{ title }}</title>
   <line x1='80' y1='160' x2='432' y2='160'/>
   <line x1='80' y1='256' x2='432' y2='256'/>
   <line x1='80' y1='352' x2='432' y2='352'/>
 </svg>
</template>

<script>
  export default {
    name: 'SvgHumburger',
    props: {
      title: {
        type: String,
        default: 'Menu'
      },
      h: {
        type: Number,
        default: 30
      },
      w: {
        type: Number,
        default: 30
      }
    }
  }
</script>

<style lang="scss">
  svg {
    line {
      fill: none;
      stroke: $accent;
      stroke-linecap:round;
      stroke-width:24px;
    }
  }
</style>
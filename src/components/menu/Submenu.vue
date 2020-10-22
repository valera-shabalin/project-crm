<template>
  <div class="submenu">
    <h4>{{ title }}</h4>
  </div>
</template>

<script>
  export default {
    name: 'Submenu',
    props: {
      title: {
        type: String,
        default: 'Меню'
      }
    }
  }
</script>

<style lang="scss">
  .submenu {

  }
</style>
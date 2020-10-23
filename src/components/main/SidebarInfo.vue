<template>
  <div class="sidebar__info">
    <Avatar
        :path="'https://img2.goodfon.ru/original/1920x1280/2/a5/krshki-lvy-lvyata-malenkie.jpg'"
        :size="120"/>
  </div>
</template>

<script>
  export default {
    name: 'SidebarInfo'
  }
</script>

<style lang="scss" scoped>
  .sidebar__info {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
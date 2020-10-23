<template>
  <div class="sidebar__info">
    <Avatar
        :path="'https://sun9-56.userapi.com/jyQTGKCCHHVrEd_QvqUstoelPdztDkBQmmsJKA/tb271uZXDuQ.jpg'"
        :size="120"/>
    <h3>Валерий Шабалин</h3>
  </div>
</template>

<script>
  export default {
    name: 'SidebarInfo'
  }
</script>

<style lang="scss" scoped>
  .sidebar__info {
    padding: 0 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    h3 {
      margin-top: 15px;
      text-align: center;
      color: #fff;
    }
  }
</style>
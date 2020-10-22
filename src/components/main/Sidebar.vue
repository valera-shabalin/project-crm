<template>
  <aside class="sidebar" :class="{ 'open': open }">
    <div class="sidebar__info d-flex flex-column align-items-center">
      <Avatar :online="true" />
      <h3>Валерий Шабалин</h3>
    </div>
    <div class="sidebar__nav">
      <Submenu :title="'Главное меню'" />
      <Submenu :title="'Статистика'" />
    </div>
  </aside>
</template>

<script>
  export default {
    name: 'Sidebar',
    props: {
      open: Boolean
    },
    components: {
      Submenu: () => import('@/components/menu/Submenu')
    }
  }
</script>

<style lang="scss">
  .sidebar {
    padding: 35px 0;
    height: 100%;
    flex-basis: 0;
    flex-shrink: 1;
    background: $accent;
    overflow-x: hidden;
    transition: all ease-out .4s;
    &__info {
      .avatar {
        margin-bottom: 15px;
        height: 120px;
        width: 120px;
        span {
          font-family: $o-bold;
          font-size: 3em;
        }
      }
      h3 {
        color: #fff;
      }
    }
    .submenu {
      h4 {
        color: $primary-light;
      }
    }
    &.open {
      flex-basis: 350px;
    }
  }
</style>
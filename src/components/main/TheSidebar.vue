<template>
  <aside class="sidebar d-flex flex-column align-content-center">
    <SidebarInfo />
    <SidebarMenu />
  </aside>
</template>

<script>
  export default {
    name: 'TheSidebar',
    components: {
      SidebarInfo: () => import('@/components/main/SidebarInfo'),
      SidebarMenu: () => import('@/components/main/SidebarMenu')
    }
  }
</script>

<style lang="scss" scoped>
  .sidebar {
    padding: 35px 0;
    height: 100%;
    flex: 0 1 0;
    background: $accent;
    transition: all ease-out .4s;
    overflow: hidden;
    &.open {
      flex: 0 1 350px;
    }
  }
  @media (min-width: 992px) and (max-width: 1199px) {
    .sidebar.open {
      flex: 0 1 300px;
    }
  }
  @media (min-width: 768px) and (max-width: 991px) {
    .sidebar.open {
      flex: 0 1 250px;
    }
  }
  @media (max-width: 767px) {
    .sidebar.open {
      flex: 0 1 250px;
    }
  }
  @media (max-width: 576px) {
    .sidebar {
      display: none!important;
    }
  }
</style>
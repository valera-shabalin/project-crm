<template>
  <aside class="sidebar d-flex flex-column align-content-center">
    <SvgHamburger class="sidebar__close" :color="'#C5CEE0'" @click="$emit('close')"/>
    <SidebarInfo />
    <SidebarMenu />
    <SidebarFooter />
  </aside>
</template>

<script>
  export default {
    name: 'TheSidebar',
    components: {
      SidebarInfo: () => import('@/components/main/SidebarInfo'),
      SidebarMenu: () => import('@/components/main/SidebarMenu'),
      SidebarFooter: () => import('@/components/main/SidebarFooter'),
      SvgHamburger: () => import('@/components/svg/SvgHamburger')
    }
  }
</script>

<style lang="scss" scoped>
  .sidebar {
    position: relative;
    padding: 35px 0;
    height: 100%;
    flex: 0 0 0;
    background: $accent;
    transition: all ease-out .3s;
    overflow-x: hidden;
    &__menu {
      margin-top: 50px;
      opacity: 0;
    }
    &__info {
      opacity: 0;
    }
    &__close {
      position: absolute;
      right: 15px;
      top: 15px;
      visibility: hidden;
      opacity: 0;
    }
    &.open {
      flex: 0 0 350px;
    }
    &.open &__menu {
      opacity: 1;
    }
    &.open &__info {
      opacity: 1;
    }
  }
  @media (min-width: 992px) and (max-width: 1199px) {
    .sidebar.open {
      flex: 0 0 300px;
    }
  }
  @media (min-width: 768px) and (max-width: 991px) {
    .sidebar.open {
      flex: 0 0 290px;
    }
  }
  @media (max-width: 767px) {
    .sidebar.open {
      flex: 0 0 250px;
      font-size: 0.9em;
    }
  }
  @media (max-width: 576px) {
    .sidebar.open {
      flex: 0 0 100%;
      font-size: 1em;
      .sidebar__close {
        visibility: visible;
        opacity: 1;
      }
    }
  }
</style>
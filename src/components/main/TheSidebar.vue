<template>
  <aside class="sidebar">
    <p>dasdasd</p>
  </aside>
</template>

<script>
  export default {
    name: 'TheSidebar'
  }
</script>

<style lang="scss" scoped>
  .sidebar {
    height: 100%;
    flex: 0 1 350px;
    background: $accent;
    transition: all ease-out .4s;
    overflow: hidden;
    &.open {
      flex: 0 1 0;
    }
  }
  @media (min-width: 992px) and (max-width: 1199px) {
    .sidebar {
      flex: 0 1 300px;
    }
  }
  @media (min-width: 768px) and (max-width: 991px) {
    .sidebar {
      flex: 0 1 250px;
    }
  }
  @media (max-width: 767px) {
    .sidebar {
      flex: 0 1 200px;
    }
  }
  @media (max-width: 576px) {
    .sidebar {
      display: none;
    }
  }
</style>
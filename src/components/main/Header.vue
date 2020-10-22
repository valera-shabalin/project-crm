<template>
  <header class="header d-flex align-items-center justify-content-between">
    <div class="header__humb">
      <SvgHumburger />
    </div>
    <div class="header__tool">
      <Notifications :notifications="notifications" :class="{ 'active': $route.name == 'Notifications' }" />
      <router-link active-class="active" to="/settings">
        <SvgGear :title="'Your settings'" />
      </router-link>
    </div>
  </header>
</template>

<script>
  export default {
    name: 'Header',
    data: () => ({
      notifications: true
    }),
    components: {
      SvgHumburger: () => import('@/components/svg/SvgHumburger'),
      SvgGear: () => import('@/components/svg/SvgGear'),
      Notifications: () => import('@/components/items/Notifications')
    }
  }
</script>

<style lang="scss">
  .header {
    padding: 20px 30px;
    box-shadow: 0px 4px 10px 2px #FAFAFA;
    &__humb {
      cursor: pointer;
    }
    &__tool {
      .notifications {
        margin-right: 20px;
        &.active svg path, line {
          stroke: $primary;
        }
      }
      svg {
        cursor: pointer;
        path, line {
          transition: all ease .2s;
        }
        &:hover path, line {
          stroke: $primary;
        }
      }
      a.active svg path, line {
        stroke: $primary;
      }
    }
  }
  @media (max-width: 576px) {
    .header {
      padding: 15px 20px;
    }
  }
</style>
<template>
  <div class="sidebar__submenu">
    <h4 v-if="title">{{ title }}</h4>
    <nav v-if="links">
      <router-link
          v-for="(link, index) of links"
          :to="link.to"
          active-class="active"
          exact
          :key="index"><component :is="link.icon"></component><span>{{ link.title }}</span></router-link>
    </nav>
  </div>
</template>

<script>
  export default {
    name: 'SidebarSubmenu',
    props: {
      title: {
        type: String,
        default: null
      },
      links: {
        type: Array,
        default: null
      }
    },
    components: {
      SvgGrid: () => import('@/components/svg/SvgGrid'),
      SvgUsers: () => import('@/components/svg/SvgUsers'),
      SvgPerson: () => import('@/components/svg/SvgPerson'),
      SvgLayouts: () => import('@/components/svg/SvgLayouts'),
      SvgAlbums: () => import('@/components/svg/SvgAlbums')
    }
  }
</script>

<style lang="scss" scoped>
  .sidebar__submenu {
    h4 {
      margin: 0 10px 10px 30px;
      color: $primary-light;
    }
    nav {
      a {
        padding: 12px 20px 12px 50px;
        display: flex;
        align-items: center;
        text-decoration: none;
        color: $primary-light;
        transition: all ease .2s;
        svg {
          margin-right: 8px;
        }
        &:hover {
          background: lighten($accent, 3);
        }
        &.active {
          background: lighten($accent, 3);
        }
      }
    }
  }
  @media (max-width: 767px) {
    .sidebar__submenu {
      h4 {
        margin: 0 10px 10px 20px;
      }
      nav {
        a {
          padding: 10px 20px 10px 30px;
        }
      }
    }
  }
</style>
<template>
  <div class="sidebar__menu">
    <SidebarSubmenu :title="'Меню'" :links="menuLinks"/>
    <SidebarSubmenu :title="'Статистика'" :links="statLinks"/>
  </div>
</template>

<script>
  export default {
    name: 'SidebarMenu',
    data: () => ({
      menuLinks: [
          { title: 'Рабочий стол', to: '/work-space', icon: 'SvgGrid' },
          { title: 'Группы', to: '/groups', icon: 'SvgGrid' },
          { title: 'Компании', to: '/companies', icon: 'SvgGrid' },
          { title: 'Проекты', to: '/projects', icon: 'SvgGrid' }
      ],
      statLinks: [
          { title: 'Рабочий стол', to: '/work-space', icon: 'SvgGrid' },
          { title: 'Группы', to: '/groups', icon: 'SvgGrid' },
          { title: 'Компании', to: '/companies', icon: 'SvgGrid' },
          { title: 'Проекты', to: '/projects', icon: 'SvgGrid' }
      ]
    }),
    components: {
      SidebarSubmenu: () => import('@/components/main/SidebarSubmenu')
    }
  }
</script>

<style lang="scss" scoped>
  .sidebar__menu {
    transition: all ease-out .1s;
    .sidebar__submenu {
      margin-bottom: 30px;
    }
  }
  @media (max-width: 767px) {
    .sidebar__menu {
      .sidebar__submenu {
        margin-bottom: 20px;
      }
    }
  }
</style>
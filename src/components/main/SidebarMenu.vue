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
          { title: 'Рабочий стол', to: '/', icon: 'SvgGrid' },
          { title: 'Группы', to: '/groups', icon: 'SvgUsers' },
          { title: 'Контакты', to: '/contacts', icon: 'SvgPerson' },
          { title: 'Проекты', to: '/projects', icon: 'SvgLayouts' }
      ],
      statLinks: [
          { title: 'Личная статистика', to: '/statistics', icon: 'SvgPerson' },
          { title: 'Статистика по задачам', to: '/statistics/tasks', icon: 'SvgAlbums' },
          { title: 'Статистика по проектам', to: '/statistics/projects', icon: 'SvgLayouts' }
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
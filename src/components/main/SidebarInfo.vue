<template>
  <div class="sidebar__info">
    <Avatar
        :path="'https://sun9-56.userapi.com/jyQTGKCCHHVrEd_QvqUstoelPdztDkBQmmsJKA/tb271uZXDuQ.jpg'"
        :size="120"/>
    <h3>Валерий Шабалин</h3>
    <ul>
      <li>
        <SvgEmail :size="'20px'"/>
        <span>shabalinvalera.ts@gmail.com</span>
      </li>
      <li>
        <SvgPhone :size="'20px'"/>
        <span>+7 (951) 176-06-78</span>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'SidebarInfo',
    components: {
      SvgEmail: () => import('@/components/svg/SvgEmail'),
      SvgPhone: () => import('@/components/svg/SvgPhone')
    }
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
    ul {
      margin-top: 15px;
      li {
        margin: 5px 0;
        display: flex;
        justify-content: center;
        align-items: center;
        color: $primary-light;
        svg {
          margin-right: 8px;
        }
      }
    }
  }
</style>
<template>
  <div class="avatar">
    <img :src="path" :alt="alt" v-if="path">
    <span v-else>{{ value }}</span>
    <div class="status"></div>
  </div>
</template>

<script>
  export default {
    name: 'Avatar',
    props: {
      path: {
        type: String,
        default: null
      },
      alt: {
        type: String,
        default: 'Avatar'
      },
      value: {
        type: String,
        default: 'U'
      }
    }
  }
</script>

<style lang="scss">
  .avatar {
    position: relative;
    height: 50px;
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: $primary-light;
    .status {
      position: absolute;
      bottom: 0;
      right: 15px;
      height: 20px;
      width: 20px;
      border-radius: 50%;
      background: $green;
    }
  }
</style>
<template>
  <div class="avatar" :style="`height:${size}px;width:${size}px`">
    <div class="avatar__body">
      <img :src="path" :alt="alt" v-if="path">
      <span v-else>{{ value }}</span>
    </div>
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
      },
      size: {
        type: Number,
        default: 50
      }
    }
  }
</script>

<style lang="scss">
  .avatar {
    position: relative;
    &__body {
      height: 100%;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      overflow: hidden;
      img {
        max-height: 100%;
      }
    }
    .status {
      position: absolute;
      right: 18px;
      bottom: 0;
      height: 20px;
      width: 20px;
      border-radius: 50%;
      background: $green;
    }
  }
</style>
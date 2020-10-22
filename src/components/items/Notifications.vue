<template>
	<div class="notifications">
    <div class="status" v-if="notifications"></div>
    <SvgNotifications />
  </div>
</template>

<script>
	export default {
		name: 'Notifications',
    props: {
      notifications: {
        type: Boolean,
        default: false
      }
    },
		components: {
		  SvgNotifications: () => import('@/components/svg/SvgNotifications')
    }
	}
</script>

<style lang="scss">
  .notifications {
    position: relative;
    display: inline-block;
    .status {
      position: absolute;
      top: 3px;
      right: 3px;
      height: 12px;
      width: 12px;
      border-radius: 50%;
      background: $yellow;
    }
  }
</style>
<template>
  <div class="welcome">
    <spinner type='ripple'></spinner>
  </div>
</template>

<script>
import { Spinner, Group, Cell } from 'vux'

export default {
  ready () {
    setTimeout(() => {
      this.$route.router.go({path: '/search', replace: true})
    }, 3000)
  },
  components: {
    Spinner,
    Cell,
    Group
  },
  data () {
    return {
      types: ['android', 'ios', 'ios-small', 'bubbles', 'circles', 'crescent', 'dots', 'lines', 'ripple', 'spiral']
    }
  }
}
</script>

<style lang='scss'>
.welcome {
  display:flex;
  position: fixed;
  justify-content:center;
  align-items: center;
  width: 100%;
  height: 100%;
  z-index: 99999;
  background-color: #fff;
}
.spinner, .spinner svg {
  width: 128px;
  height: 528px;
}
</style>
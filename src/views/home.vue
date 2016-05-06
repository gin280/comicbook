<template>
  <div>
    <scroller lock-x scrollbar-y>
      <div>
        <button v-link="{path:'home/details'}">is</button>
        <img-item></img-item>
        <img-item></img-item>
        <img-item></img-item>
        <img-item></img-item>
        <img-item></img-item>
        <img-item></img-item>
        <img-item></img-item>
        <img-item></img-item>
      </div>
    </scroller>
  </div>
</template>

<script>
import { Scroller, Divider, Spinner } from 'vux'
import ImgItem from '../components/img-item.vue'

export default {
  components: {
    Scroller,
    Divider,
    Spinner,
    ImgItem
  }
}
</script>

<style scoped>
@import '~vux/vux.css';
</style>

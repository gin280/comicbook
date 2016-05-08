<template>
  <div>

    <tab :line-width=1 active-color='#fc378c'>
      <tab-item :selected="demo === '热门'"  @click="toggle1 = true, toggle2 = false, demo = '热门' ">热门</tab-item>
      <tab-item :selected="demo === '分类'"  @click="toggle2 = true, toggle1 = false, demo = '分类'">分类</tab-item>
    </tab>
    <hot v-if='toggle1'></hot>
    <sel v-if='toggle2'></sel>
  </div>
 <!--  <look></look> -->
</template>

<script>
import { Tab, TabItem } from 'vux'
import Sel from './search/sel'
import Hot from './search/hot'
import Look from './search/look'
export default {
  components: {
    Tab,
    TabItem,
    Sel,
    Hot,
    Look
  },
  data () {
    return {
      demo: '热门',
      toggle1: true,
      toggle2: false,
      results: [],
      value: ''
    }
  }
}
</script>

<style scoped lang='scss'>
@import '~vux/vux.css';
</style>
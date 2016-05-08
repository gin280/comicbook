<template>
  <div>
    
    <router-view transition='fade' transition-mode='out-in' keep-alive></router-view>
    <tabbar v-if='isIndex'>
      <tabbar-item selected v-link="{path:'home'}">
        <img slot="icon" src="./assets/demo/icon_nav_button.png">
        <span slot="label">Home</span>
      </tabbar-item>
      <tabbar-item selected v-link="{path:'list'}">
        <img slot="icon" src="./assets/demo/icon_nav_button.png">
        <span slot="label">List</span>
      </tabbar-item>
      <tabbar-item show-dot v-link="{path:'search'}">
        <img slot="icon" src="./assets/demo/icon_nav_msg.png">
        <span slot="label">Search</span>
      </tabbar-item>
      <tabbar-item v-link="{path:'user'}">
        <img slot="icon" src="./assets/demo/icon_nav_article.png">
        <span slot="label">Me</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from 'vux'

export default {
  components: {
    Tabbar,
    TabbarItem
  },
  data () {
    return {
      isIndex: true
    }
  }
}
</script>

<style>
@import '~vux/vux.css';
[v-cloak] {
  display: none;
}
.fade-transition {
  transition: opacity .3s ease;
}
.fade-enter, .fade-leave {
  opacity: 0;
}
</style>

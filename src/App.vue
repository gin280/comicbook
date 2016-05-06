<template>
  <div>
    
    <router-view transition='fade' transition-mode='out-in' keep-alive></router-view>
    <tabbar>
      <tabbar-item selected v-link="{path:'home'}">
        <img slot="icon" src="./assets/demo/icon_nav_button.png">
        <span slot="label">Home</span>
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
  }
}
</script>

<style>
@import '~vux/vux.css';

</style>

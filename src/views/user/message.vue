<template>
  <div class="message-list">
  <button v-link="{path:'user', replace: true}" >back</button>
    <scroller>
      <div class="ui-row-flex ui-whitespace ui-arrowlink" v-for='item in items' v-link="{name: 'item', params:{itemId:item.id}}">
      <div class="ui-col ui-col-1">
        <img :src="item.thumbnail.path + '.jpg'">
      </div>
      <div class="ui-col ui-col-4">
        <h3>{{item.name}}</h3>
        <h5>{{item.id}}</h5>
        <h5>{{item.modified}}</h5>
      </div>
    </div>
    </scroller>
  </div>

</template>
<script>
import Scroller from 'vux'

export default {
  data () {
    return {
      items: []
    }
  },
  ready () {
    this.$http.get('http://gateway.marvel.com:80/v1/public/characters?apikey=2c333eed0a1444da012fe1caf2e55779')
      .then((data) => {
        const res = data.data.data.results
        console.log(res)
        for (let i = 0; i < res.length; i++) {
          this.items.push(res[i])
        }
      })
  },
  components: {
    Scroller
  }
}
</script>

<style scoped lang='scss'>
@import '~vux/vux.css';

.ui-row-flex {
  margin-top: 4%;
  border-bottom: 2px solid #eee;
}

.ui-col-1 {
  padding-right:2%;
  img {
    width: 100%;
    height: auto;
  }
}
h5 {
  color: #333;
}

.weui_tabbar {
  background-color: red;
}
</style>
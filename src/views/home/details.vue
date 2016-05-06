<template>
  <div class="box">
    <h1>this is a wonderful world</h1>
    <div v-for='i in items'>
      <p>{{i.id}}</p>
      
    </div>
  </div>
</template>

<script>
export default {
  ready () {
    this.$http.get('http://gateway.marvel.com:80/v1/public/characters?apikey=2c333eed0a1444da012fe1caf2e55779')
      .then((data) => {
        const res = data.data.data.results
        for (let i = 0; i < res.length; i++) {
          this.items.push(res[i])
        }
      })
  },
  data () {
    return {
      items: []
    }
  }
}
</script>

<style lang='scss'>
@import '~vux/vux.css';

</style>
<template>
  <div>
    {{content.id}}
  </div>
</template>

<script>
export default {
  route: {
    data (transtion) {
      this.$http.get(`http://gateway.marvel.com:80/v1/public/characters/${this.$route.params.itemId}?apikey=2c333eed0a1444da012fe1caf2e55779`)
        .then((data) => {
          this.content = data.data.data.results[0]
          console.log(this.content)
        })
    }
  },
  data () {
    return {
      content: ''
    }
  }
}
</script>
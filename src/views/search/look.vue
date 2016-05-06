<template>
  <div>
    <search @result-click="resultClick" @on-change="getResult" :results="results" :value.sync="value"></search>
  </div>
</template>

<script>
import { Search } from 'vux'

export default {
  components: {
    Search
  },
  methods: {
    resultClick: function (item) {
      console.log('you click the result item: ' + JSON.stringify(item))
    },
    getResult: function (val) {
      this.results = getResult(this.value)
    }
  },
  data () {
    return {
      results: [],
      value: ''
    }
  }
}

function getResult (val) {
  let rs = []
  for (let i = 0; i < 40; i++) {
    rs.push({
      title: `${val} result: ${i + 1} `,
      other: i
    })
  }
  return rs
}
</script>

<template>
  <div class="scroll">

    <divider>custom pullup html template</divider>
    <scroller lock-x scrollbar-y use-pullup height="700px" :pullup-status.sync="pullupStatus" @pullup:loading="load3">
      <!--content slot-->
      <div class="box2">
        <p v-for="i in n3">placeholder {{i}}</p>
      </div>

      <!--pullup slot-->
      <div slot="pullup" class="xs-plugin-pullup-container xs-plugin-pullup-up" style="position: fixed; width: 100%; height: 40px; bottom: 40px; text-align: center;">
        <span v-show="pullupStatus === 'default'"></span>
        <span class="pullup-arrow" v-show="pullupStatus === 'down' || pullupStatus === 'up'" :class="{'rotate': pullupStatus === 'up'}">↑</span>
        <span v-show="pullupStatus === 'loading'"><spinner type="ios-small" style='top:-100px'></spinner></span>
      </div>
    </scroller>

  </div>
</template>

<script>
import { Scroller, Divider, Spinner } from 'vux'

export default {
  components: {
    Scroller,
    Divider,
    Spinner
  },
  methods: {
    load1: function (uuid) {
      const _this = this
      setTimeout(function () {
        _this.n1 += 10
        setTimeout(function () {
          _this.$broadcast('pullup:reset', uuid)
        }, 10)
      }, 2000)
    },
    load2: function (uuid) {
      const _this = this
      setTimeout(function () {
        if (_this.n2 === 300) {
          _this.$broadcast('pullup:done', uuid)
        } else {
          _this.n2 += 100
          setTimeout(function () {
            _this.$broadcast('pullup:reset', uuid)
          }, 10)
        }
      }, 2000)
    },
    load3: function (uuid) {
      const _this = this
      setTimeout(function () {
        _this.n3 += 10
        setTimeout(function () {
          _this.$broadcast('pullup:reset', uuid)
        }, 10)
      }, 2000)
    }
  },
  data () {
    return {
      pullupStatus: 'default',
      n1: 10,
      n2: 100,
      n3: 10,
      pullupConfig2: {
        content: '下拉刷新',
        downContent: '下拉刷新',
        upContent: '释放刷新',
        loadingContent: '加载中'
      }
    }
  }
}
</script>

<style scoped>
@import '~vux/vux.css';
.scroll {
  background-color: #ddd;
}
</style>

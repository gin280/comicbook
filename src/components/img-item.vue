<template>
  <div>
    <flexbox orient="vertical">
      <flexbox-item>
        <div class="flex-demo">
          <h3><strong>都市</strong><span><icon type="info"></icon> zxy_wtfm</span></h3>
          <div><img src="http://img4.imgtn.bdimg.com/it/u=2587651509,2892390707&fm=23&gp=0.jpg"></div>
          <p><span>第一话 我和我的妻子</span><span><icon type="info"></icon> 51万</span><span><icon type="info"></icon> 666666 </span></p>
        </div>
      </flexbox-item>
    </flexbox>
  </div>
</template>

<script>
import { Flexbox, FlexboxItem, Icon } from 'vux'

export default {
  components: {
    Flexbox,
    FlexboxItem,
    Icon
  }
}
</script>

<style lang='scss'>
@import '~vux/vux.css';

.flex-demo {
  border: 1px solid #eee;
  font-size: 12px;

  div {
    img {
      max-width: 100%;
    }
  }
  h3 {
    height: 40px;
    line-height: 40px;
    margin-left: 2%;
    margin-right: 2%;
    strong {
      color: #fff;
      background-color: red;
      border-radius:30px;
      padding: 1%;
    }
    span {
      color: #333;
      display: inline-block;
      float: right;
    }
  }
  p {
    height: 40px;
    margin-left: 2%;
    margin-right: 2%;
    span {
      display: inline-block;
      font-size: 17px;
      &:nth-child(2) {
        float:right;
      }
      &:nth-child(3) {
        float:right;
      }
    }
  }
}
</style>
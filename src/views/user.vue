<template>
  <div>
    <div>
      <p class="center"><img src="http://img4.imgtn.bdimg.com/it/u=2587651509,2892390707&fm=23&gp=0.jpg" ></p>
    </div>
    <group>
      <cell title="我的消息" is-link>
        <icon type="success" slot="icon" style='margin-right:10px'></icon>
      </cell>
    </group>
    <group>
      <cell title="我的关注" is-link>
        <icon type="success" slot="icon" style='margin-right:10px'></icon>
      </cell>
      <cell title="我的收藏" is-link>
        <icon type="success" slot="icon" style='margin-right:10px'></icon>
      </cell>
    </group>
    <group>
      <cell title="设置" is-link>
        <icon type="success" slot="icon" style='margin-right:10px'></icon>
      </cell>
    </group>
  </div>
</template>

<script>
import Group from 'vux/components/group'
import Cell from 'vux/components/cell'
import Icon from 'vux/components/icon'

export default {
  components: {
    Group,
    Cell,
    Icon
  }
}
</script>

<style scoped lang='scss'>
@import '~vux/vux.css';
.center {
  text-align: center;
  padding-top: 20px;
  font-size: 18px;
  color: #fff;
  background-color: #FD4C3A;
  img {
    height: 100px;
    border-radius:50%;
    border: 4px solid #ececec;
  }
}

</style>
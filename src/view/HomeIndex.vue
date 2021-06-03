<template>
  <div class="home-index">
    <div class="button-list">
      <div class="item" v-for="(item, index) in list" :key="index">
        <el-button @click="$router.push(item.route)">{{item.title}}</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeIndex",
  data () {
    return {
      list: [
        {
          title: '遮罩层',
          route: '/test-layer'
        },
        {
          title: '城市',
          route: '/test-city'
        },
        {
          title: '2048',
          route: '/2048'
        },
        {
          title: '日期和多级选择',
          route: '/date-multi'
        },
        {
          title: '加载动画',
          route: '/load-animation'
        },
        {
          title: '画布',
          route: '/canvas'
        },
        {
          title: 'webGL',
          route: '/gl-boom'
        },
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.home-index {

}
</style>
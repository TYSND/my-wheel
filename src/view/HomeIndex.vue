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
          title: '随便测试',
          route: '/test-some'
        },
        {
          title: '画布',
          route: '/canvas'
        },
        {
          title: 'webGL',
          route: '/gl-boom'
        },
        {
          title: 'three.js',
          route: '/three'
        },
        {
          title: 'Cyberpunk',
          route: '/cyber-punk'
        },
        {
          title: 'AboutUs',
          route: '/about-us'
        },
        {
          title: 'FbxModel',
          route: '/fbx-model'
        },
        {
          title: '跳一跳',
          route: '/wx-jump'
        },
        {
          title: 'css paint',
          route: '/css-paint'
        },
        {
          title: '麻将',
          route: '/go-mah-jong'
        },
        {
          title: 'cn-chess',
          route: 'cn-chess'
        },
        {
          title: '滑动验证',
          route: 'login-puzzle'
        },
        {
          title: 'SpiderCard',
          route: 'spider-card'
        },
        {
          title: 'StudyThree',
          route: 'study-three'
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.home-index {

}
</style>
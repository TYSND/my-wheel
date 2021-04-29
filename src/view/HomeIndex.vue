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
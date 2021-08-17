<template>
  <div class="login-puzzle">
    <el-button @click="login">
      登录
    </el-button>
    <drag-puzzle v-if="showDragPuzzle"
                 @success="success"
                 @fail="fail"
    ></drag-puzzle>
  </div>
</template>

<script>
import DragPuzzle from './login-puzzle/DragPuzzle.vue'
export default {
  name: "LoginPuzzle",
  components: { DragPuzzle },
  data () {
    return {
      showDragPuzzle: false
    }
  },
  methods: {
    login () {
      console.log('login')
      this.showDragPuzzle = true
    },
    success () {
      this.showDragPuzzle = false
      // 调接口登录
      this.$notify.success({
        title: '调接口',
        message: '登录'
      })
    },
    fail () {
      this.showDragPuzzle = false
    }
  }
}
</script>

<style lang="less" scoped>
.login-puzzle {

}
</style>
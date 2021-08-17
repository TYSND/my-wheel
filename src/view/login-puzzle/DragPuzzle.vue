<template>
  <div class="drag-puzzle" @click.self="close">
    <div class="verify-outer">
      <div class="bg-img">
        <div class="target"></div>
        <div class="puzzle" ref="slidePuzzle"></div>
        <div class="verfiy-res" v-show="isSuccess || isFail">
          <div class="success-res" v-show="isSuccess">
            <i class="el-icon-check"></i>
            验证成功
          </div>
          <div class="fail-res" v-show="isFail">
            <i class="el-icon-close"></i>
            验证失败
          </div>
        </div>
      </div>
      <div class="slide-bar-outer">
        <div class="slide-bar"></div>
        <div class="slide-block" @mousedown="slide($event)"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DragPuzzle",
  data () {
    return {
      positionX: 0,
      isSuccess: false,
      isFail: false
    }
  },
  methods: {
    success () {
      this.isSuccess = false
      this.isFail = false
      this.$emit('success')
    },
    fail () {
      this.isSuccess = false
      this.isFail = false
      this.$emit('fail')
    },
    slide (e) {
      let that = this
      let block = e.target
      let puzzle = this.$refs.slidePuzzle
      let disX = e.clientX - block.offsetLeft
      let puzzleX = puzzle.offsetLeft
      document.onmousemove = (e)=> {
        //鼠标按下并移动的事件
        //用鼠标的位置减去鼠标相对元素的位置，得到元素的位置
        let left = e.clientX - disX
        let left2 = left + puzzleX

        //绑定元素位置到positionX和positionY上面
        that.positionX = left2

        //移动当前元素
        if (left >= 0 && left <= 350) {
          block.style.left = left + 'px'
          puzzle.style.left = left2 + 'px'
        }
      }
      document.onmouseup = () => {
        document.onmousemove = null
        document.onmouseup = null
        if (puzzle.offsetLeft >= 290 && puzzle.offsetLeft <= 310) {
          // this.$notify.success({
          //   title: '成功',
          //   message: '验证成功'
          // })
          // that.close()
          this.isSuccess = true
          this.isFail = false
          setTimeout(() => {
            that.success()
          }, 1000)
        } else {
          block.style.left = e.clientX - disX + 'px'
          puzzle.style.left = puzzleX + 'px'
          this.isSuccess = false
          this.isFail = true
          setTimeout(() => {
            that.fail()
          }, 1000)
        }
      }
    }
  }
}
</script>

<style lang="less" scoped>
.drag-puzzle {
  width: 100vw;
  height: 100vh;
  background-color: rgba(16, 16, 16, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  cursor: pointer;
  .verify-outer {
    cursor: default;
    width: 420px;
    height: 270px;
    position: absolute;
    top: calc(50vh - 135px);
    left: calc(50vw - 210px);
    //border: 1px solid red;
    padding: 10px;
    background-color: #FFFFFF;
    border-radius: 4px;
    .bg-img {
      position: relative;
      background-image: linear-gradient(to right, #d2d24a 50%, #5a92ee 50%, #5a92ee 100%);
      width: 100%;
      height: 220px;
      .target {
        width: 50px;
        height: 50px;
        background-color: #ffffff;
        position: absolute;
        top: 100px;
        left: 300px;
      }
      .puzzle {
        width: 50px;
        height: 50px;
        background-color: #427dd5;
        position: absolute;
        top: 100px;
        left: 0px;
      }
      .verfiy-res {
        width: 100%;
        height: 30px;
        position: absolute;
        bottom: 0;
        z-index: 10;
        .success-res {
          background-color: rgba(169, 205, 84, 0.8);
          height: 100%;
          display: flex;
          //justify-content: center;
          align-items: center;
          color: #FFFFFF;
        }
        .fail-res {
          background-color: rgba(205, 98, 84, 0.8);
          height: 100%;
          display: flex;
          //justify-content: center;
          align-items: center;
          color: #FFFFFF;
        }
      }
    }
    .slide-bar-outer {
      width: 100%;
      height: 30px;
      position: relative;
      .slide-bar {
        width: 100%;
        height: 10px;
        background-color: #d0d0d0;
        position: absolute;
        top: 10px;
        border-radius: 4px;
      }
      .slide-block {
        user-select: none;
        cursor: pointer;
        width: 50px;
        height: 24px;
        position: absolute;
        top: 3px;
        box-sizing: border-box;
        border: 1px solid #d0d0d0;
        border-radius: 4px;
        background-repeat: no-repeat;
        background-position: center;
        background-size: 50px 15px;
        background-image: linear-gradient(to right,
        white calc(20% - 0.5px),
        black calc(20% - 0.5px),
        black calc(20% + 0.5px),
        white calc(20% + 0.5px),
        white calc(40% - 0.5px),
        black calc(40% - 0.5px),
        black calc(40% + 0.5px),
        white calc(40% + 0.5px),
        white calc(60% - 0.5px),
        black calc(60% - 0.5px),
        black calc(60% + 0.5px),
        white calc(60% + 0.5px),
        white calc(80% - 0.5px),
        black calc(80% - 0.5px),
        black calc(80% + 0.5px),
        white calc(80% + 0.5px),
        );
      }
    }
  }
}
</style>
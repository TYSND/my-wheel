<template>
  <div class="test-some">
    <div class="btn-border-outer">
      <div class="btn-border"></div>
    </div>
    <div class="color-border-outer">
      <div class="color-border"></div>
    </div>
<!--    <div class="mac-menu">-->
<!--      <div class="item-list">-->
<!--        <div class="item" ref="item0" @mousemove="overItem($event, 0)" @mouseleave="leaveItem"></div>-->
<!--        <div class="item" ref="item1" @mousemove="overItem($event, 1)" @mouseleave="leaveItem"></div>-->
<!--        <div class="item" ref="item2" @mousemove="overItem($event, 2)" @mouseleave="leaveItem"></div>-->
<!--        <div class="item" ref="item3" @mousemove="overItem($event, 3)" @mouseleave="leaveItem"></div>-->
<!--        <div class="item" ref="item4" @mousemove="overItem($event, 4)" @mouseleave="leaveItem"></div>-->
<!--        <div class="item" ref="item5" @mousemove="overItem($event, 5)" @mouseleave="leaveItem"></div>-->
<!--      </div>-->
<!--    </div>-->
    <div class="test-border-radius"></div>
    <div class="test-border-radius2"></div>
    <div class="test-border-radius3"></div>

    <div class="face">
      <div class="face1"></div>
      <div class="face2"></div>
      <div class="face3"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TestSome",
  data () {
    return {
      scaleList: [1, 1, 1, 1, 1, 1]
    }
  },
  methods: {
    overItem (e, idx) {
      // console.log(e, idx)
      // this.curItem = idx
      let cur = this.$refs['item' + idx]
      let curAttr = cur.getBoundingClientRect()
      let nodeW = curAttr.width
      let offset = (Math.abs(e.clientX - curAttr.left)) / nodeW
      console.log(offset)
      let pre = null, nxt = null
      if (idx > 0) {
        pre = this.$refs['item' + (idx - 1)]
      }
      if (idx < 5) {
        nxt = this.$refs['item' + (idx + 1)]
      }
      let scale = 0.6
      if (pre) {
        pre.style.setProperty('--scale', 1 + scale * Math.abs(offset - 1))
      }
      cur.style.setProperty('--scale', 1 + scale)
      if (nxt) {
        nxt.style.setProperty('--scale', 1 + scale * offset)
      }
    },
    leaveItem () {
      for (let i = 0; i < 6; i++) {
        this.$refs['item' + i].style.setProperty('--scale', 1)
      }
    }
  }
}
</script>

<style lang="less" scoped>
.test-some {
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  .btn-border-outer {
    .btn-border {
      width: 100px;
      height: 50px;
      border: 1px solid black;
      position: relative;
    }
    .btn-border::before, .btn-border::after {
      content: '';
      width: 20px;
      height: 20px;
      position: absolute;
      transition: .3s ease-in-out;
    }
    .btn-border::before {
      border-top: 1px solid red;
      border-left: 1px solid red;
      top: -5px;
      left: -5px;
    }
    .btn-border::after {
      border-right: 1px solid red;
      border-bottom: 1px solid red;
      bottom: -5px;
      right: -5px;
    }
    .btn-border:hover::before, .btn-border:hover::after {
      width: calc(100% + 9px);
      height: calc(100% + 9px);
    }
  }
  .color-border-outer {
    padding-left: 100px;
    padding-top: 50px;
    .color-border {
      width: 150px;
      height: 100px;
      position: relative;
      overflow: hidden;
      border-radius: 4px;
    }
    .color-border::before {
      content: '';
      position: absolute;
      z-index: -1;
      top: 5px;
      left: 5px;
      width: calc(100% - 10px);
      height: calc(100% - 10px);
      background: white;
      border-radius: 4px;
    }
    .color-border::after {
      content: '';
      position: absolute;
      z-index: -2;
      left: -50%;
      top: -50%;
      width: 200%;
      height: 200%;
      background-repeat: no-repeat;
      background-size: 50% 50%, 50% 50%;
      background-position: 0 0, 100% 0, 100% 100%, 0 100%;
      background-image: linear-gradient(#399953, #399953), linear-gradient(#fbb300, #fbb300), linear-gradient(#d53e33, #d53e33), linear-gradient(#377af5, #377af5);
      animation: rotate 4s linear infinite;
    }

    @keyframes rotate {
      100% {
        transform: rotate(1turn);
      }
    }
  }
  .mac-menu {
    width: 100%;
    .item-list {
      display: flex;
      justify-content: center;
      .item {
        --scale: 1;
        width: calc(30px * var(--scale));
        height: calc(30px * var(--scale));
        border-radius: 4px;
        margin: 0 5px;
        background-color: #409eff;
      }
    }
  }
  .test-border-radius {
    margin: 20px;
    width: 150px;
    height: 200px;
    border: 1px solid red;
    //border-radius: 42% 30% 41% 55% e('/') 42% 38% 59% 58%;
    border-radius: 42% 30% 50% 50% e('/') 10% 10% 90% 90%;
  }
  .test-border-radius2 {
    margin: 80px;
    width: 150px;
    height: 150px;
    border: 1px solid blue;
    //border-radius: 42% 30% 41% 55% e('/') 42% 38% 59% 58%;
    //border-radius: 42% 30% 50% 50% e('/') 10% 10% 90% 90%;
    border-radius: 80% 20% 10% 80% e('/') 80% 80% 10% 20%;
    transform: rotate(45deg) skew(5deg, 5deg);
  }
  .test-border-radius3 {
    margin: 80px;
    width: 150px;
    height: 150px;
    border: 1px solid green;
    //border-radius: 42% 30% 41% 55% e('/') 42% 38% 59% 58%;
    //border-radius: 42% 30% 50% 50% e('/') 10% 10% 90% 90%;
    //border-radius: 80% 20% 10% 80% e('/') 80% 80% 10% 20%;
    border-radius: 90% 20% 2% 90% e('/') 80% 10% 2% 50%;
    transform: rotate(45deg) skew(15deg, -20deg);
  }

  .face {
    margin-left: 300px;
    width: 200px;
    height: 200px;
    border: 1px solid black;
    position: relative;
    //rgb(253,236,192)
    .face1 {
      width: 100px;
      height: 70px;
      background: rgb(253,236,192);
      transform: rotate(-4deg);
      //border: 1px solid red;
      border-left: 1px solid rgba(0, 0, 0, 0.2);

      position: absolute;
      top: 45px;
      left: 8px;
    }
    .face2 {
      width: 50px;
      height: 100px;
      background: rgb(253,236,192);
      transform: rotate(40deg);
      border-radius: 0 0 0 5px e('/') 0 0 0 5px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.2);

      position: absolute;
      top: 44px;
      left: 35px;

    }
    .face3 {
      width: 80px;
      height: 60px;
      background: rgb(253,236,192);
      transform: rotate(-30deg);
      border-radius: 0 0 90% 5px e('/') 0 0 10% 5px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.2);

      //border: 1px solid red;
      position: absolute;
      top: 75px;
      left: 28px;

    }
  }
}
</style>
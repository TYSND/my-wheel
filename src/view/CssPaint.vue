<template>
  <div class="css-paint">
    <div class="test">
      <div class="hair hair1"></div>
      <div class="hair hair2"></div>
      <div class="hair hair3"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CssPaint"
}
</script>

<style lang="less" scoped>
// 茶色 rgb(231, 101, 8)
.css-paint {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .test {
    width: 191px;
    height: 266px;
    //border: 1px solid red;
    //border-radius: 0% 97% 97% 0% e('/') 0% 50% 50% 0%;
    border-radius: 0% 97% 10% 0% e('/') 0% 60% 40% 0%;
    position: relative;
    overflow: hidden;
    .hair {
      position: absolute;
      top: -1%;
      border-radius: inherit;
      margin: auto;
      border: 2px double rgba(231, 101, 8, 0.16);
      opacity: .5;
    }
    .hair1 {
      //border: 1px solid red;
      right: 0;
      height: 103%;
      width: 103%;
      background: none;
      //box-shadow: inset 1px 1px 2px rgb(113, 59, 18), inset 1px -1px 2px rgb(113, 59, 18);
      box-shadow: 0 3px 4px 1px rgb(231, 101, 8), inset 0 0 2px 1px rgb(231, 101, 8);
    }
    .hair2 {
      right: 3%;
      height: 124%;
      width: 106%;
      background: none;
      box-shadow: 0 3px 4px 1px rgb(231, 101, 8), inset 0 0 2px 1px rgb(231, 101, 8);
    }
    .hair3 {
      right: 4%;
      height: 104%;
      width: 103%;
      background: none;
      box-shadow: 0 3px 4px 1px rgb(231, 101, 8), inset 0 0 2px 1px rgb(231, 101, 8);
    }
  }
}
</style>
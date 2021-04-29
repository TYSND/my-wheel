<template>
  <div class="mask-layer" @click.self="cancel">
    <div class="slot-outer">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "MaskLayer",
  methods: {
    cancel () {
      this.$emit('cancel')
    }
  }
}
</script>

<style lang="less" scoped>
.mask-layer {
  width:100vw;
  height:100vh;
  top:0;
  left: 0;
  background:rgba(0,0,0,0.5);
  overflow: hidden;
  /*要显示在wrap的上面 */
  z-index: 999;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
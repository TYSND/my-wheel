<template>
  <div class="test-layer">
    <el-button @click="showLayer = true">显示</el-button>
    <mask-layer v-if="showLayer" @cancel="showLayer = false">
      <div class="outer">
        <div class="row">abcdefg</div>
        <div class="row">hijklmn</div>
        <div class="row">opqrst</div>
        <div class="row">uvwxyz</div>
      </div>
    </mask-layer>
  </div>
</template>

<script>
import MaskLayer from "@/components/MaskLayer";
export default {
  name: "TestLayer",
  components: { MaskLayer },
  data () {
    return {
      showLayer: false
    }
  }
}
</script>

<style lang="less" scoped>
.test-layer {
  .outer {
    display: flex;
    flex-direction: column;
    align-items: center;
    .row {
      color: #409eff;
    }
  }
}
</style>
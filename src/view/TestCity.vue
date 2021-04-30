<template>
  <div class="test-city">
    <div class="choose-res">{{city}}</div>
    <el-button @click="showCity = !showCity">选择城市</el-button>
    <div class="choose-city-outer" v-if="showCity">
      <choose-city :city="city" @chooseCity="chooseCity" @cancel="cancel"></choose-city>
    </div>
  </div>
</template>

<script>
import ChooseCity from "@/components/ChooseCity";
export default {
  name: "TestCity",
  components: { ChooseCity },
  data () {
    return {
      city: '',
      showCity: false
    }
  },
  methods: {
    chooseCity (city) {
      this.city = city
      this.cancel()
    },
    cancel () {
      this.showCity = false
    }
  }
}
</script>

<style lang="less" scoped>
.test-city {

}
</style>
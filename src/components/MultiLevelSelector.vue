<template>
  <div class="multi-level-selector">
    <div class="level-outer">
      <div class="level-title">级别一</div>
      <div class="level-item-list level-one">
        <div v-for="(level, index) in levelList" :key="index"
             :class="{'level-item': true, 'level-one-chosen': index === levelOneChosenIndex}"
             @click="chooseItem(1, index)">
          {{level.name}}
        </div>
      </div>
    </div>

    <div class="level-outer">
      <div class="level-title">级别二</div>
      <div class="level-item-list level-two">
        <div v-for="(level, index) in levelList[levelOneChosenIndex].children" :key="index"
             :class="{'level-item': true, 'level-two-chosen': index === levelTwoChosenIndex}"
             @click="chooseItem(2, index)">
          {{level.name}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MultiLevelSelector",
  props: ['levelNum', 'levelList'],
  data () {
    return {
      levelOneChosenIndex: 1,
      levelTwoChosenIndex: 0,
    }
  },
  methods: {
    chooseItem (levelNum, itemIndex) {
      if (levelNum === 1) {
        this.levelOneChosenIndex = itemIndex
        this.levelTwoChosenIndex = 0
      } else if (levelNum === 2) {
        this.levelTwoChosenIndex = itemIndex
      }
      this.$emit('setSelectRes', this.levelOneChosenIndex, this.levelTwoChosenIndex)
    }
  }
}
</script>

<style lang="less" scoped>
.multi-level-selector {
  .level-outer {
    display: flex;
    align-items: center;
    height: 50px;
    .level-title {
      margin-right: 20px;
    }
    .level-item-list {
      display: flex;
      .level-item {
        cursor: pointer;
        margin-right: 10px;
        padding: 5px 15px;
        //color: rgba(102, 102, 102, 100);
        border-radius: 30px;
        background-color: rgba(245, 245, 245, 100);
        color: rgba(153, 153, 153, 100);
      }
      .level-one-chosen {
        color: rgba(16, 16, 16, 100);
        //font-size: 13px;
        font-weight: bold;
        //background-color: #dddddd;
      }
      .level-two-chosen {
        border-radius: 30px;
        background-color: rgba(59, 147, 234, 0.2);
        color: rgba(59, 147, 234, 100);
      }
    }
  }
}
</style>
<template>
  <div class="hello">
    <div class="level-selector-test">
      <multi-level-selector
          :levelNum="3"
          :levelList="multiList"
          @setSelectRes="setSelectRes"></multi-level-selector>
      <div class="res">
        {{multiList[levelOneIndex].name}}
        {{multiList[levelOneIndex].children ? multiList[levelOneIndex].children[levelTwoIndex].name : '呵呵'}}
      </div>
    </div>

    <div class="date-range-test">
      <div class="date-range" @click.prevent.stop="showDateRange = !showDateRange">
        <span class="month-day">{{form.startMonthDay}} </span>
        <span class="week-day">{{form.startWeekDay}}</span>
        -
        <span class="month-day">{{form.endMonthDay}} </span>
        <span class="week-day">{{form.endWeekDay}}</span>
      </div>

      <div class="choose-date-range-outer" v-if="showDateRange">
        <choose-date-range
            :monthNum="6"
            :startDateStr="form.startDate"
            :endDateStr="form.endDate"
            @chooseDate="chooseDate" @close="showDateRange = false"></choose-date-range>
      </div>
    </div>
  </div>
</template>

<script>
import MultiLevelSelector from "@/components/MultiLevelSelector";
import ChooseDateRange from "@/components/ChooseDateRange";
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: { MultiLevelSelector, ChooseDateRange },
  data () {
    return {
      multiList: [
        {
          id: 0,
          name: '全部'
        },
        {
          id: 2,
          name: '选项1',
          children: [
            {
              id: 5,
              name: '选项1-1'
            },
            {
              id: 6,
              name: '选项1-2',
            }
          ]
        },
        {
          id: 3,
          name: '选项2',
          children: [
            {
              id: 7,
              name: '选项2-1'
            },
            {
              id: 8,
              name: '选项2-2'
            },
            {
              id: 9,
              name: '选项2-3'
            }
          ]
        },
        {
          id: 4,
          name: '选项3',
          children: [
            {
              id: 10,
              name: '选项3-1'
            }
          ]
        },
      ],
      levelOneIndex: 0,
      levelTwoIndex: 0,
      form: {
        startDate: '',
        endDate: '',
        startMonthDay: '',
        endMonthDay: '',
        startWeekDay: '',
        endWeekDay: '',
        nightNum: 1,
      },
      showDateRange: false
    }
  },
  methods: {
    setSelectRes (oneIndex ,twoIndex) {
      this.levelOneIndex = oneIndex
      this.levelTwoIndex = twoIndex
    },
    // 选择日期范围
    chooseDate (startDate, endDate) {
      // console.log(startDate, endDate)
      this.dealDate(startDate, endDate)
      this.showDateRange = false
    },
    dealDate (start, end) {
      this.form.nightNum = this.daysBetween(start, end)
      start = this.getDateStr(start)
      end = this.getDateStr(end)
      this.form.startDate = start
      this.form.endDate = end
      this.form.startMonthDay = this.getMonthDay(start)
      this.form.startWeekDay = this.getWeekDay(start)
      this.form.endMonthDay = this.getMonthDay(end)
      this.form.endWeekDay = this.getWeekDay(end)
    },
    getDateStr (date) {
      let year = date.getFullYear()
      let month = date.getMonth() + 1
      let day = date.getDate()
      month = ('0' + month).slice(-2)
      day = ('0' + day).slice(-2)
      return year + '-' + month + '-' + day
    },
    getMonthDay (dateStr) {
      let date = new Date(dateStr)
      let month = date.getMonth() + 1
      let day = date.getDate()
      month = ('0' + month).slice(-2)
      day = ('0' + day).slice(-2)
      return month + '-' + day
    },
    getWeekDay (dateStr) {
      let weekDayList = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']
      let date = new Date(dateStr)
      let weekDay = date.getDay()
      return weekDayList[weekDay]
    },
    daysBetween (date1, date2) {
      // console.log('riqi1',date1)
      let date1_ms = date1.getTime()
      let date2_ms = date2.getTime()
      let timeDiff = Math.abs(date1_ms - date2_ms)
      return Math.ceil(timeDiff / (1000 * 3600 * 24));
    },
    // 选择日期范围结束
  },
  created() {
    let start = new Date()
    let end = new Date(start.getTime() + 24*60*60*1000)
    this.dealDate(start, end)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.choose-date-range-outer{
  z-index: 1000;
  background-color: #FFFFFF;
  width: 611px;
  min-height: 100px;
}
</style>

<template>
  <div class="choose-city">
    <div class="search-input">
      <el-input v-model="keyword"></el-input>
<!--      <el-button>搜索</el-button>-->
    </div>
    <div class="city-list" v-show="!isSearch">
      <div class="letter-area" v-for="index in 26" :key="index" ref="cityInitial">
        <div class="letter-title">{{String.fromCharCode(96 + index).toUpperCase()}}</div>
        <div :class="{'city': true, 'chosen-city': city.city_name === chosenCity}"
             v-for="(city, idx) in cityList[index - 1]" :key="idx"
             @click="chooseCity(city.city_name)">
          {{city.city_name}}
        </div>
      </div>
    </div>
    <div class="search-list" v-show="isSearch">
      <div class="city-list">
        <div :class="{'city': true, 'chosen-city': city.city_name === chosenCity}"
             v-for="(city, idx) in resCityList" :key="idx"
             @click="chooseCity(city.city_name)">
          {{city.city_name}}
        </div>
      </div>
    </div>

    <div class="initials" v-show="!isSearch">
      <div class="letter" v-for="(letter, index) in rightArr" :key="index" @click="goInitial(letter)">
        {{letter}}
      </div>
<!--      <div class="letter-outer" v-for="idx in 26" :key="idx">-->
<!--        <div class="letter" v-if="cityList[idx - 1].length">-->
<!--          {{String.fromCharCode(96 + idx)}}-->
<!--        </div>-->
<!--      </div>-->
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "ChooseCity",
  props: ['city'],
  data () {
    const cityList = Array.apply(null, new Array(26)).map(() => [])
    return {
      keyword: '',
      chosenCity: '',
      allCityList: [],
      resCityList: [],
      cityList: cityList,
      rightArr: [],
      isSearch: false,
    }
  },
  watch: {
    keyword: {
      deep: true,
      handler() {
        // if (newVal.trim().length !== 0) {
        //this.getList是methods中延迟后调用的方法 延迟500ms
        this.debounce(this.searchCity, 500)
        // }
      }
    }
  },
  methods: {
    getCityJson () {
      axios.get('./city.json').then(res => {
        this.allCityList = res.data
        res.data.forEach(city => {
          let initialNum = city.pinyin[0].toLowerCase().charCodeAt() - 97
          // console.log(initialNum)
          this.cityList[initialNum].push(city)
        })
        this.rightArr = []
        this.cityList.forEach((tmp, index) => {
          if (tmp.length) {
            this.rightArr.push(String.fromCharCode(97 + index))
          }
        })
      })
    },
    goInitial (letter) {
      let index = letter.charCodeAt() - 97
      // console.log(this.$refs['cityInitial'][index].scrollIntoView)
      this.$refs['cityInitial'][index].scrollIntoView(true);
      // this.$nextTick(() => {
      //
      // })
    },
    //防抖
    debounce (fn, wait) {
      if (this.timer !== null) {
        clearTimeout(this.timer)
      }
      this.timer = setTimeout(fn, wait)
    },
    searchCity () {
      console.log('search ',this.keyword)
      if (this.keyword === '') {
        this.isSearch = false
      } else {
        this.isSearch = true
        this.resCityList = this.allCityList.filter(cur => cur.city_name.indexOf(this.keyword) !== -1)
        console.log(this.resCityList)
      }
      // console.log(value)
      // let timeStamp = new Date().getTime()
      // return () => {
      //   console.log('into fd')
      //   let curTimeStamp = new Date().getTime()
      //   console.log(timeStamp, curTimeStamp)
      //   if (curTimeStamp > timeStamp + 500) {
      //     timeStamp = curTimeStamp
      //     console.log('search ',value)
      //   }
      // }
    },
    chooseCity (cityName) {
      this.chosenCity = cityName
      setTimeout(() => {
        this.$emit('chooseCity', this.chosenCity)
      }, 500)
    }
  },
  created() {
    // console.log(this.cityList)
    this.getCityJson()
    this.chosenCity = this.city
  }
}
</script>

<style lang="less" scoped>
.choose-city {
  width: 300px;
  height: 500px;
  box-shadow: 14px -2px 11px -2px rgba(0, 0, 0, 0.05);
  border-radius: 2px;
  position: relative;
  padding: 10px;
  .search-input {
    display: flex;
  }
  .city-list {
    padding: 10px;
    height: 440px;
    overflow: scroll;
    .letter-area {
      .city {
        cursor: pointer;
        width: 100%;
        text-align: left;
        height: 40px;
        line-height: 40px;
        border-bottom: 1px solid #dddddd;
      }
      .city:last-child {
        border-bottom: none;
      }
    }
  }
  .search-list {
    .city {
      cursor: pointer;
      width: 100%;
      text-align: left;
      height: 40px;
      line-height: 40px;
      border-bottom: 1px solid #dddddd;
    }
    .city:last-child {
      border-bottom: none;
    }
  }
  .chosen-city {
    background-color: rgba(64, 158, 255, 0.1);
  }
  .initials {
    position: absolute;
    top: 50px;
    right: 0;
    height: 440px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: 12px;
    .letter {
      cursor: pointer;
      //padding: 0.5px 0;
    }
  }
  ::-webkit-scrollbar {
    width: 0 !important;
  }
  ::-webkit-scrollbar {
    width: 0 !important;height: 0;
  }
}
</style>
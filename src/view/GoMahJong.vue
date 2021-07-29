<script src="../../../../Users/33389/Desktop/mj2.js"></script>
<template>
  <div class="go-mah-jong">
    <div class="play-area-outer">
      <div :class="{
          'play-area': true,
          ['player' + (i-1)]: true
        }" v-for="i in 4" :key="i">
        <div class="card-list">
          <div :class="{
            'card': true,
            'pre-out-card': i === 1 && curSelectId === card.id
          }" v-for="(card, index) in playerCard[i - 1]" :key="index" @click="playerOutCard(card.id, index)">
            {{card.type + card.num}}
            <div :class="{
              'card-pattern': true,
              // 'bing1': card.type === 'bing' && card.num === 1,
              // 'bing2': card.type === 'bing' && card.num === 2,
              // 'bing3': card.type === 'bing' && card.num === 3,
              // 'bing4': card.type === 'bing' && card.num === 4,
              // 'bing5': card.type === 'bing' && card.num === 5,
              // 'bing6': card.type === 'bing' && card.num === 6,
              // 'bing7': card.type === 'bing' && card.num === 7,
              // 'bing8': card.type === 'bing' && card.num === 8,
              // 'bing9': card.type === 'bing' && card.num === 9,
              // 'tiao1': card.type === 'tiao' && card.num === 1,
              // 'tiao2': card.type === 'tiao' && card.num === 2,
              // 'tiao3': card.type === 'tiao' && card.num === 3,
              // 'tiao4': card.type === 'tiao' && card.num === 4,
              // 'tiao5': card.type === 'tiao' && card.num === 5,
              // 'tiao6': card.type === 'tiao' && card.num === 6,
              // 'tiao7': card.type === 'tiao' && card.num === 7,
              // 'tiao8': card.type === 'tiao' && card.num === 8,
              // 'tiao9': card.type === 'tiao' && card.num === 9,
              // 'wan1': card.type === 'wan' && card.num === 1,
              // 'wan2': card.type === 'wan' && card.num === 2,
              // 'wan3': card.type === 'wan' && card.num === 3,
              // 'wan4': card.type === 'wan' && card.num === 4,
              // 'wan5': card.type === 'wan' && card.num === 5,
              // 'wan6': card.type === 'wan' && card.num === 6,
              // 'wan7': card.type === 'wan' && card.num === 7,
              // 'wan8': card.type === 'wan' && card.num === 8,
              // 'wan9': card.type === 'wan' && card.num === 9,
              // 'feng1': card.type === 'afeng' && card.num === 1,
              // 'feng2': card.type === 'afeng' && card.num === 2,
              // 'feng3': card.type === 'afeng' && card.num === 3,
              // 'feng4': card.type === 'afeng' && card.num === 4,
              // 'bai': card.type === 'abai',
              // 'cai': card.type === 'acai',
              // 'zhong': card.type === 'azhong'
            }"></div>
          </div>
          <div class="empty-card"></div>
          <div class="empty-card"></div>
          <div class="empty-card"></div>
          <div class="empty-card"></div>
          <div class="empty-card"></div>
          <div class="empty-card"></div>
          <div class="empty-card"></div>
          <div class="empty-card"></div>
          <div class="empty-card"></div>
          <div class="empty-card"></div>
          <div class="empty-card"></div>
          <div class="empty-card"></div>
          <div class="empty-card"></div>
          <div class="empty-card"></div>
        </div>
      </div>
      <div :class="{
          'other-area': true,
          ['other' + (i-1)]: true
        }" v-for="i in 4" :key="'other' + i">
      </div>
      <div :class="{
          'mark-area': true,
          ['mark' + (i-1)]: true
        }" v-for="i in 4" :key="'mark' + i">
        <i class="el-icon-caret-bottom cur-turn" v-if="curTurn === i - 1"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoMahJong",
  data () {
    return {
      cardList: [],
      playerCard: [[], [], [], []],
      curTurn: 0,
      curCardPos: 0,
      canOpt: false,
      curSelectId: 0,
    }
  },
  methods: {
    generateCards () {
      let cnt = 1
      let card = []
      for (let i = 1; i <= 9; i++) {
        for (let j = 0; j < 4; j++) {
          card.push({
            id: cnt++,
            type: 'bing',
            num: i,
            show: false
          })
        }
      }
      for (let i = 1; i <= 9; i++) {
        for (let j = 0; j < 4; j++) {
          card.push({
            id: cnt++,
            type: 'wan',
            num: i,
            show: false
          })
        }
      }
      for (let i = 1; i <= 9; i++) {
        for (let j = 0; j < 4; j++) {
          card.push({
            id: cnt++,
            type: 'tiao',
            num: i,
            show: false
          })
        }
      }
      for (let i = 1; i <= 4; i++) {
        for (let j = 0; j < 4; j++) {
          card.push({
            id: cnt++,
            type: 'afeng',
            num: i,
            show: false
          })
        }
      }
      for (let j = 0; j < 4; j++) {
        card.push({
          id: cnt++,
          type: 'abai',
          num: 1,
          show: false
        })
      }
      for (let j = 0; j < 4; j++) {
        card.push({
          id: cnt++,
          type: 'acai',
          num: 1,
          show: false
        })
      }
      for (let j = 0; j < 4; j++) {
        card.push({
          id: cnt++,
          type: 'azhong',
          num: 1,
          show: false
        })
      }
      card.sort(() => Math.random() - 0.5)
      card.sort(() => Math.random() - 0.4)
      card.sort(() => Math.random() - 0.3)
      console.log('card num',card.length)
      return card
    },
    randomInteger (l, r) {
      return Math.floor(Math.random() * (r - l + 1)) + l
    },
    initHandOut () {
      for (let t = 0; t < 3; t++) {
        for (let i = 0, j = this.curTurn; i < 16; j = (j + 1)%4) {
          // console.log(16 *  t + i)
          this.playerCard[j].push(this.cardList[16 * t + i])
          i++
          this.curCardPos++
        }
      }
      this.playerCard[this.curTurn].push(this.cardList[this.curCardPos++])
      this.playerCard[(this.curTurn + 1)%4].push(this.cardList[this.curCardPos++])
      // this.playerCard[this.curTurn].push(this.cardList[this.curCardPos++])
      this.playerCard[(this.curTurn + 2)%4].push(this.cardList[this.curCardPos++])
      this.playerCard[(this.curTurn + 3)%4].push(this.cardList[this.curCardPos++])
      for (let i = 0; i < 4; i++) {
        this.playerCard[i].sort(function (a, b) {
          if (a.type === b.type) {
            return a.num - b.num
          } else {
            return a.type > b.type ? 1 : -1
          }
        })
      }
      this.$forceUpdate()
      console.log(this.playerCard)
    },
    handOut () {
      if (this.curCardPos >= this.cardList.length) {
        this.curCardPos = 0
      }
      if (this.curTurn === 0) {
        console.log('当前摸牌', this.cardList[this.curCardPos].id + ' ' + this.cardList[this.curCardPos].type + ' ' + this.cardList[this.curCardPos].num )
      }
      this.playerCard[this.curTurn].push(this.cardList[this.curCardPos++])
      this.playerCard[this.curTurn].sort(function (a, b) {
        if (a.type === b.type) {
          return a.num - b.num
        } else {
          return a.type > b.type ? 1 : -1
        }
      })
    },
    judgeBreak () {
      // 判断吃、碰、杠、胡
      return -1
    },
    judgeSelf () {
      // 判断自己能否赢或杠
    },
    turnControl () {
      this.curTurn = (this.curTurn + 1) % 4
      if (this.curTurn === 0) {
        this.playerTurn()
      } else {
        this.aiTurn()
      }
    },
    aiTurn () {
      this.handOut()
      // 判断自己能否赢或杠
      this.judgeSelf()
      // 出牌
      // 首先将bing tiao wan 都映射到计数数组上
      let bing3N = 0, bing3N2 = 0
      let tiao3N = 0, tiao3N2 = 0
      let wan3N = 0, wan3N2 = 0
      let other3N = 0, other3N2 = 0
      let bingArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      let tiaoArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      let wanArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      let otherArr = [0, 0, 0, 0, 0, 0, 0, 0]
      for (let i = 0; i < this.playerCard[this.curTurn]; i++) {
        let tmp = this.playerCard[this.curTurn][i]
        if (tmp.type === 'bing') {
          bingArr[tmp.num]++
        } else if (tmp.type === 'tiao') {
          tiaoArr[tmp.num]++
        } else if (tmp.type === 'wan') {
          wanArr[tmp.num]++
        } else if (tmp.type === 'afeng') {
          otherArr[tmp.num]++
        } else if (tmp.type === 'abai') {
          otherArr[5]++
        } else if (tmp.type === 'acai') {
          otherArr[6]++
        } else if (tmp.type === 'azhong') {
          otherArr[7]++
        }
      }
      let ma = 0, pos = 0
      for (let i = 0; i < this.playerCard[this.curTurn]; i++) {
        let tmp = this.playerCard[this.curTurn][i]
        if (tmp.type === 'bing') {
          bingArr[tmp.num]--
        } else if (tmp.type === 'tiao') {
          tiaoArr[tmp.num]--
        } else if (tmp.type === 'wan') {
          wanArr[tmp.num]--
        } else if (tmp.type === 'afeng') {
          otherArr[tmp.num]--
        } else if (tmp.type === 'abai') {
          otherArr[5]--
        } else if (tmp.type === 'acai') {
          otherArr[6]--
        } else if (tmp.type === 'azhong') {
          otherArr[7]--
        }
        bing3N = this.get3NChance(bingArr)
        bing3N2 = this.get3N2Chance(bingArr)
        tiao3N = this.get3NChance(tiaoArr)
        tiao3N2 = this.get3N2Chance(tiaoArr)
        wan3N = this.get3NChance(wanArr)
        wan3N2 = this.get3N2Chance(wanArr)
        other3N = this.getO3NChance(otherArr)
        other3N2 = this.getO3N2Chance(otherArr)
        let tmpMa = bing3N2 + tiao3N + wan3n + other3N
        tmpMa = Math.max(tmpMa, (bing3N + tiao3N2 + wan3N + other3N))
        tmpMa = Math.max(tmpMa, (bing3N + tiao3N + wan3N2 + other3N))
        tmpMa = Math.max(tmpMa, (bing3N + tiao3N + wan3N + other3N2))

        if (tmpMa > ma) {
          ma = tmpMa
          pos = i
        }


        if (tmp.type === 'bing') {
          bingArr[tmp.num]++
        } else if (tmp.type === 'tiao') {
          tiaoArr[tmp.num]++
        } else if (tmp.type === 'wan') {
          wanArr[tmp.num]++
        } else if (tmp.type === 'afeng') {
          otherArr[tmp.num]++
        } else if (tmp.type === 'abai') {
          otherArr[5]++
        } else if (tmp.type === 'acai') {
          otherArr[6]++
        } else if (tmp.type === 'azhong') {
          otherArr[7]++
        }
      }
      console.log('ai card', this.playerCard[this.curTurn][pos].type + this.playerCard[this.curTurn][pos].num)
      this.playerCard[this.curTurn].splice(pos, 1)
      this.turnControl()
    },
    playerTurn () {
      console.log('player turn')
      this.handOut()
      // 判断自己能否赢或杠
      this.judgeSelf()
      // 出牌
      this.canOpt = true
    },
    playerOutCard (id, pos) {
      if (this.curTurn === 0 && this.canOpt) {
        if (this.curSelectId === id) {
          // 出牌
          this.playerCard[this.curTurn].splice(pos, 1)
          this.curSelectId = 0
          this.turnControl()
        } else {
          this.curSelectId = id
        }
        // this.$forceUpdate()
      }
    },
    judge3N (arr) {
      let i = 1
      let tmp = []
      arr.forEach(cur => {
        tmp.push(cur)
      })
      while (i <= 9) {
        // console.log(i)
        if (tmp[i] === 0) {
          i++
        }
        if (tmp[i] === 1 || tmp[i] === 2) {
          if (i > 7) {
            return false
          }
          tmp[i + 2] -= tmp[i]
          tmp[i + 1] -= tmp[i]
          tmp[i] = 0
          if (tmp[i + 2] < 0 || tmp[i + 1] < 0) {
            return false
          }
          i++
        }
        if (tmp[i] >= 3) {
          tmp[i] -= 3
          if (tmp[i] === 0) {
            i++
          }
        }
      }
      return true
    },
    dfs3N (arr, depth, sum) {
      // console.log(arr, depth, sum, chance)
      if (depth === 9) {
        // if (arr[1] === 1 && arr[2] === 4 && arr[3] === 1) {
        // console.log('arr', arr)
        // }
        if (sum % 3 !== 0) {
          return -1
        }
        // console.log('arr', arr)
        if (this.judge3N(arr)) {
          return 0
        }
        return -1
      }
      let res = 0
      for (let m = 0; m <= 4 - arr[depth]; m++) {
        if (sum + m > 12) {
          continue
        }
        arr[depth] += m
        let tmp = this.dfs3N(arr, depth + 1, sum + m)
        if (tmp !== -1) {
          res += m/(136 - sum)
        }
        arr[depth] -= m
      }
      return res
    },
    judge3N2 (arr) {
      // arr = [0, 1, 4, 1, 0, 0, 0, 0, 0, 0]
      // arr = [0, 1, 4, 1, 0, 0, 0, 0, 1, 0]
      let i = 1
      let tmp = []
      arr.forEach(cur => {
        tmp.push(cur)
      })
      while (i <= 9) {
        // console.log(i)
        if (tmp[i] === 0) {
          i++
        }
        if (tmp[i] === 1) {
          if (i === 9) {
            return false
          }
          if (tmp[i + 1] === 0) {
            return false
          }
          tmp[i + 1] -= 1
          tmp[i] = 0
          if (this.judge3N(tmp)) {
            return true
          }
          tmp[i + 1] += 1
          tmp[i] = 1
          i++
        } else if (tmp[i] >= 2) {
          if (i < 9 && tmp[i + 1] > 0) {
            tmp[i + 1] -= 1
            tmp[i] -= 1
            if (this.judge3N(tmp)) {
              return true
            }
            tmp[i + 1] += 1
            tmp[i] += 1
          }
          tmp[i] -= 2
          if (this.judge3N(tmp)) {
            return true
          }
          tmp[i] += 2
          i++
        }
      }
      return false
    },
    dfs3N2 (arr, depth, sum) {
      // console.log(arr, depth, sum, chance)
      if (depth === 9) {
        // if (arr[1] === 1 && arr[2] === 4 && arr[3] === 1) {
        // console.log('arr', arr)
        // }
        if ((sum - 2) % 3 !== 0) {
          return -1
        }
        // console.log('arr', arr)
        if (this.judge3N2(arr)) {
          return 0
        }
        return -1
      }
      let res = 0
      for (let m = 0; m <= 4 - arr[depth]; m++) {
        if (sum + m > 14) {
          continue
        }
        arr[depth] += m
        let tmp = this.dfs3N2(arr, depth + 1, sum + m)
        if (tmp !== -1) {
          res += m/(136 - sum)
        }
        arr[depth] -= m
      }
      return res
    },
    judgeO3N (arr) {
      let i = 1
      let tmp = []
      arr.forEach(cur => {
        tmp.push(cur)
      })
      while (i <= 7) {
        // console.log(i)
        if (tmp[i] === 0) {
          i++
        }
        if (i !== 3) {
          return false
        }
        i++
      }
      return true
    },
    dfsO3N (arr, depth, sum) {
      // console.log(arr, depth, sum, chance)
      if (depth === 7) {
        // if (arr[1] === 1 && arr[2] === 4 && arr[3] === 1) {
        // console.log('arr', arr)
        // }
        if (sum % 3 !== 0) {
          return -1
        }
        // console.log('arr', arr)
        if (this.judgeO3N(arr)) {
          return 0
        }
        return -1
      }
      let res = 0
      for (let m = 0; m <= 4 - arr[depth]; m++) {
        if (sum + m > 12) {
          continue
        }
        arr[depth] += m
        let tmp = this.dfsO3N(arr, depth + 1, sum + m)
        if (tmp !== -1) {
          res += m/(136 - sum)
        }
        arr[depth] -= m
      }
      return res
    },
    judgeO3N2 (arr) {
      // arr = [0, 1, 4, 1, 0, 0, 0, 0, 0, 0]
      // arr = [0, 1, 4, 1, 0, 0, 0, 0, 1, 0]
      let i = 1
      let tmp = []
      arr.forEach(cur => {
        tmp.push(cur)
      })
      while (i <= 7) {
        // console.log(i)
        if (tmp[i] === 0 || tmp[i] === 3) {
          i++
        } else if (tmp[i] === 2) {
          tmp[i] = 0
          return this.judgeO3N(tmp);
        } else {
          return false
        }
      }
      return false
    },
    dfsO3N2 (arr, depth, sum) {
      // console.log(arr, depth, sum, chance)
      if (depth === 7) {
        // if (arr[1] === 1 && arr[2] === 4 && arr[3] === 1) {
        // console.log('arr', arr)
        // }
        if ((sum - 2) % 3 !== 0) {
          return -1
        }
        // console.log('arr', arr)
        if (this.judgeO3N2(arr)) {
          return 0
        }
        return -1
      }
      let res = 0
      for (let m = 0; m <= 4 - arr[depth]; m++) {
        if (sum + m > 14) {
          continue
        }
        arr[depth] += m
        let tmp = this.dfsO3N2(arr, depth + 1, sum + m)
        if (tmp !== -1) {
          res += m/(136 - sum)
        }
        arr[depth] -= m
      }
      return res
    },
    get3NChance (arr) {
      /*
      给出数组arr，arr.length = 9
      arr[i] = t的含义为：i的个数为t，即arr是一个计数用的数组
      在满足0 <= arr[i] <= 4 && (arr[0] + arr[1] +...+ arr[8] <= 12)的前提下，arr[i]可以任意增加一个正整数m，求让arr形成3N局面的概率。
      arr[i] + m的概率计算：m / (36 - sum(arr) - m)
      3N局面：原数组中的所有数字可以每三个一组，一组可以是三个相同，或相连。
      如arr = [1,2,1]，即原数组为[0,1,1,2]，则其中一个3N局面可以是：arr[1]+=2,则arr=[1,4,1]，原数组为[0,1,1,1,1,2]，可以分为[0,1,2]和[1,1,1]，形成3N局面
      * */
      let flag = true
      for (let i = 0; i < arr.length; i++) {
        if (arr[i]) {
          flag = false
          break
        }
      }
      if (flag) {
        return 1
      }
      return this.dfs3N(arr, 1, arr[1])
    },
    get3N2Chance (arr) {
      return this.dfs3N2(arr, 1, arr[1])
    },
    getO3NChance (arr) {
      let flag = true
      for (let i = 0; i < arr.length; i++) {
        if (arr[i]) {
          flag = false
          break
        }
      }
      if (flag) {
        return 1
      }
      return this.dfsO3N(arr, 1, arr[1])
    },
    getO3N2Chance (arr) {
      return this.dfsO3N2(arr, 1, arr[1])
    },
  },
  created() {
    // console.log('card', this.cardList())
    this.cardList = this.generateCards()
    this.curTurn = this.randomInteger(0, 3)
    this.curTurn = 0
    console.log(this.curTurn)
    this.initHandOut()
  },
  mounted() {
    if (this.curTurn !== 0) {
      setTimeout(() => {
        this.aiTurn()
      }, 1000)
    } else {
      this.playerTurn()
    }
  }
}
</script>

<style lang="less" scoped>
.go-mah-jong {
  display: flex;
  justify-content: center;
  align-items: center;
  .play-area-outer {
    width: 98vh;
    height: 98vh;
    border: 1px solid black;
    position: relative;
    .play-area {
      width: 70%;
      height: 15%;
      border: 1px solid red;
      position: absolute;
      .card-list {
        height: 100%;
        display: flex;
        flex-wrap: wrap;
        padding: 5px;
        justify-content: space-between;
        .card {
          height: 47%;
          width: 60px;
          border-radius: 4px;
          border: 1px solid orange;
          user-select: none;
          cursor: pointer;
          position: relative;
          .bing1:before {
            content: "";
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 30px;
            height: 30px;
            background: #1a86cb;
            border-radius: 50%;
            box-shadow: 0 0 #1a86cb;
            z-index: 2;
          }
          .bing2:before {
            content: "";
            position: absolute;
            top: calc(50% + 15px);
            left: 50%;
            transform: translate(-50%, -50%);
            width: 20px;
            height: 20px;
            background: #1a86cb;
            border-radius: 50%;
            box-shadow: 0px -30px #1a86cb;
            z-index: 2;
          }
          .bing3:before {
            content: "";
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 15px;
            height: 15px;
            background: #1a86cb;
            border-radius: 50%;
            box-shadow: 0px -17px #1a86cb, 0px 17px #1a86cb;
            z-index: 2;
          }
          .bing4:before {
            content: "";
            position: absolute;
            top: calc(50% + 15px);
            left: calc(50% - 15px);
            transform: translate(-50%, -50%);
            width: 20px;
            height: 20px;
            background: #1a86cb;
            border-radius: 50%;
            box-shadow: 0px -30px #1a86cb, 30px -30px #1a86cb, 30px 0px #1a86cb;
            z-index: 2;
          }
          .bing5:before {
            content: "";
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 15px;
            height: 15px;
            background: #1a86cb;
            border-radius: 50%;
            box-shadow: -15px -15px #1a86cb, -15px 15px #1a86cb, 15px -15px #1a86cb, 15px 15px #1a86cb;
            z-index: 2;
          }
          .bing6:before {
            content: "";
            position: absolute;
            top: 50%;
            left: calc(50% - 15px);
            transform: translate(-50%, -50%);
            width: 15px;
            height: 15px;
            background: #1a86cb;
            border-radius: 50%;
            box-shadow: 0px -17px #1a86cb, 0px 17px #1a86cb, 30px 0px #1a86cb, 30px -17px #1a86cb, 30px 17px #1a86cb;
            z-index: 2;
          }
          .bing7:before {
            content: "";
            position: absolute;
            top: calc(50% - 18px);
            left: 50%;
            transform: translate(-50%, -50%);
            width: 15px;
            height: 15px;
            background: #1a86cb;
            border-radius: 50%;
            box-shadow: -15px 5px #1a86cb, 15px -5px #1a86cb, -10px 20px #1a86cb, 10px 20px #1a86cb, -10px 35px #1a86cb, 10px 35px #1a86cb;
            z-index: 2;
          }
          .bing8:before {
            content: "";
            position: absolute;
            top: calc(50% - 5px);
            left: calc(50% - 10px);
            transform: translate(-50%, -50%);
            width: 10px;
            height: 10px;
            background: #1a86cb;
            border-radius: 50%;
            box-shadow: 0px -12px #1a86cb, 0px 12px #1a86cb, 0px 24px #1a86cb, 20px -12px #1a86cb, 20px 0px #1a86cb, 20px 12px #1a86cb, 20px 24px #1a86cb;
            z-index: 2;
          }
          .bing9:before {
            content: "";
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 10px;
            height: 10px;
            background: #1a86cb;
            border-radius: 50%;
            box-shadow: -15px -20px #1a86cb, -15px 0px #1a86cb, -15px 20px #1a86cb, 0px -20px #1a86cb, 0px 20px #1a86cb, 15px -20px #1a86cb, 15px 0px #1a86cb, 15px 20px #1a86cb,;
            z-index: 2;
          }

          .tiao1:before {
            content: "";
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 10px;
            height: 30px;
            background: #01d025;
            border-radius: 4px;
            box-shadow: 0 0 #01d025;
            z-index: 2;
          }
          .tiao2:before {
            content: "";
            position: absolute;
            top: calc(50% - 15px);
            left: 50%;
            transform: translate(-50%, -50%);
            width: 10px;
            height: 20px;
            background: #01d025;
            border-radius: 4px;
            box-shadow: 0 30px #01d025;
            z-index: 2;
          }
          .tiao3:before {
            content: "";
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 10px;
            height: 15px;
            background: #01d025;
            border-radius: 4px;
            box-shadow: 0 -20px #01d025, 0 20px #01d025;
            z-index: 2;
          }
          .tiao4:before {
            content: "";
            position: absolute;
            top: calc(50% - 15px);
            left: calc(50% - 10px);
            transform: translate(-50%, -50%);
            width: 10px;
            height: 20px;
            background: #01d025;
            border-radius: 4px;
            box-shadow: 0px 30px #01d025, 20px 0px #01d025, 20px 30px #01d025;
            z-index: 2;
          }
          .tiao5:before {
            content: "";
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 10px;
            height: 20px;
            background: #01d025;
            border-radius: 4px;
            box-shadow: -15px -15px #01d025, -15px 15px #01d025, 15px -15px #01d025, 15px 15px #01d025;
            z-index: 2;
          }
          .tiao6:before {
            content: "";
            position: absolute;
            top: 50%;
            left: calc(50% - 15px);
            transform: translate(-50%, -50%);
            width: 10px;
            height: 15px;
            background: #01d025;
            border-radius: 4px;
            box-shadow: 0px -20px #01d025, 0px 20px #01d025, 30px -20px #01d025, 30px 0px #01d025, 30px 20px #01d025;
            z-index: 2;
          }
          .tiao7:before {
            content: "";
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 10px;
            height: 15px;
            background: #01d025;
            border-radius: 4px;
            box-shadow: 0px -20px #01d025, -15px 0px #01d025, 15px 0px #01d025, -15px 20px #01d025, 0px 20px #01d025, 15px 20px #01d025;
            z-index: 2;
          }
          .tiao8:before {
            content: "M";
            position: absolute;
            top: 5%;
            left: 5%;
            width: 90%;
            height: 40%;
            font-size: 28px;
            font-weight: 900;
            text-align: center;
            color: #01d025;
            z-index: 2;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .tiao8:after {
            content: "M";
            position: absolute;
            bottom: 5%;
            left: 5%;
            transform: rotate(180deg);
            width: 90%;
            height: 40%;
            //line-height: 25px;
            font-size: 28px;
            font-weight: 900;
            text-align: center;
            color: #01d025;
            z-index: 2;
            //vertical-align: middle;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .tiao9:before {
            content: "";
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 10px;
            height: 15px;
            background: #01d025;
            border-radius: 4px;
            box-shadow: -15px -20px #01d025, 0px -20px #01d025, 15px -20px #01d025, -15px 0px #01d025, 15px 0px #01d025, -15px 20px #01d025, 0px 20px #01d025, 15px 20px #01d025;
            z-index: 2;
          }

          .wan1:before {
            content: "一";
            position: absolute;
            top: 5%;
            left: 5%;
            width: 90%;
            height: 40%;
            font-size: 20px;
            font-weight: 900;
            text-align: center;
            color: #101010;
            z-index: 2;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .wan1:after {
            content: "萬";
            position: absolute;
            bottom: 5%;
            left: 5%;
            width: 90%;
            height: 40%;
            //line-height: 25px;
            font-size: 20px;
            font-weight: 900;
            text-align: center;
            color: #d90c23;
            z-index: 2;
            //vertical-align: middle;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .wan2:before {
            content: "二";
            position: absolute;
            top: 5%;
            left: 5%;
            width: 90%;
            height: 40%;
            font-size: 20px;
            font-weight: 900;
            text-align: center;
            color: #101010;
            z-index: 2;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .wan2:after {
            content: "萬";
            position: absolute;
            bottom: 5%;
            left: 5%;
            width: 90%;
            height: 40%;
            //line-height: 25px;
            font-size: 20px;
            font-weight: 900;
            text-align: center;
            color: #d90c23;
            z-index: 2;
            //vertical-align: middle;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .wan3:before {
            content: "三";
            position: absolute;
            top: 5%;
            left: 5%;
            width: 90%;
            height: 40%;
            font-size: 20px;
            font-weight: 900;
            text-align: center;
            color: #101010;
            z-index: 2;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .wan3:after {
            content: "萬";
            position: absolute;
            bottom: 5%;
            left: 5%;
            width: 90%;
            height: 40%;
            //line-height: 25px;
            font-size: 20px;
            font-weight: 900;
            text-align: center;
            color: #d90c23;
            z-index: 2;
            //vertical-align: middle;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .wan4:before {
            content: "四";
            position: absolute;
            top: 5%;
            left: 5%;
            width: 90%;
            height: 40%;
            font-size: 20px;
            font-weight: 900;
            text-align: center;
            color: #101010;
            z-index: 2;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .wan4:after {
            content: "萬";
            position: absolute;
            bottom: 5%;
            left: 5%;
            width: 90%;
            height: 40%;
            //line-height: 25px;
            font-size: 20px;
            font-weight: 900;
            text-align: center;
            color: #d90c23;
            z-index: 2;
            //vertical-align: middle;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .wan5:before {
            content: "伍";
            position: absolute;
            top: 5%;
            left: 5%;
            width: 90%;
            height: 40%;
            font-size: 20px;
            font-weight: 900;
            text-align: center;
            color: #101010;
            z-index: 2;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .wan5:after {
            content: "萬";
            position: absolute;
            bottom: 5%;
            left: 5%;
            width: 90%;
            height: 40%;
            //line-height: 25px;
            font-size: 20px;
            font-weight: 900;
            text-align: center;
            color: #d90c23;
            z-index: 2;
            //vertical-align: middle;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .wan6:before {
            content: "六";
            position: absolute;
            top: 5%;
            left: 5%;
            width: 90%;
            height: 40%;
            font-size: 20px;
            font-weight: 900;
            text-align: center;
            color: #101010;
            z-index: 2;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .wan6:after {
            content: "萬";
            position: absolute;
            bottom: 5%;
            left: 5%;
            width: 90%;
            height: 40%;
            //line-height: 25px;
            font-size: 20px;
            font-weight: 900;
            text-align: center;
            color: #d90c23;
            z-index: 2;
            //vertical-align: middle;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .wan7:before {
            content: "七";
            position: absolute;
            top: 5%;
            left: 5%;
            width: 90%;
            height: 40%;
            font-size: 20px;
            font-weight: 900;
            text-align: center;
            color: #101010;
            z-index: 2;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .wan7:after {
            content: "萬";
            position: absolute;
            bottom: 5%;
            left: 5%;
            width: 90%;
            height: 40%;
            //line-height: 25px;
            font-size: 20px;
            font-weight: 900;
            text-align: center;
            color: #d90c23;
            z-index: 2;
            //vertical-align: middle;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .wan8:before {
            content: "八";
            position: absolute;
            top: 5%;
            left: 5%;
            width: 90%;
            height: 40%;
            font-size: 20px;
            font-weight: 900;
            text-align: center;
            color: #101010;
            z-index: 2;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .wan8:after {
            content: "萬";
            position: absolute;
            bottom: 5%;
            left: 5%;
            width: 90%;
            height: 40%;
            //line-height: 25px;
            font-size: 20px;
            font-weight: 900;
            text-align: center;
            color: #d90c23;
            z-index: 2;
            //vertical-align: middle;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .wan9:before {
            content: "九";
            position: absolute;
            top: 5%;
            left: 5%;
            width: 90%;
            height: 40%;
            font-size: 20px;
            font-weight: 900;
            text-align: center;
            color: #101010;
            z-index: 2;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .wan9:after {
            content: "萬";
            position: absolute;
            bottom: 5%;
            left: 5%;
            width: 90%;
            height: 40%;
            //line-height: 25px;
            font-size: 20px;
            font-weight: 900;
            text-align: center;
            color: #d90c23;
            z-index: 2;
            //vertical-align: middle;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .feng1:before {
            content: "东";
            position: absolute;
            top: 10%;
            left: 10%;
            width: 80%;
            height: 80%;
            font-size: 25px;
            font-weight: 900;
            text-align: center;
            color: #045879;
            z-index: 2;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .feng2:before {
            content: "西";
            position: absolute;
            top: 10%;
            left: 10%;
            width: 80%;
            height: 80%;
            font-size: 25px;
            font-weight: 900;
            text-align: center;
            color: #045879;
            z-index: 2;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .feng3:before {
            content: "南";
            position: absolute;
            top: 10%;
            left: 10%;
            width: 80%;
            height: 80%;
            font-size: 25px;
            font-weight: 900;
            text-align: center;
            color: #045879;
            z-index: 2;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .feng4:before {
            content: "北";
            position: absolute;
            top: 10%;
            left: 10%;
            width: 80%;
            height: 80%;
            font-size: 25px;
            font-weight: 900;
            text-align: center;
            color: #045879;
            z-index: 2;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .bai:before {
            content: "";
            position: absolute;
            top: calc(20% - 5px);
            left: calc(25% - 5px);
            width: 50%;
            height: 60%;
            border: 5px solid #101010;
            border-radius: 4px;
            z-index: 2;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .cai:before {
            content: "發";
            position: absolute;
            top: 10%;
            left: 10%;
            width: 80%;
            height: 80%;
            font-size: 25px;
            font-weight: 900;
            text-align: center;
            color: #0d7d33;
            z-index: 2;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .zhong:before {
            content: "中";
            position: absolute;
            top: 10%;
            left: 10%;
            width: 80%;
            height: 80%;
            font-size: 25px;
            font-weight: 900;
            text-align: center;
            color: #d70606;
            z-index: 2;
            display: flex;
            align-items: center;
            justify-content: center;
          }

        }
        .pre-out-card {
          top: -10px;
        }
        .empty-card {
          width: 60px;
        }
      }
    }
    .player0 {
      bottom: 0;
      left: 15%;
    }
    .player1 {
      transform-origin: bottom right;
      transform: rotate(-90deg);
      right: 0 ;
    }
    .player2 {
      transform: rotate(180deg);
      top: 0;
      left: 15%;
    }
    .player3 {
      transform-origin: bottom left;
      transform: rotate(90deg);
      left: 0;
    }

    .other-area {
      width: 40%;
      height: 15%;
      border: 1px solid blue;
      position: absolute;
    }
    .other0 {
      bottom: 15%;
      left: 30%;
    }
    .other1 {
      transform-origin: bottom right;
      transform: rotate(-90deg);
      right: 15%;
      top: 15%;
    }
    .other2 {
      transform: rotate(180deg);
      top: 15%;
      left: 30%;
    }
    .other3 {
      transform-origin: bottom left;
      transform: rotate(90deg);
      left: 15%;
      top: 15%;
    }

    .mark-area {
      width: 15%;
      height: 15%;
      border: 1px solid green;
      position: absolute;
      display: flex;
      align-items: flex-end;
      justify-content: center;
      .cur-turn {
        font-size: 50px;
      }
    }
    .mark0 {
      bottom: 15%;
      right: 15%;
    }
    .mark1 {
      transform-origin: bottom right;
      transform: rotate(-90deg);
      right: 15%;
      top: 0;
    }
    .mark2 {
      transform: rotate(180deg);
      top: 15%;
      left: 15%;
    }
    .mark3 {
      transform-origin: bottom left;
      transform: rotate(90deg);
      left: 15%;
      bottom: 30%;
    }
  }
}
</style>
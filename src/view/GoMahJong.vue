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
          }" v-for="(card, index) in playerCard[i - 1]" :key="index" @click="playerOutCard(card.id, index, i === 1)">
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
      <div class="card">
<!--        {{lastCard.type + lastCard.num}}-->
        <div :class="{
              'card-pattern': true,
              // 'bing1': lastCard.type === 'bing' && lastCard.num === 1,
              // 'bing2': lastCard.type === 'bing' && lastCard.num === 2,
              // 'bing3': lastCard.type === 'bing' && lastCard.num === 3,
              // 'bing4': lastCard.type === 'bing' && lastCard.num === 4,
              // 'bing5': lastCard.type === 'bing' && lastCard.num === 5,
              // 'bing6': lastCard.type === 'bing' && lastCard.num === 6,
              // 'bing7': lastCard.type === 'bing' && lastCard.num === 7,
              // 'bing8': lastCard.type === 'bing' && lastCard.num === 8,
              // 'bing9': lastCard.type === 'bing' && lastCard.num === 9,
              // 'tiao1': lastCard.type === 'tiao' && lastCard.num === 1,
              // 'tiao2': lastCard.type === 'tiao' && lastCard.num === 2,
              // 'tiao3': lastCard.type === 'tiao' && lastCard.num === 3,
              // 'tiao4': lastCard.type === 'tiao' && lastCard.num === 4,
              // 'tiao5': lastCard.type === 'tiao' && lastCard.num === 5,
              // 'tiao6': lastCard.type === 'tiao' && lastCard.num === 6,
              // 'tiao7': lastCard.type === 'tiao' && lastCard.num === 7,
              // 'tiao8': lastCard.type === 'tiao' && lastCard.num === 8,
              // 'tiao9': lastCard.type === 'tiao' && lastCard.num === 9,
              // 'wan1': lastCard.type === 'wan' && lastCard.num === 1,
              // 'wan2': lastCard.type === 'wan' && lastCard.num === 2,
              // 'wan3': lastCard.type === 'wan' && lastCard.num === 3,
              // 'wan4': lastCard.type === 'wan' && lastCard.num === 4,
              // 'wan5': lastCard.type === 'wan' && lastCard.num === 5,
              // 'wan6': lastCard.type === 'wan' && lastCard.num === 6,
              // 'wan7': lastCard.type === 'wan' && lastCard.num === 7,
              // 'wan8': lastCard.type === 'wan' && lastCard.num === 8,
              // 'wan9': lastCard.type === 'wan' && lastCard.num === 9,
              // 'feng1': lastCard.type === 'afeng' && lastCard.num === 1,
              // 'feng2': lastCard.type === 'afeng' && lastCard.num === 2,
              // 'feng3': lastCard.type === 'afeng' && lastCard.num === 3,
              // 'feng4': lastCard.type === 'afeng' && lastCard.num === 4,
              // 'bai': lastCard.type === 'abai',
              // 'cai': lastCard.type === 'acai',
              // 'zhong': lastCard.type === 'azhong'
            }"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoMahJong",
  data () {
    const cardMap = {
      'bing1': '一饼',
      'bing2': '二饼',
      'bing3': '三饼',
      'bing4': '四饼',
      'bing5': '五饼',
      'bing6': '六饼',
      'bing7': '七饼',
      'bing8': '八饼',
      'bing9': '九饼',
      'tiao1': '一条',
      'tiao2': '二条',
      'tiao3': '三条',
      'tiao4': '四条',
      'tiao5': '五条',
      'tiao6': '六条',
      'tiao7': '七条',
      'tiao8': '八条',
      'tiao9': '九条',
      'wan1': '一万',
      'wan2': '二万',
      'wan3': '三万',
      'wan4': '四万',
      'wan5': '五万',
      'wan6': '六万',
      'wan7': '七万',
      'wan8': '八万',
      'wan9': '九万',
      'afeng1': '东风',
      'afeng2': '西风',
      'afeng3': '南风',
      'afeng4': '北风',
      'abai1': '白皮',
      'acai1': '发财',
      'azhong1': '红中'
    }
    return {
      cardMap: cardMap,
      cardList: [],
      playerCard: [[], [], [], []],
      curTurn: 0,
      preTurn: -1,
      curCardPos: 0,
      canOpt: false,
      curSelectId: 0,
      lastCard: null,
      gameOver: false
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
            show: false,
            canHandOut: true
          })
        }
      }
      for (let i = 1; i <= 9; i++) {
        for (let j = 0; j < 4; j++) {
          card.push({
            id: cnt++,
            type: 'wan',
            num: i,
            show: false,
            canHandOut: true
          })
        }
      }
      for (let i = 1; i <= 9; i++) {
        for (let j = 0; j < 4; j++) {
          card.push({
            id: cnt++,
            type: 'tiao',
            num: i,
            show: false,
            canHandOut: true
          })
        }
      }
      for (let i = 1; i <= 4; i++) {
        for (let j = 0; j < 4; j++) {
          card.push({
            id: cnt++,
            type: 'afeng',
            num: i,
            show: false,
            canHandOut: true
          })
        }
      }
      for (let j = 0; j < 4; j++) {
        card.push({
          id: cnt++,
          type: 'abai',
          num: 1,
          show: false,
          canHandOut: true
        })
      }
      for (let j = 0; j < 4; j++) {
        card.push({
          id: cnt++,
          type: 'acai',
          num: 1,
          show: false,
          canHandOut: true
        })
      }
      for (let j = 0; j < 4; j++) {
        card.push({
          id: cnt++,
          type: 'azhong',
          num: 1,
          show: false,
          canHandOut: true
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
          this.cardList[16 * t + i].canHandOut = false
          this.playerCard[j].push(this.cardList[16 * t + i])
          i++
          this.curCardPos++
        }
      }
      this.cardList[this.curCardPos].canHandOut = false
      this.playerCard[this.curTurn].push(this.cardList[this.curCardPos++])
      this.cardList[this.curCardPos].canHandOut = false
      this.playerCard[(this.curTurn + 1)%4].push(this.cardList[this.curCardPos++])
      this.cardList[this.curCardPos].canHandOut = false
      // this.playerCard[this.curTurn].push(this.cardList[this.curCardPos++])
      this.playerCard[(this.curTurn + 2)%4].push(this.cardList[this.curCardPos++])
      this.cardList[this.curCardPos].canHandOut = false
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
    handOut (turn = this.curTurn) {
      if (this.curCardPos >= this.cardList.length) {
        console.log('一轮摸完/////////////////////////////////////////////////////////')
        this.curCardPos = 0
      }
      while(this.cardList[this.curCardPos].canHandOut === false) {
        this.curCardPos++
        if (this.curCardPos >= this.cardList.length) {
          console.log('一轮摸完////////////////////////////////////////////////////////////////////////')
          this.curCardPos = 0
        }
      }
      console.log('当前摸牌位置', this.curCardPos)
      if (turn === 0) {
        console.log('player当前摸牌', this.cardList[this.curCardPos].id + ' ' + this.cardList[this.curCardPos].type + ' ' + this.cardList[this.curCardPos].num )
      } else {
        console.log('ai' + turn + '当前摸牌', this.cardList[this.curCardPos].id + ' ' + this.cardList[this.curCardPos].type + ' ' + this.cardList[this.curCardPos].num )
      }
      this.cardList[this.curCardPos].canHandOut = false
      this.playerCard[turn].push(this.cardList[this.curCardPos++])
      this.playerCard[turn].sort(function (a, b) {
        if (a.type === b.type) {
          return a.num - b.num
        } else {
          return a.type > b.type ? 1 : -1
        }
      })
    },
    judgeHu (arr) {
      console.log('判断胡',arr)
      // 首先将bing tiao wan 都映射到计数数组上
      let bing3N = false, bing3N2 = false
      let tiao3N = false, tiao3N2 = false
      let wan3N = false, wan3N2 = false
      let other3N = false, other3N2 = false
      let bingArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      let tiaoArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      let wanArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      let otherArr = [0, 0, 0, 0, 0, 0, 0, 0]
      for (let i = 0; i < arr.length; i++) {
        let tmp = arr[i]
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
      bing3N = this.judge3N(bingArr)
      bing3N2 = this.judge3N2(bingArr)
      tiao3N = this.judge3N(tiaoArr)
      tiao3N2 = this.judge3N2(tiaoArr)
      wan3N = this.judge3N(wanArr)
      wan3N2 = this.judge3N2(wanArr)
      other3N = this.judgeO3N(otherArr)
      other3N2 = this.judgeO3N2(otherArr)
      console.log('judge 胡', bing3N, bing3N2, tiao3N, tiao3N2, wan3N, wan3N2, other3N, other3N2)
      if ((bing3N && tiao3N && wan3N && other3N)
          || (bing3N2 && tiao3N && wan3N && other3N)
          || (bing3N && tiao3N2 && wan3N && other3N)
          || (bing3N && tiao3N && wan3N2 && other3N)
          || (bing3N && tiao3N && wan3N && other3N2)) {
        return true
      }
      return false
    },
    async judgeBreak () {
      // 判断吃、碰、杠、胡
      /*
      首先判断胡
      然后判断杠或碰（因为不可能同时有人杠和碰，所以没有优先级，按照出牌顺序即可）
      然后判断下家是否吃
      * */
      // 判断胡
      for (let i = 1; i <= 3; i++) {
        let tmp = [], tmpTurn = (this.curTurn + i) % 4
        this.playerCard[tmpTurn].forEach(cur => {
          tmp.push(cur)
        })
        tmp.push(this.lastCard)
        if (this.judgeHu(tmp)) {
          alert(tmpTurn + 'win!')
          this.gameOver = true
          return tmpTurn
        }
      }
      console.log('判断胡结束')
      // 判断杠或碰
      let orderList = []
      let tmpTurn = (this.curTurn + 1) % 4
      while(tmpTurn !== this.curTurn) {
        console.log('检测碰或杠',tmpTurn)
        let tmpArr = this.playerCard[tmpTurn]
        // 首先将bing tiao wan 都映射到计数数组上
        let bingArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        let tiaoArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        let wanArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        let otherArr = [0, 0, 0, 0, 0, 0, 0, 0]
        for (let i = 0; i < tmpArr.length; i++) {
          let tmp = tmpArr[i]
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
        if (this.lastCard.type === 'bing') {
          console.log('检测bing')
          if (bingArr[this.lastCard.num] === 3) {
            if (tmpTurn !== 0) {
              // ai
              let cnt = this.playerCard[tmpTurn].length - 1
              while (cnt--) {
                if (this.playerCard[tmpTurn][cnt].type === this.lastCard.type && this.playerCard[tmpTurn][cnt].num === this.lastCard.num) {
                  this.playerCard[tmpTurn].splice(cnt, 1)
                }
              }
              // this.handOut(tmpTurn)
              // this.curTurn = tmpTurn
              this.curTurn = tmpTurn
              console.log('ai' + tmpTurn + ' 杠' + this.lastCard.type + this.lastCard.num)
              // this.preTurn = this.curTurn
              // this.curTurn = (tmpTurn + 1) % 4
              return -2
            } else {
              // player
              let tmpRes = 0
              await this.$confirm('是否杠' + this.cardMap[this.lastCard.type + this.lastCard.num], '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
              }).then(() => {
                let cnt = this.playerCard[tmpTurn].length - 1
                while (cnt--) {
                  if (this.playerCard[tmpTurn][cnt].type === this.lastCard.type && this.playerCard[tmpTurn][cnt].num === this.lastCard.num) {
                    this.playerCard[tmpTurn].splice(cnt, 1)
                  }
                }
                this.curTurn = tmpTurn
                console.log('player 杠' + this.lastCard.type + this.lastCard.num)
                // this.preTurn = this.curTurn
                // this.curTurn = (tmpTurn + 1) % 4
                tmpRes = -2
                return -2
              }).catch(() => {
                console.log('不杠')
              });
              if (tmpRes === -2) {
                return -2
              }
            }
          } else if (bingArr[this.lastCard.num] === 2) {
            console.log('检测碰', this.lastCard.type + this.lastCard.num)
            if (tmpTurn !== 0) {
              // ai
              //先计算当前的平分
              let bing3N = 0, bing3N2 = 0
              let tiao3N = 0, tiao3N2 = 0
              let wan3N = 0, wan3N2 = 0
              let other3N = 0, other3N2 = 0
              bing3N = this.get3NChance(bingArr)
              bing3N2 = this.get3N2Chance(bingArr)
              tiao3N = this.get3NChance(tiaoArr)
              tiao3N2 = this.get3N2Chance(tiaoArr)
              wan3N = this.get3NChance(wanArr)
              wan3N2 = this.get3N2Chance(wanArr)
              other3N = this.getO3NChance(otherArr)
              other3N2 = this.getO3N2Chance(otherArr)
              let preMa = bing3N2 + tiao3N + wan3N + other3N
              preMa = Math.max(preMa, (bing3N + tiao3N2 + wan3N + other3N))
              preMa = Math.max(preMa, (bing3N + tiao3N + wan3N2 + other3N))
              preMa = Math.max(preMa, (bing3N + tiao3N + wan3N + other3N2))
              console.log('检测得分preMa', preMa)
              //删除这两个
              let cnt = tmpArr.length - 1
              while (cnt >= 0) {
                if (tmpArr[cnt].type === this.lastCard.type && this.playerCard[tmpTurn][cnt].num === this.lastCard.num) {
                  tmpArr.splice(cnt, 1)
                }
                cnt--
              }
              bingArr[this.lastCard.num] -= 2

              bing3N = 0
              bing3N2 = 0
              tiao3N = 0
              tiao3N2 = 0
              wan3N = 0
              wan3N2 = 0
              other3N = 0
              other3N2 = 0
              let ma = 0, pos = 0
              console.log('开始计算删除后ma')
              for (let i = 0; i < tmpArr.length; i++) {
                let tmp = tmpArr[i]
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
                console.log('bing3N', bing3N)
                bing3N2 = this.get3N2Chance(bingArr)
                console.log('bing3N2', bing3N2)
                tiao3N = this.get3NChance(tiaoArr)
                console.log('tiao3N', tiao3N)
                tiao3N2 = this.get3N2Chance(tiaoArr)
                console.log('tiao3N2', tiao3N2)
                wan3N = this.get3NChance(wanArr)
                console.log('wan3N', wan3N)
                console.log(wanArr)
                wan3N2 = this.get3N2Chance(wanArr)
                console.log('wan3N2', wan3N2)
                other3N = this.getO3NChance(otherArr)
                console.log('other3N', other3N)
                other3N2 = this.getO3N2Chance(otherArr)
                console.log('other3N2', other3N2)
                let tmpMa = bing3N2 + tiao3N + wan3N + other3N
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
              console.log('计算ma完成',ma)
              if (preMa <= ma) {
                console.log('ai' + tmpTurn + ' 碰' + this.lastCard.type + this.lastCard.num)
                if (orderList.length > 0 && orderList[orderList.length - 1] === 0) {
                  orderList.push(tmpTurn)
                } else {
                  let cnt = this.playerCard[tmpTurn].length - 1
                  while (cnt--) {
                    if (this.playerCard[tmpTurn][cnt].type === this.lastCard.type && this.playerCard[tmpTurn][cnt].num === this.lastCard.num) {
                      this.playerCard[tmpTurn].splice(cnt, 1)
                    }
                  }
                  this.preTurn = this.curTurn
                  this.curTurn = tmpTurn
                  return pos
                }
                // this.lastCard = this.playerCard[tmpTurn][pos]
                // this.playerCard[tmpTurn].splice(pos, 1)
                // return tmpTurn
              }
            } else {
              // player
              orderList.push(tmpTurn)
            }
          }

        } else if (this.lastCard.type === 'tiao') {
          console.log('检测tiao')
          if (tiaoArr[this.lastCard.num] === 3) {
            if (tmpTurn !== 0) {
              // ai
              let cnt = this.playerCard[tmpTurn].length - 1
              while (cnt--) {
                if (this.playerCard[tmpTurn][cnt].type === this.lastCard.type && this.playerCard[tmpTurn][cnt].num === this.lastCard.num) {
                  this.playerCard[tmpTurn].splice(cnt, 1)
                }
              }
              // this.handOut(tmpTurn)
              this.curTurn = tmpTurn
              console.log('ai' + tmpTurn + ' 杠' + this.lastCard.type + this.lastCard.num)
              // this.preTurn = this.curTurn
              // this.curTurn = (tmpTurn + 1) % 4
              return -2
            } else {
              // player
              let tmpRes = -1
              await this.$confirm('是否杠' + this.cardMap[this.lastCard.type + this.lastCard.num], '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
              }).then(() => {
                let cnt = this.playerCard[tmpTurn].length - 1
                while (cnt--) {
                  if (this.playerCard[tmpTurn][cnt].type === this.lastCard.type && this.playerCard[tmpTurn][cnt].num === this.lastCard.num) {
                    this.playerCard[tmpTurn].splice(cnt, 1)
                  }
                }
                // this.handOut(tmpTurn)
                this.curTurn = tmpTurn
                console.log('player 杠' + this.lastCard.type + this.lastCard.num)
                // this.preTurn = this.curTurn
                // this.curTurn = (tmpTurn + 1) % 4
                tmpRes = -2
                return -2
              }).catch(() => {
                console.log('不杠')
                tmpRes = -1
              });
              if (tmpRes === -2) {
                return -2
              }
            }
          } else if (tiaoArr[this.lastCard.num] === 2) {
            if (tmpTurn !== 0) {
              // ai
              //先计算当前的平分
              let bing3N = 0, bing3N2 = 0
              let tiao3N = 0, tiao3N2 = 0
              let wan3N = 0, wan3N2 = 0
              let other3N = 0, other3N2 = 0
              bing3N = this.get3NChance(bingArr)
              bing3N2 = this.get3N2Chance(bingArr)
              tiao3N = this.get3NChance(tiaoArr)
              tiao3N2 = this.get3N2Chance(tiaoArr)
              wan3N = this.get3NChance(wanArr)
              wan3N2 = this.get3N2Chance(wanArr)
              other3N = this.getO3NChance(otherArr)
              other3N2 = this.getO3N2Chance(otherArr)
              let preMa = bing3N2 + tiao3N + wan3N + other3N
              preMa = Math.max(preMa, (bing3N + tiao3N2 + wan3N + other3N))
              preMa = Math.max(preMa, (bing3N + tiao3N + wan3N2 + other3N))
              preMa = Math.max(preMa, (bing3N + tiao3N + wan3N + other3N2))
              console.log('检测得分preMa', preMa)
              //删除这两个
              let cnt = tmpArr.length - 1
              while (cnt >= 0) {
                if (tmpArr[cnt].type === this.lastCard.type && this.playerCard[tmpTurn][cnt].num === this.lastCard.num) {
                  tmpArr.splice(cnt, 1)
                }
                cnt--
              }
              tiaoArr[this.lastCard.num] -= 2

              bing3N = 0
              bing3N2 = 0
              tiao3N = 0
              tiao3N2 = 0
              wan3N = 0
              wan3N2 = 0
              other3N = 0
              other3N2 = 0
              let ma = 0, pos = 0
              console.log('开始计算删除后ma')
              for (let i = 0; i < tmpArr.length; i++) {
                let tmp = tmpArr[i]
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
                let tmpMa = bing3N2 + tiao3N + wan3N + other3N
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
              console.log('计算ma完成',ma)
              if (preMa <= ma) {
                console.log('ai' + tmpTurn + ' 碰' + this.lastCard.type + this.lastCard.num)
                if (orderList.length > 0 && orderList[orderList.length - 1] === 0) {
                  orderList.push(tmpTurn)
                } else {
                  let cnt = this.playerCard[tmpTurn].length - 1
                  while (cnt--) {
                    if (this.playerCard[tmpTurn][cnt].type === this.lastCard.type && this.playerCard[tmpTurn][cnt].num === this.lastCard.num) {
                      this.playerCard[tmpTurn].splice(cnt, 1)
                    }
                  }
                  this.preTurn = this.curTurn
                  this.curTurn = tmpTurn
                  return pos
                }
                // this.lastCard = this.playerCard[tmpTurn][pos]
                // this.playerCard[tmpTurn].splice(pos, 1)
                // return tmpTurn
              }
            } else {
              // player
              orderList.push(tmpTurn)
            }
          }
        } else if (this.lastCard.type === 'wan') {
          console.log('检测wan')
          if (wanArr[this.lastCard.num] === 3) {
            if (tmpTurn !== 0) {
              // ai
              let cnt = this.playerCard[tmpTurn].length - 1
              while (cnt--) {
                if (this.playerCard[tmpTurn][cnt].type === this.lastCard.type && this.playerCard[tmpTurn][cnt].num === this.lastCard.num) {
                  this.playerCard[tmpTurn].splice(cnt, 1)
                }
              }
              // this.handOut(tmpTurn)
              this.curTurn = tmpTurn
              console.log('ai' + tmpTurn + ' 杠' + this.lastCard.type + this.lastCard.num)
              // this.preTurn = this.curTurn
              // this.curTurn = (tmpTurn + 1) % 4
              return -2
            } else {
              // player
              let tmpRes = 0
              await this.$confirm('是否杠' + this.cardMap[this.lastCard.type + this.lastCard.num], '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
              }).then(() => {
                let cnt = this.playerCard[tmpTurn].length - 1
                while (cnt--) {
                  if (this.playerCard[tmpTurn][cnt].type === this.lastCard.type && this.playerCard[tmpTurn][cnt].num === this.lastCard.num) {
                    this.playerCard[tmpTurn].splice(cnt, 1)
                  }
                }
                // this.handOut(tmpTurn)
                this.curTurn = tmpTurn
                console.log('player 杠' + this.lastCard.type + this.lastCard.num)
                // this.preTurn = this.curTurn
                // this.curTurn = (tmpTurn + 1) % 4
                tmpRes = -2
                return -2
              }).catch(() => {
                console.log('不杠')
              });
              if (tmpRes === -2) {
                return -2
              }
            }
          } else if (wanArr[this.lastCard.num] === 2) {
            if (tmpTurn !== 0) {
              // ai
              //先计算当前的平分
              let bing3N = 0, bing3N2 = 0
              let tiao3N = 0, tiao3N2 = 0
              let wan3N = 0, wan3N2 = 0
              let other3N = 0, other3N2 = 0
              bing3N = this.get3NChance(bingArr)
              bing3N2 = this.get3N2Chance(bingArr)
              tiao3N = this.get3NChance(tiaoArr)
              tiao3N2 = this.get3N2Chance(tiaoArr)
              wan3N = this.get3NChance(wanArr)
              wan3N2 = this.get3N2Chance(wanArr)
              other3N = this.getO3NChance(otherArr)
              other3N2 = this.getO3N2Chance(otherArr)
              let preMa = bing3N2 + tiao3N + wan3N + other3N
              preMa = Math.max(preMa, (bing3N + tiao3N2 + wan3N + other3N))
              preMa = Math.max(preMa, (bing3N + tiao3N + wan3N2 + other3N))
              preMa = Math.max(preMa, (bing3N + tiao3N + wan3N + other3N2))
              console.log('检测得分preMa', preMa)
              //删除这两个
              let cnt = tmpArr.length - 1
              while (cnt >= 0) {
                if (tmpArr[cnt].type === this.lastCard.type && this.playerCard[tmpTurn][cnt].num === this.lastCard.num) {
                  tmpArr.splice(cnt, 1)
                }
                cnt--
              }
              wanArr[this.lastCard.num] -= 2

              bing3N = 0
              bing3N2 = 0
              tiao3N = 0
              tiao3N2 = 0
              wan3N = 0
              wan3N2 = 0
              other3N = 0
              other3N2 = 0
              let ma = 0, pos = 0
              console.log('开始计算删除后ma')
              // for (let i = 0; i < tmpArr.length; i++) {
              //   console.log('牌', tmpArr[i].type, tmpArr[i].num)
              // }
              for (let i = 0; i < tmpArr.length; i++) {
                console.log('判断每一张', i)
                let tmp = tmpArr[i]
                console.log('该牌', tmp.type, tmp.num)
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
                console.log('bing3N', bing3N)
                bing3N2 = this.get3N2Chance(bingArr)
                console.log('bing3N2', bing3N2)
                tiao3N = this.get3NChance(tiaoArr)
                console.log('tiao3N', tiao3N)
                tiao3N2 = this.get3N2Chance(tiaoArr)
                console.log('tiao3N2', tiao3N2)
                wan3N = this.get3NChance(wanArr)
                console.log('wan3N', wan3N)
                console.log(wanArr)
                wan3N2 = this.get3N2Chance(wanArr)
                console.log('wan3N2', wan3N2)
                other3N = this.getO3NChance(otherArr)
                console.log('other3N', other3N)
                other3N2 = this.getO3N2Chance(otherArr)
                console.log('other3N2', other3N2)
                let tmpMa = bing3N2 + tiao3N + wan3N + other3N
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
              console.log('计算ma完成',ma)
              if (preMa <= ma) {
                console.log('ai' + tmpTurn + ' 碰' + this.lastCard.type + this.lastCard.num)
                if (orderList.length > 0 && orderList[orderList.length - 1] === 0) {
                  orderList.push(tmpTurn)
                } else {
                  let cnt = this.playerCard[tmpTurn].length - 1
                  while (cnt--) {
                    if (this.playerCard[tmpTurn][cnt].type === this.lastCard.type && this.playerCard[tmpTurn][cnt].num === this.lastCard.num) {
                      this.playerCard[tmpTurn].splice(cnt, 1)
                    }
                  }
                  this.preTurn = this.curTurn
                  this.curTurn = tmpTurn
                  return pos
                }
                // this.lastCard = this.playerCard[tmpTurn][pos]
                // this.playerCard[tmpTurn].splice(pos, 1)
                // return tmpTurn
              }
            } else {
              // player
              orderList.push(tmpTurn)
            }
          }
        } else if (this.lastCard.type === 'afeng' || this.lastCard.type === 'abai' || this.lastCard.type === 'acai' || this.lastCard.type === 'azhong' ) {
          console.log('检测other')
          let mapPos = 0
          if (this.lastCard.type === 'afeng') {
            mapPos = this.lastCard.num
          } else if (this.lastCard.type === 'abai') {
            mapPos = 5
          } else if (this.lastCard.type === 'acai') {
            mapPos = 6
          } else if (this.lastCard.type === 'azhong') {
            mapPos = 7
          }
          if (otherArr[mapPos] === 3) {
            if (tmpTurn !== 0) {
              // ai
              let cnt = this.playerCard[tmpTurn].length - 1
              while (cnt--) {
                if (this.playerCard[tmpTurn][cnt].type === this.lastCard.type && this.playerCard[tmpTurn][cnt].num === this.lastCard.num) {
                  this.playerCard[tmpTurn].splice(cnt, 1)
                }
              }
              // this.handOut(tmpTurn)
              this.curTurn = tmpTurn
              // this.preTurn = this.curTurn
              // this.curTurn = (tmpTurn + 1) % 4
              return -2
            } else {
              // player
              let tmpRes = 0
              await this.$confirm('是否杠' + this.cardMap[this.lastCard.type + this.lastCard.num], '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
              }).then(() => {
                let cnt = this.playerCard[tmpTurn].length - 1
                while (cnt--) {
                  if (this.playerCard[tmpTurn][cnt].type === this.lastCard.type && this.playerCard[tmpTurn][cnt].num === this.lastCard.num) {
                    this.playerCard[tmpTurn].splice(cnt, 1)
                  }
                }
                // this.handOut(tmpTurn)
                this.curTurn = tmpTurn
                console.log('player 杠' + this.lastCard.type + this.lastCard.num)
                // this.preTurn = this.curTurn
                // this.curTurn = (tmpTurn + 1) % 4
                tmpRes = -2
                return -2
              }).catch(() => {
                console.log('不杠')
              });
              if (tmpRes === -2) {
                return -2
              }
            }
          } else if (otherArr[mapPos] === 2) {
            if (tmpTurn !== 0) {
              // ai
              //先计算当前的平分
              let bing3N = 0, bing3N2 = 0
              let tiao3N = 0, tiao3N2 = 0
              let wan3N = 0, wan3N2 = 0
              let other3N = 0, other3N2 = 0
              bing3N = this.get3NChance(bingArr)
              bing3N2 = this.get3N2Chance(bingArr)
              tiao3N = this.get3NChance(tiaoArr)
              tiao3N2 = this.get3N2Chance(tiaoArr)
              wan3N = this.get3NChance(wanArr)
              wan3N2 = this.get3N2Chance(wanArr)
              other3N = this.getO3NChance(otherArr)
              other3N2 = this.getO3N2Chance(otherArr)
              let preMa = bing3N2 + tiao3N + wan3N + other3N
              preMa = Math.max(preMa, (bing3N + tiao3N2 + wan3N + other3N))
              preMa = Math.max(preMa, (bing3N + tiao3N + wan3N2 + other3N))
              preMa = Math.max(preMa, (bing3N + tiao3N + wan3N + other3N2))
              //删除这两个
              let cnt = tmpArr.length - 1
              while (cnt >= 0) {
                if (tmpArr[cnt].type === this.lastCard.type && this.playerCard[tmpTurn][cnt].num === this.lastCard.num) {
                  tmpArr.splice(cnt, 1)
                }
                cnt--
              }
              otherArr[mapPos] -= 2

              bing3N = 0
              bing3N2 = 0
              tiao3N = 0
              tiao3N2 = 0
              wan3N = 0
              wan3N2 = 0
              other3N = 0
              other3N2 = 0
              let ma = 0, pos = 0
              for (let i = 0; i < tmpArr.length; i++) {
                let tmp = tmpArr[i]
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
                let tmpMa = bing3N2 + tiao3N + wan3N + other3N
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
              if (preMa <= ma) {
                console.log('ai' + tmpTurn + ' 碰' + this.lastCard.type + this.lastCard.num)
                if (orderList.length > 0 && orderList[orderList.length - 1] === 0) {
                  orderList.push(tmpTurn)
                } else {
                  let cnt = this.playerCard[tmpTurn].length - 1
                  while (cnt--) {
                    if (this.playerCard[tmpTurn][cnt].type === this.lastCard.type && this.playerCard[tmpTurn][cnt].num === this.lastCard.num) {
                      this.playerCard[tmpTurn].splice(cnt, 1)
                    }
                  }
                  this.preTurn = this.curTurn
                  this.curTurn = tmpTurn
                  return pos
                }
                // this.lastCard = this.playerCard[tmpTurn][pos]
                // this.playerCard[tmpTurn].splice(pos, 1)
                // return tmpTurn
              }
            } else {
              // player
              orderList.push(tmpTurn)
            }
          }
        }
        tmpTurn = (tmpTurn + 1) % 4


      }
      if (orderList.length) {
        if (orderList[0] === 0) {
          console.log('判断player是否碰！！！！')
          const h = this.$createElement;
          let cardClass = this.lastCard.type + this.lastCard.num
          if (this.lastCard.type === 'abai') {
            cardClass = 'bai'
          } else if (this.lastCard.type === 'acai') {
            cardClass = 'cai'
          } else if (this.lastCard.type === 'afeng') {
            cardClass = 'feng' + this.lastCard.num
          } else if (this.lastCard.type === 'azhong') {
            cardClass = 'zhong'
          }
          await this.$msgbox({
            title: '消息',
            message: h('div', { class: 'card' }, [
              h('div', { class: 'card-pattern ' + cardClass }),
              h('span', null, '是否碰 ' + this.cardMap[this.lastCard.type + this.lastCard.num]),
            ]),
            showCancelButton: true,
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            // beforeClose: (action, instance, done) => {
            //   if (action === 'confirm') {
            //     instance.confirmButtonLoading = true;
            //     instance.confirmButtonText = '执行中...';
            //     setTimeout(() => {
            //       done();
            //       setTimeout(() => {
            //         instance.confirmButtonLoading = false;
            //       }, 300);
            //     }, 3000);
            //   } else {
            //     done();
            //   }
            // }
          }).then(action => {
            console.log('player 碰')
            let cnt = this.playerCard[0].length - 1
            while (cnt--) {
              if (this.playerCard[0][cnt].type === this.lastCard.type && this.playerCard[0][cnt].num === this.lastCard.num) {
                this.playerCard[0].splice(cnt, 1)
              }
            }
            this.preTurn = this.curTurn
            this.curTurn = 0
          }).catch(() => {
            console.log('取消')
            return -1
          });
        }
      } else {
        return -1
      }
    },
    async judgeSelf () {
      let tmpArr = this.playerCard[this.curTurn]
      // 判断自己能否赢或杠或吃
      if (this.judgeHu(tmpArr)) {
        alert('you win!')
        this.gameOver = true
        return 1
      }
      // 判断杠
      for (let i = 0; i < tmpArr.length; i++) {
        let j = 1
        while (i + j < tmpArr.length && tmpArr[i].type === tmpArr[i + j].type && tmpArr[i].num === tmpArr[i + j].num) {
          j++
        }
        j--
        if (j === 3) {
          // 可以杠
          if (this.curTurn === 0) {
            // player
            await this.$confirm('是否杠' + this.cardMap[this.lastCard.type + this.lastCard.num], '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning'
            }).then(() => {
              let cnt = this.playerCard[this.curTurn].length - 1
              this.playerCard[this.curTurn].splice(i, 4)
              this.handOut()
              console.log('ai' + this.curTurn + ' 杠' + this.lastCard.type + this.lastCard.num)
              // return 2
              this.canOpt = true
              return 2
            }).catch(() => {
              console.log('不杠')
            });
          } else {
            // ai
            this.playerCard[this.curTurn].splice(i, 4)
            // this.handOut()
            this.aiTurn()
            return 2
          }
        }
      }
      // 判断吃
      if (this.preTurn !== -1 && this.curTurn === (this.preTurn + 1) % 4) {
        // 检测吃
        // 首先将bing tiao wan 都映射到计数数组上
        let bingArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        let tiaoArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        let wanArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        let otherArr = [0, 0, 0, 0, 0, 0, 0, 0]
        for (let i = 0; i < tmpArr.length; i++) {
          let tmp = tmpArr[i]
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

      }
    },
    async turnControl () {
      console.log('当前', this.curTurn)
      let nxt = await this.judgeBreak()
      console.log('判断结束', nxt)
      if (nxt === -1) {
        // 正常流程
        console.log('lastCard/////////////////////////////', this.lastCard)
        this.cardList.forEach(cur => {
          if (cur.id === this.lastCard.id) {
            cur.canHandOut = true
          }
          // console.log(cur.id, cur.type, cur.num, cur.canHandOut)
        })
        this.preTurn = this.curTurn
        this.curTurn = (this.curTurn + 1) % 4
        console.log('正常流程', this.curTurn)
        setTimeout(() => {
          if (this.curTurn === 0) {
            this.playerTurn()
          } else {
            this.aiTurn()
          }
        }, 1)
      } else if (nxt !== -2) {
        // 有人碰
        console.log('打断', this.curTurn)
        if (this.curTurn === 0) {
          this.canOpt = true
        } else {
          this.aiTurn(nxt)
        }
      } else {
        // 有人杠
        setTimeout(() => {
          if (this.curTurn === 0) {
            this.playerTurn()
          } else {
            this.aiTurn()
          }
        }, 1)
      }
    },
    async aiTurn (assignPos = -1) {
      // if (this.judgeHu(this.playerCard[this.curTurn])) {
      //   alert('ai' + this.curTurn + ' win!')
      //   this.gameOver = true
      //   return
      // }
      if (assignPos === -1) {
        this.handOut()
        // 判断自己能否赢或杠
        let selfRes = await this.judgeSelf()
        if (selfRes === 1) {
          alert('ai' + this.curTurn + ' win!')
          this.gameOver = true
          return
        } else if (selfRes === 2) {
          // this.curTurn = (this.curTurn + 1) % 4
          // 杠
          this.turnControl()
          return
        }
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
        for (let i = 0; i < this.playerCard[this.curTurn].length; i++) {
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
        for (let i = 0; i < this.playerCard[this.curTurn].length; i++) {
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
          let tmpMa = bing3N2 + tiao3N + wan3N + other3N
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
        console.log('ai'+ this.curTurn +' card', this.playerCard[this.curTurn][pos].type + this.playerCard[this.curTurn][pos].num)
        this.lastCard = this.playerCard[this.curTurn][pos]
        this.playerCard[this.curTurn].splice(pos, 1)
      } else {
        this.lastCard = this.playerCard[this.curTurn][assignPos]
        this.playerCard[this.curTurn].splice(assignPos, 1)
      }
      this.turnControl()
    },
    async playerTurn () {
      console.log('player turn')
      this.handOut()
      // 判断自己能否赢或杠
      let selfRes = await this.judgeSelf()
      if (selfRes === 1) {
        alert('ai' + this.curTurn + ' win!')
        this.gameOver = true
        return
      } else if (selfRes === 2) {
        // this.curTurn = (this.curTurn + 1) % 4
        this.turnControl()
        return
      }
      // 出牌
      this.canOpt = true
    },
    playerOutCard (id, pos, isPlayer) {
      if (this.curTurn === 0 && this.canOpt && isPlayer) {
        if (this.curSelectId === id) {
          // 出牌
          this.lastCard = this.playerCard[this.curTurn][pos]
          this.playerCard[this.curTurn].splice(pos, 1)
          this.curSelectId = 0
          // this.$forceUpdate()
          this.$nextTick(() => {
            this.turnControl()
          })
          // setTimeout(() => {
          //
          // }, 1000)
        } else {
          this.curSelectId = id
        }
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
          if (tmp[i + 1] > 0) {
            tmp[i + 1] -= 1
            tmp[i] = 0
            if (this.judge3N(tmp)) {
              return true
            }
            tmp[i + 1] += 1
            tmp[i] = 1
          }
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
    this.preTurn = -1
    this.curTurn = this.randomInteger(0, 3)
    // this.curTurn = 0
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
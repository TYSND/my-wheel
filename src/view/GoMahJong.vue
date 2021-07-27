<script src="../../../../Users/33389/Desktop/mj2.js"></script>
<template>
  <div class="go-mah-jong">
    <div class="play-area-outer">
      <div :class="{
          'play-area': true,
          ['player' + (i-1)]: true
        }" v-for="i in 4" :key="i">
        <div class="card-list">
          <div class="card" v-for="(card, index) in playerCard[i - 1]" :key="index">
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
        this.curCardPos %= this.cardList.length
      }
      this.playerCard[this.curTurn].push(this.cardList[this.curCardPos++])
    },
    judgeBreak () {
      // 判断吃、碰、杠、胡
      return -1
    },
    judgeSelf () {
      // 判断自己能否赢或杠
    },
    turnControl () {

    },
    aiTurn () {
      this.handOut()
      // 判断自己能否赢或杠
      this.judgeSelf()
      // 出牌
    },
    playerTurn () {
      this.handOut()
      // 判断自己能否赢或杠
      this.judgeSelf()
      // 出牌
      // xxx
      this.turnControl()
    }
  },
  created() {
    // console.log('card', this.cardList())
    this.cardList = this.generateCards()
    this.curTurn = this.randomInteger(0, 3)
    console.log(this.curTurn)
    this.initHandOut()
  },
  mounted() {
    if (this.curTurn !== 0) {
      setTimeout(() => {
        // while (this.curTurn !== 0) {
        //   this.aiTurn(this.curTurn)
        //   this.turnControl()
        // }
      }, 1000)
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
        .empty-card {
          width: 80px;
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
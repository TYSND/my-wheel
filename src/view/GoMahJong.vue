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
              'bing1': card.type === 'bing' && card.num === 1,
              'bing2': card.type === 'bing' && card.num === 2,
              'bing3': card.type === 'bing' && card.num === 3,
              'bing4': card.type === 'bing' && card.num === 4,
              'bing5': card.type === 'bing' && card.num === 5,
              'bing6': card.type === 'bing' && card.num === 6,
              'bing7': card.type === 'bing' && card.num === 7,
              'bing8': card.type === 'bing' && card.num === 8,
              'bing9': card.type === 'bing' && card.num === 9,
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
      let card = []
      for (let i = 1; i <= 9; i++) {
        for (let j = 0; j < 4; j++) {
          card.push({
            type: 'bing',
            num: i
          })
        }
      }
      for (let i = 1; i <= 9; i++) {
        for (let j = 0; j < 4; j++) {
          card.push({
            type: 'wan',
            num: i
          })
        }
      }
      for (let i = 1; i <= 9; i++) {
        for (let j = 0; j < 4; j++) {
          card.push({
            type: 'tiao',
            num: i
          })
        }
      }
      for (let i = 1; i <= 4; i++) {
        for (let j = 0; j < 4; j++) {
          card.push({
            type: 'feng',
            num: i
          })
        }
      }
      for (let j = 0; j < 4; j++) {
        card.push({
          type: 'bai',
          num: 1
        })
      }
      for (let j = 0; j < 4; j++) {
        card.push({
          type: 'cai',
          num: 1
        })
      }
      for (let j = 0; j < 4; j++) {
        card.push({
          type: 'zhong',
          num: 1
        })
      }
      card.sort(() => Math.random() - 0.5)
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
      this.playerCard[this.curTurn].push(this.cardList[this.curCardPos++])
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
    }
  },
  created() {
    // console.log('card', this.cardList())
    this.cardList = this.generateCards()
    this.curTurn = this.randomInteger(0, 3)
    console.log(this.curTurn)
    this.initHandOut()
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
  }
}
</style>
<template>
  <div class="spider-card">
    <div class="card-pool">
      <div class="back-card-pool">
        <div class="card back-card"></div>
      </div>
      <div class="front-card-pool">
        <div class="card front-card" v-for="(card, index) in frontCardPool" :key="index"
             :style="{
                'z-index': frontCardPool.length - index + 10
             }"
             ref="frontCard"
             @mousedown.self="drag($event, index)">
          <div :class="{
            'card-suit': true,
            'spade': card.suit === 'spade',
            'heart': card.suit === 'heart',
            'diamond': card.suit === 'diamond',
            'club': card.suit === 'club'
          }">
            <div class="material"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="card-column-list">
      <div class="card-column" v-for="(column, index) in cardColumn" :key="index"
           :style="{
              top: column.y + 'px',
              left: index * 80 + column.x + 'px'
           }"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SpiderCard",
  data () {
    return {
      cardColumn: [
        {
          x: 50,
          y: 0,
          backList: [],
          frontList: []
        },
        {
          x: 100,
          y: 0,
          backList: [],
          frontList: []
        },
        {
          x: 150,
          y: 0,
          backList: [],
          frontList: []
        },
        {
          x: 200,
          y: 0,
          backList: [],
          frontList: []
        },
        {
          x: 250,
          y: 0,
          backList: [],
          frontList: []
        },
        {
          x: 300,
          y: 0,
          backList: [],
          frontList: []
        },
        {
          x: 350,
          y: 0,
          backList: [],
          frontList: []
        },
        {
          x: 400,
          y: 0,
          backList: [],
          frontList: []
        },
        {
          x: 450,
          y: 0,
          backList: [],
          frontList: []
        },
        {
          x: 500,
          y: 0,
          backList: [],
          frontList: []
        },
      ],
      frontCardPool: [
        {
          suit: 'spade',
          num: 1
        },
        {
          suit: 'heart',
          num: 1
        },
        {
          suit: 'diamond',
          num: 1
        },
        {
          suit: 'club',
          num: 1
        },
      ]
    }
  },
  methods: {
    drag (e, idx) {
      // 拖拽想法：记录每一列可以放牌的坐标，拖拽牌至该坐标范围内，则可以，更新该列数据。否则牌归位
      // let that = this
      let mos = e.target
      let disX = e.clientX - mos.offsetLeft
      let disY = e.clientY - mos.offsetTop
      let card = this.$refs.frontCard[idx]
      console.log(card)
      document.onmousemove = (e)=> {
        //鼠标按下并移动的事件
        //用鼠标的位置减去鼠标相对元素的位置，得到元素的位置
        let left = e.clientX - disX
        let top = e.clientY - disY;
        //绑定元素位置到positionX和positionY上面

        //移动当前元素
        mos.style.left = left + 'px'
        mos.style.top = top + 'px';
      }
      document.onmouseup = () => {
        document.onmousemove = null
        document.onmouseup = null
      }
    }
  }
}
</script>

<style lang="less" scoped>
.spider-card {
  padding: 20px;
  .front-card {
    background-color: #FFFFFF;
  }
  .card {
    width: 80px;
    height: 120px;
    user-select: none;
    .card-suit {

    }
    .spade {
      position: relative;
      width: 20px;
      height: 20px;
      left: 20px;
      top: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      .material {
        width: 10px;
        height: 10px;
        background-color: black;
        position: relative;
        //bottom: 6px;
        //left: -3.1px;
        transform: rotate(135deg);
      }
      .material:before {
        content: '';
        width: 4px;
        height: 9px;
        background-color: black;
        position: absolute;
        top: -5px;
        right: -2px;
        transform: rotate(45deg);
      }
      .material:after {
        content: '';
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: black;
        position: absolute;
        top: -5px;
        left: 0;
        box-shadow: 5px 5px black;
      }
    }
    .heart {
      position: relative;
      width: 20px;
      height: 20px;
      left: 20px;
      top: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      .material {
        width: 10px;
        height: 10px;
        background-color: red;
        position: relative;
        //bottom: 6px;
        //left: -3.1px;
        transform: rotate(-45deg);
      }
      .material:after {
        content: '';
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: red;
        position: absolute;
        top: -5px;
        left: 0;
        box-shadow: 5px 5px red;
      }
    }
    .diamond {
      position: relative;
      width: 20px;
      height: 20px;
      left: 20px;
      top: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      .material {
        width: 12px;
        height: 12px;
        transform: rotateZ(45deg)skew(10deg, 10deg);
        background: red;
      }
    }
    .club {
      position: relative;
      width: 20px;
      height: 20px;
      left: 20px;
      top: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      .material {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: black;
        position: relative;
        //bottom: 6px;
        //left: -3.1px;
        //transform: rotate(135deg);
      }
      .material:before {
        content: '';
        width: 4px;
        height: 9px;
        background-color: black;
        position: absolute;
        top: 11px;
        left: 3.5px;
        //transform: rotate(45deg);
      }
      .material:after {
        content: '';
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: black;
        position: absolute;
        top: 6px;
        left: -4px;
        box-shadow: 8px 0px black;
      }
    }
  }
  .card-pool {
    display: flex;
    .back-card-pool {
      .back-card {
        border: 1px solid red;
        //background-color: red;
      }
    }
    .front-card-pool {
      position: relative;
      .front-card {
        border: 1px solid black;
        //background-color: black;
        position: absolute;
      }
    }
  }
  .card-column-list {
    margin-top: 100px;
    border: 1px solid red;
    position: relative;
    .card-column {
      border: 1px dashed black;
      position: absolute;
      width: 80px;
      height: 120px;
    }
  }
}
</style>
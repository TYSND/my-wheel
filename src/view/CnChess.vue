<template>
  <div class="cn-chess">
    <div class="checker-border-outer">
      <div class="checker-border">
        <div class="row" v-for="(row, rowId) in chessMap" :key="rowId">
          <div :class="{
            'col': true,
            'pre-go': canMove[rowId][colId] === '-1'
          }" v-for="(col, colId) in row" :key="colId"
               :style="{
                 position: 'absolute',
                 'z-index': 999,
                 top: rowId * 60 - 20 + 'px',
                 left: colId * 60 - 20 + 'px',
               }" @click="moveChess(rowId, colId)">
            <div :class="{
              'chess': true,
              'red-side': parseInt(col) > 0,
              'black-side': parseInt(col) < 0,
              'pre-chess-eat': canMove[rowId][colId] === '-1',
              'last-move-chess': rowId === lastRowId && colId === lastColId
            }" v-if="col !== '0'">
              {{chessInfo[col]}}
            </div>
            <div :class="{
              'pre-chess': col === '0'
            }"></div>
          </div>
        </div>
        <div class="check-mate" v-show="showCheckMate">
          将
        </div>
      </div>
      <div class="river"></div>
      <div class="b-side line-tl-br"></div>
      <div class="b-side line-bl-tr"></div>
      <div class="r-side line-tl-br"></div>
      <div class="r-side line-bl-tr"></div>
      <div class="mark mark0">
        <div class="curve0"></div>
        <div class="curve1"></div>
        <div class="curve2"></div>
        <div class="curve3"></div>
      </div>
      <div class="mark mark1">
        <div class="curve0"></div>
        <div class="curve1"></div>
        <div class="curve2"></div>
        <div class="curve3"></div>
      </div>
      <div class="mark mark2">
<!--        <div class="curve0"></div>-->
        <div class="curve1"></div>
        <div class="curve2"></div>
<!--        <div class="curve3"></div>-->
      </div>
      <div class="mark mark3">
        <div class="curve0"></div>
        <div class="curve1"></div>
        <div class="curve2"></div>
        <div class="curve3"></div>
      </div>
      <div class="mark mark4">
        <div class="curve0"></div>
        <div class="curve1"></div>
        <div class="curve2"></div>
        <div class="curve3"></div>
      </div>
      <div class="mark mark5">
        <div class="curve0"></div>
        <div class="curve1"></div>
        <div class="curve2"></div>
        <div class="curve3"></div>
      </div>
      <div class="mark mark6">
        <div class="curve0"></div>
<!--        <div class="curve1"></div>-->
<!--        <div class="curve2"></div>-->
        <div class="curve3"></div>
      </div>
      <div class="mark mark7">
        <div class="curve0"></div>
        <div class="curve1"></div>
        <div class="curve2"></div>
        <div class="curve3"></div>
      </div>
      <div class="mark mark8">
        <div class="curve0"></div>
        <div class="curve1"></div>
        <div class="curve2"></div>
        <div class="curve3"></div>
      </div>
      <div class="mark mark9">
        <!--        <div class="curve0"></div>-->
        <div class="curve1"></div>
        <div class="curve2"></div>
        <!--        <div class="curve3"></div>-->
      </div>
      <div class="mark mark10">
        <div class="curve0"></div>
        <div class="curve1"></div>
        <div class="curve2"></div>
        <div class="curve3"></div>
      </div>
      <div class="mark mark11">
        <div class="curve0"></div>
        <div class="curve1"></div>
        <div class="curve2"></div>
        <div class="curve3"></div>
      </div>
      <div class="mark mark12">
        <div class="curve0"></div>
        <div class="curve1"></div>
        <div class="curve2"></div>
        <div class="curve3"></div>
      </div>
      <div class="mark mark13">
        <div class="curve0"></div>
        <!--        <div class="curve1"></div>-->
        <!--        <div class="curve2"></div>-->
        <div class="curve3"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CnChess",
  data () {
    const chessInfo = {
      '1': '帥',
      '2': '仕',
      '3': '相',
      '4': '傌',
      '5': '俥',
      '6': '炮',
      '7': '兵',
      '-1': '将',
      '-2': '士',
      '-3': '象',
      '-4': '馬',
      '-5': '車',
      '-6': '砲',
      '-7': '卒',
    }
    const chessMap = [
        ['-5', '-4', '-3', '-2', '-1', '-2', '-3', '-4', '-5'],
        ['0', '0', '0', '0', '0', '0', '0', '0', '0'],
        ['0', '-6', '0', '0', '0', '0', '0', '-6', '0'],
        ['-7', '0', '-7', '0', '-7', '0', '-7', '0', '-7'],
        ['0', '0', '0', '0', '0', '0', '0', '0', '0'],
        ['0', '0', '0', '0', '0', '0', '0', '0', '0'],
        ['7', '0', '7', '0', '7', '0', '7', '0', '7'],
        ['0', '6', '0', '0', '0', '0', '0', '6', '0'],
        ['0', '0', '0', '0', '0', '0', '0', '0', '0'],
        ['5', '4', '3', '2', '1', '2', '3', '4', '5']
    ]
    // const chessMap = [
    //   ['-5', '-4', '-3', '-2', '-1', '-2', '-3', '-4', '-5'],
    //   ['0', '0', '0', '0', '0', '0', '0', '0', '0'],
    //   ['0', '-6', '0', '0', '-6', '0', '0', '0', '0'],
    //   ['-7', '0', '-7', '0', '-7', '0', '-7', '0', '0'],
    //   ['0', '0', '0', '0', '0', '0', '0', '0', '-7'],
    //   ['0', '0', '0', '0', '6', '0', '0', '0', '0'],
    //   ['7', '0', '7', '0', '7', '0', '7', '0', '7'],
    //   ['0', '6', '0', '0', '0', '0', '0', '0', '0'],
    //   ['0', '0', '0', '0', '0', '0', '0', '0', '0'],
    //   ['5', '4', '3', '2', '1', '2', '3', '4', '5']
    // ]
    const canMove = [
      ['0', '0', '0', '0', '0', '0', '0', '0', '0'],
      ['0', '0', '0', '0', '0', '0', '0', '0', '0'],
      ['0', '0', '0', '0', '0', '0', '0', '0', '0'],
      ['0', '0', '0', '0', '0', '0', '0', '0', '0'],
      ['0', '0', '0', '0', '0', '0', '0', '0', '0'],
      ['0', '0', '0', '0', '0', '0', '0', '0', '0'],
      ['0', '0', '0', '0', '0', '0', '0', '0', '0'],
      ['0', '0', '0', '0', '0', '0', '0', '0', '0'],
      ['0', '0', '0', '0', '0', '0', '0', '0', '0'],
      ['0', '0', '0', '0', '0', '0', '0', '0', '0']
    ]
    const chessScore = {
      '0': 0,
      '1': 800,
      '2': 0,
      '3': 0,
      '4': 299,
      '5': 500,
      '6': 300,
      '7': 100,
      '-1': 800,
      '-2': 0,
      '-3': 0,
      '-4': 299,
      '-5': 500,
      '-6': 300,
      '-7': 100,
    }
    const chessPosScore = {
      '-1': [
        [0, 0, 0, 1, 5, 1, 0, 0, 0],
        [0, 0, 0, -8, -8, -8, 0, 0, 0],
        [0, 0, 0, -9, -9, -9, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0]
      ],
      '-2': [
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 3, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0]
      ],
      '-3': [
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [-2, 0, 0, 0, 3, 0, 0, 0, -2],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0]
      ],
      '-4': [
        [0, -3, 2, 0, 2, 0, 2, -3, 0],
        [-3, 2, 4, 5, -10, 5, 4, 2, -3],
        [5, 4, 6, 7, 4, 7, 6, 4, 5],
        [4, 6, 10, 7, 10, 7, 10, 6, 4],
        [2, 10, 13, 14, 15, 14, 13, 10, 2],
        [2, 10, 13, 14, 15, 14, 13, 10, 2],
        [2, 12, 11, 15, 16, 15, 11, 12, 2],
        [5, 20, 12, 19, 12, 19, 12, 20, 5],
        [4, 10, 11, 15, 11, 15, 11, 10, 4],
        [2, 8, 15, 9, 6, 9, 15, 8, 2],
        [2, 2, 2, 8, 2, 8, 2, 2, 2]
      ],
      '-5': [
        [-6, 6, 4, 12, 0, 12, 4, 6, -6],
        [5, 8, 6, 12, 0, 12, 6, 8, 5],
        [-2, 8, 4, 12, 12, 12, 4, 8, -2],
        [4, 9, 4, 12, 14, 12, 4, 9, 4],
        [8, 12, 12, 14, 15, 14, 12, 12, 8],
        [8, 11, 11, 14, 15, 14, 11, 11, 8],
        [6, 13, 13, 16, 16, 16, 13, 13, 6],
        [6, 8, 7, 14, 16, 14, 7, 8, 6],
        [6, 12, 9, 16, 33, 16, 9, 12, 6],
        [6, 8, 7, 13, 14, 13, 7, 8, 6]
      ],
      '-6': [
        [0, 0, 1, 3, 3, 3, 1, 0, 0],
        [0, 1, 2, 2, 2, 2, 2, 1, 0],
        [1, 0, 4, 3, 5, 3, 4, 0, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [-1, 0, 3, 0, 4, 0, 3, 0, -1],
        [0, 0, 0, 0, 4, 0, 0, 0, 0],
        [0, 3, 3, 2, 4, 2, 3, 3, 0],
        [1, 1, 0, -5, -4, -5, 0, 1, 1],
        [2, 2, 0, -4, -7, -4, 0, 2, 2],
        [4, 4, 0, -5, -6, -5, 0, 4, 4]
      ],
      '-7': [
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [-2, 0, -2, 0, 6, 0, -2, 0, -2],
        [3, 0, 4, 0, 7, 0, 4, 0, 3],
        [10, 18, 22, 35, 40, 35, 22, 18, 10],
        [20, 27, 30, 40, 42, 40, 30, 27, 20],
        [20, 30, 45, 55, 55, 55, 45, 30, 20],
        [20, 30, 50, 65, 70, 65, 50, 30, 20],
        [0, 0, 0, 2, 4, 2, 0, 0, 0]
      ],
      '1': [
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, -9, -9, -9, 0, 0, 0],
        [0, 0, 0, -8, -8, -8, 0, 0, 0],
        [0, 0, 0, 1, 5, 1, 0, 0, 0],
      ],
      '2': [
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 3, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0]
      ],
      '3': [
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [-2, 0, 0, 0, 3, 0, 0, 0, -2],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0]
      ],
      '4': [
        [2, 2, 2, 8, 2, 8, 2, 2, 2],
        [2, 8, 15, 9, 6, 9, 15, 8, 2],
        [4, 10, 11, 15, 11, 15, 11, 10, 4],
        [5, 20, 12, 19, 12, 19, 12, 20, 5],
        [2, 12, 11, 15, 16, 15, 11, 12, 2],
        [2, 10, 13, 14, 15, 14, 13, 10, 2],
        [2, 10, 13, 14, 15, 14, 13, 10, 2],
        [4, 6, 10, 7, 10, 7, 10, 6, 4],
        [5, 4, 6, 7, 4, 7, 6, 4, 5],
        [-3, 2, 4, 5, -10, 5, 4, 2, -3],
        [0, -3, 2, 0, 2, 0, 2, -3, 0],
      ],
      '5': [
        [6, 8, 7, 13, 14, 13, 7, 8, 6],
        [6, 12, 9, 16, 33, 16, 9, 12, 6],
        [6, 8, 7, 14, 16, 14, 7, 8, 6],
        [6, 13, 13, 16, 16, 16, 13, 13, 6],
        [8, 11, 11, 14, 15, 14, 11, 11, 8],
        [8, 12, 12, 14, 15, 14, 12, 12, 8],
        [4, 9, 4, 12, 14, 12, 4, 9, 4],
        [-2, 8, 4, 12, 12, 12, 4, 8, -2],
        [5, 8, 6, 12, 0, 12, 6, 8, 5],
        [-6, 6, 4, 12, 0, 12, 4, 6, -6],
      ],
      '6': [
        [4, 4, 0, -5, -6, -5, 0, 4, 4],
        [2, 2, 0, -4, -7, -4, 0, 2, 2],
        [1, 1, 0, -5, -4, -5, 0, 1, 1],
        [0, 3, 3, 2, 4, 2, 3, 3, 0],
        [0, 0, 0, 0, 4, 0, 0, 0, 0],
        [-1, 0, 3, 0, 4, 0, 3, 0, -1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 0, 4, 3, 5, 3, 4, 0, 1],
        [0, 1, 2, 2, 2, 2, 2, 1, 0],
        [0, 0, 1, 3, 3, 3, 1, 0, 0],
      ],
      '7': [
        [0, 0, 0, 2, 4, 2, 0, 0, 0],
        [20, 30, 50, 65, 70, 65, 50, 30, 20],
        [20, 30, 45, 55, 55, 55, 45, 30, 20],
        [20, 27, 30, 40, 42, 40, 30, 27, 20],
        [10, 18, 22, 35, 40, 35, 22, 18, 10],
        [3, 0, 4, 0, 7, 0, 4, 0, 3],
        [-2, 0, -2, 0, 6, 0, -2, 0, -2],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
      ]
    }
    return {
      chessInfo,
      chessMap: chessMap,
      canMove: canMove,
      chessScore: chessScore,
      chessPosScore: chessPosScore,
      curRowId: -1,
      curColId: -1,
      aiRowId: -1,
      aiColId: -1,
      aiNewRowId: -1,
      aiNewColId: -1,
      canOpt: true,
      lastRowId: -1,
      lastColId: -1,
      win: 0,
      showCheckMate: false
    }
  },
  methods: {
    moveChess (rowId, colId) {
      if (this.canOpt) {
        // 若点击棋子，搜索该棋子可走的位置，置为999。
        // 但这样有问题，可以走的位置也可能包括敌方棋子，即可以吃掉敌方棋子，这种情况不能置999
        // 再加一个数组？
        if (parseInt(this.chessMap[rowId][colId]) > 0 && this.canMove[rowId][colId] === '0') {
          // 选中该棋子并找出可移动的位置
          this.canMove[rowId][colId] = '1'
          this.curRowId = rowId
          this.curColId = colId
          this.searchNxt(rowId, colId)
          this.$forceUpdate()
        } else if (this.canMove[rowId][colId] === '-1') {
          // 走棋
          // if (this.judgeCheckMate(this.chessMap, true)) {
          //   this.$notify.warning({
          //     title: '提醒',
          //     message: '移动后对方将军'
          //   })
          //   return
          // }
          for (let i = 0; i < this.canMove.length; i++) {
            for (let j = 0; j < this.canMove[i].length; j++) {
              if (this.canMove[i][j] === '-1') {
                this.canMove[i][j] = '0'
              }
            }
          }
          console.log('player before', this.curRowId,this.curColId, this.chessMap[this.curRowId][this.curColId])
          console.log('player move to', rowId, colId, this.chessMap[rowId][colId])
          this.chessMap[rowId][colId] = this.chessMap[this.curRowId][this.curColId]
          this.chessMap[this.curRowId][this.curColId] = '0'
          this.curRowId = -1
          this.curColId = -1
          this.lastRowId = rowId
          this.lastColId = colId
          this.$forceUpdate()
          // console.log('checkmate', this.judgeCheckMate(this.chessMap, false))
          this.canOpt = false
          if (this.judgeCheckMate(this.chessMap, false)) {
            this.showCheckMate = true
            setTimeout(() => {
              this.showCheckMate = false
              this.aiTurn()
            }, 500)
          } else {
            setTimeout(() => {
              this.aiTurn()
            }, 1)
          }
        } else if (this.chessMap[rowId][colId] !== '0' && this.canMove[rowId][colId] === '1') {
          // 取消选择
          this.canMove[rowId][colId] = '0'
          this.curRowId = -1
          this.curColId = -1
          for (let i = 0; i < this.canMove.length; i++) {
            for (let j = 0; j < this.canMove[i].length; j++) {
              if (this.canMove[i][j] === '-1') {
                this.canMove[i][j] = '0'
              }
            }
          }
          this.$forceUpdate()
        }
      }
    },
    isEnemy (self, item) {
      return parseInt(self) * parseInt(item) < 0
    },
    isAlly (self, item) {
      return parseInt(self) * parseInt(item) > 0
    },
    judgePos (rowId, colId) {
      return rowId >= 0 && rowId < this.chessMap.length && colId >= 0 && colId < this.chessMap[0].length
    },
    searchNxt (rowId, colId) {
      if (this.chessMap[rowId][colId] === '0') {
        return
      }
      let curMap = [
        ['0', '0', '0', '0', '0', '0', '0', '0', '0'],
        ['0', '0', '0', '0', '0', '0', '0', '0', '0'],
        ['0', '0', '0', '0', '0', '0', '0', '0', '0'],
        ['0', '0', '0', '0', '0', '0', '0', '0', '0'],
        ['0', '0', '0', '0', '0', '0', '0', '0', '0'],
        ['0', '0', '0', '0', '0', '0', '0', '0', '0'],
        ['0', '0', '0', '0', '0', '0', '0', '0', '0'],
        ['0', '0', '0', '0', '0', '0', '0', '0', '0'],
        ['0', '0', '0', '0', '0', '0', '0', '0', '0'],
        ['0', '0', '0', '0', '0', '0', '0', '0', '0']
      ]
      for (let i = 0; i < this.canMove.length; i++) {
        for (let j = 0; j < this.canMove[i].length; j++) {
          curMap[i][j] = this.chessMap[i][j]
          if (this.canMove[i][j] === '-1') {
            this.canMove[i][j] = '0'
          }
        }
      }
      let nxtList = []
      if (curMap[rowId][colId] === '1') {
        // 帅
        if (rowId - 1 >= this.canMove.length - 3 && (curMap[rowId - 1][colId] === '0' || this.isEnemy(curMap[rowId][colId], curMap[rowId - 1][colId]))) {
          // this.canMove[rowId - 1][colId] = '-1'
          nxtList.push({
            rowId: rowId,
            colId: colId,
            newRowId: rowId - 1,
            newColId: colId
          })
        }
        if (rowId + 1 < this.canMove.length && (curMap[rowId + 1][colId] === '0' || this.isEnemy(curMap[rowId][colId], curMap[rowId + 1][colId]))) {
          // this.canMove[rowId + 1][colId] = '-1'
          nxtList.push({
            rowId: rowId,
            colId: colId,
            newRowId: rowId + 1,
            newColId: colId
          })
        }
        if (colId - 1 >= 3 && (curMap[rowId][colId - 1] === '0' || this.isEnemy(curMap[rowId][colId], curMap[rowId][colId - 1]))) {
          // this.canMove[rowId][colId - 1] = '-1'
          nxtList.push({
            rowId: rowId,
            colId: colId,
            newRowId: rowId,
            newColId: colId - 1
          })
        }
        if (colId + 1 <= 5 && (curMap[rowId][colId + 1] === '0' || this.isEnemy(curMap[rowId][colId], curMap[rowId][colId + 1]))) {
          // this.canMove[rowId][colId + 1] = '-1'
          nxtList.push({
            rowId: rowId,
            colId: colId,
            newRowId: rowId,
            newColId: colId + 1
          })
        }
      }
      if (curMap[rowId][colId] === '2') {
        // 士
        if (rowId - 1 >= this.canMove.length - 3 && colId - 1 >= 3 && (curMap[rowId - 1][colId - 1] === '0' || this.isEnemy(curMap[rowId][colId], curMap[rowId - 1][colId - 1]))) {
          // this.canMove[rowId - 1][colId - 1] = '-1'
          nxtList.push({
            rowId: rowId,
            colId: colId,
            newRowId: rowId - 1,
            newColId: colId - 1
          })
        }
        if (rowId - 1 >= this.canMove.length - 3 && colId + 1 <= 5 && (curMap[rowId - 1][colId + 1] === '0' || this.isEnemy(curMap[rowId][colId], curMap[rowId - 1][colId + 1]))) {
          // this.canMove[rowId - 1][colId + 1] = '-1'
          nxtList.push({
            rowId: rowId,
            colId: colId,
            newRowId: rowId - 1,
            newColId: colId + 1
          })
        }
        if (rowId + 1 < this.canMove.length && colId - 1 >= 3 && (curMap[rowId + 1][colId - 1] === '0' || this.isEnemy(curMap[rowId][colId], curMap[rowId + 1][colId - 1]))) {
          // this.canMove[rowId + 1][colId - 1] = '-1'
          nxtList.push({
            rowId: rowId,
            colId: colId,
            newRowId: rowId + 1,
            newColId: colId - 1
          })
        }
        if (rowId + 1 < this.canMove.length && colId + 1 <= 5 && (curMap[rowId + 1][colId + 1] === '0' || this.isEnemy(curMap[rowId][colId], curMap[rowId + 1][colId + 1]))) {
          // this.canMove[rowId + 1][colId + 1] = '-1'
          nxtList.push({
            rowId: rowId,
            colId: colId,
            newRowId: rowId + 1,
            newColId: colId + 1
          })
        }
      }
      if (curMap[rowId][colId] === '3') {
        // 相
        if (rowId - 2 >= 5 && colId - 2 >= 0 && (curMap[rowId - 2][colId - 2] === '0' || this.isEnemy(curMap[rowId][colId], curMap[rowId - 2][colId - 2])) && curMap[rowId - 1][colId - 1] === '0') {
          // this.canMove[rowId - 2][colId - 2] = '-1'
          nxtList.push({
            rowId: rowId,
            colId: colId,
            newRowId: rowId - 2,
            newColId: colId - 2
          })
        }
        if (rowId - 2 >= 5 && colId + 2 < curMap[0].length && (curMap[rowId - 2][colId + 2] === '0' || this.isEnemy(curMap[rowId][colId], curMap[rowId - 2][colId + 2])) && curMap[rowId - 1][colId + 1] === '0') {
          // this.canMove[rowId - 2][colId + 2] = '-1'
          nxtList.push({
            rowId: rowId,
            colId: colId,
            newRowId: rowId - 2,
            newColId: colId + 2
          })
        }
        if (rowId + 2 < this.canMove.length && colId - 2 >= 0 && (curMap[rowId + 2][colId - 2] === '0' || this.isEnemy(curMap[rowId][colId], curMap[rowId + 2][colId - 2])) && curMap[rowId + 1][colId - 1] === '0') {
          // this.canMove[rowId + 2][colId - 2] = '-1'
          nxtList.push({
            rowId: rowId,
            colId: colId,
            newRowId: rowId + 2,
            newColId: colId - 2
          })
        }
        if (rowId + 2 < this.canMove.length && colId + 2 < curMap[0].length && (curMap[rowId + 2][colId + 2] === '0' || this.isEnemy(curMap[rowId][colId], curMap[rowId + 2][colId + 2])) && curMap[rowId + 1][colId + 1] === '0') {
          // this.canMove[rowId + 2][colId + 2] = '-1'
          nxtList.push({
            rowId: rowId,
            colId: colId,
            newRowId: rowId + 2,
            newColId: colId + 2
          })
        }
      }
      if (curMap[rowId][colId] === '4') {
        // 马
        let dx = [-2, -2, -1, -1, 1, 1, 2, 2]
        let dy = [-1, 1, -2, 2, -2, 2, -1, 1]
        let rx = [-1, -1, 0, 0, 0, 0, 1, 1]
        let ry = [0, 0, -1, 1, -1, 1, 0, 0]
        for (let k = 0; k < 8; k++) {
          let tmpr = rowId + dx[k], tmpc = colId + dy[k]

          if (this.judgePos(tmpr, tmpc)
              && (curMap[tmpr][tmpc] === '0' || this.isEnemy(curMap[rowId][colId], curMap[tmpr][tmpc]))
              && curMap[rowId + rx[k]][colId + ry[k]] === '0') {
            // this.canMove[tmpr][tmpc] = '-1'
            nxtList.push({
              rowId: rowId,
              colId: colId,
              newRowId: tmpr,
              newColId: tmpc
            })
          }
        }
      }
      if (curMap[rowId][colId] === '5') {
        // 车
        for (let i = rowId - 1; i >= 0; i--) {
          if (curMap[i][colId] === '0') {
            // this.canMove[i][colId] = '-1'
            nxtList.push({
              rowId: rowId,
              colId: colId,
              newRowId: i,
              newColId: colId
            })
          } else if (this.isEnemy(curMap[rowId][colId], curMap[i][colId])) {
            // this.canMove[i][colId] = '-1'
            nxtList.push({
              rowId: rowId,
              colId: colId,
              newRowId: i,
              newColId: colId
            })
            break
          } else if (this.isAlly(curMap[rowId][colId], curMap[i][colId])) {
            break
          }
        }
        for (let i = rowId + 1; i < this.canMove.length; i++) {
          if (curMap[i][colId] === '0') {
            // this.canMove[i][colId] = '-1'
            nxtList.push({
              rowId: rowId,
              colId: colId,
              newRowId: i,
              newColId: colId
            })
          } else if (this.isEnemy(curMap[rowId][colId], curMap[i][colId])) {
            // this.canMove[i][colId] = '-1'
            nxtList.push({
              rowId: rowId,
              colId: colId,
              newRowId: i,
              newColId: colId
            })
            break
          } else if (this.isAlly(curMap[rowId][colId], curMap[i][colId])) {
            break
          }
        }
        for (let j = colId - 1; j >= 0; j--) {
          if (curMap[rowId][j] === '0') {
            // this.canMove[rowId][j] = '-1'
            nxtList.push({
              rowId: rowId,
              colId: colId,
              newRowId: rowId,
              newColId: j
            })
          } else if (this.isEnemy(curMap[rowId][colId], curMap[rowId][j])) {
            // this.canMove[rowId][j] = '-1'
            nxtList.push({
              rowId: rowId,
              colId: colId,
              newRowId: rowId,
              newColId: j
            })
            break
          } else if (this.isAlly(curMap[rowId][colId], curMap[rowId][j])) {
            break
          }
        }
        for (let j = colId + 1; j < curMap[rowId].length; j++) {
          if (curMap[rowId][j] === '0') {
            // this.canMove[rowId][j] = '-1'
            nxtList.push({
              rowId: rowId,
              colId: colId,
              newRowId: rowId,
              newColId: j
            })
          } else if (this.isEnemy(curMap[rowId][colId], curMap[rowId][j])) {
            // this.canMove[rowId][j] = '-1'
            nxtList.push({
              rowId: rowId,
              colId: colId,
              newRowId: rowId,
              newColId: j
            })
            break
          } else if (this.isAlly(curMap[rowId][colId], curMap[rowId][j])) {
            break
          }
        }
      }
      if (curMap[rowId][colId] === '6') {
        // 炮
        let flag = false
        for (let i = rowId - 1; i >= 0; i--) {
          if (flag === false && curMap[i][colId] === '0') {
            // this.canMove[i][colId] = '-1'
            nxtList.push({
              rowId: rowId,
              colId: colId,
              newRowId: i,
              newColId: colId
            })
          } else if (curMap[i][colId] !== '0' && flag === false) {
            flag = true
          } else if (flag === true && this.isEnemy(curMap[rowId][colId], curMap[i][colId])) {
            // this.canMove[i][colId] = '-1'
            nxtList.push({
              rowId: rowId,
              colId: colId,
              newRowId: i,
              newColId: colId
            })
            break
          }
        }
        flag = false
        for (let i = rowId + 1; i < this.canMove.length; i++) {
          if (flag === false && curMap[i][colId] === '0') {
            // this.canMove[i][colId] = '-1'
            nxtList.push({
              rowId: rowId,
              colId: colId,
              newRowId: i,
              newColId: colId
            })
          } else if (curMap[i][colId] !== '0' && flag === false) {
            flag = true
          }  else if (flag === true && this.isEnemy(curMap[rowId][colId], curMap[i][colId])) {
            // this.canMove[i][colId] = '-1'
            nxtList.push({
              rowId: rowId,
              colId: colId,
              newRowId: i,
              newColId: colId
            })
            break
          }
        }
        flag = false
        for (let j = colId - 1; j >= 0; j--) {
          if (flag === false && curMap[rowId][j] === '0') {
            // this.canMove[rowId][j] = '-1'
            nxtList.push({
              rowId: rowId,
              colId: colId,
              newRowId: rowId,
              newColId: j
            })
          } else if (curMap[rowId][j] !== '0' && flag === false) {
            flag = true
          }  else if (flag === true && this.isEnemy(curMap[rowId][colId], curMap[rowId][j])) {
            // this.canMove[rowId][j] = '-1'
            nxtList.push({
              rowId: rowId,
              colId: colId,
              newRowId: rowId,
              newColId: j
            })
            break
          }
        }
        flag = false
        for (let j = colId + 1; j < curMap[rowId].length; j++) {
          if (flag === false && curMap[rowId][j] === '0') {
            // this.canMove[rowId][j] = '-1'
            nxtList.push({
              rowId: rowId,
              colId: colId,
              newRowId: rowId,
              newColId: j
            })
          } else if (curMap[rowId][j] !== '0' && flag === false) {
            flag = true
          }  else if (flag === true && this.isEnemy(curMap[rowId][colId], curMap[rowId][j])) {
            // this.canMove[rowId][j] = '-1'
            nxtList.push({
              rowId: rowId,
              colId: colId,
              newRowId: rowId,
              newColId: j
            })
            break
          }
        }
      }
      if (curMap[rowId][colId] === '7') {
        // 兵
        if (rowId >= 5) {
          // 只能前进
          if (curMap[rowId - 1][colId] === '0' || this.isEnemy(curMap[rowId][colId], curMap[rowId - 1][colId])) {
            // this.canMove[rowId - 1][colId] = '-1'
            nxtList.push({
              rowId: rowId,
              colId: colId,
              newRowId: rowId - 1,
              newColId: colId
            })
          }
        } else if (rowId >= 0) {
          // 前进或左右
          if (rowId - 1 >= 0 && (curMap[rowId - 1][colId] === '0' || this.isEnemy(curMap[rowId][colId], curMap[rowId - 1][colId]))) {
            // this.canMove[rowId - 1][colId] = '-1'
            nxtList.push({
              rowId: rowId,
              colId: colId,
              newRowId: rowId - 1,
              newColId: colId
            })
          }
          if (curMap[rowId][colId - 1] === '0' || this.isEnemy(curMap[rowId][colId], curMap[rowId][colId - 1])) {
            // this.canMove[rowId][colId - 1] = '-1'
            nxtList.push({
              rowId: rowId,
              colId: colId,
              newRowId: rowId,
              newColId: colId - 1
            })
          }
          if (curMap[rowId][colId + 1] === '0' || this.isEnemy(curMap[rowId][colId], curMap[rowId][colId + 1])) {
            // this.canMove[rowId][colId + 1] = '-1'
            nxtList.push({
              rowId: rowId,
              colId: colId,
              newRowId: rowId,
              newColId: colId + 1
            })
          }
        }
      }
      // console.log('nxtList', nxtList)
      for (let i = 0; i < nxtList.length; i++) {
        let cur = nxtList[i]
        let tmp = curMap[cur.newRowId][cur.newColId]
        curMap[cur.newRowId][cur.newColId] = curMap[cur.rowId][cur.colId]
        curMap[cur.rowId][cur.colId] = '0'
        // console.log(this.judgeCounter(curMap, false))
        if (this.judgeCounter(curMap, false) === false) {
          this.canMove[cur.newRowId][cur.newColId] = '-1'
        }
        curMap[cur.rowId][cur.colId] = curMap[cur.newRowId][cur.newColId]
        curMap[cur.newRowId][cur.newColId] = tmp
      }
      // if (this.chessMap[rowId][colId] === '1') {
      //   // 帅
      //   if (rowId - 1 >= this.canMove.length - 3 && (this.chessMap[rowId - 1][colId] === '0' || this.isEnemy(this.chessMap[rowId][colId], this.chessMap[rowId - 1][colId]))) {
      //     this.canMove[rowId - 1][colId] = '-1'
      //   }
      //   if (rowId + 1 < this.canMove.length && (this.chessMap[rowId + 1][colId] === '0' || this.isEnemy(this.chessMap[rowId][colId], this.chessMap[rowId + 1][colId]))) {
      //     this.canMove[rowId + 1][colId] = '-1'
      //   }
      //   if (colId - 1 >= 3 && (this.chessMap[rowId][colId - 1] === '0' || this.isEnemy(this.chessMap[rowId][colId], this.chessMap[rowId][colId - 1]))) {
      //     this.canMove[rowId][colId - 1] = '-1'
      //   }
      //   if (colId + 1 <= 5 && (this.chessMap[rowId][colId + 1] === '0' || this.isEnemy(this.chessMap[rowId][colId], this.chessMap[rowId][colId + 1]))) {
      //     this.canMove[rowId][colId + 1] = '-1'
      //   }
      // }
      // if (this.chessMap[rowId][colId] === '2') {
      //   // 士
      //   if (rowId - 1 >= this.canMove.length - 3 && colId - 1 >= 3 && (this.chessMap[rowId - 1][colId - 1] === '0' || this.isEnemy(this.chessMap[rowId][colId], this.chessMap[rowId - 1][colId - 1]))) {
      //     this.canMove[rowId - 1][colId - 1] = '-1'
      //   }
      //   if (rowId - 1 >= this.canMove.length - 3 && colId + 1 <= 5 && (this.chessMap[rowId - 1][colId + 1] === '0' || this.isEnemy(this.chessMap[rowId][colId], this.chessMap[rowId - 1][colId + 1]))) {
      //     this.canMove[rowId - 1][colId + 1] = '-1'
      //   }
      //   if (rowId + 1 < this.canMove.length && colId - 1 >= 3 && (this.chessMap[rowId + 1][colId - 1] === '0' || this.isEnemy(this.chessMap[rowId][colId], this.chessMap[rowId + 1][colId - 1]))) {
      //     this.canMove[rowId + 1][colId - 1] = '-1'
      //   }
      //   if (rowId + 1 < this.canMove.length && colId + 1 <= 5 && (this.chessMap[rowId + 1][colId + 1] === '0' || this.isEnemy(this.chessMap[rowId][colId], this.chessMap[rowId + 1][colId + 1]))) {
      //     this.canMove[rowId + 1][colId + 1] = '-1'
      //   }
      // }
      // if (this.chessMap[rowId][colId] === '3') {
      //   // 相
      //   if (rowId - 2 >= 5 && colId - 2 >= 0 && (this.chessMap[rowId - 2][colId - 2] === '0' || this.isEnemy(this.chessMap[rowId][colId], this.chessMap[rowId - 2][colId - 2])) && this.chessMap[rowId - 1][colId - 1] === '0') {
      //     this.canMove[rowId - 2][colId - 2] = '-1'
      //   }
      //   if (rowId - 2 >= 5 && colId + 2 < this.chessMap[0].length && (this.chessMap[rowId - 2][colId + 2] === '0' || this.isEnemy(this.chessMap[rowId][colId], this.chessMap[rowId - 2][colId + 2])) && this.chessMap[rowId - 1][colId + 1] === '0') {
      //     this.canMove[rowId - 2][colId + 2] = '-1'
      //   }
      //   if (rowId + 2 < this.canMove.length && colId - 2 >= 0 && (this.chessMap[rowId + 2][colId - 2] === '0' || this.isEnemy(this.chessMap[rowId][colId], this.chessMap[rowId + 2][colId - 2])) && this.chessMap[rowId + 1][colId - 1] === '0') {
      //     this.canMove[rowId + 2][colId - 2] = '-1'
      //   }
      //   if (rowId + 2 < this.canMove.length && colId + 2 < this.chessMap[0].length && (this.chessMap[rowId + 2][colId + 2] === '0' || this.isEnemy(this.chessMap[rowId][colId], this.chessMap[rowId + 2][colId + 2])) && this.chessMap[rowId + 1][colId + 1] === '0') {
      //     this.canMove[rowId + 2][colId + 2] = '-1'
      //   }
      // }
      // if (this.chessMap[rowId][colId] === '4') {
      //   // 马
      //   let dx = [-2, -2, -1, -1, 1, 1, 2, 2]
      //   let dy = [-1, 1, -2, 2, -2, 2, -1, 1]
      //   let rx = [-1, -1, 0, 0, 0, 0, 1, 1]
      //   let ry = [0, 0, -1, 1, -1, 1, 0, 0]
      //   for (let k = 0; k < 8; k++) {
      //     let tmpr = rowId + dx[k], tmpc = colId + dy[k]
      //
      //     if (this.judgePos(tmpr, tmpc)
      //         && (this.chessMap[tmpr][tmpc] === '0' || this.isEnemy(this.chessMap[rowId][colId], this.chessMap[tmpr][tmpc]))
      //         && this.chessMap[rowId + rx[k]][colId + ry[k]] === '0') {
      //       this.canMove[tmpr][tmpc] = '-1'
      //     }
      //   }
      // }
      // if (this.chessMap[rowId][colId] === '5') {
      //   // 车
      //   for (let i = rowId - 1; i >= 0; i--) {
      //     if (this.chessMap[i][colId] === '0') {
      //       this.canMove[i][colId] = '-1'
      //     } else if (this.isEnemy(this.chessMap[rowId][colId], this.chessMap[i][colId])) {
      //       this.canMove[i][colId] = '-1'
      //       break
      //     } else if (this.isAlly(this.chessMap[rowId][colId], this.chessMap[i][colId])) {
      //       break
      //     }
      //   }
      //   for (let i = rowId + 1; i < this.canMove.length; i++) {
      //     if (this.chessMap[i][colId] === '0') {
      //       this.canMove[i][colId] = '-1'
      //     } else if (this.isEnemy(this.chessMap[rowId][colId], this.chessMap[i][colId])) {
      //       this.canMove[i][colId] = '-1'
      //       break
      //     } else if (this.isAlly(this.chessMap[rowId][colId], this.chessMap[i][colId])) {
      //       break
      //     }
      //   }
      //   for (let j = colId - 1; j >= 0; j--) {
      //     if (this.chessMap[rowId][j] === '0') {
      //       this.canMove[rowId][j] = '-1'
      //     } else if (this.isEnemy(this.chessMap[rowId][colId], this.chessMap[rowId][j])) {
      //       this.canMove[rowId][j] = '-1'
      //       break
      //     } else if (this.isAlly(this.chessMap[rowId][colId], this.chessMap[rowId][j])) {
      //       break
      //     }
      //   }
      //   for (let j = colId + 1; j < this.chessMap[rowId].length; j++) {
      //     if (this.chessMap[rowId][j] === '0') {
      //       this.canMove[rowId][j] = '-1'
      //     } else if (this.isEnemy(this.chessMap[rowId][colId], this.chessMap[rowId][j])) {
      //       this.canMove[rowId][j] = '-1'
      //       break
      //     } else if (this.isAlly(this.chessMap[rowId][colId], this.chessMap[rowId][j])) {
      //       break
      //     }
      //   }
      // }
      // if (this.chessMap[rowId][colId] === '6') {
      //   // 炮
      //   let flag = false
      //   for (let i = rowId - 1; i >= 0; i--) {
      //     if (flag === false && this.chessMap[i][colId] === '0') {
      //       this.canMove[i][colId] = '-1'
      //     } else if (this.chessMap[i][colId] !== '0' && flag === false) {
      //       flag = true
      //     } else if (flag === true && this.isEnemy(this.chessMap[rowId][colId], this.chessMap[i][colId])) {
      //       this.canMove[i][colId] = '-1'
      //       break
      //     }
      //   }
      //   flag = false
      //   for (let i = rowId + 1; i < this.canMove.length; i++) {
      //     if (flag === false && this.chessMap[i][colId] === '0') {
      //       this.canMove[i][colId] = '-1'
      //     } else if (this.chessMap[i][colId] !== '0' && flag === false) {
      //       flag = true
      //     }  else if (flag === true && this.isEnemy(this.chessMap[rowId][colId], this.chessMap[i][colId])) {
      //       this.canMove[i][colId] = '-1'
      //       break
      //     }
      //   }
      //   flag = false
      //   for (let j = colId - 1; j >= 0; j--) {
      //     if (flag === false && this.chessMap[rowId][j] === '0') {
      //       this.canMove[rowId][j] = '-1'
      //     } else if (this.chessMap[rowId][j] !== '0' && flag === false) {
      //       flag = true
      //     }  else if (flag === true && this.isEnemy(this.chessMap[rowId][colId], this.chessMap[rowId][j])) {
      //       this.canMove[rowId][j] = '-1'
      //       break
      //     }
      //   }
      //   flag = false
      //   for (let j = colId + 1; j < this.chessMap[rowId].length; j++) {
      //     if (flag === false && this.chessMap[rowId][j] === '0') {
      //       this.canMove[rowId][j] = '-1'
      //     } else if (this.chessMap[rowId][j] !== '0' && flag === false) {
      //       flag = true
      //     }  else if (flag === true && this.isEnemy(this.chessMap[rowId][colId], this.chessMap[rowId][j])) {
      //       this.canMove[rowId][j] = '-1'
      //       break
      //     }
      //   }
      // }
      // if (this.chessMap[rowId][colId] === '7') {
      //   // 兵
      //   if (rowId >= 5) {
      //     // 只能前进
      //     if (this.chessMap[rowId - 1][colId] === '0' || this.isEnemy(this.chessMap[rowId][colId], this.chessMap[rowId - 1][colId])) {
      //       this.canMove[rowId - 1][colId] = '-1'
      //     }
      //   } else if (rowId >= 0) {
      //     // 前进或左右
      //     if (rowId - 1 >= 0 && (this.chessMap[rowId - 1][colId] === '0' || this.isEnemy(this.chessMap[rowId][colId], this.chessMap[rowId - 1][colId]))) {
      //       this.canMove[rowId - 1][colId] = '-1'
      //     }
      //     if (this.chessMap[rowId][colId - 1] === '0' || this.isEnemy(this.chessMap[rowId][colId], this.chessMap[rowId][colId - 1])) {
      //       this.canMove[rowId][colId - 1] = '-1'
      //     }
      //     if (this.chessMap[rowId][colId + 1] === '0' || this.isEnemy(this.chessMap[rowId][colId], this.chessMap[rowId][colId + 1])) {
      //       this.canMove[rowId][colId + 1] = '-1'
      //     }
      //   }
      // }

      // if (this.chessMap[rowId][colId] === '-1') {
      //   // 帅
      //   if (rowId - 1 >= 0 && (this.chessMap[rowId - 1][colId] === '0' || this.isEnemy(this.chessMap[rowId][colId], this.chessMap[rowId - 1][colId]))) {
      //     this.canMove[rowId - 1][colId] = '-1'
      //   }
      //   if (rowId + 1 < 3 && (this.chessMap[rowId + 1][colId] === '0' || this.isEnemy(this.chessMap[rowId][colId], this.chessMap[rowId + 1][colId]))) {
      //     this.canMove[rowId + 1][colId] = '-1'
      //   }
      //   if (colId - 1 >= 3 && (this.chessMap[rowId][colId - 1] === '0' || this.isEnemy(this.chessMap[rowId][colId], this.chessMap[rowId][colId - 1]))) {
      //     this.canMove[rowId][colId - 1] = '-1'
      //   }
      //   if (colId + 1 <= 5 && (this.chessMap[rowId][colId + 1] === '0' || this.isEnemy(this.chessMap[rowId][colId], this.chessMap[rowId][colId + 1]))) {
      //     this.canMove[rowId][colId + 1] = '-1'
      //   }
      // }
      // if (this.chessMap[rowId][colId] === '-2') {
      //   // 士
      //   if (rowId - 1 >= 0 && colId - 1 >= 3 && (this.chessMap[rowId - 1][colId - 1] === '0' || this.isEnemy(this.chessMap[rowId][colId], this.chessMap[rowId - 1][colId - 1]))) {
      //     this.canMove[rowId - 1][colId - 1] = '-1'
      //   }
      //   if (rowId - 1 >= 0 && colId + 1 <= 5 && (this.chessMap[rowId - 1][colId + 1] === '0' || this.isEnemy(this.chessMap[rowId][colId], this.chessMap[rowId - 1][colId + 1]))) {
      //     this.canMove[rowId - 1][colId + 1] = '-1'
      //   }
      //   if (rowId + 1 < 3 && colId - 1 >= 3 && (this.chessMap[rowId + 1][colId - 1] === '0' || this.isEnemy(this.chessMap[rowId][colId], this.chessMap[rowId + 1][colId - 1]))) {
      //     this.canMove[rowId + 1][colId - 1] = '-1'
      //   }
      //   if (rowId + 1 < 3 && colId + 1 <= 5 && (this.chessMap[rowId + 1][colId + 1] === '0' || this.isEnemy(this.chessMap[rowId][colId], this.chessMap[rowId + 1][colId + 1]))) {
      //     this.canMove[rowId + 1][colId + 1] = '-1'
      //   }
      // }
      // if (this.chessMap[rowId][colId] === '-3') {
      //   // 相
      //   if (rowId - 2 >= 0 && colId - 2 >= 0 && (this.chessMap[rowId - 2][colId - 2] === '0' || this.isEnemy(this.chessMap[rowId][colId], this.chessMap[rowId - 2][colId - 2])) && this.chessMap[rowId - 1][colId - 1] === '0') {
      //     this.canMove[rowId - 2][colId - 2] = '-1'
      //   }
      //   if (rowId - 2 >= 0 && colId + 2 < this.chessMap[0].length && (this.chessMap[rowId - 2][colId + 2] === '0' || this.isEnemy(this.chessMap[rowId][colId], this.chessMap[rowId - 2][colId + 2])) && this.chessMap[rowId - 1][colId + 1] === '0') {
      //     this.canMove[rowId - 2][colId + 2] = '-1'
      //   }
      //   if (rowId + 2 <= 4 && colId - 2 >= 0 && (this.chessMap[rowId + 2][colId - 2] === '0' || this.isEnemy(this.chessMap[rowId][colId], this.chessMap[rowId + 2][colId - 2])) && this.chessMap[rowId + 1][colId - 1] === '0') {
      //     this.canMove[rowId + 2][colId - 2] = '-1'
      //   }
      //   if (rowId + 2 <= 4 && colId + 2 < this.chessMap[0].length && (this.chessMap[rowId + 2][colId + 2] === '0' || this.isEnemy(this.chessMap[rowId][colId], this.chessMap[rowId + 2][colId + 2])) && this.chessMap[rowId + 1][colId + 1] === '0') {
      //     this.canMove[rowId + 2][colId + 2] = '-1'
      //   }
      // }
      // if (this.chessMap[rowId][colId] === '-4') {
      //   // 马
      //   let dx = [-2, -2, -1, -1, 1, 1, 2, 2]
      //   let dy = [-1, 1, -2, 2, -2, 2, -1, 1]
      //   let rx = [-1, -1, 0, 0, 0, 0, 1, 1]
      //   let ry = [0, 0, -1, 1, -1, 1, 0, 0]
      //   for (let k = 0; k < 8; k++) {
      //     let tmpr = rowId + dx[k], tmpc = colId + dy[k]
      //
      //     if (this.judgePos(tmpr, tmpc)
      //         && (this.chessMap[tmpr][tmpc] === '0' || this.isEnemy(this.chessMap[rowId][colId], this.chessMap[tmpr][tmpc]))
      //         && this.chessMap[rowId + rx[k]][colId + ry[k]] === '0') {
      //       this.canMove[tmpr][tmpc] = '-1'
      //     }
      //   }
      // }
      // if (this.chessMap[rowId][colId] === '-5') {
      //   // 车
      //   for (let i = rowId - 1; i >= 0; i--) {
      //     if (this.chessMap[i][colId] === '0') {
      //       this.canMove[i][colId] = '-1'
      //     } else if (this.isEnemy(this.chessMap[rowId][colId], this.chessMap[i][colId])) {
      //       this.canMove[i][colId] = '-1'
      //       break
      //     } else if (this.isAlly(this.chessMap[rowId][colId], this.chessMap[i][colId])) {
      //       break
      //     }
      //   }
      //   for (let i = rowId + 1; i < this.canMove.length; i++) {
      //     if (this.chessMap[i][colId] === '0') {
      //       this.canMove[i][colId] = '-1'
      //     } else if (this.isEnemy(this.chessMap[rowId][colId], this.chessMap[i][colId])) {
      //       this.canMove[i][colId] = '-1'
      //       break
      //     } else if (this.isAlly(this.chessMap[rowId][colId], this.chessMap[i][colId])) {
      //       break
      //     }
      //   }
      //   for (let j = colId - 1; j >= 0; j--) {
      //     if (this.chessMap[rowId][j] === '0') {
      //       this.canMove[rowId][j] = '-1'
      //     } else if (this.isEnemy(this.chessMap[rowId][colId], this.chessMap[rowId][j])) {
      //       this.canMove[rowId][j] = '-1'
      //       break
      //     } else if (this.isAlly(this.chessMap[rowId][colId], this.chessMap[rowId][j])) {
      //       break
      //     }
      //   }
      //   for (let j = colId + 1; j < this.chessMap[rowId].length; j++) {
      //     if (this.chessMap[rowId][j] === '0') {
      //       this.canMove[rowId][j] = '-1'
      //     } else if (this.isEnemy(this.chessMap[rowId][colId], this.chessMap[rowId][j])) {
      //       this.canMove[rowId][j] = '-1'
      //       break
      //     } else if (this.isAlly(this.chessMap[rowId][colId], this.chessMap[rowId][j])) {
      //       break
      //     }
      //   }
      // }
      // if (this.chessMap[rowId][colId] === '-6') {
      //   // 炮
      //   let flag = false
      //   for (let i = rowId - 1; i >= 0; i--) {
      //     if (flag === false && this.chessMap[i][colId] === '0') {
      //       this.canMove[i][colId] = '-1'
      //     } else if (this.chessMap[i][colId] !== '0' && flag === false) {
      //       flag = true
      //     } else if (flag === true && this.isEnemy(this.chessMap[rowId][colId], this.chessMap[i][colId])) {
      //       this.canMove[i][colId] = '-1'
      //       break
      //     }
      //   }
      //   flag = false
      //   for (let i = rowId + 1; i < this.canMove.length; i++) {
      //     if (flag === false && this.chessMap[i][colId] === '0') {
      //       this.canMove[i][colId] = '-1'
      //     } else if (this.chessMap[i][colId] !== '0' && flag === false) {
      //       flag = true
      //     }  else if (flag === true && this.isEnemy(this.chessMap[rowId][colId], this.chessMap[i][colId])) {
      //       this.canMove[i][colId] = '-1'
      //       break
      //     }
      //   }
      //   flag = false
      //   for (let j = colId - 1; j >= 0; j--) {
      //     if (flag === false && this.chessMap[rowId][j] === '0') {
      //       this.canMove[rowId][j] = '-1'
      //     } else if (this.chessMap[rowId][j] !== '0' && flag === false) {
      //       flag = true
      //     }  else if (flag === true && this.isEnemy(this.chessMap[rowId][colId], this.chessMap[rowId][j])) {
      //       this.canMove[rowId][j] = '-1'
      //       break
      //     }
      //   }
      //   flag = false
      //   for (let j = colId + 1; j < this.chessMap[rowId].length; j++) {
      //     if (flag === false && this.chessMap[rowId][j] === '0') {
      //       this.canMove[rowId][j] = '-1'
      //     } else if (this.chessMap[rowId][j] !== '0' && flag === false) {
      //       flag = true
      //     }  else if (flag === true && this.isEnemy(this.chessMap[rowId][colId], this.chessMap[rowId][j])) {
      //       this.canMove[rowId][j] = '-1'
      //       break
      //     }
      //   }
      // }
      // if (this.chessMap[rowId][colId] === '-7') {
      //   // 兵
      //   if (rowId <= 4) {
      //     // 只能前进
      //     if (this.chessMap[rowId + 1][colId] === '0' || this.isEnemy(this.chessMap[rowId][colId], this.chessMap[rowId + 1][colId])) {
      //       this.canMove[rowId + 1][colId] = '-1'
      //     }
      //   } else if (rowId < this.chessMap.length) {
      //     // 前进或左右
      //     if (rowId + 1 < this.chessMap.length && (this.chessMap[rowId + 1][colId] === '0' || this.isEnemy(this.chessMap[rowId][colId], this.chessMap[rowId + 1][colId]))) {
      //       this.canMove[rowId + 1][colId] = '-1'
      //     }
      //     if (this.chessMap[rowId][colId - 1] === '0' || this.isEnemy(this.chessMap[rowId][colId], this.chessMap[rowId][colId - 1])) {
      //       this.canMove[rowId][colId - 1] = '-1'
      //     }
      //     if (this.chessMap[rowId][colId + 1] === '0' || this.isEnemy(this.chessMap[rowId][colId], this.chessMap[rowId][colId + 1])) {
      //       this.canMove[rowId][colId + 1] = '-1'
      //     }
      //   }
      // }
    },
    aiTurn () {
      let tmpMap = [
        ['0', '0', '0', '0', '0', '0', '0', '0', '0'],
        ['0', '0', '0', '0', '0', '0', '0', '0', '0'],
        ['0', '0', '0', '0', '0', '0', '0', '0', '0'],
        ['0', '0', '0', '0', '0', '0', '0', '0', '0'],
        ['0', '0', '0', '0', '0', '0', '0', '0', '0'],
        ['0', '0', '0', '0', '0', '0', '0', '0', '0'],
        ['0', '0', '0', '0', '0', '0', '0', '0', '0'],
        ['0', '0', '0', '0', '0', '0', '0', '0', '0'],
        ['0', '0', '0', '0', '0', '0', '0', '0', '0'],
        ['0', '0', '0', '0', '0', '0', '0', '0', '0']
      ]
      for (let i = 0; i < this.chessMap.length; i++) {
        for (let j = 0; j < this.chessMap[0].length; j++) {
          tmpMap[i][j] = this.chessMap[i][j]
          // console.log(this.chessMap[i][j], tmpMap[i][j])
        }
      }
      let isPreCheckmated = this.judgeCheckMate(tmpMap, false)
      this.aiRowId = -1
      this.aiColId = -1
      this.aiNewRowId = -1
      this.aiNewColId = -1
      this.alphaBeta(tmpMap, 0, true, isPreCheckmated, -1000000, 1000000)
      // console.log('tmpMap', tmpMap.join(','))
      // console.log('res')
      // console.log('chessMap', this.chessMap)
      // console.log(this.aiRowId, this.aiColId)
      // console.log(this.aiNewRowId, this.aiNewColId)
      // console.log(this.chessInfo[this.chessMap[this.aiRowId][this.aiColId]])
      // console.log(this.chessMap[this.aiRowId][this.aiColId], this.chessMap[this.aiNewRowId][this.aiNewColId])
      // console.log(this.isEnemy(this.chessMap[this.aiRowId][this.aiColId], this.chessMap[this.aiNewRowId][this.aiNewColId]))
      if (this.aiNewRowId === -1 || this.aiNewColId === -1) {
        // ai找不到位置走棋，玩家获胜
        this.win = 1
        alert('player win!')
        return
      }
      // console.log(this.aiRowId, this.aiColId)
      // console.log(this.aiNewRowId, this.aiNewColId)
      console.log('ai before', this.aiRowId, this.aiColId, this.chessMap[this.aiRowId][this.aiColId])
      console.log('ai move to', this.aiNewRowId, this.aiNewColId, this.chessMap[this.aiNewRowId][this.aiNewColId])
      let preChess = this.chessMap[this.aiNewRowId][this.aiNewColId]
      this.chessMap[this.aiNewRowId][this.aiNewColId] = this.chessMap[this.aiRowId][this.aiColId]
      this.chessMap[this.aiRowId][this.aiColId] = '0'
      this.lastRowId = this.aiNewRowId
      this.lastColId = this.aiNewColId
      this.$forceUpdate()
      if (preChess === '1') {
        this.win = -1
        alert('ai win!')
        return
      }
      // console.log(this.chessMap)
      // console.log('ai checkmate', this.judgeCheckMate(this.chessMap, true))
      if (this.judgeCheckMate(this.chessMap, true)) {
        this.showCheckMate = true
        setTimeout(() => {
          this.showCheckMate = false
          this.canOpt = true
        }, 500)
      } else {
        this.canOpt = true
      }
    },
    judgeCounter (curMap, isAI) {
      // 判断对将
      if (isAI) {
        for (let i = 0; i < curMap.length; i++) {
          for (let j = 0; j < curMap[0].length; j++) {
            let rowId = i, colId = j
            if (curMap[rowId][colId] === '-1') {
              // 帅
              for (let t = rowId + 1; t < curMap.length; t++) {
                if (curMap[t][colId] !== '0') {
                  if (curMap[t][colId] === '1') {
                    return true
                  } else {
                    return false
                  }
                }
              }
            }
          }
        }
        return false
      } else {
        for (let i = 0; i < curMap.length; i++) {
          for (let j = 0; j < curMap[0].length; j++) {
            let rowId = i, colId = j
            if (curMap[rowId][colId] === '1') {
              // 帅
              for (let t = rowId - 1; t >= 0; t--) {
                if (curMap[t][colId] === '-1') {
                  return true
                } else {
                  return false
                }
              }
            }
          }
        }
        return false
      }
    },
    judgeCheckMate (curMap, isAI) {
      // console.log('judgeCheckMate', curMap)
      if (isAI) {
        // 判断AI是否将军
        for (let i = 0; i < curMap.length; i++) {
          for (let j = 0; j < curMap[0].length; j++) {
            let rowId = i, colId = j
            if (curMap[rowId][colId] === '-2') {
              // 士
              if (rowId - 1 >= 0 && colId - 1 >= 3 && (curMap[rowId - 1][colId - 1] === '0' || this.isEnemy(curMap[rowId][colId], curMap[rowId - 1][colId - 1]))) {
                if (curMap[rowId - 1][colId - 1] === '1') {
                  return true
                }
              }
              if (rowId - 1 >= 0 && colId + 1 <= 5 && (curMap[rowId - 1][colId + 1] === '0' || this.isEnemy(curMap[rowId][colId], curMap[rowId - 1][colId + 1]))) {
                if (curMap[rowId - 1][colId + 1] === '1') {
                  return true
                }
              }
              if (rowId + 1 < 3 && colId - 1 >= 3 && (curMap[rowId + 1][colId - 1] === '0' || this.isEnemy(curMap[rowId][colId], curMap[rowId + 1][colId - 1]))) {
                if (curMap[rowId + 1][colId - 1] === '1') {
                  return true
                }
              }
              if (rowId + 1 < 3 && colId + 1 <= 5 && (curMap[rowId + 1][colId + 1] === '0' || this.isEnemy(curMap[rowId][colId], curMap[rowId + 1][colId + 1]))) {
                if (curMap[rowId + 1][colId + 1] === '1') {
                  return true
                }
              }
            }
            if (curMap[rowId][colId] === '-4') {
              // 马
              let dx = [-2, -2, -1, -1, 1, 1, 2, 2]
              let dy = [-1, 1, -2, 2, -2, 2, -1, 1]
              let rx = [-1, -1, 0, 0, 0, 0, 1, 1]
              let ry = [0, 0, -1, 1, -1, 1, 0, 0]
              for (let k = 0; k < 8; k++) {
                let tmpr = rowId + dx[k], tmpc = colId + dy[k]

                if (this.judgePos(tmpr, tmpc)
                    && (curMap[tmpr][tmpc] === '0' || this.isEnemy(curMap[rowId][colId], curMap[tmpr][tmpc]))
                    && curMap[rowId + rx[k]][colId + ry[k]] === '0') {
                  if (curMap[tmpr][tmpc] === '1') {
                    return true
                  }
                }
              }
            }
            if (curMap[rowId][colId] === '-5') {
              // 车
              for (let i = rowId - 1; i >= 0; i--) {
                if (curMap[i][colId] === '0') {
                  if (curMap[i][colId] === '1') {
                    return true
                  }
                } else if (this.isEnemy(curMap[rowId][colId], curMap[i][colId])) {
                  if (curMap[i][colId] === '1') {
                    return true
                  }
                  break
                } else if (this.isAlly(curMap[rowId][colId], curMap[i][colId])) {
                  break
                }
              }
              for (let i = rowId + 1; i < curMap.length; i++) {
                if (curMap[i][colId] === '0') {
                  if (curMap[i][colId] === '1') {
                    return true
                  }
                } else if (this.isEnemy(curMap[rowId][colId], curMap[i][colId])) {
                  if (curMap[i][colId] === '1') {
                    return true
                  }
                  break
                } else if (this.isAlly(curMap[rowId][colId], curMap[i][colId])) {
                  break
                }
              }
              for (let j = colId - 1; j >= 0; j--) {
                if (curMap[rowId][j] === '0') {
                  if (curMap[rowId][j] === '1') {
                    return true
                  }
                } else if (this.isEnemy(curMap[rowId][colId], curMap[rowId][j])) {
                  if (curMap[rowId][j] === '1') {
                    return true
                  }
                  break
                } else if (this.isAlly(curMap[rowId][colId], curMap[rowId][j])) {
                  break
                }
              }
              for (let j = colId + 1; j < curMap[rowId].length; j++) {
                if (curMap[rowId][j] === '0') {
                  if (curMap[rowId][j] === '1') {
                    return true
                  }
                } else if (this.isEnemy(curMap[rowId][colId], curMap[rowId][j])) {
                  if (curMap[rowId][j] === '1') {
                    return true
                  }
                  break
                } else if (this.isAlly(curMap[rowId][colId], curMap[rowId][j])) {
                  break
                }
              }
            }
            if (curMap[rowId][colId] === '-6') {
              // 炮
              let flag = false
              for (let i = rowId - 1; i >= 0; i--) {
                if (flag === false && curMap[i][colId] === '0') {
                  if (curMap[i][colId] === '1') {
                    return true
                  }
                } else if (curMap[i][colId] !== '0' && flag === false) {
                  flag = true
                } else if (flag === true && this.isEnemy(curMap[rowId][colId], curMap[i][colId])) {
                  if (curMap[i][colId] === '1') {
                    return true
                  }
                  break
                }
              }
              flag = false
              for (let i = rowId + 1; i < curMap.length; i++) {
                if (flag === false && curMap[i][colId] === '0') {
                  if (curMap[i][colId] === '1') {
                    return true
                  }
                } else if (flag === false && curMap[i][colId] !== '0') {
                  flag = true
                } else if (flag === true && this.isEnemy(curMap[rowId][colId], curMap[i][colId])) {
                  if (curMap[i][colId] === '1') {
                    return true
                  }
                  break
                }
              }
              flag = false
              for (let j = colId - 1; j >= 0; j--) {
                if (flag === false && curMap[rowId][j] === '0') {
                  if (curMap[rowId][j] === '1') {
                    return true
                  }
                } else if (curMap[rowId][j] !== '0' && flag === false) {
                  flag = true
                }  else if (flag === true && this.isEnemy(curMap[rowId][colId], curMap[rowId][j])) {
                  if (curMap[rowId][j] === '1') {
                    return true
                  }
                  break
                }
              }
              flag = false
              for (let j = colId + 1; j < curMap[rowId].length; j++) {
                if (flag === false && curMap[rowId][j] === '0') {
                  if (curMap[rowId][j] === '1') {
                    return true
                  }
                } else if (curMap[rowId][j] !== '0' && flag === false) {
                  flag = true
                }  else if (flag === true && this.isEnemy(curMap[rowId][colId], curMap[rowId][j])) {
                  if (curMap[rowId][j] === '1') {
                    return true
                  }
                  break
                }
              }
            }
            if (curMap[rowId][colId] === '-7') {
              // 兵
              if (rowId <= 4) {
                // 只能前进
                if (curMap[rowId + 1][colId] === '0' || this.isEnemy(curMap[rowId][colId], curMap[rowId + 1][colId])) {
                  if (curMap[rowId + 1][colId] === '1') {
                    return true
                  }
                }
              } else if (rowId < curMap.length) {
                // 前进或左右
                if (rowId + 1 < curMap.length && (curMap[rowId + 1][colId] === '0' || this.isEnemy(curMap[rowId][colId], curMap[rowId + 1][colId]))) {
                  if (curMap[rowId + 1][colId] === '1') {
                    return true
                  }
                }
                if (curMap[rowId][colId - 1] === '0' || this.isEnemy(curMap[rowId][colId], curMap[rowId][colId - 1])) {
                  if (curMap[rowId][colId - 1] === '1') {
                    return true
                  }
                }
                if (curMap[rowId][colId + 1] === '0' || this.isEnemy(curMap[rowId][colId], curMap[rowId][colId + 1])) {
                  if (curMap[rowId][colId + 1] === '1') {
                    return true
                  }
                }
              }
            }
          }
        }
        return false
      } else {
        // 判断玩家是否将军
        for (let i = 0; i < curMap.length; i++) {
          for (let j = 0; j < curMap[0].length; j++) {
            let rowId = i, colId = j
            if (curMap[rowId][colId] === '2') {
              // 士
              if (rowId - 1 >= curMap.length - 3 && colId - 1 >= 3 && (curMap[rowId - 1][colId - 1] === '0' || this.isEnemy(curMap[rowId][colId], curMap[rowId - 1][colId - 1]))) {
                if (curMap[rowId - 1][colId - 1] === '-1') {
                  return true
                }
              }
              if (rowId - 1 >= curMap.length - 3 && colId + 1 <= 5 && (curMap[rowId - 1][colId + 1] === '0' || this.isEnemy(curMap[rowId][colId], curMap[rowId - 1][colId + 1]))) {
                if (curMap[rowId - 1][colId + 1] === '-1') {
                  return true
                }
              }
              if (rowId + 1 < curMap.length && colId - 1 >= 3 && (curMap[rowId + 1][colId - 1] === '0' || this.isEnemy(curMap[rowId][colId], curMap[rowId + 1][colId - 1]))) {
                if (curMap[rowId + 1][colId - 1] === '-1') {
                  return true
                }
              }
              if (rowId + 1 < curMap.length && colId + 1 <= 5 && (curMap[rowId + 1][colId + 1] === '0' || this.isEnemy(curMap[rowId][colId], curMap[rowId + 1][colId + 1]))) {
                if (curMap[rowId + 1][colId + 1] === '-1') {
                  return true
                }
              }
            }
            if (curMap[rowId][colId] === '4') {
              // 马
              let dx = [-2, -2, -1, -1, 1, 1, 2, 2]
              let dy = [-1, 1, -2, 2, -2, 2, -1, 1]
              let rx = [-1, -1, 0, 0, 0, 0, 1, 1]
              let ry = [0, 0, -1, 1, -1, 1, 0, 0]
              for (let k = 0; k < 8; k++) {
                let tmpr = rowId + dx[k], tmpc = colId + dy[k]

                if (this.judgePos(tmpr, tmpc)
                    && (curMap[tmpr][tmpc] === '0' || this.isEnemy(curMap[rowId][colId], curMap[tmpr][tmpc]))
                    && curMap[rowId + rx[k]][colId + ry[k]] === '0') {
                  if (curMap[tmpr][tmpc] === '-1') {
                    return true
                  }
                }
              }
            }
            if (curMap[rowId][colId] === '5') {
              // 车
              for (let i = rowId - 1; i >= 0; i--) {
                if (curMap[i][colId] === '0') {
                  if (curMap[i][colId] === '-1') {
                    return true
                  }
                } else if (this.isEnemy(curMap[rowId][colId], curMap[i][colId])) {
                  if (curMap[i][colId] === '-1') {
                    return true
                  }
                  break
                } else if (this.isAlly(curMap[rowId][colId], curMap[i][colId])) {
                  break
                }
              }
              for (let i = rowId + 1; i < curMap.length; i++) {
                if (curMap[i][colId] === '0') {
                  if (curMap[i][colId] === '-1') {
                    return true
                  }
                } else if (this.isEnemy(curMap[rowId][colId], curMap[i][colId])) {
                  if (curMap[i][colId] === '-1') {
                    return true
                  }
                  break
                } else if (this.isAlly(curMap[rowId][colId], curMap[i][colId])) {
                  break
                }
              }
              for (let j = colId - 1; j >= 0; j--) {
                if (curMap[rowId][j] === '0') {
                  if (curMap[rowId][j] === '-1') {
                    return true
                  }
                } else if (this.isEnemy(curMap[rowId][colId], curMap[rowId][j])) {
                  if (curMap[rowId][j] === '-1') {
                    return true
                  }
                  break
                } else if (this.isAlly(curMap[rowId][colId], curMap[rowId][j])) {
                  break
                }
              }
              for (let j = colId + 1; j < curMap[rowId].length; j++) {
                if (curMap[rowId][j] === '0') {
                  if (curMap[rowId][j] === '-1') {
                    return true
                  }
                } else if (this.isEnemy(curMap[rowId][colId], curMap[rowId][j])) {
                  if (curMap[rowId][j] === '-1') {
                    return true
                  }
                  break
                } else if (this.isAlly(curMap[rowId][colId], curMap[rowId][j])) {
                  break
                }
              }
            }
            if (curMap[rowId][colId] === '6') {
              // 炮
              let flag = false
              for (let i = rowId - 1; i >= 0; i--) {
                if (flag === false && curMap[i][colId] === '0') {
                  if (curMap[i][colId] === '-1') {
                    return true
                  }
                } else if (curMap[i][colId] !== '0' && flag === false) {
                  flag = true
                } else if (flag === true && this.isEnemy(curMap[rowId][colId], curMap[i][colId])) {
                  if (curMap[i][colId] === '-1') {
                    return true
                  }
                  break
                }
              }
              flag = false
              for (let i = rowId + 1; i < curMap.length; i++) {
                if (flag === false && curMap[i][colId] === '0') {
                  if (curMap[i][colId] === '-1') {
                    return true
                  }
                } else if (curMap[i][colId] !== '0' && flag === false) {
                  flag = true
                }  else if (flag === true && this.isEnemy(curMap[rowId][colId], curMap[i][colId])) {
                  if (curMap[i][colId] === '-1') {
                    return true
                  }
                  break
                }
              }
              flag = false
              for (let j = colId - 1; j >= 0; j--) {
                if (flag === false && curMap[rowId][j] === '0') {
                  if (curMap[rowId][j] === '-1') {
                    return true
                  }
                } else if (curMap[rowId][j] !== '0' && flag === false) {
                  flag = true
                }  else if (flag === true && this.isEnemy(curMap[rowId][colId], curMap[rowId][j])) {
                  if (curMap[rowId][j] === '-1') {
                    return true
                  }
                  break
                }
              }
              flag = false
              for (let j = colId + 1; j < curMap[rowId].length; j++) {
                if (flag === false && curMap[rowId][j] === '0') {
                  if (curMap[rowId][j] === '-1') {
                    return true
                  }
                } else if (curMap[rowId][j] !== '0' && flag === false) {
                  flag = true
                }  else if (flag === true && this.isEnemy(curMap[rowId][colId], curMap[rowId][j])) {
                  if (curMap[rowId][j] === '-1') {
                    return true
                  }
                  break
                }
              }
            }
            if (curMap[rowId][colId] === '7') {
              // 兵
              if (rowId >= 5) {
                // 只能前进
                if (curMap[rowId - 1][colId] === '0' || this.isEnemy(curMap[rowId][colId], curMap[rowId - 1][colId])) {
                  if (curMap[rowId - 1][colId] === '-1') {
                    return true
                  }
                }
              } else if (rowId >= 0) {
                // 前进或左右
                if (rowId - 1 >= 0 && (curMap[rowId - 1][colId] === '0' || this.isEnemy(curMap[rowId][colId], curMap[rowId - 1][colId]))) {
                  if (curMap[rowId - 1][colId] === '-1') {
                    return true
                  }
                }
                if (curMap[rowId][colId - 1] === '0' || this.isEnemy(curMap[rowId][colId], curMap[rowId][colId - 1])) {
                  if (curMap[rowId][colId - 1] === '-1') {
                    return true
                  }
                }
                if (curMap[rowId][colId + 1] === '0' || this.isEnemy(curMap[rowId][colId], curMap[rowId][colId + 1])) {
                  if (curMap[rowId][colId + 1] === '-1') {
                    return true
                  }
                }
              }
            }
          }
        }
        return false
      }
    },
    judgeBeEat (curMap, r, c) {
      let nxtList = []
      for (let io = 0; io < curMap.length; io++) {
        for (let jo = 0; jo < curMap[0].length; jo++) {
          let rowId = io, colId = jo
          if (curMap[rowId][colId] === '-1') {
            // 帅
            if (rowId - 1 >= 0 && (curMap[rowId - 1][colId] === '0' || this.isEnemy(curMap[rowId][colId], curMap[rowId - 1][colId]))) {
              // this.canMove[rowId - 1][colId] = '-1'
              nxtList.push({
                rowId: rowId,
                colId: colId,
                newRowId: rowId - 1,
                newColId: colId
              })
            }
            if (rowId + 1 < 3 && (curMap[rowId + 1][colId] === '0' || this.isEnemy(curMap[rowId][colId], curMap[rowId + 1][colId]))) {
              // this.canMove[rowId + 1][colId] = '-1'
              nxtList.push({
                rowId: rowId,
                colId: colId,
                newRowId: rowId + 1,
                newColId: colId
              })
            }
            if (colId - 1 >= 3 && (curMap[rowId][colId - 1] === '0' || this.isEnemy(curMap[rowId][colId], curMap[rowId][colId - 1]))) {
              // this.canMove[rowId][colId - 1] = '-1'
              nxtList.push({
                rowId: rowId,
                colId: colId,
                newRowId: rowId,
                newColId: colId - 1
              })
            }
            if (colId + 1 <= 5 && (curMap[rowId][colId + 1] === '0' || this.isEnemy(curMap[rowId][colId], curMap[rowId][colId + 1]))) {
              // this.canMove[rowId][colId + 1] = '-1'
              nxtList.push({
                rowId: rowId,
                colId: colId,
                newRowId: rowId,
                newColId: colId + 1
              })
            }
          }
          if (curMap[rowId][colId] === '-2') {
            // 士
            if (rowId - 1 >= 0 && colId - 1 >= 3 && (curMap[rowId - 1][colId - 1] === '0' || this.isEnemy(curMap[rowId][colId], curMap[rowId - 1][colId - 1]))) {
              // this.canMove[rowId - 1][colId - 1] = '-1'
              nxtList.push({
                rowId: rowId,
                colId: colId,
                newRowId: rowId - 1,
                newColId: colId - 1
              })
            }
            if (rowId - 1 >= 0 && colId + 1 <= 5 && (curMap[rowId - 1][colId + 1] === '0' || this.isEnemy(curMap[rowId][colId], curMap[rowId - 1][colId + 1]))) {
              // this.canMove[rowId - 1][colId + 1] = '-1'
              nxtList.push({
                rowId: rowId,
                colId: colId,
                newRowId: rowId - 1,
                newColId: colId + 1
              })
            }
            if (rowId + 1 < 3 && colId - 1 >= 3 && (curMap[rowId + 1][colId - 1] === '0' || this.isEnemy(curMap[rowId][colId], curMap[rowId + 1][colId - 1]))) {
              // this.canMove[rowId + 1][colId - 1] = '-1'
              nxtList.push({
                rowId: rowId,
                colId: colId,
                newRowId: rowId + 1,
                newColId: colId - 1
              })
            }
            if (rowId + 1 < 3 && colId + 1 <= 5 && (curMap[rowId + 1][colId + 1] === '0' || this.isEnemy(curMap[rowId][colId], curMap[rowId + 1][colId + 1]))) {
              // this.canMove[rowId + 1][colId + 1] = '-1'
              nxtList.push({
                rowId: rowId,
                colId: colId,
                newRowId: rowId + 1,
                newColId: colId + 1
              })
            }
          }
          if (curMap[rowId][colId] === '-3') {
            // 相
            if (rowId - 2 >= 0 && colId - 2 >= 0 && (curMap[rowId - 2][colId - 2] === '0' || this.isEnemy(curMap[rowId][colId], curMap[rowId - 2][colId - 2])) && curMap[rowId - 1][colId - 1] === '0') {
              // this.canMove[rowId - 2][colId - 2] = '-1'
              nxtList.push({
                rowId: rowId,
                colId: colId,
                newRowId: rowId - 2,
                newColId: colId - 2
              })
            }
            if (rowId - 2 >= 0 && colId + 2 < curMap[0].length && (curMap[rowId - 2][colId + 2] === '0' || this.isEnemy(curMap[rowId][colId], curMap[rowId - 2][colId + 2])) && curMap[rowId - 1][colId + 1] === '0') {
              // this.canMove[rowId - 2][colId + 2] = '-1'
              nxtList.push({
                rowId: rowId,
                colId: colId,
                newRowId: rowId - 2,
                newColId: colId + 2
              })
            }
            if (rowId + 2 <= 4 && colId - 2 >= 0 && (curMap[rowId + 2][colId - 2] === '0' || this.isEnemy(curMap[rowId][colId], curMap[rowId + 2][colId - 2])) && curMap[rowId + 1][colId - 1] === '0') {
              // this.canMove[rowId + 2][colId - 2] = '-1'
              nxtList.push({
                rowId: rowId,
                colId: colId,
                newRowId: rowId + 2,
                newColId: colId - 2
              })
            }
            if (rowId + 2 <= 4 && colId + 2 < curMap[0].length && (curMap[rowId + 2][colId + 2] === '0' || this.isEnemy(curMap[rowId][colId], curMap[rowId + 2][colId + 2])) && curMap[rowId + 1][colId + 1] === '0') {
              // this.canMove[rowId + 2][colId + 2] = '-1'
              nxtList.push({
                rowId: rowId,
                colId: colId,
                newRowId: rowId + 2,
                newColId: colId + 2
              })
            }
          }
          if (curMap[rowId][colId] === '-4') {
            // 马
            let dx = [-2, -2, -1, -1, 1, 1, 2, 2]
            let dy = [-1, 1, -2, 2, -2, 2, -1, 1]
            let rx = [-1, -1, 0, 0, 0, 0, 1, 1]
            let ry = [0, 0, -1, 1, -1, 1, 0, 0]
            for (let k = 0; k < 8; k++) {
              let tmpr = rowId + dx[k], tmpc = colId + dy[k]

              if (this.judgePos(tmpr, tmpc)
                  && (curMap[tmpr][tmpc] === '0' || this.isEnemy(curMap[rowId][colId], curMap[tmpr][tmpc]))
                  && curMap[rowId + rx[k]][colId + ry[k]] === '0') {
                // this.canMove[tmpr][tmpc] = '-1'
                nxtList.push({
                  rowId: rowId,
                  colId: colId,
                  newRowId: tmpr,
                  newColId: tmpc
                })
              }
            }
          }
          if (curMap[rowId][colId] === '-5') {
            // 车
            for (let i = rowId - 1; i >= 0; i--) {
              if (curMap[i][colId] === '0') {
                // this.canMove[i][colId] = '-1'
                nxtList.push({
                  rowId: rowId,
                  colId: colId,
                  newRowId: i,
                  newColId: colId
                })
              } else if (this.isEnemy(curMap[rowId][colId], curMap[i][colId])) {
                // this.canMove[i][colId] = '-1'
                nxtList.push({
                  rowId: rowId,
                  colId: colId,
                  newRowId: i,
                  newColId: colId
                })
                break
              } else if (this.isAlly(curMap[rowId][colId], curMap[i][colId])) {
                break
              }
            }
            for (let i = rowId + 1; i < this.canMove.length; i++) {
              if (curMap[i][colId] === '0') {
                // this.canMove[i][colId] = '-1'
                nxtList.push({
                  rowId: rowId,
                  colId: colId,
                  newRowId: i,
                  newColId: colId
                })
              } else if (this.isEnemy(curMap[rowId][colId], curMap[i][colId])) {
                // this.canMove[i][colId] = '-1'
                nxtList.push({
                  rowId: rowId,
                  colId: colId,
                  newRowId: i,
                  newColId: colId
                })
                break
              } else if (this.isAlly(curMap[rowId][colId], curMap[i][colId])) {
                break
              }
            }
            for (let j = colId - 1; j >= 0; j--) {
              if (curMap[rowId][j] === '0') {
                // this.canMove[rowId][j] = '-1'
                nxtList.push({
                  rowId: rowId,
                  colId: colId,
                  newRowId: rowId,
                  newColId: j
                })
              } else if (this.isEnemy(curMap[rowId][colId], curMap[rowId][j])) {
                // this.canMove[rowId][j] = '-1'
                nxtList.push({
                  rowId: rowId,
                  colId: colId,
                  newRowId: rowId,
                  newColId: j
                })
                break
              } else if (this.isAlly(curMap[rowId][colId], curMap[rowId][j])) {
                break
              }
            }
            for (let j = colId + 1; j < curMap[rowId].length; j++) {
              if (curMap[rowId][j] === '0') {
                // this.canMove[rowId][j] = '-1'
                nxtList.push({
                  rowId: rowId,
                  colId: colId,
                  newRowId: rowId,
                  newColId: j
                })
              } else if (this.isEnemy(curMap[rowId][colId], curMap[rowId][j])) {
                // this.canMove[rowId][j] = '-1'
                nxtList.push({
                  rowId: rowId,
                  colId: colId,
                  newRowId: rowId,
                  newColId: j
                })
                break
              } else if (this.isAlly(curMap[rowId][colId], curMap[rowId][j])) {
                break
              }
            }
          }
          if (curMap[rowId][colId] === '-6') {
            // 炮
            let flag = false
            for (let i = rowId - 1; i >= 0; i--) {
              if (flag === false && curMap[i][colId] === '0') {
                // this.canMove[i][colId] = '-1'
                nxtList.push({
                  rowId: rowId,
                  colId: colId,
                  newRowId: i,
                  newColId: colId
                })
              } else if (curMap[i][colId] !== '0' && flag === false) {
                flag = true
              } else if (flag === true && this.isEnemy(curMap[rowId][colId], curMap[i][colId])) {
                // this.canMove[i][colId] = '-1'
                nxtList.push({
                  rowId: rowId,
                  colId: colId,
                  newRowId: i,
                  newColId: colId
                })
                break
              }
            }
            flag = false
            for (let i = rowId + 1; i < this.canMove.length; i++) {
              if (flag === false && curMap[i][colId] === '0') {
                // this.canMove[i][colId] = '-1'
                nxtList.push({
                  rowId: rowId,
                  colId: colId,
                  newRowId: i,
                  newColId: colId
                })
              } else if (curMap[i][colId] !== '0' && flag === false) {
                flag = true
              }  else if (flag === true && this.isEnemy(curMap[rowId][colId], curMap[i][colId])) {
                // this.canMove[i][colId] = '-1'
                nxtList.push({
                  rowId: rowId,
                  colId: colId,
                  newRowId: i,
                  newColId: colId
                })
                break
              }
            }
            flag = false
            for (let j = colId - 1; j >= 0; j--) {
              if (flag === false && curMap[rowId][j] === '0') {
                // this.canMove[rowId][j] = '-1'
                nxtList.push({
                  rowId: rowId,
                  colId: colId,
                  newRowId: rowId,
                  newColId: j
                })
              } else if (curMap[rowId][j] !== '0' && flag === false) {
                flag = true
              }  else if (flag === true && this.isEnemy(curMap[rowId][colId], curMap[rowId][j])) {
                // this.canMove[rowId][j] = '-1'
                nxtList.push({
                  rowId: rowId,
                  colId: colId,
                  newRowId: rowId,
                  newColId: j
                })
                break
              }
            }
            flag = false
            for (let j = colId + 1; j < curMap[rowId].length; j++) {
              if (flag === false && curMap[rowId][j] === '0') {
                // this.canMove[rowId][j] = '-1'
                nxtList.push({
                  rowId: rowId,
                  colId: colId,
                  newRowId: rowId,
                  newColId: j
                })
              } else if (curMap[rowId][j] !== '0' && flag === false) {
                flag = true
              }  else if (flag === true && this.isEnemy(curMap[rowId][colId], curMap[rowId][j])) {
                // this.canMove[rowId][j] = '-1'
                nxtList.push({
                  rowId: rowId,
                  colId: colId,
                  newRowId: rowId,
                  newColId: j
                })
                break
              }
            }
          }
          if (curMap[rowId][colId] === '-7') {
            // 兵
            if (rowId <= 4) {
              // 只能前进
              if (curMap[rowId + 1][colId] === '0' || this.isEnemy(curMap[rowId][colId], curMap[rowId + 1][colId])) {
                // this.canMove[rowId + 1][colId] = '-1'
                nxtList.push({
                  rowId: rowId,
                  colId: colId,
                  newRowId: rowId + 1,
                  newColId: colId
                })
              }
            } else if (rowId < curMap.length) {
              // 前进或左右
              if (rowId + 1 < curMap.length && (curMap[rowId + 1][colId] === '0' || this.isEnemy(curMap[rowId][colId], curMap[rowId + 1][colId]))) {
                // this.canMove[rowId + 1][colId] = '-1'
                nxtList.push({
                  rowId: rowId,
                  colId: colId,
                  newRowId: rowId + 1,
                  newColId: colId
                })
              }
              if (curMap[rowId][colId - 1] === '0' || this.isEnemy(curMap[rowId][colId], curMap[rowId][colId - 1])) {
                // this.canMove[rowId][colId - 1] = '-1'
                nxtList.push({
                  rowId: rowId,
                  colId: colId,
                  newRowId: rowId,
                  newColId: colId - 1
                })
              }
              if (curMap[rowId][colId + 1] === '0' || this.isEnemy(curMap[rowId][colId], curMap[rowId][colId + 1])) {
                // this.canMove[rowId][colId + 1] = '-1'
                nxtList.push({
                  rowId: rowId,
                  colId: colId,
                  newRowId: rowId,
                  newColId: colId + 1
                })
              }
            }
          }
        }
      }
      for (let i = 0; i < nxtList.length; i++) {
        let cur = nxtList[i]
        if (cur.newRowId === r && cur.newColId === c) {
          return true
        }
      }
      return false
    },
    alphaBeta (curMap, depth, isAI, isPreCheckmated, alpha, beta) {
      // console.log(depth, isAI, alpha, beta)
      // for (let i = 0; i < this.chessMap.length; i++) {
      //   for (let j = 0; j < this.chessMap[0].length; j++) {
      //     console.log('curMap', i, j, curMap[i][j])
      //   }
      // }
      let chessScore = 0, chessPosScore = 0
      for (let i = 0; i < curMap.length; i++) {
        for (let j = 0; j < curMap[0].length; j++) {
          if (parseInt(curMap[i][j]) < 0) {
            // console.log(i, j, curMap[i][j])
            chessScore += this.chessScore[curMap[i][j]]
            chessPosScore += this.chessPosScore[curMap[i][j]][i][j]
          } else if (parseInt(curMap[i][j]) > 0) {
            chessScore -= this.chessScore[curMap[i][j]]
            chessPosScore -= this.chessPosScore[curMap[i][j]][i][j]
          }
        }
      }
      if (isAI) {
        let nxtList = []
        for (let io = 0; io < curMap.length; io++) {
          for (let jo = 0; jo < curMap[0].length; jo++) {
            let rowId = io, colId = jo
            if (curMap[rowId][colId] === '-1') {
              // 帅
              if (rowId - 1 >= 0 && (curMap[rowId - 1][colId] === '0' || this.isEnemy(curMap[rowId][colId], curMap[rowId - 1][colId]))) {
                // this.canMove[rowId - 1][colId] = '-1'
                nxtList.push({
                  rowId: rowId,
                  colId: colId,
                  newRowId: rowId - 1,
                  newColId: colId
                })
              }
              if (rowId + 1 < 3 && (curMap[rowId + 1][colId] === '0' || this.isEnemy(curMap[rowId][colId], curMap[rowId + 1][colId]))) {
                // this.canMove[rowId + 1][colId] = '-1'
                nxtList.push({
                  rowId: rowId,
                  colId: colId,
                  newRowId: rowId + 1,
                  newColId: colId
                })
              }
              if (colId - 1 >= 3 && (curMap[rowId][colId - 1] === '0' || this.isEnemy(curMap[rowId][colId], curMap[rowId][colId - 1]))) {
                // this.canMove[rowId][colId - 1] = '-1'
                nxtList.push({
                  rowId: rowId,
                  colId: colId,
                  newRowId: rowId,
                  newColId: colId - 1
                })
              }
              if (colId + 1 <= 5 && (curMap[rowId][colId + 1] === '0' || this.isEnemy(curMap[rowId][colId], curMap[rowId][colId + 1]))) {
                // this.canMove[rowId][colId + 1] = '-1'
                nxtList.push({
                  rowId: rowId,
                  colId: colId,
                  newRowId: rowId,
                  newColId: colId + 1
                })
              }
            }
            if (curMap[rowId][colId] === '-2') {
              // 士
              if (rowId - 1 >= 0 && colId - 1 >= 3 && (curMap[rowId - 1][colId - 1] === '0' || this.isEnemy(curMap[rowId][colId], curMap[rowId - 1][colId - 1]))) {
                // this.canMove[rowId - 1][colId - 1] = '-1'
                nxtList.push({
                  rowId: rowId,
                  colId: colId,
                  newRowId: rowId - 1,
                  newColId: colId - 1
                })
              }
              if (rowId - 1 >= 0 && colId + 1 <= 5 && (curMap[rowId - 1][colId + 1] === '0' || this.isEnemy(curMap[rowId][colId], curMap[rowId - 1][colId + 1]))) {
                // this.canMove[rowId - 1][colId + 1] = '-1'
                nxtList.push({
                  rowId: rowId,
                  colId: colId,
                  newRowId: rowId - 1,
                  newColId: colId + 1
                })
              }
              if (rowId + 1 < 3 && colId - 1 >= 3 && (curMap[rowId + 1][colId - 1] === '0' || this.isEnemy(curMap[rowId][colId], curMap[rowId + 1][colId - 1]))) {
                // this.canMove[rowId + 1][colId - 1] = '-1'
                nxtList.push({
                  rowId: rowId,
                  colId: colId,
                  newRowId: rowId + 1,
                  newColId: colId - 1
                })
              }
              if (rowId + 1 < 3 && colId + 1 <= 5 && (curMap[rowId + 1][colId + 1] === '0' || this.isEnemy(curMap[rowId][colId], curMap[rowId + 1][colId + 1]))) {
                // this.canMove[rowId + 1][colId + 1] = '-1'
                nxtList.push({
                  rowId: rowId,
                  colId: colId,
                  newRowId: rowId + 1,
                  newColId: colId + 1
                })
              }
            }
            if (curMap[rowId][colId] === '-3') {
              // 相
              if (rowId - 2 >= 0 && colId - 2 >= 0 && (curMap[rowId - 2][colId - 2] === '0' || this.isEnemy(curMap[rowId][colId], curMap[rowId - 2][colId - 2])) && curMap[rowId - 1][colId - 1] === '0') {
                // this.canMove[rowId - 2][colId - 2] = '-1'
                nxtList.push({
                  rowId: rowId,
                  colId: colId,
                  newRowId: rowId - 2,
                  newColId: colId - 2
                })
              }
              if (rowId - 2 >= 0 && colId + 2 < curMap[0].length && (curMap[rowId - 2][colId + 2] === '0' || this.isEnemy(curMap[rowId][colId], curMap[rowId - 2][colId + 2])) && curMap[rowId - 1][colId + 1] === '0') {
                // this.canMove[rowId - 2][colId + 2] = '-1'
                nxtList.push({
                  rowId: rowId,
                  colId: colId,
                  newRowId: rowId - 2,
                  newColId: colId + 2
                })
              }
              if (rowId + 2 <= 4 && colId - 2 >= 0 && (curMap[rowId + 2][colId - 2] === '0' || this.isEnemy(curMap[rowId][colId], curMap[rowId + 2][colId - 2])) && curMap[rowId + 1][colId - 1] === '0') {
                // this.canMove[rowId + 2][colId - 2] = '-1'
                nxtList.push({
                  rowId: rowId,
                  colId: colId,
                  newRowId: rowId + 2,
                  newColId: colId - 2
                })
              }
              if (rowId + 2 <= 4 && colId + 2 < curMap[0].length && (curMap[rowId + 2][colId + 2] === '0' || this.isEnemy(curMap[rowId][colId], curMap[rowId + 2][colId + 2])) && curMap[rowId + 1][colId + 1] === '0') {
                // this.canMove[rowId + 2][colId + 2] = '-1'
                nxtList.push({
                  rowId: rowId,
                  colId: colId,
                  newRowId: rowId + 2,
                  newColId: colId + 2
                })
              }
            }
            if (curMap[rowId][colId] === '-4') {
              // 马
              let dx = [-2, -2, -1, -1, 1, 1, 2, 2]
              let dy = [-1, 1, -2, 2, -2, 2, -1, 1]
              let rx = [-1, -1, 0, 0, 0, 0, 1, 1]
              let ry = [0, 0, -1, 1, -1, 1, 0, 0]
              for (let k = 0; k < 8; k++) {
                let tmpr = rowId + dx[k], tmpc = colId + dy[k]

                if (this.judgePos(tmpr, tmpc)
                    && (curMap[tmpr][tmpc] === '0' || this.isEnemy(curMap[rowId][colId], curMap[tmpr][tmpc]))
                    && curMap[rowId + rx[k]][colId + ry[k]] === '0') {
                  // this.canMove[tmpr][tmpc] = '-1'
                  nxtList.push({
                    rowId: rowId,
                    colId: colId,
                    newRowId: tmpr,
                    newColId: tmpc
                  })
                }
              }
            }
            if (curMap[rowId][colId] === '-5') {
              // 车
              for (let i = rowId - 1; i >= 0; i--) {
                if (curMap[i][colId] === '0') {
                  // this.canMove[i][colId] = '-1'
                  nxtList.push({
                    rowId: rowId,
                    colId: colId,
                    newRowId: i,
                    newColId: colId
                  })
                } else if (this.isEnemy(curMap[rowId][colId], curMap[i][colId])) {
                  // this.canMove[i][colId] = '-1'
                  nxtList.push({
                    rowId: rowId,
                    colId: colId,
                    newRowId: i,
                    newColId: colId
                  })
                  break
                } else if (this.isAlly(curMap[rowId][colId], curMap[i][colId])) {
                  break
                }
              }
              for (let i = rowId + 1; i < this.canMove.length; i++) {
                if (curMap[i][colId] === '0') {
                  // this.canMove[i][colId] = '-1'
                  nxtList.push({
                    rowId: rowId,
                    colId: colId,
                    newRowId: i,
                    newColId: colId
                  })
                } else if (this.isEnemy(curMap[rowId][colId], curMap[i][colId])) {
                  // this.canMove[i][colId] = '-1'
                  nxtList.push({
                    rowId: rowId,
                    colId: colId,
                    newRowId: i,
                    newColId: colId
                  })
                  break
                } else if (this.isAlly(curMap[rowId][colId], curMap[i][colId])) {
                  break
                }
              }
              for (let j = colId - 1; j >= 0; j--) {
                if (curMap[rowId][j] === '0') {
                  // this.canMove[rowId][j] = '-1'
                  nxtList.push({
                    rowId: rowId,
                    colId: colId,
                    newRowId: rowId,
                    newColId: j
                  })
                } else if (this.isEnemy(curMap[rowId][colId], curMap[rowId][j])) {
                  // this.canMove[rowId][j] = '-1'
                  nxtList.push({
                    rowId: rowId,
                    colId: colId,
                    newRowId: rowId,
                    newColId: j
                  })
                  break
                } else if (this.isAlly(curMap[rowId][colId], curMap[rowId][j])) {
                  break
                }
              }
              for (let j = colId + 1; j < curMap[rowId].length; j++) {
                if (curMap[rowId][j] === '0') {
                  // this.canMove[rowId][j] = '-1'
                  nxtList.push({
                    rowId: rowId,
                    colId: colId,
                    newRowId: rowId,
                    newColId: j
                  })
                } else if (this.isEnemy(curMap[rowId][colId], curMap[rowId][j])) {
                  // this.canMove[rowId][j] = '-1'
                  nxtList.push({
                    rowId: rowId,
                    colId: colId,
                    newRowId: rowId,
                    newColId: j
                  })
                  break
                } else if (this.isAlly(curMap[rowId][colId], curMap[rowId][j])) {
                  break
                }
              }
            }
            if (curMap[rowId][colId] === '-6') {
              // 炮
              let flag = false
              for (let i = rowId - 1; i >= 0; i--) {
                if (flag === false && curMap[i][colId] === '0') {
                  // this.canMove[i][colId] = '-1'
                  nxtList.push({
                    rowId: rowId,
                    colId: colId,
                    newRowId: i,
                    newColId: colId
                  })
                } else if (flag === false && curMap[i][colId] !== '0') {
                  flag = true
                } else if (flag === true) {
                  // this.canMove[i][colId] = '-1'
                  if (this.isEnemy(curMap[rowId][colId], curMap[i][colId])) {
                    nxtList.push({
                      rowId: rowId,
                      colId: colId,
                      newRowId: i,
                      newColId: colId
                    })
                  }
                  break
                }
              }
              flag = false
              for (let i = rowId + 1; i < this.canMove.length; i++) {
                if (flag === false && curMap[i][colId] === '0') {
                  // this.canMove[i][colId] = '-1'
                  nxtList.push({
                    rowId: rowId,
                    colId: colId,
                    newRowId: i,
                    newColId: colId
                  })
                } else if (curMap[i][colId] !== '0' && flag === false) {
                  flag = true
                }  else if (flag === true) {
                  // this.canMove[i][colId] = '-1'
                  if (this.isEnemy(curMap[rowId][colId], curMap[i][colId])) {
                    nxtList.push({
                      rowId: rowId,
                      colId: colId,
                      newRowId: i,
                      newColId: colId
                    })
                  }
                  break
                }
              }
              flag = false
              for (let j = colId - 1; j >= 0; j--) {
                if (flag === false && curMap[rowId][j] === '0') {
                  // this.canMove[rowId][j] = '-1'
                  nxtList.push({
                    rowId: rowId,
                    colId: colId,
                    newRowId: rowId,
                    newColId: j
                  })
                } else if (curMap[rowId][j] !== '0' && flag === false) {
                  flag = true
                } else if (flag === true) {
                  // this.canMove[rowId][j] = '-1'
                  if (this.isEnemy(curMap[rowId][colId], curMap[rowId][j])) {
                    nxtList.push({
                      rowId: rowId,
                      colId: colId,
                      newRowId: rowId,
                      newColId: j
                    })
                  }
                  break
                }
              }
              flag = false
              for (let j = colId + 1; j < curMap[rowId].length; j++) {
                if (flag === false && curMap[rowId][j] === '0') {
                  // this.canMove[rowId][j] = '-1'
                  nxtList.push({
                    rowId: rowId,
                    colId: colId,
                    newRowId: rowId,
                    newColId: j
                  })
                } else if (curMap[rowId][j] !== '0' && flag === false) {
                  flag = true
                }  else if (flag === true) {
                  // this.canMove[rowId][j] = '-1'
                  if (this.isEnemy(curMap[rowId][colId], curMap[rowId][j])) {
                    nxtList.push({
                      rowId: rowId,
                      colId: colId,
                      newRowId: rowId,
                      newColId: j
                    })
                  }
                  break
                }
              }
            }
            if (curMap[rowId][colId] === '-7') {
              // 兵
              if (rowId <= 4) {
                // 只能前进
                if (curMap[rowId + 1][colId] === '0' || this.isEnemy(curMap[rowId][colId], curMap[rowId + 1][colId])) {
                  // this.canMove[rowId + 1][colId] = '-1'
                  nxtList.push({
                    rowId: rowId,
                    colId: colId,
                    newRowId: rowId + 1,
                    newColId: colId
                  })
                }
              } else if (rowId < curMap.length) {
                // 前进或左右
                if (rowId + 1 < curMap.length && (curMap[rowId + 1][colId] === '0' || this.isEnemy(curMap[rowId][colId], curMap[rowId + 1][colId]))) {
                  // this.canMove[rowId + 1][colId] = '-1'
                  nxtList.push({
                    rowId: rowId,
                    colId: colId,
                    newRowId: rowId + 1,
                    newColId: colId
                  })
                }
                if (curMap[rowId][colId - 1] === '0' || this.isEnemy(curMap[rowId][colId], curMap[rowId][colId - 1])) {
                  // this.canMove[rowId][colId - 1] = '-1'
                  nxtList.push({
                    rowId: rowId,
                    colId: colId,
                    newRowId: rowId,
                    newColId: colId - 1
                  })
                }
                if (curMap[rowId][colId + 1] === '0' || this.isEnemy(curMap[rowId][colId], curMap[rowId][colId + 1])) {
                  // this.canMove[rowId][colId + 1] = '-1'
                  nxtList.push({
                    rowId: rowId,
                    colId: colId,
                    newRowId: rowId,
                    newColId: colId + 1
                  })
                }
              }
            }
          }
        }
        // console.log(nxtList)
        // if (depth === 2 && isPreCheckmated === true && curMap[1][4] === '-1') {
        //   console.log(nxtList)
        // }
        for (let i = 0; i < nxtList.length; i++) {
          let cur = nxtList[i]
          // if (depth === 2) {
          //   console.log(cur.rowId, cur.colId, cur.newRowId, cur.newColId)
          // }
          let tmp = curMap[cur.newRowId][cur.newColId]
          curMap[cur.newRowId][cur.newColId] = curMap[cur.rowId][cur.colId]
          curMap[cur.rowId][cur.colId] = '0'
          if (depth === 0 && tmp === '1') {
            // 将军状态
            this.aiRowId = cur.rowId
            this.aiColId = cur.colId
            this.aiNewRowId = cur.newRowId
            this.aiNewColId = cur.newColId
            console.log('depth 0', this.chessMap[this.aiRowId][this.aiColId], this.chessMap[this.aiNewRowId][this.aiNewColId])
            if (this.chessMap[this.aiRowId][this.aiColId] === '0') {
              console.log('err', nxtList)
            }
            this.win = -1
            curMap[cur.rowId][cur.colId] = curMap[cur.newRowId][cur.newColId]
            curMap[cur.newRowId][cur.newColId] = tmp
            return
          }


          let isCheckMate = this.judgeCheckMate(curMap, false)
          // if (cur.rowId === 3 && cur.colId === 8) {
          //   console.log('curMap', curMap.join(','))
          //   console.log('judge', cur.rowId, cur.colId)
          //   console.log(cur.newRowId, cur.newColId)
          //   console.log(isCheckMate)
          // }
          let moveScore = 0
          if (isCheckMate || this.judgeCounter(curMap, true)) {
            // 被将军
            // let hehe = []
            // curMap.forEach(c => {
            //   hehe.push(c.join(','))
            // })
            // console.log(hehe)
            curMap[cur.rowId][cur.colId] = curMap[cur.newRowId][cur.newColId]
            curMap[cur.newRowId][cur.newColId] = tmp
            continue
            // moveScore = -29999
            // if (depth === 0) {
            //   // console.log('curMap', curMap.join(','))
            //   // console.log(isCheckMate)
            //   continue
            // }
            // console.log('be checkmated', this.chessMap)
          } else if (this.judgeCheckMate(curMap, true) && !this.judgeBeEat(curMap, cur.newRowId, cur.newColId)) {
            moveScore = 500
          }
          moveScore += this.chessScore[tmp]
          if (depth === 2) {
            let checkMateScore = 0
            if (isPreCheckmated === true && isCheckMate === false) {
              checkMateScore = 29999
            }
            curMap[cur.rowId][cur.colId] = curMap[cur.newRowId][cur.newColId]
            curMap[cur.newRowId][cur.newColId] = tmp
            // return chessScore + chessPosScore + moveScore + checkMateScore
            if (chessScore + chessPosScore + moveScore + checkMateScore > alpha) {
              // console.log('hehe', this.judgeCheckMate(curMap, false))
              // console.log(moveScore)
              alpha = chessScore + chessPosScore + moveScore + checkMateScore
              // if (depth === 0) {
              //   this.aiRowId = cur.rowId
              //   this.aiColId = cur.colId
              //   this.aiNewRowId = cur.newRowId
              //   this.aiNewColId = cur.newColId
              // }
            }
          } else {
            let max = this.alphaBeta(curMap, depth + 1, !isAI, isCheckMate, alpha, beta)
            curMap[cur.rowId][cur.colId] = curMap[cur.newRowId][cur.newColId]
            curMap[cur.newRowId][cur.newColId] = tmp
            // console.log('得分', max + chessScore + chessPosScore + moveScore)
            if (max + chessScore + chessPosScore + moveScore > alpha) {
              // console.log('hehe', this.judgeCheckMate(curMap, false))
              // console.log(moveScore)
              alpha = max + chessScore + chessPosScore + moveScore
              if (depth === 0) {
                this.aiRowId = cur.rowId
                this.aiColId = cur.colId
                this.aiNewRowId = cur.newRowId
                this.aiNewColId = cur.newColId
                console.log('depth 0', this.chessMap[this.aiRowId][this.aiColId], this.chessMap[this.aiNewRowId][this.aiNewColId])
                if (this.chessMap[this.aiRowId][this.aiColId] === '0') {
                  console.log('err', nxtList)
                }
              }
            }
          }
          if (alpha >= beta) {
            return alpha
          }
        }
        // console.log('heheh', nxtList.length)
        return alpha
      } else {
        let nxtList = []
        for (let io = 0; io < curMap.length; io++) {
          for (let jo = 0; jo < curMap[0].length; jo++) {
            let rowId = io, colId = jo
            if (curMap[rowId][colId] === '1') {
              // 帅
              if (rowId - 1 >= this.canMove.length - 3 && (curMap[rowId - 1][colId] === '0' || this.isEnemy(curMap[rowId][colId], curMap[rowId - 1][colId]))) {
                // this.canMove[rowId - 1][colId] = '-1'
                nxtList.push({
                  rowId: rowId,
                  colId: colId,
                  newRowId: rowId - 1,
                  newColId: colId
                })
              }
              if (rowId + 1 < this.canMove.length && (curMap[rowId + 1][colId] === '0' || this.isEnemy(curMap[rowId][colId], curMap[rowId + 1][colId]))) {
                // this.canMove[rowId + 1][colId] = '-1'
                nxtList.push({
                  rowId: rowId,
                  colId: colId,
                  newRowId: rowId + 1,
                  newColId: colId
                })
              }
              if (colId - 1 >= 3 && (curMap[rowId][colId - 1] === '0' || this.isEnemy(curMap[rowId][colId], curMap[rowId][colId - 1]))) {
                // this.canMove[rowId][colId - 1] = '-1'
                nxtList.push({
                  rowId: rowId,
                  colId: colId,
                  newRowId: rowId,
                  newColId: colId - 1
                })
              }
              if (colId + 1 <= 5 && (curMap[rowId][colId + 1] === '0' || this.isEnemy(curMap[rowId][colId], curMap[rowId][colId + 1]))) {
                // this.canMove[rowId][colId + 1] = '-1'
                nxtList.push({
                  rowId: rowId,
                  colId: colId,
                  newRowId: rowId,
                  newColId: colId + 1
                })
              }
            }
            if (curMap[rowId][colId] === '2') {
              // 士
              if (rowId - 1 >= this.canMove.length - 3 && colId - 1 >= 3 && (curMap[rowId - 1][colId - 1] === '0' || this.isEnemy(curMap[rowId][colId], curMap[rowId - 1][colId - 1]))) {
                // this.canMove[rowId - 1][colId - 1] = '-1'
                nxtList.push({
                  rowId: rowId,
                  colId: colId,
                  newRowId: rowId - 1,
                  newColId: colId - 1
                })
              }
              if (rowId - 1 >= this.canMove.length - 3 && colId + 1 <= 5 && (curMap[rowId - 1][colId + 1] === '0' || this.isEnemy(curMap[rowId][colId], curMap[rowId - 1][colId + 1]))) {
                // this.canMove[rowId - 1][colId + 1] = '-1'
                nxtList.push({
                  rowId: rowId,
                  colId: colId,
                  newRowId: rowId - 1,
                  newColId: colId + 1
                })
              }
              if (rowId + 1 < this.canMove.length && colId - 1 >= 3 && (curMap[rowId + 1][colId - 1] === '0' || this.isEnemy(curMap[rowId][colId], curMap[rowId + 1][colId - 1]))) {
                // this.canMove[rowId + 1][colId - 1] = '-1'
                nxtList.push({
                  rowId: rowId,
                  colId: colId,
                  newRowId: rowId + 1,
                  newColId: colId - 1
                })
              }
              if (rowId + 1 < this.canMove.length && colId + 1 <= 5 && (curMap[rowId + 1][colId + 1] === '0' || this.isEnemy(curMap[rowId][colId], curMap[rowId + 1][colId + 1]))) {
                // this.canMove[rowId + 1][colId + 1] = '-1'
                nxtList.push({
                  rowId: rowId,
                  colId: colId,
                  newRowId: rowId + 1,
                  newColId: colId + 1
                })
              }
            }
            if (curMap[rowId][colId] === '3') {
              // 相
              if (rowId - 2 >= 5 && colId - 2 >= 0 && (curMap[rowId - 2][colId - 2] === '0' || this.isEnemy(curMap[rowId][colId], curMap[rowId - 2][colId - 2])) && curMap[rowId - 1][colId - 1] === '0') {
                // this.canMove[rowId - 2][colId - 2] = '-1'
                nxtList.push({
                  rowId: rowId,
                  colId: colId,
                  newRowId: rowId - 2,
                  newColId: colId - 2
                })
              }
              if (rowId - 2 >= 5 && colId + 2 < curMap[0].length && (curMap[rowId - 2][colId + 2] === '0' || this.isEnemy(curMap[rowId][colId], curMap[rowId - 2][colId + 2])) && curMap[rowId - 1][colId + 1] === '0') {
                // this.canMove[rowId - 2][colId + 2] = '-1'
                nxtList.push({
                  rowId: rowId,
                  colId: colId,
                  newRowId: rowId - 2,
                  newColId: colId + 2
                })
              }
              if (rowId + 2 < this.canMove.length && colId - 2 >= 0 && (curMap[rowId + 2][colId - 2] === '0' || this.isEnemy(curMap[rowId][colId], curMap[rowId + 2][colId - 2])) && curMap[rowId + 1][colId - 1] === '0') {
                // this.canMove[rowId + 2][colId - 2] = '-1'
                nxtList.push({
                  rowId: rowId,
                  colId: colId,
                  newRowId: rowId + 2,
                  newColId: colId - 2
                })
              }
              if (rowId + 2 < this.canMove.length && colId + 2 < curMap[0].length && (curMap[rowId + 2][colId + 2] === '0' || this.isEnemy(curMap[rowId][colId], curMap[rowId + 2][colId + 2])) && curMap[rowId + 1][colId + 1] === '0') {
                // this.canMove[rowId + 2][colId + 2] = '-1'
                nxtList.push({
                  rowId: rowId,
                  colId: colId,
                  newRowId: rowId + 2,
                  newColId: colId + 2
                })
              }
            }
            if (curMap[rowId][colId] === '4') {
              // 马
              let dx = [-2, -2, -1, -1, 1, 1, 2, 2]
              let dy = [-1, 1, -2, 2, -2, 2, -1, 1]
              let rx = [-1, -1, 0, 0, 0, 0, 1, 1]
              let ry = [0, 0, -1, 1, -1, 1, 0, 0]
              for (let k = 0; k < 8; k++) {
                let tmpr = rowId + dx[k], tmpc = colId + dy[k]

                if (this.judgePos(tmpr, tmpc)
                    && (curMap[tmpr][tmpc] === '0' || this.isEnemy(curMap[rowId][colId], curMap[tmpr][tmpc]))
                    && curMap[rowId + rx[k]][colId + ry[k]] === '0') {
                  // this.canMove[tmpr][tmpc] = '-1'
                  nxtList.push({
                    rowId: rowId,
                    colId: colId,
                    newRowId: tmpr,
                    newColId: tmpc
                  })
                }
              }
            }
            if (curMap[rowId][colId] === '5') {
              // 车
              for (let i = rowId - 1; i >= 0; i--) {
                if (curMap[i][colId] === '0') {
                  // this.canMove[i][colId] = '-1'
                  nxtList.push({
                    rowId: rowId,
                    colId: colId,
                    newRowId: i,
                    newColId: colId
                  })
                } else if (this.isEnemy(curMap[rowId][colId], curMap[i][colId])) {
                  // this.canMove[i][colId] = '-1'
                  nxtList.push({
                    rowId: rowId,
                    colId: colId,
                    newRowId: i,
                    newColId: colId
                  })
                  break
                } else if (this.isAlly(curMap[rowId][colId], curMap[i][colId])) {
                  break
                }
              }
              for (let i = rowId + 1; i < this.canMove.length; i++) {
                if (curMap[i][colId] === '0') {
                  // this.canMove[i][colId] = '-1'
                  nxtList.push({
                    rowId: rowId,
                    colId: colId,
                    newRowId: i,
                    newColId: colId
                  })
                } else if (this.isEnemy(curMap[rowId][colId], curMap[i][colId])) {
                  // this.canMove[i][colId] = '-1'
                  nxtList.push({
                    rowId: rowId,
                    colId: colId,
                    newRowId: i,
                    newColId: colId
                  })
                  break
                } else if (this.isAlly(curMap[rowId][colId], curMap[i][colId])) {
                  break
                }
              }
              for (let j = colId - 1; j >= 0; j--) {
                if (curMap[rowId][j] === '0') {
                  // this.canMove[rowId][j] = '-1'
                  nxtList.push({
                    rowId: rowId,
                    colId: colId,
                    newRowId: rowId,
                    newColId: j
                  })
                } else if (this.isEnemy(curMap[rowId][colId], curMap[rowId][j])) {
                  // this.canMove[rowId][j] = '-1'
                  nxtList.push({
                    rowId: rowId,
                    colId: colId,
                    newRowId: rowId,
                    newColId: j
                  })
                  break
                } else if (this.isAlly(curMap[rowId][colId], curMap[rowId][j])) {
                  break
                }
              }
              for (let j = colId + 1; j < curMap[rowId].length; j++) {
                if (curMap[rowId][j] === '0') {
                  // this.canMove[rowId][j] = '-1'
                  nxtList.push({
                    rowId: rowId,
                    colId: colId,
                    newRowId: rowId,
                    newColId: j
                  })
                } else if (this.isEnemy(curMap[rowId][colId], curMap[rowId][j])) {
                  // this.canMove[rowId][j] = '-1'
                  nxtList.push({
                    rowId: rowId,
                    colId: colId,
                    newRowId: rowId,
                    newColId: j
                  })
                  break
                } else if (this.isAlly(curMap[rowId][colId], curMap[rowId][j])) {
                  break
                }
              }
            }
            if (curMap[rowId][colId] === '6') {
              // 炮
              let flag = false
              for (let i = rowId - 1; i >= 0; i--) {
                if (flag === false && curMap[i][colId] === '0') {
                  // this.canMove[i][colId] = '-1'
                  nxtList.push({
                    rowId: rowId,
                    colId: colId,
                    newRowId: i,
                    newColId: colId
                  })
                } else if (curMap[i][colId] !== '0' && flag === false) {
                  flag = true
                } else if (flag === true && this.isEnemy(curMap[rowId][colId], curMap[i][colId])) {
                  // this.canMove[i][colId] = '-1'
                  nxtList.push({
                    rowId: rowId,
                    colId: colId,
                    newRowId: i,
                    newColId: colId
                  })
                  break
                }
              }
              flag = false
              for (let i = rowId + 1; i < this.canMove.length; i++) {
                if (flag === false && curMap[i][colId] === '0') {
                  // this.canMove[i][colId] = '-1'
                  nxtList.push({
                    rowId: rowId,
                    colId: colId,
                    newRowId: i,
                    newColId: colId
                  })
                } else if (curMap[i][colId] !== '0' && flag === false) {
                  flag = true
                }  else if (flag === true && this.isEnemy(curMap[rowId][colId], curMap[i][colId])) {
                  // this.canMove[i][colId] = '-1'
                  nxtList.push({
                    rowId: rowId,
                    colId: colId,
                    newRowId: i,
                    newColId: colId
                  })
                  break
                }
              }
              flag = false
              for (let j = colId - 1; j >= 0; j--) {
                if (flag === false && curMap[rowId][j] === '0') {
                  // this.canMove[rowId][j] = '-1'
                  nxtList.push({
                    rowId: rowId,
                    colId: colId,
                    newRowId: rowId,
                    newColId: j
                  })
                } else if (curMap[rowId][j] !== '0' && flag === false) {
                  flag = true
                }  else if (flag === true && this.isEnemy(curMap[rowId][colId], curMap[rowId][j])) {
                  // this.canMove[rowId][j] = '-1'
                  nxtList.push({
                    rowId: rowId,
                    colId: colId,
                    newRowId: rowId,
                    newColId: j
                  })
                  break
                }
              }
              flag = false
              for (let j = colId + 1; j < curMap[rowId].length; j++) {
                if (flag === false && curMap[rowId][j] === '0') {
                  // this.canMove[rowId][j] = '-1'
                  nxtList.push({
                    rowId: rowId,
                    colId: colId,
                    newRowId: rowId,
                    newColId: j
                  })
                } else if (curMap[rowId][j] !== '0' && flag === false) {
                  flag = true
                }  else if (flag === true && this.isEnemy(curMap[rowId][colId], curMap[rowId][j])) {
                  // this.canMove[rowId][j] = '-1'
                  nxtList.push({
                    rowId: rowId,
                    colId: colId,
                    newRowId: rowId,
                    newColId: j
                  })
                  break
                }
              }
            }
            if (curMap[rowId][colId] === '7') {
              // 兵
              if (rowId >= 5) {
                // 只能前进
                if (curMap[rowId - 1][colId] === '0' || this.isEnemy(curMap[rowId][colId], curMap[rowId - 1][colId])) {
                  // this.canMove[rowId - 1][colId] = '-1'
                  nxtList.push({
                    rowId: rowId,
                    colId: colId,
                    newRowId: rowId - 1,
                    newColId: colId
                  })
                }
              } else if (rowId >= 0) {
                // 前进或左右
                if (rowId - 1 >= 0 && (curMap[rowId - 1][colId] === '0' || this.isEnemy(curMap[rowId][colId], curMap[rowId - 1][colId]))) {
                  // this.canMove[rowId - 1][colId] = '-1'
                  nxtList.push({
                    rowId: rowId,
                    colId: colId,
                    newRowId: rowId - 1,
                    newColId: colId
                  })
                }
                if (curMap[rowId][colId - 1] === '0' || this.isEnemy(curMap[rowId][colId], curMap[rowId][colId - 1])) {
                  // this.canMove[rowId][colId - 1] = '-1'
                  nxtList.push({
                    rowId: rowId,
                    colId: colId,
                    newRowId: rowId,
                    newColId: colId - 1
                  })
                }
                if (curMap[rowId][colId + 1] === '0' || this.isEnemy(curMap[rowId][colId], curMap[rowId][colId + 1])) {
                  // this.canMove[rowId][colId + 1] = '-1'
                  nxtList.push({
                    rowId: rowId,
                    colId: colId,
                    newRowId: rowId,
                    newColId: colId + 1
                  })
                }
              }
            }
          }
        }
        // console.log(nxtList)
        for (let i = 0; i < nxtList.length; i++) {
          let cur = nxtList[i]
          let tmp = curMap[cur.newRowId][cur.newColId]
          curMap[cur.newRowId][cur.newColId] = curMap[cur.rowId][cur.colId]
          curMap[cur.rowId][cur.colId] = '0'
          let isCheckMate = this.judgeCheckMate(curMap, false)
          let moveScore = 0
          if (isCheckMate) {
            // 被将军
            moveScore = -29999
            // console.log('be checkmated', this.chessMap)
          } else if (this.judgeCheckMate(curMap, true) || this.judgeCounter(curMap, false)) {
            moveScore = 9999
          }
          moveScore -= this.chessScore[tmp] * 2
          if (depth === 2) {
            curMap[cur.rowId][cur.colId] = curMap[cur.newRowId][cur.newColId]
            curMap[cur.newRowId][cur.newColId] = tmp
            return chessScore + chessPosScore + moveScore
          } else {
            let min = this.alphaBeta(curMap, depth + 1, !isAI, isCheckMate, alpha, beta)
            // console.log('得分1', min)
            // console.log('得分12', min + chessScore + chessPosScore + moveScore)
            curMap[cur.rowId][cur.colId] = curMap[cur.newRowId][cur.newColId]
            curMap[cur.newRowId][cur.newColId] = tmp
            if (min + chessScore + chessPosScore + moveScore < beta) {
              beta = min + chessScore + chessPosScore + moveScore
              if (depth === 0) {
                this.aiRowId = cur.rowId
                this.aiColId = cur.colId
                this.aiNewRowId = cur.newRowId
                this.aiNewColId = cur.newColId
              }
            }
          }
          if (alpha >= beta) {
            return beta
          }
        }
        return beta
      }
    }

  },
  created() {

  }
}
</script>

<style lang="less" scoped>
.cn-chess {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 700px;
  user-select: none;
  .checker-border-outer {
    //width: 600px;
    //height: 600px;
    display: flex;
    justify-content: center;
    align-items: center;
    //background-color: rgb(246, 198, 113);
    //background-color: #dddddd;
    position: relative;
    .checker-border {
      width: 478px;
      height: 538px;
      position: relative;
      box-sizing: content-box;
      //background-image:
      //    linear-gradient(transparent 50%, rgba(55,110,176,0.3) 50%),
      //    linear-gradient(to right,rgba(55,110,176,0.3) 50%, transparent 50%);
      background-image: linear-gradient(transparent 50%, black 50%, transparent calc(50% + 1px), transparent calc(100% - 1px), black 100%),
      linear-gradient(to right, transparent 50%, black 50%, transparent calc(50% + 1px), transparent calc(100% - 1px), black 100%);
      background-size: 120px 120px;
      border: 1px solid black;
      .row {
        .col {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          cursor: pointer;
          .chess {
            width: 100%;
            height: 100%;
            border-radius: inherit;
            border: 1px solid #101010;
            display: flex;
            justify-content: center;
            align-items: center;
            font-family: KaiTi;
            font-size: 25px;
            font-weight: 600;
            background-color: #FFFFFF;
          }
          .red-side {
            color: #bb0f0f;
          }
          .pre-chess-eat {
            border: 3px solid #5bbd5b !important;
          }
          .last-move-chess {
            border: 3px solid #d98333;
          }
        }
        .pre-go {
          display: flex;
          justify-content: center;
          align-items: center;
          .pre-chess {
            width: 15px;
            height: 15px;
            border-radius: inherit;
            border: 3px solid #5bbd5b;
            background-color: #FFFFFF;
          }
        }
      }
      .check-mate {
        position: absolute;
        z-index: 99999;
        font-size: 100px;
        font-family: KaiTi;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgba(208, 208, 208, 0.3);
      }
    }
    .river {
      width: calc(100% - 10px);
      height: 60px;
      position: absolute;
      top: 320.5px;
      z-index: 20;
      background-color: #FFFFFF;
    }
    .line-tl-br {
      width: 166px;
      position: absolute;
      border-top: 1px solid #7d7d7d;
      transform: rotate(45deg);
    }
    .line-bl-tr {
      width: 166px;
      position: absolute;
      border-top: 1px solid #7d7d7d;
      transform: rotate(-45deg);
    }
    .r-side {
      bottom: 139px;
      left: 157.5px;
    }
    .b-side {
      top: 139px;
      left: 157.5px;
    }
    .mark {
      position: absolute;
      width: 25px;
      height: 25px;
      display: flex;
      .curve0 {
        position: absolute;
        top: 5px;
        left: 5px;
        width: 5px;
        height: 5px;
        //border-radius: 0 0 5px 0;
        border-right: 1px solid black;
        border-bottom: 1px solid black;
      }
      .curve1 {
        position: absolute;
        top: 5px;
        right: 5px;
        width: 5px;
        height: 5px;
        //border-radius: 0 0 0 5px;
        border-left: 1px solid black;
        border-bottom: 1px solid black;
      }
      .curve2 {
        position: absolute;
        bottom: 5px;
        right: 5px;
        width: 5px;
        height: 5px;
        //border-radius: 5px 0 0 0;
        border-left: 1px solid black;
        border-top: 1px solid black;
      }
      .curve3 {
        position: absolute;
        bottom: 5px;
        left: 5px;
        width: 5px;
        height: 5px;
        //border-radius: 0 5px 0 0;
        border-right: 1px solid black;
        border-top: 1px solid black;
      }
    }
    .mark0 {
      top: 188px;
      left: 48px;
    }
    .mark1 {
      top: 188px;
      right: 47px;
    }
    .mark2 {
      top: 248px;
      left: -12px;
    }
    .mark3 {
      top: 248px;
      left: 108px;
    }
    .mark4 {
      top: 248px;
      left: 228px;
    }
    .mark5 {
      top: 248px;
      right: 107px;
    }
    .mark6 {
      top: 248px;
      right: -12px;
    }
    .mark7 {
      bottom: 187px;
      left: 48px;
    }
    .mark8 {
      bottom: 187px;
      right: 47px;
    }
    .mark9 {
      bottom: 248px;
      left: -12px;
    }
    .mark10 {
      bottom: 248px;
      left: 108px;
    }
    .mark11 {
      bottom: 248px;
      left: 228px;
    }
    .mark12 {
      bottom: 248px;
      right: 107px;
    }
    .mark13 {
      bottom: 248px;
      right: -12px;
    }
  }
}
</style>
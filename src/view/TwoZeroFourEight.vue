<template>
  <div class="two-zero-four-eight">
    <div class="menu">
      <div class="scores">
        <div class="cur-score">
          <div class="title">本次得分</div>
          <div class="val">{{score}}</div>
        </div>
        <div class="best-score">
          <div class="title">历史最高得分</div>
          <div class="val">{{bestScore}}</div>
        </div>
      </div>
      <div class="btns">
        <div class="restart el-icon-refresh-right" @click="restart"></div>
      </div>
    </div>
    <div class="grid-area">
      <div class="game-over" v-if="isOver">game over</div>
      <div class="grid-row" v-for="(row, index) in matrix" :key="index">
        <div class="grid-outer"  v-for="(grid, idx) in row" :key="idx">
          <div :class="{
          'left1': moveStep[index][idx] === 'left1' && isMoveLeft,
          'left2': moveStep[index][idx] === 'left2' && isMoveLeft,
          'left3': moveStep[index][idx] === 'left3' && isMoveLeft,
          'right1': moveStep[index][idx] === 'right1' && isMoveRight,
          'right2': moveStep[index][idx] === 'right2' && isMoveRight,
          'right3': moveStep[index][idx] === 'right3' && isMoveRight,
          'up1': moveStep[index][idx] === 'up1' && isMoveUp,
          'up2': moveStep[index][idx] === 'up2' && isMoveUp,
          'up3': moveStep[index][idx] === 'up3' && isMoveUp,
          'down1': moveStep[index][idx] === 'down1' && isMoveDown,
          'down2': moveStep[index][idx] === 'down2' && isMoveDown,
          'down3': moveStep[index][idx] === 'down3' && isMoveDown,
          'grid': true,
          'c0': grid === 0,
          'c2': grid === 2,
          'c4': grid === 4,
          'c8': grid === 8,
          'c16': grid === 16,
          'c32': grid === 32,
          'c64': grid === 64,
          'c128': grid === 128,
          'c256': grid === 256,
          'c512': grid === 512,
          'c1024': grid === 1024,
          'c2048': grid === 2048,
          'c4096': grid === 4096,
          'c8192': grid === 8192,
          'c16384': grid === 16384,
          'c32768': grid === 32768,
          'c65536': grid === 65536,
          'c131072': grid === 131072
          }">
            {{grid}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TwoZeroFourEight",
  data () {
    const matrix = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]
    const isAdded = [[false, false, false, false], [false, false, false, false], [false, false, false, false], [false, false, false, false]]
    const moveStep = [['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']]
    return {
      matrix: matrix,
      isAdded: isAdded,
      moveStep: moveStep,
      score: 0,
      bestScore: 0,
      isOver: false,
      isMove: false,
      isMoveLeft: false,
      isMoveRight: false,
      isMoveUp: false,
      isMoveDown: false
    }
  },
  methods: {
    moveBox (e) {
      if (!this.isOver) {
        //	判断按键
        // console.log(e.key)
        let keyCode = e.key;

        if(keyCode === 'a' || keyCode === 'A' || keyCode === 'ArrowLeft')	//	a-->left
        {
          console.log('left')
          this.goLeft()
        }
        else if(keyCode === 'w' || keyCode === 'W' || keyCode === 'ArrowUp')	//	w-->up
        {
          console.log('up')
          this.goUp()
        }
        else if(keyCode === 's' || keyCode === 'S' || keyCode === 'ArrowDown')	//	s-->down
        {
          console.log('down')
          this.goDown()
        }
        else if(keyCode === 'd' || keyCode === 'D' || keyCode === 'ArrowRight')	//	d-->right
        {
          console.log('right')
          this.goRight()
        }
      }
    },
    randomInt (m, n) {
      let aNumber = (n+1- m) * Math.random() + m
      return Math.floor(aNumber)
    },
    randomGenerate () {
      // 查询空格位置
      let emptyList = []
      this.matrix.forEach((row, rowIdx) => {
        row.forEach((grid, colIdx) => {
          if (grid === 0) {
            emptyList.push({rowIdx: rowIdx, colIdx: colIdx})
          }
        })
      })
      // 判断空格个数，若大于2，则随机生成两个下标
      if (emptyList.length === 1) {
        let tmp = this.randomInt(0, 1)
        tmp = tmp ? 2 : 4
        this.matrix[emptyList[0].rowIdx][emptyList[0].colIdx] = tmp
      } else  {
        let pos1 = this.randomInt(0, emptyList.length - 1)
        let pos2 = this.randomInt(0, emptyList.length - 1)
        while (pos2 === pos1) {
          pos2 = this.randomInt(0, emptyList.length - 1)
        }
        let tmp = this.randomInt(0, 1)
        let tmp1 = this.randomInt(0, 1)
        tmp = tmp ? 2 : 4
        tmp1 = tmp1 ? 2 : 4
        this.matrix[emptyList[pos1].rowIdx][emptyList[pos1].colIdx] = tmp
        this.matrix[emptyList[pos2].rowIdx][emptyList[pos2].colIdx] = tmp1
      }
      this.$forceUpdate()
    },

    restart () {
      this.matrix = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]
      this.isAdded = [[false, false, false, false], [false, false, false, false], [false, false, false, false], [false, false, false, false]]
      this.moveStep = [['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']]
      this.randomGenerate()
      this.score = 0
    },
    goLeft () {
      // 首先计算每个格子要移动多少，保证所有动画0.5秒内完成
      // 然后设定定时器 0.5秒后赋值
      // 注意加锁：在移动的时候不能按其他键
      if (this.isMove) {
        return
      }
      this.isMove = true
      this.isMoveLeft = true
      let aimMatrix = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]
      this.matrix.forEach((row, index) => {
        row.forEach((col, idx) => {
          aimMatrix[index][idx] = this.matrix[index][idx]
          // console.log('index idx col', index, idx, col)
        })
      })
      // console.log('目标矩阵 0',aimMatrix)
      for (let index = 0; index < 4; index++) {
        for (let idx = 0; idx < 4; idx++) {
          if (this.matrix[index][idx] !== 0) {
            let i = idx - 1
            let step = 0
            while(i >= 0) {
              // 如果目标矩阵的位置为0，则左移1
              if (aimMatrix[index][i] === 0) {
                step += 1
                i -= 1
                if (i < 0) {
                  aimMatrix[index][0] = this.matrix[index][idx]
                }
              } else {
                // 如果目标矩阵的位置不为0，且等于原矩阵，则该格子没加过，
                // 若该idx格子等于i格子，则左移1，并更新目标矩阵i
                if (!this.isAdded[index][i] && aimMatrix[index][i] === this.matrix[index][idx]) {
                  step += 1
                  aimMatrix[index][i] *= 2
                  this.isAdded[index][i] = true
                  this.score += aimMatrix[index][i]
                } else {
                  aimMatrix[index][i + 1] = this.matrix[index][idx]
                }
                i = -1
              }
            }
            console.log(index, idx, step)
            if (step > 0) {
              aimMatrix[index][idx] = 0
              this.moveStep[index][idx] = 'left' + step
            }
            // console.log('目标矩阵 中间过程', aimMatrix)
          }
        }
      }
      console.log('目标矩阵', aimMatrix)
      console.log('移动矩阵', this.moveStep)
      this.$forceUpdate()
      setTimeout(() => {
        let isSame = this.judgeMatrixSame(this.matrix, aimMatrix)
        this.matrix = aimMatrix
        this.isMove = false
        this.isMoveLeft = false
        this.isAdded = [[false, false, false, false], [false, false, false, false], [false, false, false, false], [false, false, false, false]]
        this.moveStep = [['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']]
        if (!isSame) {
          this.randomGenerate()
        }
        if (this.judgeOver()) {
          this.isOver = true
        }
      }, 200)



      // 之前的代码
      // let hhhh = []
      // let isMove = false
      // this.matrix.forEach(row => {
      //   let tmpRow = row.filter(grid => grid)
      //   console.log('tmpRow', tmpRow)
      //   let i = 0
      //   let res = []
      //   while (i < tmpRow.length) {
      //     isMove = true
      //     if (i + 1 < tmpRow.length && tmpRow[i] === tmpRow[i+1]) {
      //       res.push(tmpRow[i] + tmpRow[i + 1])
      //       i += 2
      //     } else {
      //       res.push(tmpRow[i])
      //       i++
      //     }
      //   }
      //   row = [...res, ...[0, 0, 0, 0]].slice(0, 4)
      //   hhhh.push(row)
      // })
      // if (isMove) {
      //   this.randomGenerate()
      //   this.matrix = hhhh
      //   console.log('matrix ',this.matrix)
      //   // this.$forceUpdate()
      // }
    },
    goRight () {
      if (this.isMove) {
        console.log('right return!!!!!!!!!!!!!!!')
        return
      }
      this.isMove = true
      this.isMoveRight = true
      let aimMatrix = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]
      this.matrix.forEach((row, index) => {
        row.forEach((col, idx) => {
          aimMatrix[index][idx] = col
        })
      })
      console.log('目标矩阵 0',aimMatrix)
      for (let index = 0; index < 4; index++) {
        for (let idx = 3; idx >= 0; idx--) {
          if (this.matrix[index][idx] !== 0) {
            let i = idx + 1
            let step = 0
            while(i <= 3) {
              // 如果目标矩阵的位置为0，则右移1
              if (aimMatrix[index][i] === 0) {
                step += 1
                i += 1
                if (i > 3) {
                  aimMatrix[index][3] = this.matrix[index][idx]
                }
              } else {
                // 如果目标矩阵的位置不为0，且等于原矩阵，则该格子没加过，
                // 若该idx格子等于i格子，则右移1，并更新目标矩阵i
                if (!this.isAdded[index][i] && aimMatrix[index][i] === this.matrix[index][idx]) {
                  step += 1
                  aimMatrix[index][i] *= 2
                  this.isAdded[index][i] = true
                  this.score += aimMatrix[index][i]
                } else {
                  aimMatrix[index][i - 1] = this.matrix[index][idx]
                }
                i = 4
              }
            }
            console.log(index, idx, step)
            if (step > 0) {
              aimMatrix[index][idx] = 0
              this.moveStep[index][idx] = 'right' + step
            }
          }
        }
      }
      console.log('目标矩阵', aimMatrix)
      console.log('移动矩阵', this.moveStep)
      this.$forceUpdate()
      setTimeout(() => {
        let isSame = this.judgeMatrixSame(this.matrix, aimMatrix)
        this.matrix = aimMatrix
        this.isMove = false
        this.isMoveRight = false
        this.isAdded = [[false, false, false, false], [false, false, false, false], [false, false, false, false], [false, false, false, false]]
        this.moveStep = [['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']]
        if (!isSame) {
          this.randomGenerate()
        }
        if (this.judgeOver()) {
          this.isOver = true
        }
      }, 200)
    },
    goUp () {
      if (this.isMove) {
        return
      }
      this.isMove = true
      this.isMoveUp = true
      let aimMatrix = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]
      this.matrix.forEach((row, index) => {
        row.forEach((col, idx) => {
          aimMatrix[index][idx] = col
        })
      })
      console.log('目标矩阵 0',aimMatrix)
      for (let idx = 0; idx < 4; idx++) {
        for (let index = 0; index < 4; index++) {
          if (this.matrix[index][idx] !== 0) {
            let i = index - 1
            let step = 0
            while(i >= 0) {
              // 如果目标矩阵的位置为0，则左移1
              if (aimMatrix[i][idx] === 0) {
                step += 1
                i -= 1
                if (i < 0) {
                  aimMatrix[0][idx] = this.matrix[index][idx]
                }
              } else {
                // 如果目标矩阵的位置不为0，且等于原矩阵，则该格子没加过，
                // 若该idx格子等于i格子，则左移1，并更新目标矩阵i
                if (!this.isAdded[i][idx] && aimMatrix[i][idx] === this.matrix[index][idx]) {
                  step += 1
                  aimMatrix[i][idx] *= 2
                  this.isAdded[i][idx] = true
                  this.score += aimMatrix[i][idx]
                } else {
                  aimMatrix[i + 1][idx] = this.matrix[index][idx]
                }
                i = -1
              }
            }
            console.log(index, idx, step)
            if (step > 0) {
              aimMatrix[index][idx] = 0
              this.moveStep[index][idx] = 'up' + step
            }
          }
        }
      }
      console.log('目标矩阵', aimMatrix)
      console.log('移动矩阵', this.moveStep)
      this.$forceUpdate()
      setTimeout(() => {
        let isSame = this.judgeMatrixSame(this.matrix, aimMatrix)
        this.matrix = aimMatrix
        this.isMove = false
        this.isMoveUp = false
        this.isAdded = [[false, false, false, false], [false, false, false, false], [false, false, false, false], [false, false, false, false]]
        this.moveStep = [['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']]
        if (!isSame) {
          this.randomGenerate()
        }
        if (this.judgeOver()) {
          this.isOver = true
        }
      }, 200)
    },
    goDown () {
      if (this.isMove) {
        console.log('right return!!!!!!!!!!!!!!!')
        return
      }
      this.isMove = true
      this.isMoveDown = true
      let aimMatrix = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]
      this.matrix.forEach((row, index) => {
        row.forEach((col, idx) => {
          aimMatrix[index][idx] = col
        })
      })
      console.log('目标矩阵 0',aimMatrix)
      for (let idx = 0; idx < 4; idx++) {
        for (let index = 3; index >= 0; index--) {
          if (this.matrix[index][idx] !== 0) {
            let i = index + 1
            let step = 0
            while(i <= 3) {
              // 如果目标矩阵的位置为0，则右移1
              if (aimMatrix[i][idx] === 0) {
                step += 1
                i += 1
                if (i > 3) {
                  aimMatrix[3][idx] = this.matrix[index][idx]
                }
              } else {
                // 如果目标矩阵的位置不为0，且等于原矩阵，则该格子没加过，
                // 若该idx格子等于i格子，则右移1，并更新目标矩阵i
                if (!this.isAdded[i][idx] && aimMatrix[i][idx] === this.matrix[index][idx]) {
                  step += 1
                  aimMatrix[i][idx] *= 2
                  this.isAdded[i][idx] = true
                  this.score += aimMatrix[i][idx]
                } else {
                  aimMatrix[i - 1][idx] = this.matrix[index][idx]
                }
                i = 4
              }
            }
            console.log(index, idx, step)
            if (step > 0) {
              aimMatrix[index][idx] = 0
              this.moveStep[index][idx] = 'down' + step
            }
          }
        }
      }
      console.log('目标矩阵', aimMatrix)
      console.log('移动矩阵', this.moveStep)
      this.$forceUpdate()
      setTimeout(() => {
        let isSame = this.judgeMatrixSame(this.matrix, aimMatrix)
        this.matrix = aimMatrix
        this.isMove = false
        this.isMoveDown = false
        this.isAdded = [[false, false, false, false], [false, false, false, false], [false, false, false, false], [false, false, false, false]]
        this.moveStep = [['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']]
        if (!isSame) {
          this.randomGenerate()
        }
        if (this.judgeOver()) {
          this.isOver = true
        }
      }, 200)
    },
    judgeMatrixSame (matrix1, matrix2) {
      for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
          if (matrix1[i][j] !== matrix2[i][j]) {
            return false
          }
        }
      }
      return true
    },
    judgeOver () {
      let judge = (i, j) => {
        if (i >=0 && i < 4 && j >= 0 && j < 4) {
          return true
        }
        return false
      }
      for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
          if (this.matrix[i][j] === 0) {
            return false
          }
          if (judge(i + 1, j)) {
            if (this.matrix[i + 1][j] === 0 || this.matrix[i][j] === this.matrix[i + 1][j]) {
              return false
            }
          }
          if (judge(i, j + 1)) {
            if (this.matrix[i][j + 1] === 0 || this.matrix[i][j] === this.matrix[i][j + 1]) {
              return false
            }
          }
        }
      }
      return true
    },
    setHistory () {
      let tmpBestScore = localStorage.getItem('buddyOJ2048BestScore')
      localStorage.setItem('buddyOJ2048BestScore', Math.max(this.score, Number(tmpBestScore)))
      localStorage.setItem('buddyOJ2048Matrix', JSON.stringify(this.matrix))
      console.log('destroy', localStorage.getItem('buddyOJ2048BestScore'))
      return true
    }
  },
  created() {
    // this.matrix = [[16384, 32768, 65536, 131072], [16, 32, 64, 128], [256, 512, 1024, 2048], [4096, 8192, 16384, 32768]]
    let tmpBestScore = localStorage.getItem('buddyOJ2048BestScore')
    let tmpMatrix = localStorage.getItem('buddyOJ2048Matrix')
    if (tmpBestScore) {
      this.bestScore = Number(tmpBestScore)
    }
    if (tmpMatrix) {
      this.matrix = JSON.parse(tmpMatrix)
    } else {
      this.randomGenerate()
    }
  },
  mounted() {
    window.addEventListener("keydown", this.moveBox, false)
    window.addEventListener('beforeunload', this.setHistory)
  },
}
</script>

<style lang="less" scoped>
.two-zero-four-eight {
  display: flex;
  flex-direction: column;align-items: center;
  .menu {
    width: 450px;
    height: 100px;
    padding: 20px 0;
    display: flex;
    justify-content: space-between;
    .scores {
      width: 200px;
      height: 60px;
      background-color: rgb(188, 174, 165);
      color: #000000;
      display: flex;
      justify-content: space-between;
      .cur-score, .best-score {
        width: 90px;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        .title {
          font-size: 14px;
        }
        .val {
          font-size: 20px;
        }
      }
    }
    .btns {
      width: 200px;
      height: 60px;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      .restart {
        cursor: pointer;
        width: 60px;
        height: 60px;
        line-height: 60px;
        background-color: rgb(237, 206, 98);
        color: #FFFFFF;
        font-size: 40px;
      }
    }
  }
  .grid-area {
    width: 450px;
    height: 450px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background-color: rgb(188, 174, 165);
    position: relative;
    .game-over {
      width: 450px;
      height: 450px;
      background-color: rgba(204, 191, 175, 0.5);
      color: orange;
      position: absolute;
      top: 0;
      left: 0;
    }
    .grid-row {
      width: 100%;
      display: flex;
      justify-content: space-around;
      .grid-outer {
        width: 100px;
        height: 100px;
        text-align: center;
        line-height: 100px;
        font-size: 30px;
        font-weight: bold;
        border-radius: 10px;
        color: #FFFFFF;
        background-color: rgb(204, 191, 175);
        .grid {
          border-radius: 10px;
        }


        .left1 {
          animation: 0.2s linear 0s left1;
        }
        .left2 {
          animation: 0.2s linear 0s left2;
        }
        .left3 {
          animation: 0.2s linear 0s left3;
        }
        @keyframes left1 {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-120px);
          }
        }
        @keyframes left2 {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-220px);
          }
        }
        @keyframes left3 {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-330px);
          }
        }

        .right1 {
          animation: 0.2s linear 0s right1;
        }
        .right2 {
          animation: 0.2s linear 0s right2;
        }
        .right3 {
          animation: 0.2s linear 0s right3;
        }
        @keyframes right1 {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(120px);
          }
        }
        @keyframes right2 {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(220px);
          }
        }
        @keyframes right3 {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(330px);
          }
        }

        .up1 {
          animation: 0.2s linear 0s up1;
        }
        .up2 {
          animation: 0.2s linear 0s up2;
        }
        .up3 {
          animation: 0.2s linear 0s up3;
        }
        @keyframes up1 {
          from {
            transform: translateY(0);
          }
          to {
            transform: translateY(-120px);
          }
        }
        @keyframes up2 {
          from {
            transform: translateY(0);
          }
          to {
            transform: translateY(-220px);
          }
        }
        @keyframes up3 {
          from {
            transform: translateY(0);
          }
          to {
            transform: translateY(-330px);
          }
        }

        .down1 {
          animation: 0.2s linear 0s down1;
        }
        .down2 {
          animation: 0.2s linear 0s down2;
        }
        .down3 {
          animation: 0.2s linear 0s down3;
        }
        @keyframes down1 {
          from {
            transform: translateY(0);
          }
          to {
            transform: translateY(120px);
          }
        }
        @keyframes down2 {
          from {
            transform: translateY(0);
          }
          to {
            transform: translateY(220px);
          }
        }
        @keyframes down3 {
          from {
            transform: translateY(0);
          }
          to {
            transform: translateY(330px);
          }
        }


        .c0 {
          background-color: rgb(204, 191, 175);
          color: rgb(204, 191, 175);
        }
        .c2 {
          background-color: rgb(242, 242, 219);
          color: rgb(109, 99, 89);
        }
        .c4 {
          background-color: rgb(237, 224, 207);
          color: rgb(109, 99, 89);
        }
        .c8 {
          background-color: rgb(246, 176, 125);
        }
        .c16 {
          background-color: rgb(244, 149, 101);
        }
        .c32 {
          background-color: rgb(243, 125, 97);
        }
        .c64 {
          background-color: rgb(250, 95, 95);
        }
        .c128 {
          background-color: rgb(237, 208, 116);
        }
        .c256 {
          background-color: rgb(237, 206, 98);
        }
        .c512 {
          background-color: rgb(239, 199, 85);
        }
        .c1024 {
          background-color: rgb(238, 200, 65);
        }
        .c2048 {
          background-color: rgb(255, 70, 70);
        }
        .c4096 {
          background-color: rgb(230, 10, 10);
        }
        .c8192 {
          background-color: rgb(150, 50, 50);
        }
        .c16384 {
          background-color: rgb(100, 70, 70);
        }
        .c32768 {
          background-color: rgb(80, 70, 70);
        }
        .c65536 {
          background-color: rgb(50, 50, 50);
        }
        .c131072 {
          background-color: rgb(20, 20, 20);
          font-size: 25px;
        }

      }
    }
  }
}
</style>
<template>
  <div class="cn-chess">
    <div class="checker-border-outer">
      <div class="checker-border">
        <div class="row" v-for="(row, rowId) in chessMap" :key="rowId">
          <div class="col" v-for="(col, colId) in row" :key="colId"
               :style="{
                 width: 40 + 'px',
                 height: 40 + 'px',
                 'border-radius': 50 + '%',
                 // 'background-color': 'black',
                 position: 'absolute',
                 'z-index': 999,
                 top: rowId * 60 - 20 + 'px',
                 left: colId * 60 - 20 + 'px',
                 cursor: 'pointer'
               }">
            <div :class="{
              'chess': true,
              'red-side': parseInt(col) > 0,
              'black-side': parseInt(col) < 0,
            }" v-if="col !== '0'">
              {{chessInfo[col]}}
            </div>
          </div>
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
    return {
      chessInfo,
      chessMap: chessMap,
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
        }
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
<template>
  <div class="css-paint">
    <div class="hair-outer1">
      <div class="hair hair1"></div>
      <div class="hair hair2"></div>
      <div class="hair bg-hair hair3"></div>
      <div class="hair bg-hair hair4"></div>
      <div class="hair bg-hair hair5"></div>
      <div class="hair bg-hair hair6"></div>
      <div class="hair bg-hair hair7"></div>
      <div class="hair bg-hair hair8"></div>
      <div class="hair bg-hair hair9"></div>
      <div class="hair bg-hair hair10"></div>
      <div class="hair bg-hair hair11"></div>
      <div class="hair bg-hair hair12"></div>
      <div class="hair bg-hair hair13"></div>
      <div class="hair bg-hair hair14"></div>
      <div class="hair bg-hair hair15"></div>
      <div class="hair bg-hair hair16"></div>
      <div class="hair bg-hair hair17"></div>
      <div class="hair bg-hair hair18"></div>
      <div class="hair bg-hair hair19"></div>
      <div class="hair bg-hair hair20"></div>
      <div class="hair bg-hair hair21"></div>
      <div class="hair bg-hair hair22"></div>
      <div class="hair bg-hair hair23"></div>
      <div class="hair bg-hair hair24"></div>
      <div class="hair bg-hair hair25"></div>
      <div class="hair bg-hair hair26"></div>
      <div class="hair bg-hair hair27"></div>
      <div class="hair bg-hair hair28"></div>
      <div class="hair bg-hair hair29"></div>
      <div class="hair bg-hair hair30"></div>
      <div class="hair bg-hair hair31"></div>
      <div class="hair bg-hair hair32"></div>
      <div class="hair bg-hair hair33"></div>
      <div class="hair bg-hair hair34"></div>
      <div class="hair bg-hair hair35"></div>
      <div class="hair bg-hair hair36"></div>
      <div class="hair bg-hair hair37"></div>
      <div class="hair bg-hair hair38"></div>
      <div class="hair bg-hair hair39"></div>
      <div class="hair bg-hair hair40"></div>
      <div class="hair bg-hair hair41"></div>
      <div class="hair bg-hair hair42"></div>
      <div class="hair bg-hair hair43"></div>
      <div class="hair bg-hair hair44"></div>
      <div class="hair bg-hair hair45"></div>
      <div class="hair bg-hair hair46"></div>
      <div class="hair bg-hair hair47"></div>
      <div class="hair bg-hair hair48"></div>
      <div class="hair bg-hair hair49"></div>
      <div class="hair bg-hair hair50"></div>
      <div class="hair bg-hair hair51"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CssPaint"
}
</script>

<style lang="less" scoped>
// 茶色 rgb(231, 101, 8)
.css-paint {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  .hair-outer1 {
    width: 80px;
    height: 106px;
    //border: 1px solid red;
    //border-radius: 0% 97% 97% 0% e('/') 0% 50% 50% 0%;
    //border-radius: 0% 97% 10% 0% e('/') 0% 60% 40% 0%;
    border-radius: 0% 97% 5% 0% e('/') 0% 60% 40% 0%;
    position: absolute;
    top: 200px;
    left: 500px;
    overflow: hidden;
    transform: rotateY(180deg);
    z-index: 1;
    .hair {
      position: absolute;
      top: -1%;
      border-radius: inherit;
      margin: auto;
      opacity: .5;
      // 茶色
      //border: 2px double rgba(231, 101, 8, 0.16);
      //box-shadow: 0 3px 4px 1px rgb(211, 101, 8), inset 0 0 2px 1px rgb(211, 101, 8);

      // 黑色
      border: 2px double rgba(0, 0, 0, 0.16);
      box-shadow: 0 3px 4px 1px rgb(50, 50, 50), inset 0 0 2px 1px rgb(50, 50, 50);

      // 金色
      //border: 2px double rgba(138,116,29,0.16);
      //box-shadow: 0 3px 4px 1px #95835d, inset 0 0 2px 1px #ab9c7a;
    }
    .bg-hair {
      // 茶色
      //background-color: #D2691E;
      //background-image: linear-gradient(to bottom, #F4A460 1%, #FFDAB9 25%, #EFA468 46%, #CD853F 61%);

      // 黑色
      background-color: #202020;
      //background-image: linear-gradient(to bottom, #272727 1%, #303030 25%, #302723 46%, #252525 61%);
      background-image: linear-gradient(to bottom, #696969 1%, #303030 25%, #696969 46%, #353535 61%);

      // 金色
      //background-color: #bfab87;
      //background-image: linear-gradient(to bottom, #d7d1c3 1%, #edece7 25%, #dcd8ce 46%, #c1b8a8 61%);
    }
    .hair1 {
      //border: 1px solid red;
      right: 0;
      height: 103%;
      width: 103%;
      background: none;
      //box-shadow: inset 1px 1px 2px rgb(113, 59, 18), inset 1px -1px 2px rgb(113, 59, 18);
    }
    .hair2 {
      right: 3%;
      height: 124%;
      width: 106%;
      background: none;
    }
    .hair3 {
      right: 4%;
      height: 104%;
      width: 103%;
      //background: none;
    }
    .hair4 {
      right: 5%;
      height: 106%;
      width: 116%;
      //background-image: linear-gradient(to bottom, #F4A460 1%, #FFDAB9 25%, #EFA468 46%, #CD853F 61%);
      //background-image: linear-gradient(to bottom, #FFA07A 1%, #FFDDCF 25%, #FAA07F 46%, #FF6347 61% );
    }
    .hair5 {
      right: 8%;
      height: 108%;
      width: 108%;
    }
    .hair6 {
      right: 10%;
      height: 110%;
      width: 153%;
    }
    .hair7 {
      right: 12%;
      height: 120%;
      width: 130%;
    }
    .hair8 {
      right: 14%;
      height: 114%;
      width: 114%;
    }
    .hair9 {
      right: 16%;
      height: 116%;
      width: 106%;
    }
    .hair10 {
      right: 18%;
      height: 118%;
      width: 158%;
    }
    .hair11 {
      right: 20%;
      height: 120%;
      width: 103%;
    }
    .hair13 {
      right: 24%;
      height: 124%;
      width: 104%;
    }
    .hair14 {
      right: 26%;
      height: 126%;
      width: 156%;
    }
    .hair15 {
      right: 28%;
      height: 128%;
      width: 108%;
    }
    .hair16 {
      right: 30%;
      height: 130%;
      width: 120%;
    }
    .hair18 {
      right: 34%;
      height: 134%;
      width: 154%;
    }
    .hair19 {
      right: 36%;
      height: 136%;
      width: 106%;
    }
    .hair20 {
      right: 37%;
      height: 138%;
      width: 118%;
    }
    .hair21 {
      right: 40%;
      height: 140%;
      width: 108%;
    }
    .hair22 {
      right: 42%;
      height: 142%;
      width: 142%;
    }
    .hair23 {
      right: 44%;
      height: 144%;
      width: 104%;
    }
    .hair24 {
      right: 46%;
      height: 146%;
      width: 146%;
    }
    .hair25 {
      right: 48%;
      height: 148%;
      width: 108%;
    }
    .hair26 {
      right: 50%;
      height: 146%;
      width: 146%;
    }
    .hair27 {
      right: 52%;
      height: 148%;
      width: 108%;
    }
    .hair28 {
      right: 54%;
      height: 146%;
      width: 146%;
    }
    .hair29 {
      right: 56%;
      height: 144%;
      width: 104%;
    }
    .hair30 {
      right: 58%;
      height: 138%;
      width: 138%;
    }
    .hair31 {
      right: 60%;
      height: 136%;
      width: 106%;
    }
    .hair32 {
      right: 62%;
      height: 134%;
      width: 134%;
    }
    .hair33 {
      right: 64%;
      height: 132%;
      width: 102%;
    }
    .hair34 {
      right: 66%;
      height: 130%;
      width: 130%;
    }
    .hair35 {
      right: 68%;
      height: 128%;
      width: 108%;
    }
    .hair36 {
      right: 70%;
      height: 126%;
      width: 126%;
    }
    .hair37 {
      right: 72%;
      height: 124%;
      width: 104%;
    }
    .hair38 {
      right: 74%;
      height: 120%;
      width: 120%;
    }
    .hair39 {
      right: 76%;
      height: 118%;
      width: 108%;
    }
    .hair40 {
      right: 78%;
      height: 118%;
      width: 158%;
    }
    .hair41 {
      right: 80%;
      height: 116%;
      width: 106%;
    }
    .hair42 {
      right: 82%;
      height: 114%;
      width: 114%;
    }
    .hair43 {
      right: 84%;
      height: 110%;
      width: 104%;
    }
    .hair44 {
      right: 86%;
      height: 108%;
      width: 128%;
    }
    .hair45 {
      right: 88%;
      height: 106%;
      width: 106%;
    }
    .hair46 {
      right: 90%;
      height: 104%;
      width: 134%;
    }
    .hair47 {
      right: 92%;
      height: 102%;
      width: 102%;
    }
    .hair48 {
      right: 94%;
      height: 100%;
      width: 140%;
    }
    .hair49 {
      right: 96%;
      height: 103%;
      width: 115%;
    }
    .hair50 {
      right: 98%;
      height: 103%;
      width: 103%;
    }
  }
}
</style>
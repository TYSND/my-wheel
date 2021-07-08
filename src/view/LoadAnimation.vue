<template>
  <div class="load-animation">
    <div class="buddyoj-loading">
      <div class="buddy">
        <div class="txt-outer">
          <div class="txt">
<!--            Buddy-->
            <span class="letter1">B</span>
            <span class="letter2">u</span>
            <span class="letter3">d</span>
            <span class="letter4">d</span>
            <span class="letter5">y</span>
          </div>
        </div>
        <div class="occlude"></div>
        <div class="lines">
          <div class="line line1"></div>
          <div class="line line2"></div>
          <div class="line line3"></div>
          <div class="line line4"></div>
          <div class="line line5"></div>
          <div class="line line6"></div>
          <div class="line line7"></div>
          <div class="line line8"></div>
          <div class="line line9"></div>
          <div class="line line10"></div>
          <div class="line line11"></div>
          <div class="line line12"></div>
          <div class="line line13"></div>
          <div class="line line14"></div>
          <div class="line line15"></div>
          <div class="line line16"></div>
        </div>
      </div>
      <div class="online-judge">
        Online Judge
<!--        <span class="letter6">O</span>-->
<!--        <span class="letter7">n</span>-->
<!--        <span class="letter8">l</span>-->
<!--        <span class="letter9">i</span>-->
<!--        <span class="letter10">n</span>-->
<!--        <span class="letter11">e</span>-->

<!--        <span class="letter12">J</span>-->
<!--        <span class="letter13">u</span>-->
<!--        <span class="letter14">d</span>-->
<!--        <span class="letter15">g</span>-->
<!--        <span class="letter16">e</span>-->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoadAnimation"
}
</script>

<style lang="less" scoped>
.load-animation {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .buddyoj-loading {
    //width: 400px;
    .buddy {
      position: relative;
      overflow: hidden;
      .txt-outer {
        width: 200px;
        height: 52px;
        //border-bottom: 52px solid black;
        //border-right: 30px solid transparent;
        background-color: black;
        position: relative;
        .txt {
          color: #FFFFFF;
          position: absolute;
          //top: -50px;
          left: 5px;
          font-size: 35px;
          font-weight: bold;
        }
      }
      .occlude {
        //border: 1px solid red;
        width: 60px;
        height: 70px;
        position: absolute;
        top: -20px;
        left: 182px;
        transform: rotate(-30deg);
        background-color: #FFFFFF;
        z-index: 10;
      }
      .lines {
        //border: 1px solid red;
        background-color: #FFFFFF;
        width: 60px;
        height: 60px;
        position: absolute;
        top: 11px;
        left: 150px;
        transform: rotate(30deg);
        display: flex;
        justify-content: space-around;
        .line {
          width: 2px;
          height: 100%;
          background-color: black;
          opacity: 0;
        }
        .line:nth-child(1) {
          animation: 1.6s infinite showLine;
        }
        .line:nth-child(2) {
          animation: 1.6s 0.1s infinite showLine;
        }
        .line:nth-child(3) {
          animation: 1.6s 0.2s infinite showLine;
        }
        .line:nth-child(4) {
          animation: 1.6s 0.3s infinite showLine;
        }
        .line:nth-child(5) {
          animation: 1.6s 0.4s infinite showLine;
        }
        .line:nth-child(6) {
          animation: 1.6s 0.5s infinite showLine;
        }
        .line:nth-child(7) {
          animation: 1.6s 0.6s infinite showLine;
        }
        .line:nth-child(8) {
          animation: 1.6s 0.7s infinite showLine;
        }
        .line:nth-child(9) {
          animation: 1.6s 0.8s infinite showLine;
        }
        .line:nth-child(10) {
          animation: 1.6s 0.9s infinite showLine;
        }
        .line:nth-child(11) {
          animation: 1.6s 1s infinite showLine;
        }
        .line:nth-child(12) {
          animation: 1.6s 1.1s infinite showLine;
        }
        .line:nth-child(13) {
          animation: 1.6s 1.2s infinite showLine;
        }
        .line:nth-child(14) {
          animation: 1.6s 1.3s infinite showLine;
        }
        .line:nth-child(15) {
          animation: 1.6s 1.4s infinite showLine;
        }
        .line:nth-child(16) {
          animation: 1.6s 1.5s infinite showLine;
        }
        @keyframes showLine {
          0% {
            opacity: 1;
          }
          100% {
            opacity: 0;
          }
        }
      }
      //.lines {
      //  position: absolute;
      //  top: 11px;
      //  left: 160px;
      //  width: 60px;
      //  height: 60px;
      //  transform: rotate(-30deg);
      //  border: 1px solid red;
      //  background-position: 0 0, 15px 15px;
      //  background-size: 30px 30px;
      //  background-image:
      //      linear-gradient(-60deg,
      //        rgba(255, 255, 255, .2) 25%,
      //        transparent 25%,
      //        transparent 50%,
      //        rgba(255, 255, 255, .2) 50%,
      //        rgba(255, 255, 255, .2) 75%,
      //        transparent 75%,
      //        transparent);
      //}
    }
    .online-judge {
      text-align: left;
      font-size: 35px;
      color: black;
      font-weight: 900;
      font-style:italic;
      font-family: Agency FB;
    }

    .letter1 {
      //transform: translateY(-15px);
      display: inline-block;
      animation: 1.6s 0s infinite letter-jump;
    }
    .letter2 {
      //transform: translateY(-15px);
      display: inline-block;
      animation: 1.6s 0.1s infinite letter-jump;
    }
    .letter3 {
      //transform: translateY(-15px);
      display: inline-block;
      animation: 1.6s 0.2s infinite letter-jump;
    }
    .letter4 {
      //transform: translateY(-15px);
      display: inline-block;
      animation: 1.6s 0.3s infinite letter-jump;
    }
    .letter5 {
      //transform: translateY(-15px);
      display: inline-block;
      animation: 1.6s 0.4s infinite letter-jump;
    }
    .letter6 {
      //transform: translateY(-15px);
      display: inline-block;
      animation: 1.6s 0.5s infinite letter-jump;
    }
    .letter7 {
      //transform: translateY(-15px);
      display: inline-block;
      animation: 1.6s 0.6s infinite letter-jump;
    }
    .letter8 {
      //transform: translateY(-15px);
      display: inline-block;
      animation: 1.6s 0.7s infinite letter-jump;
    }
    .letter9 {
      //transform: translateY(-15px);
      display: inline-block;
      animation: 1.6s 0.8s infinite letter-jump;
    }
    .letter10 {
      //transform: translateY(-15px);
      display: inline-block;
      animation: 1.6s 0.9s infinite letter-jump;
    }
    .letter11 {
      //transform: translateY(-15px);
      display: inline-block;
      animation: 1.6s 1s infinite letter-jump;
    }
    .letter12 {
      //transform: translateY(-15px);
      display: inline-block;
      animation: 1.6s 1.1s infinite letter-jump;
    }
    .letter13 {
      //transform: translateY(-15px);
      display: inline-block;
      animation: 1.6s 1.2s infinite letter-jump;
    }
    .letter14 {
      //transform: translateY(-15px);
      display: inline-block;
      animation: 1.6s 1.3s infinite letter-jump;
    }
    .letter15 {
      //transform: translateY(-15px);
      display: inline-block;
      animation: 1.6s 1.4s infinite letter-jump;
    }
    .letter16 {
      //transform: translateY(-15px);
      display: inline-block;
      animation: 1.6s 1.5s infinite letter-jump;
    }
    @keyframes letter-jump {
      50% {
        transform: translateY(-8px);
      }
    }
  }
}
</style>
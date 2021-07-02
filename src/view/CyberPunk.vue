<template>
  <div class="cyber-punk">
    <div class="anniu">
      TYSND
      <div class="left-occlude"></div>
      <div class="bottom-occlude"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CyberPunk",
  data () {
    return {

    }
  },
}
</script>

<style lang="less" scoped>
.cyber-punk {
  width: 100%;
  height: 100vh;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  //.anniu {
  //  position: relative;
  //  .left-occlude {
  //    width: 50px;
  //    height: 26px;
  //    background-color: black;
  //    position: absolute;
  //    left: -50px;
  //    bottom: -3px;
  //  }
  //  .bottom-occlude {
  //    width: 80px;
  //    height: 50px;
  //    background-color: black;
  //    position: absolute;
  //    left: -40px;
  //    bottom: -50px;
  //  }
  //}
  .anniu,.anniu::after{
    font-family: 'Do Hyeon', sans-serif;
    width: 260px;
    height: 80px;
    text-align: center;
    font-size: 22px;
    line-height: 80px;
    color: rgb(255, 251, 251);
    //background: linear-gradient(30deg,rgb(255, 16, 50) 5%,rgb(255, 141, 255) 5% 95%,  rgb(0, 255, 149) 95%);
    background: linear-gradient(30deg,rgb(248, 240, 5) 10%,rgb(255, 141, 255) 10% 95%,  rgb(0, 255, 149) 95%);
    //box-shadow: 5px 0 0 rgb(0, 204, 255),
    //            0 0 5px rgb(255, 141, 255),
    //            0 0 25px rgb(255, 141, 255),
    //            0 0 50px rgb(255, 141, 255),
    //            0 0 200px rgb(255, 141, 255);
    box-shadow: 5px 0 0 rgb(0, 204, 255);
    cursor: pointer;
    position: relative;

  }
  .anniu::after{
    content: 'TYSND';
    position: absolute;
    top: 0;
    left: 0;
    text-shadow: -5px -2px 0 rgb(0, 183, 255),
    5px 2px 0 rgb(0, 255, 115) ;
    visibility: hidden;
  }
  //.anniu::after{
  //  animation: san 1s ;
  //  animation-timing-function: steps(1, end);
  //}
  .anniu:hover::after{
    animation: san 1s ;
    animation-timing-function: steps(1, end);
  }
  @keyframes flash {
    0% {
      text-shadow: 0 0 0;
      //box-shadow: 5px 0 0 rgb(0, 204, 255);
      background: black;
    }
    20% {
      text-shadow: 0 0 0;
      box-shadow: 5px 0 0 rgb(0, 204, 255),
      0 0 5px rgb(255, 141, 255),
      0 0 25px rgb(255, 141, 255),
      0 0 50px rgb(255, 141, 255),
      0 0 200px rgb(255, 141, 255);
      background: linear-gradient(30deg,rgb(248, 240, 5) 10%,rgb(255, 141, 255) 10% 95%,  rgb(0, 255, 149) 95%);
    }
    30% {
      text-shadow: 0 0 0;
      //box-shadow: 5px 0 0 rgb(0, 204, 255);
      background: black;
    }
    50% {
      box-shadow: 5px 0 0 rgb(0, 204, 255),
      0 0 5px rgb(255, 141, 255),
      0 0 25px rgb(255, 141, 255),
      0 0 50px rgb(255, 141, 255),
      0 0 200px rgb(255, 141, 255);
      background: linear-gradient(30deg,rgb(248, 240, 5) 10%,rgb(255, 141, 255) 10% 95%,  rgb(0, 255, 149) 95%);
    }
    55% {
      text-shadow: 0 0 0;
      //box-shadow: 5px 0 0 rgb(0, 204, 255);
      background: black;
    }
    60% {
      box-shadow: 5px 0 0 rgb(0, 204, 255),
      0 0 5px rgb(255, 141, 255),
      0 0 25px rgb(255, 141, 255),
      0 0 50px rgb(255, 141, 255),
      0 0 200px rgb(255, 141, 255);
      background: linear-gradient(30deg,rgb(248, 240, 5) 10%,rgb(255, 141, 255) 10% 95%,  rgb(0, 255, 149) 95%);
    }
    65% {
      text-shadow: 0 0 0;
      box-shadow: 5px 0 0 rgb(0, 204, 255);
      background: black;
    }
    70% {
      box-shadow: 5px 0 0 rgb(0, 204, 255),
      0 0 5px rgb(255, 141, 255),
      0 0 25px rgb(255, 141, 255),
      0 0 50px rgb(255, 141, 255),
      0 0 200px rgb(255, 141, 255);
      background: linear-gradient(30deg,rgb(248, 240, 5) 10%,rgb(255, 141, 255) 10% 95%,  rgb(0, 255, 149) 95%);
    }
    92% {
      box-shadow: 5px 0 0 rgb(0, 204, 255);
      background: black;
    }
    95% {
      box-shadow: 5px 0 0 rgb(0, 204, 255),
      0 0 5px rgb(255, 141, 255),
      0 0 25px rgb(255, 141, 255),
      0 0 50px rgb(255, 141, 255),
      0 0 200px rgb(255, 141, 255);
      background: linear-gradient(30deg,rgb(248, 240, 5) 10%,rgb(255, 141, 255) 10% 95%,  rgb(0, 255, 149) 95%);
    }
    100% {
      box-shadow: 5px 0 0 rgb(0, 204, 255),
      0 0 5px rgb(255, 141, 255),
      0 0 25px rgb(255, 141, 255),
      0 0 50px rgb(255, 141, 255),
      0 0 200px rgb(255, 141, 255);
      background: linear-gradient(30deg,rgb(248, 240, 5) 10%,rgb(255, 141, 255) 10% 95%,  rgb(0, 255, 149) 95%);
    }
  }
  @keyframes san{
    0%{
      clip-path: inset(20% -5px  60%  0);
      transform: translate(-6px,5px);
      visibility: visible;
    }
    10%{
      clip-path: inset(50% -5px  30%  0);
      transform: translate(6px,-5px);
    }
    20%{
      clip-path: inset(20% -5px  60%  0);
      transform: translate(5px,0px);
    }
    30%{
      clip-path: inset(80% -5px  5%  0);
      transform: translate(-8px,5px);
    }
    40%{
      clip-path: inset(0 -5px  80%  0);
      transform: translate(-4px,-3px);
    }
    50%{
      clip-path: inset(50% -5px  30%  0);
      transform: translate(-6px,-5px);
    }
    60%{
      clip-path: inset(80% -5px  5%  0);
      transform: translate(-7px,5px);
    }
    70%{
      clip-path: inset(0 -5px  80%  0);
      transform: translate(3px,6px);
    }
    80%{
      clip-path: inset(50% -5px  30%  0);
      transform: translate(5px,5px);
    }
    90%{
      clip-path: inset(20% -5px  60%  0);
      transform: translate(6px,-5px);
    }
    100%{
      clip-path: inset(0 -5px  80%  0);
      transform: translate(1px,5px);
    }
  }
}
</style>
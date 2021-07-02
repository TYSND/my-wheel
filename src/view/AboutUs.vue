<template>
  <div class="about-us">
    <div class="first" v-if="firstShow" @dblclick="skipFirst">
      <div class="txt1">
        <div class="b-outer">
          <div class="b1 hehe"></div>
          <div class="b2 hehe"></div>
          <div class="b3 hehe"></div>
          <div class="b4 hehe"></div>
        </div>

        <div class="u-outer">
          <div class="u1 hehe"></div>
          <div class="u2 hehe"></div>
          <div class="u3 hehe"></div>
        </div>

        <div class="d1-outer">
          <div class="d11 hehe"></div>
          <div class="d12 hehe"></div>
        </div>

        <div class="d2-outer">
          <div class="d21 hehe"></div>
          <div class="d22 hehe"></div>
        </div>

        <div class="y-outer">
          <div class="y1 hehe"></div>
          <div class="y2 hehe"></div>
        </div>

        <div class="o-outer">
          <div class="o1 hehe"></div>
          <div class="o2 hehe"></div>
          <div class="o3 hehe"></div>
          <div class="o4 hehe"></div>
        </div>

        <div class="j-outer">
          <div class="j1 hehe"></div>
          <div class="j2 hehe"></div>
          <div class="j3 hehe"></div>
        </div>
      </div>

      <div class="txt2">
        <div class="b-outer">
          <div class="b1 hehe"></div>
          <div class="b2 hehe"></div>
          <div class="b3 hehe"></div>
          <div class="b4 hehe"></div>
        </div>

        <div class="u-outer">
          <div class="u1 hehe"></div>
          <div class="u2 hehe"></div>
          <div class="u3 hehe"></div>
        </div>

        <div class="d1-outer">
          <div class="d11 hehe"></div>
          <div class="d12 hehe"></div>
        </div>

        <div class="d2-outer">
          <div class="d21 hehe"></div>
          <div class="d22 hehe"></div>
        </div>

        <div class="y-outer">
          <div class="y1 hehe"></div>
          <div class="y2 hehe"></div>
        </div>

        <div class="o-outer">
          <div class="o1 hehe"></div>
          <div class="o2 hehe"></div>
          <div class="o3 hehe"></div>
          <div class="o4 hehe"></div>
        </div>

        <div class="j-outer">
          <div class="j1 hehe"></div>
          <div class="j2 hehe"></div>
          <div class="j3 hehe"></div>
        </div>
      </div>
<!--      <div class="tmp"></div>-->
    </div>
    <div class="other" v-if="!firstShow">
      other
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutUs",
  data () {
    return {
      firstShow: true
    }
  },
  methods: {
    skipFirst () {
      this.firstShow = false
    }
  }
}
</script>

<style lang="less" scoped>
.about-us {
  width: 100%;
  height: 100vh;
  position: relative;
  .first {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    //padding: 10px;
    display: flex;
    flex-wrap: wrap;
    .tmp {
      position: absolute;
      left: calc(50vw - 100px);
      top: calc(50vh - 100px);
      width: 200px;
      height: 200px;
      border: 1px solid red;
      border-radius: 50%;
    }

    .hehe {
      background-color: black;
      position: absolute;
    }
    .txt1 {
      .b-outer {
        position: absolute;
        top: calc(50vh - 100px);
        left: 200px;

        .b1 {
          width: 100px;
          height: 10px;
          clip-path: polygon(0 0, 100% 50%, 0 100%);
          top: 45px;
          left: 0;
          //2S = 1000
          animation: b1 1s forwards;
        }
        .b2 {
          width: 20px;
          height: 100px;
          //clip-path: polygon(0 0, 100% 50%, 0 100%, calc(100% - 12px) 50%);
          clip-path: polygon(0 0, 100% 50%, 0 100%, calc(100% - 12px) 50%);
          top: 0;
          left: 0;
          //2S = 1200
          animation: b2 1s forwards;
        }
        .b3 {
          width: 10px;
          height: 100px;
          clip-path: polygon(0 0, 100% 50%, 0 100%);
          top: 100px;
          left: 0;
          //2S = 1000
        }
        .b4 {
          width: 60px;
          height: 100px;
          clip-path: polygon(0 0, 100% 50%, 0 100%, calc(100% - 12px) 50%);
          top: 100px;
          left: 0;
          //2S = 1200
        }
      }
      .u-outer {
        position: absolute;
        top: calc(50vh - 100px);
        left: 280px;
        .u1 {
          width: 10px;
          height: 100px;
          clip-path: polygon(0 0, 100% 50%, 0 100%);
          top: 100px;
          left: 0;
          //2S = 1000
        }
        .u2 {
          width: 60px;
          height: 10px;
          clip-path: polygon(0 100%, 50% 0, 100% 100%);
          //clip-path: polygon(0 0, 50% 100%, 100% 0);
          top: 190px;
          left: 0;
          //2S = 600
        }
        .u3 {
          width: 10px;
          height: 100px;
          clip-path: polygon(100% 0, 0 50%, 100% 100%);
          top: 100px;
          left: 50px;
          //2S = 1000
        }
      }
      .d1-outer {
        position: absolute;
        top: calc(50vh - 100px);
        left: 360px;
        .d11 {
          width: 70px;
          height: 100px;
          clip-path: polygon(calc(100% - 10px) 0, 0 50%, 100% 100%, 15px 50%);
          top: 100px;
          left: 0;
          //2S = 1500
        }
        .d12 {
          width: 10px;
          height: 200px;
          clip-path: polygon(100% 0, 0 50%, 100% 100%);
          top: 0;
          left: 60px;
          //2S = 2000
        }
      }
      .d2-outer {
        position: absolute;
        top: calc(50vh - 100px);
        left: 440px;
        .d21 {
          width: 70px;
          height: 100px;
          clip-path: polygon(calc(100% - 10px) 0, 0 50%, 100% 100%, 15px 50%);
          top: 100px;
          left: 0;
          //2S = 1500
        }
        .d22 {
          width: 10px;
          height: 200px;
          clip-path: polygon(100% 0, 0 50%, 100% 100%);
          top: 0;
          left: 60px;
          //2S = 2000
        }
      }
      .y-outer {
        position: absolute;
        top: calc(50vh - 100px);
        left: 540px;
        .y1 {
          width: 75px;
          height: 100px;
          clip-path: polygon(0 0, 100% 100%, calc(50% + 8px) calc(50% - 6px));
          top: 100px;
          left: 0;
          //2S = 1250
        }
        .y2 {
          width: 100px;
          height: 200px;
          clip-path: polygon(calc(50% - 10px) 50%, 100% 0, 0 100%);
          top: 100px;
          left: 35px;
          //2S = 2000
        }
      }
      .o-outer {
        position: absolute;
        top: calc(50vh - 100px);
        left: 700px;
        .o1 {
          width: 80px;
          height: 10px;
          clip-path: polygon(0 0, 50% 100%, 100% 0);
          //clip-path: polygon(0 0, 50% 100%, 100% 0);
          top: 0px;
          left: 0;
        }
        .o2 {
          width: 10px;
          height: 200px;
          clip-path: polygon(100% 0, 0 50%, 100% 100%);
          top: 0;
          left: 70px;
        }
        .o3 {
          width: 80px;
          height: 10px;
          clip-path: polygon(0 100%, 50% 0, 100% 100%);
          //clip-path: polygon(0 0, 50% 100%, 100% 0);
          top: 190px;
          left: 0;
        }
        .o4 {
          width: 10px;
          height: 200px;
          clip-path: polygon(0 0, 100% 50%, 0 100%);
          top: 0;
          left: 0;
        }
      }
      .j-outer {
        position: absolute;
        top: calc(50vh - 100px);
        left: 820px;
        .j1 {
          width: 100px;
          height: 10px;
          clip-path: polygon(0 0, 50% 100%, 100% 0);
          //clip-path: polygon(0 0, 50% 100%, 100% 0);
          top: 0px;
          left: 0;
        }
        .j2 {
          width: 10px;
          height: 300px;
          clip-path: polygon(100% 0, 0 50%, 100% 100%);
          top: 0;
          left: 40px;
        }
        .j3 {
          width: 30px;
          height: 40px;
          clip-path: polygon(0 0, 100% 100%, calc(50% + 8px) calc(50% - 6px));
          top: 260px;
          left: 20px;
        }
      }
    }
    .txt2 {
      width: 100%;
      height: 400px;
      position: absolute;
      top: calc(50vh - 200px);
      //background-color: #409eff;
      visibility: hidden;
      //animation: san 1s 3s;
      //animation-timing-function: steps(1, end);
      .b-outer {
        position: absolute;
        //top: calc(50vh - 100px);
        top: 100px;
        left: 200px;
        .b1 {
          width: 10px;
          height: 100px;
          clip-path: polygon(0 0, 100% 50%, 0 100%);
          top: 0;
          left: 0;
          //2S = 1000
          //animation: b1 1s infinite;
        }
        .b2 {
          width: 60px;
          height: 100px;
          clip-path: polygon(0 0, 100% 50%, 0 100%, calc(100% - 12px) 50%);
          top: 0;
          left: 0;
          //2S = 1200
          //animation: b2 1s infinite;
        }
        .b3 {
          width: 10px;
          height: 100px;
          clip-path: polygon(0 0, 100% 50%, 0 100%);
          top: 100px;
          left: 0;
          //2S = 1000
        }
        .b4 {
          width: 60px;
          height: 100px;
          clip-path: polygon(0 0, 100% 50%, 0 100%, calc(100% - 12px) 50%);
          top: 100px;
          left: 0;
          //2S = 1200
        }
      }
      .u-outer {
        position: absolute;
        //top: calc(50vh - 100px);
        top: 100px;
        left: 280px;
        .u1 {
          width: 10px;
          height: 100px;
          clip-path: polygon(0 0, 100% 50%, 0 100%);
          top: 100px;
          left: 0;
          //2S = 1000
        }
        .u2 {
          width: 60px;
          height: 10px;
          clip-path: polygon(0 100%, 50% 0, 100% 100%);
          //clip-path: polygon(0 0, 50% 100%, 100% 0);
          top: 190px;
          left: 0;
          //2S = 600
        }
        .u3 {
          width: 10px;
          height: 100px;
          clip-path: polygon(100% 0, 0 50%, 100% 100%);
          top: 100px;
          left: 50px;
          //2S = 1000
        }
      }
      .d1-outer {
        position: absolute;
        //top: calc(50vh - 100px);
        top: 100px;
        left: 360px;
        .d11 {
          width: 70px;
          height: 100px;
          clip-path: polygon(calc(100% - 10px) 0, 0 50%, 100% 100%, 15px 50%);
          top: 100px;
          left: 0;
          //2S = 1500
        }
        .d12 {
          width: 10px;
          height: 200px;
          clip-path: polygon(100% 0, 0 50%, 100% 100%);
          top: 0;
          left: 60px;
          //2S = 2000
        }
      }
      .d2-outer {
        position: absolute;
        //top: calc(50vh - 100px);
        top: 100px;
        left: 440px;
        .d21 {
          width: 70px;
          height: 100px;
          clip-path: polygon(calc(100% - 10px) 0, 0 50%, 100% 100%, 15px 50%);
          top: 100px;
          left: 0;
          //2S = 1500
        }
        .d22 {
          width: 10px;
          height: 200px;
          clip-path: polygon(100% 0, 0 50%, 100% 100%);
          top: 0;
          left: 60px;
          //2S = 2000
        }
      }
      .y-outer {
        position: absolute;
        //top: calc(50vh - 100px);
        top: 100px;
        left: 540px;
        .y1 {
          width: 75px;
          height: 100px;
          clip-path: polygon(0 0, 100% 100%, calc(50% + 8px) calc(50% - 6px));
          top: 100px;
          left: 0;
          //2S = 1250
        }
        .y2 {
          width: 100px;
          height: 200px;
          clip-path: polygon(calc(50% - 10px) 50%, 100% 0, 0 100%);
          top: 100px;
          left: 35px;
          //2S = 2000
        }
      }
      .o-outer {
        position: absolute;
        //top: calc(50vh - 100px);
        top: 100px;
        left: 700px;
        .o1 {
          width: 80px;
          height: 10px;
          clip-path: polygon(0 0, 50% 100%, 100% 0);
          //clip-path: polygon(0 0, 50% 100%, 100% 0);
          top: 0px;
          left: 0;
        }
        .o2 {
          width: 10px;
          height: 200px;
          clip-path: polygon(100% 0, 0 50%, 100% 100%);
          top: 0;
          left: 70px;
        }
        .o3 {
          width: 80px;
          height: 10px;
          clip-path: polygon(0 100%, 50% 0, 100% 100%);
          //clip-path: polygon(0 0, 50% 100%, 100% 0);
          top: 190px;
          left: 0;
        }
        .o4 {
          width: 10px;
          height: 200px;
          clip-path: polygon(0 0, 100% 50%, 0 100%);
          top: 0;
          left: 0;
        }
      }
      .j-outer {
        position: absolute;
        //top: calc(50vh - 100px);
        top: 100px;
        left: 820px;
        .j1 {
          width: 100px;
          height: 10px;
          clip-path: polygon(0 0, 50% 100%, 100% 0);
          //clip-path: polygon(0 0, 50% 100%, 100% 0);
          top: 0px;
          left: 0;
        }
        .j2 {
          width: 10px;
          height: 300px;
          clip-path: polygon(100% 0, 0 50%, 100% 100%);
          top: 0;
          left: 40px;
        }
        .j3 {
          width: 30px;
          height: 40px;
          clip-path: polygon(0 0, 100% 100%, calc(50% + 8px) calc(50% - 6px));
          top: 260px;
          left: 20px;
        }
      }
    }
  }
}
@keyframes b1 {
  to {
    width: 10px;
    height: 100px;
    clip-path: polygon(0 0, 100% 50%, 0 100%);
    top: 0;
    left: 0;
  }
}
@keyframes b2 {
  to {
    width: 60px;
    height: 100px;
    clip-path: polygon(0 0, 100% 50%, 0 100%, calc(100% - 12px) 50%);
    top: 0;
    left: 0;
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
</style>
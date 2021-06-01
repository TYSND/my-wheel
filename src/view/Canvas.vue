<template>
  <div class="test-canvas">
    <canvas id="canvas" width="600" height="500"></canvas>
  </div>
</template>

<script>
export default {
  name: "Canvas",
  methods: {
    initCanvas() {
      console.log("初始化canvas")
      let canvas = document.getElementById('canvas');
      let ctx = canvas.getContext('2d');

      let img = new Image();
      img.src = "pg1.JPG";
      img.onload = imgfn;//图片加载完在执行
      function imgfn() {
        let bg = ctx.createPattern(img, "no-repeat");//createPattern() 方法在指定的方向内重复指定的元素。
        ctx.fillStyle = bg;//fillStyle 属性设置或返回用于填充绘画的颜色、渐变或模式。
        ctx.fillRect(0, 0, canvas.width, canvas.height);//绘制已填充矩形fillRect(左上角x坐标, 左上角y坐标, 宽, 高)
      }
    },
    draw () {
      this.drawBezier(25, 175, 60, 80, 150, 30, 170, 150)
    },
    drawBezier (p0x, p0y, p1x, p1y, p2x, p2y, p3x, p3y ) {
      let canvas=document.getElementById('canvas');
      let context=canvas.getContext('2d');
      //绘制起始点、控制点、终点
      context.beginPath();
      context.moveTo(p0x,p0y);
      context.lineTo(p1x,p1y);
      context.lineTo(p2x,p2y);
      context.lineTo(p3x,p3y);
      context.stroke();

      //绘制3次贝塞尔曲线
      context.beginPath();
      context.moveTo(p0x,p0y);
      context.bezierCurveTo(p1x,p1y,p2x,p2y,p3x,p3y);
      context.strokeStyle = "red";
      context.stroke();
    }
  },
  mounted() {
    this.initCanvas()
    this.draw()
  },
}
</script>

<style lang="less" scoped>
.test-canvas {
  width: 100%;
  height: 100vh;
  #canvas {
    border: 1px solid black;
  }
}
</style>
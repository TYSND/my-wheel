<template>
  <div class="wx-jump">
    <canvas id="jump-world-canvas"></canvas>
<!--    <div id="canvas-frame"></div>-->
  </div>
</template>

<script>
import * as THREE from "three";
import JumpGameWorld from './jump/JumpGameWorld.js'
export default {
  name: "WxJump",
  data () {
    return {
      width: 0,
      height: 0,
      camera: null,
      scene: null,
      renderer: null,
      controls: null,
      light: null,
    }
  },
  methods: {
    initThree () {
      this.width = document.getElementById('canvas-frame').clientWidth;
      this.height = document.getElementById('canvas-frame').clientHeight;
    },
    initScene () {
      this.scene = new THREE.Scene()
      // 场景背景，用于调试
      this.scene.background = new THREE.Color( 0xf5f5f5 )
      // 坐标辅助线，在调试阶段非常好用
      this.scene.add(new THREE.AxesHelper(10e3))
    },
    initCamera () {
      this.camera = new THREE.OrthographicCamera(-this.width / 2, this.width / 2, this.height / 2, -this.height / 2, 1, 1000)
      // this.camera = new THREE.PerspectiveCamera( 45, this.width / this.height, 1, 2000 );
      // 将正交相机放入场景中
      const { x, y, z } = this.computeCameraInitalPosition(35, 225, this.height / 2, this.height / 2, 0.1, 1000)
      this.camera.position.set(x, y, z)
      // this.camera.position.set(-100, 100, -100)
      // 看向场景中心点
      this.camera.lookAt(this.scene.position)
      this.scene.add(this.camera)
    },
    initLight () {
      // // 平行光
      // this.light = new THREE.DirectionalLight(0xffffff, .8)
      // // 投射阴影
      // this.light.castShadow = true
      // // 定义可见域的投射阴影
      // this.light.shadow.camera.left = -400
      // this.light.shadow.camera.right = 400
      // this.light.shadow.camera.top = 400
      // this.light.shadow.camera.bottom = -400
      // this.light.shadow.camera.near = 0
      // this.light.shadow.camera.far = 1000


      this.light = new THREE.DirectionalLight(0xffffff, .8)
      this.light.position.set(-200, 600, 300)
      // 环境光
      this.scene.add(new THREE.AmbientLight(0xffffff, .4))
      this.scene.add(this.light)
    },
    initRenderer () {
      this.renderer = new THREE.WebGLRenderer({
        alpha: true, // 透明场景
        antialias:true // 抗锯齿
      })
      this.renderer.setSize(this.width, this.height);
      document.getElementById('canvas-frame').appendChild(this.renderer.domElement);
      this.renderer.setClearColor(0xFFFFFF, 1.0);
    },
    startRenderer () {
      let that = this
      // 具体渲染
      let animate = function () {
        requestAnimationFrame( animate );
        // cube.rotation.x += 0.01;
        // cube.rotation.y += 0.01;
        that.renderer.render( that.scene, that.camera );
      };
      animate();
    },
    logic () {
      const planeGeometry = new THREE.PlaneBufferGeometry(10e2, 10e2, 1, 1)
      const planeMeterial = new THREE.MeshLambertMaterial({ color: 0xffffff })

      const plane = new THREE.Mesh(planeGeometry, planeMeterial)
      plane.rotation.x = -.5 * Math.PI
      plane.position.y = -.1
      // 接收阴影
      plane.receiveShadow = true
      this.scene.add(plane)
      
      const boxGeometry = new THREE.BoxBufferGeometry(100, 50, 100)
      const boxMaterial = new THREE.MeshLambertMaterial({ color: 0x67C23A })
      const box = new THREE.Mesh(boxGeometry, boxMaterial)
      // 让物体投射阴影
      box.castShadow = true
      box.geometry.translate(0, 15, 0)
      this.scene.add(box)


      // 让平行光投射阴影
      this.light.castShadow = true
      // 定义可见域的投射阴影
      this.light.shadow.camera.left = -400
      this.light.shadow.camera.right = 400
      this.light.shadow.camera.top = 400
      this.light.shadow.camera.bottom = -400
      this.light.shadow.camera.near = 0
      this.light.shadow.camera.far = 1000
      // 定义阴影的分辨率
      this.light.shadow.mapSize.width = 1600
      this.light.shadow.mapSize.height = 1600

      // 场景开启阴影
      this.renderer.shadowMap.enabled = true

    },
    start () {
      this.initThree()
      this.initScene()
      this.initCamera()
      this.initLight()
      this.initRenderer()
      this.logic()
      this.startRenderer()
    },
    computeCameraInitalPosition (verticalDeg, horizontalDeg, top, bottom, near, far) {
      const verticalRadian = verticalDeg * (Math.PI / 180)
      const horizontalRadian = horizontalDeg * (Math.PI / 180)
      const minY = Math.cos(verticalRadian) * bottom
      const maxY = Math.sin(verticalRadian) * (far - near - top / Math.tan(verticalRadian))

      if (minY > maxY) {
        console.warn('警告: 垂直角度太小了!')
      }
      // 取一个中间值靠谱
      const y = minY + (maxY - minY) / 2
      const longEdge = y / Math.tan(verticalRadian)
      const x = Math.sin(horizontalRadian) * longEdge
      const z = Math.cos(horizontalRadian) * longEdge

      return { x, y, z }
    }
  },
  mounted() {
    // this.start()
    console.log('world',JumpGameWorld)
    let jgw = new JumpGameWorld({
      container: document.querySelector('.wx-jump'),
      canvas: document.querySelector('#jump-world-canvas'),
      axesHelper: true
    })
    jgw.init()
  }
}
</script>

<style lang="less" scoped>
.wx-jump {
  width: 375px;
  height: 667px;
  margin: auto;
  canvas {
    width: 100%;
    height: 100%;
  }
  //#canvas-frame {
  //  border: none;
  //  cursor: pointer;
  //  width: 100%;
  //  height: 800px;
  //  background-color: #EEEEEE;
  //}
}
</style>
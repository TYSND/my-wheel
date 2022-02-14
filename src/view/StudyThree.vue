<template>
  <div class="study-three" ref="canvasOuter">
    <div ref="stats-output"></div>
  </div>
</template>

<script>
import * as THREE from 'three'
import Stats from '../../public/stats.min.js'
export default {
  name: "StudyThree",
  data () {
    return {
      renderer: {},
      camera: {},
      scene: {},
      light: {},
      cube: {},
      sphere: {},
      stats: {},
      width: 0,
      height: 0,
    }
  },
  methods: {
    initThree() {
      let co = this.$refs.canvasOuter
      console.log(co.clientWidth, co.clientHeight)
      // this.width = document.getElementById('canvas-frame').clientWidth;
      // this.height = document.getElementById('canvas-frame').clientHeight;
      this.width = co.clientWidth
      this.height = co.clientHeight
      this.renderer = new THREE.WebGLRenderer({
        antialias : true
      })
      console.log(this.width, this.height)
      this.renderer.setSize(this.width, this.height)
      // this.renderer.shadowMapEnabled = true
      this.renderer.shadowMap.enabled = true
      co.appendChild(this.renderer.domElement)
      // document.getElementById('canvas-frame').appendChild(this.renderer.domElement);
      this.renderer.setClearColor(0xEEEEEE, 1.0)
    },
    initCamera () {
      // this.camera = new THREE.PerspectiveCamera(45, this.width / this.height, 1, 10000);
      this.camera = new THREE.PerspectiveCamera(45, this.width / this.height, 0.1, 1000)
      // this.camera.position.set(100, 100, 300)
      this.camera.up.x = 0
      this.camera.up.y = 1
      this.camera.up.z = 0
      this.camera.position.set(-30, 40, 30)
      this.camera.lookAt(new THREE.Vector3(0, 0, 0))
    },
    initScene () {
      this.scene = new THREE.Scene();
    },
    initLight () {
      this.light = new THREE.SpotLight(0xffffff)
      this.light.position.set(-40, 60, -10)
      this.light.castShadow = true
      this.scene.add(this.light)
    },
    initObj () {
      // let geometry = new THREE.BoxGeometry(1, 1, 1)
      // let material = new THREE.MeshBasicMaterial( { color: 0x00ff00} )
      // let cube = new THREE.Mesh( geometry, material )
      // this.scene.add( cube )

      let axes = new THREE.AxesHelper(20)
      this.scene.add(axes)

      let planeGeometry = new THREE.PlaneGeometry(60, 20, 1, 1)
      // let planeMaterial = new THREE.MeshBasicMaterial({
      //   color: 0xcccccc
      // })
      let planeMaterial = new THREE.MeshLambertMaterial({
        color: 0xcccccc
      })
      let plane = new THREE.Mesh(planeGeometry, planeMaterial)
      plane.rotation.x = -0.5 * Math.PI
      plane.position.x = 15
      plane.position.y = 0
      plane.position.z = 0
      this.scene.add(plane)


      let guiParams = {
        radius: 12,
        tube: 2,
        radialSegments: 8,
        tubularSegments: 130,
        p: 3,
        q: 4
      }

      // let cubeGeometry = new THREE.CubeGeometry(4, 4, 4)
      let cubeGeometry = new THREE.TorusKnotGeometry(guiParams.radius, guiParams.tube, guiParams.tubularSegments, guiParams.radialSegments, guiParams.p, guiParams.q)
      // let cubeMaterial = new THREE.MeshBasicMaterial({
      //   color: 0xff0000,
      //   wireframe: true
      // })
      // let cubeMaterial = new THREE.MeshLambertMaterial({
      //   color: 0xff0000
      // })

      let createCanvas = function (w,h) {
        // w = w || 30;
        // h = h || 30
        // let cs = document.createElement('canvas')
        // let ctx = cs.getContext('2d');
        // cs.width = w;
        // cs.height = h;
        // ctx.fillStyle ="#fff";
        // ctx.fillRect(0,0,w,h);
        // ctx.strokeStyle = "#c00";
        // ctx.shadowBlur = 20;
        // ctx.shadowColor = "#c99";
        // ctx.strokeWidth = 30;
        // ctx.beginPath();
        // ctx.moveTo(w/2, 0);
        // ctx.lineTo(0,h);
        // ctx.lineTo(w, h);
        // ctx.closePath()
        // ctx.stroke();
        // return cs;

        let canvas = document.createElement('canvas')
        canvas.width = w
        canvas.height = h
        let context = canvas.getContext('2d')
        let gradient = context.createRadialGradient(
            canvas.width / 2, canvas.height / 2,
            0,
            canvas.width / 2, canvas.height / 2,
            canvas.width / 2
        )
        gradient.addColorStop(0, 'rgba(255, 255, 255, 1)')
        gradient.addColorStop(0, 'rgba(0, 255, 255, 1)')
        gradient.addColorStop(0, 'rgba(0, 0, 64, 1)')
        gradient.addColorStop(0, 'rgba(0, 0, 0, 1)')

        context.fillStyle = gradient
        context.fillRect(0, 0, canvas.width, canvas.height)

        // let canvas = document.createElement("canvas")
        // canvas.width = w
        // canvas.height = h
        // /*2、创建图形，这部分可以去看w3c canvas教程*/
        // let ctx = canvas.getContext("2d")
        // ctx.fillStyle = "#ff0000"
        // ctx.arc(8,8,4,0,2*Math.PI)
        // ctx.fill()
        return canvas
      }

      let texture = new THREE.Texture(createCanvas(16,16))
      texture.needsUpdate = true
      let cubeMaterial = new THREE.PointsMaterial({
        color: 0xffffff,
        size: 3,
        transparent: true,
        blending: THREE.AdditiveBlending,
        map: texture
      })

      let cube = new THREE.Mesh(cubeGeometry, cubeMaterial)
      cube.position.x = -4
      cube.position.y = 3
      cube.position.z = 0
      this.scene.add(cube)
      this.cube = cube

      let sphereGeometry = new THREE.SphereGeometry(4, 20, 20)
      // let sphereMaterial = new THREE.MeshBasicMaterial({
      //   color: 0x7777ff,
      //   wireframe: true
      // })
      let sphereMaterial = new THREE.MeshLambertMaterial({
        color: 0x7777ff
      })
      let sphere = new THREE.Mesh(sphereGeometry, sphereMaterial)
      sphere.position.x = 20
      sphere.position.y = 4
      sphere.position.z = 2
      this.scene.add(sphere)
      this.sphere = sphere

      plane.receiveShadow = true
      cube.castShadow = true
      sphere.castShadow = true
    },
    renderFunc () {
      let that = this
      let step = 0
      let animate = function () {
        that.stats.update()
        that.cube.rotation.x += 0.1
        that.cube.rotation.y += 0.1
        that.cube.rotation.z += 0.1

        step += 0.04
        that.sphere.position.x = 20 + 10 * Math.cos(step)
        that.sphere.position.y = 2 + 10 * Math.abs(Math.sin(step))

        requestAnimationFrame( animate )
        that.renderer.render( that.scene, that.camera )
      }
      animate()
    },
    start () {
      this.initThree()
      this.initCamera()
      this.initScene()
      this.initLight()
      this.initObj()
      this.renderFunc()
    },
    initStats () {
      let stats = new Stats()
      stats.setMode(0)
      stats.domElement.style.position = 'fixed'
      stats.domElement.style.left = '0px'
      stats.domElement.style.top = '0px'
      this.$refs['stats-output'].appendChild(stats.domElement)
      this.stats = stats
      console.log(this.stats)
    }
  },
  mounted () {
    this.initStats()
    this.start()
    // console.log(this.$refs)
    // let co = this.$refs.canvasOuter
    // console.log(co)
    // console.log(co.clientWidth, co.clientHeight)
  }
}
</script>

<style lang="less" scoped>
.study-three {
  width: 100vw;
  height: 100vh;
}
</style>
<template>
  <div class="three">
    <div id="canvas-frame"></div>
  </div>
</template>

<script>
import * as THREE from 'three'
export default {
  name: "Three",
  data () {
    return {
      renderer: {},
      camera: {},
      scene: {},
      light: {},
      cube: {},
      width: 0,
      height: 0,
    }
  },
  methods: {
    initThree() {
      this.width = document.getElementById('canvas-frame').clientWidth;
      this.height = document.getElementById('canvas-frame').clientHeight;
      this.renderer = new THREE.WebGLRenderer({
        antialias : true
      });
      console.log(this.width, this.height)
      this.renderer.setSize(this.width, this.height);
      document.getElementById('canvas-frame').appendChild(this.renderer.domElement);
      this.renderer.setClearColor(0xFFFFFF, 1.0);


    },
    initCamera () {
      this.camera = new THREE.PerspectiveCamera(45, this.width / this.height, 1, 10000);
      // this.camera.position.x = 600;
      // this.camera.position.y = 0;
      // this.camera.position.z = 600;
      // this.camera.up.x = 0;
      // this.camera.up.y = 1;
      // this.camera.up.z = 0;
      // this.camera.lookAt({
      //   x : 0,
      //   y : 0,
      //   z : 0
      // });

      // this.camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
    },
    initScene () {
      this.scene = new THREE.Scene();
    },
    initLight () {
      // A start
      this.light = new THREE.AmbientLight(0xFF0000);
      this.light.position.set(100, 100, 200);
      this.scene.add(this.light);
      // A end

    },
    initObject () {
      // let geometry = new THREE.BoxGeometry( 1, 1, 1 );
      let geometry = new THREE.BoxGeometry( 200, 100, 50, 4, 4);
      // B start
      let material = new THREE.MeshLambertMaterial( { color:0x880000} );
      // B end
      let mesh = new THREE.Mesh(geometry, material);
      // mesh.position = new THREE.Vector3(0,0,0);
      mesh.position.set(0, 0, 0)
      console.log('mesh', mesh)
      this.scene.add(mesh);
    },
    threeStart () {
      this.initThree();
      this.initCamera();
      this.initScene();
      this.initLight();

      // let geometry = new THREE.BoxGeometry( 200, 100, 50, 4, 4);
      let geometry = new THREE.BoxGeometry( 1, 1, 1 );
      let material = new THREE.MeshLambertMaterial( { color: 0x00ff00 } );
      let cube = new THREE.Mesh( geometry, material );
      cube.position.set(0, 0, 0)
      this.scene.add( cube );
      this.camera.position.z = 5;
      let that = this
      let animate = function () {
        requestAnimationFrame( animate );
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        that.renderer.render( that.scene, that.camera );
      };
      animate();


      // this.initObject();
      // this.renderer.clear();
      // this.renderer.render(this.scene, this.camera);
    }
  },
  mounted() {
    this.threeStart()
    // console.log(this.scene)
  }
}
</script>

<style lang="less" coped>
.three {
  #canvas-frame {
    border: none;
    cursor: pointer;
    width: 100%;
    height: 600px;
    background-color: #EEEEEE;
  }

}
</style>
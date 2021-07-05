<template>
  <div class="fbx-model">
    <div id="canvas-frame"></div>
  </div>
</template>

<script>
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
export default {
  name: "FbxModel",
  data() {
    return {
      camera: null,
      scene: null,
      renderer: null,
      controls: null,
      light: null,
      modelPath: "./gun.fbx"
    };
  },
  methods: {
    init() {
      let self = this;

      let container = document.getElementById('canvas-frame')
      // let mouse = new THREE.Vector2();
      self.camera = new THREE.PerspectiveCamera(
          45,
          container.clientWidth / container.clientHeight,
          0.01,
          20000
      );
      // self.camera.position.set(100, 200, 300);
      self.camera.position.set(0, 0, 2000);

      self.scene = new THREE.Scene();
      self.scene.fog = new THREE.Fog(0x000000, 600, 3000); //雾化场景
      // self.scene.background = new THREE.Color(0xf65144);

      // ground
      var mesh = new THREE.Mesh(
          new THREE.PlaneBufferGeometry(2000, 2000),
          new THREE.MeshPhongMaterial({ color: 0x999999, depthWrite: false })
      );
      mesh.rotation.x = -Math.PI / 2;
      mesh.receiveShadow = true;
      self.scene.add(mesh);

      var grid = new THREE.GridHelper(2000, 20, 0x000000, 0x000000);
      grid.material.opacity = 0.2;
      grid.material.transparent = true;
      self.scene.add(grid);

      self.renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        precision: "highp"
      });
      self.renderer.setSize(container.clientWidth, container.clientHeight);
      container.appendChild(self.renderer.domElement)

      self.controls = new OrbitControls(self.camera, self.renderer.domElement);
      self.controls.target.set(0, 100, 0);
      self.controls.update();
      var light = new THREE.HemisphereLight(0xffffff, 0x444444);
      light.position.set(0, 200, 0);
      self. scene.add(light);

      light = new THREE.DirectionalLight(0xffffff);
      light.position.set(0, 200, 100);
      light.castShadow = true;
      light.shadow.camera.top = 180;
      light.shadow.camera.bottom = -100;
      light.shadow.camera.left = -120;
      light.shadow.camera.right = 120;
      self.scene.add(light);
      let fbxLoader = new FBXLoader();
      fbxLoader.load(self.modelPath, function(object) {
        console.log(object)
        object.traverse( function ( child ) {
          if ( child.isMesh ) {
            child.castShadow = true;
            child.receiveShadow = true;
          }
        } );
        object.rotation.x = -Math.PI/2;
        //object.rotation.x = -Math.PI/2 - Math.PI/12;
        object.position.set(0, -0.15, 0.3);
        console.log(object.position);
        // object.scale.set(.003, .003, .003);
        self.scene.add(object);
      });

      // self.renderer = new THREE.WebGLRenderer({
      //   antialias : true
      // });
      // // console.log(this.width, this.height)
      // self.renderer.setSize(1000, 800);
      // document.getElementById('canvas-frame').appendChild(self.renderer.domElement);
      // self.renderer.setClearColor(0xFFFFFF, 1.0);
    },
    init2 () {
      let that = this
      let container = document.createElement( 'div' );
      document.getElementById('canvas-frame').appendChild( container );
      that.camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 2000 );
      that.camera.position.set( 0, 1.6, 0 );
      that.scene = new THREE.Scene();
      that.scene.background = new THREE.Color( 0xa0a0a0 );
      that.scene.fog = new THREE.Fog( 0xa0a0a0, 200, 1000 );

      that.light = new THREE.AmbientLight('#ffffff')
      that.scene.add( that.light );
      that.light = new THREE.HemisphereLight( 0xffffff, 0x444444 );
      that.light.position.set( 0, 20, 0 );
      that.scene.add( that.light );
      that.light = new THREE.DirectionalLight( 0xffffff );
      that.light.position.set( 0, 20, 10 );
      that.light.castShadow = true;
      that.scene.add( that.light );

      let grid = new THREE.GridHelper( 5, 20, 0x000000, 0x000000 );
      grid.material.opacity = 0.2;
      grid.material.transparent = true;
      that.scene.add( grid );
      // model
      let loader = new FBXLoader();
      loader.load( that.modelPath, function ( object ) {
        object.traverse( function ( child ) {
          if ( child.isMesh ) {
            child.castShadow = true;
            child.receiveShadow = true;
          }
        } );
        object.rotation.y = Math.PI/2;
        //object.rotation.x = -Math.PI/2 - Math.PI/12;
        object.position.set(0, 0.15, 0.3);
        console.log(object.position);
        object.scale.set(.003, .003, .003);
        that.scene.add( object );
      } );
      that.renderer = new THREE.WebGLRenderer( { antialias: true } );
      // console.log('setPixelRatio', that.renderer)
      that.renderer.setPixelRatio( window.devicePixelRatio );
      that.renderer.setSize( window.innerWidth, window.innerHeight );
      that.renderer.shadowMap.enabled = true;
      container.appendChild( that.renderer.domElement );
      that.controls = new OrbitControls( that.camera, that.renderer.domElement );
      that.controls.target.set( 0, 0, 0 );
      that.controls.update();
      // window.addEventListener( 'resize', onWindowResize, false );
      // // stats
      // stats = new Stats();
      // container.appendChild( stats.dom );
    },
    animate() {
      requestAnimationFrame(this.animate);
      this.renderer.clear();
      this.renderer.render(this.scene, this.camera);
      this.renderer.clearDepth();
    }
  },
  mounted() {
    this.init2();
    this.animate();
  }
}
</script>

<style lang="less" scoped>
.fbx-model {
  #canvas-frame {
    border: none;
    cursor: pointer;
    width: 100%;
    height: 1000px;
    background-color: #EEEEEE;
  }
}
</style>
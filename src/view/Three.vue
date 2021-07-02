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
      // this.camera = new THREE.PerspectiveCamera(45, this.width / this.height, 1, 10000);
      this.camera = new THREE.PerspectiveCamera(45, this.width / this.height, 0.1, 10000);
      // this.camera.position.set(100, 100, 300);
      this.camera.lookAt(new THREE.Vector3(0, 0, 0));

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
      // this.light.position.set(100, 100, 200);
      this.light.position.set(-100, 200, 100);
      this.scene.add(this.light);
      // A end

      // this.light = new THREE.SpotLight( 0xEEDFCC );
      // this.light.position.set(-100, 200, 100);
      // this.light.castShadow = true;
      //
      // this.scene.add(this.light);
      // this.scene.add(new THREE.AmbientLight( 0xD1D1D1 ));

    },
    initObject () {
      // let geometry = new THREE.BoxGeometry( 1, 1, 1 );
      let geometry = new THREE.BoxGeometry( 200, 100, 50, 4, 4);
      // let geometry = new THREE.TextGeometry('BuddyOJ')
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
      let that = this
      // let geometry = new THREE.BoxGeometry( 200, 100, 50, 4, 4);
      // let geometry = new THREE.BoxGeometry( 1, 1, 1 );
      let loader = new THREE.FontLoader();
      loader.load(
          // resource URL
          './Helvetiker_Regular.json',
          // onLoad callback
          function ( font ) {
            // do something with the font
            // font : font,
            // size: 20, //字号大小，一般为大写字母的高度
            // height: 10, //文字的厚度
            // weight: 'normal', //值为'normal'或'bold'，表示是否加粗
            // style: 'normal', //值为'normal'或'italics'，表示是否斜体
            // bevelThickness: 1, //倒角厚度
            // bevelSize: 1, //倒角宽度
            // curveSegments: 30,//弧线分段数，使得文字的曲线更加光滑
            // bevelEnabled: true, //布尔值，是否使用倒角，意为在边缘处斜切
            let fontCfg = {
              font : font,
              size: 20, //字号大小，一般为大写字母的高度
              height: 10, //文字的厚度
              weight: 'normal', //值为'normal'或'bold'，表示是否加粗
              style: 'normal', //值为'normal'或'italics'，表示是否斜体
              bevelThickness: 1, //倒角厚度
              bevelSize: 1, //倒角宽度
              curveSegments: 30,//弧线分段数，使得文字的曲线更加光滑
              bevelEnabled: true, //布尔值，是否使用倒角，意为在边缘处斜切
            };
            // TextGeometry文本几何对象
            let fontGeometry = new THREE.TextGeometry('BuddyOJ',fontCfg);
            fontGeometry.computeBoundingBox();//绑定盒子模型

            // 文字的材质
            // let fontMaterial = new THREE.MeshNormalMaterial();
            let fontMaterial = new THREE.MeshNormalMaterial();
            // let fontMaterial = new THREE.MeshNormalMaterial({
            //   flatShading: THREE.FlatShading,
            //   transparent: true,
            //   opacity: 0.9
            // })
            let fontMesh = new THREE.Mesh(fontGeometry, fontMaterial);

            // 计算出整个模型宽度的一半, 不然模型就会绕着x = 0,中心旋转
            // fontMesh.position.x = -(fontGeometry.boundingBox.max.x - fontGeometry.boundingBox.min.x) / 2;
            fontMesh.position.set(-50, 0, 0)
            that.scene.add( fontMesh );
          },

          // onProgress callback
          function ( xhr ) {
            console.log( (xhr.loaded / xhr.total * 100) + '% loaded' );
          },

          // onError callback
          function ( ) {
            console.log( 'An error happened' );
          }
      )



      // let material = new THREE.MeshLambertMaterial( { color: 0x00ff00 } );
      // let cube = new THREE.Mesh( geometry, material );
      // cube.position.set(0, 0, 0)
      // this.scene.add( cube );
      this.camera.position.z = 105;
      let animate = function () {
        requestAnimationFrame( animate );
        // cube.rotation.x += 0.01;
        // cube.rotation.y += 0.01;
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
    height: 1000px;
    background-color: #EEEEEE;
  }

}
</style>
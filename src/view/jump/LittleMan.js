import * as THREE from "three";
// import {baseMeshLambertMaterial, baseBoxBufferGeometry, randomArrayElm} from './utils.js'
import {baseMeshLambertMaterial} from './utils.js'
// eslint-disable-next-line no-unused-vars
class LittleMan {
    constructor ({
                     world,
                     color,
                     G
                 }) {
        this.world = world
        this.color = color
        this.G = G
        this.v0 = world.width / 10
        this.theta = 90

        this.headSegment = null
        this.bodyScaleSegment = null
        this.bodyRotateSegment = null
        this.body = null

        this.currentProp = null
        this.nextProp = null
        this.powerStorageDuration = 1500

        this.stage = null

        this.createBody()
        // this.resetPowerStorageParameter()
    }

    // 创建身体
    createBody () {
        const { color, world: { width } } = this
        const material = baseMeshLambertMaterial.clone()
        material.setValues({ color })

        // 头部
        const headSize = this.headSize = width * .03
        const headTranslateY = this.headTranslateY = headSize * 4.5
        const headGeometry = new THREE.SphereGeometry(headSize, 40, 40)
        const headSegment = this.headSegment = new THREE.Mesh(headGeometry, material)
        headSegment.castShadow = true
        headSegment.translateY(headTranslateY)

        // 身体
        this.bodySize = headSize * 4.5
        const bodyBottomGeometry = new THREE.CylinderBufferGeometry(headSize * .9, headSize * 1.2, headSize * 2.5, 40)
        bodyBottomGeometry.translate(0, headSize * 1.25, 0)
        const bodyCenterGeometry = new THREE.CylinderBufferGeometry(headSize, headSize * .9, headSize, 40)
        bodyCenterGeometry.translate(0, headSize * 3, 0)
        const bodyTopGeometry = new THREE.SphereGeometry(headSize, 40, 40)
        bodyTopGeometry.translate(0, headSize * 3.5, 0)

        const bodyGeometry = new THREE.Geometry()
        bodyGeometry.merge(bodyTopGeometry)
        bodyGeometry.merge(new THREE.Geometry().fromBufferGeometry(bodyCenterGeometry))
        bodyGeometry.merge(new THREE.Geometry().fromBufferGeometry(bodyBottomGeometry))

        // 缩放控制
        const bodyScaleSegment = this.bodyScaleSegment = new THREE.Mesh(bodyGeometry, material)
        bodyScaleSegment.castShadow = true
        bodyScaleSegment.translateY(-20)

        // 旋转控制
        const bodyRotateSegment = this.bodyRotateSegment = new THREE.Group()
        bodyRotateSegment.add(headSegment)
        bodyRotateSegment.add(bodyScaleSegment)
        bodyRotateSegment.translateY(20)

        // 整体身高 = 头部位移 + 头部高度 / 2 = headSize * 5.5
        const body = this.body = new THREE.Group()
        body.add(bodyRotateSegment)
    }

    // 进入舞台
    enterStage (stage, { x, y, z }) {
        const { body } = this

        body.position.set(x, y, z)

        this.stage = stage
        stage.add(body)
        stage.render()
    }

    // 跳跃
    jump () {}

}

export default LittleMan
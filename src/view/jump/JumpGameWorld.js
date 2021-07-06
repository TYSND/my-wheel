import { computeCameraInitalPosition } from './utils.js'
import Prop from './Prop.js'
import PropCreator from './PropCreator.js'
import Stage from './Stage.js'

// eslint-disable-next-line no-unused-vars
class JumpGameWorld {
    constructor ({
                     container,
                     canvas,
                     needDefaultCreator = true,
                     axesHelper = false
                 }) {
        const { offsetWidth, offsetHeight } = container
        this.container = container
        this.canvas = canvas
        this.width = offsetWidth
        this.height = offsetHeight
        this.needDefaultCreator = needDefaultCreator
        this.axesHelper = axesHelper

        // 经过多次尝试
        const [min, max] = [~~(offsetWidth / 6), ~~(offsetWidth / 3.5)]
        console.log('min, max', min, max)
        this.propSizeRange = [min, max]
        this.propHeight = ~~(max / 2)
        this.propDistanceRange = [~~(min / 2), max * 2]

        this.props = []

        this.stage = null
        this.propCreator = null

        this.init()
    }


    // 初始化舞台
    initStage () {
        const { container, canvas, axesHelper, width, height } = this
        const cameraNear = 0.1
        const cameraFar = 2000
        const { offsetHeight } = container
        // 计算相机应该放在哪里
        // console.log(computeCameraInitalPosition)
        const cameraInitalPosition = computeCameraInitalPosition(35, 225, offsetHeight / 2, offsetHeight / 2, cameraNear, cameraFar)
        this.cameraInitalPosition = cameraInitalPosition
        const lightInitalPosition = this.lightInitalPosition = { x: -300, y: 600, z: 200 }
        this.stage = new Stage({
            width,
            height,
            canvas,
            axesHelper,
            cameraNear,
            cameraFar,
            cameraInitalPosition,
            lightInitalPosition
        })
    }

    // 初始化道具生成器
    initPropCreator () {
        const { needDefaultCreator, propSizeRange, propHeight } = this
        this.props = []
        this.propCreator = new PropCreator({
            propHeight,
            propSizeRange,
            needDefaultCreator
        })
    }

    // 对外的新增生成器的接口
    createPropCreator (...args) {
        this.propCreator.createPropCreator(...args)
    }

    createProp (enterHeight = 100) {
        // console.log(this)
        const {
            propCreator,
            propHeight,
            propSizeRange: [min, max],
            propDistanceRange,
            stage, props,
            props: { length }
        } = this
        const currentProp = props[length - 1]
        const prop = new Prop({
            world: this,
            stage,
            // 头2个盒子用第一个创造器生成
            body: propCreator.createProp(length < 3 ? 0 : -1),
            height: propHeight,
            prev: currentProp,
            enterHeight,
            distanceRange: propDistanceRange
        })

        const size = prop.getSize()
        if (size.y !== propHeight) {
            console.warn(`高度: ${size.y},盒子高度必须为 ${propHeight}`)
        }
        if (size.x < min || size.x > max) {
            console.warn(`宽度: ${size.x}, 盒子宽度必须为 ${min} - ${max}`)
        }
        if (size.z < min || size.z > max) {
            console.warn(`深度: ${size.z}, 盒子深度度必须为 ${min} - ${max}`)
        }
        if (currentProp) {
            currentProp.setNext(prop)
        }
        prop.enterStage()
        props.push(prop)
    }

    // 销毁道具
    clearProps () {
        const {
            safeClearLength,
            props,
            props: { length }
        } = this
        const point = 4

        if (length > safeClearLength) {
            props.slice(0, point).forEach(prop => prop.dispose())
            this.props = props.slice(point)
        }
    }

    // 估算销毁安全值
    computeSafeClearLength () {
        const { width, height, propSizeRange } = this
        const minS = propSizeRange[0]
        const hypotenuse = Math.sqrt(minS * minS + minS * minS)
        this.safeClearLength = Math.ceil(width / minS) + Math.ceil(height / hypotenuse / 2) + 1
    }

    init () {
        this.initStage()
        this.initPropCreator()
        // 第一个道具
        this.createProp(0)
        // 第二个道具
        this.createProp(0)

    }
}

export default JumpGameWorld
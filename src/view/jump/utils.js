import * as THREE from "three";
import TWEEN from '@tweenjs/tween.js'
// 材质
export const baseMeshLambertMaterial = new THREE.MeshLambertMaterial()
// 立方体
export const baseBoxBufferGeometry = new THREE.BoxBufferGeometry()

export const getPropSize = box => {
    const box3 = getPropSize.box3 || (getPropSize.box3 = new THREE.Box3())
    box3.setFromObject(box)
    return box3.getSize(new THREE.Vector3())
}

export const computeCameraInitalPosition = (verticalDeg, horizontalDeg, top, bottom, near, far) => {
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

export const randomInt = (min, max) => {
    let len = max - min + 1
    let pos = Math.floor(Math.random() * len) + min
    return pos
}
export const randomArrayElm = (arr) => {
    let len = arr.length - 1
    return arr[randomInt(0, len)]
}

export const animate = (configs, onUpdate, onComplete) => {
    const {
        from, to, duration,
        easing = k => k,
        autoStart = true // 为了使用tween的chain
    } = configs

    const tween = new TWEEN.Tween(from)
        .to(to, duration)
        .easing(easing)
        .onUpdate(onUpdate)
        .onComplete(() => {
            onComplete && onComplete()
        })

    if (autoStart) {
        tween.start()
    }

    animateFrame()
    return tween
}

const animateFrame = function () {
    if (animateFrame.openin) {
        return
    }
    animateFrame.openin = true

    const animate = () => {
        const id = requestAnimationFrame(animate)
        if (!TWEEN.update()) {
            animateFrame.openin = false
            cancelAnimationFrame(id)
        }
    }
    animate()
}
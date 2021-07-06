import { randomArrayElm, randomInt } from './utils.js'
// const colors = ['0x67C23A', '0xE6A23C', '0xF56C6C', '0x909399', '0x409EFF', '0xffffff']
const colors = ['#67C23A', '#E6A23C', '#F56C6C', '#909399', '#409EFF', '#ffffff']
// 静态
export const statics = [
    // ...
]

// 非静态
export const actives = [
    // 默认纯色立方体创造器
    function defaultCreator (THREE, helpers) {
        const {
            propSizeRange: [min, max],
            propHeight,
            baseMeshLambertMaterial,
            baseBoxBufferGeometry
        } = helpers

        // 随机颜色
        const color = randomArrayElm(colors)
        // 随机大小
        const size = randomInt(min, max)

        const geometry = baseBoxBufferGeometry.clone()
        geometry.scale(size, propHeight, size)

        const material = baseMeshLambertMaterial.clone()
        material.setValues({ color })

        return new THREE.Mesh(geometry, material)
    },
]

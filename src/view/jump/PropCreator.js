import {actives, statics} from './defaultProp.js'
import * as THREE from "three";
import {baseMeshLambertMaterial, baseBoxBufferGeometry, randomArrayElm} from './utils.js'

// eslint-disable-next-line no-unused-vars
class PropCreator {
    constructor ({
                     propHeight,
                     propSizeRange,
                     needDefaultCreator
                 }) {

        this.propHeight = propHeight
        this.propSizeRange = propSizeRange

        // 维护的生成器
        this.propCreators = []
        console.log('actives',actives, statics)
        if (needDefaultCreator) {
            this.createPropCreator(actives, false)
            this.createPropCreator(statics, true)
        }
    }

    createProp (index) {
        const { propCreators } = this
        return index > -1
            ? propCreators[index] && propCreators[index]() || randomArrayElm(propCreators)()
            : randomArrayElm(propCreators)()
    }

    createPropCreator (creator, isStatic) {
        console.log('creator', creator)
        if (Array.isArray(creator)) {
            creator.forEach(crt => this.createPropCreator(crt, isStatic))
            return
        }

        const { propCreators, propSizeRange, propHeight } = this

        if (propCreators.indexOf(creator) > -1) {
            return
        }

        const wrappedCreator = function () {
            if (isStatic && wrappedCreator.box) {
                // 静态盒子，下次直接clone
                return wrappedCreator.box.clone()
            } else {
                const box = creator(THREE, {
                    propSizeRange,
                    propHeight,
                    baseMeshLambertMaterial,
                    baseBoxBufferGeometry
                })

                if (isStatic) {
                    // 被告知是静态盒子，缓存起来
                    wrappedCreator.box = box
                }
                return box
            }
        }

        propCreators.push(wrappedCreator)
    }


}

export default PropCreator
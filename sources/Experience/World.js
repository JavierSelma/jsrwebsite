import * as THREE from 'three'
import Experience from './Experience.js'
import Arcade from "./Objects/Arcade";
import {Color} from "three";

export default class World
{
    constructor(_options)
    {
        this.experience = new Experience()
        this.config = this.experience.config
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        
        this.resources.on('groupEnd', (_group) =>
        {
            if(_group.name === 'base')
            {
                this.setDummy()
                this.setArcade()
            }
        })
    }

    setDummy()
    {
        //this.resources.items.lennaTexture.encoding = THREE.sRGBEncoding

        const cubeColor = new THREE.Color(0xff7f24);

        const cube = new THREE.Mesh(
            new THREE.BoxGeometry(12, 1.5, 12),
            new THREE.MeshBasicMaterial({ color: cubeColor })
        )
        this.scene.add(cube)


    }

    setArcade()
    {
        this.arcade = new Arcade()
    }

    resize()
    {
    }

    update()
    {
    }

    destroy()
    {
    }
}
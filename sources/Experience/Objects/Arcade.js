import Experience from "../Experience";

import * as THREE from 'three'

export default class Arcade
{
    constructor()
    {
        this.experience = new Experience()
        this.resources = this.experience.resources
        this.debug = this.experience.debug
        this.scene = this.experience.scene
        this.time = this.experience.time

        // Debug
        if(this.debug)
        {
            this.debugFolder = this.debug.addFolder({
                title: 'arcade',
                expanded: false
            })
        }

        this.setModel()
    }

    setModel()
    {
        this.model = this.resources.items.arcadeMachine
        console.log(this.model, "esto es el objeto")
        this.model.mesh = this.resources.items.arcadeMachine.scene

        this.scene.add(this.model.mesh)

        const light = new THREE.AmbientLight( 0xffffff ); // soft white light
        this.scene.add( light );
    }
}

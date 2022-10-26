import { PIView } from "../interfaces/PInterfaces";
import { PTPosition, PTResponse } from "../types/PTypes";
import PPOption from "./PPOption";

export default class extends Phaser.GameObjects.Container implements PIView {
    constructor(scene : Phaser.Scene, position : PTPosition) {
        super(scene, position.x, position.y);
        this.scene.add.existing(this);

        this._init();
    }

    _init(): void {
        // add options to the container
        let options_positions = [[0, 0], [200, 0], [0, 200], [200, 200]];
        for (let i = 0; i < 4; i++) {
            let option = new PPOption({
                scene : this.scene,
                position : {
                    x : options_positions[i][0],
                    y : options_positions[i][1],
                },
                text : ""
            })
            option.setScale(0.8);
            this.add(option);
        }
    }

    _refreshOptions (options : Array<any> = []) : void {
        for (let index = 0; index < this.list.length; index++) {
            let child = this.list[index] as PPOption;
            child._refreshOption(options[index]);
        }
    }
    
    _unload(): void {
        this.removeAll(true);
    }
    
    _resize(): void {
    
    }
    
    _addListeners(): void {
    
    }
}

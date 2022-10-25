import { PIView } from "../interfaces/PInterfaces";
import { PQDisplay } from "../types/PTypes";

export default class extends Phaser.GameObjects.Container implements PIView {

    private questionText : Phaser.GameObjects.Text | null
    constructor(config : PQDisplay) {
        super(config.scene, config.position.x, config.position.y);
        this.scene.add.existing(this);

        this.questionText = null;
        this._init()
    }

    _init(): void {
        // add text
        this.questionText = this.scene.add.text(0, 0, "", { 
            fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif', 
            fontSize : "24px",
            stroke : "#000000",
            strokeThickness : 2
        });
        this.questionText.setOrigin(0.5);
        this.add(this.questionText);
    }
    
    _unload(): void {
        this.removeAll(true);
    }
    
    _resize(): void {
    }
    
    _addListeners(): void {
    }

    _setQuestion (question : string) : void {
        this.questionText?.setText(question);
    }

    
}
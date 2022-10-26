import { PIView } from "../interfaces/PInterfaces";
import { PQDisplay, PTResponse } from "../types/PTypes";

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
            fontSize : "28px",
            fontStyle : "bold",
            stroke : "#000000",
            strokeThickness : 3,
            align : "center",
            wordWrap : {
                callback : this._wrapTHeWords,
                callbackScope : this
            }
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

    _refreshQuestion (question : string) : void {
        this.questionText?.setText(question);
    }

    _wrapTHeWords (text : string, textObj : Phaser.GameObjects.Text) {
        let words = text.split("|");
        return words;
    }

    
}
import { PIView } from "../interfaces/PInterfaces";
import { PTOption } from "../types/PTypes";

export default class extends Phaser.GameObjects.Container implements PIView {
    private bg : Phaser.GameObjects.Sprite | null
    private optionText : Phaser.GameObjects.Text | null
    private optionStr : string

    constructor(config : PTOption) {
        super(config.scene, config.position.x, config.position.y);
        this.scene.add.existing(this);
        this.bg = null;
        this.optionText = null;
        this.optionStr = config.text || "";

        this._init();
        this.setInteractive({
            hitArea : new Phaser.Geom.Rectangle(0 - this.getBounds().width*0.5, 0 - this.getBounds().height * 0.5, this.getBounds().width, this.getBounds().height),
            hitAreaCallback : Phaser.Geom.Rectangle.Contains,
            useHandCursor : true
            // useHandCursor : true
        });
        this._addListeners();
    }

    _init(): void {
        // this category tab bg
        this.bg = this.scene.add.sprite(0, 0, "category_tab_bg");
        this.add(this.bg);

        // create category text
        this.optionText = this.scene.add.text(0, 0, this.optionStr, { 
            fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif', 
            fontSize : "36px",
            stroke : "#000000",
            strokeThickness : 2
        });
        this.optionText.setOrigin(0.5);
        this.add(this.optionText);

    }

    _refreshOption (option : string) : void {
        this.optionStr = option;
        this.optionText?.setText(option);
    }

    _unload(): void {

    }

    _resize(): void {

    }

    _addListeners(): void {
        this.addListener("pointerup", this._onTabDown, this);
    }

    private _onTabDown () : void {
        alert(`the option ${this.optionStr} is clicked`)
        this.scene.events.emit("option_selected");
        // this._unload();
    }

}
import { Create } from "phaser";
import { PICategoryTab } from "../interfaces/PInterfaces";
import { PTCatagoryTab } from "../types/PTypes";

export default class extends Phaser.GameObjects.Container implements PICategoryTab {
    id: number;
    categoryName: string;
    config: PTCatagoryTab;

    private bg : Phaser.GameObjects.Sprite | null
    private categoryNameText : Phaser.GameObjects.Text | null
    
    constructor (config : PTCatagoryTab) {
        super(config.scene, config.position.x, config.position.y);
        this.scene.add.existing(this);
        this.config = config;
        this.id = config.id;
        this.categoryName = config.name;

        this.bg = null;
        this.categoryNameText = null;

        this._init();
        this.setInteractive({
            hitArea : new Phaser.Geom.Rectangle(0 - this.getBounds().width*0.5, 0 - this.getBounds().height * 0.5, this.getBounds().width, this.getBounds().height),
            hitAreaCallback : Phaser.Geom.Rectangle.Contains,
            useHandCursor : true
            // useHandCursor : true
        });
        this._addListeners();
        // this._resize();
        console.log(" container bounds ==> ", this.getBounds())
    }
    _addListeners(): void {
        this.addListener("pointerup", this._onTabDown, this);
    }

    _init(): void {
        // this category tab bg
        this.bg = this.scene.add.sprite(0, 0, "category_tab_bg");
        this.add(this.bg);

        // create category text
        this.categoryNameText = this.scene.add.text(0, 0, this.categoryName, { 
            fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif', 
            fontSize : "36px",
            stroke : "#000000",
            strokeThickness : 2
        });
        this.categoryNameText.setOrigin(0.5);
        this.add(this.categoryNameText);
    }

    _unload(): void {
        // this.shutdown();
        this.removeAllListeners();
        this.removeAll(true);
        this.destroy(true)
    }

    _resize(): void {
        // this.bg?.setScale(this.scene.scale.gameSize.aspectRatio);
        // this.setPosition(this.scene.scale.gameSize.width * 0.5, this.scene.scale.gameSize.height * 0.5);
    }

    private _onTabDown () : void {
        this.scene.events.emit("category_selected", this.id, this.categoryName);
        this._unload();
    }

    _getId(): number {
        return this.id;
    }
    
    _getTheCategory(): string {
        return this.categoryName;
    }

}
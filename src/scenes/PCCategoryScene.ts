import { Scene } from "phaser";
import { PIScene } from "../interfaces/PIScene";
import PPCategoryTab from "../prefabs/PPCategoryTab";
import { PGameManager } from "../managers/PGameManager";
import { PTResponse } from "../types/PTypes";
import PPQuestionDisplay from "../prefabs/PPQuestionDisplay";
import PPOption from "../prefabs/PPOption";
import PPOptionsContainer from "../prefabs/PPOptionsContainer";

export default class extends Scene implements PIScene{
    bg : Phaser.GameObjects.Image | null
    categoryContainer : PPCategoryTab | null
    questionContainer : PPQuestionDisplay | null
    optionsContainer : PPOptionsContainer | null

    
    gameManager : PGameManager | null
    constructor () {
        super({
            key : "category_scene"
        })
        this.gameManager = null;
        this.categoryContainer = null;
        this.questionContainer = null;
        this.optionsContainer = null;
        this.bg = null;
    }

    init(): void {
    }
    
    preload(): void {
        this.load.image("bg", "./assets/images/bg.jpg");
        this.load.image("category_tab_bg", "./assets/images/categorytab.png");
    }

    create(): void {
        // create bg
        // this.bg = this.add.image(this.scale.gameSize.width * 0.5, this.scale.gameSize.height * 0.5, "bg");
        // this.bg.setDisplaySize(this.scale.gameSize.width, this.scale.gameSize.height);

        this.categoryContainer = new PPCategoryTab({
            scene : this,
            id : 0,
            name : "sports",
            position : {
                x : this.scale.gameSize.width * 0.5,
                y : this.scale.gameSize.height * 0.5
            }
        })

        this.gameManager = new PGameManager(this);

        this.scale.on("resize", this.resize, this);
        this.events.on("start_quiz", this.onStartQuiz, this);
    }

    update(): void {
    }

    onStartQuiz (data : PTResponse) {
        console.log(data);

        // create question box
        if (this.questionContainer) {
        } else {
            this.questionContainer = new PPQuestionDisplay({
                scene : this,
                position : {
                    x : this.scale.gameSize.width * 0.5,
                    y : this.scale.gameSize.height * 0.1
                }, text : ""
            });
        }
        // create options container
        if (this.optionsContainer) {
        } else {
            this.optionsContainer = new PPOptionsContainer(this, {
                x : this.scale.gameSize.width * 0.33,
                y : this.scale.gameSize.height * 0.6
            })
        }
        this.questionContainer._refreshQuestion(data.question);
        this.optionsContainer._refreshOptions(data.options);
    }

    resize(gamesize:any, baseSize:any, displaySize:any, prevWidth:any, prevHeight:any ): void{
        // console.table([gamesize, baseSize, displaySize, prevWidth, prevHeight])
        // console.log("==>", gamesize.width, prevWidth);
        // console.log("==>", baseSize.width, prevWidth);
        // console.log("==>", displaySize.width, prevWidth);

        // this.cameras.resize(gamesize.width, gamesize.height);
        // if (this.bg) {
        //     this.bg.setDisplaySize(gamesize.width, gamesize.height);
        //     this.bg.setPosition(gamesize.width * 0.5, gamesize.height * 0.5)
        // }

        // this.categoryContainer?._resize();
    }
    
}
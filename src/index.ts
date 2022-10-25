import Phaser from "phaser";
import { gameConfig } from "./configs/PCGameconfig";

class QuizGame extends Phaser.Game {
    constructor(gameConfig : Phaser.Types.Core.GameConfig) {
        super(gameConfig);
    }

    protected onBlur(): void {
        console.log(" ====> on blur ==> ");
    }

    protected onFocus(): void {
        console.log(" ====> on focus ==> ");

    }

    protected onVisible(): void {
        console.log(" ====> on visible ==> ");

    }

    protected onHidden(): void {
        console.log(" ====> on hidden ==> ");

    }
}

//@ts-ignore
window['game'] = new QuizGame(gameConfig);
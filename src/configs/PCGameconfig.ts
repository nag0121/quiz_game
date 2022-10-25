import { MAX_SIZE_HEIGHT_SCREEN, MAX_SIZE_WIDTH_SCREEN, MIN_SIZE_HEIGHT_SCREEN, MIN_SIZE_WIDTH_SCREEN, SIZE_HEIGHT_SCREEN, SIZE_WIDTH_SCREEN } from "../helpers/PConstants";
import PCCategoryScene from "../scenes/PCCategoryScene";

export const gameConfig : Phaser.Types.Core.GameConfig = {
    parent : "game",
    autoFocus : true,
    antialias : true,
    backgroundColor : "#fff000",
    scale : {
        mode: Phaser.Scale.FIT,
        width: SIZE_WIDTH_SCREEN,
        height: SIZE_HEIGHT_SCREEN,
        min: {
            width: MIN_SIZE_WIDTH_SCREEN,
            height: MIN_SIZE_HEIGHT_SCREEN
        },
        autoCenter : Phaser.Scale.CENTER_BOTH
        // max: {
        //     width: MAX_SIZE_WIDTH_SCREEN,
        //     height: MAX_SIZE_HEIGHT_SCREEN
        // },
    },
    scene : [PCCategoryScene]
}
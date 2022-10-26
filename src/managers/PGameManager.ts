import { PCAnswers, PCOptions } from "../configs/PQAnswers";
import { getRandomQuestion } from "../helpers/PHelperFunctions";
import { PTResponse } from "../types/PTypes";

export class PGameManager {
    private scene : Phaser.Scene

    constructor (scene : Phaser.Scene) {
        this.scene = scene;

        this.scene.events.addListener("category_selected", this._onCategorySelected, this);
        this.scene.events.addListener("option_selected", this._onOptionSelected, this);
    }

    _onCategorySelected (id : number, categoryName : string) : void {
        let [question, questionIndex] = [...getRandomQuestion(categoryName)];
        // @ts-ignore
        let options = PCOptions[categoryName][questionIndex];
        // @ts-ignore
        let answer = PCAnswers[categoryName][questionIndex];

        const resObj : PTResponse = {
            categoryName : categoryName,
            question : question,
            options : options, 
            answer : answer
        }

        this.scene.events.emit("start_quiz", resObj);
    }

    _onOptionSelected(answer : string) : void {
        // let correctAnswer = PCAnswers
    }
    
}
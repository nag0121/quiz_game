import { ECategory } from "../configs/PEnums";
import { PCQuestions } from "../configs/PQuestions";

export function getRandomQuestion(categorytype : string) : [string, number] {
    let question = "";
    let questionIndex = 0;
    switch (categorytype) {
        case ECategory.sports:
            questionIndex = Phaser.Math.Between(0, PCQuestions.sports.length - 1);
            question = PCQuestions.sports[questionIndex];
            break;
    
        default:
            break;
    }
    console.log(question, questionIndex)
    return [question, questionIndex];
}
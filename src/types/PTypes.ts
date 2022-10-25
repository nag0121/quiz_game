import { Scene } from "phaser"

export type PTPosition = {
    x : number,
    y : number
}

export type PTCatagoryTab = {
    scene : Scene,
    position : PTPosition,
    id : number,
    name : string
}

export type PTResponse = {
    categoryName : string
    question : string
    options : Array<any>
    answer : string
}

export type PTOption = {
    scene : Scene,
    position : PTPosition,
    text : string
}

export type PQDisplay = {
    scene : Scene,
    position : PTPosition,
    text : string
}
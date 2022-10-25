import { PTCatagoryTab } from "../types/PTypes"

export interface PICategoryTab extends PIView{
    id : number,
    categoryName : string
    config : PTCatagoryTab
    _getId() : number
    _getTheCategory() : string
}

export interface PIView {
    _init() : void
    _unload() : void
    _resize() : void
    _addListeners() : void
}



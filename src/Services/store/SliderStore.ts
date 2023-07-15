import { makeAutoObservable } from "mobx";
import { find } from "lodash";
import { SliderData, SliderDataInitial, SliderDataType } from "../../constants/SliderData";

export default class SliderStore {
    constructor() {
        makeAutoObservable(this)
    }
    currentSliderData: SliderDataType = SliderData[0]

    getSliderData = (id: number) => {
        this.currentSliderData = find(SliderData, { id }) as SliderDataType
    }

}
import { makeAutoObservable, runInAction } from "mobx";
import { find } from "lodash";
import { SliderData, SliderDataInitial, SliderDataType } from "../../constants/SliderData";

export default class SliderStore {
    constructor() {
        makeAutoObservable(this)
    }
    currentSliderData: SliderDataType = SliderData[0]

    current = 0

    nextSilader = () => {
        runInAction(() => {
            this.current = this.current + 1
        })  
        return this.current
    }

    backSilader = () => {
        runInAction(() => {
            this.current = this.current - 1
        })
        return this.current
    }

    getSliderData = (id: number) => {
        this.currentSliderData = find(SliderData, { id }) as SliderDataType
    }

}
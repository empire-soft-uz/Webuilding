import { makeAutoObservable, runInAction, toJS } from "mobx";
import { find } from "lodash";
import { SliderData, SliderDataInitial, SliderDataType } from "../../constants/SliderData";

export default class SliderStore {
    sliderData: SliderDataType[] = SliderData;
    
    constructor() {
        makeAutoObservable(this)
    }
    currentSliderData: SliderDataType = SliderData[0]

    current = 0

    nextSilader = () => {
            const arr = [...this.sliderData];
            this.sliderData = [...this.sliderData, {...arr[this.current], id:this.sliderData.length + 1}];
            this.current++;
        return this.current
    }

    backSilader = () => {
        this.current--;
        return this.current
    }

    getSliderData = (id: number) => {
        this.currentSliderData = find(this.sliderData, { id }) as SliderDataType
    }

    // 
    setSliderData = (data:any) => {
        this.sliderData = data;
    }

}
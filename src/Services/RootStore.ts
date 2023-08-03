import { makeAutoObservable } from "mobx";
import * as mobx from "mobx";
import { createContext } from "react";
import { enableStaticRendering } from "mobx-react-lite";
import VisibleStore from "./store/VisibleStore";
import SliderStore from "./store/SliderStore";
import OnePruduct from "./store/OneProduct";

export class AppRootStore {
  visibleStore = new VisibleStore();
  sliderStore = new SliderStore()
  oneProductStore = new OnePruduct()

  constructor() {
    makeAutoObservable(this);
  }
}

const rootStore = new AppRootStore();
export default createContext(rootStore);

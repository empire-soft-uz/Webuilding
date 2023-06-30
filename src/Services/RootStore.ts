import { makeAutoObservable } from "mobx";
import * as mobx from "mobx";
import { createContext } from "react";
import { enableStaticRendering } from "mobx-react-lite";
import VisibleStore from "./store/VisibleStore";

export class AppRootStore {
  visibleStore = new VisibleStore();

  constructor() {
    makeAutoObservable(this);
  }
}

const rootStore = new AppRootStore();
export default createContext(rootStore);

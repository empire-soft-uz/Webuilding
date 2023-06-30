import { makeAutoObservable } from "mobx";

import { createContext } from "react";
import { FilterState } from "./state/FilterState";

export class AppRootState {
  filterState = new FilterState();
}

const rootStore = new AppRootState();
export default createContext(rootStore);

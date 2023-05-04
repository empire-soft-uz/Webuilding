import { makeAutoObservable } from "mobx"
import * as mobx from "mobx"
import { createContext } from "react"
import {enableStaticRendering} from "mobx-react-lite"
import VisibleStore from "./VisibleStore"
import OnePruduct from "./OneProduct"

export class AppRootStore{
    visibleStore = new VisibleStore()
    oneProductStore = new OnePruduct()

    constructor() {
        makeAutoObservable(this)
    }
}

const rootStore = new AppRootStore()
export default createContext(rootStore)
import { makeAutoObservable } from "mobx";

type modal = {
    filterModal: boolean;
    header: boolean;
};

export default class VisibleStore {
    constructor() {
        makeAutoObservable(this);
    }

    visiable: modal = {
        filterModal: false,
        header: false,
    };

    show = (key: keyof modal) => {
        this.visiable[key] = true;
    };

    hide = (key: keyof modal) => {
        this.visiable[key] = false;
    };

    toggle = (key: keyof modal) => {
        this.visiable[key] = !this.visiable[key];
    };
}

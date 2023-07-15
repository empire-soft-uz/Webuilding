import { ASSETS } from "./requireAssets";

export type SliderDataType = {
    id: number;
    title: string;
    text: string;
    location: string;
    cardImage: string;
    backImage: string;
}
export const SliderDataInitial: SliderDataType = {
        id: 0,
        title: "",
        text: "",
        location: "",
        cardImage: "",
        backImage: ""
}


export const SliderData: SliderDataType[] = [
    {
        id: 1,
        title: "Malgovik",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste libero error ad nesciunt adipisci nobis quas ipsa unde tempore, hic sint cum fugit rem officia? Facilis a autem nesciunt placeat.",
        location: "Tashkent city",
        cardImage: ASSETS.b1,
        backImage: ASSETS.b2,
    },
    {
        id: 2,
        title: "Telegram",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste libero error ad nesciunt adipisci nobis quas ipsa unde tempore, hic sint cum fugit rem officia? Facilis a autem nesciunt placeat.",
        location: "Xonsaroy",
        cardImage: ASSETS.b3,
        backImage: ASSETS.b4,
    },
    {
        id: 3,
        title: "Youtube",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste libero error ad nesciunt adipisci nobis quas ipsa unde tempore, hic sint cum fugit rem officia? Facilis a autem nesciunt placeat.",
        location: "Piramit",
        cardImage: ASSETS.b5,
        backImage: ASSETS.b6,
    },
    {
        id: 4,
        title: "Youtube",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste libero error ad nesciunt adipisci nobis quas ipsa unde tempore, hic sint cum fugit rem officia? Facilis a autem nesciunt placeat.",
        location: "Hilton",
        cardImage: ASSETS.b7,
        backImage: ASSETS.b8,
    },
    {
        id: 5,
        title: "Youtube",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste libero error ad nesciunt adipisci nobis quas ipsa unde tempore, hic sint cum fugit rem officia? Facilis a autem nesciunt placeat.",
        location: "Mirobod",
        cardImage: ASSETS.b9,
        backImage: ASSETS.b10,
    }
]


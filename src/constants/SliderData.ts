import { ASSETS } from "./requireAssets";

export type SliderDataType = {
    id: number;
    title: string;
    text: string;
    location: string;
    cardImage: string;
    backImage: string;
    name: string;
};
export const SliderDataInitial: SliderDataType = {
    id: 0,
    title: "",
    text: "",
    location: "",
    cardImage: "",
    backImage: "",
    name: "",
};

export const SliderData: SliderDataType[] = [
    {
        id: 1,
        title: "Malgovik",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste libero error ad nesciunt adipisci nobis quas ipsa unde tempore, hic sint cum fugit rem officia? Facilis a autem nesciunt placeat.",
        location: "Tashkent city",
        cardImage: ASSETS.b1,
        backImage: ASSETS.b2,
        name: "1",
    },
    {
        id: 2,
        title: "Telegram",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste libero error ad nesciunt adipisci nobis quas ipsa unde tempore, hic sint cum fugit rem officia? Facilis a autem nesciunt placeat.",
        location: "Xonsaroy",
        cardImage: ASSETS.b3,
        backImage: ASSETS.b4,
        name: "2",
    },
    {
        id: 3,
        title: "Youtube",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste libero error ad nesciunt adipisci nobis quas ipsa unde tempore, hic sint cum fugit rem officia? Facilis a autem nesciunt placeat.",
        location: "Piramit",
        cardImage: ASSETS.b5,
        backImage: ASSETS.b6,
        name: "3",
    },
    {
        id: 4,
        title: "Youtube",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste libero error ad nesciunt adipisci nobis quas ipsa unde tempore, hic sint cum fugit rem officia? Facilis a autem nesciunt placeat.",
        location: "Hilton",
        cardImage: ASSETS.b7,
        backImage: ASSETS.b8,
        name: "4",
    },
    {
        id: 5,
        title: "Youtube",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste libero error ad nesciunt adipisci nobis quas ipsa unde tempore, hic sint cum fugit rem officia? Facilis a autem nesciunt placeat.",
        location: "Mirobod",
        cardImage: ASSETS.b9,
        backImage: ASSETS.b10,
        name: "5",
    },
];

export const PerfectCaruseldata = [
    {
        id: 1,
        imgUrl: ASSETS.b1,
        desc: "Some beautiful roads cannot be discovered without getting loss.",
        name: "«Bizning uylar» MCHJ",
        cc: 'GC "Monarx"',
        station: "1-bekat",
        stationTime: "8 min.",
        housesSale: "Uylar sotiladi!",
        price: "35 000 $ dan boshlab",
        countFlat: "5 ta kvartira",
    },
    {
        id: 2,
        imgUrl: ASSETS.b2,
        desc: "Some beautiful roads cannot be discovered without getting loss.",
        name: "«Wellbe» MCHJ",
        cc: 'GC "Monarx"',
        station: "1-bekat",
        stationTime: "8 min.",
        housesSale: "Uylar sotiladi!",
        price: "35 000 $ dan boshlab",
        countFlat: "5 ta kvartira",
    },
    {
        id: 3,
        imgUrl: ASSETS.b3,
        desc: "Some beautiful roads cannot be discovered without getting loss.",
        name: "«Xonsaroy» MCHJ",
        cc: 'GC "Monarx"',
        station: "1-bekat",
        stationTime: "8 min.",
        housesSale: "Uylar sotiladi!",
        price: "35 000 $ dan boshlab",
        countFlat: "5 ta kvartira",
    },
    {
        id: 4,
        imgUrl: ASSETS.b4,
        desc: "Some beautiful roads cannot be discovered without getting loss.",
        name: "«Xonsaroy» MCHJ",
        cc: 'GC "Monarx"',
        station: "1-bekat",
        stationTime: "8 min.",
        housesSale: "Uylar sotiladi!",
        price: "35 000 $ dan boshlab",
        countFlat: "5 ta kvartira",
    },
    {
        id: 5,
        imgUrl: ASSETS.b5,
        desc: "Some beautiful roads cannot be discovered without getting loss.",
        name: "«Xonsaroy» MCHJ",
        cc: 'GC "Monarx"',
        station: "1-bekat",
        stationTime: "8 min.",
        housesSale: "Uylar sotiladi!",
        price: "35 000 $ dan boshlab",
        countFlat: "5 ta kvartira",
    },
];

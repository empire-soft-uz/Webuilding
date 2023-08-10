import { CarIcon, PersonIcon } from "../assets/icons";
import { ASSETS } from "./requireAssets";

export type ProductBodyType = {
    id: number;
    name: string;
    key: string;
}[];

export const ProductBodyData: ProductBodyType = [
    {
        id: 0,
        name: "Barcha ko'rpuslar",
        key: "all",
    },
    {
        id: 1,
        key: "A1",
        name: "A1",
    },
    {
        id: 2,
        key: "A2",
        name: "A2",
    },
    {
        id: 3,
        key: "A3",
        name: "A3",
    },
    {
        id: 4,
        key: "A4",
        name: "A4",
    },
    {
        id: 5,
        key: "A5",
        name: "A5",
    },
    {
        id: 6,
        key: "A6",
        name: "A6",
    },
    {
        id: 7,
        key: "A7",
        name: "A7",
    },
    {
        id: 8,
        key: "A8",
        name: "A8",
    },
    {
        id: 9,
        key: "A9",
        name: "A9",
    },
    {
        id: 10,
        key: "B1",
        name: "B1",
    },
    {
        id: 11,
        key: "B2",
        name: "B2",
    },
    {
        id: 12,
        key: "B3",
        name: "B3",
    },
    {
        id: 13,
        key: "B4",
        name: "B4",
    },
    {
        id: 14,
        key: "B5",
        name: "B5",
    },
    {
        id: 15,
        key: "B6",
        name: "B6",
    },
    {
        id: 16,
        key: "B7",
        name: "B7",
    },
    {
        id: 17,
        key: "B8",
        name: "B8",
    },
    {
        id: 18,
        key: "B9",
        name: "B9",
    },
    {
        id: 19,
        key: "B10",
        name: "B10",
    },
    {
        id: 20,
        key: "C1",
        name: "C1",
    },
    {
        id: 21,
        key: "C2",
        name: "C2",
    },
    {
        id: 22,
        key: "C3",
        name: "C3",
    },
    {
        id: 23,
        key: "C4",
        name: "C4",
    },
    {
        id: 24,
        key: "C5",
        name: "C5",
    },
    {
        id: 25,
        key: "C6",
        name: "C6",
    },
    {
        id: 26,
        key: "C7",
        name: "C7",
    },
    {
        id: 27,
        key: "C8",
        name: "C8",
    },
    {
        id: 28,
        key: "C9",
        name: "C9",
    },
];

export type ProductDataType = {
    id: number;
    name: string;
    images: {
        id: number;
        image: string;
    }[];
    company: string;
    price: string | number;
    homeCount: number | string;
    process: string;
    near: string;
    nearTime: string;
    studios: string;
    twoRooms: string;
    fourRooms: string;
    oneRoom: string;
    threeRooms: string;
    fiveRooms: string;
    contact: string;
    symbolDotIcon: any;
    processMedia: {
        id: number;
        image: string;
        video: any;
    }[];
    flatPlaces: string | number;
    finishTime: number | string;
    buildings: string | number;
    ceilings: string | number;
    homeType: string;
    class: string;
    floorNumbers: string;
    finishVariants: string;
    producerTeam: string;
    deliveryInRooms: {
        id: number;
        name: string;
        area: string;
        price: string;
        count: string;
        data: {
            id: number;
            img: string;
            text: string;
            price: string;
            area: string;
            finish: string;
        }[];
    }[];
    minExpense: string | number;
    location: string;
    howManyBuilding: string;
    nearGoingTime: {
        name: string;
        time: number | string;
        type: any;
    }[];
    bestUsefulComment: {
        name: string;
        coment: string;
        person: string;
        personImage: any;
    }[];
    locationToTransport: string;
    infrastructure: {
        id: number;
        placeName: string;
        icon?: any;
        security?: string;
        type: string;
    }[];
    nearBuildings: {
        id: number;
        yandexUrl1: string;
        yandexUrl2: string;
        image: string;
        title: string;
        name: string;
        type: string;
        age: string;
        goType: string;
        goTime: string;
        price: string;
        size: string;
    }[];
    arrangements: number | string;
    body: {
        id: number;
        key: string;
        image: string;
        rooms: string;
        building: string;
        floor: string;
        common: string;
        accommodation: string;
        kitchen: string;
        roomsArea: string;
        bodySizeFrom: string;
        bodySizeTo: string;
    }[];
    investment: {
        text: string;
        middlePrice: string;
        flatMiddlePrice: string | number;
        flatMiddlePriceDown: string | number;
        squareMiddlePrice: string | number;
        squareMiddlePriceDown: string | number;
        soldFlatsfFrom: string | number;
        soldFlatsf: string | number;
    }[];
    accessLocationToTr: {
        text: string;
    }[];
    aboutProducer: {
        process: string;
        finished: string | number;
        construction: string | number;
        companyAge: number | string;
        companyText: string;
    };
    documents: {
        fileName: string;
        file: any;
        fileDate: string | number;
    }[];
    placeCommentName: string;
    placeCommentCount: number | string;
    placeCommentRatingCount: number | string;
    placeComments: {
        id: number;
        personName: string;
        personImage: any;
        likeCount: number | string;
        disLikeCount: number | string;
        date: string | number;
        comment: string;
        positiveComment: string;
        negativeComment: string;
    }[];
};

export const ProductData: ProductDataType[] = [
    {
        id: 1,
        name: "ЖК «Modern Sergeli»",
        images: [
            {
                id: 1,
                image: ASSETS.elysium1,
            },
            {
                id: 2,
                image: ASSETS.elysium2,
            },
            {
                id: 3,
                image: ASSETS.elysium3,
            },
            {
                id: 4,
                image: ASSETS.elysium4,
            },
            {
                id: 5,
                image: ASSETS.elysium5,
            },
            {
                id: 6,
                image: ASSETS.elysium6,
            },
            {
                id: 7,
                image: ASSETS.elysium7,
            },
            {
                id: 8,
                image: ASSETS.elysium8,
            },
        ],
        company: "Modern Sergeli",
        price: "25 000 $ dan",
        homeCount: "717 xonadon",
        process: "1-chorak 2023",
        near: "Bekat 2 / Toshkent xalqa yo'li",
        nearTime: "1.1 km 4 daqiqa",
        studios: "26,8",
        twoRooms: "58m2",
        fourRooms: "112m2",
        oneRoom: "35m2",
        threeRooms: "87m2",
        fiveRooms: "0",
        contact: "+998 ( 99 ) 310 37 63",
        symbolDotIcon: <CarIcon />,
        processMedia: [
            {
                id: 1,
                image: ASSETS.pr1,
                video: "",
            },
        ],
        flatPlaces: "35 - 87 m2",
        finishTime: "2023 - 2025",
        buildings: "6 ta bino",
        ceilings: "2.6 m - 2.7 m",
        homeType: "Panel, monolit g'isht, g'isht, monolit",
        class: "Iqtisodiyot",
        floorNumbers: "10 dan 18 gacha",
        finishVariants: "Mebel bilan tugatish",
        producerTeam: "'Domda' Guruhi",
        deliveryInRooms: [
            {
                id: 1,
                name: "1-XONALI",
                area: "35 M2 DAN",
                price: "8.2 MLN $ DAN",
                count: "4 TA TAKLIFLAR",
                data: [
                    {
                        id: 1,
                        img: ASSETS.inelysium1,
                        text: "1-x xonali kvartira, 35 m2 , 4/9 qavat",
                        price: "25 000 $",
                        area: "35 m2 dan",
                        finish: "Tugallandi",
                    },
                    {
                        id: 2,
                        img: ASSETS.inelysium2,
                        text: "1-x xonali kvartira, 35 m2 , 4/9 qavat",
                        price: "25 000 $",
                        area: "35 m2 dan",
                        finish: "Tugallandi",
                    },
                    {
                        id: 1,
                        img: ASSETS.inelysium3,
                        text: "1-x xonali kvartira, 35 m2 , 4/9 qavat",
                        price: "25 000 $",
                        area: "35 m2 dan",
                        finish: "Tugallandi",
                    },
                    {
                        id: 2,
                        img: ASSETS.inelysium4,
                        text: "1-x xonali kvartira, 35 m2 , 4/9 qavat",
                        price: "25 000 $",
                        area: "35 m2 dan",
                        finish: "Tugallandi",
                    },
                ],
            },
            {
                id: 2,
                name: "2-XONALI",
                area: "58 M2 DAN",
                price: "8.2 MLN $ DAN",
                count: "25 TA TAKLIFLAR",
                data: [
                    {
                        id: 1,
                        img: ASSETS.inelysium5,
                        text: "2-x xonali kvartira, 58 m2 , 4/9 qavat",
                        price: "45 000 $",
                        area: "58 m2 dan",
                        finish: "Tugallandi",
                    },
                    {
                        id: 2,
                        img: ASSETS.inelysium6,
                        text: "2-x xonali kvartira, 58 m2 , 4/9 qavat",
                        price: "45 000 $",
                        area: "58 m2 dan",
                        finish: "Tugallandi",
                    },
                    {
                        id: 3,
                        img: ASSETS.inelysium1,
                        text: "2-x xonali kvartira, 58 m2 , 4/9 qavat",
                        price: "45 000 $",
                        area: "58 m2 dan",
                        finish: "Tugallandi",
                    },
                    {
                        id: 4,
                        img: ASSETS.inelysium2,
                        text: "2-x xonali kvartira, 58 m2 , 4/9 qavat",
                        price: "45 000 $",
                        area: "58 m2 dan",
                        finish: "Tugallandi",
                    },
                ],
            },
            {
                id: 3,
                name: "3-XONALI",
                area: "87 M2 DAN",
                price: "8.7 MLN $ DAN",
                count: "5 TA TAKLIFLAR",
                data: [
                    {
                        id: 1,
                        img: ASSETS.inelysium3,
                        text: "3-x xonali kvartira, 87 m2 , 4/9 qavat",
                        price: "70 000 $",
                        area: "87 m2 dan",
                        finish: "Tugallandi",
                    },
                    {
                        id: 2,
                        img: ASSETS.inelysium4,
                        text: "3-x xonali kvartira, 87 m2 , 4/9 qavat",
                        price: "70 000 $",
                        area: "87 m2 dan",
                        finish: "Tugallandi",
                    },
                    {
                        id: 3,
                        img: ASSETS.inelysium5,
                        text: "3-x xonali kvartira, 87 m2 , 4/9 qavat",
                        price: "70 000 $",
                        area: "87 m2 dan",
                        finish: "Tugallandi",
                    },
                    {
                        id: 4,
                        img: ASSETS.inelysium6,
                        text: "3-x xonali kvartira, 87 m2 , 4/9 qavat",
                        price: "70 000 $",
                        area: "87 m2 dan",
                        finish: "Tugallandi",
                    },
                ],
            },
            {
                id: 4,
                name: "4-XONALI",
                area: "112 M2 DAN",
                price: "8.9 MLN $ DAN",
                count: "2 TA TAKLIFLAR",
                data: [
                    {
                        id: 1,
                        img: ASSETS.inelysium1,
                        text: "4-x xonali kvartira, 112 m2 , 4/9 qavat",
                        price: "93 000 $",
                        area: "112 m2 dan",
                        finish: "Tugallandi",
                    },
                    {
                        id: 2,
                        img: ASSETS.inelysium2,
                        text: "4-x xonali kvartira, 112 m2 , 4/9 qavat",
                        price: "93 000 $",
                        area: "112 m2 dan",
                        finish: "Tugallandi",
                    },
                    {
                        id: 3,
                        img: ASSETS.inelysium3,
                        text: "4-x xonali kvartira, 112 m2 , 4/9 qavat",
                        price: "93 000 $",
                        area: "112 m2 dan",
                        finish: "Tugallandi",
                    },
                    {
                        id: 4,
                        img: ASSETS.inelysium4,
                        text: "4-x xonali kvartira, 112 m2 , 4/9 qavat",
                        price: "93 000 $",
                        area: "112 m2 dan",
                        finish: "Tugallandi",
                    },
                ],
            },
        ],
        minExpense: "Minimal xarajat, ming $",
        location: "Toshkent sh, Yangi hayot t, O’zar ko’chasi 72 uy 47",
        howManyBuilding: "30",
        nearGoingTime: [
            {
                name: "Qizil Baltiya",
                time: "5 min",
                type: "",
            },
        ],
        bestUsefulComment: [
            {
                name: "",
                coment: "Idrok gomeostazni yoritadi, Xobbs bu muammoni birinchilardan bo'lib yoritib berdi psixologiya nuqtai nazaridang",
                person: "Begmamatov Shahzod",
                personImage: ASSETS.person,
            },
        ],
        locationToTransport: "Joylashuv, transportga kirish imkoniyati",
        infrastructure: [
            {
                id: 1,
                placeName: "Maktab",
                icon: ASSETS.schoolBuilding,
                security: "Devor bilan o'ralgan perimetr",
                type: "school",
            },
            {
                id: 2,
                placeName: "Bog'cha",
                icon: ASSETS.babyFace,
                type: "kgarten",
            },
        ],
        nearBuildings: [
            {
                id: 1,
                yandexUrl1: "41.329747",
                yandexUrl2: "69.229496",
                title: "1-Maktab",
                name: "1-maktab",
                image: "https://cdn.netsolve.ru/Residents/skyview/renders/_HnYSP2ekNztgrp64V2n5xzjfp052mHP6.png",
                type: "school",
                age: "2-й кв. 2024",
                goType: "Баррикадная",
                goTime: "5 мин.",
                price: "от 0 млн ₽",
                size: "0 кв.",
            },
            {
                id: 2,
                yandexUrl1: "41.318428",
                yandexUrl2: "69.288580",
                title: "17-Maktab",
                name: "17-maktab",
                image: "https://cdn.netsolve.ru/Residents/skyview/renders/_HnYSP2ekNztgrp64V2n5xzjfp052mHP6.png",
                type: "school",
                age: "2-й кв. 2024",
                goType: "Баррикадная",
                goTime: "5 мин.",
                price: "от 0 млн ₽",
                size: "0 кв.",
            },
            {
                id: 3,
                yandexUrl1: "41.309806",
                yandexUrl2: "69.221387",
                title: "13-Maktab",
                name: "13-maktab",
                image: "https://avatars.mds.yandex.net/get-altay/1870294/2a0000016f9d7150881aca6ebf1d5e924349/L_height",
                type: "kgarten",
                age: "2-й кв. 2024",
                goType: "Баррикадная",
                goTime: "5 мин.",
                price: "от 0 млн ₽",
                size: "0 кв.",
            },
        ],
        arrangements: "30",
        body: [
            {
                id: 1,
                key: "A1",
                image: ASSETS.body1,
                rooms: "3",
                building: "A1, A3, A5, A9",
                floor: "1, 2, 4, 6, 7",
                common: "79.35 m2",
                accommodation: "67.30 m2",
                kitchen: "7.96 m2",
                roomsArea: "12.7 / 10.98 / 11.45 m2",
                bodySizeFrom: "Korpus 4.2, 3-xona, 171 493 R / m2 dan",
                bodySizeTo: "52,9 m2 dan 9 068 570 R gacha",
            },
            {
                id: 2,
                key: "A1",
                image: ASSETS.body1,
                rooms: "3",
                building: "A1, A9, A10",
                floor: "1, 2, 4, 6, 7",
                common: "79.35 m2",
                accommodation: "67.30 m2",
                kitchen: "7.96 m2",
                roomsArea: "12.7 / 10.98 / 11.45 m2",
                bodySizeFrom: "Korpus 4.2, 3-xona, 171 493 R / m2 dan",
                bodySizeTo: "52,9 m2 dan 9 068 570 R gacha",
            },
            {
                id: 3,
                key: "A2",
                image: ASSETS.body1,
                rooms: "3",
                building: "A1, A3, A6, A9",
                floor: "1, 2, 4, 6, 7",
                common: "79.35 m2",
                accommodation: "67.30 m2",
                kitchen: "7.96 m2",
                roomsArea: "12.7 / 10.98 / 11.45 m2",
                bodySizeFrom: "Korpus 4.2, 3-xona, 171 493 R / m2 dan",
                bodySizeTo: "52,9 m2 dan 9 068 570 R gacha",
            },
            {
                id: 4,
                key: "A3",
                image: ASSETS.body1,
                rooms: "3",
                building: "A1, A9 C2, C5",
                floor: "1, 3, 4, 8",
                common: "79.35 m2",
                accommodation: "67.30 m2",
                kitchen: "7.96 m2",
                roomsArea: "12.7 / 10.98 / 11.45 m2",
                bodySizeFrom: "Korpus 4.2, 3-xona, 171 493 R / m2 dan",
                bodySizeTo: "52,9 m2 dan 9 068 570 R gacha",
            },
            {
                id: 5,
                key: "A4",
                image: ASSETS.body1,
                rooms: "3",
                building: "A1, A9 C2, C5",
                floor: "1, 3, 4, 8",
                common: "79.35 m2",
                accommodation: "67.30 m2",
                kitchen: "7.96 m2",
                roomsArea: "12.7 / 10.98 / 11.45 m2",
                bodySizeFrom: "Korpus 4.2, 3-xona, 171 493 R / m2 dan",
                bodySizeTo: "52,9 m2 dan 9 068 570 R gacha",
            },
            {
                id: 6,
                key: "A5",
                image: ASSETS.body1,
                rooms: "3",
                building: "A1, A9 C2, C5",
                floor: "1, 3, 4, 8",
                common: "79.35 m2",
                accommodation: "67.30 m2",
                kitchen: "7.96 m2",
                roomsArea: "12.7 / 10.98 / 11.45 m2",
                bodySizeFrom: "Korpus 4.2, 3-xona, 171 493 R / m2 dan",
                bodySizeTo: "52,9 m2 dan 9 068 570 R gacha",
            },
            {
                id: 7,
                key: "A6",
                image: ASSETS.body1,
                rooms: "3",
                building: "A1, A9 C2, C5",
                floor: "1, 3, 4, 8",
                common: "79.35 m2",
                accommodation: "67.30 m2",
                kitchen: "7.96 m2",
                roomsArea: "12.7 / 10.98 / 11.45 m2",
                bodySizeFrom: "Korpus 4.2, 3-xona, 171 493 R / m2 dan",
                bodySizeTo: "52,9 m2 dan 9 068 570 R gacha",
            },
            {
                id: 8,
                key: "A7",
                image: ASSETS.body1,
                rooms: "3",
                building: "A1, A9 C2, C5",
                floor: "1, 3, 4, 8",
                common: "79.35 m2",
                accommodation: "67.30 m2",
                kitchen: "7.96 m2",
                roomsArea: "12.7 / 10.98 / 11.45 m2",
                bodySizeFrom: "Korpus 4.2, 3-xona, 171 493 R / m2 dan",
                bodySizeTo: "52,9 m2 dan 9 068 570 R gacha",
            },
            {
                id: 9,
                key: "A8",
                image: ASSETS.body1,
                rooms: "3",
                building: "A1, A9 C2, C5",
                floor: "1, 3, 4, 8",
                common: "79.35 m2",
                accommodation: "67.30 m2",
                kitchen: "7.96 m2",
                roomsArea: "12.7 / 10.98 / 11.45 m2",
                bodySizeFrom: "Korpus 4.2, 3-xona, 171 493 R / m2 dan",
                bodySizeTo: "52,9 m2 dan 9 068 570 R gacha",
            },
            {
                id: 10,
                key: "A9",
                image: ASSETS.body1,
                rooms: "3",
                building: "A1, A9 C2, C5",
                floor: "1, 3, 4, 8",
                common: "79.35 m2",
                accommodation: "67.30 m2",
                kitchen: "7.96 m2",
                roomsArea: "12.7 / 10.98 / 11.45 m2",
                bodySizeFrom: "Korpus 4.2, 3-xona, 171 493 R / m2 dan",
                bodySizeTo: "52,9 m2 dan 9 068 570 R gacha",
            },
            {
                id: 11,
                key: "B1",
                image: ASSETS.body1,
                rooms: "3",
                building: "A1, A9, B4, B8",
                floor: "1, 2, 3, 8",
                common: "79.35 m2",
                accommodation: "67.30 m2",
                kitchen: "7.96 m2",
                roomsArea: "12.7 / 10.98 / 11.45 m2",
                bodySizeFrom: "Korpus 4.2, 3-xona, 171 493 R / m2 dan",
                bodySizeTo: "52,9 m2 dan 9 068 570 R gacha",
            },
            {
                id: 12,
                key: "B2",
                image: ASSETS.body1,
                rooms: "3",
                building: "A1, A9, B2, B3",
                floor: "1, 5, 8",
                common: "79.35 m2",
                accommodation: "67.30 m2",
                kitchen: "7.96 m2",
                roomsArea: "12.7 / 10.98 / 11.45 m2",
                bodySizeFrom: "Korpus 4.2, 3-xona, 171 493 R / m2 dan",
                bodySizeTo: "52,9 m2 dan 9 068 570 R gacha",
            },
            {
                id: 13,
                key: "B3",
                image: ASSETS.body1,
                rooms: "3",
                building: "A1, A9, B2, B3",
                floor: "1, 5, 8",
                common: "79.35 m2",
                accommodation: "67.30 m2",
                kitchen: "7.96 m2",
                roomsArea: "12.7 / 10.98 / 11.45 m2",
                bodySizeFrom: "Korpus 4.2, 3-xona, 171 493 R / m2 dan",
                bodySizeTo: "52,9 m2 dan 9 068 570 R gacha",
            },
            {
                id: 14,
                key: "B4",
                image: ASSETS.body1,
                rooms: "3",
                building: "A1, A9, B2, B3",
                floor: "1, 5, 8",
                common: "79.35 m2",
                accommodation: "67.30 m2",
                kitchen: "7.96 m2",
                roomsArea: "12.7 / 10.98 / 11.45 m2",
                bodySizeFrom: "Korpus 4.2, 3-xona, 171 493 R / m2 dan",
                bodySizeTo: "52,9 m2 dan 9 068 570 R gacha",
            },
            {
                id: 15,
                key: "B5",
                image: ASSETS.body1,
                rooms: "3",
                building: "A1, A9, B2, B3",
                floor: "1, 5, 8",
                common: "79.35 m2",
                accommodation: "67.30 m2",
                kitchen: "7.96 m2",
                roomsArea: "12.7 / 10.98 / 11.45 m2",
                bodySizeFrom: "Korpus 4.2, 3-xona, 171 493 R / m2 dan",
                bodySizeTo: "52,9 m2 dan 9 068 570 R gacha",
            },
            {
                id: 16,
                key: "B6",
                image: ASSETS.body1,
                rooms: "3",
                building: "A1, A9, B2, B3",
                floor: "1, 5, 8",
                common: "79.35 m2",
                accommodation: "67.30 m2",
                kitchen: "7.96 m2",
                roomsArea: "12.7 / 10.98 / 11.45 m2",
                bodySizeFrom: "Korpus 4.2, 3-xona, 171 493 R / m2 dan",
                bodySizeTo: "52,9 m2 dan 9 068 570 R gacha",
            },
            {
                id: 17,
                key: "B7",
                image: ASSETS.body1,
                rooms: "3",
                building: "A1, A9, B2, B3",
                floor: "1, 5, 8",
                common: "79.35 m2",
                accommodation: "67.30 m2",
                kitchen: "7.96 m2",
                roomsArea: "12.7 / 10.98 / 11.45 m2",
                bodySizeFrom: "Korpus 4.2, 3-xona, 171 493 R / m2 dan",
                bodySizeTo: "52,9 m2 dan 9 068 570 R gacha",
            },
            {
                id: 18,
                key: "B8",
                image: ASSETS.body1,
                rooms: "3",
                building: "A1, A9, B2, B3",
                floor: "1, 5, 8",
                common: "79.35 m2",
                accommodation: "67.30 m2",
                kitchen: "7.96 m2",
                roomsArea: "12.7 / 10.98 / 11.45 m2",
                bodySizeFrom: "Korpus 4.2, 3-xona, 171 493 R / m2 dan",
                bodySizeTo: "52,9 m2 dan 9 068 570 R gacha",
            },
            {
                id: 19,
                key: "B9",
                image: ASSETS.body1,
                rooms: "3",
                building: "A1, A9, B2, B3",
                floor: "1, 5, 8",
                common: "79.35 m2",
                accommodation: "67.30 m2",
                kitchen: "7.96 m2",
                roomsArea: "12.7 / 10.98 / 11.45 m2",
                bodySizeFrom: "Korpus 4.2, 3-xona, 171 493 R / m2 dan",
                bodySizeTo: "52,9 m2 dan 9 068 570 R gacha",
            },
            {
                id: 20,
                key: "B10",
                image: ASSETS.body1,
                rooms: "3",
                building: "A1, A9, B2, B3",
                floor: "1, 5, 8",
                common: "79.35 m2",
                accommodation: "67.30 m2",
                kitchen: "7.96 m2",
                roomsArea: "12.7 / 10.98 / 11.45 m2",
                bodySizeFrom: "Korpus 4.2, 3-xona, 171 493 R / m2 dan",
                bodySizeTo: "52,9 m2 dan 9 068 570 R gacha",
            },
            {
                id: 21,
                key: "C1",
                image: ASSETS.body1,
                rooms: "3",
                building: "A1, A9, B2, B3",
                floor: "1, 7, 10",
                common: "79.35 m2",
                accommodation: "67.30 m2",
                kitchen: "7.96 m2",
                roomsArea: "12.7 / 10.98 / 11.45 m2",
                bodySizeFrom: "Korpus 4.2, 3-xona, 171 493 R / m2 dan",
                bodySizeTo: "52,9 m2 dan 9 068 570 R gacha",
            },
            {
                id: 22,
                key: "C2",
                image: ASSETS.body1,
                rooms: "3",
                building: "A1, A9, B2, B3",
                floor: "1, 7, 10",
                common: "79.35 m2",
                accommodation: "67.30 m2",
                kitchen: "7.96 m2",
                roomsArea: "12.7 / 10.98 / 11.45 m2",
                bodySizeFrom: "Korpus 4.2, 3-xona, 171 493 R / m2 dan",
                bodySizeTo: "52,9 m2 dan 9 068 570 R gacha",
            },
            {
                id: 23,
                key: "C3",
                image: ASSETS.body1,
                rooms: "3",
                building: "A1, A9, B2, B3",
                floor: "1, 7, 10",
                common: "79.35 m2",
                accommodation: "67.30 m2",
                kitchen: "7.96 m2",
                roomsArea: "12.7 / 10.98 / 11.45 m2",
                bodySizeFrom: "Korpus 4.2, 3-xona, 171 493 R / m2 dan",
                bodySizeTo: "52,9 m2 dan 9 068 570 R gacha",
            },
            {
                id: 24,
                key: "C4",
                image: ASSETS.body1,
                rooms: "3",
                building: "A1, A9, B2, B3",
                floor: "1, 7, 10",
                common: "79.35 m2",
                accommodation: "67.30 m2",
                kitchen: "7.96 m2",
                roomsArea: "12.7 / 10.98 / 11.45 m2",
                bodySizeFrom: "Korpus 4.2, 3-xona, 171 493 R / m2 dan",
                bodySizeTo: "52,9 m2 dan 9 068 570 R gacha",
            },
            {
                id: 25,
                key: "C5",
                image: ASSETS.body1,
                rooms: "3",
                building: "A1, A9, B2, B3",
                floor: "1, 7, 10",
                common: "79.35 m2",
                accommodation: "67.30 m2",
                kitchen: "7.96 m2",
                roomsArea: "12.7 / 10.98 / 11.45 m2",
                bodySizeFrom: "Korpus 4.2, 3-xona, 171 493 R / m2 dan",
                bodySizeTo: "52,9 m2 dan 9 068 570 R gacha",
            },
            {
                id: 26,
                key: "C6",
                image: ASSETS.body1,
                rooms: "3",
                building: "A1, A9, B2, B3",
                floor: "1, 7, 10",
                common: "79.35 m2",
                accommodation: "67.30 m2",
                kitchen: "7.96 m2",
                roomsArea: "12.7 / 10.98 / 11.45 m2",
                bodySizeFrom: "Korpus 4.2, 3-xona, 171 493 R / m2 dan",
                bodySizeTo: "52,9 m2 dan 9 068 570 R gacha",
            },
            {
                id: 27,
                key: "C7",
                image: ASSETS.body1,
                rooms: "3",
                building: "A1, A9, B2, B3",
                floor: "1, 7, 10",
                common: "79.35 m2",
                accommodation: "67.30 m2",
                kitchen: "7.96 m2",
                roomsArea: "12.7 / 10.98 / 11.45 m2",
                bodySizeFrom: "Korpus 4.2, 3-xona, 171 493 R / m2 dan",
                bodySizeTo: "52,9 m2 dan 9 068 570 R gacha",
            },
            {
                id: 28,
                key: "C8",
                image: ASSETS.body1,
                rooms: "3",
                building: "A1, A9, B2, B3",
                floor: "1, 7, 10",
                common: "79.35 m2",
                accommodation: "67.30 m2",
                kitchen: "7.96 m2",
                roomsArea: "12.7 / 10.98 / 11.45 m2",
                bodySizeFrom: "Korpus 4.2, 3-xona, 171 493 R / m2 dan",
                bodySizeTo: "52,9 m2 dan 9 068 570 R gacha",
            },
            {
                id: 29,
                key: "C9",
                image: ASSETS.body1,
                rooms: "3",
                building: "A1, A9, B2, B3",
                floor: "1, 7, 10",
                common: "79.35 m2",
                accommodation: "67.30 m2",
                kitchen: "7.96 m2",
                roomsArea: "12.7 / 10.98 / 11.45 m2",
                bodySizeFrom: "Korpus 4.2, 3-xona, 171 493 R / m2 dan",
                bodySizeTo: "52,9 m2 dan 9 068 570 R gacha",
            },
        ],
        investment: [
            {
                text: "Shoshilishni maslahat beramiz",
                middlePrice: "O'rtacha narx 2% ga tushdi",
                flatMiddlePrice: "6.9 mln $",
                flatMiddlePriceDown: "134 940 $",
                squareMiddlePrice: "6.9 mln $",
                squareMiddlePriceDown: "134 940 $",
                soldFlatsfFrom: "4316 dan",
                soldFlatsf: "1884 ta",
            },
        ],
        accessLocationToTr: [
            {
                text: "'Sohil bog'i turar joy majmuasi paxra daryosi sohilida, Pavlovskoye qishlog'i va yam qishlog'i yonida, MKADDAN 9 km uzoqlikda qurilgan.",
            },
            {
                text: "Yaqin atrofda Kashir shosesi va M-4 trassasi o'tadi, u orqali Moskva markaziga atigi 40 daqiqada borish mumkin.",
            },
            {
                text: "O'n daqiqalik piyoda temir yo'l stantsiyasi joylashgan Leninskaya, undan 40 daqiqada Paveletskiy vokzaliga poezdda borishingiz mumkin. 2024 yilda ushbu stantsiya McD- 5 tarkibiga kiradi.Jamoat transportida eng yaqin Domodedovskaya metro stantsiyasiga borish uchun yarim soat vaqt ketadi.",
            },
        ],
        aboutProducer: {
            process: "Tugallandi",
            finished: "24 LCD - dagi 211 ta uy",
            construction: "20 LCD - da 140 ta uy",
            companyAge: "Bozorda 13 yil",
            companyText: `Bozorning har bir sohasi, bugungi qarashlar doirasida, maqsadli trafikni ko'p qirrali ravishda tezlashtiradi. Biznes-reja
        muvozanatli. Taniqli marketing klassiklaridan biri F. Kotler buni quyidagicha ta'riflaydi: qayta aloqa kuchaytiradi
            oldingi kampaniyalar tajribasidan foydalangan holda reklama tartibi. Mediaves, yuqorida aytib o'tilganlardan ko'rinib turibdiki, quyidagilarni jamlaydi`,
        },
        documents: [
            {
                fileName: "3 deklaratsiyalar",
                file: "",
                fileDate: "27.07.2021 (5.1 va 5.2-binolar)",
            },
            {
                fileName: "3 deklaratsiyalar",
                file: "",
                fileDate: "27.07.2021 (5.1 va 5.2-binolar)",
            },
            {
                fileName: "3 deklaratsiyalar",
                file: "",
                fileDate: "27.07.2021 (5.1 va 5.2-binolar)",
            },
        ],
        placeCommentName: "Coastal Park",
        placeCommentCount: "5",
        placeCommentRatingCount: "4.5",
        placeComments: [
            {
                id: 1,
                personName: "Darya Rayevskiy",
                personImage: ASSETS.person,
                likeCount: 5,
                disLikeCount: 5,
                date: "20 yanvar",
                comment:
                    "Majmua Daryo bo'yida qurilmoqda va bu juda katta afzallik. Piyoda siz o'rmon bog'iga borishingiz mumkin va bu erda mulk yaqin. Avtomobilsiz markazga borish qiyin bo'lgan yagona narsa.",
                positiveComment:
                    "Tush tezlashayotgan stressni tanlaydi. O'rnatish impulsni birlashtiradi. Ta'lim ko'p qirrali kontrastni birlashtiradi.",
                negativeComment: "Yo’q",
            },
        ],
    },
    // {
    //     id: 2,
    //     name: "Namuna development",
    //     images: [
    //         {
    //             id: 1,
    //             image: ASSETS.pr1
    //         },
    //         {
    //             id: 2,
    //             image: ASSETS.pr2
    //         },
    //         {
    //             id: 3,
    //             image: ASSETS.pr3
    //         },
    //         {
    //             id: 4,
    //             image: ASSETS.pr4
    //         },
    //     ],
    //     company: "Namuna development",
    //     price: "35 000 $ dan",
    //     homeCount: "717 xonadon",
    //     process: "1-chorak 2023",
    //     near: "Karzinka.uz",
    //     nearTime: "20 daqiqa",
    //     studios: "48,4",
    //     twoRooms: "33,9",
    //     fourRooms: "62,7",
    //     oneRoom: "23,4",
    //     threeRooms: "47,2",
    //     fiveRooms: "0",
    //     contact: "+998 ( 99 ) 310 37 63",
    //     symbolDotIcon: <CarIcon />,
    //     processMedia: [
    //         {
    //             id: 1,
    //             image: ASSETS.pr1,
    //             video: ""
    //         }
    //     ],
    //     flatPlaces: "21.6 - 79.4 m2",
    //     finishTime: "2023 - 2025",
    //     buildings: "16 ta bino",
    //     ceilings: "2.6 m - 2.7 m",
    //     homeType: "Panel, monolit g'isht, g'isht, monolit",
    //     class: "Iqtisodiyot",
    //     floorNumbers: "10 dan 18 gacha",
    //     finishVariants: "Mebel bilan tugatish",
    //     producerTeam: "'Domda' Guruhi",
    //     deliveryInOneRooms: [
    //         {
    //             id: 1,
    //             date: "2023-yil II-B da yetkazish",
    //             oneRoom: "1-XONALI",
    //             oneRoomSize: "21.6 M2 DAN",
    //             oneRoomPrice: "6.3 - 8.7 MLN $ DAN",
    //             offerCount: "25 TA TAKLIFLAR",
    //             data: [
    //                 {
    //                     id: 1,
    //                     image: ASSETS.pr1,
    //                     price: "35 000 $",
    //                     size: "21.6  m2 dan",
    //                     info: "1-x xonali kvartira, 34.2  m2 , 4/9 qavat",
    //                     finishType: "Tugallandi"
    //                 }
    //             ]
    //         }
    //     ],
    //     deliveryInTwoRooms: [
    //         {
    //             id: 1,
    //             date: "2023-yil II-B da yetkazish",
    //             twoRooms: "1-XONALI",
    //             twoRoomSize: "21.6 M2 DAN",
    //             twoRoomPrice: "6.3 - 8.7 MLN $ DAN",
    //             offerCount: "25 TA TAKLIFLAR",
    //             data: [
    //                 {
    //                     id: 1,
    //                     image: ASSETS.pr1,
    //                     price: "35 000 $",
    //                     size: "21.6  m2 dan",
    //                     info: "1-x xonali kvartira, 34.2  m2 , 4/9 qavat",
    //                     finishType: "Tugallandi"
    //                 }
    //             ]
    //         }
    //     ],
    //     deliveryInThreeRooms: [
    //         {
    //             id: 1,
    //             date: "2023-yil II-B da yetkazish",
    //             threeRooms: "1-XONALI",
    //             threeRoomSize: "21.6 M2 DAN",
    //             threeRoomPrice: "6.3 - 8.7 MLN $ DAN",
    //             offerCount: "25 TA TAKLIFLAR",
    //             data: [
    //                 {
    //                     id: 1,
    //                     image: ASSETS.pr1,
    //                     price: "35 000 $",
    //                     size: "21.6  m2 dan",
    //                     info: "1-x xonali kvartira, 34.2  m2 , 4/9 qavat",
    //                     finishType: "Tugallandi"
    //                 }
    //             ]
    //         }
    //     ],
    //     deliveryInFourRooms: [
    //         {
    //             id: 1,
    //             date: "2023-yil II-B da yetkazish",
    //             fourRooms: "1-XONALI",
    //             fourRoomSize: "21.6 M2 DAN",
    //             fourRoomPrice: "6.3 - 8.7 MLN $ DAN",
    //             offerCount: "25 TA TAKLIFLAR",
    //             data: [
    //                 {
    //                     id: 1,
    //                     image: ASSETS.pr1,
    //                     price: "35 000 $",
    //                     size: "21.6  m2 dan",
    //                     info: "1-x xonali kvartira, 34.2  m2 , 4/9 qavat",
    //                     finishType: "Tugallandi"
    //                 },
    //                 {
    //                     id: 2,
    //                     image: ASSETS.pr1,
    //                     price: "35 000 $",
    //                     size: "21.6  m2 dan",
    //                     info: "1-x xonali kvartira, 34.2  m2 , 4/9 qavat",
    //                     finishType: "Tugallandi"
    //                 }
    //             ]
    //         }
    //     ],
    //     minExpense: "Minimal xarajat, ming $",
    //     location: "Toshkent sh, Yangi hayot t, O’zar ko’chasi 72 uy 47",
    //     howManyBuilding: "56",
    //     nearGoingTime: [
    //         {
    //             name: "Qizil Baltiya",
    //             time: "5 min",
    //             type: "",
    //         }
    //     ],
    //     bestUsefulComment: [
    //         {
    //             name: "",
    //             coment: "Idrok gomeostazni yoritadi, Xobbs bu muammoni birinchilardan bo'lib yoritib berdi psixologiya nuqtai nazaridang",
    //             person: "Begmamatov Shahzod",
    //             personImage: ASSETS.person,
    //         }
    //     ],
    //     locationToTransport: "Joylashuv, transportga kirish imkoniyati",
    //     infrastructure: [
    //         {
    //             id: 1,
    //             placeName: "Maktab",
    //             icon: '',
    //             security: "Devor bilan o'ralgan perimetr"
    //         }
    //     ],
    //     arrangements: "56",
    //     body: [
    //             {
    //             id: 1,
    //                 key: "A1",
    //                 image: ASSETS.body1,
    //                 rooms: "3",
    //                 building: "A1, A3, A5, A9",
    //                 floor: "1, 2, 4, 6, 7",
    //                 common: "79.35 m2",
    //                 accommodation: "67.30 m2",
    //                 kitchen: "7.96 m2",
    //                 roomsArea: "12.7 / 10.98 / 11.45 m2",
    //                 bodySizeFrom: "Korpus 4.2, 3-xona, 171 493 R / m2 dan",
    //                 bodySizeTo: "52,9 m2 dan 9 068 570 R gacha"
    //             },
    //             {
    //                 id: 2,
    //                 key: "A1",
    //                 image: ASSETS.body1,
    //                 rooms: "3",
    //                 building: "A1, A9, A10",
    //                 floor: "1, 2, 4, 6, 7",
    //                 common: "79.35 m2",
    //                 accommodation: "67.30 m2",
    //                 kitchen: "7.96 m2",
    //                 roomsArea: "12.7 / 10.98 / 11.45 m2",
    //                 bodySizeFrom: "Korpus 4.2, 3-xona, 171 493 R / m2 dan",
    //                 bodySizeTo: "52,9 m2 dan 9 068 570 R gacha"
    //             },
    //             {
    //                 id: 3,
    //                 key: "A2",
    //                 image: ASSETS.body1,
    //                 rooms: "3",
    //                 building: "A1, A3, A6, A9",
    //                 floor: "1, 2, 4, 6, 7",
    //                 common: "79.35 m2",
    //                 accommodation: "67.30 m2",
    //                 kitchen: "7.96 m2",
    //                 roomsArea: "12.7 / 10.98 / 11.45 m2",
    //                 bodySizeFrom: "Korpus 4.2, 3-xona, 171 493 R / m2 dan",
    //                 bodySizeTo: "52,9 m2 dan 9 068 570 R gacha"
    //         },
    //         {
    //             id: 4,
    //             key: "A3",
    //             image: ASSETS.body1,
    //             rooms: "3",
    //             building: "A1, A9 C2, C5",
    //             floor: "1, 3, 4, 8",
    //             common: "79.35 m2",
    //             accommodation: "67.30 m2",
    //             kitchen: "7.96 m2",
    //             roomsArea: "12.7 / 10.98 / 11.45 m2",
    //             bodySizeFrom: "Korpus 4.2, 3-xona, 171 493 R / m2 dan",
    //             bodySizeTo: "52,9 m2 dan 9 068 570 R gacha"
    //         },
    //         {
    //             id: 5,
    //             key: "B1",
    //             image: ASSETS.body1,
    //             rooms: "3",
    //             building: "A1, A9, B4, B8",
    //             floor: "1, 2, 3, 8",
    //             common: "79.35 m2",
    //             accommodation: "67.30 m2",
    //             kitchen: "7.96 m2",
    //             roomsArea: "12.7 / 10.98 / 11.45 m2",
    //             bodySizeFrom: "Korpus 4.2, 3-xona, 171 493 R / m2 dan",
    //             bodySizeTo: "52,9 m2 dan 9 068 570 R gacha"
    //         },
    //         {
    //             id: 6,
    //             key: "B2",
    //             image: ASSETS.body1,
    //             rooms: "3",
    //             building: "A1, A9, B2, B3",
    //             floor: "1, 5, 8",
    //             common: "79.35 m2",
    //             accommodation: "67.30 m2",
    //             kitchen: "7.96 m2",
    //             roomsArea: "12.7 / 10.98 / 11.45 m2",
    //             bodySizeFrom: "Korpus 4.2, 3-xona, 171 493 R / m2 dan",
    //             bodySizeTo: "52,9 m2 dan 9 068 570 R gacha"
    //         },
    //         {
    //             id: 7,
    //             key: "C1",
    //             image: ASSETS.body1,
    //             rooms: "3",
    //             building: "A1, A9, B2, B3",
    //             floor: "1, 7, 10",
    //             common: "79.35 m2",
    //             accommodation: "67.30 m2",
    //             kitchen: "7.96 m2",
    //             roomsArea: "12.7 / 10.98 / 11.45 m2",
    //             bodySizeFrom: "Korpus 4.2, 3-xona, 171 493 R / m2 dan",
    //             bodySizeTo: "52,9 m2 dan 9 068 570 R gacha"
    //         },
    //         ],
    //     investment: [
    //         {
    //             text: "Shoshilishni maslahat beramiz",
    //             middlePrice: "O'rtacha narx 2% ga tushdi",
    //             flatMiddlePrice: "6.9 mln $",
    //             flatMiddlePriceDown: "134 940 $",
    //             squareMiddlePrice: "6.9 mln $",
    //             squareMiddlePriceDown: "134 940 $",
    //             soldFlatsfFrom: "4316 dan",
    //             soldFlatsf: "1884 ta",
    //         }
    //     ],
    //     accessLocationToTr: [
    //         {
    //             text: "'Sohil bog'i turar joy majmuasi paxra daryosi sohilida, Pavlovskoye qishlog'i va yam qishlog'i yonida, MKADDAN 9 km uzoqlikda qurilgan.",
    //         },
    //         {
    //             text: "Yaqin atrofda Kashir shosesi va M-4 trassasi o'tadi, u orqali Moskva markaziga atigi 40 daqiqada borish mumkin."
    //         },
    //         {
    //             text: "O'n daqiqalik piyoda temir yo'l stantsiyasi joylashgan Leninskaya, undan 40 daqiqada Paveletskiy vokzaliga poezdda borishingiz mumkin. 2024 yilda ushbu stantsiya McD- 5 tarkibiga kiradi.Jamoat transportida eng yaqin Domodedovskaya metro stantsiyasiga borish uchun yarim soat vaqt ketadi."
    //         }
    //     ],
    //     aboutProducer: {
    //         finished: "24 LCD - dagi 211 ta uy",
    //         construction: "20 LCD - da 140 ta uy",
    //         companyAge: "Bozorda 13 yil",
    //         companyText: `Bozorning har bir sohasi, bugungi qarashlar doirasida, maqsadli trafikni ko'p qirrali ravishda tezlashtiradi. Biznes-reja
    //     muvozanatli. Taniqli marketing klassiklaridan biri F. Kotler buni quyidagicha ta'riflaydi: qayta aloqa kuchaytiradi
    //         oldingi kampaniyalar tajribasidan foydalangan holda reklama tartibi. Mediaves, yuqorida aytib o'tilganlardan ko'rinib turibdiki, quyidagilarni jamlaydi`,
    //     },
    //     documents: [
    //         {
    //             fileName: "3 deklaratsiyalar",
    //             file: "",
    //             fileDate: "27.07.2021 (5.1 va 5.2-binolar)",
    //         },
    //         {
    //             fileName: "3 deklaratsiyalar",
    //             file: "",
    //             fileDate: "27.07.2021 (5.1 va 5.2-binolar)",
    //         },
    //         {
    //             fileName: "3 deklaratsiyalar",
    //             file: "",
    //             fileDate: "27.07.2021 (5.1 va 5.2-binolar)",
    //         }
    //     ],
    //     placeCommentName: "Coastal Park",
    //     placeCommentCount: "5",
    //     placeCommentRatingCount: "4.5",
    //     placeComments: [
    //         {
    //             id: 1,
    //             personName: "Darya Rayevskiy",
    //             personImage: ASSETS.person,
    //             likeCount: 5,
    //             disLikeCount: 5,
    //             date: "20 yanvar",
    //             comment: "Majmua Daryo bo'yida qurilmoqda va bu juda katta afzallik. Piyoda siz o'rmon bog'iga borishingiz mumkin va bu erda mulk yaqin. Avtomobilsiz markazga borish qiyin bo'lgan yagona narsa.",
    //             positiveComment: "Tush tezlashayotgan stressni tanlaydi. O'rnatish impulsni birlashtiradi. Ta'lim ko'p qirrali kontrastni birlashtiradi.",
    //             negativeComment: "Yo’q",

    //         }
    //     ]
    // },
    // {
    //     id: 3,
    //     name: "Namuna development",
    //     images: [
    //         {
    //             id: 1,
    //             image: ASSETS.pr1
    //         },
    //         {
    //             id: 2,
    //             image: ASSETS.pr2
    //         },
    //         {
    //             id: 3,
    //             image: ASSETS.pr3
    //         },
    //         {
    //             id: 4,
    //             image: ASSETS.pr4
    //         },
    //     ],
    //     company: "Namuna development",
    //     price: "35 000 $ dan",
    //     homeCount: "717 xonadon",
    //     process: "1-chorak 2023",
    //     near: "Karzinka.uz",
    //     nearTime: "20 daqiqa",
    //     studios: "48,4",
    //     twoRooms: "33,9",
    //     fourRooms: "62,7",
    //     oneRoom: "23,4",
    //     threeRooms: "47,2",
    //     fiveRooms: "0",
    //     contact: "+998 ( 99 ) 310 37 63",
    //     symbolDotIcon: <CarIcon />,
    //     processMedia: [
    //         {
    //             id: 1,
    //             image: ASSETS.pr1,
    //             video: ""
    //         }
    //     ],
    //     flatPlaces: "21.6 - 79.4 m2",
    //     finishTime: "2023 - 2025",
    //     buildings: "16 ta bino",
    //     ceilings: "2.6 m - 2.7 m",
    //     homeType: "Panel, monolit g'isht, g'isht, monolit",
    //     class: "Iqtisodiyot",
    //     floorNumbers: "10 dan 18 gacha",
    //     finishVariants: "Mebel bilan tugatish",
    //     producerTeam: "'Domda' Guruhi",
    //     deliveryInOneRooms: [
    //         {
    //             id: 1,
    //             date: "2023-yil II-B da yetkazish",
    //             oneRoom: "1-XONALI",
    //             oneRoomSize: "21.6 M2 DAN",
    //             oneRoomPrice: "6.3 - 8.7 MLN $ DAN",
    //             offerCount: "25 TA TAKLIFLAR",
    //             data: [
    //                 {
    //                     id: 1,
    //                     image: ASSETS.pr1,
    //                     price: "35 000 $",
    //                     size: "21.6  m2 dan",
    //                     info: "1-x xonali kvartira, 34.2  m2 , 4/9 qavat",
    //                     finishType: "Tugallandi"
    //                 }
    //             ]
    //         }
    //     ],
    //     deliveryInTwoRooms: [
    //         {
    //             id: 1,
    //             date: "2023-yil II-B da yetkazish",
    //             twoRooms: "1-XONALI",
    //             twoRoomSize: "21.6 M2 DAN",
    //             twoRoomPrice: "6.3 - 8.7 MLN $ DAN",
    //             offerCount: "25 TA TAKLIFLAR",
    //             data: [
    //                 {
    //                     id: 1,
    //                     image: ASSETS.pr1,
    //                     price: "35 000 $",
    //                     size: "21.6  m2 dan",
    //                     info: "1-x xonali kvartira, 34.2  m2 , 4/9 qavat",
    //                     finishType: "Tugallandi"
    //                 }
    //             ]
    //         }
    //     ],
    //     deliveryInThreeRooms: [
    //         {
    //             id: 1,
    //             date: "2023-yil II-B da yetkazish",
    //             threeRooms: "1-XONALI",
    //             threeRoomSize: "21.6 M2 DAN",
    //             threeRoomPrice: "6.3 - 8.7 MLN $ DAN",
    //             offerCount: "25 TA TAKLIFLAR",
    //             data: [
    //                 {
    //                     id: 1,
    //                     image: ASSETS.pr1,
    //                     price: "35 000 $",
    //                     size: "21.6  m2 dan",
    //                     info: "1-x xonali kvartira, 34.2  m2 , 4/9 qavat",
    //                     finishType: "Tugallandi"
    //                 }
    //             ]
    //         }
    //     ],
    //     deliveryInFourRooms: [
    //         {
    //             id: 1,
    //             date: "2023-yil II-B da yetkazish",
    //             fourRooms: "1-XONALI",
    //             fourRoomSize: "21.6 M2 DAN",
    //             fourRoomPrice: "6.3 - 8.7 MLN $ DAN",
    //             offerCount: "25 TA TAKLIFLAR",
    //             data: [
    //                 {
    //                     id: 1,
    //                     image: ASSETS.pr1,
    //                     price: "35 000 $",
    //                     size: "21.6  m2 dan",
    //                     info: "1-x xonali kvartira, 34.2  m2 , 4/9 qavat",
    //                     finishType: "Tugallandi"
    //                 },
    //                 {
    //                     id: 2,
    //                     image: ASSETS.pr1,
    //                     price: "35 000 $",
    //                     size: "21.6  m2 dan",
    //                     info: "1-x xonali kvartira, 34.2  m2 , 4/9 qavat",
    //                     finishType: "Tugallandi"
    //                 }
    //             ]
    //         }
    //     ],
    //     minExpense: "Minimal xarajat, ming $",
    //     location: "Toshkent sh, Yangi hayot t, O’zar ko’chasi 72 uy 47",
    //     howManyBuilding: "56",
    //     nearGoingTime: [
    //         {
    //             name: "Qizil Baltiya",
    //             time: "5 min",
    //             type: "",
    //         }
    //     ],
    //     bestUsefulComment: [
    //         {
    //             name: "",
    //             coment: "Idrok gomeostazni yoritadi, Xobbs bu muammoni birinchilardan bo'lib yoritib berdi psixologiya nuqtai nazaridang",
    //             person: "Begmamatov Shahzod",
    //             personImage: ASSETS.person,
    //         }
    //     ],
    //     locationToTransport: "Joylashuv, transportga kirish imkoniyati",
    //     infrastructure: [
    //         {
    //             id: 1,
    //             placeName: "Maktab",
    //             icon: '',
    //             security: "Devor bilan o'ralgan perimetr"
    //         }
    //     ],
    //     arrangements: "56",
    //     body: [
    //             {
    //             id: 1,
    //                 key: "A1",
    //                 image: ASSETS.body1,
    //                 rooms: "3",
    //                 building: "A1, A3, A5, A9",
    //                 floor: "1, 2, 4, 6, 7",
    //                 common: "79.35 m2",
    //                 accommodation: "67.30 m2",
    //                 kitchen: "7.96 m2",
    //                 roomsArea: "12.7 / 10.98 / 11.45 m2",
    //                 bodySizeFrom: "Korpus 4.2, 3-xona, 171 493 R / m2 dan",
    //                 bodySizeTo: "52,9 m2 dan 9 068 570 R gacha"
    //             },
    //             {
    //                 id: 2,
    //                 key: "A1",
    //                 image: ASSETS.body1,
    //                 rooms: "3",
    //                 building: "A1, A9, A10",
    //                 floor: "1, 2, 4, 6, 7",
    //                 common: "79.35 m2",
    //                 accommodation: "67.30 m2",
    //                 kitchen: "7.96 m2",
    //                 roomsArea: "12.7 / 10.98 / 11.45 m2",
    //                 bodySizeFrom: "Korpus 4.2, 3-xona, 171 493 R / m2 dan",
    //                 bodySizeTo: "52,9 m2 dan 9 068 570 R gacha"
    //             },
    //             {
    //                 id: 3,
    //                 key: "A2",
    //                 image: ASSETS.body1,
    //                 rooms: "3",
    //                 building: "A1, A3, A6, A9",
    //                 floor: "1, 2, 4, 6, 7",
    //                 common: "79.35 m2",
    //                 accommodation: "67.30 m2",
    //                 kitchen: "7.96 m2",
    //                 roomsArea: "12.7 / 10.98 / 11.45 m2",
    //                 bodySizeFrom: "Korpus 4.2, 3-xona, 171 493 R / m2 dan",
    //                 bodySizeTo: "52,9 m2 dan 9 068 570 R gacha"
    //         },
    //         {
    //             id: 4,
    //             key: "A3",
    //             image: ASSETS.body1,
    //             rooms: "3",
    //             building: "A1, A9 C2, C5",
    //             floor: "1, 3, 4, 8",
    //             common: "79.35 m2",
    //             accommodation: "67.30 m2",
    //             kitchen: "7.96 m2",
    //             roomsArea: "12.7 / 10.98 / 11.45 m2",
    //             bodySizeFrom: "Korpus 4.2, 3-xona, 171 493 R / m2 dan",
    //             bodySizeTo: "52,9 m2 dan 9 068 570 R gacha"
    //         },
    //         {
    //             id: 5,
    //             key: "B1",
    //             image: ASSETS.body1,
    //             rooms: "3",
    //             building: "A1, A9, B4, B8",
    //             floor: "1, 2, 3, 8",
    //             common: "79.35 m2",
    //             accommodation: "67.30 m2",
    //             kitchen: "7.96 m2",
    //             roomsArea: "12.7 / 10.98 / 11.45 m2",
    //             bodySizeFrom: "Korpus 4.2, 3-xona, 171 493 R / m2 dan",
    //             bodySizeTo: "52,9 m2 dan 9 068 570 R gacha"
    //         },
    //         {
    //             id: 6,
    //             key: "B2",
    //             image: ASSETS.body1,
    //             rooms: "3",
    //             building: "A1, A9, B2, B3",
    //             floor: "1, 5, 8",
    //             common: "79.35 m2",
    //             accommodation: "67.30 m2",
    //             kitchen: "7.96 m2",
    //             roomsArea: "12.7 / 10.98 / 11.45 m2",
    //             bodySizeFrom: "Korpus 4.2, 3-xona, 171 493 R / m2 dan",
    //             bodySizeTo: "52,9 m2 dan 9 068 570 R gacha"
    //         },
    //         {
    //             id: 7,
    //             key: "C1",
    //             image: ASSETS.body1,
    //             rooms: "3",
    //             building: "A1, A9, B2, B3",
    //             floor: "1, 7, 10",
    //             common: "79.35 m2",
    //             accommodation: "67.30 m2",
    //             kitchen: "7.96 m2",
    //             roomsArea: "12.7 / 10.98 / 11.45 m2",
    //             bodySizeFrom: "Korpus 4.2, 3-xona, 171 493 R / m2 dan",
    //             bodySizeTo: "52,9 m2 dan 9 068 570 R gacha"
    //         },
    //         ],
    //     investment: [
    //         {
    //             text: "Shoshilishni maslahat beramiz",
    //             middlePrice: "O'rtacha narx 2% ga tushdi",
    //             flatMiddlePrice: "6.9 mln $",
    //             flatMiddlePriceDown: "134 940 $",
    //             squareMiddlePrice: "6.9 mln $",
    //             squareMiddlePriceDown: "134 940 $",
    //             soldFlatsfFrom: "4316 dan",
    //             soldFlatsf: "1884 ta",
    //         }
    //     ],
    //     accessLocationToTr: [
    //         {
    //             text: "'Sohil bog'i turar joy majmuasi paxra daryosi sohilida, Pavlovskoye qishlog'i va yam qishlog'i yonida, MKADDAN 9 km uzoqlikda qurilgan.",
    //         },
    //         {
    //             text: "Yaqin atrofda Kashir shosesi va M-4 trassasi o'tadi, u orqali Moskva markaziga atigi 40 daqiqada borish mumkin."
    //         },
    //         {
    //             text: "O'n daqiqalik piyoda temir yo'l stantsiyasi joylashgan Leninskaya, undan 40 daqiqada Paveletskiy vokzaliga poezdda borishingiz mumkin. 2024 yilda ushbu stantsiya McD- 5 tarkibiga kiradi.Jamoat transportida eng yaqin Domodedovskaya metro stantsiyasiga borish uchun yarim soat vaqt ketadi."
    //         }
    //     ],
    //     aboutProducer: {
    //         finished: "24 LCD - dagi 211 ta uy",
    //         construction: "20 LCD - da 140 ta uy",
    //         companyAge: "Bozorda 13 yil",
    //         companyText: `Bozorning har bir sohasi, bugungi qarashlar doirasida, maqsadli trafikni ko'p qirrali ravishda tezlashtiradi. Biznes-reja
    //     muvozanatli. Taniqli marketing klassiklaridan biri F. Kotler buni quyidagicha ta'riflaydi: qayta aloqa kuchaytiradi
    //         oldingi kampaniyalar tajribasidan foydalangan holda reklama tartibi. Mediaves, yuqorida aytib o'tilganlardan ko'rinib turibdiki, quyidagilarni jamlaydi`,
    //     },
    //     documents: [
    //         {
    //             fileName: "3 deklaratsiyalar",
    //             file: "",
    //             fileDate: "27.07.2021 (5.1 va 5.2-binolar)",
    //         },
    //         {
    //             fileName: "3 deklaratsiyalar",
    //             file: "",
    //             fileDate: "27.07.2021 (5.1 va 5.2-binolar)",
    //         },
    //         {
    //             fileName: "3 deklaratsiyalar",
    //             file: "",
    //             fileDate: "27.07.2021 (5.1 va 5.2-binolar)",
    //         }
    //     ],
    //     placeCommentName: "Coastal Park",
    //     placeCommentCount: "5",
    //     placeCommentRatingCount: "4.5",
    //     placeComments: [
    //         {
    //             id: 1,
    //             personName: "Darya Rayevskiy",
    //             personImage: ASSETS.person,
    //             likeCount: 5,
    //             disLikeCount: 5,
    //             date: "20 yanvar",
    //             comment: "Majmua Daryo bo'yida qurilmoqda va bu juda katta afzallik. Piyoda siz o'rmon bog'iga borishingiz mumkin va bu erda mulk yaqin. Avtomobilsiz markazga borish qiyin bo'lgan yagona narsa.",
    //             positiveComment: "Tush tezlashayotgan stressni tanlaydi. O'rnatish impulsni birlashtiradi. Ta'lim ko'p qirrali kontrastni birlashtiradi.",
    //             negativeComment: "Yo’q",

    //         }
    //     ]
    // },
    // {
    //     id: 4,
    //     name: "Namuna development",
    //     images: [
    //         {
    //             id: 1,
    //             image: ASSETS.pr1
    //         },
    //         {
    //             id: 2,
    //             image: ASSETS.pr2
    //         },
    //         {
    //             id: 3,
    //             image: ASSETS.pr3
    //         },
    //         {
    //             id: 4,
    //             image: ASSETS.pr4
    //         },
    //     ],
    //     company: "Namuna development",
    //     price: "35 000 $ dan",
    //     homeCount: "717 xonadon",
    //     process: "1-chorak 2023",
    //     near: "Karzinka.uz",
    //     nearTime: "20 daqiqa",
    //     studios: "48,4",
    //     twoRooms: "33,9",
    //     fourRooms: "62,7",
    //     oneRoom: "23,4",
    //     threeRooms: "47,2",
    //     fiveRooms: "0",
    //     contact: "+998 ( 99 ) 310 37 63",
    //     symbolDotIcon: <CarIcon />,
    //     processMedia: [
    //         {
    //             id: 1,
    //             image: ASSETS.pr1,
    //             video: ""
    //         }
    //     ],
    //     flatPlaces: "21.6 - 79.4 m2",
    //     finishTime: "2023 - 2025",
    //     buildings: "16 ta bino",
    //     ceilings: "2.6 m - 2.7 m",
    //     homeType: "Panel, monolit g'isht, g'isht, monolit",
    //     class: "Iqtisodiyot",
    //     floorNumbers: "10 dan 18 gacha",
    //     finishVariants: "Mebel bilan tugatish",
    //     producerTeam: "'Domda' Guruhi",
    //     deliveryInOneRooms: [
    //         {
    //             id: 1,
    //             date: "2023-yil II-B da yetkazish",
    //             oneRoom: "1-XONALI",
    //             oneRoomSize: "21.6 M2 DAN",
    //             oneRoomPrice: "6.3 - 8.7 MLN $ DAN",
    //             offerCount: "25 TA TAKLIFLAR",
    //             data: [
    //                 {
    //                     id: 1,
    //                     image: ASSETS.pr1,
    //                     price: "35 000 $",
    //                     size: "21.6  m2 dan",
    //                     info: "1-x xonali kvartira, 34.2  m2 , 4/9 qavat",
    //                     finishType: "Tugallandi"
    //                 }
    //             ]
    //         }
    //     ],
    //     deliveryInTwoRooms: [
    //         {
    //             id: 1,
    //             date: "2023-yil II-B da yetkazish",
    //             twoRooms: "1-XONALI",
    //             twoRoomSize: "21.6 M2 DAN",
    //             twoRoomPrice: "6.3 - 8.7 MLN $ DAN",
    //             offerCount: "25 TA TAKLIFLAR",
    //             data: [
    //                 {
    //                     id: 1,
    //                     image: ASSETS.pr1,
    //                     price: "35 000 $",
    //                     size: "21.6  m2 dan",
    //                     info: "1-x xonali kvartira, 34.2  m2 , 4/9 qavat",
    //                     finishType: "Tugallandi"
    //                 }
    //             ]
    //         }
    //     ],
    //     deliveryInThreeRooms: [
    //         {
    //             id: 1,
    //             date: "2023-yil II-B da yetkazish",
    //             threeRooms: "1-XONALI",
    //             threeRoomSize: "21.6 M2 DAN",
    //             threeRoomPrice: "6.3 - 8.7 MLN $ DAN",
    //             offerCount: "25 TA TAKLIFLAR",
    //             data: [
    //                 {
    //                     id: 1,
    //                     image: ASSETS.pr1,
    //                     price: "35 000 $",
    //                     size: "21.6  m2 dan",
    //                     info: "1-x xonali kvartira, 34.2  m2 , 4/9 qavat",
    //                     finishType: "Tugallandi"
    //                 }
    //             ]
    //         }
    //     ],
    //     deliveryInFourRooms: [
    //         {
    //             id: 1,
    //             date: "2023-yil II-B da yetkazish",
    //             fourRooms: "1-XONALI",
    //             fourRoomSize: "21.6 M2 DAN",
    //             fourRoomPrice: "6.3 - 8.7 MLN $ DAN",
    //             offerCount: "25 TA TAKLIFLAR",
    //             data: [
    //                 {
    //                     id: 1,
    //                     image: ASSETS.pr1,
    //                     price: "35 000 $",
    //                     size: "21.6  m2 dan",
    //                     info: "1-x xonali kvartira, 34.2  m2 , 4/9 qavat",
    //                     finishType: "Tugallandi"
    //                 },
    //                 {
    //                     id: 2,
    //                     image: ASSETS.pr1,
    //                     price: "35 000 $",
    //                     size: "21.6  m2 dan",
    //                     info: "1-x xonali kvartira, 34.2  m2 , 4/9 qavat",
    //                     finishType: "Tugallandi"
    //                 }
    //             ]
    //         }
    //     ],
    //     minExpense: "Minimal xarajat, ming $",
    //     location: "Toshkent sh, Yangi hayot t, O’zar ko’chasi 72 uy 47",
    //     howManyBuilding: "56",
    //     nearGoingTime: [
    //         {
    //             name: "Qizil Baltiya",
    //             time: "5 min",
    //             type: "",
    //         }
    //     ],
    //     bestUsefulComment: [
    //         {
    //             name: "",
    //             coment: "Idrok gomeostazni yoritadi, Xobbs bu muammoni birinchilardan bo'lib yoritib berdi psixologiya nuqtai nazaridang",
    //             person: "Begmamatov Shahzod",
    //             personImage: ASSETS.person,
    //         }
    //     ],
    //     locationToTransport: "Joylashuv, transportga kirish imkoniyati",
    //     infrastructure: [
    //         {
    //             id: 1,
    //             placeName: "Maktab",
    //             icon: '',
    //             security: "Devor bilan o'ralgan perimetr"
    //         }
    //     ],
    //     arrangements: "56",
    //     body: [
    //             {
    //             id: 1,
    //                 key: "A1",
    //                 image: ASSETS.body1,
    //                 rooms: "3",
    //                 building: "A1, A3, A5, A9",
    //                 floor: "1, 2, 4, 6, 7",
    //                 common: "79.35 m2",
    //                 accommodation: "67.30 m2",
    //                 kitchen: "7.96 m2",
    //                 roomsArea: "12.7 / 10.98 / 11.45 m2",
    //                 bodySizeFrom: "Korpus 4.2, 3-xona, 171 493 R / m2 dan",
    //                 bodySizeTo: "52,9 m2 dan 9 068 570 R gacha"
    //             },
    //             {
    //                 id: 2,
    //                 key: "A1",
    //                 image: ASSETS.body1,
    //                 rooms: "3",
    //                 building: "A1, A9, A10",
    //                 floor: "1, 2, 4, 6, 7",
    //                 common: "79.35 m2",
    //                 accommodation: "67.30 m2",
    //                 kitchen: "7.96 m2",
    //                 roomsArea: "12.7 / 10.98 / 11.45 m2",
    //                 bodySizeFrom: "Korpus 4.2, 3-xona, 171 493 R / m2 dan",
    //                 bodySizeTo: "52,9 m2 dan 9 068 570 R gacha"
    //             },
    //             {
    //                 id: 3,
    //                 key: "A2",
    //                 image: ASSETS.body1,
    //                 rooms: "3",
    //                 building: "A1, A3, A6, A9",
    //                 floor: "1, 2, 4, 6, 7",
    //                 common: "79.35 m2",
    //                 accommodation: "67.30 m2",
    //                 kitchen: "7.96 m2",
    //                 roomsArea: "12.7 / 10.98 / 11.45 m2",
    //                 bodySizeFrom: "Korpus 4.2, 3-xona, 171 493 R / m2 dan",
    //                 bodySizeTo: "52,9 m2 dan 9 068 570 R gacha"
    //         },
    //         {
    //             id: 4,
    //             key: "A3",
    //             image: ASSETS.body1,
    //             rooms: "3",
    //             building: "A1, A9 C2, C5",
    //             floor: "1, 3, 4, 8",
    //             common: "79.35 m2",
    //             accommodation: "67.30 m2",
    //             kitchen: "7.96 m2",
    //             roomsArea: "12.7 / 10.98 / 11.45 m2",
    //             bodySizeFrom: "Korpus 4.2, 3-xona, 171 493 R / m2 dan",
    //             bodySizeTo: "52,9 m2 dan 9 068 570 R gacha"
    //         },
    //         {
    //             id: 5,
    //             key: "B1",
    //             image: ASSETS.body1,
    //             rooms: "3",
    //             building: "A1, A9, B4, B8",
    //             floor: "1, 2, 3, 8",
    //             common: "79.35 m2",
    //             accommodation: "67.30 m2",
    //             kitchen: "7.96 m2",
    //             roomsArea: "12.7 / 10.98 / 11.45 m2",
    //             bodySizeFrom: "Korpus 4.2, 3-xona, 171 493 R / m2 dan",
    //             bodySizeTo: "52,9 m2 dan 9 068 570 R gacha"
    //         },
    //         {
    //             id: 6,
    //             key: "B2",
    //             image: ASSETS.body1,
    //             rooms: "3",
    //             building: "A1, A9, B2, B3",
    //             floor: "1, 5, 8",
    //             common: "79.35 m2",
    //             accommodation: "67.30 m2",
    //             kitchen: "7.96 m2",
    //             roomsArea: "12.7 / 10.98 / 11.45 m2",
    //             bodySizeFrom: "Korpus 4.2, 3-xona, 171 493 R / m2 dan",
    //             bodySizeTo: "52,9 m2 dan 9 068 570 R gacha"
    //         },
    //         {
    //             id: 7,
    //             key: "C1",
    //             image: ASSETS.body1,
    //             rooms: "3",
    //             building: "A1, A9, B2, B3",
    //             floor: "1, 7, 10",
    //             common: "79.35 m2",
    //             accommodation: "67.30 m2",
    //             kitchen: "7.96 m2",
    //             roomsArea: "12.7 / 10.98 / 11.45 m2",
    //             bodySizeFrom: "Korpus 4.2, 3-xona, 171 493 R / m2 dan",
    //             bodySizeTo: "52,9 m2 dan 9 068 570 R gacha"
    //         },
    //         ],
    //     investment: [
    //         {
    //             text: "Shoshilishni maslahat beramiz",
    //             middlePrice: "O'rtacha narx 2% ga tushdi",
    //             flatMiddlePrice: "6.9 mln $",
    //             flatMiddlePriceDown: "134 940 $",
    //             squareMiddlePrice: "6.9 mln $",
    //             squareMiddlePriceDown: "134 940 $",
    //             soldFlatsfFrom: "4316 dan",
    //             soldFlatsf: "1884 ta",
    //         }
    //     ],
    //     accessLocationToTr: [
    //         {
    //             text: "'Sohil bog'i turar joy majmuasi paxra daryosi sohilida, Pavlovskoye qishlog'i va yam qishlog'i yonida, MKADDAN 9 km uzoqlikda qurilgan.",
    //         },
    //         {
    //             text: "Yaqin atrofda Kashir shosesi va M-4 trassasi o'tadi, u orqali Moskva markaziga atigi 40 daqiqada borish mumkin."
    //         },
    //         {
    //             text: "O'n daqiqalik piyoda temir yo'l stantsiyasi joylashgan Leninskaya, undan 40 daqiqada Paveletskiy vokzaliga poezdda borishingiz mumkin. 2024 yilda ushbu stantsiya McD- 5 tarkibiga kiradi.Jamoat transportida eng yaqin Domodedovskaya metro stantsiyasiga borish uchun yarim soat vaqt ketadi."
    //         }
    //     ],
    //     aboutProducer: {
    //         finished: "24 LCD - dagi 211 ta uy",
    //         construction: "20 LCD - da 140 ta uy",
    //         companyAge: "Bozorda 13 yil",
    //         companyText: `Bozorning har bir sohasi, bugungi qarashlar doirasida, maqsadli trafikni ko'p qirrali ravishda tezlashtiradi. Biznes-reja
    //     muvozanatli. Taniqli marketing klassiklaridan biri F. Kotler buni quyidagicha ta'riflaydi: qayta aloqa kuchaytiradi
    //         oldingi kampaniyalar tajribasidan foydalangan holda reklama tartibi. Mediaves, yuqorida aytib o'tilganlardan ko'rinib turibdiki, quyidagilarni jamlaydi`,
    //     },
    //     documents: [
    //         {
    //             fileName: "3 deklaratsiyalar",
    //             file: "",
    //             fileDate: "27.07.2021 (5.1 va 5.2-binolar)",
    //         },
    //         {
    //             fileName: "3 deklaratsiyalar",
    //             file: "",
    //             fileDate: "27.07.2021 (5.1 va 5.2-binolar)",
    //         },
    //         {
    //             fileName: "3 deklaratsiyalar",
    //             file: "",
    //             fileDate: "27.07.2021 (5.1 va 5.2-binolar)",
    //         }
    //     ],
    //     placeCommentName: "Coastal Park",
    //     placeCommentCount: "5",
    //     placeCommentRatingCount: "4.5",
    //     placeComments: [
    //         {
    //             id: 1,
    //             personName: "Darya Rayevskiy",
    //             personImage: ASSETS.person,
    //             likeCount: 5,
    //             disLikeCount: 5,
    //             date: "20 yanvar",
    //             comment: "Majmua Daryo bo'yida qurilmoqda va bu juda katta afzallik. Piyoda siz o'rmon bog'iga borishingiz mumkin va bu erda mulk yaqin. Avtomobilsiz markazga borish qiyin bo'lgan yagona narsa.",
    //             positiveComment: "Tush tezlashayotgan stressni tanlaydi. O'rnatish impulsni birlashtiradi. Ta'lim ko'p qirrali kontrastni birlashtiradi.",
    //             negativeComment: "Yo’q",

    //         }
    //     ]
    // },
    // {
    //     id: 2,
    //     name: "Aist qarorgohi",
    //     images: [
    //         {
    //             id: 1,
    //             image: ASSETS.pr1
    //         },
    //         {
    //             id: 2,
    //             image: ASSETS.pr2
    //         },
    //         {
    //             id: 3,
    //             image: ASSETS.pr3
    //         },
    //         {
    //             id: 4,
    //             image: ASSETS.pr4
    //         },
    //     ],
    //     company: "Murad building",
    //     price: "35 000 $ dan",
    //     homeCount: "717 xonadon",
    //     process: "1-chorak 2023",
    //     near: "Karzinka.uz",
    //     nearTime: "20 daqiqa",
    //     studios: "48,4",
    //     twoRooms: "33,9",
    //     fourRooms: "62,7",
    //     oneRoom: "23,4",
    //     threeRooms: "47,2",
    //     fiveRooms: "0",
    //     contact: "+998 ( 99 ) 310 37 63",
    //     symbolDotIcon: <CarIcon />,
    //     processMedia: [
    //         {
    //             id: 1,
    //             image: ASSETS.pr1,
    //             video: ""
    //         }
    //     ],
    //     flatPlaces: "21.6 - 79.4 m2",
    //     finishTime: "2023 - 2025",
    //     buildings: "16 ta bino",
    //     ceilings: "2.6 m - 2.7 m",
    //     homeType: "Panel, monolit g'isht, g'isht, monolit",
    //     class: "Iqtisodiyot",
    //     floorNumbers: "10 dan 18 gacha",
    //     finishVariants: "Mebel bilan tugatish",
    //     producerTeam: "'Domda' Guruhi",
    //     deliveryInOneRooms: [
    //         {
    //             id: 1,
    //             date: "2023-yil II-B da yetkazish",
    //             oneRoom: "1-XONALI",
    //             oneRoomSize: "21.6 M2 DAN",
    //             oneRoomPrice: "6.3 - 8.7 MLN $ DAN",
    //             offerCount: "25 TA TAKLIFLAR",
    //             data: [
    //                 {
    //                     id: 1,
    //                     image: ASSETS.pr1,
    //                     price: "35 000 $",
    //                     size: "21.6  m2 dan",
    //                     info: "1-x xonali kvartira, 34.2  m2 , 4/9 qavat",
    //                     finishType: "Tugallandi"
    //                 }
    //             ]
    //         }
    //     ],
    //     deliveryInTwoRooms: [
    //         {
    //             id: 1,
    //             date: "2023-yil II-B da yetkazish",
    //             twoRooms: "1-XONALI",
    //             twoRoomSize: "21.6 M2 DAN",
    //             twoRoomPrice: "6.3 - 8.7 MLN $ DAN",
    //             offerCount: "25 TA TAKLIFLAR",
    //             data: [
    //                 {
    //                     id: 1,
    //                     image: ASSETS.pr1,
    //                     price: "35 000 $",
    //                     size: "21.6  m2 dan",
    //                     info: "1-x xonali kvartira, 34.2  m2 , 4/9 qavat",
    //                     finishType: "Tugallandi"
    //                 }
    //             ]
    //         }
    //     ],
    //     deliveryInThreeRooms: [
    //         {
    //             id: 1,
    //             date: "2023-yil II-B da yetkazish",
    //             threeRooms: "1-XONALI",
    //             threeRoomSize: "21.6 M2 DAN",
    //             threeRoomPrice: "6.3 - 8.7 MLN $ DAN",
    //             offerCount: "25 TA TAKLIFLAR",
    //             data: [
    //                 {
    //                     id: 1,
    //                     image: ASSETS.pr1,
    //                     price: "35 000 $",
    //                     size: "21.6  m2 dan",
    //                     info: "1-x xonali kvartira, 34.2  m2 , 4/9 qavat",
    //                     finishType: "Tugallandi"
    //                 }
    //             ]
    //         }
    //     ],
    //     deliveryInFourRooms: [
    //         {
    //             id: 3,
    //             date: "2023-yil II-B da yetkazish",
    //             fourRooms: "1-XONALI",
    //             fourRoomSize: "21.6 M2 DAN",
    //             fourRoomPrice: "6.3 - 8.7 MLN $ DAN",
    //             offerCount: "25 TA TAKLIFLAR",
    //             data: [
    //                 {
    //                     id: 1,
    //                     image: ASSETS.pr1,
    //                     price: "35 000 $",
    //                     size: "21.6  m2 dan",
    //                     info: "1-x xonali kvartira, 34.2  m2 , 4/9 qavat",
    //                     finishType: "Tugallandi"
    //                 },
    //                 {
    //                     id: 2,
    //                     image: ASSETS.pr1,
    //                     price: "35 000 $",
    //                     size: "21.6  m2 dan",
    //                     info: "1-x xonali kvartira, 34.2  m2 , 4/9 qavat",
    //                     finishType: "Tugallandi"
    //                 }
    //             ]
    //         }
    //     ],
    //     minExpense: "Minimal xarajat, ming $",
    //     location: "Toshkent sh, Yangi hayot t, O’zar ko’chasi 72 uy 47",
    //     howManyBuilding: "56",
    //     nearGoingTime: [
    //         {
    //             name: "Qizil Baltiya",
    //             time: "5 min",
    //             type: "",
    //         }
    //     ],
    //     bestUsefulComment: [
    //         {
    //             name: "",
    //             coment: "Idrok gomeostazni yoritadi, Xobbs bu muammoni birinchilardan bo'lib yoritib berdi psixologiya nuqtai nazaridang",
    //             person: "Begmamatov Shahzod",
    //             personImage: ASSETS.person,
    //         }
    //     ],
    //     locationToTransport: "Joylashuv, transportga kirish imkoniyati",
    //     infrastructure: [
    //         {
    //             id: 1,
    //             placeName: "Maktab",
    //             icon: '',
    //             security: "Devor bilan o'ralgan perimetr"
    //         }
    //     ],
    //     arrangements: "56",
    //     body: [
    //         {
    //             image: ASSETS.body1,
    //             rooms: "4",
    //             common: "79.35 m2",
    //             accommodation: "67.30 m2",
    //             kitchen: "7.96 m2",
    //             roomsArea: "12.7 / 10.98 / 11.45 m2",
    //             bodySizeFrom: "Korpus 4.2, 3-xona, 171 493 R / m2 dan",
    //             bodySizeTo: "52,9 m2 dan 9 068 570 R gacha"
    //         }
    //     ],
    //     investment: [
    //         {
    //             text: "Shoshilishni maslahat beramiz",
    //             middlePrice: "O'rtacha narx 2% ga tushdi",
    //             flatMiddlePrice: "6.9 mln $",
    //             flatMiddlePriceDown: "134 940 $",
    //             squareMiddlePrice: "6.9 mln $",
    //             squareMiddlePriceDown: "134 940 $",
    //             soldFlatsfFrom: "4316 dan",
    //             soldFlatsf: "1884 ta",
    //         }
    //     ],
    //     accessLocationToTr: [
    //         {
    //             text: "'Sohil bog'i turar joy majmuasi paxra daryosi sohilida, Pavlovskoye qishlog'i va yam qishlog'i yonida, MKADDAN 9 km uzoqlikda qurilgan.",
    //         },
    //         {
    //             text: "Yaqin atrofda Kashir shosesi va M-4 trassasi o'tadi, u orqali Moskva markaziga atigi 40 daqiqada borish mumkin."
    //         },
    //         {
    //             text: "O'n daqiqalik piyoda temir yo'l stantsiyasi joylashgan Leninskaya, undan 40 daqiqada Paveletskiy vokzaliga poezdda borishingiz mumkin. 2024 yilda ushbu stantsiya McD- 5 tarkibiga kiradi.Jamoat transportida eng yaqin Domodedovskaya metro stantsiyasiga borish uchun yarim soat vaqt ketadi."
    //         }
    //     ],
    //     aboutProducer: {
    //         finished: "24 LCD - dagi 211 ta uy",
    //         construction: "20 LCD - da 140 ta uy",
    //         companyAge: "Bozorda 13 yil",
    //         companyText: `Bozorning har bir sohasi, bugungi qarashlar doirasida, maqsadli trafikni ko'p qirrali ravishda tezlashtiradi. Biznes-reja
    //     muvozanatli. Taniqli marketing klassiklaridan biri F. Kotler buni quyidagicha ta'riflaydi: qayta aloqa kuchaytiradi
    //         oldingi kampaniyalar tajribasidan foydalangan holda reklama tartibi. Mediaves, yuqorida aytib o'tilganlardan ko'rinib turibdiki, quyidagilarni jamlaydi`,
    //     },
    //     documents: [
    //         {
    //             fileName: "3 deklaratsiyalar",
    //             file: "",
    //             fileDate: "27.07.2021 (5.1 va 5.2-binolar)",
    //         },
    //         {
    //             fileName: "3 deklaratsiyalar",
    //             file: "",
    //             fileDate: "27.07.2021 (5.1 va 5.2-binolar)",
    //         },
    //         {
    //             fileName: "3 deklaratsiyalar",
    //             file: "",
    //             fileDate: "27.07.2021 (5.1 va 5.2-binolar)",
    //         }
    //     ],
    //     placeCommentName: "Coastal Park",
    //     placeCommentCount: "5",
    //     placeCommentRatingCount: "4.5",
    //     placeComments: [
    //         {
    //             id: 1,
    //             personName: "Darya Rayevskiy",
    //             personImage: ASSETS.person,
    //             likeCount: 5,
    //             disLikeCount: 5,
    //             date: "20 yanvar",
    //             comment: "Majmua Daryo bo'yida qurilmoqda va bu juda katta afzallik. Piyoda siz o'rmon bog'iga borishingiz mumkin va bu erda mulk yaqin. Avtomobilsiz markazga borish qiyin bo'lgan yagona narsa.",
    //             positiveComment: "Tush tezlashayotgan stressni tanlaydi. O'rnatish impulsni birlashtiradi. Ta'lim ko'p qirrali kontrastni birlashtiradi.",
    //             negativeComment: "Yo’q",

    //         }
    //     ]
    // },
    // {
    //     id: 1,
    //     name: "Aist qarorgohi",
    //     images: [
    //         {
    //             id: 1,
    //             image: ASSETS.pr1
    //         },
    //         {
    //             id: 2,
    //             image: ASSETS.pr2
    //         },
    //         {
    //             id: 3,
    //             image: ASSETS.pr3
    //         },
    //         {
    //             id: 4,
    //             image: ASSETS.pr4
    //         },
    //     ],
    //     company: "Murad building",
    //     price: "35 000 $ dan",
    //     homeCount: "717 xonadon",
    //     process: "1-chorak 2023",
    //     near: "Karzinka.uz",
    //     nearTime: "20 daqiqa",
    //     studios: "48,4",
    //     twoRooms: "33,9",
    //     fourRooms: "62,7",
    //     oneRoom: "23,4",
    //     threeRooms: "47,2",
    //     fiveRooms: "0",
    //     contact: "+998 ( 99 ) 310 37 63",
    //     symbolDotIcon: <CarIcon />,
    //     processMedia: [
    //         {
    //             id: 1,
    //             image: ASSETS.pr1,
    //             video: ""
    //         }
    //     ],
    //     flatPlaces: "21.6 - 79.4 m2",
    //     finishTime: "2023 - 2025",
    //     buildings: "16 ta bino",
    //     ceilings: "2.6 m - 2.7 m",
    //     homeType: "Panel, monolit g'isht, g'isht, monolit",
    //     class: "Iqtisodiyot",
    //     floorNumbers: "10 dan 18 gacha",
    //     finishVariants: "Mebel bilan tugatish",
    //     producerTeam: "'Domda' Guruhi",
    //     deliveryInOneRooms: [
    //         {
    //             id: 1,
    //             date: "2023-yil II-B da yetkazish",
    //             oneRoom: "1-XONALI",
    //             oneRoomSize: "21.6 M2 DAN",
    //             oneRoomPrice: "6.3 - 8.7 MLN $ DAN",
    //             offerCount: "25 TA TAKLIFLAR",
    //             data: [
    //                 {
    //                     id: 1,
    //                     image: ASSETS.pr1,
    //                     price: "35 000 $",
    //                     size: "21.6  m2 dan",
    //                     info: "1-x xonali kvartira, 34.2  m2 , 4/9 qavat",
    //                     finishType: "Tugallandi"
    //                 }
    //             ]
    //         }
    //     ],
    //     deliveryInTwoRooms: [
    //         {
    //             id: 1,
    //             date: "2023-yil II-B da yetkazish",
    //             twoRooms: "1-XONALI",
    //             twoRoomSize: "21.6 M2 DAN",
    //             twoRoomPrice: "6.3 - 8.7 MLN $ DAN",
    //             offerCount: "25 TA TAKLIFLAR",
    //             data: [
    //                 {
    //                     id: 1,
    //                     image: ASSETS.pr1,
    //                     price: "35 000 $",
    //                     size: "21.6  m2 dan",
    //                     info: "1-x xonali kvartira, 34.2  m2 , 4/9 qavat",
    //                     finishType: "Tugallandi"
    //                 }
    //             ]
    //         }
    //     ],
    //     deliveryInThreeRooms: [
    //         {
    //             id: 1,
    //             date: "2023-yil II-B da yetkazish",
    //             threeRooms: "1-XONALI",
    //             threeRoomSize: "21.6 M2 DAN",
    //             threeRoomPrice: "6.3 - 8.7 MLN $ DAN",
    //             offerCount: "25 TA TAKLIFLAR",
    //             data: [
    //                 {
    //                     id: 1,
    //                     image: ASSETS.pr1,
    //                     price: "35 000 $",
    //                     size: "21.6  m2 dan",
    //                     info: "1-x xonali kvartira, 34.2  m2 , 4/9 qavat",
    //                     finishType: "Tugallandi"
    //                 }
    //             ]
    //         }
    //     ],
    //     deliveryInFourRooms: [
    //         {
    //             id: 1,
    //             date: "2023-yil II-B da yetkazish",
    //             fourRooms: "1-XONALI",
    //             fourRoomSize: "21.6 M2 DAN",
    //             fourRoomPrice: "6.3 - 8.7 MLN $ DAN",
    //             offerCount: "25 TA TAKLIFLAR",
    //             data: [
    //                 {
    //                     id: 1,
    //                     image: ASSETS.pr1,
    //                     price: "35 000 $",
    //                     size: "21.6  m2 dan",
    //                     info: "1-x xonali kvartira, 34.2  m2 , 4/9 qavat",
    //                     finishType: "Tugallandi"
    //                 },
    //                 {
    //                     id: 2,
    //                     image: ASSETS.pr1,
    //                     price: "35 000 $",
    //                     size: "21.6  m2 dan",
    //                     info: "1-x xonali kvartira, 34.2  m2 , 4/9 qavat",
    //                     finishType: "Tugallandi"
    //                 }
    //             ]
    //         }
    //     ],
    //     minExpense: "Minimal xarajat, ming $",
    //     location: "Toshkent sh, Yangi hayot t, O’zar ko’chasi 72 uy 47",
    //     howManyBuilding: "56",
    //     nearGoingTime: [
    //         {
    //             name: "Qizil Baltiya",
    //             time: "5 min",
    //             type: "",
    //         }
    //     ],
    //     bestUsefulComment: [
    //         {
    //             name: "",
    //             coment: "Idrok gomeostazni yoritadi, Xobbs bu muammoni birinchilardan bo'lib yoritib berdi psixologiya nuqtai nazaridang",
    //             person: "Begmamatov Shahzod",
    //             personImage: ASSETS.person,
    //         }
    //     ],
    //     locationToTransport: "Joylashuv, transportga kirish imkoniyati",
    //     infrastructure: [
    //         {
    //             id: 1,
    //             placeName: "Maktab",
    //             icon: '',
    //             security: "Devor bilan o'ralgan perimetr"
    //         }
    //     ],
    //     arrangements: "56",
    //     body: [
    //         {
    //             image: ASSETS.body1,
    //             rooms: "4",
    //             common: "79.35 m2",
    //             accommodation: "67.30 m2",
    //             kitchen: "7.96 m2",
    //             roomsArea: "12.7 / 10.98 / 11.45 m2",
    //             bodySizeFrom: "Korpus 4.2, 3-xona, 171 493 R / m2 dan",
    //             bodySizeTo: "52,9 m2 dan 9 068 570 R gacha"
    //         }
    //     ],
    //     investment: [
    //         {
    //             text: "Shoshilishni maslahat beramiz",
    //             middlePrice: "O'rtacha narx 2% ga tushdi",
    //             flatMiddlePrice: "6.9 mln $",
    //             flatMiddlePriceDown: "134 940 $",
    //             squareMiddlePrice: "6.9 mln $",
    //             squareMiddlePriceDown: "134 940 $",
    //             soldFlatsfFrom: "4316 dan",
    //             soldFlatsf: "1884 ta",
    //         }
    //     ],
    //     accessLocationToTr: [
    //         {
    //             text: "'Sohil bog'i turar joy majmuasi paxra daryosi sohilida, Pavlovskoye qishlog'i va yam qishlog'i yonida, MKADDAN 9 km uzoqlikda qurilgan.",
    //         },
    //         {
    //             text: "Yaqin atrofda Kashir shosesi va M-4 trassasi o'tadi, u orqali Moskva markaziga atigi 40 daqiqada borish mumkin."
    //         },
    //         {
    //             text: "O'n daqiqalik piyoda temir yo'l stantsiyasi joylashgan Leninskaya, undan 40 daqiqada Paveletskiy vokzaliga poezdda borishingiz mumkin. 2024 yilda ushbu stantsiya McD- 5 tarkibiga kiradi.Jamoat transportida eng yaqin Domodedovskaya metro stantsiyasiga borish uchun yarim soat vaqt ketadi."
    //         }
    //     ],
    //     aboutProducer: {
    //         finished: "24 LCD - dagi 211 ta uy",
    //         construction: "20 LCD - da 140 ta uy",
    //         companyAge: "Bozorda 13 yil",
    //         companyText: `Bozorning har bir sohasi, bugungi qarashlar doirasida, maqsadli trafikni ko'p qirrali ravishda tezlashtiradi. Biznes-reja
    //     muvozanatli. Taniqli marketing klassiklaridan biri F. Kotler buni quyidagicha ta'riflaydi: qayta aloqa kuchaytiradi
    //         oldingi kampaniyalar tajribasidan foydalangan holda reklama tartibi. Mediaves, yuqorida aytib o'tilganlardan ko'rinib turibdiki, quyidagilarni jamlaydi`,
    //     },
    //     documents: [
    //         {
    //             fileName: "3 deklaratsiyalar",
    //             file: "",
    //             fileDate: "27.07.2021 (5.1 va 5.2-binolar)",
    //         },
    //         {
    //             fileName: "3 deklaratsiyalar",
    //             file: "",
    //             fileDate: "27.07.2021 (5.1 va 5.2-binolar)",
    //         },
    //         {
    //             fileName: "3 deklaratsiyalar",
    //             file: "",
    //             fileDate: "27.07.2021 (5.1 va 5.2-binolar)",
    //         }
    //     ],
    //     placeCommentName: "Coastal Park",
    //     placeCommentCount: "5",
    //     placeCommentRatingCount: "4.5",
    //     placeComments: [
    //         {
    //             id: 1,
    //             personName: "Darya Rayevskiy",
    //             personImage: ASSETS.person,
    //             likeCount: 5,
    //             disLikeCount: 5,
    //             date: "20 yanvar",
    //             comment: "Majmua Daryo bo'yida qurilmoqda va bu juda katta afzallik. Piyoda siz o'rmon bog'iga borishingiz mumkin va bu erda mulk yaqin. Avtomobilsiz markazga borish qiyin bo'lgan yagona narsa.",
    //             positiveComment: "Tush tezlashayotgan stressni tanlaydi. O'rnatish impulsni birlashtiradi. Ta'lim ko'p qirrali kontrastni birlashtiradi.",
    //             negativeComment: "Yo’q",

    //         }
    //     ]
    // },
    // {
    //     id: 1,
    //     name: "Aist qarorgohi",
    //     images: [
    //         {
    //             id: 1,
    //             image: ASSETS.pr1
    //         },
    //         {
    //             id: 2,
    //             image: ASSETS.pr2
    //         },
    //         {
    //             id: 3,
    //             image: ASSETS.pr3
    //         },
    //         {
    //             id: 4,
    //             image: ASSETS.pr4
    //         },
    //     ],
    //     company: "Murad building",
    //     price: "35 000 $ dan",
    //     homeCount: "717 xonadon",
    //     process: "1-chorak 2023",
    //     near: "Karzinka.uz",
    //     nearTime: "20 daqiqa",
    //     studios: "48,4",
    //     twoRooms: "33,9",
    //     fourRooms: "62,7",
    //     oneRoom: "23,4",
    //     threeRooms: "47,2",
    //     fiveRooms: "0",
    //     contact: "+998 ( 99 ) 310 37 63",
    //     symbolDotIcon: <CarIcon />,
    //     processMedia: [
    //         {
    //             id: 1,
    //             image: ASSETS.pr1,
    //             video: ""
    //         }
    //     ],
    //     flatPlaces: "21.6 - 79.4 m2",
    //     finishTime: "2023 - 2025",
    //     buildings: "16 ta bino",
    //     ceilings: "2.6 m - 2.7 m",
    //     homeType: "Panel, monolit g'isht, g'isht, monolit",
    //     class: "Iqtisodiyot",
    //     floorNumbers: "10 dan 18 gacha",
    //     finishVariants: "Mebel bilan tugatish",
    //     producerTeam: "'Domda' Guruhi",
    //     deliveryInOneRooms: [
    //         {
    //             id: 1,
    //             date: "2023-yil II-B da yetkazish",
    //             oneRoom: "1-XONALI",
    //             oneRoomSize: "21.6 M2 DAN",
    //             oneRoomPrice: "6.3 - 8.7 MLN $ DAN",
    //             offerCount: "25 TA TAKLIFLAR",
    //             data: [
    //                 {
    //                     id: 1,
    //                     image: ASSETS.pr1,
    //                     price: "35 000 $",
    //                     size: "21.6  m2 dan",
    //                     info: "1-x xonali kvartira, 34.2  m2 , 4/9 qavat",
    //                     finishType: "Tugallandi"
    //                 }
    //             ]
    //         }
    //     ],
    //     deliveryInTwoRooms: [
    //         {
    //             id: 1,
    //             date: "2023-yil II-B da yetkazish",
    //             twoRooms: "1-XONALI",
    //             twoRoomSize: "21.6 M2 DAN",
    //             twoRoomPrice: "6.3 - 8.7 MLN $ DAN",
    //             offerCount: "25 TA TAKLIFLAR",
    //             data: [
    //                 {
    //                     id: 1,
    //                     image: ASSETS.pr1,
    //                     price: "35 000 $",
    //                     size: "21.6  m2 dan",
    //                     info: "1-x xonali kvartira, 34.2  m2 , 4/9 qavat",
    //                     finishType: "Tugallandi"
    //                 }
    //             ]
    //         }
    //     ],
    //     deliveryInThreeRooms: [
    //         {
    //             id: 1,
    //             date: "2023-yil II-B da yetkazish",
    //             threeRooms: "1-XONALI",
    //             threeRoomSize: "21.6 M2 DAN",
    //             threeRoomPrice: "6.3 - 8.7 MLN $ DAN",
    //             offerCount: "25 TA TAKLIFLAR",
    //             data: [
    //                 {
    //                     id: 1,
    //                     image: ASSETS.pr1,
    //                     price: "35 000 $",
    //                     size: "21.6  m2 dan",
    //                     info: "1-x xonali kvartira, 34.2  m2 , 4/9 qavat",
    //                     finishType: "Tugallandi"
    //                 }
    //             ]
    //         }
    //     ],
    //     deliveryInFourRooms: [
    //         {
    //             id: 1,
    //             date: "2023-yil II-B da yetkazish",
    //             fourRooms: "1-XONALI",
    //             fourRoomSize: "21.6 M2 DAN",
    //             fourRoomPrice: "6.3 - 8.7 MLN $ DAN",
    //             offerCount: "25 TA TAKLIFLAR",
    //             data: [
    //                 {
    //                     id: 1,
    //                     image: ASSETS.pr1,
    //                     price: "35 000 $",
    //                     size: "21.6  m2 dan",
    //                     info: "1-x xonali kvartira, 34.2  m2 , 4/9 qavat",
    //                     finishType: "Tugallandi"
    //                 },
    //                 {
    //                     id: 2,
    //                     image: ASSETS.pr1,
    //                     price: "35 000 $",
    //                     size: "21.6  m2 dan",
    //                     info: "1-x xonali kvartira, 34.2  m2 , 4/9 qavat",
    //                     finishType: "Tugallandi"
    //                 }
    //             ]
    //         }
    //     ],
    //     minExpense: "Minimal xarajat, ming $",
    //     location: "Toshkent sh, Yangi hayot t, O’zar ko’chasi 72 uy 47",
    //     howManyBuilding: "56",
    //     nearGoingTime: [
    //         {
    //             name: "Qizil Baltiya",
    //             time: "5 min",
    //             type: "",
    //         }
    //     ],
    //     bestUsefulComment: [
    //         {
    //             name: "",
    //             coment: "Idrok gomeostazni yoritadi, Xobbs bu muammoni birinchilardan bo'lib yoritib berdi psixologiya nuqtai nazaridang",
    //             person: "Begmamatov Shahzod",
    //             personImage: ASSETS.person,
    //         }
    //     ],
    //     locationToTransport: "Joylashuv, transportga kirish imkoniyati",
    //     infrastructure: [
    //         {
    //             id: 1,
    //             placeName: "Maktab",
    //             icon: '',
    //             security: "Devor bilan o'ralgan perimetr"
    //         }
    //     ],
    //     arrangements: "56",
    //     body: [
    //         {
    //             image: ASSETS.body1,
    //             rooms: "4",
    //             common: "79.35 m2",
    //             accommodation: "67.30 m2",
    //             kitchen: "7.96 m2",
    //             roomsArea: "12.7 / 10.98 / 11.45 m2",
    //             bodySizeFrom: "Korpus 4.2, 3-xona, 171 493 R / m2 dan",
    //             bodySizeTo: "52,9 m2 dan 9 068 570 R gacha"
    //         }
    //     ],
    //     investment: [
    //         {
    //             text: "Shoshilishni maslahat beramiz",
    //             middlePrice: "O'rtacha narx 2% ga tushdi",
    //             flatMiddlePrice: "6.9 mln $",
    //             flatMiddlePriceDown: "134 940 $",
    //             squareMiddlePrice: "6.9 mln $",
    //             squareMiddlePriceDown: "134 940 $",
    //             soldFlatsfFrom: "4316 dan",
    //             soldFlatsf: "1884 ta",
    //         }
    //     ],
    //     accessLocationToTr: [
    //         {
    //             text: "'Sohil bog'i turar joy majmuasi paxra daryosi sohilida, Pavlovskoye qishlog'i va yam qishlog'i yonida, MKADDAN 9 km uzoqlikda qurilgan.",
    //         },
    //         {
    //             text: "Yaqin atrofda Kashir shosesi va M-4 trassasi o'tadi, u orqali Moskva markaziga atigi 40 daqiqada borish mumkin."
    //         },
    //         {
    //             text: "O'n daqiqalik piyoda temir yo'l stantsiyasi joylashgan Leninskaya, undan 40 daqiqada Paveletskiy vokzaliga poezdda borishingiz mumkin. 2024 yilda ushbu stantsiya McD- 5 tarkibiga kiradi.Jamoat transportida eng yaqin Domodedovskaya metro stantsiyasiga borish uchun yarim soat vaqt ketadi."
    //         }
    //     ],
    //     aboutProducer: {
    //         finished: "24 LCD - dagi 211 ta uy",
    //         construction: "20 LCD - da 140 ta uy",
    //         companyAge: "Bozorda 13 yil",
    //         companyText: `Bozorning har bir sohasi, bugungi qarashlar doirasida, maqsadli trafikni ko'p qirrali ravishda tezlashtiradi. Biznes-reja
    //     muvozanatli. Taniqli marketing klassiklaridan biri F. Kotler buni quyidagicha ta'riflaydi: qayta aloqa kuchaytiradi
    //         oldingi kampaniyalar tajribasidan foydalangan holda reklama tartibi. Mediaves, yuqorida aytib o'tilganlardan ko'rinib turibdiki, quyidagilarni jamlaydi`,
    //     },
    //     documents: [
    //         {
    //             fileName: "3 deklaratsiyalar",
    //             file: "",
    //             fileDate: "27.07.2021 (5.1 va 5.2-binolar)",
    //         },
    //         {
    //             fileName: "3 deklaratsiyalar",
    //             file: "",
    //             fileDate: "27.07.2021 (5.1 va 5.2-binolar)",
    //         },
    //         {
    //             fileName: "3 deklaratsiyalar",
    //             file: "",
    //             fileDate: "27.07.2021 (5.1 va 5.2-binolar)",
    //         }
    //     ],
    //     placeCommentName: "Coastal Park",
    //     placeCommentCount: "5",
    //     placeCommentRatingCount: "4.5",
    //     placeComments: [
    //         {
    //             id: 1,
    //             personName: "Darya Rayevskiy",
    //             personImage: ASSETS.person,
    //             likeCount: 5,
    //             disLikeCount: 5,
    //             date: "20 yanvar",
    //             comment: "Majmua Daryo bo'yida qurilmoqda va bu juda katta afzallik. Piyoda siz o'rmon bog'iga borishingiz mumkin va bu erda mulk yaqin. Avtomobilsiz markazga borish qiyin bo'lgan yagona narsa.",
    //             positiveComment: "Tush tezlashayotgan stressni tanlaydi. O'rnatish impulsni birlashtiradi. Ta'lim ko'p qirrali kontrastni birlashtiradi.",
    //             negativeComment: "Yo’q",

    //         }
    //     ]
    // },
    // {
    //     id: 2,
    //     name: "Aist qarorgohi",
    //     images: [
    //         {
    //             id: 1,
    //             image: ASSETS.pr1
    //         },
    //         {
    //             id: 2,
    //             image: ASSETS.pr2
    //         },
    //         {
    //             id: 3,
    //             image: ASSETS.pr3
    //         },
    //         {
    //             id: 4,
    //             image: ASSETS.pr4
    //         },
    //     ],
    //     company: "Murad building",
    //     price: "35 000 $ dan",
    //     homeCount: "717 xonadon",
    //     process: "1-chorak 2023",
    //     near: "Karzinka.uz",
    //     nearTime: "20 daqiqa",
    //     studios: "48,4",
    //     twoRooms: "33,9",
    //     fourRooms: "62,7",
    //     oneRoom: "23,4",
    //     threeRooms: "47,2",
    //     fiveRooms: "0",
    //     contact: "+998 ( 99 ) 310 37 63",
    //     symbolDotIcon: <CarIcon />,
    //     processMedia: [
    //         {
    //             id: 1,
    //             image: ASSETS.pr1,
    //             video: ""
    //         }
    //     ],
    //     flatPlaces: "21.6 - 79.4 m2",
    //     finishTime: "2023 - 2025",
    //     buildings: "16 ta bino",
    //     ceilings: "2.6 m - 2.7 m",
    //     homeType: "Panel, monolit g'isht, g'isht, monolit",
    //     class: "Iqtisodiyot",
    //     floorNumbers: "10 dan 18 gacha",
    //     finishVariants: "Mebel bilan tugatish",
    //     producerTeam: "'Domda' Guruhi",
    //     deliveryInOneRooms: [
    //         {
    //             id: 1,
    //             date: "2023-yil II-B da yetkazish",
    //             oneRoom: "1-XONALI",
    //             oneRoomSize: "21.6 M2 DAN",
    //             oneRoomPrice: "6.3 - 8.7 MLN $ DAN",
    //             offerCount: "25 TA TAKLIFLAR",
    //             data: [
    //                 {
    //                     id: 1,
    //                     image: ASSETS.pr1,
    //                     price: "35 000 $",
    //                     size: "21.6  m2 dan",
    //                     info: "1-x xonali kvartira, 34.2  m2 , 4/9 qavat",
    //                     finishType: "Tugallandi"
    //                 }
    //             ]
    //         }
    //     ],
    //     deliveryInTwoRooms: [
    //         {
    //             id: 1,
    //             date: "2023-yil II-B da yetkazish",
    //             twoRooms: "1-XONALI",
    //             twoRoomSize: "21.6 M2 DAN",
    //             twoRoomPrice: "6.3 - 8.7 MLN $ DAN",
    //             offerCount: "25 TA TAKLIFLAR",
    //             data: [
    //                 {
    //                     id: 1,
    //                     image: ASSETS.pr1,
    //                     price: "35 000 $",
    //                     size: "21.6  m2 dan",
    //                     info: "1-x xonali kvartira, 34.2  m2 , 4/9 qavat",
    //                     finishType: "Tugallandi"
    //                 }
    //             ]
    //         }
    //     ],
    //     deliveryInThreeRooms: [
    //         {
    //             id: 1,
    //             date: "2023-yil II-B da yetkazish",
    //             threeRooms: "1-XONALI",
    //             threeRoomSize: "21.6 M2 DAN",
    //             threeRoomPrice: "6.3 - 8.7 MLN $ DAN",
    //             offerCount: "25 TA TAKLIFLAR",
    //             data: [
    //                 {
    //                     id: 1,
    //                     image: ASSETS.pr1,
    //                     price: "35 000 $",
    //                     size: "21.6  m2 dan",
    //                     info: "1-x xonali kvartira, 34.2  m2 , 4/9 qavat",
    //                     finishType: "Tugallandi"
    //                 }
    //             ]
    //         }
    //     ],
    //     deliveryInFourRooms: [
    //         {
    //             id: 3,
    //             date: "2023-yil II-B da yetkazish",
    //             fourRooms: "1-XONALI",
    //             fourRoomSize: "21.6 M2 DAN",
    //             fourRoomPrice: "6.3 - 8.7 MLN $ DAN",
    //             offerCount: "25 TA TAKLIFLAR",
    //             data: [
    //                 {
    //                     id: 1,
    //                     image: ASSETS.pr1,
    //                     price: "35 000 $",
    //                     size: "21.6  m2 dan",
    //                     info: "1-x xonali kvartira, 34.2  m2 , 4/9 qavat",
    //                     finishType: "Tugallandi"
    //                 },
    //                 {
    //                     id: 2,
    //                     image: ASSETS.pr1,
    //                     price: "35 000 $",
    //                     size: "21.6  m2 dan",
    //                     info: "1-x xonali kvartira, 34.2  m2 , 4/9 qavat",
    //                     finishType: "Tugallandi"
    //                 }
    //             ]
    //         }
    //     ],
    //     minExpense: "Minimal xarajat, ming $",
    //     location: "Toshkent sh, Yangi hayot t, O’zar ko’chasi 72 uy 47",
    //     howManyBuilding: "56",
    //     nearGoingTime: [
    //         {
    //             name: "Qizil Baltiya",
    //             time: "5 min",
    //             type: "",
    //         }
    //     ],
    //     bestUsefulComment: [
    //         {
    //             name: "",
    //             coment: "Idrok gomeostazni yoritadi, Xobbs bu muammoni birinchilardan bo'lib yoritib berdi psixologiya nuqtai nazaridang",
    //             person: "Begmamatov Shahzod",
    //             personImage: ASSETS.person,
    //         }
    //     ],
    //     locationToTransport: "Joylashuv, transportga kirish imkoniyati",
    //     infrastructure: [
    //         {
    //             id: 1,
    //             placeName: "Maktab",
    //             icon: '',
    //             security: "Devor bilan o'ralgan perimetr"
    //         }
    //     ],
    //     arrangements: "56",
    //     body: [
    //         {
    //             image: ASSETS.body1,
    //             rooms: "4",
    //             common: "79.35 m2",
    //             accommodation: "67.30 m2",
    //             kitchen: "7.96 m2",
    //             roomsArea: "12.7 / 10.98 / 11.45 m2",
    //             bodySizeFrom: "Korpus 4.2, 3-xona, 171 493 R / m2 dan",
    //             bodySizeTo: "52,9 m2 dan 9 068 570 R gacha"
    //         }
    //     ],
    //     investment: [
    //         {
    //             text: "Shoshilishni maslahat beramiz",
    //             middlePrice: "O'rtacha narx 2% ga tushdi",
    //             flatMiddlePrice: "6.9 mln $",
    //             flatMiddlePriceDown: "134 940 $",
    //             squareMiddlePrice: "6.9 mln $",
    //             squareMiddlePriceDown: "134 940 $",
    //             soldFlatsfFrom: "4316 dan",
    //             soldFlatsf: "1884 ta",
    //         }
    //     ],
    //     accessLocationToTr: [
    //         {
    //             text: "'Sohil bog'i turar joy majmuasi paxra daryosi sohilida, Pavlovskoye qishlog'i va yam qishlog'i yonida, MKADDAN 9 km uzoqlikda qurilgan.",
    //         },
    //         {
    //             text: "Yaqin atrofda Kashir shosesi va M-4 trassasi o'tadi, u orqali Moskva markaziga atigi 40 daqiqada borish mumkin."
    //         },
    //         {
    //             text: "O'n daqiqalik piyoda temir yo'l stantsiyasi joylashgan Leninskaya, undan 40 daqiqada Paveletskiy vokzaliga poezdda borishingiz mumkin. 2024 yilda ushbu stantsiya McD- 5 tarkibiga kiradi.Jamoat transportida eng yaqin Domodedovskaya metro stantsiyasiga borish uchun yarim soat vaqt ketadi."
    //         }
    //     ],
    //     aboutProducer: {
    //         finished: "24 LCD - dagi 211 ta uy",
    //         construction: "20 LCD - da 140 ta uy",
    //         companyAge: "Bozorda 13 yil",
    //         companyText: `Bozorning har bir sohasi, bugungi qarashlar doirasida, maqsadli trafikni ko'p qirrali ravishda tezlashtiradi. Biznes-reja
    //     muvozanatli. Taniqli marketing klassiklaridan biri F. Kotler buni quyidagicha ta'riflaydi: qayta aloqa kuchaytiradi
    //         oldingi kampaniyalar tajribasidan foydalangan holda reklama tartibi. Mediaves, yuqorida aytib o'tilganlardan ko'rinib turibdiki, quyidagilarni jamlaydi`,
    //     },
    //     documents: [
    //         {
    //             fileName: "3 deklaratsiyalar",
    //             file: "",
    //             fileDate: "27.07.2021 (5.1 va 5.2-binolar)",
    //         },
    //         {
    //             fileName: "3 deklaratsiyalar",
    //             file: "",
    //             fileDate: "27.07.2021 (5.1 va 5.2-binolar)",
    //         },
    //         {
    //             fileName: "3 deklaratsiyalar",
    //             file: "",
    //             fileDate: "27.07.2021 (5.1 va 5.2-binolar)",
    //         }
    //     ],
    //     placeCommentName: "Coastal Park",
    //     placeCommentCount: "5",
    //     placeCommentRatingCount: "4.5",
    //     placeComments: [
    //         {
    //             id: 1,
    //             personName: "Darya Rayevskiy",
    //             personImage: ASSETS.person,
    //             likeCount: 5,
    //             disLikeCount: 5,
    //             date: "20 yanvar",
    //             comment: "Majmua Daryo bo'yida qurilmoqda va bu juda katta afzallik. Piyoda siz o'rmon bog'iga borishingiz mumkin va bu erda mulk yaqin. Avtomobilsiz markazga borish qiyin bo'lgan yagona narsa.",
    //             positiveComment: "Tush tezlashayotgan stressni tanlaydi. O'rnatish impulsni birlashtiradi. Ta'lim ko'p qirrali kontrastni birlashtiradi.",
    //             negativeComment: "Yo’q",

    //         }
    //     ]
    // },
    // {
    //     id: 1,
    //     name: "Aist qarorgohi",
    //     images: [
    //         {
    //             id: 1,
    //             image: ASSETS.pr1
    //         },
    //         {
    //             id: 2,
    //             image: ASSETS.pr2
    //         },
    //         {
    //             id: 3,
    //             image: ASSETS.pr3
    //         },
    //         {
    //             id: 4,
    //             image: ASSETS.pr4
    //         },
    //     ],
    //     company: "Murad building",
    //     price: "35 000 $ dan",
    //     homeCount: "717 xonadon",
    //     process: "1-chorak 2023",
    //     near: "Karzinka.uz",
    //     nearTime: "20 daqiqa",
    //     studios: "48,4",
    //     twoRooms: "33,9",
    //     fourRooms: "62,7",
    //     oneRoom: "23,4",
    //     threeRooms: "47,2",
    //     fiveRooms: "0",
    //     contact: "+998 ( 99 ) 310 37 63",
    //     symbolDotIcon: <CarIcon />,
    //     processMedia: [
    //         {
    //             id: 1,
    //             image: ASSETS.pr1,
    //             video: ""
    //         }
    //     ],
    //     flatPlaces: "21.6 - 79.4 m2",
    //     finishTime: "2023 - 2025",
    //     buildings: "16 ta bino",
    //     ceilings: "2.6 m - 2.7 m",
    //     homeType: "Panel, monolit g'isht, g'isht, monolit",
    //     class: "Iqtisodiyot",
    //     floorNumbers: "10 dan 18 gacha",
    //     finishVariants: "Mebel bilan tugatish",
    //     producerTeam: "'Domda' Guruhi",
    //     deliveryInOneRooms: [
    //         {
    //             id: 1,
    //             date: "2023-yil II-B da yetkazish",
    //             oneRoom: "1-XONALI",
    //             oneRoomSize: "21.6 M2 DAN",
    //             oneRoomPrice: "6.3 - 8.7 MLN $ DAN",
    //             offerCount: "25 TA TAKLIFLAR",
    //             data: [
    //                 {
    //                     id: 1,
    //                     image: ASSETS.pr1,
    //                     price: "35 000 $",
    //                     size: "21.6  m2 dan",
    //                     info: "1-x xonali kvartira, 34.2  m2 , 4/9 qavat",
    //                     finishType: "Tugallandi"
    //                 }
    //             ]
    //         }
    //     ],
    //     deliveryInTwoRooms: [
    //         {
    //             id: 1,
    //             date: "2023-yil II-B da yetkazish",
    //             twoRooms: "1-XONALI",
    //             twoRoomSize: "21.6 M2 DAN",
    //             twoRoomPrice: "6.3 - 8.7 MLN $ DAN",
    //             offerCount: "25 TA TAKLIFLAR",
    //             data: [
    //                 {
    //                     id: 1,
    //                     image: ASSETS.pr1,
    //                     price: "35 000 $",
    //                     size: "21.6  m2 dan",
    //                     info: "1-x xonali kvartira, 34.2  m2 , 4/9 qavat",
    //                     finishType: "Tugallandi"
    //                 }
    //             ]
    //         }
    //     ],
    //     deliveryInThreeRooms: [
    //         {
    //             id: 1,
    //             date: "2023-yil II-B da yetkazish",
    //             threeRooms: "1-XONALI",
    //             threeRoomSize: "21.6 M2 DAN",
    //             threeRoomPrice: "6.3 - 8.7 MLN $ DAN",
    //             offerCount: "25 TA TAKLIFLAR",
    //             data: [
    //                 {
    //                     id: 1,
    //                     image: ASSETS.pr1,
    //                     price: "35 000 $",
    //                     size: "21.6  m2 dan",
    //                     info: "1-x xonali kvartira, 34.2  m2 , 4/9 qavat",
    //                     finishType: "Tugallandi"
    //                 }
    //             ]
    //         }
    //     ],
    //     deliveryInFourRooms: [
    //         {
    //             id: 1,
    //             date: "2023-yil II-B da yetkazish",
    //             fourRooms: "1-XONALI",
    //             fourRoomSize: "21.6 M2 DAN",
    //             fourRoomPrice: "6.3 - 8.7 MLN $ DAN",
    //             offerCount: "25 TA TAKLIFLAR",
    //             data: [
    //                 {
    //                     id: 1,
    //                     image: ASSETS.pr1,
    //                     price: "35 000 $",
    //                     size: "21.6  m2 dan",
    //                     info: "1-x xonali kvartira, 34.2  m2 , 4/9 qavat",
    //                     finishType: "Tugallandi"
    //                 },
    //                 {
    //                     id: 2,
    //                     image: ASSETS.pr1,
    //                     price: "35 000 $",
    //                     size: "21.6  m2 dan",
    //                     info: "1-x xonali kvartira, 34.2  m2 , 4/9 qavat",
    //                     finishType: "Tugallandi"
    //                 }
    //             ]
    //         }
    //     ],
    //     minExpense: "Minimal xarajat, ming $",
    //     location: "Toshkent sh, Yangi hayot t, O’zar ko’chasi 72 uy 47",
    //     howManyBuilding: "56",
    //     nearGoingTime: [
    //         {
    //             name: "Qizil Baltiya",
    //             time: "5 min",
    //             type: "",
    //         }
    //     ],
    //     bestUsefulComment: [
    //         {
    //             name: "",
    //             coment: "Idrok gomeostazni yoritadi, Xobbs bu muammoni birinchilardan bo'lib yoritib berdi psixologiya nuqtai nazaridang",
    //             person: "Begmamatov Shahzod",
    //             personImage: ASSETS.person,
    //         }
    //     ],
    //     locationToTransport: "Joylashuv, transportga kirish imkoniyati",
    //     infrastructure: [
    //         {
    //             id: 1,
    //             placeName: "Maktab",
    //             icon: '',
    //             security: "Devor bilan o'ralgan perimetr"
    //         }
    //     ],
    //     arrangements: "56",
    //     body: [
    //         {
    //             image: ASSETS.body1,
    //             rooms: "4",
    //             common: "79.35 m2",
    //             accommodation: "67.30 m2",
    //             kitchen: "7.96 m2",
    //             roomsArea: "12.7 / 10.98 / 11.45 m2",
    //             bodySizeFrom: "Korpus 4.2, 3-xona, 171 493 R / m2 dan",
    //             bodySizeTo: "52,9 m2 dan 9 068 570 R gacha"
    //         }
    //     ],
    //     investment: [
    //         {
    //             text: "Shoshilishni maslahat beramiz",
    //             middlePrice: "O'rtacha narx 2% ga tushdi",
    //             flatMiddlePrice: "6.9 mln $",
    //             flatMiddlePriceDown: "134 940 $",
    //             squareMiddlePrice: "6.9 mln $",
    //             squareMiddlePriceDown: "134 940 $",
    //             soldFlatsfFrom: "4316 dan",
    //             soldFlatsf: "1884 ta",
    //         }
    //     ],
    //     accessLocationToTr: [
    //         {
    //             text: "'Sohil bog'i turar joy majmuasi paxra daryosi sohilida, Pavlovskoye qishlog'i va yam qishlog'i yonida, MKADDAN 9 km uzoqlikda qurilgan.",
    //         },
    //         {
    //             text: "Yaqin atrofda Kashir shosesi va M-4 trassasi o'tadi, u orqali Moskva markaziga atigi 40 daqiqada borish mumkin."
    //         },
    //         {
    //             text: "O'n daqiqalik piyoda temir yo'l stantsiyasi joylashgan Leninskaya, undan 40 daqiqada Paveletskiy vokzaliga poezdda borishingiz mumkin. 2024 yilda ushbu stantsiya McD- 5 tarkibiga kiradi.Jamoat transportida eng yaqin Domodedovskaya metro stantsiyasiga borish uchun yarim soat vaqt ketadi."
    //         }
    //     ],
    //     aboutProducer: {
    //         finished: "24 LCD - dagi 211 ta uy",
    //         construction: "20 LCD - da 140 ta uy",
    //         companyAge: "Bozorda 13 yil",
    //         companyText: `Bozorning har bir sohasi, bugungi qarashlar doirasida, maqsadli trafikni ko'p qirrali ravishda tezlashtiradi. Biznes-reja
    //     muvozanatli. Taniqli marketing klassiklaridan biri F. Kotler buni quyidagicha ta'riflaydi: qayta aloqa kuchaytiradi
    //         oldingi kampaniyalar tajribasidan foydalangan holda reklama tartibi. Mediaves, yuqorida aytib o'tilganlardan ko'rinib turibdiki, quyidagilarni jamlaydi`,
    //     },
    //     documents: [
    //         {
    //             fileName: "3 deklaratsiyalar",
    //             file: "",
    //             fileDate: "27.07.2021 (5.1 va 5.2-binolar)",
    //         },
    //         {
    //             fileName: "3 deklaratsiyalar",
    //             file: "",
    //             fileDate: "27.07.2021 (5.1 va 5.2-binolar)",
    //         },
    //         {
    //             fileName: "3 deklaratsiyalar",
    //             file: "",
    //             fileDate: "27.07.2021 (5.1 va 5.2-binolar)",
    //         }
    //     ],
    //     placeCommentName: "Coastal Park",
    //     placeCommentCount: "5",
    //     placeCommentRatingCount: "4.5",
    //     placeComments: [
    //         {
    //             id: 1,
    //             personName: "Darya Rayevskiy",
    //             personImage: ASSETS.person,
    //             likeCount: 5,
    //             disLikeCount: 5,
    //             date: "20 yanvar",
    //             comment: "Majmua Daryo bo'yida qurilmoqda va bu juda katta afzallik. Piyoda siz o'rmon bog'iga borishingiz mumkin va bu erda mulk yaqin. Avtomobilsiz markazga borish qiyin bo'lgan yagona narsa.",
    //             positiveComment: "Tush tezlashayotgan stressni tanlaydi. O'rnatish impulsni birlashtiradi. Ta'lim ko'p qirrali kontrastni birlashtiradi.",
    //             negativeComment: "Yo’q",

    //         }
    //     ]
    // },
    // {
    //     id: 1,
    //     name: "Aist qarorgohi",
    //     images: [
    //         {
    //             id: 1,
    //             image: ASSETS.pr1
    //         },
    //         {
    //             id: 2,
    //             image: ASSETS.pr2
    //         },
    //         {
    //             id: 3,
    //             image: ASSETS.pr3
    //         },
    //         {
    //             id: 4,
    //             image: ASSETS.pr4
    //         },
    //     ],
    //     company: "Murad building",
    //     price: "35 000 $ dan",
    //     homeCount: "717 xonadon",
    //     process: "1-chorak 2023",
    //     near: "Karzinka.uz",
    //     nearTime: "20 daqiqa",
    //     studios: "48,4",
    //     twoRooms: "33,9",
    //     fourRooms: "62,7",
    //     oneRoom: "23,4",
    //     threeRooms: "47,2",
    //     fiveRooms: "0",
    //     contact: "+998 ( 99 ) 310 37 63",
    //     symbolDotIcon: <CarIcon />,
    //     processMedia: [
    //         {
    //             id: 1,
    //             image: ASSETS.pr1,
    //             video: ""
    //         }
    //     ],
    //     flatPlaces: "21.6 - 79.4 m2",
    //     finishTime: "2023 - 2025",
    //     buildings: "16 ta bino",
    //     ceilings: "2.6 m - 2.7 m",
    //     homeType: "Panel, monolit g'isht, g'isht, monolit",
    //     class: "Iqtisodiyot",
    //     floorNumbers: "10 dan 18 gacha",
    //     finishVariants: "Mebel bilan tugatish",
    //     producerTeam: "'Domda' Guruhi",
    //     deliveryInOneRooms: [
    //         {
    //             id: 1,
    //             date: "2023-yil II-B da yetkazish",
    //             oneRoom: "1-XONALI",
    //             oneRoomSize: "21.6 M2 DAN",
    //             oneRoomPrice: "6.3 - 8.7 MLN $ DAN",
    //             offerCount: "25 TA TAKLIFLAR",
    //             data: [
    //                 {
    //                     id: 1,
    //                     image: ASSETS.pr1,
    //                     price: "35 000 $",
    //                     size: "21.6  m2 dan",
    //                     info: "1-x xonali kvartira, 34.2  m2 , 4/9 qavat",
    //                     finishType: "Tugallandi"
    //                 }
    //             ]
    //         }
    //     ],
    //     deliveryInTwoRooms: [
    //         {
    //             id: 1,
    //             date: "2023-yil II-B da yetkazish",
    //             twoRooms: "1-XONALI",
    //             twoRoomSize: "21.6 M2 DAN",
    //             twoRoomPrice: "6.3 - 8.7 MLN $ DAN",
    //             offerCount: "25 TA TAKLIFLAR",
    //             data: [
    //                 {
    //                     id: 1,
    //                     image: ASSETS.pr1,
    //                     price: "35 000 $",
    //                     size: "21.6  m2 dan",
    //                     info: "1-x xonali kvartira, 34.2  m2 , 4/9 qavat",
    //                     finishType: "Tugallandi"
    //                 }
    //             ]
    //         }
    //     ],
    //     deliveryInThreeRooms: [
    //         {
    //             id: 1,
    //             date: "2023-yil II-B da yetkazish",
    //             threeRooms: "1-XONALI",
    //             threeRoomSize: "21.6 M2 DAN",
    //             threeRoomPrice: "6.3 - 8.7 MLN $ DAN",
    //             offerCount: "25 TA TAKLIFLAR",
    //             data: [
    //                 {
    //                     id: 1,
    //                     image: ASSETS.pr1,
    //                     price: "35 000 $",
    //                     size: "21.6  m2 dan",
    //                     info: "1-x xonali kvartira, 34.2  m2 , 4/9 qavat",
    //                     finishType: "Tugallandi"
    //                 }
    //             ]
    //         }
    //     ],
    //     deliveryInFourRooms: [
    //         {
    //             id: 1,
    //             date: "2023-yil II-B da yetkazish",
    //             fourRooms: "1-XONALI",
    //             fourRoomSize: "21.6 M2 DAN",
    //             fourRoomPrice: "6.3 - 8.7 MLN $ DAN",
    //             offerCount: "25 TA TAKLIFLAR",
    //             data: [
    //                 {
    //                     id: 1,
    //                     image: ASSETS.pr1,
    //                     price: "35 000 $",
    //                     size: "21.6  m2 dan",
    //                     info: "1-x xonali kvartira, 34.2  m2 , 4/9 qavat",
    //                     finishType: "Tugallandi"
    //                 },
    //                 {
    //                     id: 2,
    //                     image: ASSETS.pr1,
    //                     price: "35 000 $",
    //                     size: "21.6  m2 dan",
    //                     info: "1-x xonali kvartira, 34.2  m2 , 4/9 qavat",
    //                     finishType: "Tugallandi"
    //                 }
    //             ]
    //         }
    //     ],
    //     minExpense: "Minimal xarajat, ming $",
    //     location: "Toshkent sh, Yangi hayot t, O’zar ko’chasi 72 uy 47",
    //     howManyBuilding: "56",
    //     nearGoingTime: [
    //         {
    //             name: "Qizil Baltiya",
    //             time: "5 min",
    //             type: "",
    //         }
    //     ],
    //     bestUsefulComment: [
    //         {
    //             name: "",
    //             coment: "Idrok gomeostazni yoritadi, Xobbs bu muammoni birinchilardan bo'lib yoritib berdi psixologiya nuqtai nazaridang",
    //             person: "Begmamatov Shahzod",
    //             personImage: ASSETS.person,
    //         }
    //     ],
    //     locationToTransport: "Joylashuv, transportga kirish imkoniyati",
    //     infrastructure: [
    //         {
    //             id: 1,
    //             placeName: "Maktab",
    //             icon: '',
    //             security: "Devor bilan o'ralgan perimetr"
    //         }
    //     ],
    //     arrangements: "56",
    //     body: [
    //         {
    //             image: ASSETS.body1,
    //             rooms: "4",
    //             common: "79.35 m2",
    //             accommodation: "67.30 m2",
    //             kitchen: "7.96 m2",
    //             roomsArea: "12.7 / 10.98 / 11.45 m2",
    //             bodySizeFrom: "Korpus 4.2, 3-xona, 171 493 R / m2 dan",
    //             bodySizeTo: "52,9 m2 dan 9 068 570 R gacha"
    //         }
    //     ],
    //     investment: [
    //         {
    //             text: "Shoshilishni maslahat beramiz",
    //             middlePrice: "O'rtacha narx 2% ga tushdi",
    //             flatMiddlePrice: "6.9 mln $",
    //             flatMiddlePriceDown: "134 940 $",
    //             squareMiddlePrice: "6.9 mln $",
    //             squareMiddlePriceDown: "134 940 $",
    //             soldFlatsfFrom: "4316 dan",
    //             soldFlatsf: "1884 ta",
    //         }
    //     ],
    //     accessLocationToTr: [
    //         {
    //             text: "'Sohil bog'i turar joy majmuasi paxra daryosi sohilida, Pavlovskoye qishlog'i va yam qishlog'i yonida, MKADDAN 9 km uzoqlikda qurilgan.",
    //         },
    //         {
    //             text: "Yaqin atrofda Kashir shosesi va M-4 trassasi o'tadi, u orqali Moskva markaziga atigi 40 daqiqada borish mumkin."
    //         },
    //         {
    //             text: "O'n daqiqalik piyoda temir yo'l stantsiyasi joylashgan Leninskaya, undan 40 daqiqada Paveletskiy vokzaliga poezdda borishingiz mumkin. 2024 yilda ushbu stantsiya McD- 5 tarkibiga kiradi.Jamoat transportida eng yaqin Domodedovskaya metro stantsiyasiga borish uchun yarim soat vaqt ketadi."
    //         }
    //     ],
    //     aboutProducer: {
    //         finished: "24 LCD - dagi 211 ta uy",
    //         construction: "20 LCD - da 140 ta uy",
    //         companyAge: "Bozorda 13 yil",
    //         companyText: `Bozorning har bir sohasi, bugungi qarashlar doirasida, maqsadli trafikni ko'p qirrali ravishda tezlashtiradi. Biznes-reja
    //     muvozanatli. Taniqli marketing klassiklaridan biri F. Kotler buni quyidagicha ta'riflaydi: qayta aloqa kuchaytiradi
    //         oldingi kampaniyalar tajribasidan foydalangan holda reklama tartibi. Mediaves, yuqorida aytib o'tilganlardan ko'rinib turibdiki, quyidagilarni jamlaydi`,
    //     },
    //     documents: [
    //         {
    //             fileName: "3 deklaratsiyalar",
    //             file: "",
    //             fileDate: "27.07.2021 (5.1 va 5.2-binolar)",
    //         },
    //         {
    //             fileName: "3 deklaratsiyalar",
    //             file: "",
    //             fileDate: "27.07.2021 (5.1 va 5.2-binolar)",
    //         },
    //         {
    //             fileName: "3 deklaratsiyalar",
    //             file: "",
    //             fileDate: "27.07.2021 (5.1 va 5.2-binolar)",
    //         }
    //     ],
    //     placeCommentName: "Coastal Park",
    //     placeCommentCount: "5",
    //     placeCommentRatingCount: "4.5",
    //     placeComments: [
    //         {
    //             id: 1,
    //             personName: "Darya Rayevskiy",
    //             personImage: ASSETS.person,
    //             likeCount: 5,
    //             disLikeCount: 5,
    //             date: "20 yanvar",
    //             comment: "Majmua Daryo bo'yida qurilmoqda va bu juda katta afzallik. Piyoda siz o'rmon bog'iga borishingiz mumkin va bu erda mulk yaqin. Avtomobilsiz markazga borish qiyin bo'lgan yagona narsa.",
    //             positiveComment: "Tush tezlashayotgan stressni tanlaydi. O'rnatish impulsni birlashtiradi. Ta'lim ko'p qirrali kontrastni birlashtiradi.",
    //             negativeComment: "Yo’q",

    //         }
    //     ]
    // },
    // {
    //     id: 2,
    //     name: "Aist qarorgohi",
    //     images: [
    //         {
    //             id: 1,
    //             image: ASSETS.pr1
    //         },
    //         {
    //             id: 2,
    //             image: ASSETS.pr2
    //         },
    //         {
    //             id: 3,
    //             image: ASSETS.pr3
    //         },
    //         {
    //             id: 4,
    //             image: ASSETS.pr4
    //         },
    //     ],
    //     company: "Murad building",
    //     price: "35 000 $ dan",
    //     homeCount: "717 xonadon",
    //     process: "1-chorak 2023",
    //     near: "Karzinka.uz",
    //     nearTime: "20 daqiqa",
    //     studios: "48,4",
    //     twoRooms: "33,9",
    //     fourRooms: "62,7",
    //     oneRoom: "23,4",
    //     threeRooms: "47,2",
    //     fiveRooms: "0",
    //     contact: "+998 ( 99 ) 310 37 63",
    //     symbolDotIcon: <CarIcon />,
    //     processMedia: [
    //         {
    //             id: 1,
    //             image: ASSETS.pr1,
    //             video: ""
    //         }
    //     ],
    //     flatPlaces: "21.6 - 79.4 m2",
    //     finishTime: "2023 - 2025",
    //     buildings: "16 ta bino",
    //     ceilings: "2.6 m - 2.7 m",
    //     homeType: "Panel, monolit g'isht, g'isht, monolit",
    //     class: "Iqtisodiyot",
    //     floorNumbers: "10 dan 18 gacha",
    //     finishVariants: "Mebel bilan tugatish",
    //     producerTeam: "'Domda' Guruhi",
    //     deliveryInOneRooms: [
    //         {
    //             id: 1,
    //             date: "2023-yil II-B da yetkazish",
    //             oneRoom: "1-XONALI",
    //             oneRoomSize: "21.6 M2 DAN",
    //             oneRoomPrice: "6.3 - 8.7 MLN $ DAN",
    //             offerCount: "25 TA TAKLIFLAR",
    //             data: [
    //                 {
    //                     id: 1,
    //                     image: ASSETS.pr1,
    //                     price: "35 000 $",
    //                     size: "21.6  m2 dan",
    //                     info: "1-x xonali kvartira, 34.2  m2 , 4/9 qavat",
    //                     finishType: "Tugallandi"
    //                 }
    //             ]
    //         }
    //     ],
    //     deliveryInTwoRooms: [
    //         {
    //             id: 1,
    //             date: "2023-yil II-B da yetkazish",
    //             twoRooms: "1-XONALI",
    //             twoRoomSize: "21.6 M2 DAN",
    //             twoRoomPrice: "6.3 - 8.7 MLN $ DAN",
    //             offerCount: "25 TA TAKLIFLAR",
    //             data: [
    //                 {
    //                     id: 1,
    //                     image: ASSETS.pr1,
    //                     price: "35 000 $",
    //                     size: "21.6  m2 dan",
    //                     info: "1-x xonali kvartira, 34.2  m2 , 4/9 qavat",
    //                     finishType: "Tugallandi"
    //                 }
    //             ]
    //         }
    //     ],
    //     deliveryInThreeRooms: [
    //         {
    //             id: 1,
    //             date: "2023-yil II-B da yetkazish",
    //             threeRooms: "1-XONALI",
    //             threeRoomSize: "21.6 M2 DAN",
    //             threeRoomPrice: "6.3 - 8.7 MLN $ DAN",
    //             offerCount: "25 TA TAKLIFLAR",
    //             data: [
    //                 {
    //                     id: 1,
    //                     image: ASSETS.pr1,
    //                     price: "35 000 $",
    //                     size: "21.6  m2 dan",
    //                     info: "1-x xonali kvartira, 34.2  m2 , 4/9 qavat",
    //                     finishType: "Tugallandi"
    //                 }
    //             ]
    //         }
    //     ],
    //     deliveryInFourRooms: [
    //         {
    //             id: 3,
    //             date: "2023-yil II-B da yetkazish",
    //             fourRooms: "1-XONALI",
    //             fourRoomSize: "21.6 M2 DAN",
    //             fourRoomPrice: "6.3 - 8.7 MLN $ DAN",
    //             offerCount: "25 TA TAKLIFLAR",
    //             data: [
    //                 {
    //                     id: 1,
    //                     image: ASSETS.pr1,
    //                     price: "35 000 $",
    //                     size: "21.6  m2 dan",
    //                     info: "1-x xonali kvartira, 34.2  m2 , 4/9 qavat",
    //                     finishType: "Tugallandi"
    //                 },
    //                 {
    //                     id: 2,
    //                     image: ASSETS.pr1,
    //                     price: "35 000 $",
    //                     size: "21.6  m2 dan",
    //                     info: "1-x xonali kvartira, 34.2  m2 , 4/9 qavat",
    //                     finishType: "Tugallandi"
    //                 }
    //             ]
    //         }
    //     ],
    //     minExpense: "Minimal xarajat, ming $",
    //     location: "Toshkent sh, Yangi hayot t, O’zar ko’chasi 72 uy 47",
    //     howManyBuilding: "56",
    //     nearGoingTime: [
    //         {
    //             name: "Qizil Baltiya",
    //             time: "5 min",
    //             type: "",
    //         }
    //     ],
    //     bestUsefulComment: [
    //         {
    //             name: "",
    //             coment: "Idrok gomeostazni yoritadi, Xobbs bu muammoni birinchilardan bo'lib yoritib berdi psixologiya nuqtai nazaridang",
    //             person: "Begmamatov Shahzod",
    //             personImage: ASSETS.person,
    //         }
    //     ],
    //     locationToTransport: "Joylashuv, transportga kirish imkoniyati",
    //     infrastructure: [
    //         {
    //             id: 1,
    //             placeName: "Maktab",
    //             icon: '',
    //             security: "Devor bilan o'ralgan perimetr"
    //         }
    //     ],
    //     arrangements: "56",
    //     body: [
    //         {
    //             image: ASSETS.body1,
    //             rooms: "4",
    //             common: "79.35 m2",
    //             accommodation: "67.30 m2",
    //             kitchen: "7.96 m2",
    //             roomsArea: "12.7 / 10.98 / 11.45 m2",
    //             bodySizeFrom: "Korpus 4.2, 3-xona, 171 493 R / m2 dan",
    //             bodySizeTo: "52,9 m2 dan 9 068 570 R gacha"
    //         }
    //     ],
    //     investment: [
    //         {
    //             text: "Shoshilishni maslahat beramiz",
    //             middlePrice: "O'rtacha narx 2% ga tushdi",
    //             flatMiddlePrice: "6.9 mln $",
    //             flatMiddlePriceDown: "134 940 $",
    //             squareMiddlePrice: "6.9 mln $",
    //             squareMiddlePriceDown: "134 940 $",
    //             soldFlatsfFrom: "4316 dan",
    //             soldFlatsf: "1884 ta",
    //         }
    //     ],
    //     accessLocationToTr: [
    //         {
    //             text: "'Sohil bog'i turar joy majmuasi paxra daryosi sohilida, Pavlovskoye qishlog'i va yam qishlog'i yonida, MKADDAN 9 km uzoqlikda qurilgan.",
    //         },
    //         {
    //             text: "Yaqin atrofda Kashir shosesi va M-4 trassasi o'tadi, u orqali Moskva markaziga atigi 40 daqiqada borish mumkin."
    //         },
    //         {
    //             text: "O'n daqiqalik piyoda temir yo'l stantsiyasi joylashgan Leninskaya, undan 40 daqiqada Paveletskiy vokzaliga poezdda borishingiz mumkin. 2024 yilda ushbu stantsiya McD- 5 tarkibiga kiradi.Jamoat transportida eng yaqin Domodedovskaya metro stantsiyasiga borish uchun yarim soat vaqt ketadi."
    //         }
    //     ],
    //     aboutProducer: {
    //         finished: "24 LCD - dagi 211 ta uy",
    //         construction: "20 LCD - da 140 ta uy",
    //         companyAge: "Bozorda 13 yil",
    //         companyText: `Bozorning har bir sohasi, bugungi qarashlar doirasida, maqsadli trafikni ko'p qirrali ravishda tezlashtiradi. Biznes-reja
    //     muvozanatli. Taniqli marketing klassiklaridan biri F. Kotler buni quyidagicha ta'riflaydi: qayta aloqa kuchaytiradi
    //         oldingi kampaniyalar tajribasidan foydalangan holda reklama tartibi. Mediaves, yuqorida aytib o'tilganlardan ko'rinib turibdiki, quyidagilarni jamlaydi`,
    //     },
    //     documents: [
    //         {
    //             fileName: "3 deklaratsiyalar",
    //             file: "",
    //             fileDate: "27.07.2021 (5.1 va 5.2-binolar)",
    //         },
    //         {
    //             fileName: "3 deklaratsiyalar",
    //             file: "",
    //             fileDate: "27.07.2021 (5.1 va 5.2-binolar)",
    //         },
    //         {
    //             fileName: "3 deklaratsiyalar",
    //             file: "",
    //             fileDate: "27.07.2021 (5.1 va 5.2-binolar)",
    //         }
    //     ],
    //     placeCommentName: "Coastal Park",
    //     placeCommentCount: "5",
    //     placeCommentRatingCount: "4.5",
    //     placeComments: [
    //         {
    //             id: 1,
    //             personName: "Darya Rayevskiy",
    //             personImage: ASSETS.person,
    //             likeCount: 5,
    //             disLikeCount: 5,
    //             date: "20 yanvar",
    //             comment: "Majmua Daryo bo'yida qurilmoqda va bu juda katta afzallik. Piyoda siz o'rmon bog'iga borishingiz mumkin va bu erda mulk yaqin. Avtomobilsiz markazga borish qiyin bo'lgan yagona narsa.",
    //             positiveComment: "Tush tezlashayotgan stressni tanlaydi. O'rnatish impulsni birlashtiradi. Ta'lim ko'p qirrali kontrastni birlashtiradi.",
    //             negativeComment: "Yo’q",

    //         }
    //     ]
    // },
    // {
    //     id: 1,
    //     name: "Aist qarorgohi",
    //     images: [
    //         {
    //             id: 1,
    //             image: ASSETS.pr1
    //         },
    //         {
    //             id: 2,
    //             image: ASSETS.pr2
    //         },
    //         {
    //             id: 3,
    //             image: ASSETS.pr3
    //         },
    //         {
    //             id: 4,
    //             image: ASSETS.pr4
    //         },
    //     ],
    //     company: "Murad building",
    //     price: "35 000 $ dan",
    //     homeCount: "717 xonadon",
    //     process: "1-chorak 2023",
    //     near: "Karzinka.uz",
    //     nearTime: "20 daqiqa",
    //     studios: "48,4",
    //     twoRooms: "33,9",
    //     fourRooms: "62,7",
    //     oneRoom: "23,4",
    //     threeRooms: "47,2",
    //     fiveRooms: "0",
    //     contact: "+998 ( 99 ) 310 37 63",
    //     symbolDotIcon: <CarIcon />,
    //     processMedia: [
    //         {
    //             id: 1,
    //             image: ASSETS.pr1,
    //             video: ""
    //         }
    //     ],
    //     flatPlaces: "21.6 - 79.4 m2",
    //     finishTime: "2023 - 2025",
    //     buildings: "16 ta bino",
    //     ceilings: "2.6 m - 2.7 m",
    //     homeType: "Panel, monolit g'isht, g'isht, monolit",
    //     class: "Iqtisodiyot",
    //     floorNumbers: "10 dan 18 gacha",
    //     finishVariants: "Mebel bilan tugatish",
    //     producerTeam: "'Domda' Guruhi",
    //     deliveryInOneRooms: [
    //         {
    //             id: 1,
    //             date: "2023-yil II-B da yetkazish",
    //             oneRoom: "1-XONALI",
    //             oneRoomSize: "21.6 M2 DAN",
    //             oneRoomPrice: "6.3 - 8.7 MLN $ DAN",
    //             offerCount: "25 TA TAKLIFLAR",
    //             data: [
    //                 {
    //                     id: 1,
    //                     image: ASSETS.pr1,
    //                     price: "35 000 $",
    //                     size: "21.6  m2 dan",
    //                     info: "1-x xonali kvartira, 34.2  m2 , 4/9 qavat",
    //                     finishType: "Tugallandi"
    //                 }
    //             ]
    //         }
    //     ],
    //     deliveryInTwoRooms: [
    //         {
    //             id: 1,
    //             date: "2023-yil II-B da yetkazish",
    //             twoRooms: "1-XONALI",
    //             twoRoomSize: "21.6 M2 DAN",
    //             twoRoomPrice: "6.3 - 8.7 MLN $ DAN",
    //             offerCount: "25 TA TAKLIFLAR",
    //             data: [
    //                 {
    //                     id: 1,
    //                     image: ASSETS.pr1,
    //                     price: "35 000 $",
    //                     size: "21.6  m2 dan",
    //                     info: "1-x xonali kvartira, 34.2  m2 , 4/9 qavat",
    //                     finishType: "Tugallandi"
    //                 }
    //             ]
    //         }
    //     ],
    //     deliveryInThreeRooms: [
    //         {
    //             id: 1,
    //             date: "2023-yil II-B da yetkazish",
    //             threeRooms: "1-XONALI",
    //             threeRoomSize: "21.6 M2 DAN",
    //             threeRoomPrice: "6.3 - 8.7 MLN $ DAN",
    //             offerCount: "25 TA TAKLIFLAR",
    //             data: [
    //                 {
    //                     id: 1,
    //                     image: ASSETS.pr1,
    //                     price: "35 000 $",
    //                     size: "21.6  m2 dan",
    //                     info: "1-x xonali kvartira, 34.2  m2 , 4/9 qavat",
    //                     finishType: "Tugallandi"
    //                 }
    //             ]
    //         }
    //     ],
    //     deliveryInFourRooms: [
    //         {
    //             id: 1,
    //             date: "2023-yil II-B da yetkazish",
    //             fourRooms: "1-XONALI",
    //             fourRoomSize: "21.6 M2 DAN",
    //             fourRoomPrice: "6.3 - 8.7 MLN $ DAN",
    //             offerCount: "25 TA TAKLIFLAR",
    //             data: [
    //                 {
    //                     id: 1,
    //                     image: ASSETS.pr1,
    //                     price: "35 000 $",
    //                     size: "21.6  m2 dan",
    //                     info: "1-x xonali kvartira, 34.2  m2 , 4/9 qavat",
    //                     finishType: "Tugallandi"
    //                 },
    //                 {
    //                     id: 2,
    //                     image: ASSETS.pr1,
    //                     price: "35 000 $",
    //                     size: "21.6  m2 dan",
    //                     info: "1-x xonali kvartira, 34.2  m2 , 4/9 qavat",
    //                     finishType: "Tugallandi"
    //                 }
    //             ]
    //         }
    //     ],
    //     minExpense: "Minimal xarajat, ming $",
    //     location: "Toshkent sh, Yangi hayot t, O’zar ko’chasi 72 uy 47",
    //     howManyBuilding: "56",
    //     nearGoingTime: [
    //         {
    //             name: "Qizil Baltiya",
    //             time: "5 min",
    //             type: "",
    //         }
    //     ],
    //     bestUsefulComment: [
    //         {
    //             name: "",
    //             coment: "Idrok gomeostazni yoritadi, Xobbs bu muammoni birinchilardan bo'lib yoritib berdi psixologiya nuqtai nazaridang",
    //             person: "Begmamatov Shahzod",
    //             personImage: ASSETS.person,
    //         }
    //     ],
    //     locationToTransport: "Joylashuv, transportga kirish imkoniyati",
    //     infrastructure: [
    //         {
    //             id: 1,
    //             placeName: "Maktab",
    //             icon: '',
    //             security: "Devor bilan o'ralgan perimetr"
    //         }
    //     ],
    //     arrangements: "56",
    //     body: [
    //         {
    //             image: ASSETS.body1,
    //             rooms: "4",
    //             common: "79.35 m2",
    //             accommodation: "67.30 m2",
    //             kitchen: "7.96 m2",
    //             roomsArea: "12.7 / 10.98 / 11.45 m2",
    //             bodySizeFrom: "Korpus 4.2, 3-xona, 171 493 R / m2 dan",
    //             bodySizeTo: "52,9 m2 dan 9 068 570 R gacha"
    //         }
    //     ],
    //     investment: [
    //         {
    //             text: "Shoshilishni maslahat beramiz",
    //             middlePrice: "O'rtacha narx 2% ga tushdi",
    //             flatMiddlePrice: "6.9 mln $",
    //             flatMiddlePriceDown: "134 940 $",
    //             squareMiddlePrice: "6.9 mln $",
    //             squareMiddlePriceDown: "134 940 $",
    //             soldFlatsfFrom: "4316 dan",
    //             soldFlatsf: "1884 ta",
    //         }
    //     ],
    //     accessLocationToTr: [
    //         {
    //             text: "'Sohil bog'i turar joy majmuasi paxra daryosi sohilida, Pavlovskoye qishlog'i va yam qishlog'i yonida, MKADDAN 9 km uzoqlikda qurilgan.",
    //         },
    //         {
    //             text: "Yaqin atrofda Kashir shosesi va M-4 trassasi o'tadi, u orqali Moskva markaziga atigi 40 daqiqada borish mumkin."
    //         },
    //         {
    //             text: "O'n daqiqalik piyoda temir yo'l stantsiyasi joylashgan Leninskaya, undan 40 daqiqada Paveletskiy vokzaliga poezdda borishingiz mumkin. 2024 yilda ushbu stantsiya McD- 5 tarkibiga kiradi.Jamoat transportida eng yaqin Domodedovskaya metro stantsiyasiga borish uchun yarim soat vaqt ketadi."
    //         }
    //     ],
    //     aboutProducer: {
    //         finished: "24 LCD - dagi 211 ta uy",
    //         construction: "20 LCD - da 140 ta uy",
    //         companyAge: "Bozorda 13 yil",
    //         companyText: `Bozorning har bir sohasi, bugungi qarashlar doirasida, maqsadli trafikni ko'p qirrali ravishda tezlashtiradi. Biznes-reja
    //     muvozanatli. Taniqli marketing klassiklaridan biri F. Kotler buni quyidagicha ta'riflaydi: qayta aloqa kuchaytiradi
    //         oldingi kampaniyalar tajribasidan foydalangan holda reklama tartibi. Mediaves, yuqorida aytib o'tilganlardan ko'rinib turibdiki, quyidagilarni jamlaydi`,
    //     },
    //     documents: [
    //         {
    //             fileName: "3 deklaratsiyalar",
    //             file: "",
    //             fileDate: "27.07.2021 (5.1 va 5.2-binolar)",
    //         },
    //         {
    //             fileName: "3 deklaratsiyalar",
    //             file: "",
    //             fileDate: "27.07.2021 (5.1 va 5.2-binolar)",
    //         },
    //         {
    //             fileName: "3 deklaratsiyalar",
    //             file: "",
    //             fileDate: "27.07.2021 (5.1 va 5.2-binolar)",
    //         }
    //     ],
    //     placeCommentName: "Coastal Park",
    //     placeCommentCount: "5",
    //     placeCommentRatingCount: "4.5",
    //     placeComments: [
    //         {
    //             id: 1,
    //             personName: "Darya Rayevskiy",
    //             personImage: ASSETS.person,
    //             likeCount: 5,
    //             disLikeCount: 5,
    //             date: "20 yanvar",
    //             comment: "Majmua Daryo bo'yida qurilmoqda va bu juda katta afzallik. Piyoda siz o'rmon bog'iga borishingiz mumkin va bu erda mulk yaqin. Avtomobilsiz markazga borish qiyin bo'lgan yagona narsa.",
    //             positiveComment: "Tush tezlashayotgan stressni tanlaydi. O'rnatish impulsni birlashtiradi. Ta'lim ko'p qirrali kontrastni birlashtiradi.",
    //             negativeComment: "Yo’q",

    //         }
    //     ]
    // },
];

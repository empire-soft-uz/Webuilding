import { makeAutoObservable, runInAction, toJS } from "mobx";
import {
    ProductBodyData,
    ProductBodyType,
    ProductDataType,
} from "../../constants/productData";
const initialState = {
    id: 0,
    name: "",
    images: [{ id: 0, image: "" }],
    company: "",
    locationName: "",
    houseNumber: 0 || "",
    price: "" || 0,
    homeCount: 0 || "",
    process: "",
    near: "",
    nearTime: "",
    studios: "",
    twoRooms: "",
    fourRooms: "",
    oneRoom: "",
    threeRooms: "",
    fiveRooms: "",
    contact: "",
    symbolDotIcon: "",
    processMedia: [{ id: 0, image: "", video: "" }],
    flatPlaces: "" || 0,
    finishTime: 0 || "",
    buildings: "" || 0,
    ceilings: "" || 0,
    homeType: "",
    class: "",
    floor0s: "",
    finishVariants: "",
    producerTeam: "",
    producerBuildingCount: "",
    deliverAt: "",
    deliveryInRooms: [
        {
            id: 0,
            name: "",
            area: "",
            price: "",
            count: "",
            data: [
                {
                    id: 0,
                    img: "",
                    text: "",
                    price: "",
                    area: "",
                    finish: "",
                },
            ],
        },
    ],
    // deliveryInTwoRooms: [{
    //     id: 0,
    //     date: "" || 0,
    //     twoRooms: "",
    //     twoRoomSize: "" || 0,
    //     twoRoomPrice: "" || 0,
    //     offerCount: "" || 0,
    //     data: [{
    //         id: 0,
    //         image: "",
    //         info: "",
    //         price: "",
    //         size: "" || 0,
    //         finishType: "",
    //     }],
    // }],
    // deliveryInThreeRooms: [{
    //     id: 0,
    //     date: "" || 0,
    //     threeRooms: "",
    //     threeRoomSize: "" || 0,
    //     threeRoomPrice: "" || 0,
    //     offerCount: "" || 0,
    //     data: [{
    //         id: 0,
    //         image: "",
    //         info: "",
    //         price: "",
    //         size: "" || 0,
    //         finishType: "",
    //     }],
    // }],
    // deliveryInFourRooms: [{
    //     id: 0,
    //     date: "" || 0,
    //     fourRooms: "",
    //     fourRoomSize: "" || 0,
    //     fourRoomPrice: "" || 0,
    //     offerCount: "" || 0,
    //     data: [{
    //         id: 0,
    //         image: "",
    //         info: "",
    //         price: "",
    //         size: "" || 0,
    //         finishType: "",
    //     }],
    // }],
    minExpense: "" || 0,
    location: "",
    howManyBuilding: "",
    nearGoingTime: [
        {
            name: "",
            time: 0 || "",
            type: "",
        },
    ],
    bestUsefulComment: {
        name: "",
        coment: "",
        person: "",
        personImage: "",
    },
    locationToTransport: "",
    infrastructure: [
        {
            id: 0,
            placeName: "",
            icon: "",
            security: "",
        },
    ],
    nearBuildings: [
        {
            id: 0,
            yandexUrl1: "",
            yandexUrl2: "",
            title: "",
            name: "",
            image: "",
            type: "",
            age: "",
            goType: "",
            goTime: "",
            price: "",
            size: "",
        },
    ],
    arrangements: 0 || "",
    body: [
        {
            id: 1,
            key: "",
            image: "",
            rooms: "",
            building: "",
            floor: "",
            common: "",
            accommodation: "",
            kitchen: "",
            roomsArea: "",
            bodySizeFrom: "",
            bodySizeTo: "",
        },
    ],
    investment: {
        text: "",
        middlePrice: "",
        flatMiddlePrice: "" || 0,
        flatMiddlePriceDown: "" || 0,
        squareMiddlePrice: "" || 0,
        squareMiddlePriceDown: "" || 0,
        soldFlatsfFrom: "" || 0,
        soldFlatsf: "" || 0,
    },
    accessLocationToTr: [
        {
            text: "",
        },
    ],
    aboutProducer: {
        process: "",
        finished: "" || 0,
        construction: "" || 0,
        companyAge: 0 || "",
        companyText: "",
    },
    documents: [
        {
            id: 0,
            title: "",
            files: [
                {
                    id: 0,
                    title: "",
                    date: "",
                },
            ],
        },
    ],
    placeCommentName: "",
    placeCommentCount: 0 || "",
    placeCommentRatingCount: 0 || "",
    placeComments: [
        {
            id: 0,
            personName: "",
            personImage: "",
            likeCount: 0 || "",
            disLikeCount: 0 || "",
            date: "" || 0,
            comment: "",
            positiveComment: "",
            negativeComment: "",
        },
    ],
};

export type nearBuildingsType = {
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

export const nearBuildingsInitial = [
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
];

interface bodyType {
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
}

export type roomCountType = {
    roomCount: string;
};

export default class OnePruduct {
    constructor() {
        makeAutoObservable(this);
    }

    roomCount = [];

    oneProduct: ProductDataType = initialState as never;

    selectBody: bodyType[] = this.oneProduct.body;

    nearbuildings: nearBuildingsType = this.oneProduct.nearBuildings.filter(
        (e) => e.type === "school"
    );

    setOneProduct = (item: ProductDataType) => {
        this.oneProduct = item;
        localStorage.setItem("productItem", JSON.stringify(item));
    };

    getProduct = async () => {
        this.oneProduct = JSON.parse(
            localStorage.getItem("productItem") || "{}"
        );
        this.selectBody = this.oneProduct.body;
    };

    setSelectedBody = async (key: string) => {
        if (key === "all") {
            this.selectBody = this.oneProduct.body;
            return;
        }
        this.selectBody = this.oneProduct.body.filter((e) => e.key === key);
    };

    setRoomCount = (count: string) => {
        if (!count) {
            this.selectBody = this.oneProduct.body;
            return;
        }
        if (this.roomCount.some((e) => e === count)) {
            this.roomCount = this.roomCount.filter((e) => e !== count);
        } else {
            this.roomCount = [...this.roomCount, count as never];
        }
        if (count && this.roomCount.length > 0) {
            this.selectBody = this.oneProduct.body.filter((e) =>
                this.roomCount?.includes(e.rooms as never)
            );
        } else {
            this.selectBody = this.oneProduct.body;
        }
    };

    infrastructureFilter = (type: string) => {
        this.nearbuildings = this.oneProduct.nearBuildings.filter(
            (e) => e.type === type
        ) as never;
    };
}

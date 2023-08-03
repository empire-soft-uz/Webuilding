import { makeAutoObservable, runInAction } from 'mobx';
import { ProductDataType } from '../../constants/productData';
const initialState = {
    id: 0,
    name: "",
    images: [
        {id: 0,
        image: "",}
    ],
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
    processMedia: [
        {id: 0,
        image: "",
        video: ""}
    ],
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
    deliveryInRooms: [{
        id: 0,
        name: "",
        area: "",
        price: "",
        count: "",
        data: [{
            id: 0,
            img: "",
            text: "",
            price: "",
            area: "",
            finish: ""
        }],
    }],
    deliveryInTwoRooms: [{
        id: 0,
        date: "" || 0,
        twoRooms: "",
        twoRoomSize: "" || 0,
        twoRoomPrice: "" || 0,
        offerCount: "" || 0,
        data: [{
            id: 0,
            image: "",
            info: "",
            price: "",
            size: "" || 0,
            finishType: "",
        }],
    }],
    deliveryInThreeRooms: [{
        id: 0,
        date: "" || 0,
        threeRooms: "",
        threeRoomSize: "" || 0,
        threeRoomPrice: "" || 0,
        offerCount: "" || 0,
        data: [{
            id: 0,
            image: "",
            info: "",
            price: "",
            size: "" || 0,
            finishType: "",
        }],
    }],
    deliveryInFourRooms: [{
        id: 0,
        date: "" || 0,
        fourRooms: "",
        fourRoomSize: "" || 0,
        fourRoomPrice: "" || 0,
        offerCount: "" || 0,
        data: [{
            id: 0,
            image: "",
            info: "",
            price: "",
            size: "" || 0,
            finishType: "",
        }],
    }],
    minExpense: "" || 0,
    location: "",
    howManyBuilding: "",
    nearGoingTime: [{
        name: "",
        time: 0 || "",
        type: "",
    }],
    bestUsefulComment: {
        name: "",
        coment: "",
        person: "",
        personImage: "",
    },
    locationToTransport: "",
    infrastructure: [{
        id: 0,
        placeName: "",
        icon: "",
        security: ""
    }],
    arrangements: 0 || "",
    body: [{
        image: "",
        rooms: "" || 0,
        common: "" || 0,
        accommodation: "" || 0,
        kitchen: "" || 0,
        roomsArea: 0 || "",
        bodySizeFrom: "" || 0,
        bodySizeTo: "" || 0
    }],
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
    accessLocationToTr: [{
        text: "",
    }],
    aboutProducer: {
        finished: "" || 0,
        construction: "" || 0,
        companyAge: 0 || "",
        companyText: ""
    },
    documents: [
        {
        id: 0,
        title: "",
            files: [{
                id: 0,
                title: "",
                date: ""
        }],
    }
    ],
    placeCommentName: "",
    placeCommentCount: 0 || "",
    placeCommentRatingCount: 0 || "",
    placeComments: [{
        id: 0,
        personName: "",
        personImage: "",
        likeCount: 0 || "",
        disLikeCount: 0 || "",
        date: "" || 0,
        comment: "",
        positiveComment: "",
        negativeComment: "",

    }],
}

export default class OnePruduct{

    constructor() {
        makeAutoObservable(this)
    }

    oneProduct: ProductDataType = initialState as never

    setOneProduct = (item: ProductDataType) => {
        this.oneProduct = item
        localStorage.setItem("productItem", JSON.stringify(item))
    }
    getProduct = async () => {
        this.oneProduct = JSON.parse(localStorage.getItem('productItem') || '{}')
    }
}
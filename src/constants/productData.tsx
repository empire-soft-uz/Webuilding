import { CarIcon, PersonIcon } from "../assets/icons";
import { ASSETS } from "./requireAssets";

export type ProductDataType = {
    id: number,
    name: string,
    images: {
        id: number,
        image: string;
    }[],
    company: string;
    price: string | number,
    homeCount: number | string,
    process: string,
    near: string,
    nearTime: string,
    studios: string,
    twoRooms: string,
    fourRooms: string,
    oneRoom: string,
    threeRooms: string,
    fiveRooms: string,
    contact: string,
    symbolDotIcon: any,
    processMedia: {
        id: number,
        image: string,
        video: any
    }[],
    flatPlaces: string | number,
    finishTime: number | string,
    buildings: string | number,
    ceilings: string | number,
    homeType: string,
    class: string,
    floorNumbers: string,
    finishVariants: string,
    producerTeam: string;
    deliveryInOneRooms: {
        id: number,
        date: number | string,
        oneRoom: string,
        oneRoomSize: string | number,
        oneRoomPrice: string | number,
        offerCount: string | number,
        data: {
            id: number,
            image: string,
            info: string,
            price: string,
            size: string | number,
            finishType: string,
        }[],
    }[],
    deliveryInTwoRooms: {
        id: number,
        date: string | number,
        twoRooms: string,
        twoRoomSize: string | number,
        twoRoomPrice: string | number,
        offerCount: string | number,
        data: {
            id: number,
            image: string,
            info: string,
            price: string,
            size: string | number,
            finishType: string,
        }[],
    }[],
    deliveryInThreeRooms: {
        id: number,
        date: string | number,
        threeRooms: string,
        threeRoomSize: string | number,
        threeRoomPrice: string | number,
        offerCount: string | number,
        data: {
            id: number,
            image: string,
            info: string,
            price: string,
            size: string | number,
            finishType: string,
        }[],
    }[],
    deliveryInFourRooms?: {
        id: number,
        date: string | number,
        fourRooms: string,
        fourRoomSize: string | number,
        fourRoomPrice: string | number,
        offerCount: string | number,
        data: {
            id: number,
            image: string,
            info: string,
            price: string,
            size: string | number,
            finishType: string,
        }[],
    }[],
    minExpense: string | number,
    location: string,
    howManyBuilding: string,
    nearGoingTime: {
        name: string,
        time: number | string,
        type: any,
    }[],
    bestUsefulComment: {
        name: string,
        coment: string,
        person: string,
        personImage: any,
    }[],
    locationToTransport: string,
    infrastructure: {
        id: number,
        placeName: string,
        icon?: any,
        security?: string
    }[],
    arrangements: number | string;
    body: {
        image: string,
        rooms: string | number,
        common: string | number,
        accommodation: string | number,
        kitchen: string | number,
        roomsArea: number | string,
        bodySizeFrom: string | number,
        bodySizeTo: string | number
    }[],
    investment: {
        text: string,
        middlePrice: string,
        flatMiddlePrice: string | number,
        flatMiddlePriceDown: string | number,
        squareMiddlePrice: string | number,
        squareMiddlePriceDown: string | number,
        soldFlatsfFrom: string | number,
        soldFlatsf: string | number,
    }[],
    accessLocationToTr: {
        text: string,
    }[],
    aboutProducer: {
        finished: string | number,
        construction: string | number,
        companyAge: number | string,
        companyText: string;
    },
    documents: {
        fileName: string,
        file: any,
        fileDate: string | number,
    }[],
    placeCommentName: string,
    placeCommentCount: number | string,
    placeCommentRatingCount: number | string,
    placeComments: {
        id: number,
        personName: string,
        personImage: any,
        likeCount: number | string,
        disLikeCount: number | string,
        date: string | number,
        comment: string;
        positiveComment: string,
        negativeComment: string,

    }[],
}

export const ProductData: ProductDataType[] = [
    {
        id: 1,
        name: "Aist qarorgohi",
        images: [
            {
                id: 1,
                image: ASSETS.pr1
            },
            {
                id: 2,
                image: ASSETS.pr2
            },
            {
                id: 3,
                image: ASSETS.pr3
            },
            {
                id: 4,
                image: ASSETS.pr4
            },
        ],
        company: "Murad building",
        price: "35 000 $ dan",
        homeCount: "717 xonadon",
        process: "1-chorak 2023",
        near: "Karzinka.uz",
        nearTime: "20 daqiqa",
        studios: "48,4",
        twoRooms: "33,9",
        fourRooms: "62,7",
        oneRoom: "23,4",
        threeRooms: "47,2",
        fiveRooms: "0",
        contact: "+998 ( 99 ) 310 37 63",
        symbolDotIcon: <CarIcon />,
        processMedia: [
            {
                id: 1,
                image: ASSETS.pr1,
                video: ""
            }
        ],
        flatPlaces: "21.6 - 79.4 m2",
        finishTime: "2023 - 2025",
        buildings: "16 ta bino",
        ceilings: "2.6 m - 2.7 m",
        homeType: "Panel, monolit g'isht, g'isht, monolit",
        class: "Iqtisodiyot",
        floorNumbers: "10 dan 18 gacha",
        finishVariants: "Mebel bilan tugatish",
        producerTeam: "'Domda' Guruhi",
        deliveryInOneRooms: [
            {
                id: 1,
                date: "2023-yil II-B da yetkazish",
                oneRoom: "1-XONALI",
                oneRoomSize: "21.6 M2 DAN",
                oneRoomPrice: "6.3 - 8.7 MLN $ DAN",
                offerCount: "25 TA TAKLIFLAR",
                data: [
                    {
                        id: 1,
                        image: ASSETS.pr1,
                        price: "35 000 $",
                        size: "21.6  m2 dan",
                        info: "1-x xonali kvartira, 34.2  m2 , 4/9 qavat",
                        finishType: "Tugallandi"
                    }
                ]
            }
        ],
        deliveryInTwoRooms: [
            {
                id: 1,
                date: "2023-yil II-B da yetkazish",
                twoRooms: "1-XONALI",
                twoRoomSize: "21.6 M2 DAN",
                twoRoomPrice: "6.3 - 8.7 MLN $ DAN",
                offerCount: "25 TA TAKLIFLAR",
                data: [
                    {
                        id: 1,
                        image: ASSETS.pr1,
                        price: "35 000 $",
                        size: "21.6  m2 dan",
                        info: "1-x xonali kvartira, 34.2  m2 , 4/9 qavat",
                        finishType: "Tugallandi"
                    }
                ]
            }
        ],
        deliveryInThreeRooms: [
            {
                id: 1,
                date: "2023-yil II-B da yetkazish",
                threeRooms: "1-XONALI",
                threeRoomSize: "21.6 M2 DAN",
                threeRoomPrice: "6.3 - 8.7 MLN $ DAN",
                offerCount: "25 TA TAKLIFLAR",
                data: [
                    {
                        id: 1,
                        image: ASSETS.pr1,
                        price: "35 000 $",
                        size: "21.6  m2 dan",
                        info: "1-x xonali kvartira, 34.2  m2 , 4/9 qavat",
                        finishType: "Tugallandi"
                    }
                ]
            }
        ],
        deliveryInFourRooms: [
            {
                id: 1,
                date: "2023-yil II-B da yetkazish",
                fourRooms: "1-XONALI",
                fourRoomSize: "21.6 M2 DAN",
                fourRoomPrice: "6.3 - 8.7 MLN $ DAN",
                offerCount: "25 TA TAKLIFLAR",
                data: [
                    {
                        id: 1,
                        image: ASSETS.pr1,
                        price: "35 000 $",
                        size: "21.6  m2 dan",
                        info: "1-x xonali kvartira, 34.2  m2 , 4/9 qavat",
                        finishType: "Tugallandi"
                    },
                    {
                        id: 2,
                        image: ASSETS.pr1,
                        price: "35 000 $",
                        size: "21.6  m2 dan",
                        info: "1-x xonali kvartira, 34.2  m2 , 4/9 qavat",
                        finishType: "Tugallandi"
                    }
                ]
            }
        ],
        minExpense: "Minimal xarajat, ming $",
        location: "Toshkent sh, Yangi hayot t, O’zar ko’chasi 72 uy 47",
        howManyBuilding: "56",
        nearGoingTime: [
            {
                name: "Qizil Baltiya",
                time: "5 min",
                type: "",
            }
        ],
        bestUsefulComment: [
            {
                name: "",
                coment: "Idrok gomeostazni yoritadi, Xobbs bu muammoni birinchilardan bo'lib yoritib berdi psixologiya nuqtai nazaridang",
                person: "Begmamatov Shahzod",
                personImage: ASSETS.person,
            }
        ],
        locationToTransport: "Joylashuv, transportga kirish imkoniyati",
        infrastructure: [
            {
                id: 1,
                placeName: "Maktab",
                icon: '',
                security: "Devor bilan o'ralgan perimetr"
            }
        ],
        arrangements: "56",
        body: [
            {
                image: ASSETS.body1,
                rooms: "4",
                common: "79.35 m2",
                accommodation: "67.30 m2",
                kitchen: "7.96 m2",
                roomsArea: "12.7 / 10.98 / 11.45 m2",
                bodySizeFrom: "Korpus 4.2, 3-xona, 171 493 R / m2 dan",
                bodySizeTo: "52,9 m2 dan 9 068 570 R gacha"
            }
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
            }
        ],
        accessLocationToTr: [
            {
                text: "'Sohil bog'i turar joy majmuasi paxra daryosi sohilida, Pavlovskoye qishlog'i va yam qishlog'i yonida, MKADDAN 9 km uzoqlikda qurilgan.",
            },
            {
                text: "Yaqin atrofda Kashir shosesi va M-4 trassasi o'tadi, u orqali Moskva markaziga atigi 40 daqiqada borish mumkin."
            },
            {
                text: "O'n daqiqalik piyoda temir yo'l stantsiyasi joylashgan Leninskaya, undan 40 daqiqada Paveletskiy vokzaliga poezdda borishingiz mumkin. 2024 yilda ushbu stantsiya McD- 5 tarkibiga kiradi.Jamoat transportida eng yaqin Domodedovskaya metro stantsiyasiga borish uchun yarim soat vaqt ketadi."
            }
        ],
        aboutProducer: {
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
            }
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
                comment: "Majmua Daryo bo'yida qurilmoqda va bu juda katta afzallik. Piyoda siz o'rmon bog'iga borishingiz mumkin va bu erda mulk yaqin. Avtomobilsiz markazga borish qiyin bo'lgan yagona narsa.",
                positiveComment: "Tush tezlashayotgan stressni tanlaydi. O'rnatish impulsni birlashtiradi. Ta'lim ko'p qirrali kontrastni birlashtiradi.",
                negativeComment: "Yo’q",

            }
        ]
    },
]
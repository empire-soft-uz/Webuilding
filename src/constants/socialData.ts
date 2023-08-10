import {
    InstaIcon,
    TelegramIcon,
    YoutubeIcon,
    LocationIcon,
} from "../assets/icons/index";
import { ASSETS } from "./requireAssets";

export type SocialDataType = {
    id: number;
    title: string;
    icon: any;
    image: string;
}[];
export const SocialDataInitial: SocialDataType = [
    {
        id: 0,
        title: "",
        icon: null,
        image: "",
    },
];

export const SocialData: SocialDataType = [
    {
        id: 1,
        title: "Instagram",
        icon: InstaIcon,
        image: "",
    },
    {
        id: 2,
        title: "Telegram",
        icon: TelegramIcon,
        image: "",
    },
    {
        id: 3,
        title: "Youtube",
        icon: YoutubeIcon,
        image: "",
    },
];

export const FooterFirstData = [
    {
        id: 1,
        title: "+998932300500",
        link: "",
    },
    {
        id: 2,
        title: "Мы позвоним вам?",
        link: "",
        isPress: true,
    },
    {
        id: 3,
        title: "Ташкент ООО 'Weebuilding'",
        link: "",
    },
    {
        id: 4,
        icon: ASSETS.LocationIcon,
        title: `100059, г.Ташкент,
                Яккасаройский район,
                Ул. Шота Руставели, д.58`,
        link: "",
    },
    {
        id: 5,
        title: "Всё новостройки в вашем городе.",
        link: "",
    },
];
export const FooterSecondData = [
    {
        id: 1,
        title: "О проекте",
        link: "/about-project",
    },
    {
        id: 2,
        title: "Сотрудничество",
        link: "/cooperation",
    },
    {
        id: 3,
        title: "Застройщики",
        link: "/developers",
    },
    {
        id: 4,
        title: "Гарантия безопасности сделки",
        link: "/guarantee",
    },
    {
        id: 5,
        title: "Вакансии",
        link: "/jobs",
    },
    {
        id: 6,
        title: "Реклама на сайте",
        link: "/advertising",
    },
    {
        id: 7,
        social: [
            {
                id: 1,
                icon: "/instagram.png",
                link: "instagram.com",
            },
            {
                id: 2,
                icon: "/telegram.png",
                link: "telegram.org",
            },
            {
                id: 3,
                icon: "/facebook.png",
                link: "facebook.com",
            },
            {
                id: 4,
                icon: "/whatsapp.png",
                link: "whatsapp.com",
            },
            {
                id: 5,
                icon: "/youtube.png",
                link: "youtube.com",
            },
        ],
    },
];
export const FooterThirdData = [
    {
        id: 1,
        title: "О компании 'Weebuilding'",
        link: "/about-us",
    },
    {
        id: 2,
        title: "Пресс Центр",
        link: "",
    },
    {
        id: 3,
        title: "Отзывы клиентов",
        link: "",
    },
    {
        id: 4,
        title: "Правовая информация",
        link: "/informations",
    },
    {
        id: 5,
        title: "Пользовательское соглашение",
        link: "/terms-of-use",
    },
    {
        id: 6,
        title: "Политика обработки данных",
        link: "",
    },
];

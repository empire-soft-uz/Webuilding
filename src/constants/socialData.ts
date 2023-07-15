import { InstaIcon, TelegramIcon, YoutubeIcon } from '../assets/icons/index';

export type SocialDataType = {
    id: number;
    title: string;
    icon: any;
    image: string;
}[]
export const SocialDataInitial: SocialDataType = [
    {
        id: 0,
        title: "",
        icon: null,
        image: "",
    }
]

export const SocialData: SocialDataType = [
    {
        id: 1,
        title: "Instagram",
        icon: InstaIcon,
        image: ""
    },
    {
        id: 2,
        title: "Telegram",
        icon: TelegramIcon,
        image: ""
    },
    {
        id: 3,
        title: "Youtube",
        icon: YoutubeIcon,
        image: ""
    }
]


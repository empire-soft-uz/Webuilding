import React from 'react'
import { InstaIcon } from '../../assets/icons'
import { ASSETS } from '../../constants/requireAssets'
import Text from '../Text/text'
import styles from "./SocialCard.module.css"
interface Props {
    onPress?: () => void;
    title?: string;
    icon: React.FC;
    backImage?: string;
}
const SocialCard: React.FC<Props> = (props) => {
    return (
        <div className={styles.container} onClick={props.onPress}>
            {props.backImage ?
                <img className={styles.backImage} src={props.backImage} alt="" /> : null
            }
            <div className={styles.text}>
                <props.icon />
                <Text textType={'middle'} textSize={'twenty'} textColor={'black'} text={props.title} />
            </div>
        </div>
    )
}

export default SocialCard

import React from 'react'
import { LikeIcon, LocationIcon, PersonIcon } from '../../assets/icons';
import { ASSETS } from '../../constants/requireAssets';
import RowItem from '../Rowitem/rowItem';
import Text from '../Text/text';
import styles from "./comment.module.css"
interface Props {
    comment?: string;
    likeIcon?: any;
    more?: string;
    personOcon?: any;
    personName?: string;
}

const Comment: React.FC<Props> = ({
    comment,
    likeIcon,
    more,
    personName,
    personOcon
}) => {
    return (
        <div className={styles.container}>
            <div className={styles.likeBox}>
                <LikeIcon />
            </div>
            <div className={styles.commentBox}>
                <div className={styles.comment}>
                    <Text
                        textType={'middle'}
                        textSize={'twelve'}
                        textColor={'black'}
                        cursor={'none'}
                        text={comment}
                    />
                    <Text
                        style={{ marginTop: "5px" }}
                        textType={'middle'}
                        textSize={'twelve'}
                        textColor={'blue'}
                        cursor={'Cursor'}
                        text="Ko'proq o'qing"
                    />
                </div>
                <RowItem imgUrl={ASSETS.person} text='Begmamatov Shahzod' />
            </div>
        </div>
    )
}

export default Comment

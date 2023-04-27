import React from 'react';
import { LikeIcon } from '../../assets/icons';
import { ASSETS } from '../../constants/requireAssets';
import RowItem from '../Rowitem/rowItem';
import Text from '../Text/text';
import styles from "./comment.module.css";
interface Props {
    comment: string;
    likeIcon?: any;
    more?: boolean;
    personOcon?: any;
    personName?: string;
    showMore?: () => void;
}

const Comment: React.FC<Props> = ({
    comment,
    likeIcon,
    more,
    personName,
    personOcon,
    showMore
}) => {
    return (
        <div className={styles.container}>
            <div className={styles.likeBox}>
                <LikeIcon />
            </div>
            {
                more ? (
                    <div className={`${styles.commentBox} ${styles.commentMoreBox}`}>
                        <div className={styles.comment}>
                            <Text
                                textType={'middle'}
                                textSize={'twelve'}
                                textColor={'black'}
                                cursor={'none'}
                                text={comment}
                            />
                        </div>
                        <RowItem imgUrl={ASSETS.person} text='Begmamatov Shahzod' />
                    </div>
                ) : (
                    <div className={styles.commentBox}>
                        <div className={styles.comment}>
                            <Text
                                textType={'middle'}
                                textSize={'twelve'}
                                textColor={'black'}
                                cursor={'none'}
                                text={comment.length > 130 ? comment.slice(0, 100) + '...' : comment}
                            />
                            <button style={{ border: 0, outline: 'none', background: 'transparent' }} onClick={showMore}>
                                <Text
                                    style={{ marginTop: "5px" }}
                                    textType={'middle'}
                                    textSize={'twelve'}
                                    textColor={'blue'}
                                    cursor={'Cursor'}
                                    text="Ko'proq o'qing"
                                />
                            </button>
                        </div>
                        <RowItem imgUrl={ASSETS.person} text='Begmamatov Shahzod' />
                    </div>
                )
            }
        </div>
    )
}

export default Comment

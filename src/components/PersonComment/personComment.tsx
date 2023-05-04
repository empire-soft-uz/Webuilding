import React from 'react'
import { DisLike, LikeIconTwo } from '../../assets/icons'
import { ASSETS } from '../../constants/requireAssets'
import Avatar from '../Avatar/avatar'
import Button from '../Button/button'
import Text from '../Text/text'
import styles from "./personComment.module.css"
interface Props {
    personName?: string;
    personImage?: string;
    likeCount?: number | string;
    disLikeCount?: number | string;
    date?: string | number;
    comment?: string;
    positiveComment?: string;
    negativeComment?: string;
}

const PersonComment: React.FC<Props> = ({
    comment,
    date,
    disLikeCount,
    likeCount,
    negativeComment,
    personImage,
    personName,
    positiveComment
}) => {
    return (
        <div className={styles.container}>
            <div className={styles.avatarBox}>
                <Avatar imageUrl={personImage} />
            </div>
            <div className={styles.commentBox}>
                <div className={styles.headerBox}>
                    <Text
                        textType={'middle'}
                        textSize={'sixteen'}
                        textColor={'black'}
                        cursor={'Cursor'}
                        text={personName}
                    />
                    <Text
                        textType={'middle'}
                        textSize={'fourteen'}
                        textColor={'grey'}
                        cursor={'Cursor'}
                        text={date}
                    />
                </div>
                <div className={styles.coment}>
                    <Text
                        textType={'thin'}
                        textSize={'fourteen'}
                        textColor={'black'}
                        style={{ marginBottom: "30px" }}
                        cursor={'Cursor'}
                        text={comment}
                    />
                    <div style={{ display: "flex" }}>
                        <Button
                            textSize={'fourteen'}
                            btnSize={'small'}
                            btnColor={'purple'}
                            textColor={'green'}
                            borderRadius={'five'}
                            title="+ Ijobiy"
                            style={{
                                backgroundColor: "rgba(223, 245, 219, 1)",
                                padding: "10px 15px",
                                marginBottom: "30px"
                            }}
                        />
                    </div>
                    <Text
                        textType={'thin'}
                        textSize={'fourteen'}
                        textColor={'black'}
                        cursor={'Cursor'}
                        style={{ marginBottom: "30px" }}
                        text={positiveComment}
                    />
                    <div style={{ display: "flex" }}>
                        <Button
                            textSize={'fourteen'}
                            btnSize={'small'}
                            btnColor={'purple'}
                            textColor={'red'}
                            borderRadius={'five'}
                            title="+ Salbiy"
                            style={{
                                backgroundColor: "rgba(255, 244, 242, 1)",
                                padding: "10px 15px",
                                marginBottom: "30px"
                            }}
                        />
                    </div>
                    <Text
                        textType={'thin'}
                        textSize={'fourteen'}
                        textColor={'black'}
                        cursor={'Cursor'}
                        style={{ marginBottom: "30px" }}
                        text={negativeComment}
                    />
                </div>
            </div>
            <div className={styles.likeBox}>
                <div className={styles.like}>
                    <LikeIconTwo />
                    <Text
                        textType={'bold'}
                        textSize={'sixteen'}
                        textColor={'purple'}
                        cursor={'Cursor'}
                        text={likeCount}
                    />
                </div>
                <div className={styles.like}>
                    <DisLike />
                    <Text
                        textType={'bold'}
                        textSize={'sixteen'}
                        textColor={'grey'}
                        cursor={'Cursor'}
                        text={disLikeCount}
                    />
                </div>
            </div>
        </div>
    )
}

export default PersonComment

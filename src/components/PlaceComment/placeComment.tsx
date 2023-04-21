import React from 'react'
import { StarIcon } from '../../assets/icons'
import { COLORS } from '../../constants/color'
import Button from '../Button/button'
import PersonComment from '../PersonComment/personComment'
import SimpleBtn from '../SimpleBtn/simpleBtn'
import Text from '../Text/text'
import styles from "./placeComment.module.css"

const PlaceComment = () => {
    return (
        <div className={styles.container}>
            <div className={styles.topBox}>
                <div className={styles.rateBox}>
                    <Text
                        textType={'middle'}
                        textSize={'sixteen'}
                        textColor={'black'}
                        cursor={'Cursor'}
                        text="'Coastal Park' turar-joy majmuasi haqida 5 ta sharh "
                    />
                    <Button
                        textSize={'sixteen'}
                        btnSize={'small'}
                        btnColor={'lightPurple'}
                        textColor={'textPurple'}
                        borderRadius={'five'}
                        title="4.5"
                        iconUrl={<StarIcon />}
                    />
                </div>
                <div>
                    <Button
                        textSize={'fourteen'}
                        btnSize={'small'}
                        btnColor={'outline'}
                        textColor={'textPurple'}
                        borderRadius={'ten'}
                        title="Sharh yozing"
                        style={{ padding: "15px 20px" }}
                    />
                </div>
            </div>
            <div className={styles.commentBox}>
                <PersonComment />
                <span className={styles.line}></span>
                <PersonComment />
            </div>
        </div>
    )
}

export default PlaceComment

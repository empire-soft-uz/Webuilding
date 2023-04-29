import React from 'react'
import { StarIcon } from '../../assets/icons'
import Button from '../Button/button'
import DrawerComponent from '../Drawer/DrawerComponent'
import PersonComment from '../PersonComment/personComment'
import Text from '../Text/text'
import styles from "./placeComment.module.css"

const PlaceComment = () => {

    const [open, setOpen] = React.useState(false)

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
                        borderRadius={'five'}
                        title="Sharh yozing"
                        onPress={() => setOpen(true)}
                        style={{ padding: "15px 20px" }}
                    />
                </div>
            </div>
            <div className={styles.commentBox}>
                <PersonComment />
                <span className={styles.line}></span>
                <PersonComment />
            </div>
            <DrawerComponent open={open} openDrawer={() => setOpen(false)} title='Bu majmua uchun izoh qoldiring'>
                <div className={styles.drawerBox}>
                    <div className={styles.drawerTopBox}>
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
                </div>
            </DrawerComponent>
        </div>
    )
}

export default PlaceComment

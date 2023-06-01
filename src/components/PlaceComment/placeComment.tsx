import React from 'react'
import { StarIcon } from '../../assets/icons'
import Button from '../Button/button'
import DrawerComponent from '../Drawer/DrawerComponent'
import PersonComment from '../PersonComment/personComment'
import Text from '../Text/text'
import styles from "./placeComment.module.css"
import styled from 'styled-components'

const PlaceComment = () => {

    const [open, setOpen] = React.useState(false)

    return (
        <Container className={styles.container}>
            <div className={`${styles.topBox} topBox`}>
                <div className={`${styles.rateBox} rateBox`}>
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
                <div className='btnBox'>
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
        </Container>
    )
}

export default PlaceComment


const Container = styled.div`

    @media (max-width: 768px) {
        .topBox{
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
        }

        .btnBox {}
    }
`

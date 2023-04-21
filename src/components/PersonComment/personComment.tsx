import React from 'react'
import { DisLike, LikeIconTwo } from '../../assets/icons'
import { ASSETS } from '../../constants/requireAssets'
import Avatar from '../Avatar/avatar'
import Button from '../Button/button'
import Text from '../Text/text'
import styles from "./personComment.module.css"

const PersonComment = () => {
    return (
        <div className={styles.container}>
            <div className={styles.avatarBox}>
                <Avatar imageUrl={ASSETS.person} />
            </div>
            <div className={styles.commentBox}>
                <div className={styles.headerBox}>
                    <Text
                        textType={'middle'}
                        textSize={'sixteen'}
                        textColor={'black'}
                        cursor={'Cursor'}
                        text="Darya Rayevskiy"
                    />
                    <Text
                        textType={'middle'}
                        textSize={'fourteen'}
                        textColor={'grey'}
                        cursor={'Cursor'}
                        text="20 yanvar"
                    />
                </div>
                <div className={styles.coment}>
                    <Text
                        textType={'thin'}
                        textSize={'fourteen'}
                        textColor={'black'}
                        style={{ marginBottom: "30px" }}
                        cursor={'Cursor'}
                        text="Majmua Daryo bo'yida qurilmoqda va bu juda katta afzallik. 
                        Piyoda siz o'rmon bog'iga borishingiz mumkin va bu
                        erda mulk yaqin. Avtomobilsiz markazga borish qiyin bo'lgan yagona narsa."
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
                        text="Majmua Daryo bo'yida qurilmoqda va bu juda katta afzallik. 
                        Piyoda siz o'rmon bog'iga borishingiz mumkin va bu
                        erda mulk yaqin. Avtomobilsiz markazga borish qiyin bo'lgan yagona narsa."
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
                        text="Yo'q"
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
                        text="5"
                    />
                </div>
                <div className={styles.like}>
                    <DisLike />
                    <Text
                        textType={'bold'}
                        textSize={'sixteen'}
                        textColor={'grey'}
                        cursor={'Cursor'}
                        text="5"
                    />
                </div>
            </div>
        </div>
    )
}

export default PersonComment

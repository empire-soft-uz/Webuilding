import styled from 'styled-components'
import { DisLike, LikeIconTwo } from '../../assets/icons'
import { ASSETS } from '../../constants/requireAssets'
import Avatar from '../Avatar/avatar'
import Button from '../Button/button'
import Text from '../Text/text'
import styles from "./personComment.module.css"

const PersonComment = () => {
    return (
        <Container className={styles.container}>
            <div className="commentTopBox">
                <div className="userBox">
                    <Avatar imageUrl={ASSETS.person} className='avatar' />
                    <div className={styles.headerBox}>
                        <Text
                            textType={'middle'}
                            textSize={'sixteen'}
                            textColor={'black'}
                            cursor={'Cursor'}
                            text="Darya Rayevskiy"
                        />
                        <Text
                            className='dateComment'
                            textType={'middle'}
                            textSize={'fourteen'}
                            textColor={'grey'}
                            cursor={'Cursor'}
                            text="20 yanvar"
                        />
                    </div>
                </div>
                <div className={`${styles.likeBox} topLikeBox`}>
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
            <div className={styles.commentBox}>
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
                        text="Yo'q"
                        className='no'
                    />
                </div>
            </div>
            <div className='footerBox'>
                <Text
                    textType={'middle'}
                    textSize={'fourteen'}
                    textColor={'grey'}
                    cursor={'Cursor'}
                    text="20 yanvar"
                />
                <div className={`${styles.likeBox} likeBox`}>
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
        </Container>
    )
}

export default PersonComment


const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;

    .commentTopBox {
        display: flex;
        align-items: center;
        margin-bottom: 30px;
        flex-direction: row;
        justify-content: space-between;
        margin-bottom: 15px;

        .userBox{
            display: flex;
            align-items: center;
            flex-direction: row;
        }
    }

    .no {
        margin-bottom: 30px;
    }

    .likeBox {
        display: none;
    }

    @media (max-width: 576px) {
        
        .no{
            margin-bottom: 0px;
        }

        .commentTopBox {

            .userBox {
                .avatar {
                    width: 45px;
                    height: 45px;
                }
            }
            .dateComment {
                display: none;
            }
            .topLikeBox {
                display: none;
            }            
        }

        .footerBox {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 20px;
            justify-content: end;
            .likeBox {
                display: flex;
                align-items: center;
                flex-direction: row;
                bottom: 20px;
                right: 20px;
            }
        }

    }
`

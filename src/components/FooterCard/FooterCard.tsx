import React from 'react'
import { LogoIcon, SmallLogo } from '../../assets/icons'
import { FooterFirstData, FooterSecondData, FooterThirdData } from '../../constants/socialData'
import Button from '../Button/button'
import Text from '../Text/text'
import styles from "./FooterCard.module.css"
//@ts-ignore
import { GooglePlayButton, AppGalleryButton, AppStoreButton } from "react-mobile-app-button";
import { useNavigate } from 'react-router-dom'

const FooterCard = () => {
  const APKUrl = "https://play.google.com/store/apps/details?id=host.exp.exponent";
  const iOSUrl = "https://apps.apple.com/us/app/expo-go/id982107779";
  const navigation = useNavigate()
  return (
    <div className={styles.container}>
      <div className={styles.content}>
      <div className={styles.cardBox}>
        <div className={styles.title}>
          <Text textType={'middle'} textSize={'eighteen'} textColor={'black'} text="Weebuilding" />
          <SmallLogo />
        </div>
        {FooterFirstData.map((e, index) => {
          return (
            <div key={index} className={styles.card}>
              <p className={styles.item}>{e.title}</p>
            </div>
          )
        })}
      </div>
      <div className={styles.cardBox}>
        <div className={styles.title}>
          <Text textType={'middle'} textSize={'eighteen'} textColor={'black'} text="Информация" />
        </div>
        {FooterSecondData.map((e, index) => {
          return (
            <>
            <div key={index} className={styles.card}>
            <p onClick={() => navigation(`${e.link}`)} className={styles.item}>{e.title}</p>
            <div className={styles.socialBtns}>
                {e.social?.map((i, index) => {
                  return (
                    <div key={index}>
                      <a target={"_blank"} className={styles.url} href={`https://${i.link}`}>
                        <img className={styles.sIcon} src={i.icon} alt="" />
                      </a>
                    </div>
                )
              })}
            </div>
            </div>
            </>
          )
        })}
      </div>
      <div className={styles.cardBox}>
        <div className={styles.title}>
          <Text textType={'middle'} textSize={'eighteen'} textColor={'black'} text="О компании" />
        </div>
        {FooterThirdData.map((e, index) => {
          return (
            <div key={index} className={styles.card}>
              <p onClick={() => navigation(`${e.link}`)} className={styles.item}>{e.title}</p>
            </div>
          )
        })}
      </div>
      </div>
      {/* <div className={styles.downLoadBtns}>
        <AppStoreButton
          theme={"dark"}
          url={iOSUrl}
          width={"auto"}
        />
        <GooglePlayButton
          url={APKUrl}
          theme={"dark"}
          width={"auto"}
        />
        <AppGalleryButton
          url={iOSUrl}
          theme={"dark"}
          width={"auto"}
        />
        <div className={styles.qrCodeBox}>
          <img src="/qrcode.png" alt="" />
        </div>
      </div> */}
      <div className={styles.protect}>
        <Text textType={'middle'} textSize={'sixteen'} textColor={'grey'} text="2023© Компания Weebuilding. Все права защищены. При использовании материалов гиперссылка объязательна" />
      </div>
    </div>
  )
}

export default FooterCard

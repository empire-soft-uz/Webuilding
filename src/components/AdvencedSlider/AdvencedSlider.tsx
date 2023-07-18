import React, { useEffect, useRef, useState } from 'react'
import { SliderData, SliderDataType } from '../../constants/SliderData'
import ArrowBtn from '../ArrowBtn/arrowBtn'
import Button from '../Button/button'
import Text from '../Text/text'
import styles from "./AdvencedSlider.module.css"
import _ from 'lodash';
import useRootStore from '../../Hooks/useRootStore'
import { observer } from 'mobx-react-lite'
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri"
import { COLORS } from '../../constants/color';

const AdvencedSlider = () => {
    const outerDiv = useRef<HTMLDivElement>(null)
    const inerDiv = useRef<HTMLDivElement>(null)
    const [translateX, setTranslateX] = useState(0)
    const { currentSliderData, getSliderData, nextSilader, backSilader } = useRootStore().sliderStore
    const NextSlider = () => {
        if (currentSliderData.id < SliderData.length) {
            getSliderData(currentSliderData.id + 1)
            setTranslateX(-(inerDiv.current?.clientWidth! + 20) * nextSilader())
        }
    }

    const BackSlider = () => {
        if (currentSliderData.id > 1) {
            getSliderData(currentSliderData.id - 1)
            setTranslateX(-(inerDiv.current?.clientWidth! + 20) * backSilader())
        }
    }
    return (
        <div className={styles.container}>
            <div className={styles.lineBox}>
                <div className={styles.line}>
                    <div className={`${styles.dot} ${currentSliderData.id === 1 ? styles.activeDot : ""}`}>
                        {currentSliderData.id === 1 ? 1 : ""}
                    </div>
                    <div className={`${styles.dot} ${currentSliderData.id === 2 ? styles.activeDot : ""}`}>
                        {currentSliderData.id === 2 ? 2 : ""}
                    </div>
                    <div className={`${styles.dot} ${currentSliderData.id === 3 ? styles.activeDot : ""}`}>
                        {currentSliderData.id === 3 ? 3 : ""}
                    </div>
                    <div className={`${styles.dot} ${currentSliderData.id === 4 ? styles.activeDot : ""}`}>
                        {currentSliderData.id === 4 ? 4 : ""}
                    </div>
                    <div className={`${styles.dot} ${currentSliderData.id === 5 ? styles.activeDot : ""}`}>
                        {currentSliderData.id === 5 ? 5 : ""}
                    </div>
                </div>
            </div>
            {SliderData.map((e, index) => {
                return (
                    <div className={`${styles.slideContainer} ${e.id === currentSliderData.id ? styles.slideContainerActive : ""}`} key={index}>
                        <div className={styles.slide}>
                            <div className={styles.textBox}>
                                <div className={styles.animateTitle}>
                                    <Text className={styles.title} textType={'middle'} textSize={'fifty'} textColor={'white'} text={currentSliderData.title} />
                                </div>
                                <div className={styles.animateText}>
                                    <Text className={styles.text} textType={'middle'} textSize={'fourteen'} textColor={'lightGrey'} text={currentSliderData.text} />
                                </div>
                                <div className={styles.animateBtn}>
                                    <Button className={styles.btn} style={{ display: "flex", justifyContent: "center" }} title='Explore' textSize={'sixteen'} btnSize={'avarage'} btnColor={'purple'} textColor={'textWhite'} borderRadius={'five'} />
                                </div>
                            </div>
                            <img className={styles.backImage} src={currentSliderData.backImage} alt="" />
                            <div className={styles.blendMode}></div>
                        </div>
                    </div>
                )
            })}
            <div className={styles.cardBox}>
                <div className={styles.content}>
                    <div id="outDiv" ref={outerDiv} style={{
                        transform: `translateX(${translateX}px)`,
                    }} className={styles.contentInContent} >
                        {SliderData.map((i, index) => {
                            return (
                                <div
                                    onClick={NextSlider}
                                    ref={inerDiv}
                                    key={index}
                                    id='inerDiv'
                                    className={`${styles.card} ${currentSliderData.id === i.id ? styles.currenCard : styles.card}`}
                                >
                                    <div className={styles.cardBlendMode}></div>
                                    <img className={styles.cardImage} src={i.cardImage} alt="" />
                                    <div className={styles.cardText}>
                                        <Text text={i.title} textType={'middle'} textSize={'eighteen'} textColor={'white'} />
                                        <Text style={{ marginTop: "8px" }} text={i.location} textType={'middle'} textSize={'fourteen'} textColor={'lightGrey'} />
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className={styles.btnBox}>
                    <div className={styles.containerBox}>
                        <button className={styles.button} onClick={BackSlider}>
                            <RiArrowLeftSLine size={26} color={COLORS.white} />
                        </button>
                        <button className={styles.button} onClick={NextSlider}>
                            <RiArrowRightSLine size={26} color={COLORS.white} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default observer(AdvencedSlider)

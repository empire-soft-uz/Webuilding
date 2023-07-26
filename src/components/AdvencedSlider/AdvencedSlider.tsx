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
import { toJS } from 'mobx'

const AdvencedSlider = () => {
    const outerDiv = useRef<HTMLDivElement>(null)
    const inerDiv = useRef<HTMLDivElement>(null)
    const [translateX, setTranslateX] = useState(0)

    const { currentSliderData, getSliderData, sliderData, nextSilader, backSilader, current } = useRootStore().sliderStore

    console.log(sliderData.length)
    console.log("current", toJS(current))
    console.log("currentSliderData",toJS(currentSliderData))
    console.log("SliderData",toJS(sliderData))
    const NextSlider = () => {
        getSliderData(currentSliderData.id + 1)
        setTranslateX(-(inerDiv.current?.clientWidth! + 20) * nextSilader())
    }

    const BackSlider = () => {
        if (currentSliderData.id > 1) {
            setTranslateX(-(inerDiv.current?.clientWidth! + 20) * backSilader())
            getSliderData(currentSliderData.id - 1)
        }
    }
    
    return (
        <div className={styles.container}>
            <div className={styles.lineBox}>
                <div className={styles.line}>
                    {SliderData.map((e, index) => {
                        return (
                            <div key={index} className={`${styles.dot} ${currentSliderData.name === e.name ? styles.activeDot : ""}`}>
                                {currentSliderData.name === e.name ? currentSliderData.name : ""}
                            </div>
                        )
                    })}
                </div>
            </div>
            {sliderData.map((e, index) => {
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
                        {sliderData.map((i, index) => {
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

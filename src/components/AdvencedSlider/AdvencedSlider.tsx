import React, { useRef, useState } from 'react'
import { ASSETS } from '../../constants/requireAssets'
import { SliderData, SliderDataInitial, SliderDataType } from '../../constants/SliderData'
import ArrowBtn from '../ArrowBtn/arrowBtn'
import Button from '../Button/button'
import Text from '../Text/text'
import styles from "./AdvencedSlider.module.css"
import _ from 'lodash';
import useRootStore from '../../Hooks/useRootStore'
import { observer } from 'mobx-react-lite'
import { toJS } from 'mobx'
import { useEffect } from 'react';

const AdvencedSlider = () => {
    const outerDiv = useRef<HTMLDivElement>(null)
    const inerDiv = useRef<HTMLDivElement>(null)

    const [DATA, setDATA] = useState<SliderDataType[]>(SliderData)
    const { currentSliderData, getSliderData } = useRootStore().sliderStore
    // const data = SliderData

    // useEffect(() => {
    //     data.shift()
    //     setDATA(data)
    // }, data)

    const NextSlider = (id: number) => {
        getSliderData(id)
        // data.push(data[0])
        outerDiv.current?.scrollTo({
            left: inerDiv.current?.clientWidth!,
            top: 0,
            behavior: 'smooth',
        })
    }
    const BackSlider = (id: number) => {
        getSliderData(id)
        outerDiv.current?.scrollTo({
            left: -(inerDiv.current?.clientWidth!) + (inerDiv.current?.clientWidth!) - 100,
            top: 0,
            behavior: 'smooth',
        })
    }
    return (
        <div className={styles.container}>
            <div className={styles.blendMode}></div>
            <img className={styles.backImage} src={currentSliderData.backImage} alt="" />
            <div className={styles.line}></div>
            <div className={styles.textBox}>
                <Text textType={'middle'} textSize={'fifty'} textColor={'white'} text={currentSliderData.title} />
                <Text textType={'middle'} textSize={'fourteen'} textColor={'lightGrey'} text={currentSliderData.text} />
                <Button style={{ display: "flex", justifyContent: "center" }} title='Explore' textSize={'sixteen'} btnSize={'avarage'} btnColor={'purple'} textColor={'textWhite'} borderRadius={'five'} />
            </div>
            <div className={styles.cardBox}>
                <div className={styles.content} ref={outerDiv}>
                    {DATA.map((i, index) => {
                        return (
                            <div ref={inerDiv} key={index} className={`${styles.card} ${currentSliderData.id === i.id ? styles.currenCard : styles.card}`}>
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
                <div className={styles.btnBox}>
                    <ArrowBtn onPress={() => BackSlider(currentSliderData.id)} onNext={() => NextSlider(currentSliderData.id)} />
                </div>
            </div>
        </div>
    )
}

export default observer(AdvencedSlider)

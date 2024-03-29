import React from 'react'
import { ASSETS } from '../../constants/requireAssets'
import "./CarouselStyle.css"

const Carousel = () => {
    return (
        <section id='slider'>
            <input type="radio" name='slider' id='s1' />
            <input type="radio" name='slider' id='s2' />
            <input type="radio" name='slider' id='s3' checked />
            <input type="radio" name='slider' id='s4' />
            <input type="radio" name='slider' id='s5' />
            <label htmlFor="s1" id='slide1'>
                <img src={ASSETS.pr1} height="100%" width="100%" alt="" />
            </label>
            <label htmlFor="s2" id='slide2'>
                <img src={ASSETS.pr2} height="100%" width="100%" alt="" />
            </label>
            <label htmlFor="s3" id='slide3'>
                <img src={ASSETS.pr3} height="100%" width="100%" alt="" />
            </label>
            <label htmlFor="s4" id='slide4'>
                <img src={ASSETS.pr4} height="100%" width="100%" alt="" />
            </label>
            <label htmlFor="s5" id='slide5'>
                <img src={ASSETS.pr7} height="100%" width="100%" alt="" />
            </label>
        </section>
    )
}

export default Carousel

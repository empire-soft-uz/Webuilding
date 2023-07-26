import { ArrowBack, ArrowRightOutlined } from '@mui/icons-material';
import React, { useRef, useState } from 'react'
import { PersonIcon } from '../../assets/icons';
import { COLORS } from '../../constants/color';
import { PerfectCaruseldata } from '../../constants/SliderData';
import Button from '../Button/button';
import SymbolItem from '../SymbolItem/symbolItem';
import Text from '../Text/text';
import { MdKeyboardArrowLeft } from "react-icons/md"
import { MdKeyboardArrowRight } from "react-icons/md"
import "./PerfectCarusel.css"

const PerfectCarusel = () => {
    const slideRef = useRef<HTMLDivElement>(null)
    const [loadingProgress, setLoadingProgress] = useState(0);

    const handleClickNext = () => {
        let items = slideRef.current?.querySelectorAll(".item");
        //@ts-ignore
        slideRef.current?.appendChild(items[0]);
    };

    const handleClickPrev = () => {
        let items = slideRef.current?.querySelectorAll(".item");
        //@ts-ignore
        slideRef.current?.prepend(items[items.length - 1]);
    };

    return (
        <div className="containerBox">
        <div className="container">
            <div className="loadbar" style={{ width: `${loadingProgress}%` }}></div>
            <div id="slide" ref={slideRef}>
                    {PerfectCaruseldata.map((item) => (
                    <div
                        key={item.id}
                        className="item"
                        style={{
                            backgroundImage: `url(${item.imgUrl})`,
                        }}
                        >
                        <div className="blendMode"></div>
                        <div className="content">
                            <Button
                                textSize={"fourteen"}
                                btnSize={"avarage"}
                                btnColor={"lightPurple"}
                                textColor={"textPurple"}
                                borderRadius={"thirty"}
                                title={item.cc}
                            />
                            <div className="name">{item.name}</div>
                            <div className='symbol'>
                            <SymbolItem
                                dot={true}
                                dotColor={COLORS.orange}
                                text={item.station}
                                textColor={COLORS.white}
                            />
                            <SymbolItem
                                icon={<PersonIcon />}
                                dotColor={COLORS.orange}
                                text={item.stationTime}
                                textType="Montserrat3"
                                textColor={COLORS.white}
                                textSize="12px"
                            />
                            </div>
                            <div className="des">{item.desc}</div>
                            <div className="houseSale">
                            <Text
                                textType={"thin"}
                                textSize={"fourteen"}
                                textColor={"white"}
                                cursor={"Cursor"}
                                text={item.housesSale}
                            />
                            </div>
                            <div className="roomCount">
                                <Text
                                    textType={"middle"}
                                    textSize={"sixteen"}
                                    textColor={"white"}
                                    cursor={"Cursor"}
                                    text={item.price}
                                />
                                <Text
                                    textType={"thin"}
                                    textSize={"fourteen"}
                                    textColor={"white"}
                                    cursor={"Cursor"}
                                    text={item.countFlat}
                                />
                            </div>
                            <div>
                                <Button
                                    textSize={"fourteen"}
                                    btnSize={"middle"}
                                    btnColor={"purple"}
                                    textColor={"textWhite"}
                                    borderRadius={"five"}
                                    title="Kvartirani tanlang"
                                />
                            </div>
                        </div>
                    </div>
                    
                ))}
            </div>
            <div className="buttons">
                <button className='back' id="prev" onClick={handleClickPrev}>
                        <MdKeyboardArrowLeft className='arrowIcon' size={28} />
                </button>
                <button className='next' id="next" onClick={handleClickNext}>
                        <MdKeyboardArrowRight className='arrowIcon' size={28} />
                </button>
            </div>
        </div>
        </div>
    );
};

export default PerfectCarusel

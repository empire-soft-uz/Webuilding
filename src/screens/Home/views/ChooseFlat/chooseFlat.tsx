import React from 'react'
import ChooseFlatItem from '../../../../components/ChooseFlatItem/chooseFlatItem'
import FinishTimeFilter from '../../../../components/FinishTimeFilter/finishTimeFilter'
import FloorFilter from '../../../../components/FloorFilter/floorFilter'
import PriceFilter from '../../../../components/PriceFilter/priceFilter'
import RoomsSelect from '../../../../components/RoomsSelect/roomsSelect'
import SizeFilter from '../../../../components/SizeFilter/sizeFilter'
import Text from '../../../../components/Text/text'
import styles from "./chooseFlat.module.css"

const ChooseFlat = () => {
    return (
        <div className={styles.container}>
            <Text
                textType={'thin'}
                textSize={'twelve'}
                textColor={'darkGrey'}
                text="Вернутся к ЖК Aist Residence"
            />
            <Text
                textType={'middle'}
                textSize={'thirty'}
                textColor={'black'}
                text="Продажа квартир в ЖК Aist Residence"
                style={{ marginTop: "30px" }}
            />
            <div className={styles.infoCard}>
                <RoomsSelect />
                <PriceFilter label='Narxi, ming $' />
                <SizeFilter label='Maydoni, m²' />
                <FinishTimeFilter from={new Date()} to={new Date("Thu Dec 27 2025")} label='Topshirish muddati' />
                <FloorFilter label='Qavat' />
            </div>
            <div className={styles.itemBox}>
                <ChooseFlatItem />
                <ChooseFlatItem />
                <ChooseFlatItem />
                <ChooseFlatItem />
            </div>
        </div>
    )
}

export default ChooseFlat

import React from 'react'
import Text from '../Text/text'
import styles from "./mainAdventages.module.css"

const MainAdventages = () => {
    return (
        <div className={styles.container}>
            <Text
                textType={'middle'}
                textSize={'sixteen'}
                textColor={'black'}
                cursor={'Cursor'}
                text="Asosiy afzalliklari"
                style={{ marginBottom: "30px" }}
            />
            <Text
                textType={'middle'}
                textSize={'fourteen'}
                textColor={'black'}
                cursor={'Cursor'}
                style={{ marginBottom: "30px" }}
                text="Joylashuv, transportga kirish imkoniyati"
            />
            <Text
                textType={'middle'}
                textSize={'twelve'}
                textColor={'darkGrey'}
                cursor={'Cursor'}
                style={{ marginBottom: "30px" }}
                text="Sohil bog'i turar joy majmuasi paxra daryosi sohilida, 
                Pavlovskoye qishlog'i va yam qishlog'i yonida, 
                MKADDAN 9 km uzoqlikda qurilgan."
            />
            <Text
                textType={'middle'}
                textSize={'twelve'}
                textColor={'darkGrey'}
                cursor={'Cursor'}
                style={{ marginBottom: "30px" }}
                text="Yaqin atrofda Kashir shosesi va M-4 trassasi o'tadi,
                 u orqali Moskva markaziga atigi 40 daqiqada borish mumkin."
            />
            <Text
                textType={'middle'}
                textSize={'twelve'}
                textColor={'darkGrey'}
                cursor={'Cursor'}
                style={{ marginBottom: "10px" }}
                text="O'n daqiqalik piyoda temir yo'l stantsiyasi joylashgan
                    Leninskaya, undan 40 daqiqada Paveletskiy vokzaliga 
                    poezdda borishingiz mumkin. 2024 yilda ushbu stantsiya 
                    McD-5 tarkibiga kiradi. Jamoat transportida eng yaqin 
                    Domodedovskaya metro stantsiyasiga borish uchun yarim soat vaqt ketadi."
            />
        </div>
    )
}

export default MainAdventages

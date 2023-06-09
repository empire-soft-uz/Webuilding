import React from 'react'
import { LineIcon } from '../../assets/icons'
import { COLORS } from '../../constants/color'
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
// import Slider from '../Slider/slider'
import styles from "./infoCardItem.module.css"
interface Props {
    label?: string;
    from?: string;
    to?: string;
}

function valuetext(value: number) {
    return `${value}°C`;
}

const InfoCardItem: React.FC<Props> = ({
    label,
    from,
    to
}) => {
    const [value, setValue] = React.useState<number[]>([0, 100]);

    const handleChange = (event: Event, newValue: number | number[]) => {
        setValue(newValue as number[]);
    };
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <p>{label}</p>
            </div>
            <div className={styles.center}>
                <p className={styles.from}>{value[0]}</p>
                <span className={styles.line}></span>
                <p className={styles.to}>{value[1]}</p>
            </div>
            <div className={styles.bottomLineBox}>
                {/* <Slider /> */}
                <Box sx={{ width: 248 }}>
                    <Slider
                        getAriaLabel={() => 'Temperature range'}
                        value={value}
                        onChange={handleChange}
                        valueLabelDisplay="auto"
                        getAriaValueText={valuetext}
                        size="small"
                        style={{ color: COLORS.purple, height: "1.5px" }}
                    />
                </Box>
            </div>
        </div>
    )
}

export default InfoCardItem

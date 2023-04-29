import React from 'react'
import { LineIcon } from '../../assets/icons'
import { COLORS } from '../../constants/color'
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
// import Slider from '../Slider/slider'
import styles from "./priceFilter.module.css"
interface Props {
    label?: string;
    from?: string;
    to?: string;
}

function valuetext(value: number) {
    return `${value}°C`;
}

const PriceFilter: React.FC<Props> = ({
    label,
    from,
    to
}) => {
    const [value, setValue] = React.useState<number[]>([2.2, 14.2]);

    const handleChange = (event: Event, newValue: number | number[]) => {
        setValue(newValue as number[]);
    };

    const onHandleChange = (val: string, i: number) => {
        const newArr = [...value];
        newArr[i] = val as unknown as number;
        setValue(newArr)
    };

    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <p>{label}</p>
            </div>
            <div className={styles.center}>
                <p className={styles.from}><input onChange={(event) => onHandleChange(event.currentTarget.value, 0)} className={styles.item} type="text" value={value[0]} />dan</p>
                <span className={styles.line}></span>
                <p className={styles.from}><input onChange={(event) => onHandleChange(event.currentTarget.value, 1)} className={styles.item} type="text" value={value[1]} />gacha</p>
            </div>
            <div className={styles.bottomLineBox}>
                <Box sx={{ width: 248 }}>
                    <Slider
                        min={2.2}
                        max={14.2}
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

export default PriceFilter;
import React from 'react'
import { LineIcon } from '../../assets/icons'
import { COLORS } from '../../constants/color'
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
// import Slider from '../Slider/slider'
import styles from "./sizeFilter.module.css"
interface Props {
    label?: string;
    from?: string;
    to?: string;
}

function valuetext(value: number) {
    return `${value}°C`;
}

const SizeFilter: React.FC<Props> = ({
    label,
    from,
    to
}) => {
    const [value, setValue] = React.useState<number[]>([10.5, 164.9]);

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
                <Box sx={{ width: "100%" }}>
                    <Slider
                        value={value}
                        onChange={handleChange}
                        min={10.5}
                        max={164.9}
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

export default SizeFilter;

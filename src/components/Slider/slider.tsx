import React from 'react'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { COLORS } from '../../constants/color';

function valuetext(value: number) {
    return `${value}°C`;
}

const SliderView = () => {
    const [value, setValue] = React.useState<number[]>([0, 100]);

    const handleChange = (event: Event, newValue: number | number[]) => {
        setValue(newValue as number[]);
    };
    return (
        <Box sx={{ width: "75%" }}>
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
    )
}

export default SliderView

import React from "react";
import { LineIcon } from "../../assets/icons";
import { COLORS } from "../../constants/color";
import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";
// import Slider from '../Slider/slider'
import styles from "./priceFilter.module.css";
import useRootState from "../../Hooks/useRootState";
interface Props {
  label?: string;
  from?: string;
  to?: string;
}

function valuetext(value: number) {
  return `${value}°C`;
}

const PriceFilter: React.FC<Props> = ({ label, from, to }) => {
  const [value, setValue] = React.useState<number[]>([2.2, 14.2]);
  const state = useRootState().filterState;

  const handleChange = (event: Event, newValue: any) => {
    setValue(newValue as never[]);
    state.setState(newValue[0], "priceMin");
    state.setState(newValue[1], "priceMax");
  };

  const onHandleChange = (val: string, i: number) => {
    const newArr = [...value];
    newArr[i] = val as unknown as number;
    setValue(newArr);
  };

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <p>{label}</p>
      </div>
      <div className={styles.center}>
        <p className={styles.from}>
          <input
            onChange={(event) => onHandleChange(event.currentTarget.value, 0)}
            className={styles.item}
            type="text"
            value={value[0]}
          />
          dan
        </p>
        <span className={styles.line}></span>
        <p className={styles.from}>
          <input
            onChange={(event) => onHandleChange(event.currentTarget.value, 1)}
            className={styles.item}
            type="text"
            value={value[1]}
          />
          gacha
        </p>
      </div>
      <div className={styles.bottomLineBox}>
        <Slider
          min={2.2}
          max={14.2}
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
          size="small"
          className={styles.slider}
        />
      </div>
    </div>
  );
};

export default PriceFilter;

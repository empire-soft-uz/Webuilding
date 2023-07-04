import React, { useEffect } from "react";
import { LineIcon } from "../../assets/icons";
import { COLORS } from "../../constants/color";
import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";
// import Slider from '../Slider/slider'
import styles from "./floorFilter.module.css";
import useRootState from "../../Hooks/useRootState";
interface Props {
  label?: string;
  from?: string;
  to?: string;
}

function valuetext(value: number) {
  return `${value}`;
}

const FloorFilter: React.FC<Props> = ({ label, from, to }) => {
  const [value, setValue] = React.useState<number[]>([1, 49]);
  const state = useRootState().filterState;

  const handleChange = (event: Event, newValue: any) => {
    setValue(newValue as number[]);
    state.setState(newValue[0], "floorMin");
    state.setState(newValue[1], "floorMax");
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
        <Box sx={{ width: "100%" }}>
          <Slider
            value={value}
            onChange={handleChange}
            min={1}
            max={49}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
            size="small"
            style={{ color: COLORS.purple, height: "1.5px", bottom: "-4px" }}
          />
        </Box>
      </div>
    </div>
  );
};

export default FloorFilter;

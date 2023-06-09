import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import React, { useState } from "react";
import { COLORS } from "../../constants/color";
// import Slider from '../Slider/slider'
import styles from "./finishTimeFilter.module.css";
import useRootState from "../../Hooks/useRootState";

interface Props {
  label?: string;
  from: Date;
  to: Date;
}

function valuetext(value: number) {
  return `${value}°C`;
}

const FinishTimeFilter: React.FC<Props> = ({ label, from, to }) => {
  const { ceil } = Math;
  const state = useRootState().filterState;
  const minMax = () => {
    const min = ceil((from.getMonth() + 1) / 3);
    const currentMoth = from.getMonth() - to.getMonth();
    const currentYear = (to.getFullYear() - from.getFullYear()) * 12;

    const max = ceil(
      (currentMoth > 0
        ? currentYear + currentMoth
        : currentYear - currentMoth) / 3
    );

    return {
      min,
      max,
    };
  };

  const [list, setList] = useState(Object.values(minMax()));
  const [chorak, setChorak] = useState<number[]>([
    ceil((from.getMonth() + 1) / 3),
    ceil((to.getMonth() + 1) / 3),
  ]);
  const [years, setYears] = useState([from.getFullYear(), to.getFullYear()]);

  const handleChange = (event: Event, newValue: any) => {
    setChorak(newValue.map((i: number) => i % 4));
    setList(newValue);
    state.setState(newValue[0], "submissionDeadline");
    state.setState(newValue[1], "terminationPeriod");
  };
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <p>{label}</p>
      </div>
      <div className={styles.center}>
        <p className={styles.from}>
          {chorak[0]} -chor {years[0]} y
        </p>
        <span className={styles.line}></span>
        <p className={styles.from}>
          {chorak[1]} -chor {years[1]} y
        </p>
      </div>
      <Slider
        value={list}
        onChange={handleChange}
        {...minMax()}
        // valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        size="small"
        className={styles.slider}
      />
    </div>
  );
};

export default FinishTimeFilter;

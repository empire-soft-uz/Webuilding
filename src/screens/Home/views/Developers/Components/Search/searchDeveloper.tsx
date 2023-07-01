import { useState } from "react";
import styles from "./searchDeveloper.module.css";

const SearchDeveloper = () => {
  const [state, setState] = useState();
  // const onChange = (value: any) => {
  //   setState(value);
  // };
  return (
    <div className={styles.container}>
      <div className={styles.title_box}>
        <h1 className={styles.title}>
          Застройщики Москвы и Московской области
        </h1>
      </div>
      <div className={styles.input_box}>
        <input
          className={styles.input}
          placeholder="Поиск по застройщику"
          value={state}
        />
      </div>
    </div>
  );
};

export default SearchDeveloper;

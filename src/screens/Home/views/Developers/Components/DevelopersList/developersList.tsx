import DeveloperItem from "../DeveloperItem/developerItem";
import styles from "./developersList.module.css";
const data = [
  {
    id: 0,
    name: "",
  },
  {
    id: 1,
    name: "",
  },
  {
    id: 2,
    name: "",
  },
  {
    id: 3,
    name: "",
  },
  {
    id: 4,
    name: "",
  },
  {
    id: 5,
    name: "",
  },
  {
    id: 6,
    name: "",
  },
];
const DevelopersList = () => {
  return (
    <div className={styles.developers_list}>
      {data.map((item, index) => (
        <DeveloperItem item={item} key={index} />
      ))}
    </div>
  );
};
export default DevelopersList;

import Footer from "../../../../components/Footer/footer";
import DevelopersList from "./Components/DevelopersList/developersList";
import SearchDeveloper from "./Components/Search/searchDeveloper";
import SectionDivider from "./Components/SectionDivider/sectionDivider";
import styles from "./developers.module.css";
const Developers = () => {
  return (
    <div className={styles.container}>
      <SearchDeveloper />
      <DevelopersList />
      <SectionDivider />
      <Footer />
    </div>
  );
};
export default Developers;

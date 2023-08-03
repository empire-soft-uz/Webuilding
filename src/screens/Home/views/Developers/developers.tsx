import Dashboard from "../../../../components/Dashboard/dashboard";
import Footer from "../../../../components/Footer/footer";
import FooterCard from "../../../../components/FooterCard/FooterCard";
import DevelopersList from "./Components/DevelopersList/developersList";
import SearchDeveloper from "./Components/Search/searchDeveloper";
import SectionDivider from "./Components/SectionDivider/sectionDivider";
import styles from "./developers.module.css";
const Developers = () => {
  return (
    <>
      <Dashboard onScroll />
    <div className={styles.container}>
      <SearchDeveloper />
      <DevelopersList />
      <SectionDivider />
      <FooterCard />
    </div>
    </>
  );
};
export default Developers;

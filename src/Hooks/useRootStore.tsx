import { useContext } from "react";
import RootStore from "../Services/RootStore";

const useRootStore = () => useContext(RootStore)

export default useRootStore;
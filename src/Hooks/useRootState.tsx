import { useContext } from "react";
import RootState from "../Services/RootState";

const useRootState = () => useContext(RootState);
export default useRootState;

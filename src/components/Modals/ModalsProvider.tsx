import {
  FC,
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import {
  MVisibleType,
  ModalsContextType,
  ModalsProviderType,
  ModalsState,
} from "./Modals.types";
import CallMeLaterModal from "./CallMeLaterModal";
import ICallYouNowModal from "./ICallYouNowModal";
import Advertising from "./advertising";

const ModalsContext = createContext<ModalsContextType | null>(null);

export const ModalsProvider: FC<ModalsProviderType> = ({ children }) => {
  const [state, updateState] = useState<ModalsState>({} as ModalsState);

  const show = useCallback((type: MVisibleType) => {
    updateState((oldState) => ({ ...oldState, type }));
  }, []);

  const hide = useCallback(() => {
    show("none");
  }, [show]);

  const value = useMemo(() => ({ show, hide, state }), [hide, show, state]);

  return (
    <ModalsContext.Provider value={value}>
      <CallMeLaterModal />
      <ICallYouNowModal />
      <Advertising />
      {children}
    </ModalsContext.Provider>
  );
};

export const useAppModals = () => useContext(ModalsContext);

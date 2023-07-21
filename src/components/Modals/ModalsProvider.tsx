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
import CartFilterModal from "./cartFilterModal";
import LanguageModal from "./languageModal";

const ModalsContext = createContext<ModalsContextType | null>(null);

const initialState = {
  language: {
    active: false,
    neverWork: false,
  },
  advertising: {
    active: false,
    neverWork: false,
  },
  call_me_later: {
    active: false,
    neverWork: false,
  },
  cartfilter: {
    active: false,
    neverWork: false,
  },
  i_call_you_now: {
    active: false,
    neverWork: false,
  },
};

export const ModalsProvider: FC<ModalsProviderType> = ({ children }) => {
  const [state, updateState] = useState<ModalsState>(initialState);

  const show = (type: MVisibleType) => {
    updateState((oldState) => ({
      ...oldState,
      [type]: {
        ...oldState[type],
        active: true,
      },
    }));
  };

  const hide = (type?: MVisibleType) => {
    if (!type) {
      updateState(initialState);
    } else {
      updateState(() => ({
        ...initialState,
        [type]: {
          ...initialState[type],
          neverWork: true,
        },
      }));
    }
  };
  const value = useMemo(() => ({ show, hide, state }), [hide, show, state]);

  return (
    <ModalsContext.Provider value={value}>
      <CallMeLaterModal />
      <ICallYouNowModal />
      <Advertising />
      <CartFilterModal />
      <LanguageModal />
      {children}
    </ModalsContext.Provider>
  );
};
export const useAppModals = () => useContext(ModalsContext);

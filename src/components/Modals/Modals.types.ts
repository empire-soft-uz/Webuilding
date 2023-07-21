export type MVisibleType =
  | "i_call_you_now"
  | "call_me_later"
  | "advertising"
  | "cartfilter"
  | "language";

export type ModalsState = {
  [key in MVisibleType]: {
    active: boolean;
    neverWork: boolean;
  };
};

export type ModalsContextType = {
  show(type: MVisibleType): void;
  hide(type?: MVisibleType): void;
  state: ModalsState;
};
export type ModalsProviderType = {
  children: any;
};

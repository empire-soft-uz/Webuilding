export type MVisibleType =
  | "none"
  | "i_call_you_now"
  | "call_me_later"
  | "advertising"
  | "cartfilter";

export type ModalsState = {
  type: MVisibleType;
};

export type ModalsContextType = {
  show(type: MVisibleType): void;
  hide(): void;
  state: ModalsState;
};
export type ModalsProviderType = {
  children: any;
};

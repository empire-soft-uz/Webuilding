import { useEffect } from "react";
import { makeAutoObservable } from "mobx";

type stateDataType = {
  rooms: string | Number;
  priceMin: string;
  priceMax: string;
  sizeMin: string;
  sizeMax: string;
  submissionDeadline: string;
  terminationPeriod: string;
  floorMin: number;
  floorMax: number;
};

const initialState = {
  rooms: 2,
  priceMin: 3.36,
  priceMax: 93.71,
  sizeMin: 10.5,
  sizeMax: 164.9,
  terminationPeriod: 1,
  submissionDeadline: 10,
  floorMin: 1,
  floorMax: 49,
};
export class FilterState {
  constructor() {
    makeAutoObservable(this);
  }
  state = initialState;
  setState = (value: any, key: keyof stateDataType) => {
    this.state[key] = value;
  };
}

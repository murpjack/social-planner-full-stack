import options from "./data/options";
import { dataEntry } from "./types/data";

import React from 'react';

type State = {
  options: dataEntry[],
  accordion: any,
  selectedOptionIndex: number
};

export const initialState = {
  options,
  accordion: { option1: true, option2: false, option3: false },
  selectedOptionIndex: 0
};


export const SET_ACCORDION = "SET_ACCORDION";

type Action = {
  type: string,
  payload: {
    accordion: object,
    optionIndex: number
  }
};

export const reducer = (state: State, { type, payload }: Action) => {
  switch (type) {
    case SET_ACCORDION:
      return {
        ...state,
        accordion: payload.accordion,
        selectedOptionIndex: payload.optionIndex

      };
    default:
      return state;
  }
};

export const AppContext: any = React.createContext(initialState);
export default { SET_ACCORDION, initialState, AppContext, reducer };

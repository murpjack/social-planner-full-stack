import options from "./data/options";
import { option } from "./types/data";

import React from 'react';

type State = {
  options: option[],
  accordion: any,
  selectedOptionIndex: number,
  dataWasGot: boolean
};

export const initialState = {
  options,
  accordion: { option1: true, option2: false, option3: false },
  selectedOptionIndex: 0,
  dataWasGot: false
};


export const SET_ACCORDION = "SET_ACCORDION";
export const SET_OPTIONS = "SET_OPTIONS";

// type Action = {
//   type: string,
//   payload: {
//     accordion?: any,
//     optionIndex?: number,
//     options?: option[]
//   }
// };

export const reducer = (state: State, { type, payload }: any) => {
  switch (type) {
    case SET_ACCORDION:
      return {
        ...state,
        accordion: payload.accordion,
        selectedOptionIndex: payload.optionIndex
      };
    case SET_OPTIONS:
      return {
        ...state,
        options: payload.options,
        dataWasGot: true

      };
    default:
      return state;
  }
};

export const AppContext: any = React.createContext(initialState);

export default {
  SET_ACCORDION,
  SET_OPTIONS,
  initialState,
  AppContext,
  reducer
};

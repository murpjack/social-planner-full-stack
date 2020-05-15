import React, { useReducer, useEffect, useRef } from "react";
import { fork, map, both } from "fluture";
import {
  SET_ACCORDION,
  SET_OPTIONS,
  initialState,
  AppContext,
  reducer
} from "./store";
import { option, apiResponse } from "./types/data";
import { getAllDiners, getAllActivities } from "./api-calls";
import tips from "./data/tips";
import Tab from "./components/Tab";
import Segment from "./components/Segment";
import MapContainer from "./components/Map";
import toggleListOpen from "./toggleListOpen";

export function App() {
  const appRef = useRef(null);
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);
  const { options, accordion, selectedOptionIndex, dataWasGot } = state;

  useEffect(() => {
    if (!dataWasGot) {
      const errorMessage = (error: any) => console.error(`You have a ${error}`);
      const responseData = (response: any) => response.data;

      const addOptions = (res: apiResponse[]) => {
        const newOptions = options.map((option: option, index: number) => ({
          ...option,
          dining: res[1].data[index],
          fun: res[0].data[index]
        }));
        return newOptions;
      };

      const setOptions = (options: option[]) => ({
        type: SET_OPTIONS,
        payload: { options }
      });

      const a = getAllActivities().pipe(map(responseData));
      const b = getAllDiners().pipe(map(responseData));

      both(a)(b)
        .pipe(map(addOptions))
        .pipe(map(setOptions))
        .pipe(fork(errorMessage)(dispatch));
    }
  }, []);

  function selectOption(idx: number) {
    const accordion: any = toggleListOpen(options, idx);
    dispatch({
      type: SET_ACCORDION,
      payload: { optionIndex: idx, accordion }
    });
  }

  // console.log(options);
  const randomIdx = Math.floor(Math.random() * tips.length);
  const contentHasLoaded =
    options[0].dining !== null && options[0].fun !== null;
  // return <h1>WHY??</h1>;

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div className="app" ref={appRef}>
        {contentHasLoaded && (
          <div className="app__content">
            <div className="app__header">
              <div className="options">
                {options.map((option: option, idx: number) => (
                  <Tab
                    key={idx}
                    currentIdx={idx}
                    isSelected={accordion[`option${idx + 1}`]}
                    handleClick={() => selectOption(idx)}
                  />
                ))}
              </div>
            </div>
            <div className="map__content">
              {options[0].dining !== null && <MapContainer />}
            </div>
            <div className="segments">
              <h2 className="segment__title">
                {options[selectedOptionIndex].name}
              </h2>

              <h3 className="segment__title">Nosh</h3>
              <Segment venue={options[selectedOptionIndex].dining} />

              <h3 className="segment__title">Fun</h3>
              <Segment venue={options[selectedOptionIndex].fun} />
            </div>
            <div className="segments segments--useful">
              <h3 className="segment__title">Top Tip</h3>
              <p className="segment__text">{tips[randomIdx]}</p>
            </div>
          </div>
        )}
      </div>
    </AppContext.Provider>
  );
}

export default App;

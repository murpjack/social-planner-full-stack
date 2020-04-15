import React, { useReducer } from 'react';
import { SET_ACCORDION, initialState, AppContext, reducer } from "./store";

import tips from './data/tips';
import Tab from "./components/Tab";
import Segment from "./components/Segment";
import MapContainer from "./components/Map";
import toggleListOpen from "./toggleListOpen";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { options, accordion, selectedOptionIndex } = state;


  function selectOption(idx: number) {
    const accordion: any = toggleListOpen(options, idx);
    dispatch({
      type: SET_ACCORDION,
      payload: { optionIndex: idx, accordion }
    });
  }
console.log(options)
  const randomIdx = Math.floor(Math.random() * tips.length);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div className="app">
        <div className="app__content">

          <div className="app__header">
          <div className="options">
          {options.map((option, idx) => (
              <Tab
              key={idx}
              currentIdx={idx}
              isSelected={accordion[`option${idx + 1}`]}
              handleClick={() => selectOption(idx)} />
            ))}
            </div>
            </div>
            <div className="map__content">
            </div>
            <div className="segments">
            <h2 className="segment__title">{options[selectedOptionIndex].name}</h2>

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
      </div>
    </AppContext.Provider>
  );
}

export default App;
// <MapContainer />

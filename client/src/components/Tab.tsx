import React, { useContext } from 'react';
import { AppContext } from "../store";

type Tab = {
  currentIdx: number
  isSelected: boolean,
  handleClick: any
};

export const Tab = ({ currentIdx, isSelected, handleClick }: Tab) => {
  const { state } = useContext(AppContext);
  const { _id } = state.options[currentIdx];

  const classes = `option__tab ${isSelected ? "option__tab--selected" : ""}`;

  return <div className="option">
    <div
      className={classes}
      onClick={handleClick}>
      <h2 className="option__title">{_id + 1}</h2>
    </div>
  </div>
};

export default Tab;

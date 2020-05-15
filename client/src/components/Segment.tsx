import React from 'react';
import {activity, diner} from "../types/data";

type Segment = {
  venue: activity | diner
};

export const Segment = ({ venue }: Segment) => {
  return venue && (
    <div className="segment__content">
    <p className="segment__subtitle">{venue.name}</p>
    <p className="segment__text">{venue.description}</p>
  </div>
)
};

export default Segment;

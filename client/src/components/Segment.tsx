import React from 'react';

type Segment = {
  venue: any
};

export const Segment = ({ venue }: Segment) => {
  return <div className="segment__content">
    <p className="segment__subtitle">{venue.VenueName}</p>
    <p className="segment__text">{venue.Description}</p>
  </div>
};

export default Segment;

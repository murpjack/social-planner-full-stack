import React, { useContext } from 'react';
import { AppContext } from "../store";

import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import d from '../data/dining.json';
import API_KEY from '../secure';

export const MapContainer = () => {
  const { state } = useContext(AppContext);
  const { selectedOptionIndex, options } = state;
  const { dining, fun } = options[selectedOptionIndex];

  const noshMarker = addCoordinatesToMap(dining);
  const funMarker = addCoordinatesToMap(fun);

  const [lat, lng] = d.data.dining[0].coords;

  return (
      <Map
        google={google}
        zoom={13}
        initialCenter={{ lat, lng }}
        mapTypeControl={false}
        zoomControl={false}
      >
        {noshMarker}
        {funMarker}
      </ Map>
  )
};
// width={"100%"}
// size: { "700px" }

export default GoogleApiWrapper({
  apiKey: (API_KEY)
})(MapContainer);

function addCoordinatesToMap(venue: any) {
  const coords = venue.coords;
  const imageDetails = {
    url: getMarkerIcon(venue.Theme),
    anchor: new google.maps.Point(32, 32),
    scaledSize: new google.maps.Size(64, 64)
  };

  return (<Marker
    title={venue.VenueName}
    name={venue.VenueName}
    key={venue._id}
    Icon={imageDetails}
    position={{ lat: coords[0], lng: coords[1] }}
  />)
}

function getMarkerIcon(theme: number) {
  switch (theme) {
    case 0:
      return "../images/local_dining.svg";
    case 1:
      return "../images/local_activity.svg";
  }
}

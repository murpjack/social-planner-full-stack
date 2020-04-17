import React, { useContext } from 'react';
import { AppContext } from "../store";

import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

export const MapContainer = () => {
  const { state } = useContext(AppContext);
  const { selectedOptionIndex, options } = state;
  const { dining, fun } = options[selectedOptionIndex];

  const noshMarker = addCoordinatesToMap(dining);
  const funMarker = addCoordinatesToMap(fun);

  // const [lat, lng] = ({
  //     "_id": 0,
  //     "name": "Bean & Leaf",
  //     "description": "A family ran independent coffee shop serving you only the best.",
  //     "priceRating": 0,
  //     "telephone": "01234567890",
  //     "theme": 0,
  //     "coords": [52.407554, -1.510427]
  //   }).coords;
  // initialCenter={{ lat, lng }}

  return (
      <Map
        google={google}
        zoom={13}
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
  apiKey: ("Hi")
})(MapContainer);
// process.env.REACT_APP_MAP_API_KEY
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

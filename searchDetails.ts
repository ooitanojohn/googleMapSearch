/** 詳細情報検索 */
import {addMarker} from './mapUi'
export const mySearchDetailCb = (status, place, map, infoWindow) => {
  // console.log(place);
  if (
    status === google.maps.places.PlacesServiceStatus.OK &&
    place &&
    place.geometry &&
    place.geometry.location
  ) {
    /** 緯度経度とマーカー */
    const marker = addMarker(place.geometry.location,map);

    /** flagment化できそう */
    google.maps.event.addListener(marker, 'click', () => {
      const content = document.createElement('div');

      const nameElement = document.createElement('h2');

      nameElement.textContent = place.name!;
      content.appendChild(nameElement);

      const placeIdElement = document.createElement('p');

      placeIdElement.textContent = place.place_id!;
      content.appendChild(placeIdElement);

      const placeAddressElement = document.createElement('p');

      placeAddressElement.textContent = place.formatted_address!;
      content.appendChild(placeAddressElement);

      infoWindow.setContent(content);
      infoWindow.open(map, marker);
    });
  }
};

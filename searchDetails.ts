/** 詳細情報検索 */
export const mySearchDetailCb = (status, place, map, infowindow) => {
  // console.log(place);
  if (
    status === google.maps.places.PlacesServiceStatus.OK &&
    place &&
    place.geometry &&
    place.geometry.location
  ) {
    const marker = new google.maps.Marker({
      map,
      position: place.geometry.location,
    });

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

      infowindow.setContent(content);
      infowindow.open(map, marker);
    });
  }
};

/**
 * 文字から場所を検索
 */
export const myFindPlaceFromQuery = (service, request, map, infowindow) => {
  return new Promise((resolve, reject) => {
    service.findPlaceFromQuery(
      request,
      (
        results: google.maps.places.PlaceResult[] | null,
        status: google.maps.places.PlacesServiceStatus
      ) => {
        if (status === google.maps.places.PlacesServiceStatus.OK && results) {
          console.log(results);
          for (let i = 0; i < results.length; i++) {
            createMarker(results[i], map, infowindow);
          }
          map.setCenter(results[0].geometry!.location!);
          resolve(results[0].place_id);
        }
        reject('検索に失敗しました');
      }
    );
  });
};

/** marker設置 */
function createMarker(place: google.maps.places.PlaceResult, map, infowindow) {
  if (!place.geometry || !place.geometry.location) return;

  const marker = new google.maps.Marker({
    map,
    position: place.geometry.location,
  });

  google.maps.event.addListener(marker, 'click', () => {
    infowindow.setContent(place.name || '');
    infowindow.open(map);
  });
}

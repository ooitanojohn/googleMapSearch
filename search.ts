/**
 * 文字から場所を検索
 */
export const myFindPlaceFromQuery = (service, request, map) => {
  return new Promise((resolve, reject) => {
    service.findPlaceFromQuery(
      request,
      (
        results: google.maps.places.PlaceResult[] | null,
        status: google.maps.places.PlacesServiceStatus
      ) => {
        if (status === google.maps.places.PlacesServiceStatus.OK && results) {
          let placeIdList: any = [];
          for (let i = 0; i < results.length; i++) {
            placeIdList[placeIdList.length] = results[i].place_id;
          }
          map.setCenter(results[0].geometry!.location!);
          resolve(placeIdList);
        }
        reject('検索に失敗しました');
      }
    );
  });
};

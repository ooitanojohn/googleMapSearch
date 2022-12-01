"use strict";
exports.__esModule = true;
exports.myFindPlaceFromQuery = void 0;
/**
 * 文字から場所を検索
 */
var myFindPlaceFromQuery = function (service, request, map) {
    return new Promise(function (resolve, reject) {
        service.findPlaceFromQuery(request, function (results, status) {
            if (status === google.maps.places.PlacesServiceStatus.OK && results) {
                var placeIdList = [];
                for (var i = 0; i < results.length; i++) {
                    placeIdList[placeIdList.length] = results[i].place_id;
                }
                map.setCenter(results[0].geometry.location);
                resolve(placeIdList);
            }
            reject('検索に失敗しました');
        });
    });
};
exports.myFindPlaceFromQuery = myFindPlaceFromQuery;

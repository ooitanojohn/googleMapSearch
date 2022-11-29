/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
/** UI */
import { searchForm } from './mapUi';
import { myFindPlaceFromQuery } from './search';
import { mySearchDetailCb } from './searchDetails';

/** 初期化と型宣言 */
let map: google.maps.Map,
  service: google.maps.places.PlacesService,
  infowindow: google.maps.InfoWindow,
  place_id: string | undefined = '';
/** 更新される配列 */
/** PlaceFromQuery 検索名から場所を探す*/
const request = {
  query: 'YOD Edition',
  fields: ['name', 'geometry', 'place_id'],
};
/** getDetails placeIdから場所の情報を出す */
const requestDetails: any = {
  placeId: place_id,
  fields: ['name', 'formatted_address', 'place_id', 'geometry'],
};

/** マップ作成 */
function initMap(): void {
  /** 現在値を表示 */
  const yodEditions: google.maps.LatLng = new google.maps.LatLng(
    34.696959414777986,
    135.5052360477183
  );
  /** mapのインスタンス */
  map = new google.maps.Map(document.getElementById('map') as HTMLElement, {
    center: yodEditions,
    zoom: 15,
  });
  /** infoWindow インスタンス */
  infowindow = new google.maps.InfoWindow();
  /** placeライブラリ インスタンス */
  service = new google.maps.places.PlacesService(map);
  /** ui */
  map.controls[google.maps.ControlPosition.TOP_CENTER].push(searchForm);

  // /** 詳細情報検索 */
  // service.getDetails(requestDetails, (place, status) => {
  //   if (place) place_id = place.place_id;
  //   mySearchDetailCb(status, place, map, infowindow);
  // });
}

/** ここから操作 */
/** form検索した時 */
searchForm.addEventListener('submit', async (event: any) => {
  event.preventDefault();
  request.query = event.path[0][0].value;
  /** 文字から場所を検索 place_idを取得するまで待機*/
  await myFindPlaceFromQuery(service, request, map, infowindow).then(
    (place_id) => {
      requestDetails.placeId = place_id;
    }
  );
  /** 詳細情報検索 */
  service.getDetails(requestDetails, (place, status) => {
    if (place) place_id = place.place_id;
    mySearchDetailCb(status, place, map, infowindow);
  });
});

declare global {
  interface Window {
    initMap: () => void;
  }
}
window.initMap = initMap;
export {};

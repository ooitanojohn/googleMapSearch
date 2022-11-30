/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
/** 環境 */
import * as dotenv from "dotenv";
/** UI */
import { searchForm } from "./lib/components/searchForm";
/** 関数 */
import { myFindPlaceFromQuery } from "./lib/search";
import { mySearchDetailCb } from "./lib/searchDetails";
import { getCurrentPositionPromise } from "./lib/geoLocation";

/** 初期化と型宣言 */
let map: google.maps.Map,
  service: google.maps.places.PlacesService,
  infoWindow: google.maps.InfoWindow,
  location: google.maps.LatLngLiteral,
  place_id: string | undefined = "";
/** エラー時のmsgInfo */
let setContentMsg = "";
/** PlaceFromQuery 検索名から場所を探す*/
const request = {
  query: "YOD Edition",
  fields: ["name", "geometry", "place_id"],
};
/** getDetails placeIdから場所の情報を出す */
let requestDetail: any = {
  placeId: place_id,
  fields: [
    "place_id",
    "geometry",
    "name",
    "business_status",
    "opening_hours",
    "utc_offset_minutes",
    "formatted_address",
    "photos",
    "website",
  ],
};

/** マップ作成 */
const initMap = async () => {
  /** 現在位置の位置情報取得まで処理を待機 */
  await getCurrentPositionPromise({ timeout: 200 })
    .then((data: any) => {
      location = data.location;
      setContentMsg = data.msg;
    })
    .catch((error) => {
      /** エラー出たらYOD editionを中心にする */
      location = { lat: 34.696959414777986, lng: 135.5052360477183 };
      setContentMsg = error.browserHasGeolocation
        ? `Error: ${error.errMsg}`
        : "Error: あなたのブラウザは位置情報サービスがサポートされていません";
    });
  /** mapのインスタンス */
  map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
    center: location,
    zoom: 15,
    gestureHandling: "cooperative",
  });
  /** infoWindow インスタンス */
  infoWindow = new google.maps.InfoWindow();
  infoWindow.setPosition(location);
  infoWindow.setContent(setContentMsg);
  infoWindow.open(map);
  /** placeライブラリ インスタンス */
  service = new google.maps.places.PlacesService(map);
  /** MapにUI 追加 */
  map.controls[google.maps.ControlPosition.TOP_CENTER].push(searchForm);
};

// map初期化;
const mapPromiss = initMap().then((map) => {
  // console.log(map);
});
// console.log(mapPromiss)

/** ここから操作 */
/** form検索した時 */
searchForm.addEventListener("submit", async (event: any) => {
  event.preventDefault();
  infoWindow.close();
  // request.query = event.path[0][0].value; // ブラウザだと
  request.query = event.target[0].value; // node実行
  /** 文字から場所を検索 place_idを取得するまで待機*/
  await myFindPlaceFromQuery(service, request, map)
    .then((list) => {
      const placeIdList: any = list;
      /** 詳細情報検索 */
      for (let i = 0; i < placeIdList.length; i++) {
        requestDetail.placeId = placeIdList[i];
        service.getDetails(requestDetail, (place, status) => {
          mySearchDetailCb(status, place, map, infoWindow);
        });
      }
    })
    .catch((err) => {
      /** 検索失敗した場合 */
      infoWindow.setContent(err);
      infoWindow.open(map);
    });
});

declare global {
  interface Window {
    initMap: () => void;
  }
}
window.initMap = initMap;
export {};

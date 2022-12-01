"use strict";
exports.__esModule = true;
exports.mySearchDetailCb = void 0;
/** 詳細情報検索 */
var mapUi_1 = require("./mapUi");
var slideshow_1 = require("./components/slideshow");
var card_1 = require("./components/card");
var cardText_1 = require("./components/cardText");
var mySearchDetailCb = function (status, place, map, infoWindow) {
    if (status === google.maps.places.PlacesServiceStatus.OK &&
        place &&
        place.geometry &&
        place.geometry.location) {
        /** 緯度経度とマーカー */
        var marker_1 = (0, mapUi_1.addMarker)(place.geometry.location, map);
        /** 詳細情報 */
        google.maps.event.addListener(marker_1, "click", function () {
            console.log(place);
            /** card作成 */
            var searchDetailComponent = (0, card_1.createCardComponent)();
            /** 写真コンポーネント */
            var slideshowContent = (0, slideshow_1.createSlideShowComponent)(place);
            searchDetailComponent.childNodes[1].appendChild(slideshowContent);
            /** 文章コンポーネント */
            var cardTextComponent = (0, cardText_1.createCardTextComponent)(place);
            searchDetailComponent.childNodes[0].appendChild(cardTextComponent);
            /** mapにセット */
            infoWindow.setContent(searchDetailComponent);
            infoWindow.open(map, marker_1);
        });
    }
};
exports.mySearchDetailCb = mySearchDetailCb;

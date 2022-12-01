"use strict";
exports.__esModule = true;
exports.createCardComponent = void 0;
var mapUi_1 = require("../mapUi");
var createCardComponent = function () {
    /** 外枠 */
    var cardComponent = (0, mapUi_1.myCreateElement)("div", "", [
        "uk-card",
        "uk-margin",
        "uk-card-default",
        "uk-grid-collapse",
        "uk-child-width-1-2@s",
    ], { "uk-grid": "" });
    /** 文章コンポーネント */
    var text = (0, mapUi_1.myCreateElement)("div", "");
    /** 画像コンポーネント */
    var img = (0, mapUi_1.myCreateElement)("div", "", [
        "uk-card-media-left",
        "uk-cover-container",
    ]);
    cardComponent.appendChild(text);
    cardComponent.appendChild(img);
    return cardComponent;
};
exports.createCardComponent = createCardComponent;

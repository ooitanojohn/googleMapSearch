"use strict";
exports.__esModule = true;
exports.createCardTextComponent = void 0;
var mapUi_1 = require("../mapUi");
/** cardテキストコンポーネントを返す */
var createCardTextComponent = function (place) {
    var cardTextComponent = (0, mapUi_1.myCreateElement)("div", "", "uk-card-body");
    /** 地点名 */
    var nameElement = (0, mapUi_1.myCreateElement)("h2", place.name);
    cardTextComponent.appendChild(nameElement);
    /** 営業中か否か */
    var openNowText = "";
    if (place.opening_hours.isOpen()) {
        openNowText = "営業中";
    }
    else {
        openNowText = "営業時間外";
    }
    var openNowElement = (0, mapUi_1.myCreateElement)("p", openNowText);
    cardTextComponent.appendChild(openNowElement);
    /** 営業時間 */
    var openingHoursElement = (0, mapUi_1.myCreateElement)("ul", "", "uk-thumbnav");
    place.opening_hours.weekday_text.forEach(function (ele) {
        var openingHourElement = (0, mapUi_1.myCreateElement)("li", "", "temp");
        openingHourElement.textContent = ele;
        openingHoursElement.appendChild(openingHourElement);
    });
    cardTextComponent.appendChild(openingHoursElement);
    /** 住所 */
    var placeAddressElement = (0, mapUi_1.myCreateElement)("p", place.formatted_address);
    cardTextComponent.appendChild(placeAddressElement);
    /** 公式サイトへのリンク */
    var websiteElement = (0, mapUi_1.myCreateElement)("a", place.name, "", {
        href: place.website
    });
    cardTextComponent.appendChild(websiteElement);
    return cardTextComponent;
};
exports.createCardTextComponent = createCardTextComponent;

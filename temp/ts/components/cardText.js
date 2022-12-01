"use strict";
exports.__esModule = true;
exports.createCardTextComponent = void 0;
var mapUi_1 = require("../mapUi");
var nav_1 = require("./nav");
var icon_1 = require("./icon");
var clockIconComponent;
/** cardテキストコンポーネントを返す */
var createCardTextComponent = function (place) {
    var cardTextComponent = (0, mapUi_1.myCreateElement)("div", "", "uk-card-body");
    /** 地点名 */
    var nameElement = (0, mapUi_1.myCreateElement)("h2", place.name, "uk-heading-bullet");
    /** 住所 */
    var placeAddressElement = (0, mapUi_1.myCreateElement)("p", place.formatted_address);
    var placeAddressComponent = (0, icon_1.createLocationIconComponent)();
    placeAddressComponent.appendChild(placeAddressElement);
    /** 営業中か否か */
    if (place.opening_hours !== undefined) {
        clockIconComponent = (0, icon_1.createClockIconComponent)();
        var clockNavElement = (0, nav_1.createNavElement)(place);
        console.log(clockNavElement);
        clockIconComponent.appendChild(clockNavElement);
    }
    /** 公式サイトへのリンク */
    var websiteElement = (0, mapUi_1.myCreateElement)("a", place.name, "", {
        href: place.website
    });
    var webIconComponent = (0, icon_1.createWebIconComponent)();
    webIconComponent.appendChild(websiteElement);
    /** 電話番号 */
    var tellIconComponent = (0, icon_1.createTellIconComponent)();
    var formattedPhoneNumberElement = (0, mapUi_1.myCreateElement)("p", place.formatted_phone_number);
    tellIconComponent.appendChild(formattedPhoneNumberElement);
    /** 要素追加 */
    cardTextComponent.appendChild(nameElement);
    cardTextComponent.appendChild(placeAddressComponent);
    if (place.opening_hours !== undefined)
        cardTextComponent.appendChild(clockIconComponent);
    cardTextComponent.appendChild(webIconComponent);
    cardTextComponent.appendChild(tellIconComponent);
    return cardTextComponent;
};
exports.createCardTextComponent = createCardTextComponent;

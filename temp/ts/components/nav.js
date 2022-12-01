"use strict";
exports.__esModule = true;
exports.createNavElement = void 0;
var mapUi_1 = require("../mapUi");
var createNavElement = function (place) {
    /** 営業時間判定 */
    var openNowText = "";
    if (place.opening_hours.isOpen()) {
        openNowText = "営業中";
    }
    else {
        openNowText = "営業時間外";
    }
    var navBoxElement = (0, mapUi_1.myCreateElement)("div", "", [
        "uk-width-1-1@s",
        "uk-width-1-1@m",
    ]);
    var navElement = (0, mapUi_1.myCreateElement)("ul", "", "uk-nav-default", {
        "uk-nav": ""
    });
    var navActiveElement = (0, mapUi_1.myCreateElement)("li", "", "uk-parent");
    var navActiveLinkElement = (0, mapUi_1.myCreateElement)("a", openNowText, "", {
        href: "#"
    });
    var navActiveSpanElement = (0, mapUi_1.myCreateElement)("span", "", "", {
        "uk-nav-parent-icon": ""
    });
    /** aタグspan追加 */
    navActiveLinkElement.appendChild(navActiveSpanElement);
    /** 営業時間 */
    var openingHoursElement = (0, mapUi_1.myCreateElement)("ul", "", "uk-nav-sub");
    place.opening_hours.weekday_text.forEach(function (ele) {
        var openingHourElement = (0, mapUi_1.myCreateElement)("li");
        var openingHourLinkElement = (0, mapUi_1.myCreateElement)("a", ele, "", {
            href: "#"
        });
        openingHourElement.appendChild(openingHourLinkElement);
        openingHoursElement.appendChild(openingHourElement);
    });
    /** navリストにaタグ追加 */
    navActiveElement.appendChild(navActiveLinkElement);
    /** navリストに時間追加 */
    navActiveElement.appendChild(openingHoursElement);
    navElement.appendChild(navActiveElement);
    navBoxElement.appendChild(navElement);
    return navBoxElement;
};
exports.createNavElement = createNavElement;

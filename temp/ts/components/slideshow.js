"use strict";
exports.__esModule = true;
exports.createSlideShowComponent = void 0;
var mapUi_1 = require("../mapUi");
/** 写真一覧を表示 */
/** 写真コンポーネント */
var createSlideShowComponent = function (place) {
    /** 一番外 */
    var components = (0, mapUi_1.myCreateElement)("div", "", "", {
        "uk-slideshow": "animation: pull min-height: 500 max-height: 600"
    });
    /** 2番目のdiv */
    var photosComponent = (0, mapUi_1.myCreateElement)("div", "", ["uk-position-relative", "uk-visible-toggle", "uk-light"], {
        tabindex: "-1"
    });
    /** 写真エレメント */
    var photosElement = (0, mapUi_1.myCreateElement)("ul", "", "uk-slideshow-items");
    place.photos.forEach(function (ele) {
        var photoLiElement = (0, mapUi_1.myCreateElement)("li");
        var photoImgElement = (0, mapUi_1.myCreateElement)("img", "", "", {
            src: ele.getUrl({ maxWidth: 3000, maxHeight: 3000 }),
            "uk-cover": ""
        });
        photoLiElement.appendChild(photoImgElement);
        photosElement.appendChild(photoLiElement);
    });
    /** コンポーネントに追加 */
    photosComponent.appendChild(photosElement);
    var photoPrevElement = (0, mapUi_1.myCreateElement)("a", "", ["uk-position-center-left", "uk-position-small", "uk-hidden-hover"], {
        href: "#",
        "uk-slidenav-previous": "",
        "uk-slideshow-item": "previous"
    });
    var photoNextElement = (0, mapUi_1.myCreateElement)("a", "", ["uk-position-center-right", "uk-position-small", "uk-hidden-hover"], {
        href: "#",
        "uk-slidenav-next": "",
        "uk-slideshow-item": "next"
    });
    photosComponent.appendChild(photoPrevElement);
    photosComponent.appendChild(photoNextElement);
    components.appendChild(photosComponent);
    /** ドットに追加 */
    var photosDotElement = (0, mapUi_1.myCreateElement)("ul", "", [
        "uk-dotnav",
        "uk-slideshow-nav",
        "uk-flex-center",
        "uk-margin",
    ]);
    components.appendChild(photosDotElement);
    return components;
};
exports.createSlideShowComponent = createSlideShowComponent;

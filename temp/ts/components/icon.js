"use strict";
exports.__esModule = true;
exports.createStarIconComponent = exports.createClockIconComponent = exports.createLocationIconComponent = exports.createTellIconComponent = exports.createSignOutIconComponent = exports.createSignInIconComponent = exports.createLinkIconComponent = exports.createHomeIconComponent = exports.createWebIconComponent = void 0;
var mapUi_1 = require("../mapUi");
/** webIcon */
var createWebIconComponent = function () {
    var div = (0, mapUi_1.myCreateElement)("div", "", ["uk-flex", "uk-flex-middle"]);
    var www = (0, mapUi_1.myCreateElement)("span", "", "uk-margin-small-right", {
        "uk-icon": "world"
    });
    div.appendChild(www);
    return div;
};
exports.createWebIconComponent = createWebIconComponent;
/** HomeIcon */
var createHomeIconComponent = function () {
    var div = (0, mapUi_1.myCreateElement)("div", "", ["uk-flex", "uk-flex-middle"]);
    var home = (0, mapUi_1.myCreateElement)("span", "", "uk-margin-small-right", {
        "uk-icon": "home"
    });
    div.appendChild(home);
    return div;
};
exports.createHomeIconComponent = createHomeIconComponent;
/** Link */
var createLinkIconComponent = function () {
    var div = (0, mapUi_1.myCreateElement)("div", "", ["uk-flex", "uk-flex-middle"]);
    var link = (0, mapUi_1.myCreateElement)("span", "", "uk-margin-small-right", {
        "uk-icon": "link"
    });
    div.appendChild(link);
    return div;
};
exports.createLinkIconComponent = createLinkIconComponent;
/** SignIn */
var createSignInIconComponent = function () {
    var div = (0, mapUi_1.myCreateElement)("div", "", ["uk-flex", "uk-flex-middle"]);
    var signIn = (0, mapUi_1.myCreateElement)("span", "", "uk-margin-small-right", {
        "uk-icon": "sign-in"
    });
    div.appendChild(signIn);
    return div;
};
exports.createSignInIconComponent = createSignInIconComponent;
/** SignOut */
var createSignOutIconComponent = function () {
    var div = (0, mapUi_1.myCreateElement)("div", "", ["uk-flex", "uk-flex-middle"]);
    var signOut = (0, mapUi_1.myCreateElement)("span", "", "uk-margin-small-right", {
        "uk-icon": "world"
    });
    div.appendChild(signOut);
    return div;
};
exports.createSignOutIconComponent = createSignOutIconComponent;
/** ?????? */
var createTellIconComponent = function () {
    var div = (0, mapUi_1.myCreateElement)("div", "", ["uk-flex", "uk-flex-middle"]);
    var receiver = (0, mapUi_1.myCreateElement)("span", "", "uk-margin-small-right", {
        "uk-icon": "receiver"
    });
    div.appendChild(receiver);
    return div;
};
exports.createTellIconComponent = createTellIconComponent;
/** ?????? */
var createLocationIconComponent = function () {
    var div = (0, mapUi_1.myCreateElement)("div", "", ["uk-flex", "uk-flex-middle"]);
    var location = (0, mapUi_1.myCreateElement)("span", "", "uk-margin-small-right", {
        "uk-icon": "location"
    });
    div.appendChild(location);
    return div;
};
exports.createLocationIconComponent = createLocationIconComponent;
/** ?????? */
var createClockIconComponent = function () {
    var div = (0, mapUi_1.myCreateElement)("div", "", ["uk-flex", "uk-flex-middle"]);
    var clock = (0, mapUi_1.myCreateElement)("span", "", "uk-margin-small-right", {
        "uk-icon": "clock"
    });
    div.appendChild(clock);
    return div;
};
exports.createClockIconComponent = createClockIconComponent;
/** ??? */
/** ?????? */
var createStarIconComponent = function () {
    var div = (0, mapUi_1.myCreateElement)("div", "", ["uk-flex", "uk-flex-middle"]);
    var star = (0, mapUi_1.myCreateElement)("span", "", "uk-margin-small-right", {
        "uk-icon": "star"
    });
    div.appendChild(star);
    return div;
};
exports.createStarIconComponent = createStarIconComponent;

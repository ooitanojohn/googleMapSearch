"use strict";
exports.__esModule = true;
exports.getCurrentPositionPromise = void 0;
/** 緯度経度の取得 */
var getCurrentPositionPromise = function (options) {
    return new Promise(function (resolve, reject) {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                var location = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
                var msg = '現在地です 🐢';
                var data = { location: location, msg: msg };
                resolve(data);
            }, function (error) {
                /** ブラウザはgeolocation対応している */
                var errMsg = '';
                /** エラー振り分け */
                if (error.code === 1) {
                    errMsg = 'ページの位置情報を許可してください　🐧';
                }
                if (error.code === 2) {
                    errMsg = '内部エラーです　🦇';
                }
                if (error.code === 3) {
                    errMsg = '制限時間内に位置情報を取得できませんでした　👹';
                }
                reject({ browserHasGeolocation: true, errMsg: errMsg });
            }, options);
        }
        else {
            /** ブラウザはgeolocation対応してない */
            reject(false);
        }
    });
};
exports.getCurrentPositionPromise = getCurrentPositionPromise;

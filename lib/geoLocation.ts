/** 緯度経度の取得 */
export const getCurrentPositionPromise = (options) => {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position: GeolocationPosition) => {
          const location: google.maps.LatLngLiteral = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          const msg: string = '現在地です 🐢';
          const data: object = { location, msg };
          resolve(data);
        },
        (error) => {
          /** ブラウザはgeolocation対応している */
          let errMsg: string = '';
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
          reject({ browserHasGeolocation: true, errMsg });
        },
        options
      );
    } else {
      /** ブラウザはgeolocation対応してない */
      reject(false);
    }
  });
};

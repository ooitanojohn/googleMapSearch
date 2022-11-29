/** 詳細情報検索 */
import { forEachChild } from 'typescript';
import {addMarker} from './mapUi'
export const mySearchDetailCb = (status, place, map, infoWindow) => {
  // console.log(place);
  if (
    status === google.maps.places.PlacesServiceStatus.OK &&
    place &&
    place.geometry &&
    place.geometry.location
  ) {
    /** 緯度経度とマーカー */
    const marker = addMarker(place.geometry.location,map);
    // console.log(place);
    /** flagment化できそう */
    google.maps.event.addListener(marker, 'click', () => {
      const content = document.createElement('div');
      /** 地点名 */
      const nameElement = document.createElement('h2');
      nameElement.textContent = place.name!;
      content.appendChild(nameElement);
      /** 営業中か否か */
      console.log(place.opening_hours)
      const openNowElement = document.createElement('p');
      let openNowText:string ='';
      if(place.opening_hours.open_now!){
        openNowText = '営業中';
      }else{
        openNowText = '営業時間外';
      }
      openNowElement.textContent = openNowText;
      content.appendChild(openNowElement);
      /** 営業時間 */
      const openingHoursElement = document.createElement('ul');
      place.opening_hours.weekday_text.forEach(ele => {
        const openingHourElement = document.createElement('li');
        openingHourElement.textContent = ele;
        openingHoursElement.appendChild(openingHourElement);
      });
      content.appendChild(openingHoursElement);

      /** 住所 */
      const placeAddressElement = document.createElement('p');
      placeAddressElement.textContent = place.formatted_address!;
      content.appendChild(placeAddressElement);

      infoWindow.setContent(content);
      infoWindow.open(map, marker);
    });
  }
};

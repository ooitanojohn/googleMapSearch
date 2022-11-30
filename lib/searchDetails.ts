/** 詳細情報検索 */
import { myCreateElement, addMarker } from "./mapUi";
import { slideshowComponent } from "./components/slideshow";
export const mySearchDetailCb = (status, place, map, infoWindow) => {
  if (
    status === google.maps.places.PlacesServiceStatus.OK &&
    place &&
    place.geometry &&
    place.geometry.location
  ) {
    /** 緯度経度とマーカー */
    const marker = addMarker(place.geometry.location, map);
    console.log(place);
    /** 詳細情報 */
    google.maps.event.addListener(marker, "click", () => {
      /** uikit作成 */
      const content = myCreateElement("div", "", "temp");
      /** 地点名 */
      const nameElement = document.createElement("h2");
      nameElement.textContent = place.name!;
      content.appendChild(nameElement);
      /** 営業中か否か */
      const openNowElement = document.createElement("p");
      let openNowText: string = "";
      if (place.opening_hours.isOpen()!) {
        openNowText = "営業中";
      } else {
        openNowText = "営業時間外";
      }
      openNowElement.textContent = openNowText;
      content.appendChild(openNowElement);
      /** 営業時間 */
      const openingHoursElement = myCreateElement("ul", "", "uk-thumbnav");
      place.opening_hours.weekday_text.forEach((ele) => {
        const openingHourElement = myCreateElement("li", "", "temp");
        openingHourElement.textContent = ele;
        openingHoursElement.appendChild(openingHourElement);
      });
      content.appendChild(openingHoursElement);

      /** 住所 */
      const placeAddressElement = document.createElement("p");
      placeAddressElement.textContent = place.formatted_address!;
      content.appendChild(placeAddressElement);

      /** 公式サイトへのリンク */
      const websiteElement = document.createElement("a");
      websiteElement.setAttribute("href", place.website!);
      websiteElement.textContent = place.name!;
      content.appendChild(websiteElement);

      /** 写真コンポーネント */
      slideshowComponent(place, content);
      /** mapにセット */
      infoWindow.setContent(content);
      infoWindow.open(map, marker);
    });
  }
};

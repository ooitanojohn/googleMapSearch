/** 詳細情報検索 */
import { addMarker } from "./mapUi";
import { createSlideShowComponent } from "./components/slideshow";
import { createCardComponent } from "./components/card";
import { createCardTextComponent } from "./components/cardText";
export const mySearchDetailCb = (status, place, map, infoWindow) => {
  if (
    status === google.maps.places.PlacesServiceStatus.OK &&
    place &&
    place.geometry &&
    place.geometry.location
  ) {
    /** 緯度経度とマーカー */
    const marker = addMarker(place.geometry.location, map);
    /** 詳細情報 */
    google.maps.event.addListener(marker, "click", () => {
      console.log(place);
      /** card作成 */
      const searchDetailComponent = createCardComponent();
      /** 写真コンポーネント */
      const slideshowContent = createSlideShowComponent(place);
      searchDetailComponent.childNodes[1].appendChild(slideshowContent);
      /** 文章コンポーネント */
      const cardTextComponent = createCardTextComponent(place);
      searchDetailComponent.childNodes[0].appendChild(cardTextComponent);
      /** mapにセット */
      infoWindow.setContent(searchDetailComponent);
      infoWindow.open(map, marker);
    });
  }
};

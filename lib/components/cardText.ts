import { myCreateElement } from "../mapUi";
import { createNavElement } from "./nav";
import {
  createWebIconComponent,
  createTellIconComponent,
  createClockIconComponent,
  createLocationIconComponent,
} from "./icon";

let clockIconComponent: HTMLElement;
/** cardテキストコンポーネントを返す */
export const createCardTextComponent = (place) => {
  const cardTextComponent = myCreateElement("div", "", "uk-card-body");
  /** 地点名 */
  const nameElement = myCreateElement("h2", place.name!, "uk-heading-bullet");
  /** 住所 */
  const placeAddressElement = myCreateElement("p", place.formatted_address!);
  const placeAddressComponent = createLocationIconComponent();
  placeAddressComponent.appendChild(placeAddressElement);
  /** 営業中か否か */
  if (place.opening_hours !== undefined) {
    clockIconComponent = createClockIconComponent();
    const clockNavElement = createNavElement(place);
    console.log(clockNavElement);
    clockIconComponent.appendChild(clockNavElement);
  }
  /** 公式サイトへのリンク */
  const websiteElement = myCreateElement("a", place.name!, "", {
    href: place.website!,
  });
  const webIconComponent = createWebIconComponent();
  webIconComponent.appendChild(websiteElement);
  /** 電話番号 */
  const tellIconComponent = createTellIconComponent();
  const formattedPhoneNumberElement = myCreateElement(
    "p",
    place.formatted_phone_number!
  );
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

import { myCreateElement } from "../mapUi";

/** cardテキストコンポーネントを返す */
export const createCardTextComponent = (place) => {
  const cardTextComponent = myCreateElement("div", "", "uk-card-body");
  /** 地点名 */
  const nameElement = myCreateElement("h2", place.name!);
  cardTextComponent.appendChild(nameElement);
  /** 営業中か否か */
  let openNowText: string = "";
  if (place.opening_hours.isOpen()!) {
    openNowText = "営業中";
  } else {
    openNowText = "営業時間外";
  }
  const openNowElement = myCreateElement("p", openNowText);
  cardTextComponent.appendChild(openNowElement);
  /** 営業時間 */
  const openingHoursElement = myCreateElement("ul", "", "uk-thumbnav");
  place.opening_hours.weekday_text.forEach((ele) => {
    const openingHourElement = myCreateElement("li", "", "temp");
    openingHourElement.textContent = ele;
    openingHoursElement.appendChild(openingHourElement);
  });
  cardTextComponent.appendChild(openingHoursElement);

  /** 住所 */
  const placeAddressElement = myCreateElement("p", place.formatted_address!);
  cardTextComponent.appendChild(placeAddressElement);

  /** 公式サイトへのリンク */
  const websiteElement = myCreateElement("a", place.name!, "", {
    href: place.website!,
  });
  cardTextComponent.appendChild(websiteElement);
  return cardTextComponent;
};

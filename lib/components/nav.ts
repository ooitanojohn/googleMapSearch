import { myCreateElement } from "../mapUi";

export const createNavElement = (place) => {
  /** 営業時間判定 */
  let openNowText: string = "";
  if (place.opening_hours.isOpen()!) {
    openNowText = "営業中";
  } else {
    openNowText = "営業時間外";
  }
  const navBoxElement = myCreateElement("div", "", [
    "uk-width-1-1@s",
    "uk-width-1-1@m",
  ]);
  const navElement = myCreateElement("ul", "", "uk-nav-default", {
    "uk-nav": "",
  });
  const navActiveElement = myCreateElement("li", "", "uk-parent");
  const navActiveLinkElement = myCreateElement("a", openNowText, "", {
    href: "#",
  });
  const navActiveSpanElement = myCreateElement("span", "", "", {
    "uk-nav-parent-icon": "",
  });
  /** aタグspan追加 */
  navActiveLinkElement.appendChild(navActiveSpanElement);

  /** 営業時間 */
  const openingHoursElement = myCreateElement("ul", "", "uk-nav-sub");
  place.opening_hours.weekday_text.forEach((ele) => {
    const openingHourElement = myCreateElement("li");
    const openingHourLinkElement = myCreateElement("a", ele, "", {
      href: "#",
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

import { myCreateElement } from "../mapUi";

/** 写真一覧を表示 */
/** 写真コンポーネント */
export const createSlideShowComponent = (place) => {
  /** 一番外 */
  const components = myCreateElement("div", "", "", {
    "uk-slideshow": "animation: pull min-height: 500 max-height: 600",
  });
  /** 2番目のdiv */
  const photosComponent = myCreateElement(
    "div",
    "",
    ["uk-position-relative", "uk-visible-toggle", "uk-light"],
    {
      tabindex: "-1",
    }
  );
  /** 写真エレメント */
  const photosElement = myCreateElement("ul", "", "uk-slideshow-items");
  place.photos.forEach((ele) => {
    const photoLiElement = myCreateElement("li");
    const photoImgElement = myCreateElement("img", "", "", {
      src: ele.getUrl({ maxWidth: 3000, maxHeight: 3000 }),
      "uk-cover": "",
    });
    photoLiElement.appendChild(photoImgElement);
    photosElement.appendChild(photoLiElement);
  });
  /** コンポーネントに追加 */
  photosComponent.appendChild(photosElement);
  const photoPrevElement = myCreateElement(
    "a",
    "",
    ["uk-position-center-left", "uk-position-small", "uk-hidden-hover"],
    {
      href: "#",
      "uk-slidenav-previous": "",
      "uk-slideshow-item": "previous",
    }
  );
  const photoNextElement = myCreateElement(
    "a",
    "",
    ["uk-position-center-right", "uk-position-small", "uk-hidden-hover"],
    {
      href: "#",
      "uk-slidenav-next": "",
      "uk-slideshow-item": "next",
    }
  );
  photosComponent.appendChild(photoPrevElement);
  photosComponent.appendChild(photoNextElement);
  components.appendChild(photosComponent);
  /** ドットに追加 */
  const photosDotElement = myCreateElement("ul", "", [
    "uk-dotnav",
    "uk-slideshow-nav",
    "uk-flex-center",
    "uk-margin",
  ]);
  components.appendChild(photosDotElement);
  return components;
};

import { myCreateElement } from "../mapUi";

/** 写真一覧を表示 */
/** 写真コンポーネント */
export const slideshowComponent = (place, content) => {
  const photosComponent = myCreateElement(
    "div",
    "",
    ["uk-position-relative", "uk-visible-toggle", "uk-light"],
    {
      tabindex: "-1",
      "uk-slideshow": "animation: pull min-height: 300; max-height: 600",
    }
  );
  /** 写真エレメント */
  const photosElement = myCreateElement("ul", "", "uk-slideshow-items");
  /** 写真ドットエレメント */
  const photosDotElement = myCreateElement("ul");
  place.photos.forEach((ele) => {
    const photoLiElement = myCreateElement("li");
    const photoImgElement = myCreateElement("img", "", "", {
      src: ele.getUrl({ maxWidth: 3000, maxHeight: 3000 }),
      "uk-cover": "",
    });
    photoLiElement.appendChild(photoImgElement);
    photosElement.appendChild(photoLiElement);
    /** dot */
    const photoDotElement = myCreateElement("li", "", "", {
      "uk-slideshow-item": "0",
    });
    const photoADotElement = myCreateElement("a", "", "", { href: "#" });
    photoDotElement.appendChild(photoADotElement);
    photosDotElement.appendChild(photoDotElement);
  });
  /** コンポーネントに追加 */
  photosComponent.appendChild(photosElement);
  /** ドットに追加 */
  photosComponent.appendChild(photosDotElement);
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
  content.appendChild(photosComponent);
};

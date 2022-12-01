import { myCreateElement } from "../mapUi";

export const createCardComponent = () => {
  /** 外枠 */
  const cardComponent = myCreateElement(
    "div",
    "",
    [
      "uk-card",
      "uk-margin",
      "uk-card-default",
      "uk-grid-collapse",
      "uk-child-width-1-2@s",
    ],
    { "uk-grid": "" }
  );
  /** 画像コンポーネント */
  const img = myCreateElement("div", "", [
    "uk-card-media-left",
    "uk-cover-container",
  ]);
  /** 文章コンポーネント */
  const text = myCreateElement("div");
  cardComponent.appendChild(img);
  cardComponent.appendChild(text);
  return cardComponent;
};

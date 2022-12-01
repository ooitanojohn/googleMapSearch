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
  /** 文章コンポーネント */
  const text = myCreateElement("div", "");
  /** 画像コンポーネント */
  const img = myCreateElement("div", "", [
    "uk-card-media-left",
    "uk-cover-container",
  ]);
  cardComponent.appendChild(text);
  cardComponent.appendChild(img);
  return cardComponent;
};

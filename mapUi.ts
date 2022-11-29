/** map UI系  */

/**
 * element作成関数
 * @param tag htmlタグ
 * @param text htmlテキスト 省略可
 * @param className クラス名 省略可
 * @param AttributeObj 属性obj 省略可
 */
const myCreateElement = (
  tag: string,
  text: string = '',
  className: string = '',
  AttributeObj: object = { id: '' }
): HTMLElement => {
  const myElement = document.createElement(tag);
  myElement.textContent = text;
  myElement.classList.add(className);
  for (const [key, value] of Object.entries(AttributeObj)) {
    myElement.setAttribute(key, value);
  }
  return myElement;
};
// const myCreateFormElement = (
//   tag: string,
//   text: string = '',
//   className: string = '',
//   AttributeObj: object = { id: '' }
// ): HTMLFormElement => {
//   const myFormElement: HTMLFormElement = document.createElement(tag);
//   myFormElement.textContent = text;
//   myFormElement.classList.add(className);
//   for (const [key, value] of Object.entries(AttributeObj)) {
//     myFormElement.setAttribute(key, value);
//   }
//   return myFormElement;
// };

/** 現在地探すボタン作成 */
export const locationButton = myCreateElement(
  'button',
  '現在値を取得',
  'searchButton'
);

/** 検索ボタン作成 */
const searchButton = myCreateElement('button', '検索', 'searchButton');
/** 検索テキスト作成 */
const searchText = myCreateElement('input', '', 'searchText', {
  placeholder: '検索したい場所を入力してください',
  type: 'text',
  value: '',
  name: 'searchText',
});
/** 検索フォーム作成 */
const form = myCreateElement('form', '', 'temp', {
  method: 'post',
});
form.appendChild(searchText);
form.appendChild(searchButton);
export const searchForm = form;

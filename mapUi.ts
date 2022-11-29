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
/**
 * ボタン系
 */
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

/**
 * marker系
 */
/** svgPath */
const svgPath =
  'M10.453 14.016l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406zM12 2.016q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z';
/** 地図上のmarkerの初期化 */
export const addMarker = (
  location: google.maps.LatLngLiteral,
  map: google.maps.Map
): any => {
  /** marker icon Svg */
  const svgMarker = {
    path: svgPath,
    fillColor: 'blue',
    fillOpacity: 0.6,
    strokeWeight: 0,
    rotation: 0,
    scale: 2,
    anchor: new google.maps.Point(15, 30),
  };
  return new google.maps.Marker({
    map: map,
    icon: svgMarker,
    animation: google.maps.Animation.DROP,
    position: location,
  });
};

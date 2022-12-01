/** map UI系  */

/**
 * element作成関数
 * @param tag htmlタグ
 * @param text htmlテキスト 省略可
 * @param className クラス名 省略可
 * @param AttributeObj 属性obj 省略可
 * @return HTMLElement
 */
export const myCreateElement = (
  tag: string,
  text: string = "",
  className: string | Array<string> = "",
  AttributeObj: object | null = null
): HTMLElement => {
  const myElement = document.createElement(tag);
  if (text !== "") myElement.textContent = text;
  if (typeof className === "string" && className !== "") {
    myElement.classList.add(className);
  } else if (typeof className === "object") {
    for (const name of className) {
      myElement.classList.add(name);
    }
  }

  if (AttributeObj !== null) {
    for (const [key, value] of Object.entries(AttributeObj)) {
      myElement.setAttribute(key, value);
    }
  }
  return myElement;
};

/**
 * marker系
 */
/** 地図上のmarkerの初期化 */
export const addMarker = (
  location: google.maps.LatLngLiteral,
  map: google.maps.Map
): any => {
  /** marker icon Svg */
  const svgMarker = {
    path: svgPath,
    fillColor: "blue",
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
/** svgPath */
const svgPath =
  "M10.453 14.016l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406zM12 2.016q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z";

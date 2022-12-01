import { myCreateElement } from "../mapUi";

/** webIcon */
export const createWebIconComponent = () => {
  const div = myCreateElement("div", "", ["uk-flex", "uk-flex-middle"]);
  const www = myCreateElement("span", "", "uk-margin-small-right", {
    "uk-icon": "world",
  });
  div.appendChild(www);
  return div;
};
/** HomeIcon */
export const createHomeIconComponent = () => {
  const div = myCreateElement("div", "", ["uk-flex", "uk-flex-middle"]);
  const home = myCreateElement("span", "", "uk-margin-small-right", {
    "uk-icon": "home",
  });
  div.appendChild(home);

  return div;
};
/** Link */
export const createLinkIconComponent = () => {
  const div = myCreateElement("div", "", ["uk-flex", "uk-flex-middle"]);
  const link = myCreateElement("span", "", "uk-margin-small-right", {
    "uk-icon": "link",
  });
  div.appendChild(link);

  return div;
};

/** SignIn */
export const createSignInIconComponent = () => {
  const div = myCreateElement("div", "", ["uk-flex", "uk-flex-middle"]);
  const signIn = myCreateElement("span", "", "uk-margin-small-right", {
    "uk-icon": "sign-in",
  });
  div.appendChild(signIn);

  return div;
};

/** SignOut */
export const createSignOutIconComponent = () => {
  const div = myCreateElement("div", "", ["uk-flex", "uk-flex-middle"]);
  const signOut = myCreateElement("span", "", "uk-margin-small-right", {
    "uk-icon": "world",
  });
  div.appendChild(signOut);

  return div;
};
/** 電話 */
export const createTellIconComponent = () => {
  const div = myCreateElement("div", "", ["uk-flex", "uk-flex-middle"]);
  const receiver = myCreateElement("span", "", "uk-margin-small-right", {
    "uk-icon": "receiver",
  });
  div.appendChild(receiver);

  return div;
};

/** 地図 */
export const createLocationIconComponent = () => {
  const div = myCreateElement("div", "", ["uk-flex", "uk-flex-middle"]);
  const location = myCreateElement("span", "", "uk-margin-small-right", {
    "uk-icon": "location",
  });
  div.appendChild(location);

  return div;
};
/** 時間 */
export const createClockIconComponent = () => {
  const div = myCreateElement("div", "", ["uk-flex", "uk-flex-middle"]);
  const clock = myCreateElement("span", "", "uk-margin-small-right", {
    "uk-icon": "clock",
  });
  div.appendChild(clock);

  return div;
};

/** ☆ */
/** 時間 */
export const createStarIconComponent = () => {
  const div = myCreateElement("div", "", ["uk-flex", "uk-flex-middle"]);
  const star = myCreateElement("span", "", "uk-margin-small-right", {
    "uk-icon": "star",
  });
  div.appendChild(star);

  return div;
};

import { myCreateElement } from "../mapUi";
/** 検索フォーム作成 */
const form = myCreateElement("form", "", "", {
  method: "post",
});
const span = myCreateElement("span", "", "", { "uk-search-icon": "" });
/** 検索ボタン作成 */
const searchButton = myCreateElement("button", "検索", "searchButton");
/** 検索テキスト作成 */
const searchText = myCreateElement("input", "", "searchText", {
  placeholder: "検索したい場所を入力してください",
  type: "text",
  value: "",
  name: "searchText",
});
form.appendChild(span);
form.appendChild(searchText);
form.appendChild(searchButton);
export const searchForm = form;

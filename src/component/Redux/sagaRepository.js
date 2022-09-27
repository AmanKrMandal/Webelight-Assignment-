import { put, takeEvery } from "redux-saga/effects";
import { SEND_A_REPO, SET_DATA_REPOS } from "./constant"



function* mySaga() {
  yield takeEvery(SEND_A_REPO, getData);
  // console.warn(mySaga)
}
// console.warn(mySaga)

function* getData() {
  // console.warn("gdfsdss")
  let data = yield fetch(
   "https://api.github.com/search/repositories?q=created:%3E2017-10-22&sort=stars&order=desc"
  );
  data = yield data.json();
  // console.warn(data);
  yield put({
    type: SET_DATA_REPOS,
    data,
  });
}

export default mySaga;

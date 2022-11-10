import { takeLatest, put } from 'redux-saga/effects'
import {
  SEARCH_DATA_REQUESTED,
  searchDataSucceed,
  searchDataFailed,
} from './search_actions'
import {BASE_PATH} from "../../../utils/constants";


export function* getSearchingSaga() {
  try {
    const response = yield fetch(BASE_PATH)
    const data = yield response.json()

    yield put(searchDataSucceed(data))
  } catch (e) {
    yield put(searchDataFailed(e.message))
  }
}

export default function* searchSaga() {
  yield takeLatest(SEARCH_DATA_REQUESTED, getSearchingSaga)
}

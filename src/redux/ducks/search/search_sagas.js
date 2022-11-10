import { takeLatest, put } from 'redux-saga/effects'
import {
  SEARCH_DATA_REQUESTED,
  searchDataSucceed,
  searchDataFailed,
} from './search_actions'


export function* getSearchingSaga(action) {
  try {
    const path = `
      ${action.payload.searchingString} 
      ${action.payload.start}
      ${action.payload.end}
      ${action.payload.adults}
      ${action.payload.childrenAge}
      ${action.payload.rooms}
    `;
    const response = yield fetch(path)
    const data = yield response.json()

    yield put(searchDataSucceed(data))
  } catch (e) {
    yield put(searchDataFailed(e.message))
  }
}

export default function* searchSaga() {
  yield takeLatest(SEARCH_DATA_REQUESTED, getSearchingSaga)
}

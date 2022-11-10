import { all } from 'redux-saga/effects'
import searchSaga from './ducks/search/search_sagas'
import uptateSaga from "./ducks/singUpForUpdates/updates_sagas";

export default function* rootSaga() {
    yield all([searchSaga(), uptateSaga()])
}

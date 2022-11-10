import { takeLatest, put } from 'redux-saga/effects'
import { BASKET_POSTED, basketFailed, basketSucceed} from "./procced_actions";


export function* getProccedSaga(action) {
    try {
        const response = yield fetch('https://modnikky-api.herokuapp.com/api/cart', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({  "products": action.payload }),
        })
        const res = yield response.json()

        yield put(basketSucceed(JSON.stringify(res)))
    } catch (e) {
        yield put(basketFailed(e.message))
    }
}

export default function* proccedBasketSaga() {
    yield takeLatest(BASKET_POSTED, getProccedSaga)
}

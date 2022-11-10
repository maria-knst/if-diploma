import { takeLatest, put } from 'redux-saga/effects'
import { emailFailed, EMAIL_POSTED, emailSucceed } from "./updates_actions";


export function* getUpdateSaga(action) {
    try {
        const response = yield fetch('https://modnikky-api.herokuapp.com/api/subscription', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({  "email": `${action.payload}` }),
        })
        const res = yield response.json()

        yield put(emailSucceed(JSON.stringify(res)))
    } catch (e) {
        yield put(emailFailed(e.message))
    }
}

export default function* uptateSaga() {
    yield takeLatest(EMAIL_POSTED, getUpdateSaga)
}

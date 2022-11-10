import { basketPosted, basketSucceed, basketFailed} from "./procced_actions";
import { handleActions } from 'redux-actions'

export const initialState = {
    products: '',
    error: null,
    loading: false,
    message: '',
}

const handlers = {
    [basketPosted]: (state, action) => ({
        ...state,
        products: action.payload,
        loading: true,
    }),
    [basketSucceed]: (state, action) => ({
        ...state,
        loading: false,
        error: null,
        message: action.payload,
    }),
    [basketFailed]: (state, action) => ({
        ...state,
        loading: false,
        email: '',
        error: action.payload,
    }),
}

export default handleActions(handlers, initialState)

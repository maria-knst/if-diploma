import { emailPosted, emailFailed, emailSucceed} from "./updates_actions";
import { handleActions } from 'redux-actions'

export const initialState = {
    email: '',
    error: null,
    loading: false,
    message: '',
}

const handlers = {
    [emailPosted]: (state, action) => ({
        ...state,
        email: action.payload,
        loading: true,
    }),
    [emailSucceed]: (state, action) => ({
        ...state,
        loading: false,
        error: null,
        message: action.payload,
    }),
    [emailFailed]: (state, action) => ({
        ...state,
        loading: false,
        email: '',
        error: action.payload,
    }),
}

export default handleActions(handlers, initialState)

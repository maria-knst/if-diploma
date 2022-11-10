import { setAuthorize } from './authoriz_actions'
import { handleActions } from 'redux-actions'

export const initialState = {
  isAuthorize: false,
}

const handlers = {
  [setAuthorize]: (state, action) => ({
    ...state,
    isAuthorize: action.payload,
  }),

}

export default handleActions(handlers, initialState)

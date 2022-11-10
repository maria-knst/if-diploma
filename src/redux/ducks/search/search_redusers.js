import {
  searchDataRequested,
  searchDataFailed,
  searchDataSucceed,
} from './search_actions'
import { handleActions } from 'redux-actions'

export const initialState = {
  data: [],
  error: null,
  loading: false,
}

const handlers = {
  [searchDataRequested]: (state) => ({
    ...state,
    loading: true,
  }),
  [searchDataSucceed]: (state, action) => ({
    ...state,
    loading: false,
    error: null,
    data: action.payload,
  }),
  [searchDataFailed]: (state, action) => ({
    ...state,
    loading: false,
    error: action.payload,
  }),
}

export default handleActions(handlers, initialState)

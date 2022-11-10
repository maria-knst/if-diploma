import { generateSearchingString} from "./searchingString_actions";
import { handleActions } from 'redux-actions'

export const initialState = {
    searchString: '',
}

const handlers = {
    [generateSearchingString]: (state, action) => ({
        ...state,
        searchString: action.payload,
    }),

}

export default handleActions(handlers, initialState)

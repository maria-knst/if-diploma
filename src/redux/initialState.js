import { initialState as initialAuthorizeState } from './ducks/authorization/authoriz_redusers'
import { initialState as initialSearchState } from './ducks/search/search_redusers'
import { initialState as initialBasketState } from "./ducks/basketAdditing/basket_redusers";

const initialState = {
    authorization: initialAuthorizeState,
    search: initialSearchState,
    basket: initialBasketState,
}

export default initialState

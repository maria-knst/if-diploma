import { initialState as initialAuthorizeState } from './ducks/authorization/authoriz_redusers'
import { initialState as initialSearchState } from './ducks/search/search_redusers'
import { initialState as initialBasketState } from "./ducks/basketAdditing/basket_redusers";
import { initialState as initialUpdatesState } from "./ducks/singUpForUpdates/updates_redusers";
import { initialState as initialProccedState } from "./ducks/proccedBasket/procced_redusers";

const initialState = {
    authorization: initialAuthorizeState,
    search: initialSearchState,
    basket: initialBasketState,
    updates: initialUpdatesState,
    proccedBasket: initialProccedState,
}

export default initialState

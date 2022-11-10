import { combineReducers } from 'redux'
import authorizationReduser from './ducks/authorization/authoriz_redusers'
import searchReduser from './ducks/search/search_redusers'
import basketReduser from './ducks/basketAdditing/basket_redusers'
import updateReduser from './ducks/singUpForUpdates/updates_redusers'
import proccedBasketReduser from './ducks/proccedBasket/procced_redusers'

export default combineReducers({
    authorization: authorizationReduser,
    search: searchReduser,
    basket: basketReduser,
    updates: updateReduser,
    proccedBasket: proccedBasketReduser,
})

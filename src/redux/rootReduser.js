import { combineReducers } from 'redux'
import authorizationReduser from './ducks/authorization/authoriz_redusers'
import searchReduser from './ducks/search/search_redusers'
import basketReduser from './ducks/basketAdditing/basket_redusers'
import updateReduser from './ducks/singUpForUpdates/updates_redusers'
import proccedBasketReduser from './ducks/proccedBasket/procced_redusers'
import searchStrReduser from './ducks/searchingString/searchingString_redusers'
import favouritesReduser from './ducks/favouritesAdditing/favourites_redusers'

export default combineReducers({
    authorization: authorizationReduser,
    search: searchReduser,
    basket: basketReduser,
    updates: updateReduser,
    proccedBasket: proccedBasketReduser,
    searchStr: searchStrReduser,
    favourites: favouritesReduser,
})

import "./App.scss";
import TopSection from "../TopSection/TopSection";
import CategoriesSection from "../CategoriesSection/CategoriesSection";
import FooterSection from "../FooterSection/FooterSection";
import SalesItemsSection from "../SalesItemsSection/SalesItemsSection";
import SignUpSection from "../SignUpSection/SignUpSection";
import ShopInstagramSection from "../ShopInstagramSection/ShopInstagramSection";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LogInSection from "../LogInSection/LogInSection";
import ItemPage from "../ItemPage/ItemPage";
import BasketSection from "../BasketSection/BasketSection";

import { isAuthorizeSelector } from "../../redux/ducks/authorization/authoriz_selectors";
import { basketDataSelector} from "../../redux/ducks/basketAdditing/basket_selectors";
import { searchingStringSelector } from "../../redux/ducks/searchingString/searchingString_selectors";
import { availableItemsSelector } from "../../redux/ducks/search/search_selectors";
import {useSelector} from "react-redux";
import FilteredItemsSection from "../FilteredItemsSection/FilteredItemsSection";
import FavoritesSection from "../FavoritesSection/FavoritesSection";
import {favouritesDataSelector} from "../../redux/ducks/favouritesAdditing/favourites_selectors";

function App() {
  const isAuthorize = useSelector(isAuthorizeSelector)
  const basketItems = useSelector(basketDataSelector)
  const favouritesItems = useSelector(favouritesDataSelector)
  const searchStr = useSelector(searchingStringSelector)
  const itemsArray = useSelector(availableItemsSelector)

  const getFilteredItems = () => {
    const str = searchStr.toLowerCase();
    return itemsArray.filter((innerItem) => innerItem.name.toLowerCase().includes(str) ||  innerItem.type.toLowerCase().includes(str));
  }


  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="App">
              <TopSection />
              {!!searchStr.length && <div className='container'><FilteredItemsSection items={getFilteredItems()}/></div>}
              <CategoriesSection />
              <SalesItemsSection />
              <ShopInstagramSection />
              {!isAuthorize && <SignUpSection />}
              <FooterSection />
            </div>
          }
        />
        <Route
          path="/authorization"
          element={<LogInSection />}
        />
        <Route
          path="/catalog/:itemId"
          element={<ItemPage/>}
        />
        <Route path='/basket' element={<BasketSection isAuthorize={isAuthorize} items={basketItems} />}/>
        <Route path='/favorites' element={<FavoritesSection items={favouritesItems}/>} />
      </Routes>
    </Router>
  );
}

export default App;

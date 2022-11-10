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
import {useSelector} from "react-redux";

function App() {
  const isAuthorize = useSelector(isAuthorizeSelector)
  const basketItems = useSelector(basketDataSelector)

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="App">
              <TopSection />
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
      </Routes>
    </Router>
  );
}

export default App;

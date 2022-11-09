import "./App.scss";
import TopSection from "../TopSection/TopSection";
import CategoriesSection from "../CategoriesSection/CategoriesSection";
import FooterSection from "../FooterSection/FooterSection";
import SalesItemsSection from "../SalesItemsSection/SalesItemsSection";
import SignUpSection from "../SignUpSection/SignUpSection";
import ShopInstagramSection from "../ShopInstagramSection/ShopInstagramSection";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import LogInSection from "../LogInSection/LogInSection";
import ItemPage from "../ItemPage/ItemPage";
import BasketSection from "../BasketSection/BasketSection";
import {CLOTHES_ITEMS} from "../../utils/constants";

function App() {
  const [isAuthorize, setAuthorize] = useState(false);

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
          element={<LogInSection setAuthorize={setAuthorize} />}
        />
        <Route
          path="/catalog/:itemId"
          element={<ItemPage isAuthorize={isAuthorize} />}
        />
        <Route path='/basket' element={<BasketSection isAuthorize={isAuthorize} items={CLOTHES_ITEMS} />}/>
      </Routes>
    </Router>
  );
}

export default App;

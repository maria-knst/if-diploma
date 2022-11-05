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

function App() {
  const [isAuthorize, setAuthorize] = useState(false);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="App">
              {isAuthorize ? (
                <>
                  {" "}
                  <TopSection />
                  <CategoriesSection />
                  <SalesItemsSection />
                  <ShopInstagramSection />
                  <SignUpSection />
                  <FooterSection />
                </>
              ) : (
                <LogInSection setAuthorize={setAuthorize}/>
              )}
            </div>
          }
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;

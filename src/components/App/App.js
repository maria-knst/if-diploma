import "./App.scss";
import TopSection from "../TopSection/TopSection";
import CategoriesSection from "../CategoriesSection/CategoriesSection";
import FooterSection from "../FooterSection/FooterSection";
import SalesItemsSection from "../SalesItemsSection/SalesItemsSection";
import SignUpSection from "../SignUpSection/SignUpSection";
import ShopInstagramSection from "../ShopInstagramSection/ShopInstagramSection";

function App() {
  return (
    <div className="App">
      <TopSection />
      <CategoriesSection />
      <SalesItemsSection />
      <ShopInstagramSection />
      <SignUpSection />

      <FooterSection />
    </div>
  );
}

export default App;

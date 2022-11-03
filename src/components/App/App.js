import "./App.scss";
import TopSection from "../TopSection/TopSection";
import CategoriesSection from "../CategoriesSection/CategoriesSection";
import FooterSection from "../FooterSection/FooterSection";
import SalesItemsSection from "../SalesItemsSection/SalesItemsSection";

function App() {
  return (
    <div className="App">
      <TopSection />
      <CategoriesSection />
      <SalesItemsSection />

      <FooterSection />
    </div>
  );
}

export default App;

import './App.scss'
import TopSection from "../TopSection/TopSection";
import CategoriesSection from "../CategoriesSection/CategoriesSection";
import FooterSection from "../FooterSection/FooterSection";


function App() {
  return <div className="App">
    <TopSection />
    <CategoriesSection/>

    <FooterSection/>
  </div>;
}

export default App;

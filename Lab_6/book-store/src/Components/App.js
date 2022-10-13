import "../ComponentsStyle/App.css";
import Header from "./Header.js";
import Hero from "./Hero";
import ItemsSlider from "./ItemsSlider";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Header />
        <Hero />
        <ItemsSlider />
      <Footer />
    </div>
  );
}

export default App;

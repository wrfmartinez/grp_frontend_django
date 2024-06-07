import "./App.css";
import Hero from "./components/Hero";
import Product from "./components/Product";
import Products from "./components/Products";
import Search from "./components/Search";

function App() {
  return (
    <>
      <Hero />
      <main>
        <Products />
      </main>
    </>
  );
}

export default App;

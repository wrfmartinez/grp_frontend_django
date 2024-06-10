import "./App.css";
import { Link } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <main>
        <Navbar />
        <div className="home-hero">
          <img className="home-logo" src="/totalhome.svg" alt="logo" />
          <h1>Welcome to Total Home</h1>
          <Link className="btn shop-products" to="/shop-products">Shop Products</Link>
        </div>
      </main>
    </>
  );
}
export default App;

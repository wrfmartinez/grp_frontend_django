import "./css/Products.css";
import productsAPI from "../services/productsAPI";
import { useLocation } from "react-router-dom";

const Products = () => {
  const location = useLocation();
  const productsList = productsAPI.show();

  const filterProducts = () => {
    const category = location.pathname.split('/').pop();
    if (category === "shop-products" || category === "all") {
      return productsList;
    }
    return productsList.filter(product => product.category.toLowerCase().includes(category));
  };

  const filteredProducts = filterProducts();

  return (
    <section id="products">
      <div className="products-container">
        <div className="products-grid">
          {filteredProducts.map((product, index) => (
            <div className="product-container" key={index}>
              <div className="product-img-container">
                <img className="product-img" src={product.url} alt={product.desc}></img>
              </div>
              <h3 className="product-title">{product.title}</h3>
              <p className="product-desc">{product.desc}</p>
              <p className="product-price">${product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;

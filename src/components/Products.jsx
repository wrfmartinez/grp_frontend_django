import { useEffect, useState } from "react";
import "./css/Products.css";
import productsAPI from "../services/productsAPI";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [categorizedProducts, setCategorizedProducts] = useState([]);

  const fetchCategorizedProducts = async () => {
    const endpoint = "all-products";
    try {
      const data = await productsAPI.show(endpoint);
      setCategorizedProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const fetchAllProducts = async () => {
    const endpoint = "all-products";
    try {
      const data = await productsAPI.show(endpoint);
      // Transform nested structure to flat array
      const allProducts = Object.values(data).flat();
      setProducts(allProducts);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchAllProducts();
    fetchCategorizedProducts();
  }, []);

  const filterProductsByCategory = (category) => {
    if (category === "all" || category === "shop-products") {
      return products;
    } else {
      return categorizedProducts[category] || [];
    }
  };

  const filteredProducts = filterProductsByCategory(
    location.pathname.split("/").pop()
  );

  return (
    <section id="products">
      <div className="products-container">
        <div className="products-grid">
          {filteredProducts.map((product, index) => (
            <div key={index} className="product-container">
              <div className="product-img-container">
                <img
                  className="product-img"
                  src={product.image_url}
                  alt={product.model || product.item}
                />
              </div>
              <h3 className="product-title">{product.model || product.item}</h3>
              <h3 className="product-desc">
                {product.material || product.brand}
              </h3>
              <p className="product-price">${product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;

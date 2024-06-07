import "./css/Product.css";

const Product = () => {
  return (
    <section id="product-display">
      <div className="center-container">
        <div className="product-display-grid">
          <div className="product-display-img-container">
            <img className="product-display-img" src="" alt="" />
          </div>
          <div className="product-display-desc-container">
            <h2 className="product-display-title">Item 1</h2>
            <h3 className="product-display-price">$99</h3>
            <p className="product-display-desc">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Aspernatur aut soluta quo, dignissimos perspiciatis modi? Hic, eos
              nobis quae laudantium repellat, quod labore nostrum molestiae,
              nemo provident repellendus libero atque.
            </p>
            <div  className="product-display-quantity-box">
            <button className="minus-btn">&#8722;</button>
            <span className="product-display-quantity">1</span>
            <button className="plus-btn">&#43;</button>
            </div>
            <button className="btn add-to-cart">Add to Cart - $99</button>
            <button className="btn buy-now">Buy Now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;

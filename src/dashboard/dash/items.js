import React, { useEffect, useState } from "react";

const Items = ({ searchTerm }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Filter products by category if searchTerm is present
  const filteredProducts = products.filter((product) =>
    product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="itemdown">
      <div className="card offercard">
        <div className="offer">
          <div className="card shoppingcart">
            <i className="fa fa-shopping-cart"></i>
            <p>Orders</p>
          </div>
          <div className="card shoppingcart">
            <i className="fa fa-eye"></i>
            <p>Watchlist</p>
          </div>
          <div className="card shoppingcart">
            <i className="fa fa-tag"></i>
            <p>Coupons</p>
          </div>
          <div className="card shoppingcart">
            <i className="fa fa-question-circle"></i>
            <p>Help Center</p>
          </div>
        </div>
      </div>

      <br />
      <div className="sugcard">
        <h1>Suggested for you</h1>
        <div className="product-wrapper">
          <div className="suggestion">
            {filteredProducts.map((product) => (
              <div className="suggestion-card" key={product.id}>
                <img src={product.image} alt={product.title} />
                <p className="price">${product.price.toFixed(2)}</p>
                <p className="category">{product.category}</p>
                <p className="rating">
                  <i className="fa fa-star"></i>
                  Rating: {product.rating?.rate || "N/A"}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Items;

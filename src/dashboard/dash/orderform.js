import React, { useEffect, useState } from "react";
import { useCount } from "../context/contextprovider";

const OrderForm = ({ searchQuery, count, setCount }) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [displayForm, setDisplayForm] = useState(false);
  const [isCategoryDropdown, setIsCategoryDropdown] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const { addtocart, setAddtocart } = useCount();
  const [likedProducts, setLikedProducts] = useState([]);
  const handleHeartClick = (productId) => {
    setLikedProducts(
      (prev) =>
        prev.includes(productId)
          ? prev.filter((id) => id !== productId) // Remove if already liked
          : [...prev, productId] // Add if not liked
    );
  };

  const [selectedProduct, setSelectedProduct] = useState({
    price: "",
    category: "",
    rating: "",
    avaliable: "",
  });

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleaddtocart = () => {
    setAddtocart(addtocart + 1);
    setDisplayForm(false);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
        const uniqueCategories = [
          ...new Set(data.map((product) => product.category)),
        ];
        setCategories(uniqueCategories);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleProductSelect = (product) => {
    setSelectedProduct({
      price: product.price,
      category: product.category,
      rating: product.rating?.rate,
      avaliable: product.rating?.count,
      image: product.image,
    });
    setDisplayForm(true);
    // setIsCategoryDropdown(false);
    setCount(0);
  };

  const handleCategorySelect = (category) => {
    const product = products.find((prod) => prod.category === category);
    if (product) {
      setSelectedProduct({
        price: product.price,
        category: product.category,
        rating: product.rating?.rate,
        avaliable: product.rating?.count,
      });
    }
    setSelectedCategory(category);
  };

  const handleBuyClick = () => {
    setDisplayForm(true);
    setIsCategoryDropdown(true);
    setSelectedCategory("");
    setSelectedProduct({
      price: "",
      category: "",
      rating: "",
      avaliable: "",
    });
  };

  // Filter products and categories based on search query
  const filteredProducts = products.filter((product) => {
    const search = searchQuery.toLowerCase();
    const matchesSearch =
      product.title.toLowerCase().includes(search) ||
      product.category.toLowerCase().includes(search);

    const matchesCategory =
      selectedCategory === "" || product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const filteredCategories = categories.filter((category) =>
    category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) {
    return <p>Loading products...</p>;
  }
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="ordernew">
      <div className="items">
        {categories.map((category, index) => (
          <div key={index} className="item">
            <img
              className="orderimage"
              src={products.find((p) => p.category === category)?.image}
              alt={category}
              onClick={() => handleCategoryClick(category)}
            />
            <p>{category}</p>
          </div>
        ))}
      </div>

      <div style={{ display: "grid", justifyContent: "end" }}>
        <button className="addorder" onClick={handleBuyClick}>
          Buy
        </button>
      </div>
      <br />
      {displayForm && (
        <div
          className="modal show modalview"
          tabIndex="-1"
          style={{
            display: "block",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title">Buy</h1>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setDisplayForm(false)}
                ></button>
              </div>
              <div className="formcard" style={{ marginTop: "-10px" }}>
                <form>
                  {isCategoryDropdown ? (
                    <div className="mb-3">
                      <label htmlFor="category" className="form-label">
                        Select Category
                      </label>
                      <select
                        className="form-control"
                        id="category"
                        value={selectedCategory}
                        onChange={(e) => handleCategorySelect(e.target.value)}
                      >
                        <option value="">-- Select a category --</option>
                        {filteredCategories.map((category) => (
                          <option key={category} value={category}>
                            {category}
                          </option>
                        ))}
                      </select>
                    </div>
                  ) : (
                    <div className="mb-3">
                      <label htmlFor="category" className="form-label">
                        Category
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="category"
                        value={selectedProduct.category}
                        readOnly
                      />
                    </div>
                  )}
                  {selectedProduct.category && (
                    <>
                      {selectedProduct.image && (
                        <div className="mb-3">
                          <img
                            src={selectedProduct.image}
                            alt="Selected Product"
                            className=" formimg"
                          />
                        </div>
                      )}
                      <div className="price">
                        <div className="mb-3">
                          <label htmlFor="price" className="form-label">
                            Price
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="price"
                            value={selectedProduct.price}
                            readOnly
                          />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="rating" className="form-label">
                            Rating
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="rating"
                            value={selectedProduct.rating}
                            readOnly
                          />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="avaliable" className="form-label">
                            In Stock
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="avaliable"
                            value={selectedProduct.avaliable}
                            readOnly
                          />
                        </div>
                      </div>
                    </>
                  )}
                  <div className="addtocard">
                    <div className="plus" onClick={handleIncrement}>
                      +
                    </div>
                    <div className="add" onClick={handleaddtocart}>
                      {count <= 0 ? "Add to Cart" : count}
                    </div>
                    <div
                      className="minus"
                      onClick={() => setCount(count > 0 ? count - 1 : 0)}
                    >
                      -
                    </div>
                  </div>
                  <br />
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="product-container">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-cards">
            <i
              className={`fa ${
                likedProducts.includes(product.id) ? "fa-heart" : "fa-heart-o"
              } heart-icon`}
              style={{
                display: "flex",
                justifyContent: "end",
                fontSize: "20px",
                cursor: "pointer",
              }}
              onClick={() => handleHeartClick(product.id)}
            ></i>
            <img
              src={product.image}
              alt={product.title}
              className="product-image"
            />
            <h5>{product.title}</h5>
            <p className="price">${product.price.toFixed(2)}</p>
            <p className="category">{product.category}</p>
            <p className="rating">
              <i className="fa fa-star"></i> Rating:{" "}
              {product.rating?.rate || "N/A"}
            </p>
            <button
              className="add-to-cart-btn"
              onClick={() => handleProductSelect(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderForm;

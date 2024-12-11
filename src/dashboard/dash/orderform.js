import React, { useEffect, useState } from "react";

const OrderForm = ({ count, setCount }) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [displayForm, setDisplayForm] = useState(false);
  const [isCategoryDropdown, setIsCategoryDropdown] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedProduct, setSelectedProduct] = useState({
    price: "",
    category: "",
    rating: "",
    avaliable: "",
  });

  const handleIncrement = () => {
    setCount(count + 1);
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
    });
    setDisplayForm(true);
    setIsCategoryDropdown(false);
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

  if (loading) {
    return <p>Loading products...</p>;
  }

  return (
    <div className="ordernew">
      <div style={{ display: "grid", justifyContent: "end" }}>
        <button className="addorder" onClick={handleBuyClick}>
          Buy
        </button>
      </div>

      {/* Modal */}
      {displayForm && (
        <div
          className="modal show"
          tabIndex="-1"
          style={{ display: "block", backgroundColor: "rgba(0, 0, 0, 0.5)" }}
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
              <div className="modal-body">
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
                        {categories.map((category) => (
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
                    </>
                  )}
                  <div className="addtocard">
                    <div className="plus" onClick={handleIncrement}>
                      +
                    </div>
                    <div className="add">Add to cart</div>
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

      {/* Product Table */}
      <div className="recent_order">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Price</th>
              <th>Category</th>
              <th>Rating</th>
              <th>Add to cart</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.title}</td>
                <td className="warning">${product.price.toFixed(2)}</td>
                <td className="success">{product.category}</td>
                <td>{product.rating?.rate}</td>
                <td onClick={() => handleProductSelect(product)}>+</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderForm;

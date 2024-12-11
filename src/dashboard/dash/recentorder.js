import React, { useEffect, useState } from "react";
import Percentage from "./percentage";
const RecentOrder = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [income, setIncome] = useState(0);
  const [sales, setSales] = useState(0);
  const [expenses, setExpenses] = useState(0);

  const [maxIncome, setMaxIncome] = useState(100); // Default max values
  const [maxSales, setMaxSales] = useState(100);
  const [maxExpenses, setMaxExpenses] = useState(100);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);

        // Example: Dynamically calculate totals
        const totalIncome = data.reduce(
          (sum, product) => sum + product.price,
          0
        );
        const totalSales = totalIncome * 0.6; // Assume 60% of income is sales
        const totalExpenses = totalIncome * 0.4; // Assume 40% of income is expenses

        setIncome(totalIncome);
        setSales(totalSales);
        setExpenses(totalExpenses);

        // Set max values for calculations
        setMaxIncome(totalIncome * 1.5); // Example: 1.5x income
        setMaxSales(totalSales * 1.2); // Example: 1.2x sales
        setMaxExpenses(totalExpenses * 1.3); // Example: 1.3x expenses

        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <p>Loading products...</p>;
  }

  return (
    <>
      <Percentage
        income={income}
        maxIncome={maxIncome}
        sales={sales}
        maxSales={maxSales}
        expenses={expenses}
        maxExpenses={maxExpenses}
      />
      <div className="recent_order">
        <h1>Recent Order</h1>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Price</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {products.slice(0, 5).map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.title}</td>
                <td className="warning">${product.price.toFixed(2)}</td>
                <td className="success">{product.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default RecentOrder;

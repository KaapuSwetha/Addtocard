import React from "react";
const Percentage = ({
  income,
  maxIncome,
  sales,
  maxSales,
  expenses,
  maxExpenses,
}) => {
  const calculatePercentage = (value, max) =>
    max > 0 ? (value / max) * 100 : 0;

  return (
    <div className="insights">
      {/* Sales Section */}
      <div className="sales">
        <span className="material-symbol-sharp">
          <i className="fa fa-bitcoin"></i>
        </span>
        <div className="middle">
          <div className="left">
            <h3>Total Sales</h3>
            <h1>${sales ? sales.toFixed(2) : "0.00"}</h1>
          </div>
          <div className="progress">
            <svg>
              <circle r="30" cy="35" cx="35"></circle>
            </svg>
            <div className="number">
              {calculatePercentage(sales, maxSales).toFixed(1)}%
            </div>
          </div>
        </div>
        <small>Last 24 Hours</small>
      </div>

      {/* Expenses Section */}
      <div className="expenses">
        <span className="material-symbol-sharp">
          <i className="fa fa-bitcoin"></i>
        </span>
        <div className="middle">
          <div className="left">
            <h3>Total Expenses</h3>
            <h1>${expenses ? expenses.toFixed(2) : "0.00"}</h1>
          </div>
          <div className="progress">
            <svg>
              <circle r="30" cy="35" cx="35"></circle>
            </svg>
            <div className="number">
              {calculatePercentage(expenses, maxExpenses).toFixed(1)}%
            </div>
          </div>
        </div>
        <small>Last 24 Hours</small>
      </div>

      {/* Income Section */}
      <div className="income">
        <span className="material-symbol-sharp">
          <i className="fa fa-bitcoin"></i>
        </span>
        <div className="middle">
          <div className="left">
            <h3>Income</h3>
            <h1>${income ? income.toFixed(2) : "0.00"}</h1>
          </div>
          <div className="progress">
            <svg>
              <circle r="30" cy="35" cx="35"></circle>
            </svg>
            <div className="number">
              {calculatePercentage(income, maxIncome).toFixed(1)}%
            </div>
          </div>
        </div>
        <small>Last 24 Hours</small>
      </div>
    </div>
  );
};

export default Percentage;

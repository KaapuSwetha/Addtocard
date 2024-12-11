import React from "react";
const SalesAnalytics = () => {
  return (
    <div className="sales-anayltics">
      <h2>Sales Analytics</h2>
      <div className="item onlion">
        <div className="icon">
          <span>
            {" "}
            <i class="fa fa-shopping-cart" style={{ fontSize: "30px" }}></i>
          </span>
        </div>
        <div className="right_text">
          <div className="info">
            <h3>Online Order</h3>
            <small className="text-muted">Last seen 2 Hours</small>
          </div>
          <h5 className="danger">-17%</h5>
          <h3>3849</h3>
        </div>
      </div>
      <div className="item onlion">
        <div className="icon">
          <span>
            <i class="fa fa-shopping-cart" style={{ fontSize: "30px" }}></i>
          </span>
        </div>
        <div className="right_text">
          <div className="info">
            <h3>Online Order</h3>
            <small className="text-muted">Last seen 2 Hours</small>
          </div>
          <h5 className="danger">-17%</h5>
          <h3>3849</h3>
        </div>
      </div>
      <div className="item onlion">
        <div className="icon">
          <span>
            {" "}
            <i class="fa fa-shopping-cart" style={{ fontSize: "30px" }}></i>
          </span>
        </div>
        <div className="right_text">
          <div className="info">
            <h3>Online Order</h3>
            <small className="text-muted">Last seen 2 Hours</small>
          </div>
          <h5 className="danger">-17%</h5>
          <h3>3849</h3>
        </div>
      </div>
    </div>
  );
};

export default SalesAnalytics;

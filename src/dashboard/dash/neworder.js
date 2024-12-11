import React, { useState } from "react";
import LeftAside from "./leftaside";
import RecentOrder from "./recentorder";
import Header from "./header";
import OrderForm from "./orderform";
const NewOrder = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(false);
  const [count, setCount] = useState(0);
  return (
    <div className="body">
      <div
        className="container"
        style={{ display: "grid", gridTemplateColumns: "auto auto" }}
      >
        <LeftAside
          isSidebarVisible={isSidebarVisible}
          setSidebarVisible={setSidebarVisible}
        />
        <main>
          <div className="orderheader">
            <Header count={count} setSidebarVisible={setSidebarVisible} />{" "}
          </div>{" "}
          <OrderForm count={count} setCount={setCount} />
        </main>
      </div>
    </div>
  );
};

export default NewOrder;

import React, { useEffect, useState } from "react";
import SalesAnalytics from "./salesanalytics";
import RecentUpdates from "./recentupdates";
import Header from "./header";
import LeftAside from "./leftaside";
import RecentOrder from "./recentorder";
const Responsive = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  return (
    <div className="body">
      <div className="container ">
        <LeftAside
          isSidebarVisible={isSidebarVisible}
          setSidebarVisible={setSidebarVisible}
        />

        <main>
          <h1>DashBoard</h1>
          <div className="date">
            <input type="date" />
          </div>

          <RecentOrder />
        </main>
        {/* right star */}
        <div className="right">
          <Header cartCount={cartCount} setSidebarVisible={setSidebarVisible} />
          <RecentUpdates />
          <SalesAnalytics />
          <div className="item add_products">
            <div>
              <span>+</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Responsive;

import React, { useEffect, useState } from "react";
import SalesAnalytics from "./salesanalytics";
import RecentUpdates from "./recentupdates";
import Header from "./header";
import LeftAside from "./leftaside";
import RecentOrder from "./recentorder";
const Responsive = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [icon, setIcon] = useState(false);
  return (
    <div className="body">
      <div className="container ">
        <LeftAside
          isSidebarVisible={isSidebarVisible}
          setSidebarVisible={setSidebarVisible}
        />

        <main>
          {" "}
          <div className="date">
            {/* <input type="date" /> */}

            <RecentOrder />
          </div>
        </main>
        {/* right star */}
        <div className="right">
          <div className="dashheader">
            <div className="search-bar-container">
              <i className="fa fa-search search-icon"></i>
              <input
                type="text"
                className="search-bar"
                placeholder="Search..."
              />
            </div>

            {icon && (
              <div
                className={`search-container ${icon ? "block" : "hidden"}`}
                style={{
                  display: icon ? "" : "none",
                }}
              >
                <i className="fa fa-search search-icon"></i>
                <input
                  type="text"
                  className="search-bar"
                  placeholder="Search..."
                />
              </div>
            )}
            <Header
              cartCount={cartCount}
              setIcon={setIcon}
              setSidebarVisible={setSidebarVisible}
            />
          </div>

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

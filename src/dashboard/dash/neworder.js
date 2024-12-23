import React, { useState, useEffect } from "react";
import LeftAside from "./leftaside";
import RecentOrder from "./recentorder";
import Header from "./header";
import OrderForm from "./orderform";

const NewOrder = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(false);
  const [count, setCount] = useState(0);
  const [icon, setIcon] = useState(false);
  const [style, setStyle] = useState({
    display: "grid",
    gridTemplateColumns: "14rem auto",
  });
  const [searchQuery, setSearchQuery] = useState(""); // State for search query

  useEffect(() => {
    const mediaQuery1200 = window.matchMedia("(max-width: 1200px)");
    const mediaQuery768 = window.matchMedia("(max-width: 768px)");

    const handleMediaChange = () => {
      if (mediaQuery768.matches) {
        setStyle({
          display: "grid",
          gridTemplateColumns: "7rem 100rem",
        });
      } else if (mediaQuery1200.matches) {
        setStyle({
          display: "grid",
          gridTemplateColumns: "7rem auto",
        });
      } else {
        setStyle({
          display: "grid",
          gridTemplateColumns: "14rem auto",
        });
      }
    };

    handleMediaChange();

    mediaQuery1200.addEventListener("change", handleMediaChange);
    mediaQuery768.addEventListener("change", handleMediaChange);

    return () => {
      mediaQuery1200.removeEventListener("change", handleMediaChange);
      mediaQuery768.removeEventListener("change", handleMediaChange);
    };
  }, []);

  return (
    <div className="body">
      <div className="container" style={style}>
        <LeftAside
          isSidebarVisible={isSidebarVisible}
          setSidebarVisible={setSidebarVisible}
        />
        <main>
          <div className="orderheader">
            <div className="search-bar-container">
              <i className="fa fa-search search-icon"></i>
              <input
                type="text"
                className="search-bar"
                placeholder="Search by Title or Catergory"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)} // Update search query on input change
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
                  placeholder="Search by Title or Catergory"
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            )}
            <Header setIcon={setIcon} setSidebarVisible={setSidebarVisible} />
          </div>
          <OrderForm
            count={count}
            setCount={setCount}
            searchQuery={searchQuery}
          />
        </main>
      </div>
    </div>
  );
};

export default NewOrder;

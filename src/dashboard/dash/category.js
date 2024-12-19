import React, { useEffect, useState } from "react";
import LeftAside from "./leftaside";
import Header from "./header";
import Items from "./items";

const Category = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(false);
  const [icon, setIcon] = useState(false);
  const [style, setStyle] = useState({
    display: "grid",
    gridTemplateColumns: "14rem auto", // Default for larger screens
  });
  const [searchTerm, setSearchTerm] = useState(""); // State for the search term

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

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
          <div className="profilepage">
            <div className="search-bar-container">
              <i className="fa fa-search search-icon"></i>
              <input
                type="text"
                className="search-bar"
                placeholder="Search by category..."
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </div>{" "}
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
                  placeholder="Search by category..."
                  onChange={handleSearchChange}
                />
              </div>
            )}
            <Header setIcon={setIcon} setSidebarVisible={setSidebarVisible} />
          </div>
          <Items searchTerm={searchTerm} /> {/* Passing searchTerm to Items */}
        </main>
      </div>
    </div>
  );
};

export default Category;

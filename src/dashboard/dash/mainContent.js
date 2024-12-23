import React, { useState, useEffect } from "react";
import NewOrder from "./neworder";
import { useNavigate } from "react-router-dom";

const MainContent = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();
  const slides = [
    "https://media.istockphoto.com/id/1057255516/photo/small-business-owener.jpg?s=1024x1024&w=is&k=20&c=VfEvWzb5AJdlEGL7Hku8F4CZQUREm0coILHq5yRPwWA=",
    "https://cdn.pixabay.com/photo/2021/06/04/06/09/cherries-6308871_640.jpg",
    "https://cdn.pixabay.com/photo/2014/06/18/18/42/running-shoe-371625_640.jpg",
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };
  const handleOpen = () => {
    navigate("/new-order");
  };
  const imagesBelowCarousel = [
    "https://cdn.pixabay.com/photo/2021/08/03/06/47/perfume-6518634_640.jpg",
    "https://cdn.pixabay.com/photo/2022/03/02/09/33/purse-7042725_640.jpg",
    "https://cdn.pixabay.com/photo/2020/09/23/20/27/headphones-5596987_640.jpg",
    "https://cdn.pixabay.com/photo/2021/01/06/07/47/lipstick-5893460_640.jpg",
  ];

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Group products by category and pick one image from each category
  const categoryImages = products.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = product.image; // Use the first product image from each category
    }
    return acc;
  }, {});

  // Get the top offer images and their category names
  const topOfferItems = Object.keys(categoryImages).map((category) => ({
    category,
    image: categoryImages[category],
  }));

  return (
    <div>
      <div className="carousel">
        <button className="carousel-button prev" onClick={prevSlide}>
          &#10094;
        </button>
        <div className="carousel-slide">
          <img src={slides[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
        </div>
        <button className="carousel-button next" onClick={nextSlide}>
          &#10095;
        </button>
      </div>
      <br />
      <div className="card ends">
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            padding: "0 10px",
          }}
        >
          <i
            className="fa fa-arrow-right"
            style={{ fontSize: "21px", color: " var(--clr-dark-variant)" }}
          ></i>
        </div>
        <div className="top-offers">
          {topOfferItems.map((item, index) => (
            <div key={index} className="top-offer-item">
              <img src={item.image} alt={`Top Offer ${item.category}`} />
              <p>{item.category}</p>
            </div>
          ))}
        </div>
      </div>
      <br />
      <div className="maincontent">
        <p>Top Offers</p>
        <div className="image-gallery">
          {imagesBelowCarousel.map((image, index) => (
            <div key={index} className="image-item">
              <img src={image} alt={`Gallery Image ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainContent;

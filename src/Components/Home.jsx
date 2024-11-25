import React from "react";
import Carousel from "../Components/Carousel.jsx";
import items from "../Data/Data.js";
import ProductCard from "./ProductCard.jsx";
import offer from "../assets/offer.avif";
import { RiExchangeLine } from "react-icons/ri";
import { FaHandHoldingHeart } from "react-icons/fa";
import { MdAssuredWorkload } from "react-icons/md";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import mobiquik from "../assets/mobiquik.avif";
import paytm from "../assets/paytm.avif";
import phonpay from "../assets/phonpay.avif";
const Home = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  const images = [
    { id: 1, src: mobiquik, alt: "mobiquik" },
    { id: 2, src: paytm, alt: "paytm" },
    { id: 3, src: phonpay, alt: "phonpay" },
  ];
  const filteredProduct = items.filter((item) => item.category2 === "Home");

  return (
    <div className="bg-gray-50 overflow-x-hidden">
      <Carousel />

      <div className="w-full mt-6">
        <img
          src={offer}
          alt="offer"
          className="w-full object-cover max-h-96 rounded-lg shadow-lg"
        />
      </div>

      {/* Season's Deal */}
      <h1 className="text-4xl md:text-5xl text-center my-10 font-bold text-gray-800">
        Season&apos;s Deal, Only A Click Away!
      </h1>
      <div className="w-full min-h-[500px] bg-gradient-to-r from-purple-500 to-purple-700 flex flex-wrap p-10 justify-center items-center gap-10 rounded-lg shadow-lg">
        {filteredProduct.map((item, index) => (
          <ProductCard item={item} index={index} key={index} />
        ))}
      </div>

      <div className="flex justify-center items-center my-5 gap-10 flex-wrap bg-white py-10 rounded-lg shadow-lg">
        <div className="w-80 h-auto flex flex-col items-center text-center">
          <RiExchangeLine className="text-6xl text-purple-600 mb-4" />
          <span className="uppercase text-lg font-semibold text-gray-800">
            Easy Exchange
          </span>
        </div>

        <div className="w-80 h-auto flex flex-col items-center text-center">
          <FaHandHoldingHeart className="text-6xl text-purple-600 mb-4" />
          <span className="uppercase text-lg font-semibold text-gray-800">
            100% Handpicked
          </span>
        </div>

        <div className="w-80 h-auto flex flex-col items-center text-center">
          <MdAssuredWorkload className="text-6xl text-purple-600 mb-4" />
          <span className="uppercase text-lg font-semibold text-gray-800">
            Assured Quality
          </span>
        </div>
      </div>
      <Slider {...settings} className=" my-10 rounded-lg shadow-lg">
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={image.src}
              alt={image.alt}
              className=" w-full h-full object-fill"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Home;

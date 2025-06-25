import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";

const SuccessSection = () => {
  return (
    <>
    <Navbar/>
    <div className="bg-white py-12 px-4 md:px-8">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-800">
          Unacademy is the perfect place <br /> for your preparation
        </h2>
        <p className="text-green-500 mt-2">
          Over <span className="font-semibold">10 crore</span> learners trust us for their preparation
        </p>
      </div>

      {/* Success Cards Slider */}
      <div className="bg-yellow-50 py-6 px-4 rounded-xl max-w-6xl mx-auto mb-10">
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          pagination={{ clickable: true }}
          navigation
          modules={[Pagination, Navigation]}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
          }}
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <div className="bg-[#00254D] text-white p-6 rounded-lg h-full">
              <h3 className="text-xl font-bold text-green-400 mb-2">11,000+ Learners* cracked</h3>
              <p className="text-sm mb-4">JEE Main 2024</p>
              <div className="grid grid-cols-3 gap-2 text-xs text-center">
                <div>
                  <p className="font-semibold">AIR 33</p>
                  <p>Pratham Kumar</p>
                  <p>2 Year (IITian)</p>
                </div>
                <div>
                  <p className="font-semibold">AIR 28</p>
                  <p>Meet Parikh</p>
                  <p>SRG Program</p>
                </div>
                <div>
                  <p className="font-semibold">AIR 34</p>
                  <p>Sawi Jain</p>
                  <p>2 Year (IITian)</p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <div className="bg-[#00254D] text-white p-6 rounded-lg flex flex-col justify-center items-center h-full">
              <h3 className="text-lg md:text-xl font-semibold mb-2 text-center">
                Unacademy Learners' have cracked it
              </h3>
              <p className="text-yellow-400 text-3xl font-bold mb-4">🏆</p>
              <div className="text-sm text-center">
                <p><span className="font-bold text-green-400">10</span> Learners in Top 100</p>
                <p><span className="font-bold text-green-400">5</span> State Toppers</p>
                <p><span className="font-bold text-green-400">11,000+</span> Learners Qualified</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Testimonials Section */}
      <div className="max-w-6xl mx-auto">
        <h3 className="text-lg font-semibold mb-6 text-center">What our learners are saying</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-100 p-6 rounded-lg text-center">
            <div className="w-10 h-10 mx-auto bg-gray-300 rounded-full mb-2" />
            <p className="text-sm italic mb-2">
              It is very helpful for me, just love it !
            </p>
            <p className="text-sm text-gray-700 font-semibold">Rayyan Khateeb</p>
            <p className="text-xs text-gray-500">IIT JEE - 1K learning mins</p>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg text-center">
            <div className="w-10 h-10 mx-auto bg-black rounded-full mb-2" />
            <p className="text-sm italic mb-2">
              best experience ever i promise next year i will do my level best
            </p>
            <p className="text-sm text-gray-700 font-semibold">Hussain HUSSAIN</p>
            <p className="text-xs text-gray-500">IIT JEE - 16K learning mins</p>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg text-center">
            <div className="w-10 h-10 mx-auto bg-black rounded-full mb-2" />
            <p className="text-sm italic mb-2">
              very good experience its content and teachers are very good
            </p>
            <p className="text-sm text-gray-700 font-semibold">Akarsh Gupta</p>
            <p className="text-xs text-gray-500">IIT JEE - 211K learning mins</p>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default SuccessSection;

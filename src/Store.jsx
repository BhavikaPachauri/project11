import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Store = () => {
  const courses = [
    {
      id: 1,
      title: "Level Up: JEE Preparation for Class 11",
      subtitle: "Starts in 1 day",
      classes: "12 live classes",
      price: "₹4",
      label: "PARTIAL SYLLABUS",
      img: "https://static.uacdn.net/thumbnail/store_bundle/landscape/8ced761ecc7e4977afe2ba2b1581ef50.png?q=75&w=1920&auto=format%2Ccompress",
      live: true,
    },
    {
      id: 2,
      title: "Bounce Back – JEE Preparation for Class 12",
      subtitle: "Starts in 2 days",
      classes: "12 live classes",
      price: "₹4",
      label: "PARTIAL SYLLABUS",
      img: "https://static.uacdn.net/thumbnail/store_bundle/landscape/8ced761ecc7e4977afe2ba2b1581ef50.png?q=75&w=1920&auto=format%2Ccompress",
      live: true,
    },
    {
      id: 3,
      title: "Phoenix VIP Batch for IIT JEE 2026",
      subtitle: "Physical Notes & Test Series",
      classes: "Valid for 12 months",
      price: "₹52,631",
      label: "NOTES COMBO",
      img: "https://static.uacdn.net/thumbnail/store_bundle/landscape/8ced761ecc7e4977afe2ba2b1581ef50.png?q=75&w=1920&auto=format%2Ccompress",
      live: false,
    },
  ];

  return (
    <>
    <Navbar/>
     <div className="min-h-screen flex flex-col md:flex-row bg-gray-100 font-sans">
      {/* Sidebar */}
      <aside className="w-full md:w-1/4 lg:w-1/5 bg-white p-4 shadow-sm">
        <h2 className="text-lg font-semibold mb-4">Filters</h2>
        {["SYLLABUS", "CLASS", "LANGUAGE", "EXAM", "SUBJECT", "PRODUCT TYPE"].map(
          (label, i) => (
            <div key={i} className="mb-4">
              <h3 className="font-semibold mb-2">{label}</h3>
              {label === "SYLLABUS" && (
                <>
                  <label className="block">
                    <input type="checkbox" className="mr-2" />
                    Subject-level full syllabus
                  </label>
                  <label className="block">
                    <input type="checkbox" className="mr-2" />
                    Partial syllabus
                  </label>
                </>
              )}
            </div>
          )
        )}
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Sort by: Relevance</h2>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white shadow-md rounded-lg overflow-hidden relative"
            >
              {course.live && (
                <span className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded">
                  LIVE
                </span>
              )}
              <img
                src={course.img}
                alt={course.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <p className="text-blue-600 text-xs font-semibold">
                  {course.label}
                </p>
                <h3 className="text-md font-bold mt-1">{course.title}</h3>
                <p className="text-sm text-gray-600">{course.subtitle}</p>
                <p className="text-sm text-gray-600 mb-2">{course.classes}</p>
                <p className="text-lg font-bold">{course.price}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
    <Footer/>
    </>
   
  );
};

export default Store;

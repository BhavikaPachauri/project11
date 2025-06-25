
import React, { useEffect, useRef, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import {  ChevronLeft, ChevronRight } from "lucide-react";
import { ChevronDown, Phone, Gift, PlayCircle, User, BookOpen, Video, ClipboardList, FileCheck2, Edit3, MessageCircle } from 'lucide-react';
import { motion } from "framer-motion";
import { MapPin } from 'lucide-react'; 


import Navbar from "./Navbar";
import Footer from "./Footer";

const centers = [
  { name: 'Agartala', state: 'Tripura', color: 'bg-teal-100', text: 'text-cyan-800' },
  { name: 'Agra', state: 'Uttar pradesh', color: 'bg-pink-100', text: 'text-pink-700' },
  { name: 'Ahmedabad', state: 'Gujarat', color: 'bg-blue-100', text: 'text-blue-700' },
  { name: 'Aligarh', state: 'Uttar pradesh', color: 'bg-purple-100', text: 'text-purple-700' },
  { name: 'Bangalore', state: 'Karnataka', color: 'bg-red-100', text: 'text-red-700' },
];
const educators = [
  {
    name: "Vineet Loomba",
    description:
      "A Game Changer in Mathematics, produced multiple 100 percentilers, Air 33 & 34 (Main 2024), his courses are the...",
    watchMins: "287M",
    followers: "159K",
    image: "https://static.uacdn.net/educator_new/processed_image/24A880B1-C8D0-4C39-A946-04DA68FB279D_.png?q=75&auto=format%2Ccompress&w=128",
  },
  {
    name: "Brijesh Jindal",
    description:
      "The topmost Physical chemistry educator, BJ sir have mentored large number of Top-100 rankers including AIR-1...",
    watchMins: "241M",
    followers: "88K",
    image: "https://static.uacdn.net/educator_new/processed_image/24A880B1-C8D0-4C39-A946-04DA68FB279D_.png?q=75&auto=format%2Ccompress&w=128",

  },
  {
    name: "Piyush Maheshwari",
    description:
      "Inorganic Chemistry Expert ⋄ Mentor of 100 percentilers and many iitians and nittian ⋄ 15+ year experienced",
    watchMins: "204M",
    followers: "92K",
    image: "https://static.uacdn.net/educator_new/processed_image/24A880B1-C8D0-4C39-A946-04DA68FB279D_.png?q=75&auto=format%2Ccompress&w=128",
  },
  {
    name: "Mohammad Kashif Alam",
    description:
      "Mentor of AIR 1, 3, 5, 8, 11, 12, 13, 33, 44, 47, 57, 86 | Mentored 7000+ IITians, Ajith (MIT, USA), Aritro (Purdue, USA) since 2013",
    watchMins: "220M",
    followers: "88K",
    image: "https://static.uacdn.net/educator_new/processed_image/24A880B1-C8D0-4C39-A946-04DA68FB279D_.png?q=75&auto=format%2Ccompress&w=128",
  },
];
const menuItems = [
  { name: 'Get started', link: '/get-started' },
  { name: 'Educators', link: '/educators' },
  { name: 'Batch', link: '/batch' },
  { name: 'Store', link: '/store' },
  { name: 'Subscription plan', link: '/subscription' },
  { name: 'Success stories', link: '/success' },
  { name: 'About exam', link: '/about-exam' },
];
const features = [
  {
    title: "Live classes",
    desc: "Watch free online coaching classes by our best educators.",
    icon: <PlayCircle className="text-red-500" size={20} />,
  },
  {
    title: "Top educators",
    desc: "Learn from some of the best educators in the country.",
    icon: <User className="text-blue-500" size={20} />,
  },
  {
    title: "Batches",
    desc: "Curated batches to simplify the learning journey for your goal.",
    icon: <BookOpen className="text-yellow-500" size={20} />,
  },
  {
    title: "Courses",
    desc: "Learn every subject in detail from your favourite educator.",
    icon: <Video className="text-blue-600" size={20} />,
  },
  {
    title: "Playlist",
    desc: "High quality lecture videos for the entire syllabus.",
    icon: <ClipboardList className="text-teal-500" size={20} />,
  },
  {
    title: "Practice",
    desc: "Strengthen your exam preparation with adaptive practice tests.",
    icon: <Edit3 className="text-purple-500" size={20} />,
  },
  {
    title: "Test series",
    desc: "Evaluate and boost your exam preparation with test series.",
    icon: <FileCheck2 className="text-cyan-500" size={20} />,
  },
  {
    title: "Doubts & solutions",
    desc: "Get quick and detailed solutions to clarify your doubts.",
    icon: <MessageCircle className="text-green-500" size={20} />,
  },
];
  const classes = [
    {
      lang: 'Hinglish',
      subject: 'PHYSICS',
      title: 'Atomic Structure - One Shot',
      instructor: 'Aditya Kumar Jha',
      views: 919,
      bgColor: 'bg-blue-200',
      textColor: 'text-blue-800',
    },
    {
      lang: 'Hinglish',
      subject: 'CHEMISTRY',
      title: 'DISCUSSION CLASS',
      instructor: 'Upendro Kumar Upadhyay',
      views: 639,
      bgColor: 'bg-purple-200',
      textColor: 'text-purple-800',
    },
    {
      lang: 'Hinglish',
      subject: 'MATHEMATICS',
      title: 'Revision of 11th Class',
      instructor: 'Ajay Kumar Verma',
      views: 501,
      bgColor: 'bg-pink-200',
      textColor: 'text-pink-800',
    },
    {
      lang: 'Hindi',
      subject: 'STRATEGY AND COLLEGE OVERVIEW',
      title: 'Audio call with Prateek jee Sir | Q&A Session for JEE',
      instructor: 'Prateek Jain',
      views: 488,
      bgColor: 'bg-blue-100',
      textColor: 'text-blue-700',
    },
  ];
  const courses = [
  {
    id: 1,
    image: "https://static.uacdn.net/thumbnail/course/v2/59B465EB-F828-48ED-82E7-3232CB203BF3_plus.png?q=75&w=384&auto=format%2Ccompress", // Placeholder, replace with actual
    lang: "Hinglish",
    subject: "MATHEMATICS",
    title: "Master Course on Quadratic Equation for Droppers - 2025",
    educator: "Om Sharma",
    endDate: "10th May",
    bgColor: "bg-pink-100",
  },
  {
    id: 2,
    image: "https://static.uacdn.net/thumbnail/course/v2/59B465EB-F828-48ED-82E7-3232CB203BF3_plus.png?q=75&w=384&auto=format%2Ccompress",
    lang: "Hindi",
    subject: "PHYSICS",
    title: "Course on Plan Mirror and Spherical Mirror JEE 2025 Droppers",
    educator: "Kailash Sharma",
    endDate: "13th May",
    bgColor: "bg-blue-100",
  },
  {
    id: 3,
    image: "https://static.uacdn.net/thumbnail/course/v2/59B465EB-F828-48ED-82E7-3232CB203BF3_plus.png?q=75&w=384&auto=format%2Ccompress",
    lang: "Hindi",
    subject: "MATHEMATICS",
    title: "Important Course on Fundamentals of Calculus for JEE 2025",
    educator: "Vineet Loomba",
    endDate: "13th May",
    bgColor: "bg-pink-100",
  },
  {
    id: 4,
    image: "https://static.uacdn.net/thumbnail/course/v2/59B465EB-F828-48ED-82E7-3232CB203BF3_plus.png?q=75&w=384&auto=format%2Ccompress",
    lang: "Hindi",
    subject: "MATHEMATICS",
    title: "Course on Permutations Combinations & Probability for Droppers",
    educator: "Vineet Loomba",
    endDate: "14th May",
    bgColor: "bg-pink-100",
  },
];

const banners = [
  {
    id: 1,
    image: "https://static.uacdn.net/thumbnail/banner/3474bd852c0c41ac8cf92e72047cd846.png?q=75&auto=format%2Ccompress&w=828",
    
    alt: "Banner 1",
  },
  {
    id: 2,
    image: "https://static.uacdn.net/thumbnail/banner/3474bd852c0c41ac8cf92e72047cd846.png?q=75&auto=format%2Ccompress&w=828",
  
    alt: "Banner 2",
  },
  {
    id: 3,
    image: "https://static.uacdn.net/thumbnail/banner/08b4039f4f8a4900943c87f7f505d89b.png?q=75&auto=format%2Ccompress&w=828",
    alt: "Banner 3",
  },
  {
    id: 3,
    image: "https://static.uacdn.net/thumbnail/banner/08b4039f4f8a4900943c87f7f505d89b.png?q=75&auto=format%2Ccompress&w=828",
    alt: "Banner 3",
  },
];
const classData = {
    image: "https://static.uacdn.net/thumbnail/banner/08b4039f4f8a4900943c87f7f505d89b.png?q=75&auto=format%2Ccompress&w=828",
  
  overlayText: 'batches, tests and more',
  subject: 'MATHEMATICS',
  language: 'Hinglish',
  title: 'Logarithm',
  teacher: 'Jitesh Motwani',
  endTime: '5:20 PM',
  viewers: 45,
  totalLearners: 8000,
};

const subjects = [
  { name: "Chemistry", active: true },
  { name: "Physics", active: false },
  { name: "Mathematics", active: false },
  { name: "Strategy and College", active: false },
];

const class1 = [
  {
    title: "Periodic Table",
    teacher: "Sumit Gupta",
    lang: "Hinglish",
    subject: "Chemistry",
    image: "https://static.uacdn.net/thumbnail/course/v2/5E94F1AC-D104-462E-8AB7-51B8E6F09DCA_special_class.png?q=75&w=384&auto=format%2Ccompress",
  },
  {
    title: "Quantum Numbers & Electronic Configuration",
    teacher: "Pankaj Bahrani",
    lang: "Hinglish",
    subject: "Chemistry",
    image: "https://static.uacdn.net/thumbnail/course/v2/5E94F1AC-D104-462E-8AB7-51B8E6F09DCA_special_class.png?q=75&w=384&auto=format%2Ccompress",
  },
  {
    title: "Class 11th Backlogs Coverage through Conceptual Problems",
    teacher: "Mohammad Kashif Alam",
    lang: "Hinglish",
    subject: "Chemistry",
    image: "https://static.uacdn.net/thumbnail/course/v2/5E94F1AC-D104-462E-8AB7-51B8E6F09DCA_special_class.png?q=75&w=384&auto=format%2Ccompress",
  },
  {
    title: "Ionic Equilibrium",
    teacher: "Deepak Sharma",
    lang: "Hinglish",
    subject: "Chemistry",
    image: "https://static.uacdn.net/thumbnail/course/v2/5E94F1AC-D104-462E-8AB7-51B8E6F09DCA_special_class.png?q=75&w=384&auto=format%2Ccompress",
  },
  {
    title: "JEE 2026: FSPS on Organic Chemistry - 15",
    teacher: "Mohammad Kashif Alam",
    lang: "Hinglish",
    subject: "Chemistry",
    image: "https://static.uacdn.net/thumbnail/course/v2/5E94F1AC-D104-462E-8AB7-51B8E6F09DCA_special_class.png?q=75&w=384&auto=format%2Ccompress",
  },
  {
    title: "Periodic Table",
    teacher: "Sumit Gupta",
    lang: "Hinglish",
    subject: "Chemistry",
    image: "https://static.uacdn.net/thumbnail/course/v2/5E94F1AC-D104-462E-8AB7-51B8E6F09DCA_special_class.png?q=75&w=384&auto=format%2Ccompress",
  },
  {
    title: "Basic Chemistry You must know",
    teacher: "Kumar Sanu",
    lang: "Hinglish",
    subject: "Chemistry",
    image: "https://static.uacdn.net/thumbnail/course/v2/5E94F1AC-D104-462E-8AB7-51B8E6F09DCA_special_class.png?q=75&w=384&auto=format%2Ccompress",
  },
  {
    title: "JEE 2026: FSPS on Organic Chemistry - 14",
    teacher: "Mohammad Kashif Alam",
    lang: "Hinglish",
    subject: "Chemistry",
    image: "https://static.uacdn.net/thumbnail/course/v2/5E94F1AC-D104-462E-8AB7-51B8E6F09DCA_special_class.png?q=75&w=384&auto=format%2Ccompress",
  },
];

function Home() {

   const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);
  const instanceRef = useRef(null);
  const autoplayRef = useRef(null);

  const [sliderContainerRef, slider] = useKeenSlider({
    loop: true,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created(slider) {
      instanceRef.current = slider;
    },
  });

  // Autoplay logic
  useEffect(() => {
    autoplayRef.current = setInterval(() => {
      instanceRef.current?.next();
    }, 8000); // Change every 4 seconds

    return () => clearInterval(autoplayRef.current); // Clean up on unmount
  }, []);
  return (
    <>
    <Navbar/>
    <section className="bg-gray-100 py-10 px-4 md:px-10 lg:px-20">
      {/* Hero Content */}
      <motion.div
        className="flex flex-col-reverse md:flex-row items-center justify-between"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } },
        }}
      >
        {/* Left Content */}
        <motion.div
          className="w-full md:w-1/2 mt-6 md:mt-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
            Best Learning <br />
            <span className="text-indigo-600">Education Platform</span>
            <br />
            in <span className="text-blue-600">The World</span>
          </h2>
          <p className="text-gray-600 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Audax
            negotium…
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-center gap-3">
            <motion.input
              type="text"
              placeholder="What do you want to learn"
              className="w-full sm:w-72 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none"
              whileFocus={{
                scale: 1.02,
                boxShadow: "0 0 0 2px rgba(99, 102, 241, 0.25)",
              }}
            />
            <motion.button
              className="bg-indigo-600 text-white px-5 py-3 rounded-lg font-semibold"
              whileHover={{ scale: 1.05 }}
            >
              Search Course
            </motion.button>
          </div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          className="w-full md:w-1/2 flex flex-col items-center relative"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="https://static.uacdn.net/thumbnail/banner/3474bd852c0c41ac8cf92e72047cd846.png?q=75&auto=format%2Ccompress&w=828"
            alt="Students"
            className="rounded-2xl w-full h-54 max-w-sm md:max-w-md"
          />
          <motion.div
            className="absolute bottom-4 right-4 bg-indigo-600 text-white px-4 py-3 rounded-xl text-sm shadow-lg"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.8, duration: 0.5, type: "spring" }}
          >
            <ul className="space-y-1">
              <li>✔ Get 30% off on every 1st month</li>
              <li>✔ Expert teachers</li>
            </ul>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
   
   {/* === Banner Carousel Section === */}
   <section className="w-full px-4 py-10 bg-white relative">
      <div className="max-w-7xl mx-auto">
        {/* Carousel */}
        <div ref={sliderContainerRef} className="keen-slider rounded-2xl overflow-hidden shadow-lg">
          {banners.map((banner) => (
            <div key={banner.id} className="keen-slider__slide group relative">
              <img
                src={banner.image}
                alt={banner.alt}
                className="w-full h-[250px] sm:h-[300px] md:h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={() => instanceRef.current?.prev()}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-md hover:bg-white text-gray-700 hover:text-black rounded-full p-2 shadow-md transition z-10"
          aria-label="Previous Slide"
        >
          <span className="text-2xl">&#8249;</span>
        </button>
        <button
          onClick={() => instanceRef.current?.next()}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-md hover:bg-white text-gray-700 hover:text-black rounded-full p-2 shadow-md transition z-10"
          aria-label="Next Slide"
        >
          <span className="text-2xl">&#8250;</span>
        </button>

        {/* Dots */}
        <div className="flex justify-center mt-6 gap-3">
          {banners.map((_, idx) => (
            <button
              key={idx}
              onClick={() => instanceRef.current?.moveToIdx(idx)}
              className={`h-3 w-3 rounded-full transition-all duration-300 ${
                currentSlide === idx
                  ? "bg-indigo-600 scale-110 shadow"
                  : "bg-gray-300"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>

{/* === IIT JEE Promo + Features Section === */}
    <section className="max-w-7xl mx-auto px-6 py-14 text-center bg-white">

      {/* Heading */}
      <motion.h2
        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-snug text-gray-900"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Crack IIT JEE with <span className="text-green-600">Unacademy</span>
      </motion.h2>

      <motion.p
        className="text-gray-600 text-lg mb-8"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        viewport={{ once: true }}
      >
        Over <span className="text-green-600 font-semibold">10 crore</span> learners trust us for online and offline coaching
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        className="flex flex-col sm:flex-row gap-4 justify-center mb-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        viewport={{ once: true }}
      >
        <button className="px-6 py-3 border border-gray-300 rounded-lg font-medium hover:bg-gray-50 transition">
          Try learning for free
        </button>
        <button className="px-6 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition">
          View subscription plans
        </button>
      </motion.div>

      {/* Offers Link */}
      <motion.div
        className="text-orange-500 text-sm font-semibold underline underline-offset-4 cursor-pointer hover:text-orange-600 mb-12"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.4 }}
        viewport={{ once: true }}
      >
        View subscription offers
      </motion.div>

      {/* Features Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left"
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
        viewport={{ once: true }}
      >
        {features.map((item, index) => (
          <motion.div
            key={index}
            className="flex items-start gap-4 p-5 bg-white border rounded-xl hover:shadow-lg transition-all"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Icon */}
            <div className="text-green-600 text-3xl">{item.icon}</div>

            {/* Text */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>




  <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="bg-[#fef1e6] p-6 md:p-10 rounded-2xl shadow-lg max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Left Content */}
          <motion.div
            className="flex-1 space-y-6"
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-snug">
              Visit the <span className="text-orange-500">personalized experience</span>
            </h2>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700 text-base">
              {[
                { icon: "📽️", text: "Take a tour of our tech-enabled classes and library" },
                { icon: "🎓", text: "Attend free special classes by top educators" },
                { icon: "❓", text: "Avail personal priority counselling session" },
                { icon: "🎁", text: "Get special discounts up to 50% on your purchase" },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + idx * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <span className="text-orange-500 text-2xl">{item.icon}</span>
                  <p>{item.text}</p>
                </motion.div>
              ))}
            </div>

            {/* Buttons */}
            <motion.div
              className="flex flex-wrap gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <button className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-orange-600 transition">
                Visit a centre
              </button>
              <button className="border border-gray-500 px-6 py-3 rounded-lg font-medium text-gray-800 hover:bg-gray-100 transition">
                Know more about centres
              </button>
            </motion.div>

            {/* Timing */}
            <motion.p
              className="text-sm text-gray-600 pt-2 flex items-center gap-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <span className="text-lg">🕒</span> Centres timings:{" "}
              <strong>10 AM to 7 PM</strong>
            </motion.p>
          </motion.div>

          {/* Image */}
          <motion.div
            className="flex-1 w-full max-w-md mx-auto"
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            viewport={{ once: true }}
          >
            <img
              src="https://static.uacdn.net/web-cms/uncentre_LP_b041622b0f.jpg?q=75&fm=webp&w=384&auto=format%2Ccompress"
              alt="Unacademy Centre"
              className="rounded-xl shadow-md w-full object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>

 <section className="py-12 bg-white">
      <div className="container px-4 mx-auto">
        <motion.div
          className="bg-[#fdf6e9] p-6 md:p-10 rounded-2xl shadow-lg max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Left Section */}
          <motion.div
            className="flex-1 space-y-5 text-center md:text-left"
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-snug">
              Take a test for free <br />
              and win up to{" "}
              <span className="text-orange-500">50% scholarship</span>
            </h2>

            {/* Features */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4 text-gray-700 text-base">
              <div className="flex items-center gap-2">
                <span className="text-green-600 text-lg">✅</span> Just 15 minutes
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-600 text-lg">✅</span> 15 quick questions
              </div>
            </div>

            {/* CTA Button */}
            <button className="bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-900 transition">
              Attempt test now
            </button>
          </motion.div>

          {/* Right Section - Image with Badge */}
          <motion.div
            className="flex-1 max-w-sm w-full"
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="relative text-center">
              <img
                src="https://static.uacdn.net/production/_next/static/images/dst/trophy-v2.svg?q=75&auto=format%2Ccompress&w=256"
                alt="Scholarship Badge"
                className="w-full object-contain"
              />
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-white border border-gray-200 rounded-xl px-5 py-3 shadow-lg text-sm text-[#723f2f] font-medium w-[85%]">
                Scholarships worth up to <strong>50%</strong> <br />
                subscription price to be won
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  
 <section className="bg-gradient-to-r from-[#f8fbff] to-white py-12">
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Top Header */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Left Info */}
          <div>
            <h2 className="text-[24px] md:text-[30px] font-bold text-gray-900 mb-2 leading-tight">
              🎥 Watch Free Online Classes
            </h2>
            <div className="flex flex-wrap gap-4 text-sm text-gray-700">
              {[
                "Chat live with educators",
                "Attempt interactive polls",
                "Get your doubts cleared",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span>✅</span> {item}
                </div>
              ))}
            </div>
          </div>

          {/* Right Learners */}
          <div className="text-right">
            <div className="flex items-center justify-end -space-x-2 mb-1">
              {[1, 2, 3].map((img) => (
                <img
                  key={img}
                  src={`https://i.pravatar.cc/30?img=${img}`}
                  alt="avatar"
                  className="rounded-full w-7 h-7 border-2 border-white shadow"
                />
              ))}
            </div>
            <p className="text-sm font-semibold text-gray-800">8K learners</p>
            <p className="text-xs text-gray-500">watched a class today</p>
          </div>
        </motion.div>

        {/* Live Class Card */}
        <motion.div
          className="bg-white rounded-2xl p-4 md:p-6 flex flex-col md:flex-row items-center gap-6 shadow-md border transition duration-300"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Image Section */}
          <div className="relative w-full md:w-[500px] overflow-hidden rounded-xl">
            <img
              src="https://static.uacdn.net/thumbnail/banner/3474bd852c0c41ac8cf92e72047cd846.png?q=75&auto=format%2Ccompress&w=828"
              alt="Live Class"
              className="w-full h-60 object-cover rounded-xl transform hover:scale-105 transition duration-300"
            />
            <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-medium px-3 py-1 rounded-full shadow">
              🎯 Batches, Tests & More
            </div>
            <div className="absolute bottom-4 left-4 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow">
              🔴 LIVE
            </div>
            <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:scale-110 transition duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-red-500"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>

          {/* Info Section */}
          <div className="flex-1 space-y-2 text-left">
            <div className="flex gap-3 text-xs font-semibold items-center">
              <span className="bg-gray-100 text-gray-700 px-2 py-0.5 rounded">Hinglish</span>
              <span className="text-pink-600 uppercase tracking-wide">Mathematics</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900">📘 Logarithm</h3>
            <p className="text-sm text-gray-700">👨‍🏫 Jitesh Motwani</p>
            <p className="text-xs text-gray-500">⏰ Ends at 5:20 PM</p>
            <hr className="my-2 border-gray-200" />
            <p className="text-sm text-gray-700">👀 45 learners are watching</p>

            {/* Arrows */}
            <div className="flex gap-2 pt-2">
              {["←", "→"].map((arrow, index) => (
                <button
                  key={index}
                  className="w-8 h-8 rounded-full bg-gray-100 hover:bg-indigo-100 text-indigo-600 font-bold flex items-center justify-center transition"
                >
                  {arrow}
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>

    <section className="bg-white py-12">
  <div className="max-w-7xl mx-auto px-6">
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {classes.map((cls, index) => {
        const {
          lang,
          subject,
          title,
          instructor,
          views,
        } = cls;

        return (
          <motion.div
            key={index}
            className="relative rounded-xl overflow-hidden shadow-md bg-white transition hover:shadow-xl group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
          >
            {/* Top Section with Image */}
            <div className="relative w-full h-40 bg-gray-100 overflow-hidden">
              {/* Views Badge */}
              <div className="absolute top-2 left-2 flex items-center bg-white bg-opacity-90 rounded-full px-2 py-1 text-gray-700 text-xs font-medium shadow-sm">
                <svg
                  className="w-4 h-4 mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
                {views}
              </div>

              {/* Custom Play Button */}
              <div className="absolute top-2 right-2 bg-white bg-opacity-80 rounded-full p-1 hover:scale-110 transition shadow">
                <svg
                  className="w-5 h-5 text-purple-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M6.5 5.5v9l7-4.5-7-4.5z" />
                </svg>
              </div>

              {/* Course Thumbnail Image */}
              <img
                src="https://static.uacdn.net/thumbnail/course/v2/5E94F1AC-D104-462E-8AB7-51B8E6F09DCA_special_class.png?q=75&w=384&auto=format%2Ccompress"
                alt="Course thumbnail"
                className="w-full h-full object-cover transform group-hover:scale-105 transition duration-300"
              />
            </div>

            {/* Course Info */}
            <div className="p-4">
              <p className="text-xs font-semibold text-gray-600">
                {lang}
                <span className="mx-2 text-gray-300">|</span>
                {subject}
              </p>
              <h3 className="text-sm font-semibold text-gray-900 leading-tight line-clamp-2">
                {title}
              </h3>
              <p className="text-xs text-gray-500 mt-1">{instructor}</p>
            </div>
          </motion.div>
        );
      })}
    </div>
  </div>
</section>
    <section className="p-4 md:p-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">Classes by IIT JEE subjects</h2>

        {/* Subject Tabs */}
        <div className="flex flex-wrap gap-3 mb-8 border-b border-gray-200">
          {subjects.map((sub, index) => (
            <button
              key={index}
              className={`relative px-5 py-2 rounded-full font-medium transition-colors duration-300
                ${
                  sub.active
                    ? "text-purple-700 border border-purple-300 bg-purple-100"
                    : "text-gray-600 border border-gray-300 hover:bg-gray-50 hover:text-purple-600"
                }`}
            >
              {sub.name}
              {sub.active && (
                <span className="absolute -bottom-[2px] left-1/2 -translate-x-1/2 w-10 h-1 rounded-full bg-purple-600" />
              )}
            </button>
          ))}
        </div>

        {/* Class Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {class1.map((cls, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-gray-50 rounded-xl shadow-sm hover:shadow-lg hover:scale-[1.03] transition-transform duration-300 cursor-pointer"
            >
              {/* Thumbnail */}
              <div className="relative w-full h-40 bg-purple-100 rounded-t-xl flex items-center justify-center overflow-hidden">
                {cls.image ? (
                  <img
                    src={cls.image}
                    alt={cls.title}
                    className="w-full h-full object-cover rounded-t-xl"
                  />
                ) : (
                  <div className="w-16 h-16 bg-purple-300 rounded-full" />
                )}

                {/* Play Button */}
                <div className="absolute bottom-3 right-3 bg-white rounded-full p-2 shadow-md animate-pulse">
                  <svg
                    className="w-5 h-5 text-purple-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M4.5 3.5v13l11-6.5-11-6.5z" />
                  </svg>
                </div>
              </div>

              {/* Class Info */}
              <div className="px-4 py-3">
                <div className="text-xs text-gray-500 mb-1 font-semibold tracking-wide">
                  {cls.lang} | {cls.subject.toUpperCase()}
                </div>
                <h3 className="font-semibold text-gray-800 text-lg leading-tight truncate">{cls.title}</h3>
                <p className="text-sm text-gray-600 mt-1 truncate">{cls.teacher}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="px-4 py-8 md:px-12 bg-white">
  <div className="container max-w-7xl mx-auto">
    <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-gray-900">
      India’s top educators to learn from
    </h2>

    <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-8 border-b border-gray-200 pb-4">
      {[
        "Proven history of delivering results",
        "Mentored past rankers",
        "Unique style of teaching",
      ].map((text, i) => (
        <span
          key={i}
          className={`${i !== 0 ? "border-l border-gray-300 pl-4" : ""}`}
        >
          ◇ {text}
        </span>
      ))}
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {educators.map((ed, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: index * 0.15 }}
          className="border rounded-xl p-5 flex flex-col sm:flex-row items-start gap-5 bg-white shadow-md hover:shadow-xl hover:-translate-y-1 transition-transform duration-300"
        >
          <img
            src={ed.image}
            alt={ed.name}
            className="w-24 h-24 sm:w-36 sm:h-36 rounded-full border-2 border-purple-600"
          />
          <div className="flex-1 flex flex-col justify-between">
            <div>
              <div className="flex items-center flex-wrap gap-2 mb-2">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                  {ed.name}
                </h3>
                <span className="bg-gradient-to-r from-purple-400 to-pink-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md tracking-wider">
                  MASTER
                </span>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                {ed.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-6 text-gray-600 text-sm mb-3">
              <span>
                <strong className="text-gray-900">{ed.watchMins}</strong>{" "}
                Watch Mins
              </span>
              <span>
                <strong className="text-gray-900">{ed.followers}</strong>{" "}
                Followers
              </span>
            </div>

            <button className="self-start text-purple-600 font-semibold text-sm hover:underline hover:text-purple-800 transition">
              View Profile →
            </button>
          </div>
        </motion.div>
      ))}
    </div>

    <div className="mt-10 text-center">
      <button className="px-6 sm:px-8 py-3 bg-purple-600 text-white rounded-lg font-semibold shadow-md hover:bg-purple-700 hover:scale-105 transition-transform duration-300">
        View all educators
      </button>
    </div>
  </div>
</section>

    <section className="px-4 py-10 md:px-12 bg-gradient-to-r from-purple-50 to-indigo-50">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-xl flex flex-col md:flex-row items-center justify-between p-8 md:p-12 gap-8 md:gap-12"
        >
          {/* Text Section */}
          <div className="flex-1">
            <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
              Refer friends to win <span className="text-purple-600">Amazon vouchers</span> and <span className="text-indigo-600">Plus Subscription</span>
            </h3>
            <p className="text-gray-700 text-lg mb-6 max-w-lg">
              For every successful referral, win up to <span className="font-semibold text-purple-700">₹2,500</span>. Also, get a <span className="font-semibold text-indigo-700">1-month Plus subscription</span> absolutely free.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-purple-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-purple-700 transition"
            >
              Refer a friend
            </motion.button>
          </div>

          {/* Image Section */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="w-40 md:w-60 flex-shrink-0"
          >
            <img
              src="https://static.uacdn.net/referrals/refer_friends_and_win_rewards_web.png?q=75&auto=format%2Ccompress&w=1920"
              alt="Gift card"
              className="w-full h-auto rounded-2xl shadow-lg"
              loading="lazy"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
    <section className="bg-gradient-to-r from-green-100 to-green-50 px-6 py-12 md:px-16">
      <div className="container max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between bg-white shadow-lg rounded-xl p-8 md:p-12 gap-6 md:gap-0"
        >
          {/* Text */}
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight max-w-lg text-center md:text-left">
            Get subscription to start <br className="hidden md:block" />
            <span className="text-green-600">your preparation</span>
          </h2>

          {/* Button with hover animation */}
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 8px 20px rgba(34,197,94,0.6)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold shadow-md hover:bg-green-700 transition"
          >
            View subscription plans
          </motion.button>
        </motion.div>
      </div>
    </section>
    <section className="px-6 py-12 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 bg-white rounded-xl shadow-lg p-8"
        >
          {/* Left content */}
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-5 leading-tight">
              Crack IIT JEE with our full-<br className="hidden md:block" />
              syllabus batches
            </h2>
            <div className="flex flex-wrap items-center gap-5 text-gray-600 text-sm font-medium">
              {[
                "◇ Best for full syllabus preparation",
                "◇ Live & recorded online classes",
                "◇ Curated by best educators",
              ].map((item, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 * i }}
                  className="flex items-center gap-2"
                >
                  <span className="text-purple-600 font-bold">◇</span>
                  {item.replace("◇ ", "")}
                </motion.span>
              ))}
            </div>

            <p className="mt-8 text-lg font-semibold text-gray-800">
              Recommended batch for you
            </p>
          </div>

          {/* Right content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-center md:items-end gap-3"
          >
            {/* Avatars */}
            <div className="flex -space-x-3">
              {[
                "https://randomuser.me/api/portraits/women/44.jpg",
                "https://randomuser.me/api/portraits/men/45.jpg",
                "https://randomuser.me/api/portraits/women/46.jpg",
              ].map((src, i) => (
                <motion.img
                  key={i}
                  src={src}
                  alt={`user${i}`}
                  className="w-10 h-10 rounded-full border-2 border-white shadow-md"
                  whileHover={{ scale: 1.15, zIndex: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
              ))}
            </div>
            <div className="text-center md:text-right">
              <p className="font-bold text-lg text-gray-900">4.7K learners</p>
              <p className="text-sm text-gray-500">explored a batch today</p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "#EDE9FE" }}
              whileTap={{ scale: 0.95 }}
              className="mt-2 border border-purple-300 rounded-lg px-5 py-2 text-sm font-semibold text-purple-700 hover:bg-purple-100 transition"
            >
              SEE ALL
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
    <section className="px-6 py-12 bg-gradient-to-tr from-purple-50 via-indigo-50 to-pink-50">
      <div className="container max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 tracking-tight">
            Recommended batch for you
          </h2>
          <button className="text-sm border border-gray-300 px-4 py-1 rounded-lg hover:bg-gray-200 transition">
            SEE ALL
          </button>
        </div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row gap-8 p-6 border border-gray-200 hover:shadow-2xl transition-shadow"
        >
          {/* Left image */}
          <div className="md:w-1/3 w-full rounded-lg overflow-hidden relative group cursor-pointer">
            <img
              src="https://edge.uacdn.net/static/thumbnail/batch/b5948ee4a44246c3b1a68904fc832d35.jpg?q=75&w=384&auto=format%2Ccompress"
              alt="Batch Banner"
              className="w-full h-full object-cover rounded-lg transform group-hover:scale-105 transition-transform duration-500"
            />
            <div className="flex gap-3 mt-3 justify-center md:justify-start">
              <span className="bg-purple-100 text-purple-700 text-xs px-3 py-1 rounded-full font-semibold">
                English
              </span>
              <span className="bg-purple-100 text-purple-700 text-xs px-3 py-1 rounded-full font-semibold">
                Partial Syllabus
              </span>
            </div>
          </div>

          {/* Right content */}
          <div className="flex-1 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-purple-200 text-purple-800 text-xs font-semibold px-3 py-1 rounded-full shadow-sm select-none">
                  ⭐ Recommended
                </span>
                <span className="text-sm text-purple-700 font-medium select-none">
                  Top rated • Exceptional educators
                </span>
              </div>
              <h3 className="text-2xl font-extrabold text-gray-900 mb-4 leading-snug">
                Hubballi IIT JEE 2026 Excel 1
              </h3>

              <ul className="text-gray-700 space-y-2 list-disc list-inside text-base">
                <li>📘 Full IIT JEE syllabus completion</li>
                <li>🗂️ Topic-wise full syllabus notes</li>
                <li>🏫 Unacademy IIT JEE – Centres and Unacademy IIT JEE TEST</li>
              </ul>
            </div>

            {/* Bottom section */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-purple-700 text-white px-6 py-2 rounded-lg text-sm font-semibold shadow-md hover:bg-purple-800 transition"
              >
                View batch details
              </motion.button>
              <p className="text-gray-600 text-sm flex items-center gap-2 select-none">
                🕒 Starts in{" "}
                <span className="font-semibold text-gray-900">1 day</span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
       <section className="py-12 px-6 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50">
      <div className="container max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 max-w-3xl">
          <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
            Explore subject-wise courses
          </h2>
          <div className="flex gap-6 text-base text-gray-600 mt-3 font-medium">
            <div className="flex items-center gap-2">
              <span className="text-yellow-400">✨</span> Best for IIT JEE online coaching
            </div>
            <div className="flex items-center gap-2">
              <span className="text-purple-600">🎓</span> Learn a subject from your favourite educator
            </div>
          </div>
        </div>

        {/* Subheader & Controls */}
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-semibold text-gray-800">Upcoming courses</h3>
          <div className="flex gap-3">
            <button className="text-sm border border-gray-300 px-4 py-1 rounded-lg hover:bg-gray-200 transition">
              SEE ALL
            </button>
            <button className="text-2xl px-3 py-1 rounded-full hover:bg-gray-200 transition">←</button>
            <button className="text-2xl px-3 py-1 rounded-full hover:bg-gray-200 transition">→</button>
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className={`rounded-xl overflow-hidden shadow-lg border border-gray-200 p-4 cursor-pointer bg-white hover:shadow-2xl hover:scale-[1.03] transform transition-transform duration-300 ${course.bgColor}`}
            >
              <img
                src={course.image}
                alt={course.title}
                className="rounded-lg w-full h-44 object-cover mb-4"
              />
              <div className="flex gap-3 mb-3">
                <span className="text-xs bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full font-semibold select-none">
                  {course.lang}
                </span>
                <span className="text-xs bg-purple-100 text-purple-800 px-3 py-1 rounded-full font-semibold select-none">
                  {course.subject}
                </span>
              </div>
              <h4 className="font-semibold text-gray-900 text-lg mb-1 line-clamp-2">{course.title}</h4>
              <p className="text-sm text-gray-700 mb-1 font-medium">{course.educator}</p>
              <p className="text-xs text-gray-400 select-none">Ended on {course.endDate}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
       <section className="bg-white py-12 px-6">
      <div className="container max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 max-w-3xl"
        >
          <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
            Explore Unacademy Centres
          </h2>
          <p className="text-gray-600 mt-2 text-lg">
            Learn from top educators in your own city
          </p>
          <div className="flex flex-wrap gap-6 mt-5 text-sm font-semibold text-blue-600">
            {["In-person classes & doubt solving", "Exclusive quiet spaces for your self-study", "Bonus access to online learning"].map((item, i) => (
              <motion.div
                key={i}
                className="flex items-center gap-2"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.15 }}
              >
                <span className="text-blue-400 text-xl">💎</span> {item}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Image & Controls */}
        <motion.div
          initial={{ scale: 0.98, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative rounded-xl overflow-hidden shadow-xl max-w-5xl mx-auto"
        >
          <img
            src="https://static.uacdn.net/web-cms/uncentre_LP_b041622b0f.jpg?q=75&auto=format%2Ccompress&w=1920"
            alt="Unacademy Center"
            className="w-full h-auto object-cover rounded-xl"
            loading="lazy"
          />

          {/* Video Tour Button */}
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "#f3f4f6" }}
            className="absolute bottom-5 left-5 flex items-center gap-3 bg-white px-5 py-3 rounded-full shadow-md text-blue-700 font-semibold cursor-pointer select-none"
          >
            <PlayCircle size={24} />
            Video tour
          </motion.button>

          {/* Navigation Buttons */}
          <motion.button
            whileHover={{ scale: 1.2, backgroundColor: "#f3f4f6" }}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-md cursor-pointer select-none"
            aria-label="Previous"
          >
            <ChevronLeft size={24} />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.2, backgroundColor: "#f3f4f6" }}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-md cursor-pointer select-none"
            aria-label="Next"
          >
            <ChevronRight size={24} />
          </motion.button>
        </motion.div>
      </div>
    </section>
     <section className="py-12 px-4 sm:px-10 lg:px-20 bg-white">
      <div className="container max-w-6xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-8"
        >
          Our Centres are now open across India
        </motion.h2>

        {/* Centres Grid */}
        <div className="flex flex-wrap gap-6">
          {centers.map((center, idx) => (
            <motion.div
              key={center.name + idx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 * idx }}
              whileHover={{ scale: 1.05, boxShadow: "0 10px 15px rgba(0,0,0,0.1)" }}
              className="flex items-center gap-3 border border-gray-200 rounded-lg px-5 py-4 cursor-pointer bg-white hover:bg-gray-50 transition-shadow w-full sm:w-auto"
            >
              <div className={`w-12 h-12 rounded-md flex-shrink-0 ${center.color}`}></div>
              <div>
                <h4 className={`text-base font-semibold ${center.text}`}>
                  {center.name}
                </h4>
                <p className="text-xs text-gray-500">{center.state}</p>
              </div>
            </motion.div>
          ))}

          {/* View All */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 * centers.length }}
            whileHover={{ scale: 1.05, boxShadow: "0 10px 15px rgba(0,0,0,0.1)" }}
            className="flex items-center gap-3 border border-gray-200 rounded-lg px-5 py-4 cursor-pointer bg-gray-100 hover:bg-gray-200 transition-shadow w-full sm:w-auto"
          >
            <div className="w-12 h-12 flex items-center justify-center bg-gray-300 rounded-md">
              <MapPin size={24} className="text-gray-600" />
            </div>
            <div>
              <h4 className="text-base font-semibold text-gray-700">View all</h4>
            </div>
          </motion.div>
        </div>

        {/* Know More Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="mt-8 px-8 py-3 bg-gray-900 hover:bg-gray-800 text-white rounded-md text-sm font-semibold shadow-lg transition"
        >
          Know more about Centres
        </motion.button>
      </div>
    </section>
      <section className="bg-gray-50 py-10 px-4 sm:px-8 lg:px-16">
      <div className="container">
         <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between gap-8">
        {/* Left content */}
        <div className="flex-1">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2">
            All about JEE (Mains and Advanced) Exam
          </h2>
          <p className="text-sm text-gray-500 mb-6">
            Prepare for the Highly Competitive Entrance Exam with Unacademy
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <a href="#" className="text-gray-700 hover:underline flex items-center justify-between">
              What is IIT-JEE? <span className="ml-2">›</span>
            </a>
            <a href="#" className="text-gray-700 hover:underline flex items-center justify-between">
              IIT-JEE Eligibility Criteria <span className="ml-2">›</span>
            </a>
            <a href="#" className="text-gray-700 hover:underline flex items-center justify-between">
              IIT-JEE Syllabus & Study Plan <span className="ml-2">›</span>
            </a>
            <a href="#" className="text-gray-700 hover:underline flex items-center justify-between">
              Frequently Asked Questions <span className="ml-2">›</span>
            </a>
          </div>
        </div>

        {/* Right image */}
        <div className="w-full md:w-auto">
          <img
            src="https://cdn-icons-png.flaticon.com/512/5231/5231019.png" // Replace with your image if needed
            alt="JEE Illustration"
            className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover mx-auto md:mx-0"
          />
        </div>
      </div>
      </div>
      
    </section>
    <Footer/>
       




    </>
  )
}

export default Home 
import React, { useState, useEffect, useRef } from "react";
import bannervideo from "../../assets/Images/Homepageimages/bannervideo.mp4";
import hero from "../../../src/assets/Images/Homepageimages/hero.jpg";
import { FaPlayCircle, FaPauseCircle } from "react-icons/fa"; // Import icons
import cp from "../../../src/assets/Images/Homepageimages/flipcardimage1.jpg";
import article1images from "../../assets/Images/Homepageimages/article1images.jpg";
import zaptech from "../../../src/assets/Images/Homepageimages/zaptech.jpg";
import homevideo from "../../assets/Images/Homepageimages/homevideo.mp4";
import { FiLayout } from "react-icons/fi";
import { RxValueNone } from "react-icons/rx";
import VanillaTilt from 'vanilla-tilt';
import {
  BsMicrosoft,
  BsAndroid2,
  BsFillNodeMinusFill,
  BsVirus,
} from "react-icons/bs";
import { AiFillEye } from "react-icons/ai";

import { SiCoinmarketcap, SiWebpack } from "react-icons/si";

import { GiTreeGrowth } from "react-icons/gi";

// import { FaCode, FaChartLine, FaLightbulb } from "react-icons/fa";

import image1 from "../../assets/Images/Homepageimages/image1.png";

import image2 from "../../assets/Images/Homepageimages/image2.png";

import image3 from "../../assets/Images/Homepageimages/image3.png";

import image4 from "../../assets/Images/Homepageimages/image4.jpg";
import section2 from "../../assets/Images/Homepageimages/section2.jpg";
import image5 from "../../assets/Images/Homepageimages/image5.jpg";
import flip1 from "../../assets/Images/Homepageimages/flip1.jpg";
import flip2 from "../../assets/Images/Homepageimages/flip2.jpg";
import flip3 from "../../assets/Images/Homepageimages/flip3.jpg";
import flip4 from "../../assets/Images/Homepageimages/flip4.jpg";
import mission from "../../assets/Images/Homepageimages/mission.png";
import aboutrightimage1 from "../../assets/Images/Homepageimages/aboutrightimage1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";
import article from "../../assets/Images/Homepageimages/article.jpg";
import featuresimage1 from "../../assets/Images/Homepageimages/featuresimage1.jpg";
import featuresimage2 from "../../assets/Images/Homepageimages/featuresimage2.jpg";
import featuresimage3 from "../../assets/Images/Homepageimages/featuresimage3.jpg";
import featuresimage4 from "../../assets/Images/Homepageimages/featuresimage4.jpg";
import featuresimage5 from "../../assets/Images/Homepageimages/featuresimage5.jpg";
import featuresimage6 from "../../assets/Images/Homepageimages/featuresimage6.jpg";
import Marquee from "react-fast-marquee";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

const Home = () => {
  const header1 = require("../../assets/Images/Homepageimages/header1.jpg");
  const header2 = require("../../assets/Images/Homepageimages/header2.jpg");
  const header3 = require("../../assets/Images/Homepageimages/header3.png");
  const header4 = require("../../assets/Images/Homepageimages/header4.png");
  const header5 = require("../../assets/Images/Homepageimages/header5.png");
  const slides = [
    {
      image: header1,
      // content: "GRAVITON WEB ",
    },

    {
      image: header2,
      // content: "Content for Slide 3",
    },
    {
      image: header3,
      // content: "Content for Slide 3",
    },
    {
      image: header4,
      // content: "Content for Slide 3",
    },
    {
      image: header5,
      // content: "Content for Slide 3",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  const colors = ["text-red-500", "text-blue-500", "text-green-500"]; // List of Tailwind CSS color classes
  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % slides.length;
      setCurrentIndex(nextIndex);
    }, 2000); // Change slide every 1 second (1000 milliseconds)

    return () => {
      clearInterval(interval); // Cleanup the interval on component unmount
    };
  }, [currentIndex]);




  // CARDS DATA
 useEffect(() => {

   

    VanillaTilt.init(document.querySelectorAll('.tilt'), {

      max: 25,

      speed: 400,

      glare: true,

      'max-glare': 0.4,

    });

  }, []);

  return (
    <>
      {/* banner start */}

      {/* <div className="max-w-[1640px] mx-auto">
        <div className="max-h-[500px] relative grid grid-cols-1">
          <div className="absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center p-5 ">
            <h1 className="text-6xl  font-bold">Welcome To Graviton Web</h1>

            <h1 className="text-6xl  font-bold ">Technologies</h1>

            <p className=" mt-10 m-1">
              We Are A Team Of Web Experts With Experience<br/> In Website Building
              And Marketing To Help Businesses Grow Online.
            </p>
          </div>

          <img
            className="w-full max-h-[500px] object-cover"
            src={hero}
            alt=""
          />
        </div>
      </div> */}

      {/* slider */}
      <div className="max-w-screen h-[780px] w-full    relative group">
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].image})` }}
          className="w-full h-full  bg-center bg-cover duration-500"
        >
          <div className="absolute inset-0 flex items-center justify-center ">
            <div className="text-white text-2xl p-4">
              {slides[currentIndex].content}
            </div>
          </div>
        </div>

        {/* Left Arrow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        {/* Right Arrow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
        <div className="flex top-4 justify-center py-2">
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className="text-2xl cursor-pointer"
            >
              <RxDotFilled />
            </div>
          ))}
        </div>
      </div>
      {/* slider */}
      {/* banner end */}

      {/* <section className="box">
        <div className="BannerApp">
          <video src={bannervideo} autoPlay muted loop></video>
          <h1
            className={`text-4xl font-bold mt-4 animate-slide-in-up ${colors[currentColorIndex]} transition-colors duration-500`}
          >
            GRAVITON WEB
          </h1>
          <h3
            className={`text-xl mt-2 hover:text-yellow-500 ${colors[currentColorIndex]} transition-colors duration-500`}
          >
            TECHNOLOGY
          </h3>
        </div>
      </section> */}
      {/* banner end */}
      {/* about us start */}
      {/* <div class=" h-[525px]">
        <div class="flex justify-center items-center bg-white ">
          <div class="text-center ">
            <h1 class="text-5xl text-[#1293d4] mt-30  font-bold ">About Us</h1>

            <h1 class="text-3xl font-bold mb-[50px] mt-[50px]">
              We will help you grow your business
            </h1>

            <p class="text-base text-[#1293d4] text-lg mb-[50px]">
            We are a team of web experts with experience in website building and
            marketing to help businesses grow online.
          </p>
          </div>
        </div>

        <div class="flex justify-center mt-8">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="group h-auto md:h-80 w-full md:w-80 p-4  rounded-lg transition transform hover:scale-105 bg-gradient-to-br from bg-[#004274] text-white">
              <div class="flex items-center justify-center">
                <AiFillEye className="w-10 h-10 mr-5" />
                <h2 class="text-xl font-semibold items-center justify-center">
                  Our Vision
                </h2>
              </div>

              <p class="text-white-600 mt-5 items-center justify-center p-[20px] m-[20px]">
                Our vision is to become a global leader in providing the best
                and unique web design and marketing services to improve our
                client’s productivity and business strength.
              </p>
            </div>

            <div class="group h-auto md:h-100 w-full md:w-80 p-4  rounded-lg transition transform hover:scale-105 relative">
              <div class="relative h-full w-full">
                <img src={mission} alt="" class="w-full h-full object-cover" />

                <div class="absolute inset-0 bg-black opacity-50"></div>

                <div class="absolute inset-0 flex flex-col justify-center items-center text-white">
                  <div class="flex items-center mb-4">
                    <BsVirus class="w-10 h-10 mr-2" />
                    <h2 class="text-xl font-semibold">Mission</h2>
                  </div>

                  <p class="text-gray-200 text-center">
                    Our company’s core values include integrity, excellence,
                    teamwork, and customer satisfaction. We believe in
                    conducting our business with the highest ethical standards
                    and delivering the best possible outcomes for our clients.
                  </p>
                </div>
              </div>
            </div>

            <div class="group h-auto md:h-80 w-full md:w-80 p-4  rounded-lg transition transform hover:scale-105 bg-gradient-to-br from bg-[#004274] text-white">
              <div class="flex items-center justify-center">
              <RxValueNone className="w-10 h-10 mr-5" />
              <h2 class="text-xl font-semibold">Our Value</h2>
              </div>

              <p class="text-gray-200 mt-5 items-center justify-center p-[20px] ">
                We embrace continuous innovation, pushing the boundaries of
                technology to deliver cutting-edge software solutions that
                empower businesses and individuals to thrive in the digital age.
              </p>
            </div>

          </div>
        </div>
      </div> */}

      <div className="bg-white-900 min-h-screen flex justify-center items-center mt-[100px]">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 p-12 ml-2">
            <h6 className="font-bold text-2xl  ml-[45px] mt-15  text-blue-500 ">
              WE ARE AWESOME
            </h6>
            <h1 className="font-bold text-4xl ml-[45px] mt-[20px] ">
              WE SERVICE THE BEST AMONG ALL IN THE INDUSTRY
            </h1>
            <p className="p-12 pr-12 md:pr-12 mt-4 md:mt-0">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor uFlabore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercr itation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proins sunt in
              culpa qui officia deserunt mollit anim id est laborum. cillum
              dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
              non proins sunt in culpa qui officia deserunt mollit anim id est
              laborum.
            </p>
            <button className="bg-[#004274] text-white px-4 py-2 rounded transition-transform transition-shadow duration-300 ease-in-out hover:translate-x-2 hover:shadow-md ml-[50px] mb-[30px]">
              Read More
            </button>
          </div>
          <div className="w-auto md:w-1/2 p-4 md:pl-8 md:pr-8">
            <img
              src={aboutrightimage1}
              alt=""
              className="w-[500px] h-auto ml-[69px] rounded-2xl"
            />
          </div>
        </div>
      </div>
      {/* about end */}
      {/* flips start */}

      <div class="flex min-h-screen justify-center items-center ">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-6 rounded-lg ">
          {/* <!-- Card 1 --> */}

          <div class="group h-96 w-72 p-4 m-auto  rounded-lg transition transform hover:scale-105">
            <div class="relative h-full w-full rounded-xl bg-[#1293d4]  shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              <div class="absolute inset-0">
                <img
                  class="h-full w-full rounded-xl object-cover shadow-xl"
                  src={flip1}
                  alt=""
                />
              </div>

              <div class="absolute inset-0 h-full w-full rounded-xl bg-[#004274] px-6 text-slate-200 flex items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div class="text-center">
                  <h1 class="font-bold text-xl mb-4">
                    Why Choose Graviton for Your Company Website?
                  </h1>

                  <p class="text-base text-justify tracking-tighter">
                    At Graviton Web Technologies, we understand that behind
                    every business, there is a dream, a vision that ignites
                    passion and drives ambition. That’s why choosing us means
                    choosing a partner who genuinely cares about your success.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Card 2 --> */}

          <div class="group h-96 w-72 p-4 m-auto  rounded-lg transition transform hover:scale-105">
            <div class="relative h-full w-full rounded-xl bg-[#004274] shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              <div class="absolute inset-0">
                <img
                  class="h-full w-full rounded-xl object-cover shadow-xl"
                  src={flip2}
                  alt=""
                />
              </div>

              <div class="absolute inset-0 h-full w-full rounded-xl bg-[#004274] px-6 text-slate-200 flex items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div class="text-center">
                  <h1 class="font-bold text-xl mb-4">Development</h1>

                  <p class="text-base text-justify tracking-tighter">
                    Looking out for Software and Freelancer services, App
                    development & ERP and billing software ? Our team will
                    develop and deliver a website that’ll serve your purpose
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Card 3 --> */}

          <div class="group h-96 w-72 p-4 m-auto  rounded-lg transition transform hover:scale-105">
            <div class="relative h-full w-full rounded-xl bg-[#004274]shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              <div class="absolute inset-0">
                <img
                  class="h-full w-full rounded-xl object-cover shadow-xl"
                  src={flip3}
                  alt=""
                />
              </div>

              <div class="absolute inset-0 h-full w-full rounded-xl bg-[#004274] px-6 text-slate-200 flex items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div class="text-center">
                  <h1 class="font-bold text-xl mb-4">Marketing</h1>

                  <p class="text-base text-justify tracking-tighter">
                    Unleash the Power of Persuasion: Where Digital Marketing,
                    Graphic Designing, and Video Editing Combine to Create
                    Captivating Campaigns.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Card 4 --> */}

          <div class="group h-96 w-72 p-4 m-auto rounded-lg transition transform hover:scale-105">
            <div class="relative h-full w-full rounded-xl bg-[#004274] shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              <div class="absolute inset-0">
                <img
                  class="h-full w-full rounded-xl object-cover shadow-xl"
                  src={flip4}
                  alt=""
                />
              </div>

              <div class="absolute inset-0 h-full w-full rounded-xl bg-[#004274] px-6 text-slate-200 flex items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div class="text-center">
                  <h1 class="font-bold text-2xl mb-4">Consultancy</h1>

                  <p class="text-base text-justify tracking-tighter">
                    Our web design team has ample years of experience in the
                    core areas of design to build a website that you need.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* flips end */}

      {/* marquee */}
      {/* <div className="bg-white py-16 mt-[150px] ">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#1293d4] mb-[10px]">
            Our Technologies
          </h1>
        </div>
        <div className="mt-10 ">
          <Marquee direction="right" speed={80} delay={5}>
            <div className="image_wrapper">
              <img src={image1} alt="" className="w-[180px] h-[100px]" />
            </div>

            <div className="image_wrapper ml-10">
              <img src={image2} alt="" className="w-[180px] h-[100px]" />
            </div>

            <div className="image_wrapper ml-10">
              <img src={image3} alt="" className="w-[180px] h-[100px]" />
            </div>

            <div className="image_wrapper ml-10">
              <img src={image4} alt="" className="w-[180px] h-[100px]" />
            </div>

            <div className="ml-10">
              <img src={image5} alt="" className="w-[180px] h-[100px]" />
            </div>
          </Marquee>
        </div>
      </div> */}

      {/* marquee */}

      {/* section part start */}
      <div className="bg-white-900 min-h-screen flex justify-center items-center mt-[100px]">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 p-4 md:pl-8 md:pr-8">
            <img
              src={section2}
              alt=""
              className="w-[500px] h-auto ml-[69px] rounded-2xl"
            />
          </div>
          <div className="w-full md:w-1/2 p-12 ml-2">
            <h6 className="font-bold text-2xl  ml-[45px] mt-15  text-blue-500 ">
              WE ARE AWESOME
            </h6>
            <h1 className="font-bold text-4xl ml-[45px] mt-[20px] ">
              WE SERVICE THE BEST AMONG ALL IN THE INDUSTRY
            </h1>
            <p className="p-12 pr-12 md:pr-12 mt-4 md:mt-0">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor uFlabore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercr itation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proins sunt in
              culpa qui officia deserunt mollit anim id est laborum. cillum
              dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
              non proins sunt in culpa qui officia deserunt mollit anim id est
              laborum.
            </p>
            <button className="bg-[#004274] text-white px-4 py-2 rounded transition-transform transition-shadow duration-300 ease-in-out hover:translate-x-2 hover:shadow-md ml-[50px] mb-[30px]">
              Read More
            </button>
          </div>
        </div>
      </div>

      {/* section part end */}

      {/* video part */}

      <section className="flex items-center justify-center">

            <div className="h-[700px] w-[1000px] rounded-lg">

                <video src={homevideo} autoPlay muted loop></video>

            </div>

        </section>
      {/* video part end */}
      {/* cards with icons */}

      {/* cards */}
      <h1 className="text-4xl font-bold text-[#1293d4] text-center mt-[5px]">
        Our Services
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-10 mt-[100px] mb-[200px]  ">
        {/* Card 1 */}
        <div class="group h-auto md:h-90 w-full md:w-85 p-4  rounded-lg transition transform hover:scale-105 bg-gradient-to-br bg-[#004274] text-white hover:rotate-45 hover:bg-red-400">
          {" "}
          <div className="text-white">
            <div className="w-20 mx-auto mt-6 text-sky-400 text-white">
              <BsMicrosoft className="p-2 w-full h-20 object-cover text-white" />
            </div>

            <div className="p-5 text-white">
              <p className="text-xl text-center font-bold text-white">
                Software development
              </p>

              <div className="text-center ">
                <div className="flex flex-col items-center ">
                  <p className="mt-4 text-black text-xl text-white">
                    We specialize in providing custom software development
                    services, delivering scalable and innovative applications
                    that empower businesses to streamline processes, enhance
                    productivity, and achieve their goals
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* cards 2 */}

        <div class="group h-auto md:h-90 w-full md:w-85 p-4  rounded-lg transition transform hover:scale-105 bg-gradient-to-br bg-[#004274] text-white hover:rotate-45 hover:bg-red-400">
          <div className="w-20 mx-auto mt-6 text-sky-400  text-white ">
            <BsAndroid2 className="p-2 w-full h-20 object-cover  text-white" />
          </div>

          <div className="p-5">
            <p className="text-xl text-center font-bold text-white ">
              Andriod Development
            </p>

            <div className="text-center">
              <div className="flex flex-col items-center">
                <p className="mt-4 text-white text-xl">
                  We specialize in Android app development, offering end-to-end
                  solutions from ideation and design to development, testing,
                  and deployment, tailored to meet your specific business needs.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* cards 3 */}

        <div class="group h-auto md:h-90 w-full md:w-85 p-4  rounded-lg transition transform hover:scale-105 bg-gradient-to-br bg-[#004274] text-white hover:rotate-45 hover:bg-red-400">
          <div className="w-20 mx-auto mt-6 text-sky-400 text-white ">
            <BsFillNodeMinusFill className="p-2 w-full h-20 object-cover  text-white" />
          </div>

          <div className="p-5">
            <p className="text-xl text-center font-bold text-white ">
              Neuromaketing
            </p>

            <div className="text-center">
              <div className="flex flex-col items-center">
                <p className="mt-4 text-white text-xl">
                  With our expertise in both software development and
                  neuromarketing, we provide tailored solutions that help
                  businesses understand and influence consumer behavior,
                  resulting in improved marketing strategies and increased
                  sales.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* cards 4*/}

        <div class="group h-auto md:h-90 w-full md:w-85 p-4  rounded-lg transition transform hover:scale-105 bg-gradient-to-br bg-[#004274] text-white hover:rotate-45 hover:bg-red-400">
          <div className="w-20 mx-auto mt-6 text-sky-400  ">
            <SiCoinmarketcap className="p-2 w-full h-20 object-cover text-white " />
          </div>

          <div className="p-5">
            <p className="text-xl text-center font-bold  text-white">
              Digital marketing
            </p>

            <div className="text-center">
              <div className="flex flex-col items-center">
                <p className="mt-4 text-white  text-xl">
                  With our expertise in software development and digital
                  marketing, we provide tailored solutions to optimize your
                  online visibility, boost brand awareness, and maximize ROI,
                  utilizing cutting-edge tools and techniques in areas like PPC
                  advertising, email marketing, and analytics.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* cards 5 */}

        <div class="group h-auto md:h-90 w-full md:w-85 p-4  rounded-lg transition transform hover:scale-105 bg-gradient-to-br bg-[#004274] text-white hover:rotate-45 hover:bg-red-400">
          <div className="w-20 mx-auto mt-6 text-sky-400   ">
            <SiWebpack className="p-2 w-full h-20 object-cover text-white " />
          </div>

          <div className="p-5">
            <p className="text-xl text-center font-bold text-white ">
              Webtalent gravity
            </p>

            <div className="text-center">
              <div className="flex flex-col items-center">
                <p className="mt-4 text-white  text-xl">
                  We provides top-notch training and placement solutions,
                  equipping individuals with industry-relevant skills and
                  connecting them with leading software companies for rewarding
                  career opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* cards 6 */}

        <div class="group h-auto md:h-90 w-full md:w-85 p-4  rounded-lg transition transform hover:scale-105 bg-gradient-to-br bg-[#004274] text-white hover:rotate-45 hover:bg-red-400">
          <div className="w-20 mx-auto mt-6 text-sky-400 ">
            <GiTreeGrowth className="p-2 w-full h-20 object-cover  text-white" />
          </div>

          <div className="p-5">
            <p className="text-xl text-center font-bold  text-white">
              Grow your business
            </p>

            <div className="text-center">
              <div className="flex flex-col items-center">
                <p className="mt-4 text-white text-xl">
                  Experience exponential business growth through our innovative
                  software services, enabling you to expand your market reach,
                  unlock new opportunities, and stay ahead of the competition in
                  the digital era.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* background image section start  */}
      <div
        className="h-screen bg-cover bg-center flex items-center"
        style={{ backgroundImage: `url(${zaptech})` }}
      >
        <div className="absolute inset-0 bg-[#333]-100 opacity-50"></div>
        <div className="container mx-auto p-6">
          <div className="flex">
            <div className="w-1/2 ml-10 justify-center m-[100px]">
              <h5 className="text-white font-bold ">WE ARE BEST</h5>

              <h1 className="text-white font-bold text-4xl mt-[20px] mb-[20px]">
                WE HAVE MOST TALENTED PEOPLE IN TEAM
              </h1>
              <p className="text-white font-bold">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magenim oje kothay
                haralo betha kakeje sudhai id tomra keu ki dite est laborum.
              </p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded transition-transform transition-shadow duration-300 ease-in-out hover:translate-x-2 hover:shadow-md  mt-[40px]">
                Learn More
              </button>
            </div>
            {/* <div className="w-1/2 pr-4">
            <img src={article1images} alt="Content" className="rounded-lg" />
          </div> */}
          </div>
        </div>
      </div>
      {/* background image section end */}

      {/* overlay cards start */}
      <div className="flex flex-wrap mx-4 mb-[10px] py-20 px-10 mt-[50px]">
        {/* First Column */}
        <div className="w-full md:w-1/3 px-4 mt-[10px] mb-[40px]">
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
            {/* Content for first column */}
            <img  className="tilt" src={featuresimage1} alt="" />
            <h1 className="text-center font-bold mt-[10px]">
              {" "}
              BUSINESS STRUTEGY & PLANNING
            </h1>
            <p className="text-center  mt-[10px] mb-[10px]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut laborm id est laborum.
            </p>
          </div>
        </div>

        {/* Second Column */}
        <div className="w-full md:w-1/3 px-4 mt-[10px] ">
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <img className="tilt" src={featuresimage2} alt="" />
            <h1 className="text-center font-bold mt-[10px] ">
              BUSINESS CONSULTANCY
            </h1>
            <p className="text-center mt-[10px] mb-[10px]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut laborm id est laborum.
            </p>
          </div>
        </div>

        {/* Third Column */}
        <div className="w-full md:w-1/3 px-4 mt-[10px] ">
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <img  className="tilt" src={featuresimage3} alt="" />
            <h1 className="text-center font-bold mt-[10px] ">
              RESEARCH & DEVELOPMENT
            </h1>
            <p className="text-center mt-[10px] mb-[5px] ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut laborm id est laborum.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/3 px-4 mt-[10px] ">
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            {/* Content for first column */}
            <img className="tilt" src={featuresimage4} alt="" />
            <h1 className="text-center font-bold mt-[10px] ">
              BUSINESS MARKETING
            </h1>
            <p className="text-center mt-[10px] mb-[5px] ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut laborm id est laborum.
            </p>
          </div>
        </div>

        {/* Second Column */}
        <div className="w-full md:w-1/3 px-4 mt-[10px]">
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <img  className="tilt" src={featuresimage5} alt="" />
            <h1 className="text-center font-bold mt-[10px]  ">
              BUSINESS ANALYTICS & GROWTH
            </h1>
            <p className="text-center mt-[10px] mb-[5px] ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut laborm id est laborum.
            </p>
          </div>
        </div>

        {/* Third Column */}
        <div className="w-full md:w-1/3 px-4 mt-[10px]">
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <img
              className=" transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125 tilt"
              src={featuresimage6}
              alt=""
            />
            <h1 className="text-center font-bold mt-[10px]">
              BRANDING & PUBLISHING
            </h1>
            <p className="text-center mt-[10px] mb-[5px]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut laborm id est laborum.
            </p>
          </div>
        </div>
      </div>
      {/* overlay cards end */}

{/* two image oneone side */}

    </>
  );
};

export default Home;

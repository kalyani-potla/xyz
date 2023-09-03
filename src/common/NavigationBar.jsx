

import React, { useState,useEffect } from "react";
import logo from "../../src/assets/Images/Homepageimages/logo.png";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [show, setShow] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 700) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`p-3 sticky top-0 z-50 ${
          isScrolled ? "bg-blue-500 text-white" : "bg-[#004274] text-white"
        }`}
      >
         <div className="container mx-auto flex justify-center items-center">
          <div className="text-white font-semibold font-roboto font-sans text-2xl ml-5">
           <img className="w-100 h-50 mr-[500px] " src={logo} alt=""/>
          </div>

          <div className="lg:hidden">
            {/* Hamburger Icon */}

            <button
              className="text-white p-2 focus:outline-none"
              onClick={() => setIsDrawerOpen(!isDrawerOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>

          {/* Drawer */}

          {isDrawerOpen && (
            <div className="lg:hidden absolute top-0 right-0 h-screen w-64 bg-sky-500 text-white p-4 transition-transform transform translate-x-0">
              <button
                className="text-white p-2 focus:outline-none absolute top-2 right-2"
                onClick={() => setIsDrawerOpen(false)}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>

              <ul className="space-y-3">
                <li>
                  <Link
                    to="/"
                    className="text-white hover:text-white"
                    onClick={() => setIsDrawerOpen(false)}
                  >
                    Home
                  </Link>
                </li>

                <li>
                  <Link
                    to="/About"
                    className="text-white hover:text-white"
                    onClick={() => setIsDrawerOpen(false)}
                  >
                    About
                  </Link>
                </li>
              
                <li>
                  <Link
                    to="/Services"
                    className="text-white hover:text-white"
                    onClick={() => setIsDrawerOpen(false)}
                  >
                   Services
                  </Link>
                </li>

                <li>
                  <Link
                    to="/Grow Your Business"
                    className="text-white hover:text-white"
                    onClick={() => setIsDrawerOpen(false)}
                  >
                     Grow Your Business
                  </Link>
                </li>

                

                <li
              onMouseOver={() => setShow(true)}
              onMouseOut={() => setShow(false)}
            >
              <Link
                to="/Training"
                className="text-white hover:text-white relative"
                onClick={() => setIsDrawerOpen(false)}
              >
                Training
              </Link>

              {show && (
                <div className="absolute bg-[#004274] w-[200px] flex flex-col text-white hover:text-white cursor-pointer  text-center">
                  <p className="hover:bg-blue-500 hover:text-white md:border-b-2  p-2">
                    <Link
                      to="/ WebTalentGravity"
                      className="text-white mt-4 "
                      onClick={() => setIsDrawerOpen(false)}
                    >
                    WebTalentGravity
                    </Link>
                  </p>

                  <p className="hover:bg-blue hover:text-white md:border-b-2 p-2">
                    <Link
                      to="/ProfessionalTraining"
                      className="text-white "
                      onClick={() => setIsDrawerOpen(false)}
                    >
              ProfessionalTraining
                    </Link>
                  </p>

                  <p className="hover:bg-blue-500 hover:text-white md:border-b-2 p-2">
                    <Link
                      to="/Certification Program"
                      className="text-white "
                      onClick={() => setIsDrawerOpen(false)}
                    >
                     Certification Program
                    </Link>
                  </p>

                  <p className="hover:bg-blue-500 hover:text-white md:border-b-2 p-2">
                    <Link
                      to="/Placement Assurance Program"
                      className="text-white "
                      onClick={() => setIsDrawerOpen(false)}
                    >
                   Placement Assurance Program
                    </Link>
                  </p>

                  
                </div>
              )}
            </li>

            <li>
                  <Link
                    to="/contact"
                    className="text-white hover:text-white"
                    onClick={() => setIsDrawerOpen(false)}
                  >
                    Contact
                  </Link>
                </li>
              </ul>

              {/* <div className="mt-4">
                <Link to="/Contact">
                  <button className="bg-sky-500 rounded-md p-3 font-semibold">
                    Get a Quote
                  </button>
                </Link>
              </div> */}
            </div>
          )}

          <ul className="hidden lg:flex space-x-4">
            <li>
              <Link
                to="/"
                className="text-white hover:text-white"
                activeClassName="font-bold"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/About"
                className="text-white hover:text-white"
                activeClassName="font-bold"
              >
                About
              </Link>
            </li>
           
            <li>
              <Link
                to="/insurance"
                className="text-white hover:text-white"
                activeClassName="font-bold"
              >
               Services
              </Link>
            </li>

            <li>
              <Link
                to="/Policy"
                className="text-white hover:text-white"
                activeClassName="font-bold"
              >
               Grow Your Business
              </Link>
            </li>

            <li
              onMouseOver={() => setShow(true)}
              onMouseOut={() => setShow(false)}
            >
              <Link
                to="/Training"
                className="text-white hover:text-white relative"
                onClick={() => setIsDrawerOpen(false)}
              >
                Training
              </Link>

              {show && (
                <div className="absolute bg-[#004274]  w-[200px] flex flex-col text-white hover:text-white cursor-pointer  text-center">
                  <p className="hover:bg-blue-500 hover:text-white md:border-b-2  p-2">
                    <Link
                      to="/WebTalentGravity"
                      className="text-white mt-4 "
                      onClick={() => setIsDrawerOpen(false)}
                    >
                    WebTalentGravity
                    </Link>
                  </p>

                  <p className="hover:bg-blue-500 hover:text-white md:border-b-2 p-2">
                    <Link
                      to="/ProfessionalTraining"
                      className="text-white "
                      onClick={() => setIsDrawerOpen(false)}
                    >
             ProfessionalTraining
                    </Link>
                  </p>

                  <p className="hover:bg-blue-500 hover:text-white md:border-b-2 p-2">
                    <Link
                      to="/Certification Program"
                      className="text-white "
                      onClick={() => setIsDrawerOpen(false)}
                    >
                     Certification Program
                    </Link>
                  </p>

                  <p className="hover:bg-blue-500 hover:text-white md:border-b-2 p-2">
                    <Link
                      to="/Placement Assurance Program"
                      className="text-white "
                      onClick={() => setIsDrawerOpen(false)}
                    >
                   Placement Assurance Program
                    </Link>
                  </p>

                  
                </div>
              )}
            </li>
            <li>
              <Link
                to="/contact"
                className="text-white hover:text-white"
                activeClassName="font-bold"
              >
                Contact
              </Link>
            </li>
           
          </ul>

          {/* <div className="hidden lg:flex justify-center text-white ">
            <Link to="/Contact">
              <button className="bg-sky-500 rounded-md p-3 font-semibold">
                Get a Quote
              </button>
            </Link>
          </div> */}
        </div>
      </nav>
    </>
  );
};

export default NavigationBar;

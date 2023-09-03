import React from "react";
import Professionalbanner from "../../assets/Images/ProffisionalImages/proffisionalbanner.png";
import profissionalsection1images1 from "../../assets/Images/ProffisionalImages/profissionalsection1images1.png";
// import andriod1images1 from '../../assets/Images/ProffisionalImages/andriodimages1.png';
// import andriod2images2 from '../../assets/Images/ProffisionalImages/andriodimages2.png';
// import andriod3images3 from '../../assets/Images/ProffisionalImages/andriodimages3.png';
// import andriod4images4 from '../../assets/Images/ProffisionalImages/andriodimages4.png';
import aboutbackground from "../../assets/Images/ProffisionalImages/aboutbackground.png";
import aboutbackgroundimage1 from "../../assets/Images/ProffisionalImages/aboutbackgroundimage1.png";
import aboutimages from "../../assets/Images/ProffisionalImages/aboutimages.png";
const About = () => {
  return (
    <>
      <div>
        {/* banner start */}
        <div className="max-w-[1640px] mx-auto">
          <div className="max-h-[500px] relative grid grid-cols-1">
            <div className="absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center p-5 items-left">
              <h1 className="text-left">
                Home / <span className="text-sky-500">About</span>
              </h1>
            </div>

            <img
              className="w-full max-h-[500px] object-cover"
              src={Professionalbanner}
              alt=""
            />
          </div>
        </div>
        {/* banner end */}
        {/* section start1 */}
        {/* <h1 className="text-center font-bold text-4xl mt-[80px]">Technical Development</h1> */}
        <div className="bg-white-900 min-h-screen flex justify-center items-center">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 p-12 ml-2">
              <h2 className="font-bold text-2xl  ml-[45px] mt-15">About Us:</h2>
              <p className="p-12 pr-12 md:pr-12 mt-4 md:mt-0">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor uFlabore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercr itation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proins sunt in
                culpa qui officia deserunt mollit anim id est laborum. cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proins sunt in culpa qui officia deserunt mollit
                anim id est laborum.
              </p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded transition-transform transition-shadow duration-300 ease-in-out hover:translate-x-2 hover:shadow-md ml-[50px] mb-[30px]">
                SERVICES
              </button>
            </div>
            <div className="w-full md:w-1/2 p-4 md:pl-8 md:pr-8">
              <img
                src={profissionalsection1images1}
                alt=""
                className="max-w-full h-auto"
              />
            </div>
          </div>
        </div>
        {/* section start2 */}
        {/* SECTION START3 */}
        <div className="max-w-[1640px] mx-auto">
          <div className="max-h-[500px] relative grid grid-cols-1">
            <div className="absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center p-5 items-center">
              {/* <h1 className="text-5xl text-center">Welcome To Graviton Web</h1>

            <h1 className="text-5xl text-center">Technologies</h1>

            <p className="text-center mt-5">
              We Are A Team Of Web Experts With Experience In Website Building
              And Marketing To Help Businesses Grow Online.
            </p> */}
              <img
                src={aboutbackgroundimage1}
                alt=" "
                className="rounded-full w-30 h-30 object-cover"
              />
              <p className="text-center m-10 pl-10">
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor uFlabore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercr itation ullamco laboris nisi ut
                aliquip ex ea commodo consequat.
              </p>
            </div>

            <img
              className="w-full max-h-[500px] object-cover"
              src={aboutbackground}
              alt=""
            />
          </div>
        </div>
        {/* SECTION END3 */}
        {/* section4start */}
        <div className="bg-white-900 min-h-screen flex justify-center items-center">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 p-12 ml-2">
              <h2 className="font-bold text-2xl  ml-[45px] mt-15">
                Our Mission:
              </h2>
              <p className="p-12 pr-12 md:pr-12 mt-4 md:mt-0">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor uFlabore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercr itation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proins sunt in
                culpa qui officia deserunt mollit anim id est laborum. cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proins sunt in culpa qui officia deserunt mollit
                anim id est laborum.
              </p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded transition-transform transition-shadow duration-300 ease-in-out hover:translate-x-2 hover:shadow-md ml-[50px] mb-[30px]">
                SERVICES
              </button>
            </div>
            <div className="w-full md:w-1/2 p-4 md:pl-8 md:pr-8">
              <img src={aboutimages} alt="" className="max-w-full h-auto" />
            </div>
          </div>
        </div>
        {/* section4end */}
      </div>
    </>
  );
};

export default About;

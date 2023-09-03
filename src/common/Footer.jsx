import React from "react";
import {AiFillFacebook, AiFillInstagram, AiFillYoutube} from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineEmail, MdLocationPin } from "react-icons/md";
import { Link } from "react-router-dom";
import footergalleryimage1 from "../../src/assets/Images/Homepageimages/footergalleryimage1.jpg";
import footergalleryimage2 from "../../src/assets/Images/Homepageimages/footergalleryimage2.jpg";
import footergalleryimage3 from "../../src/assets/Images/Homepageimages/footergalleryimage3.jpg";
import footergalleryimage4 from "../../src/assets/Images/Homepageimages/footergalleryimage4.jpg";
import footergalleryimage5 from "../../src/assets/Images/Homepageimages/footergalleryimage5.jpg";
import footergalleryimage6 from "../../src/assets/Images/Homepageimages/footergalleryimage6.jpg";
import footerrecentsimage1 from "../../src/assets/Images/Homepageimages/footerrecentimage1.jpg";
import footerrecentsimage2 from "../../src/assets/Images/Homepageimages/footerrecentimage2.jpg";
const Footer = () => {
  return (
    <>
     
<div className="bg-[#004274] p-4 text-white flex flex-col md:flex-row items-center justify-between">
  <div className="flex items-center space-x-4">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 text-orange-500"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
      />
    </svg>
    <p>Tavarekere, Aicobo Nagar, BTM 1st Stage, Bengaluru</p>
  </div>
  <div className="flex items-center space-x-4 mt-4 md:mt-0">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 text-orange-500"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 22s8-4 8-10V8a8 8 0 00-16 0v4c0 6 8 10 8 10z"
      />
    </svg>
    <p>+91-9415174046</p>
  </div>
  <div className="flex items-center space-x-4 mt-4 md:mt-0">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 text-orange-500"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
      />
    </svg>
    <p>info@gravitonweb.com</p>
  </div>
</div>


{/* footer section start */}
<div class="flex flex-col md:flex-row justify-center  bg-[#222] text-white h-auto md:h-[400px] p-4  ">

  <div class="mt-4 md:mt-0 md:mr-4 md:w-1/4 ">
    
    <h3 class="text-xlg mt-[100px] font-bold  md:mt-0 md:mb-4 ">ABOUT US</h3>
  <p className="mt-2">Lorem ipsum dolor sit amet,</p>
  <p className="mt-2">consec tetur adipisi cing</p>
  <p className="mt-2">sed do eiusmod tempor incid</p>
  <p className="mt-2">labore et dolore magna aliqua</p>
  <p className="mt-2">
    <span className="flex gap-4">
      <AiFillFacebook className="w-[30px] h-[30px]" />
      <AiFillInstagram className="w-[30px] h-[30px]" />
      <AiFillYoutube className="w-[30px] h-[30px]" />
    </span>
  </p>
</div>

<div class="mt-4 md:mt-0 md:mr-4 md:w-1/4">
    <h3 class="text-xlg font-bold mt-4 md:mt-0 md:mb-4">GALLERY</h3>
    <div class="flex flex-wrap">
        <img class="w-[30px] h-[30px] md:w-[30px] md:h-[30px] lg:w-[30px] lg:h-[30px] m-1" src={footergalleryimage1} alt="" />
        <img class="w-[30px] h-[30px] md:w-[30px] md:h-[30px] lg:w-[30px] lg:h-[30px] m-1" src={footergalleryimage2} alt="" />
        <img class="w-[30px] h-[30px] md:w-[30px] md:h-[30px] lg:w-[30px] lg:h-[30px] m-1" src={footergalleryimage3} alt="" />
    </div>
    <div class="flex flex-wrap">
        <img class="w-[30px] h-[30px] md:w-[30px] md:h-[30px] lg:w-[30px] lg:h-[30px] m-1" src={footergalleryimage4} alt="" />
        <img class="w-[30px] h-[30px] md:w-[30px] md:h-[30px] lg:w-[30px] lg:h-[30px] m-1" src={footergalleryimage5} alt="" />
        <img class="w-[30px] h-[30px] md:w-[30px] md:h-[30px] lg:w-[30px] lg:h-[30px] m-1" src={footergalleryimage6} alt="" />
    </div>
</div>


<div class="mt-4 md:mt-0 md:mr-4 md:w-1/4">
    <h3 class="text-xlg font-bold mt-4 md:mt-0 md:mb-4">RECENT POSTS</h3>
    <div class="flex flex-col md:flex-row">
    <div class="flex items-center">
        <img src={footerrecentsimage1} alt="" class="mr-2" />
    </div>
    <div class="mt-2 md:mt-0 md:ml-4">
        <p class=" text-sm md:text-left ">
            WHEN THE MUSIC IS OVER TURN OFF
        </p>
        <p class=" text-sm md:text-left ">August 07, 2017</p>
    </div>
</div>
<div class="flex flex-col md:flex-row mt-3">
    <div class="flex items-center">
        <img src={footerrecentsimage2} alt="" class="mr-2" />
    </div>
    <div class="mt-2 md:mt-0 md:ml-4">
        <p class=" text-sm md:text-left ">
            WHEN THE MUSIC IS OVER TURN OFF
        </p>
        <p class=" text-sm md:text-left ">August 07, 2017</p>
    </div>
</div>

</div>
<div class="mt-4 md:mt-0 md:w-1/4">
    <h3 class="text-xlg font-bold mt-4 md:mt-0 md:mb-4">SUBSCRIBE US</h3>
    <div class="flex flex-col">
        <p class="w-[200px] border-black rounded-lg mb-2 md:mb-3">
            <input class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 w-[200px] md:w-[200px] h-[40px]" type="text" placeholder="Your Name"/>
        </p>
        <p class="w-[200px] border-black rounded-lg mb-2 md:mb-3">
            <input class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 w-[200px] md:w-[200px] h-[40px]" type="text" placeholder="Your Email"/>
        </p>
        <p>
            <button class="bg-[#004274] text-white px-4 py-2 rounded-lg hover:bg-orange-600 mt-3 w-[150px] md:w-[150px]">
                SUBMIT
            </button>
        </p>
    </div>
</div>

</div>

{/* footer section end */}
    </>
  );
};

export default Footer;

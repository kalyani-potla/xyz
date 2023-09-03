import React from "react";

const Copyright = () => {
  return (
    <>
     <div class="flex flex-col sm:flex-row items-center justify-between font-roboto text-base bg-[#222] w-full p-2 sm:p-8">
  <div class="text-center sm:text-left mb-2 sm:mb-0">
    <p class="text-white mb-0 text-xs sm:text-sm font-sans px-2 sm:p-5">
      © Copyright 2019 Graviton Web Technology.
    </p>
  </div>
  <div class="text-center sm:text-right">
    <p class="text-white mb-0 text-xs sm:text-sm font-sans px-2 sm:p-5">
      <span>Terms & Condition</span> <span class="ml-2 sm:ml-3">Privacy Policy</span>
      <span class="ml-2 sm:ml-3">Help</span>
    </p>
  </div>
</div>


      {/* -------------------- */}
    </>
  );
};

export default Copyright;

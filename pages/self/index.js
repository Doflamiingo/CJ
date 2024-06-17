import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { motion } from "framer-motion";

const self = () => {
 

  return (
    <div className="scrollable-page bg-self w-full h-full bg-local bg-cover bg-center">
      <h3 className="flex justify-center items-center text-4xl font-nomark mt-5">
        SELF PORTRAIT
      </h3>
      <div className="flex justify-center items-center m-5">
        <iframe
        src="https://open.spotify.com/embed/track/4FRW5Nza1Ym91BGV4nFWXI?utm_source=generator"
          width="500px"
          height="80px"
          frameBorder="0"
          allowtransparency="true"
          allow="encrypted-media"
        ></iframe>
      </div>

      <style jsx>{`
        .scrollable-page {
          overflow: auto;
          max-height: 100vh;
        }
      `}</style>

      <div className="flex item-center justify-center">
        <div className="grid grid-cols-2 grid-rows-3 gap-x-5 xl:gap-y-20 sm:gap-y-5 mt-2 px-3 ">
        <div>
          <img
       src="../11. SELF PORTRAIT/P1085072.jpg"
              alt="Image 1"
              className="xl:h-[500px] xl:w-[500px]"
            />
          </div> <div>
          <img
              src="../11. SELF PORTRAIT/P1085197.jpg"
              alt="Image 1"
              className="xl:h-[500px] xl:w-[500px]"
            />
          </div> <div>
          <img
             src="../11. SELF PORTRAIT/P1085270.jpg"
              alt="Image 1"
              className="xl:h-[500px] xl:w-[500px]"
            />
          </div> 
          <div>
          <img
              src="../11. SELF PORTRAIT/self-portrait-4.jpg"
              alt="Image 1"
              className="xl:h-[500px] xl:w-[500px]"
            />
          </div>
          <div>
          <img
           src="../11. SELF PORTRAIT/P1163625NB.png"
              alt="Image 1"
              className="xl:h-[700px] xl:w-[500px]"
            />
          </div>
          <div>
          <img
           src="../11. SELF PORTRAIT/P1163626.png"
              alt="Image 1"
              className="xl:h-[700px] xl:w-[500px]"
            />
          </div>
         
        </div>
       
      </div>
      <div className="flex item-center justify-center mt-5"  >
          <img
             src="../11. SELF PORTRAIT/P1163642.png"
              alt="Image 1"
              className="xl:h-[700px] xl:w-[500px]"
            />
          </div>
          <div className="flex items-center justify-center">
  <video controls className="w-[25%] h-[80vh] sm:w-[75%] sm:mb-20 sm:mt-5" poster="/background-image-self-portrait.jpg">
    <source src="/smoked-reel-autoportrait-laylow.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</div>
    </div>
  );
};

export default self;

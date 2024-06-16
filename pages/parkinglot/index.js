import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { motion } from "framer-motion";

const parkinglot = () => {

  return (
    <div className="scrollable-page bg-parking w-full h-full bg-local bg-cover bg-center">
      <h3 className="flex justify-center items-center text-4xl font-nomark mt-5">
        Parking Lot
      </h3>
      <div className="flex justify-center items-center m-5">
        <iframe
         src="https://open.spotify.com/embed/track/6DJGTvJuaJ8Q7HtbQgzAZh?utm_source=generator"
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
        <div className="grid grid-cols-2 grid-rows-3 gap-x-5 xl:gap-y-20 sm:gap-y-5 mt-2 px-3 mb-10">
        <div>
          <img
               src="../07. PARKING LOT/parking-lot-1.jpg"
              alt="Image 1"
              className="xl:h-[500px] xl:w-[500px]"
            />
          </div> <div>
          <img
             src="../07. PARKING LOT/parking-lot-2.jpg"
              alt="Image 1"
              className="xl:h-[500px] xl:w-[500px]"
            />
          </div> <div>
          <img
              src="../07. PARKING LOT/parking-lot-3.jpg"
              alt="Image 1"
              className="xl:h-[500px] xl:w-[500px]"
            />
          </div> <div>
          <img
           src="../07. PARKING LOT/parking-lot-4.jpg"
              alt="Image 1"
              className="xl:h-[500px] xl:w-[500px]"
            />
          </div>
          <div>
          <img
              src="../07. PARKING LOT/parking-lot-5.jpg"
              alt="Image 1"
              className="xl:h-[500px] xl:w-[500px]"
            />
          </div>
          <div>
          <img
              src="../07. PARKING LOT/parking-lot-6.jpg"
              alt="Image 1"
              className="xl:h-[500px] xl:w-[500px]"
            />
          </div>
      
        </div>
      </div>
      <div className="flex item-center justify-center"  >
      <img
              src="../07. PARKING LOT/parking-lot-7.jpg"
              alt="Image 1"
              className="xl:h-[500px] xl:w-[500px]"
            />
          </div>
          <div className="flex items-center justify-center">
  <video controls className="w-[25%] h-[80vh]" poster="/background-parking-lot.jpg">
    <source src="/video-shoot-anagram-goal-josman.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</div>
    </div>
  );
};

export default parkinglot;

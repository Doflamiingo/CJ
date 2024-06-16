import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { motion } from "framer-motion";

const  marenostrum = () => {


  return (
    <div className="scrollable-page bg-bgabove w-full h-full bg-local bg-cover bg-center">
      <h3 className="flex justify-center items-center text-4xl font-nomark mt-5">
        Mare nostrum
      </h3>
      <p className="flex justify-center items-center text-xl  text-white mb-28 xl:mb-10">
      Shooting en collaborations avec la styliste <a href=" https://instagram.com/pereira.sarda?igshid=M2RkZGJiMzhjOQ== " target="_blank" className=" text-accent px-2">Pereira Sarda</a> pour sa collection « Mare Nostrum »
      </p>
      <div className="flex justify-center items-center mt-5 mb-5">
        <iframe
         src="https://open.spotify.com/embed/track/4PvVX27CitqLAamcc0PCRU?utm_source=generator"
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
        <div className="grid grid-cols-2 grid-rows-3 gap-x-5 xl:gap-y-20 sm:gap-y-5 mt-2 px-3 mb-5">
        <div>
          <img
            src="../03. MARE NOSTRUM/mare-nostrum-pereira-sarda-1.jpg"
              alt="Image 1"
              className="xl:h-[650px] xl:w-[500px]"
            />
          </div> <div>
          <img
             src="../03. MARE NOSTRUM/mare-nostrum-pereira-sarda-2.jpg"
              alt="Image 1"
              className="xl:h-[650px] xl:w-[500px]"
            />
          </div> <div>
          <img
            src="../03. MARE NOSTRUM/mare-nostrum-pereira-sarda-3.jpg"
              alt="Image 1"
              className="xl:h-[650px] xl:w-[500px]"
            />
          </div> <div>
          <img
           src="../03. MARE NOSTRUM/mare-nostrum-pereira-sarda-4.jpg"
              alt="Image 1"
              className="xl:h-[650px] xl:w-[500px]"
            />
          </div>
          <div>
          <img
             src="../03. MARE NOSTRUM/mare-nostrum-pereira-sarda-5.jpg"
              alt="Image 1"
              className="xl:h-[650px] xl:w-[500px]"
            />
          </div>
          <div>
          <img
          src="../03. MARE NOSTRUM/mare-nostrum-pereira-sarda-6.jpg"
              alt="Image 1"
              className="xl:h-[650px] xl:w-[500px]"
            />
          </div><div>
          <img
           src="../03. MARE NOSTRUM/mare-nostrum-pereira-sarda-7.jpg"
              alt="Image 1"
              className="xl:h-[650px] xl:w-[500px]"
            />
          </div><div>
          <img
           src="../03. MARE NOSTRUM/mare-nostrum-pereira-sarda-8.jpg"
              alt="Image 1"
              className="xl:h-[650px] xl:w-[500px]"
            />
          </div><div>
          <img
           src="../03. MARE NOSTRUM/mare-nostrum-pereira-sarda-9.jpg"
              alt="Image 1"
              className="xl:h-[650px] xl:w-[500px]"
            />
          </div><div>
          <img
           src="../03. MARE NOSTRUM/mare-nostrum-pereira-sarda-10.jpg"
              alt="Image 1"
              className="xl:h-[650px] xl:w-[500px]"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center space-x-4">
  <div className="flex items-center justify-center flex-none">
    <video controls className="w-[25vw] h-[80vh] max-w-full max-h-full" poster="/above-the-sea-5.jpg">
      <source src="/PS x CJV - Tenue 3 (2nd Ver.).mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
  <div className="flex items-center justify-center flex-none">
    <video controls className="w-[25vw] h-[80vh] max-w-full max-h-full" poster="/above-the-sea-5.jpg">
      <source src="/CJ Visuals x Pereira Sarda - Collab Pt.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
</div>


    </div>
  );
};

export default marenostrum;

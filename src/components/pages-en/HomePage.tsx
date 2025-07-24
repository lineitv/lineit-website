import React from "react";
import Image from "next/image";
import { BsFillPlayCircleFill } from "react-icons/bs";
import HeroImage from "../../../public/images-en/talk.png";
import Link from "next/link";
import "animate.css"
import { motion, Variants } from "framer-motion";
import { CldImage, CldOgImage } from "next-cloudinary";

const imageAnimate={
  offscreen:{x:-100, opacity:0},
  onscreen:{
  x:0,
  opacity:1,
  rotate:[0,10,0],
  transition: {type:"spring",
  bounce:0.4,
  duration:1}
}
}

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

function HomePage() {
  return (
    <motion.div variants={container}
    initial="hidden"
    animate="visible" className="bg-white flex lg:flex-row flex-col justify-around items-center lg:mt-14 md:mt-24 sm:mt-28 mt-24 min-w-7xl md:h-[90vh]">
      <div className="flex flex-col items-start justify-start md:ml-36 md:w-[-webkit-fill-available] mx-10 mt-10 md:mt-0">
        <p className="text-[#E84E36] text-left w-full font-semibold text-base">A leading company in designing websites and applications</p>
        <h2 className="w-full mt-5 text-2xl font-bold text-left text-gray-800 lg:text-5xl">
        Line IT Company
        </h2>
        <p className="md:text-xl text-xl text-left w-full font-semibold text-[rgba(38,39,41,.7)] mt-5 lg:block block">
          {" "}
          We offer you digital solutions that help your business grow
        </p>
        <div className="flex items-center justify-center w-full gap-5 mt-10 mb-6 md:mb-0 md:justify-start md:items-start">
          <Link href="/en/portfolio" >
            <a className="text-white bg-[#E84E36] font-semibold rounded-full px-5 md:py-4 py-2 hover:bg-black hover:shadow-lg">
              Our Work Gallery
            </a>
          </Link>
          <Link href="/en/company" >
            <a className="text-white bg-[#E84E36] font-semibold rounded-full px-5 md:py-4 py-2 hover:bg-black hover:shadow-lg">
              Company
            </a>
          </Link>
        </div>
      </div>
      {/* image area */}
      <motion.div 
              variants={item}
              className="order-first md:mr-10 lg:ml-30 md:ml-20">
              <CldOgImage src="https://res.cloudinary.com/dzxbbqq4l/image/upload/v1753343061/b2_f8snxx.png" width={2000} height={2000} alt="Banner Line IT Best Web Design Agency In Egypt" objectFit="cover" />
              <CldImage src="https://res.cloudinary.com/dzxbbqq4l/image/upload/v1753343061/b2_f8snxx.png" width={2000} height={2000} alt="Banner Line IT Best Web Design Agency In Egypt" objectFit="cover" />
            </motion.div>
      {/* textual area */}
      
    </motion.div>
  );
}

export default HomePage;

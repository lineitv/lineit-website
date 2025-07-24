import React from "react";
import Image from "next/image";
import { BsFillPlayCircleFill } from "react-icons/bs";
import HeroImage from "../../../public/images/talk.png";
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
      {/* image area */}
      <motion.div 
        variants={item}
        className="order-first md:mr-10 lg:ml-30 md:ml-20">
        <CldOgImage src="https://res.cloudinary.com/dzxbbqq4l/image/upload/v1753343062/b1_zfdcb9.png" width={2000} height={2000} alt="بانر شركة لاين أي تي: أفضل شركة تصميم مواقع وتطبيقات في مصر" objectFit="cover" />
        <CldImage src="https://res.cloudinary.com/dzxbbqq4l/image/upload/v1753343062/b1_zfdcb9.png" width={2000} height={2000} alt="بانر شركة لاين أي تي: أفضل شركة تصميم مواقع وتطبيقات في مصر" objectFit="cover" />
      </motion.div>
      {/* textual area */}
      <div className="flex flex-col items-start justify-start md:mr-36 md:w-[-webkit-fill-available] mx-10 mt-10 md:mt-0">
        <p className="text-[#E84E36] text-right w-full font-semibold text-base">شركة رائدة في تصميم المواقع والتطبيقات</p>
        <h2 className="w-full mt-5 text-2xl font-bold text-right text-gray-800 lg:text-5xl">
        شركة لاين أي تي
        </h2>
        <h2 className="w-full mt-5 text-2xl font-bold text-right text-gray-800 lg:text-6xl">
          للبرمجيات
        </h2>
        <p className="md:text-xl text-xl text-right w-full font-semibold text-[rgba(38,39,41,.7)] mt-5 lg:block block">
          {" "}
          نقدم لك أفضل الحلول الرقمية التي تساعد عملك على النمو
        </p>
        <div className="flex items-center justify-center w-full gap-5 mt-10 mb-6 md:mb-0 md:justify-end md:items-end">
          <Link href="/portfolio" >
            <a className="text-white bg-[#E84E36] font-semibold rounded-full px-5 md:py-4 py-2 hover:bg-black hover:shadow-lg">
              أخر الأعمال
            </a>
          </Link>
          <Link href="/company" >
            <a className="text-white bg-[#E84E36] font-semibold rounded-full px-5 md:py-4 py-2 hover:bg-black hover:shadow-lg">
              الشركة 
            </a>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default HomePage;

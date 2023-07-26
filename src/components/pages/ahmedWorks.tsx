import Link from "next/link";
import WorkElias from "../../../public/images/work-elias.webp";
import WorkIbrahim from "../../../public/images/work-ibrahim.webp";
import WorkMohamed from "../../../public/images/work-mohamed.webp";
import WorkSegal from "../../../public/images/work-segal.png";
import Image from "next/image";
import {FaLink , FaBookReader} from "react-icons/fa"
import { motion, Variants } from "framer-motion";
import { CldImage } from "next-cloudinary";
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
}
  
const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
}
const OurWorks = [
  {
    name: "موقع الياس للبدل",
    image: 'https://res.cloudinary.com/dzxbbqq4l/image/upload/v1687299784/work-elias_yr0fxi.webp',
    website: "https://elias-designer.com",
  },
  {
    name: "موقع ابراهيم للفاشون",
    image: 'https://res.cloudinary.com/dzxbbqq4l/image/upload/v1687299784/work-ibrahim_zhhvse.webp',
    website: "https://ibrahim.elias-designer.com",
  },
  {
    name: "موقع كابتن محمد عزام",
    image: 'https://res.cloudinary.com/dzxbbqq4l/image/upload/v1687299784/work-mohamed_nwbgho.webp',
    website: "https://azamnutrition.com",
  },
  {
    name:  "متجر سيجال لبيع الأثاث",
    image: 'https://res.cloudinary.com/dzxbbqq4l/image/upload/v1687299784/work-segal_ayesev.webp',
    website: "https://www.segalfurniture.com",
  },
  {
    name:  "موقع المبرمج احمد وليد",
    image: 'https://res.cloudinary.com/dzxbbqq4l/image/upload/v1690406949/worky_1_tf20l4.webp',
    website: "https://ahmed.lineitsolutions.com",
  },
  {
    name:  "موقع منظمة تيدكس الشروق",
    image: 'https://res.cloudinary.com/dzxbbqq4l/image/upload/v1690406953/worky_7_rdslww.webp',
    website: "https://tedxshacom.netlify.app",
  },
  {
    name:  "موقع ايلين انترناشونال للسياحة",
    image: 'https://res.cloudinary.com/dzxbbqq4l/image/upload/v1690406952/worky_6_oe9ofu.webp',
    website: "https://aylin-international.netlify.app",
  },
  {
    name:  "موقع حجوزاتي للعقارات",
    image: 'https://res.cloudinary.com/dzxbbqq4l/image/upload/v1690406953/worky_5_hxikd6.webp',
    website: "https://hgozaty.vercel.app",
  },
  {
    name:  "موقع داليا فويس اوفر",
    image: 'https://res.cloudinary.com/dzxbbqq4l/image/upload/v1690406948/worky_4_uodioh.webp',
    website: "https://linepasha.github.io/dalia-work/",
  },
  {
    name:  "موقع ايلين ميديا",
    image: 'https://res.cloudinary.com/dzxbbqq4l/image/upload/v1690406944/worky_3_m0mkgv.webp',
    website: "https://aylinmedia.netlify.app",
  },
  {
    name:  "موقع تدوينة عوماري",
    image: 'https://res.cloudinary.com/dzxbbqq4l/image/upload/v1690406945/worky_2_zmjwaz.webp',
    website: "https://linepasha.github.io/ayline-blog/",
  }
];
export default function Works() {
  return (
    <div className="py-12 bg-[#F2F5FB]">
      <div className="max-w-full mx-5 md:mx-20 sm:mx-20 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-[#E84E36] font-semibold">
            معرض الأعمال
          </h2>
          <p className="mt-2 md:text-5xl text-3xl font-bold text-gray-900">
          أعمال نفخر بها
          </p>
        </div>

        <div className="mt-10">
          <dl dir="rtl" className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-2 md:gap-x-2 md:gap-y-6">
              
              {OurWorks.map(work => {
                return (
                    <motion.div variants={container}
                    initial="hidden"
                    whileInView="visible"
  viewport={{ once: true }} key={work.name} className="bg-white md:ml-8 sm:ml-0 pb-4 relative cursor-pointer rounded-lg text-center transition-all shadow-black hover:shadow-md">
                      <a target="_blank" href={`${work.website}`}><motion.div variants={item} ><CldImage className="rounded-lg" src={`${work.image}`} width={2000} height={1500} alt={`${work.name} صممت بواسطة لاين اي تي - أفضل شركة تصميم مواقع وتطبيقات في مصر والوطن العربي`} objectFit="cover" /></motion.div></a>
                      <div className="flex justify-center">
                      <a target="_blank" href={`${work.website}`} className="flex justify-center items-center font-semibold ml-2 px-5 py-2 bg-[#E84E36] rounded-lg text-white shadow-lg">
                            معاينة الموقع <FaLink className="mr-1" />
                          </a>
                      </div>
                    </motion.div>
                )
              })}

          </dl>
        </div>
      </div>
    </div>
  );
}

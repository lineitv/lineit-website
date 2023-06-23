import Navbar from "../components/pages/Navbar";
import Link from "next/link";
export default function Custom404() {
    return (
      <>
        <Navbar en="/en"/>
      <main className="h-auto py-[10rem] w-full flex flex-col justify-center items-center bg-[#F5F5F5]">
	<h1 className="text-9xl font-extrabold text-black tracking-widest">404</h1>
	<div className="bg-[#E84E36] px-2 text-sm rounded rotate-12 absolute">
		الصفحة غير موجودة
	</div>
	<button className="mt-5">
      <a
        className="relative inline-block text-sm font-medium text-[#E84E36] group active:text-orange-500 focus:outline-none focus:ring"
      >
        <span
          className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#E84E36] group-hover:translate-y-0 group-hover:translate-x-0"
        ></span>

        <span className="relative block px-8 py-3 bg-[#1A2238] border border-current">
          <Link href="/">الرئيسية</Link>
        </span>
      </a>
    </button>
</main>
      </>
    )
  }


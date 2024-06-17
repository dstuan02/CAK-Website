import React from "react";
import Image from "next/image";
import story from "../../../public/images/Our-story.png";
import vision from "../../../public/images/Vision3.jpg";
// import { FaArrowDown } from "react-icons/fa";
// import { RiAdvertisementLine } from "react-icons/ri";
import type { Metadata } from 'next'
import BrandComponent from "@/components/home/brands";


export const metadata: Metadata = {
  title: 'Về Chúng Tôi',
  description: 'Tầm nhìn - Sứ mệnh, CAK - GIẢI PHÁP CHUYỂN ĐỔI SỐ TOÀN DIỆN, Về chúng tôi, Xây dựng website theo mẫu',
}

export default function AboutUsPage() {
  return (
    <div className="">
      {/* Tam nhin - su menh */}
      <div className="relative w-full h-[650px]" id="home">
        <div className="absolute inset-0">
          <Image
            src={vision}
            alt="Background Image"
            className="object-cover object-center w-full h-full bg-cover bg-repeat"
          />
        </div>

        <div className="absolute inset-9 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 md:mb-0 ">
            <h1 className="font-semibold md:text-2xl leading-tight mb-2 ">
              <span className="bg-gradient-to-l from-[#fdbd00] to-[#F28558] bg-clip-text text-transparent">
                Tầm nhìn - Sứ mệnh
              </span>
              {/* <span className="before:block before:absolute before:-inset-1 before:-skew-x-12 before:bg-white relative inline-block mb-2 px-2">
                <span className="relative bg-gradient-to-l from-[#fdbd00] to-[#F28558] bg-clip-text text-transparent">
                Tầm nhìn - Sứ mệnh
                </span>
              </span> */}
            </h1>
            <div className="bg-black bg-opacity-30 p-2 rounded-lg">
              <p className="text-2xl md:text-3xl mb-8 mt-4 text-white">
                Trở thành một công ty cung cấp các giải pháp chuyển đổi số toàn
                diện tại Việt Nam. Tạo ra những sản phẩm công nghệ và dịch vụ có
                giá trị cho khách hàng. Đồng hành cùng doanh nghiệp phát triển
                Internet, trở thành đối tác tin cậy cùng đồng hành và thúc đẩy
                sự thành công của khách hàng
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Tam nhin - su menh */}

      {/* Our Story */}
      <div className="bg-[#FFFBF4]">
        <div className="w-[90%] md:container mx-auto my-0 py-10 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div className="max-w-lg">
              <h5 className="font-semibold text-lg">Về chúng tôi</h5>
              <span className="text-xl md:text-3xl md:!leading-10 font-bold bg-gradient-to-l from-[#fdbd00] to-[#F28558] bg-clip-text text-transparent mb-8 text-center">
                CAK - GIẢI PHÁP CHUYỂN ĐỔI SỐ TOÀN DIỆN
              </span>
              <p className="mt-4 text-gray-600 text-lg text-justify">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="inline-block lucide lucide-check-check text-[#00e025]"
                >
                  <path d="M18 6 7 17l-5-5" />
                  <path d="m22 10-7.5 7.5L13 16" />
                </svg>{" "}
                <span className="font-bold text-main">
                  CÔNG TY TNHH GIẢI PHÁP CÔNG NGHỆ CAK Solution </span>
                 được thành lập lại
                vào ngày 30/06/2022 tiền thân hợp nhất từ 2 công ty là Công Ty
                TNHH Thương Mại Dịch Vụ IM SOLUTIONS (Chuyên cung cấp các giải
                pháp Marketing) và Công ty Cổ Phần Công Nghệ và Dịch Vụ AZIT
                (Chuyên về hệ thống website, phần mềm và lưu trữ dữ liệu).
              </p>
              <p className="mt-4 text-gray-600 text-lg text-justify">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="inline-block lucide lucide-check-check text-[#00e025]"
                >
                  <path d="M18 6 7 17l-5-5" />
                  <path d="m22 10-7.5 7.5L13 16" />
                </svg>{" "}
                Với thế mạnh là nền tảng công nghệ và con người, chúng tôi liên
                tục nâng cấp chất lượng dịch vụ để tạo lợi thế cạnh tranh giúp
                các doanh nghiệp vừa và nhỏ, cá nhân khởi nghiệp ứng dụng chuyển
                đổi số mang về doanh số với chi phí tối ưu nhất.
              </p>
              <p className="mt-4 text-gray-600 text-lg text-justify">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="inline-block lucide lucide-check-check text-[#00e025]"
                >
                  <path d="M18 6 7 17l-5-5" />
                  <path d="m22 10-7.5 7.5L13 16" />
                </svg>{" "}
                Chúng tôi cung cấp một hệ sinh thái toàn diện từ thiết kế
                website, triển khai chiến lược marketing đến hỗ trợ cung cấp các
                giải pháp lưu trữ dữ liệu, phần mềm quản lý, chuyển đổi số: CRM,
                HRM,…
              </p>
            </div>
            <div className="mt-12 md:mt-0">
              <Image src={story} alt="img" className=""></Image>
            </div>
          </div>
        </div>
      </div>
      {/* Our Story */}

      {/* Gia tri cot loi */}
      <div className="relative block px-6 py-10 md:py-20 md:px-10">
        <div className="text-center mb-10">
          <h3 className="text-2xl md:text-4xl font-bold ">
            <span className="bg-gradient-to-l from-[#fdbd00] to-[#F28558] bg-clip-text text-transparent">
              GIÁ TRỊ CỐT LÕI
            </span>
          </h3>

          <div className=" mx-auto max-w-7xl z-10 grid grid-cols-1 gap-10 pt-14 sm:grid-cols-2 lg:grid-cols-3">
            <div
              className="transition-all hover:translate-y-[-6px] hover:shadow-custom drop-shadow-md 
              w-full  bg-white p-6 rounded-xl cursor-pointer"
            >
              <div className="w-[50px] h-[50px] my-0 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="60"
                  height="60"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#000000"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-users-round"
                >
                  <path d="M18 21a8 8 0 0 0-16 0" />
                  <circle cx="10" cy="8" r="5" />
                  <path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3" />
                </svg>
              </div>
              <h3 className="mt-6 text-2xl text-[#ed5a26] font-bold">
                CON NGƯỜI
              </h3>
              <p className=" hover:text-main text-center text-gray-600 text-lg my-4">
                Tôn trọng đồng nghiệp, khách hàng, đối tác. Hăng sau cống hiến,
                khát khao chứng minh giá trị của cá nhân và tập thể.
              </p>
            </div>
            <div
              className="transition-all hover:translate-y-[-6px] hover:shadow-custom drop-shadow-md w-full 
              bg-white p-6 rounded-xl cursor-pointer"
            >
              <div className="w-[50px] h-[50px] my-0 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="60"
                  height="60"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#000000"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-cpu"
                >
                  <rect width="16" height="16" x="4" y="4" rx="2" />
                  <rect width="6" height="6" x="9" y="9" rx="1" />
                  <path d="M15 2v2" />
                  <path d="M15 20v2" />
                  <path d="M2 15h2" />
                  <path d="M2 9h2" />
                  <path d="M20 15h2" />
                  <path d="M20 9h2" />
                  <path d="M9 2v2" />
                  <path d="M9 20v2" />
                </svg>
              </div>
              <h3 className="mt-6 text-2xl text-[#ed5a26] font-bold">
                CÔNG NGHỆ
              </h3>
              <p className=" hover:text-main text-center text-gray-600 text-lg my-4">
                Ứng dụng chuyển đổi số tự động hoá mọi quy trình trong công ty
                giúp tối ưu hiệu suất làm việc và Ứng dụng công nghệ tiên tiến
                để nâng cao chất lượng dịch vụ.
              </p>
            </div>
            <div
              className="transition-all hover:translate-y-[-6px] hover:shadow-custom drop-shadow-md 
              bg-white p-6 rounded-xl cursor-pointer"
            >
              <div className="w-[50px] h-[50px] my-0 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="60"
                  height="60"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#000000"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-shield-check"
                >
                  <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <h3 className="mt-6 text-2xl text-[#ed5a26] font-bold">
                CHẤT LƯỢNG
              </h3>
              <p className=" hover:text-main text-center text-gray-600 text-lg my-4">
                Tạo ra những sản phẩm công nghệ chất lượng mang đến giá trị lâu
                dài cho đối tác, khách hàng và người sử dụng. Dịch vụ đáp ứng sự
                tiện lợi và nhanh chóng cho mọi khách hàng.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Gia tri cot loi */}

      {/* Hệ sinh thái */}
      <div className="relative block px-6 py-10 md:px-10 bg-[#FFFBF4]">
        <div className="text-center">
          <h3 className="text-2xl md:text-4xl font-bold ">
            <span className="bg-gradient-to-l from-[#fdbd00] to-[#F28558] bg-clip-text text-transparent">
              HỆ SINH THÁI CÁC DỊCH VỤ CỦA CAK SOLUTION{" "}
            </span>
          </h3>
          <p className="font-semibold text-lg my-4">
            Tích hợp quản lý mọi ứng dụng website, dịch vụ marketing và bán hàng
            trên một nền tảng
          </p>

          <div className=" mx-auto max-w-7xl z-10 grid grid-cols-1 gap-10 pt-14 sm:grid-cols-2 lg:grid-cols-3">
            <div
              className="transition-all hover:translate-y-[-6px] hover:shadow-custom drop-shadow-md 
              w-full  bg-white p-6 rounded-xl cursor-pointer"
            >
              <div className="w-full flex justify-center items-center text-[#ed5a26] gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-building-2"
                >
                  <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
                  <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
                  <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
                  <path d="M10 6h4" />
                  <path d="M10 10h4" />
                  <path d="M10 14h4" />
                  <path d="M10 18h4" />
                </svg>
                <h3 className="text-2xl font-bold">Xây dựng thương hiệu</h3>
              </div>

              <div className="w-full flex flex-col gap-2 mt-3 text-secondary border-t-[1px] border-border pt-4 false">
                <a
                  href="#"
                  className="text-start text-lg flex justify-between hover:text-primary text-black"
                >
                  Thiết kế Web theo mẫu
                </a>
                <a
                  href="#"
                  className="text-start text-lg flex justify-between hover:text-primary text-black"
                >
                  Thiết kế Web theo yêu cầu
                </a>
                <a
                  href="#"
                  className="text-start text-lg flex justify-between hover:text-primary text-black"
                >
                  Thiết kế LandingPage
                </a>
                <a
                  href="#"
                  className="text-start text-lg flex justify-between hover:text-primary text-black"
                >
                  Thiết kế thương hiệu
                </a>
                <a
                  href="#"
                  className="text-start text-lg flex justify-between hover:text-primary text-black"
                >
                  Chăm sóc Website
                </a>
                <a
                  href="#"
                  className="text-start text-lg flex justify-between hover:text-primary text-black"
                >
                  Tối ưu Website
                </a>
              </div>
            </div>
            <div
              className="transition-all hover:translate-y-[-6px] hover:shadow-custom drop-shadow-md w-full 
              bg-white p-6 rounded-xl cursor-pointer"
            >
              <div className="w-full flex justify-center items-center text-[#ed5a26] gap-3">
                {/* <RiAdvertisementLine size={30} /> */}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-megaphone"><path d="m3 11 18-5v12L3 14v-3z"/><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/></svg>
                <h3 className="text-2xl text-[#ed5a26] font-bold">
                  Quảng cáo - truyền thông
                </h3>
              </div>

              <div className="w-full flex flex-col gap-2 mt-3 text-secondary border-t-[1px] border-border pt-4 false">
                <a
                  href="#"
                  className="text-start text-lg flex justify-between hover:text-primary text-black"
                >
                  Tư vấn chiến lược Marketing
                </a>
                <a
                  href="#"
                  className="text-start text-lg flex justify-between hover:text-primary text-black"
                >
                  Quảng cáo Google Ads
                </a>
                <a
                  href="#"
                  className="text-start text-lg flex justify-between hover:text-primary text-black"
                >
                  Quảng cáo Facebook Ads
                </a>
                <a
                  href="#"
                  className="text-start text-lg flex justify-between hover:text-primary text-black"
                >
                  Dịch vụ Content Marketing
                </a>
                <a
                  href="#"
                  className="text-start text-lg flex justify-between hover:text-primary text-black"
                >
                  Dịch vụ SEO tổng thể
                </a>
                <a
                  href="#"
                  className="text-start text-lg flex justify-between hover:text-primary text-black"
                >
                  Phòng Marketing thuê ngoài
                </a>
              </div>
            </div>
            <div
              className="transition-all hover:translate-y-[-6px] hover:shadow-custom drop-shadow-md 
              bg-white p-6 rounded-xl cursor-pointer"
            >
              <div className="w-full flex justify-center items-center text-[#ed5a26] gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#ed5a26"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-database-zap"
                >
                  <ellipse cx="12" cy="5" rx="9" ry="3" />
                  <path d="M3 5V19A9 3 0 0 0 15 21.84" />
                  <path d="M21 5V8" />
                  <path d="M21 12L18 17H22L19 22" />
                  <path d="M3 12A9 3 0 0 0 14.59 14.87" />
                </svg>
                <h3 className="text-2xl font-bold">Hạ tầng lưu trữ</h3>
              </div>

              <div className="w-full flex flex-col gap-2 mt-3 text-secondary border-t-[1px] border-border pt-4">
                <a
                  href="#"
                  className="text-start text-lg flex justify-between hover:text-primary text-black"
                >
                  Đăng ký tên miền
                </a>
                <a
                  href="#"
                  className="text-start text-lg flex justify-between hover:text-primary text-black"
                >
                  Chứng chỉ bảo mật SSl
                </a>
                <a
                  href="#"
                  className="text-start text-lg flex justify-between hover:text-primary text-black"
                >
                  Hosting chất lượng cao
                </a>
                <a
                  href="#"
                  className="text-start text-lg flex justify-between hover:text-primary text-black"
                >
                  Cloud VPS
                </a>
                <a
                  href="#"
                  className="text-start text-lg flex justify-between hover:text-primary text-black"
                >
                  Email theo tên miền
                </a>
                <a
                  href="#"
                  className="text-start text-lg flex justify-between hover:text-primary text-black"
                >
                  Google Workspace
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Hệ sinh thái */}

      {/* Brands: */}
      <BrandComponent/>
    </div>
  );
}

// 'use client'

// JSONs:
import GoogleAdsData from "../../../data/quang-cao-google-ads.json";
import FacebookAdsData from "../../../data/quang-cao-facebook-ads.json";
import MarketingAdsData from "../../../data/dich-vu-content-marketing.json";
import FanPageServiceData from "../../../data/dich-vu-cham-soc-fanpage.json";
import WebsiteServiceData from "../../../data/dich-vu-cham-soc-website.json";
import TiktokAdsData from "../../../data/quang-cao-tiktok-ads.json";
import LandingPageData from "../../../data/thiet-ke-landingpage.json";
import DesignTemplateData from "../../../data/thiet-ke-website-theo-mau.json";
import AccordionSection from "@/components/home/accordion-section";
import React, { use, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import HotlineComponent from "@/components/home/hotline";
import AchieveComponent from "@/components/home/achieve";
import BrandComponent from "@/components/home/brands";
import DifferentItem from "@/components/home/different-item";
import QuestionSection from "@/components/home/question-section";
import PriceComponent from "@/components/home/price-component";
import CheckMark from "../../../../public/images/checkmark-orange.svg";
import BookProcess from "../../../../public/images/booking-process.png";
import BannerImg from "../../../../public/images/banner-left.jpg";
import PlanImg from "../../../../public/images/plan-icon.png";
import ContMarkt from "../../../../public/images/content-marketing-banner.svg";
import type { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { slug: string };
};

// titleMap: [slug-value]: title --> [key: string]: string
const titleMap: { [key: string]: string } = {
  "quang-cao-google-ads": "Quảng Cáo Google Ads",
  "quang-cao-facebook-ads": "Quảng Cáo Facebook Ads",
  "dich-vu-content-mkt": "Dịch Vụ Content Marketing",
  "dich-vu-cham-soc-fanpage": "Dịch Vụ Chăm Sóc Fanpage",
  "dich-vu-cham-soc-website": "Dịch Vụ Chăm Sóc Website",
  "quang-cao-tiktok-ads": "Quảng Cáo Tiktok Ads",
  "thiet-ke-landing-page": "Thiết Kế Landing Page",
  "thiet-ke-website-theo-mau": "Thiết Kế Website Theo Mẫu",
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const slug = params.slug;

  return {
    title: titleMap[slug] || "Marketing Page | Cak Solution",
  };
}

export default async function MarketingPage({
  params,
}: {
  params: { slug: string };
}) {
  // { mobileNavData = [], settingData = [] }: { mobileNavData: any, settingData: any }
  const { slug } = params;
  let data: any;

  if (slug === "quang-cao-google-ads") {
    data = GoogleAdsData;
  } else if (slug === "quang-cao-facebook-ads") {
    data = FacebookAdsData;
  } else if (slug === "dich-vu-content-mkt") {
    data = MarketingAdsData;
  } else if (slug === "dich-vu-cham-soc-fanpage") {
    data = FanPageServiceData;
  } else if (slug === "dich-vu-cham-soc-website") {
    data = WebsiteServiceData;
  } else if (slug === "quang-cao-tiktok-ads") {
    data = TiktokAdsData;
  } else if (slug === "thiet-ke-landing-page") {
    data = LandingPageData;
  } else if (slug === "thiet-ke-website-theo-mau") {
    data = DesignTemplateData;
  } else {
    return <div>{params.slug}</div>;
  }

  const { banner, section1, section2, section3, section4, section5, section6 } =
    data;

  // Main return:
  return (
    <main className="relative">
      {/* Banner Part: */}
      <div className="bg-my-main-chestnut ">
        <div className="w-[94%] my-0 mx-auto md:container flex flex-col items-center lg:items-start justify-between py-10 lg:flex-row">
          {/* Banner left: */}
          <div className="w-full lg:w-[46%]">
            <h4 className="font-bold text-[2.5rem] text-black">
              {data.banner.title}
            </h4>
            <p className="text-lg text-slate-500 my-4 text-justify">
              {data.banner.content}
            </p>

            {/* Phone number input: */}
            <div className="w-[88%] my-0 mx-auto lg:w-auto lg:my-0 lg:mx-0 flex flex-col lg:flex-row gap-2 md:gap-0 justify-between lg:items-start mt-5">
              <input
                className="mb-2 p-4 lg:w-[78%] md:py-2.5 px-5 placeholder:text-sm rounded-lg bg-white/20 border border-zinc-400/40 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 ring-offset-2 ring-offset-white transition duration-200"
                type="tel"
                pattern="[0-9]*"
                placeholder="Số điện thoại"
                name=""
                id=""
              />

              {/* Submit btn: */}
              <Link
                className="w-full lg:w-auto p-4 my-translate-right-arrow font-bold md:px-3 md:py-[0.675rem] rounded-lg bg-my-main-cream flex items-center justify-center lg:justify-start gap-2 transition-all hover:ring-2 ring-inset ring-main"
                href={"javascript:;"}
              >
                ĐĂNG KÝ
                <svg
                  className="transition-all duration-300"
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                    fill="currentColor"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </Link>
            </div>

            {/* Contact Now Btn: */}
            <div className="hidden lg:block w-full mt-[12%]">
              <Link
                href={"javascript:;"}
                className="my-contact-btn !px-14 rounded-xl"
              >
                Liên hệ
              </Link>
            </div>
          </div>

          {/* Banner right: Banner Img */}
          <div className="w-[360px] h-[360px] md:w-[500px] md:h-[500px] lg:w-1/2 lg:h-[520px]">
            {/* GG Img: */}
            <Image
              className="w-full h-full !text-black"
              width={200}
              height={100}
              src={ContMarkt}
              alt="banner-img"
            />
          </div>
        </div>
      </div>

      {/* Google ads:section1 */}

      {/* section1 original: */}
      {/* <div>
				<div className="w-[94%] my-0 mx-auto md:container py-16">
					<h1 className="text-center font-bold text-3xl md:text-3xl leading-normal mb-10">
						{data.section1.title}
						<p className="w-[80%] my-6 mx-auto text-lg text-my-sub-title font-normal">{data.section1.des}</p>
					</h1>
					
					<div className="flex flex-col md:flex-row gap-4">
						GG Left part:
						<div className="w-full md:w-1/2">
							Reasons checkmark:
							<ul className="">
								{data.section1.content.map((item:any) => 
									<li className="flex items-start py-2">
										<Image className="mr-2" src={CheckMark} alt="checkmark" />
										<p className="text-black text-base md:text-lg">{item}</p>
									</li>
								)}
							</ul>
						</div>

						GG Right part: Section1 Img
						<div className="w-full md:w-1/2">
							<div className="">
								<Image width={560} height={200} className="rounded-2xl drop-shadow-2xl" 
									src={ContMarkt} alt="gg-ads"/>
							</div>
						</div>
					</div>
				</div>
			</div> */}

      {slug !== "thiet-ke-website-theo-mau" && (
        <div>
          <div className="w-[94%] my-0 mx-auto md:container py-16">
            <h1 className="text-center font-bold text-3xl md:text-3xl leading-normal mb-10">
              {data.section1.title}
              <p className="w-[80%] my-6 mx-auto text-lg text-my-sub-title font-normal">
                {data.section1.des}
              </p>
            </h1>

            <div className="flex flex-col md:flex-row gap-4">
              {/* GG Left part: */}
              <div className="w-full md:w-1/2">
                {/* Reasons checkmark: */}
                <ul className="">
                  {data.section1.content.map((item: any, index: any) => (
                    <li key={index} className="flex items-start py-2">
                      <Image className="mr-2" src={CheckMark} alt="checkmark" />
                      <p className="text-black text-base md:text-lg">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* GG Right part: Section1 Img */}
              <div className="w-full md:w-1/2">
                <div className="">
                  <Image
                    width={560}
                    height={200}
                    className="rounded-2xl drop-shadow-2xl"
                    src={ContMarkt}
                    alt="gg-ads"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {slug === "thiet-ke-website-theo-mau" && (
        <>
          <div className={`hidden`}>
            <div className="w-[94%] my-0 mx-auto md:container py-16">
              <h1 className="text-center font-bold text-3xl md:text-3xl leading-normal mb-10">
                {data.section1.title}
                <p className="w-[80%] my-6 mx-auto text-lg text-my-sub-title font-normal">
                  {data.section1.des}
                </p>
              </h1>

              <div className="flex flex-col md:flex-row gap-4">
                {/* GG Left part: */}
                <div className="w-full md:w-1/2">
                  {/* Reasons checkmark: */}
                  <ul className="">
                    {data.section1.content.map((item: any, index: any) => (
                      <li key={index} className="flex items-start py-2">
                        <Image
                          className="mr-2"
                          src={CheckMark}
                          alt="checkmark"
                        />
                        <p className="text-black text-base md:text-lg">
                          {item}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* GG Right part: Section1 Img */}
                <div className="w-full md:w-1/2">
                  <div className="">
                    <Image
                      width={560}
                      height={200}
                      className="rounded-2xl drop-shadow-2xl"
                      src={ContMarkt}
                      alt="gg-ads"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-[94%] my-0 mx-auto md:container py-20 flex flex-col lg:flex-row  justify-between">
            <div className="w-full lg:w-[46%]">
              <h2 className="w-full font-bold text-2xl md:text-3xl text-my-ads-title">
                ƯU ĐIỂM NỔI BẬT KHI CHỌN THIẾT KẾ WEBSITE THEO MẪU TRỌN GÓI TẠI
                <span className="border-b-4 border-[#F28500] bg-gradient-to-r from-[#fdbd00] to-[#F28558] bg-clip-text text-transparent">
                  {" "}
                  CAK SOLUTION
                </span>
              </h2>
              <div className="w-full h-auto mt-4 drop-shadow-lg">
                <Image
                  className="w-full h-full rounded-lg"
                  src={BannerImg}
                  alt="bannerimg"
                />
              </div>
            </div>

            <div className="w-full lg:w-[50%] lg:mt-[120px] mt-8 md:mt-0">
              <AccordionSection />
            </div>
          </div>
        </>
      )}

      {/* Advertisement:section2 */}
      <div className="bg-gradient-to-b from-my-main-ads to-white py-16">
        <div className="w-[94%] my-0 mx-auto md:container">
          <div className="">
            <h2 className="font-bold text-2xl md:text-3xl text-white">
              {section2.title}
            </h2>
            <p className="w-full lg:w-[80%] text-lg text-white my-4 text-justify lowercase">
              {section2.content}
            </p>

            {/* Advantage container: */}
            <div className="w-full flex flex-col my-10 md:flex-row flex-wrap gap-12 lg:gap-6">
              {section2?.child?.map((item: any, index: any) => (
                <div
                  key={index}
                  className="transition-transform hover:translate-y-[-6px] hover:shadow-custom drop-shadow-md w-full md:w-[46%] lg:w-[23%] h-[300px] bg-white p-6 rounded-lg"
                >
                  {/* Heading + logo: */}
                  <div className="flex  flex-col items-center">
                    <div className="w-[52px] h-[52px]">
                      <Image
                        className="w-full h-auto"
                        src={PlanImg}
                        alt="planimg"
                      />
                    </div>
                    <h3 className="text-center text-lg lg:text-xl font-[800] text-my-ads-title">
                      {item.title}
                    </h3>
                  </div>

                  {/* Content: */}
                  <p className="mt-3 w-full lg:h-[140px] overflow-auto">
                    {item.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Price Option Part:section3 */}
      <div>
        <PriceComponent priceData={data} />
      </div>

      {/* Ads Process Part:section5 */}
      <div className="bg-my-main-chestnut">
        <div className="w-[94%] my-0 mx-auto md:container py-6">
          <div>
            <h3 className="bg-gradient-to-l from-my-linear-text-l to-my-linear-text-r bg-clip-text text-transparent text-center font-bold text-2xl md:text-3xl md:leading-[3rem]">
              {section5.title}
            </h3>
            <p className="text-base md:text-lg text-center my-3">
              {section5.content}
            </p>
          </div>

          {/* Booking part: */}
          <div className="w-[90%] md:w-[70%] lg:w-full my-0 mx-auto flex flex-col lg:flex-row justify-between">
            <div className="w-full lg:w-1/2">
              {/* one process: */}
              {section5.child.map((stepItem: any, index: any) => (
                <div className="py-5" key={index}>
                  {/* Number & title: */}
                  <div className="flex flex-row items-center gap-5">
                    <p className="flex items-center justify-center w-[40px] h-[40px] font-bold rounded-[50%] text-black bg-my-bg-rounded text-lg">
                      {index + 1}
                    </p>
                    <p className="font-bold text-base md:text-xl">
                      {stepItem.title}
                    </p>
                  </div>

                  {/* Process content: */}
                  <div className="py-2 px-[2.7rem] ml-5 mt-4 border-l border-solid border-my-border-color">
                    {stepItem.content.map((processContent: any, i: any) => (
                      <p key={i} className="mb-3 break-words">
                        {processContent}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
              <div className="w-[250px] md:w-full">
                <Image
                  className="w-full h-auto object-contain pointer-events-none"
                  src={BookProcess}
                  alt="bookprocess"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Reasons Part:section6 */}
      <div className="">
        <div className="w-[94%] my-16 mx-auto md:container bg-my-main-cream rounded-[70px] md:rounded-[100px] py-8 px-4 lg:p-8">
          <div className="">
            <h3 className="text-2xl md:text-3xl font-bold text-center">
              LÝ DO NÊN CHỌN QUẢNG CÁO GOOGLE ADS TẠI
              <span className="bg-gradient-to-r from-my-linear-text-r to-my-linear-text-l bg-clip-text text-transparent">
                {" "}
                CAK SOLUTION
              </span>
            </h3>
            <p className="my-3 text-base lg:text-lg text-center">
              {section6.content}
            </p>
          </div>

          {/* Different Item: */}
          <div className="w-full flex justify-center flex-col my-10 md:flex-row flex-wrap gap-8">
            <DifferentItem reasonJsonData={data} />
          </div>
        </div>
      </div>

      {/* FAQ Part: */}
      <div className="bg-gradient-to-tr from-my-main-cream to-white pb-10">
        <QuestionSection jsonData={data} />
      </div>

      <AchieveComponent />
      <BrandComponent />
      <HotlineComponent />
    </main>
  );
}

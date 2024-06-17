import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { fetchBanner, fetchBlogs, fetchSetting } from "@/actions/setting";
import { handleDataSetting } from "@/utils/handleDataSetting";
import Link from "next/link";
import Image from "next/image";
import HomeImg from "../../public/images/home-heading.png";
import CheckMark from "../../public/images/checkmark-orange.svg";
import CAKImg1 from "../../public/images/cak-1.png";
import BannerImg from "../../public/images/banner-left.jpg";
import Special from "@/components/home/special";
import AchieveComponent from "@/components/home/achieve";
import BrandComponent from "@/components/home/brands";
import HotlineComponent from "@/components/home/hotline";
// import Article from "@/components/home/article";
import AccordionSection from "@/components/home/accordion-section";
import DifferentItem from "@/components/home/different-item";
import DifferenceComponent from "@/components/home/difference-component";
// import ArticleComponent from "@/components/home/article";
import MarketingPage from "./marketing/[slug]/page";
import RenderHomeData from "./blogs/render-home-data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  description: "CAK SOLUTION - GIẢI PHÁP CÔNG NGHỆ",
};

export default async function Home({ data }: { data: any }) {
  const blogs = await fetchBlogs({
    Page: 1,
    Take: 100,
    Url: "",
    UrlParent: "",
  });

  const banner = await fetchBanner({
    KeySelect: "",
  });

  const settings = await fetchSetting({
    KeySetting: "",
  });

  const setting = await handleDataSetting(settings);

  return (
    //   <main>
    //   	<CarouselBanner banner={banner} />
    //   	<SearchComponent />
    //   	<div className="relative ">
    //   	{/* <div className="sticky top-[10%] left-7 ">
    //   		<div className="h-[500px] bg-main w-20"></div>
    //   	</div > */}

    //   	<GroupTour />
    //   	<NewspaperAboutUsSection data={banner} />
    //   	<FeedbackCustomer data={banner} />
    //   	<AboutUsSection setting={setting} />
    //   	<ImageCustomerSection data={banner} />
    //   	<PlaceTravelSection data={banner} />
    //   	<DiscoverWith data={banner} />
    //   	<PartnerSection data={banner} />
    //   	</div>
    //   </main>

    <main className="">
      <div className="bg-gradient-to-r from-[#f78904] to-[#fdbd00] box-decoration-clone">
        {" "}
        {/* bg-gradient-to-l from-[#f78904] to-[#fdbd00] */}
        <div className="w-[94%] my-0 mx-auto md:container flex flex-col justify-between py-6 lg:flex-row">
          {/* Home left: */}
          <div className="sm:w-full lg:w-1/2">
            <h1 className="font-bold text-3xl md:text-4xl leading-normal text-white">
              {/* <span className="text-[#f97316]">CAK SOLUTION </span> */}
              <span className="before:block before:absolute before:-inset-1 before:-skew-x-12 before:bg-white relative inline-block mb-2">
                <span className="relative bg-gradient-to-l from-[#fdbd00] to-[#F28558] bg-clip-text text-transparent">
                  CAK SOLUTION
                </span>
              </span>
              <br />
              GIẢI PHÁP CÔNG NGHỆ
            </h1>
            {/* line: */}
            <div className="w-full lg:w-[90%] bg-my-main-cream h-[3px] rounded my-2"></div>

            {/* left content: */}
            <ul className="">
              <li className="flex items-start py-2">
                <Image className="mr-2" src={CheckMark} alt="checkmark" />
                <p className="text-white text-lg">
                  Giao diện dashboard hiện đại
                </p>
              </li>
              <li className="flex items-start py-2">
                <Image className="mr-2" src={CheckMark} alt="checkmark" />
                <p className="text-white text-lg">
                  Đáp ứng tất cả các phần mềm quản lý doanh nghiệp
                </p>
              </li>
              <li className="flex items-start py-2">
                <Image className="mr-2" src={CheckMark} alt="checkmark" />
                <p className="text-white text-lg">
                  Tối ưu hóa cho người dùng với phương châm &quot;1 chạm&quot;
                </p>
              </li>
              <li className="flex items-start py-2">
                <Image className="mr-2" src={CheckMark} alt="checkmark" />
                <p className="text-white text-lg">
                  Marketing trên nền tảng công nghệ
                </p>
              </li>
              <li className="flex items-start py-2">
                <Image className="mr-2" src={CheckMark} alt="checkmark" />
                <p className="text-white text-lg">
                  Tối ưu hóa chuyển đổi quảng cáo
                </p>
              </li>
              <li className="flex items-start py-2">
                <Image className="mr-2" src={CheckMark} alt="checkmark" />
                <p className="text-white text-lg font-bold">
                  MIỄN PHÍ khởi tạo
                </p>
              </li>
              <li className="flex items-start py-2">
                <Image className="mr-2" src={CheckMark} alt="checkmark" />
                <p className="text-white text-lg font-bold">
                  Dùng thử miễn phí kéo dài 12 tháng!
                </p>
              </li>
            </ul>
          </div>

          {/* Home right: */}
          <div className="sm:w-full lg:w-1/2">
            <div className="hidden lg:block">
              <Image
                className="w-full h-full rounded-lg"
                src={CAKImg1}
                alt="home-img"
              />
            </div>

            {/* all in one Img: */}
            <div className="hidden lg:block w-full h-auto">
              <Image className="w-full h-full" src={HomeImg} alt="the-world" />
            </div>

            {/* Contact Now Btn: */}
            <div className="w-full my-5">
              <Link
                href={"tel:0299 88 88 683"}
                className="my-contact-btn rounded-[10px]"
              >
                Liên hệ ngay
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ƯU ĐIỂM NỔI BẬT: (Special) */}
      <div className="bg-gradient-to-br from-my-main-ads to-white py-16">
        <Special />
      </div>

      {/* Design website according templates: */}
      <div className="">
        <div className="w-[94%] my-0 mx-auto md:container py-20 flex flex-col lg:flex-row  justify-between">
          <div className="w-full lg:w-[46%]">
            <h2 className="w-full font-bold text-3xl md:text-3xl text-my-ads-title">
              ƯU ĐIỂM NỔI BẬT KHI CHỌN THIẾT KẾ WEBSITE THEO MẪU TRỌN GÓI TẠI
              <span className="border-b-4 border-my-main-ads bg-gradient-to-r from-my-linear-text-r to-my-linear-text-l bg-clip-text text-transparent">
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
      </div>

      {/* The Difference: */}
      <div className="">
        <div className="w-[94%] my-0 mx-auto md:container bg-my-main-cream rounded-[70px] py-8 px-4 lg:p-8">
          <div className="">
            <h3 className="text-2xl md:text-4xl font-bold text-right">
              Sự khác biệt khi đến với{" "}
              <span className="bg-gradient-to-r from-my-linear-text-r to-my-linear-text-l bg-clip-text text-transparent">
                CAK SOLUTION
              </span>{" "}
            </h3>
            <p className="my-3 text-base lg:text-lg text-center">
              Chúng tôi vẫn liên tục hoàn thiện dịch vụ và nỗ lực hơn nữa để
              giúp cho nhiều đối tác và khách hàng phát triển bền vững!
            </p>
          </div>
          {/* Difference items: */}
          <div className="w-full flex justify-center flex-col my-10 md:flex-row flex-wrap gap-8">
            <DifferentItem reasonJsonData={data} />
          </div>
        </div>
      </div>

      {/* The Achievements Part: */}
      <div className="">
        <AchieveComponent />
      </div>

      {/* Article Part: */}
      <div className="w-[94%] my-0 mx-auto md:container">
        {/* <ArticleComponent articleCom={blogs} /> */}
        <h4 className="relative text-3xl font-bold my-6">
          Công nghệ
          <span className="absolute left-[-9px] bottom-[12px] bg-main w-[4px] h-[10px] rounded"></span>
        </h4>
        <RenderHomeData data={blogs} />
      </div>

      {/* Brands: */}
      <div className="">
        <BrandComponent />
      </div>

      {/* Hotline: */}
      <div className="bg-my-main-cream">
        <HotlineComponent />
      </div>
    </main>
  );
}

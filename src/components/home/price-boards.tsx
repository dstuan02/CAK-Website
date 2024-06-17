import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import ThunderImg from "../../../public/images/lightning-svg.svg";

// JSONs:
import GoogleAdsData from "../../data/quang-cao-google-ads.json";
import LandingPageData from "../../data/thiet-ke-landingpage.json";
import FacebookAdsData from "../../data/quang-cao-facebook-ads.json";
import MarketingAdsData from "../../data/dich-vu-content-marketing.json";
import FanPageServiceData from "../../data/dich-vu-cham-soc-fanpage.json";
import WebsiteServiceData from "../../data/dich-vu-cham-soc-website.json";
import TiktokAdsData from "../../data/quang-cao-tiktok-ads.json";
import DesignTemplateData from "../../data/thiet-ke-website-theo-mau.json";

export default function PriceBoards({
  priceBoardData,
}: {
  priceBoardData: any;
}) {
  // const data = [ GoogleAdsData, MarketingAdsData, FacebookAdsData, FanPageServiceData ];
  const { section3 } = priceBoardData;

  // Main return:
  return (
    <>
      {section3?.child?.map((dataTrigger: any, index: any) => (
        <TabsContent
          key={index}
          value={dataTrigger.valueTrigger}
          className="w-full md:w-[94%] my-0 mx-auto pt-8 outline-none"
        >
          <div className="w-full flex flex-col md:flex-row md:justify-between gap-6">
            {section3?.child[index]?.children?.map((priceItem: any, i: any) => (
              <div
                key={i}
                className="w-full md:w-[33.33333333%] bg-gradient-to-br from-blue-100 via-orange-100 to-purple-100 rounded-lg p-4 transition-all my-transform-custom"
              >
                <h4 className="py-6 font-bold text-xl text-center text-my-main-gray">
                  {priceItem.title}
                </h4>
                <p className="text-lg sm:text-xl text-center mb-8 mt-4 text-gray-400">
                  <span className="text-2xl lg:text-3xl sm:text-4xl font-[800] text-my-main-gray">
                    {priceItem.price}
                  </span>{" "}
                  {priceItem.times}
                </p>

                {/* Price board content: */}
                <ul className="">
                  {priceItem?.content?.map((listItem: any, i: any) => (
                    <li key={i} className="flex items-start gap-4 my-4">
                      <p className="!w-[24px] !h-[24px] flex justify-center items-center rounded-[50%] bg-my-bg-check bg-opacity-30">
                        <svg
                          className="text-my-main-check"
                          width="15"
                          height="15"
                          viewBox="0 0 15 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
                            fill="currentColor"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </p>
                      <p className="w-[90%] break-words text-sm md:text-base">
                        {listItem}
                      </p>
                    </li>
                  ))}
                </ul>

                {/* GIFT PART: */}
                <div className="">
                  {/* <div className="w-full bg-main h-[2px] rounded my-2"></div> */}
                  {priceItem?.gift?.content?.map((giftContent: any, i: any) => (
                    <ul key={i} className="">
                      <li
                        className="flex flex-row my-6 font-bold text-red-500"
                        key={giftContent.index}
                      >
                        <Image
                          className="w-[25px] h-[25px] rotate-12"
                          src={ThunderImg}
                          alt="thunder-svg"
                        />

                        {giftContent}
                      </li>
                    </ul>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
      ))}
    </>
  );
}

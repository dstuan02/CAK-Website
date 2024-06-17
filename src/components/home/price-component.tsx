import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PriceBoards from "./price-boards";

// JSONs:
import GoogleAdsData from "../../data/quang-cao-google-ads.json";
import LandingPageData from "../../data/thiet-ke-landingpage.json";
import FacebookAdsData from "../../data/quang-cao-facebook-ads.json";
import MarketingAdsData from "../../data/dich-vu-content-marketing.json";
import FanPageServiceData from "../../data/dich-vu-cham-soc-fanpage.json";
import WebsiteServiceData from "../../data/dich-vu-cham-soc-website.json";
import TiktokAdsData from "../../data/quang-cao-tiktok-ads.json";
import DesignTemplateData from "../../data/thiet-ke-website-theo-mau.json";

export default function PriceComponent({ priceData }: { priceData: any }) {
  // const jsonData = [ GoogleAdsData, MarketingAdsData, FacebookAdsData, FanPageServiceData ];
  const { section3 } = priceData;

  // Main return:
  return (
    <>
      <div className="w-[94%] my-0 mx-auto md:container py-6">
        <div>
          <h3 className="bg-gradient-to-l from-my-linear-text-l to-my-linear-text-r bg-clip-text text-transparent text-center font-bold text-xl md:text-3xl md:leading-[3rem]">
            {section3.title}
          </h3>
          <p className="text-base text-my-sub-title md:text-lg text-center my-3">
            Cam kết về <span className="font-bold">GIÁ</span> và{" "}
            <span className="font-bold">CHẤT LƯỢNG</span>
            {section3.content}
          </p>
        </div>
        {/* Price board: */}
        <div className="flex justify-center">
          <Tabs
            defaultValue="account"
            className="w-[94%] my-0 mx-auto py-8 flex flex-col justify-center outline-none"
          >
            {/* Tabs btn: */}
            <TabsList className="bg-white outline-none w-full md:w-[34%] h-[8%] my-0 mx-auto flex flex-col md:flex-row">
              {section3.child.map((dataTrigger: any, index: any) => (
                <TabsTrigger
                  key={index}
                  className="break-words text-sm p-4 font-bold bg-gradient-to-l from-my-linear-text-l to-my-linear-text-r bg-clip-text text-transparent"
                  value={dataTrigger.valueTrigger}
                >
                  {" "}
                  {dataTrigger.title}
                </TabsTrigger>
              ))}
            </TabsList>

            {/* Prices: */}
            <PriceBoards priceBoardData={priceData} />
          </Tabs>
        </div>
      </div>
    </>
  );
}

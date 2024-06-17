import Image from "next/image";
import PlanImg from "../../../public/images/plan-icon.png";
import GoogleAdsData from "../../data/quang-cao-google-ads.json";

export default function SpecialData() {
  const { section2 } = GoogleAdsData;

  return (
    <>
      {section2?.child?.map((item: any, index: any) => (
        <div
          key={index}
          className="transition-transform hover:translate-y-[-6px] hover:shadow-custom drop-shadow-md w-full md:w-[46%] lg:w-[23%] h-[300px] bg-white p-6 rounded-lg"
        >
          {/* Heading + logo: */}
          <div className="flex  flex-col items-center">
            <div className="w-[52px] h-[52px]">
              <Image className="w-full h-auto" src={PlanImg} alt="planimg" />
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
    </>
  );
}

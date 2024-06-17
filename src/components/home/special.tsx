import Link from "next/link";
import Image from "next/image";
import PlanImg from  "../../../public/images/plan-icon.png";
import SeoImg from  "../../../public/images/seo-icon.png";
import TuongTacImg from  "../../../public/images/tangtuongtac-icon.png";
import MuaSamImg from  "../../../public/images/muasam-icon.png";
import SpecialData from "./special-data";
import GoogleAdsData from "../../data/quang-cao-google-ads.json";

export default function Special() {
	const { section2 } = GoogleAdsData;

    return(
        <>
            <div className="w-[94%] my-0 mx-auto md:container">
				<div className="">
					<h2 className="font-bold text-2xl md:text-3xl text-my-ads-title">
						{section2.title}
						{/* ƯU ĐIỂM NỔI BẬT KHI SỬ DỤNG DỊCH VỤ " */}
						{/* <span className="border-b-4 border-my-main-ads bg-my-main-cream bg-clip-text text-transparent">
							CONTENT MARKETING
						</span>" TẠI
						<span className="text-white"> CAK SOLUTION</span>? */}
					</h2>
					<p className="w-full lg:w-[80%] text-lg text-white my-4 text-justify">
						{section2.content}

						{/* Dịch vụ Content Marketing sẽ giúp giải quyết những khó khăn, trăn
						trở & mối lo ngại của khách hàng, họ sẽ không ngần ngại bỏ tiền để
						sử dụng sản phẩm/dịch vụ mà doanh nghiệp bạn cung cấp. */}
					</p>

					{/* Advantage container: */}
					<div className="w-full flex flex-col my-10 md:flex-row flex-wrap gap-12 lg:gap-7 md:justify-between">
						<SpecialData/>
					</div>
				</div>
			</div>
        </>
    )
}
"use client"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

import Image from "next/image";
import PaperImg from "../../../public/images/paper-img.png";
import FingerImg from "../../../public/images/finger-img.png";
import LightImg from "../../../public/images/light-img.png";
import SettingImg from "../../../public/images/setting-img.png";
import SEOImg from "../../../public/images/seo-img.png";
import PenImg from "../../../public/images/pen-img.png";


export default function AccordionSection() {
    return (
        <>
            <Accordion type="single" collapsible className="">
                <div className="flex items-center gap-6">
                    <div className="w-[40px] h-[40px]">
                        <Image className="w-full h-full " src={PaperImg} alt="paper"/>
                    </div>
                    <AccordionItem className="w-full h-full" value="item-1">
                        <AccordionTrigger className="py-6 font-bold text-lg transition-colors hover:text-main hover:no-underline">
                        Giao diện đẹp - hiện đại với hơn 300 mẫu có sẵn
                        </AccordionTrigger>
                        <AccordionContent className="text-base">
                        <p className="mb-2">
                            Cập nhật dựa theo xu hướng thiết kế mới mang bản sắc riêng
                            của doanh nghiệp.
                        </p>
                        <p className="mb-2">
                            Cập nhật dựa theo xu hướng thiết kế mới mang bản sắc riêng
                            của doanh nghiệp.
                        </p>
                        </AccordionContent>
                    </AccordionItem>
                </div>

                <div className="flex items-center gap-6">
                    <div className="w-[40px] h-[40px]">
                        <Image className="w-full h-full " src={SEOImg} alt="paper" />
                    </div>
                    <AccordionItem className="w-full h-full" value="item-2">
                        <AccordionTrigger className="py-6 font-bold text-lg transition-colors hover:text-main hover:no-underline">
                        Chuẩn SEO, tải nhanh, dễ lên Top Google
                        </AccordionTrigger>
                        <AccordionContent className="text-base">
                        <p className="mb-2">
                            Thiết kế chuẩn UX/UI chuẩn SEO, chuẩn Marketing và chuẩn
                            Sales.
                        </p>
                        <p className="mb-2">Tốc độ tải trang cực nhanh dưới 2s.</p>
                        </AccordionContent>
                    </AccordionItem>
                </div>

                <div className="flex items-center gap-6">
                    <div className="w-[40px] h-[40px]">
                        <Image className="w-full h-full " src={PenImg} alt="paper" />
                    </div>
                    <AccordionItem className="w-full h-full" value="item-3">
                        <AccordionTrigger className="py-6 font-bold text-lg transition-colors hover:text-main hover:no-underline">
                        Quản trị website trực quan, dễ sử dụng
                        </AccordionTrigger>
                        <AccordionContent className="text-base">
                        <p className="mb-2">
                            Trang quản trị dễ sử dụng, tùy biến linh hoạt cho phép khách
                            hàng quản lý mọi thứ trên admin.
                        </p>
                        <p className="mb-2">
                            Không cần biết code hay hiểu về lập trình.
                        </p>
                        </AccordionContent>
                    </AccordionItem>
                </div>

                <div className="flex items-center gap-6">
                    <div className="">
                        <div className="w-[40px] h-[40px]">
                            <Image className="w-full h-full " src={FingerImg} alt="paper" />
                        </div>
                    </div>
                    <AccordionItem className="w-full h-full" value="item-4">
                        <AccordionTrigger className="py-6 font-bold text-lg transition-colors hover:text-main hover:no-underline">
                        Chi phí website trọn gói, không phát sinh
                        </AccordionTrigger>
                        <AccordionContent className="text-base">
                        <p className="mb-2">
                            Chi phí trọn gói hoặc giá linh hoạt tuỳ vào nhu cầu quý
                            khách yêu cầu thêm.
                        </p>
                        <p className="mb-2">
                            Không phát sinh thêm chi phí đối với các yêu cầu thêm nhỏ,
                            đơn giản.
                        </p>
                        </AccordionContent>
                    </AccordionItem>
                </div>

                <div className="flex items-center gap-6">
                    <div className="">
                        <div className="w-[40px] h-[40px]">
                            <Image className="w-full h-full " src={SettingImg} alt="paper" />
                        </div>
                    </div>
                    <AccordionItem className="w-full h-full" value="item-5">
                        <AccordionTrigger className="py-6 font-bold text-lg transition-colors hover:text-main hover:no-underline">
                        Dễ dàng tuỳ biến hay nâng cấp theo nhu cầu
                        </AccordionTrigger>
                        <AccordionContent className="text-base">
                        <p className="mb-2">
                            Dễ dàng tuỳ biến lại giao diện theo sản phẩm/ dịch vụ hay
                            đặc phù mô hình kinh doanh của bạn.
                        </p>
                        <p className="mb-2">
                            Mọi yêu cầu nâng cấp đều được đánh giá và xây dựng phù hợp
                            với mục tiêu của doanh nghiệp.
                        </p>
                        </AccordionContent>
                    </AccordionItem>
                </div>

                <div className="flex items-center gap-6">
                    <div className="">
                        <div className="w-[40px] h-[40px]">
                            <Image className="w-full h-full " src={LightImg} alt="paper" />
                        </div>
                    </div>
                    <AccordionItem className="w-full h-full" value="item-6">
                        <AccordionTrigger className="py-6 font-bold text-lg transition-colors hover:text-main hover:no-underline">
                        Công nghệ mới với độ ổn định và bảo mật cao
                        </AccordionTrigger>
                        <AccordionContent className="text-base">
                        <p className="mb-2">
                            Áp dụng công nghệ website mới nhất được chạy nền tảng hệ
                            thống, server chất lượng cao.
                        </p>
                        <p className="mb-2">
                            Dữ liệu website backup liên tục hằng ngày, thông báo tự động
                            khi xảy ra lổ hỏng bảo mật hay website không hoạt động.
                        </p>
                        </AccordionContent>
                    </AccordionItem>
                </div>
			</Accordion>
        </>
    )
}
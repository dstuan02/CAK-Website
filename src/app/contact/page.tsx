import React from "react";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";
import ContactSelect from "@/components/home/contact-select";
import { fetchMenu } from "@/actions/setting";
import envConfig from "../../../config";
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
    title: 'Liên Hệ',
    description: 'Điện thoại: 0287 778 8895, Email: Info@cak-solution.com, Địa chỉ: 542/12/5, Nguyễn Ảnh Thủ, Phường Hiệp Thành, Quận 12, Tp. Hồ Chí Minh, CAK Solution ',
  }

export default async function ContactPage() {
    const menudata = await fetchMenu({ GroupId: envConfig.NEXT_PUBLIC_GROUPID });


    return (
        <div className="">
            <div className="my-cover-bg my-text-shadow text-white">
                <h1 className="text-4xl font-bold mb-4">LIÊN HỆ VỚI CHÚNG TÔI</h1>
                <p className="text-xl">Hãy để CAK Solution hỗ trợ bạn dù ở bất kỳ nơi đâu</p>
            </div>

            {/* Main contact body: */}
            <div className="">
                <div className="bg-gradient-to-br from-white via-orange-100 to-purple-100">
                    <div className="w-[94%] my-0 mx-auto md:container">
                        <h5 className="text-2xl text-center font-bold leading-9 uppercase pt-12 bg-gradient-to-r from-my-linear-text-l to-my-linear-text-r bg-clip-text text-transparent">
                            Đội ngũ tư vấn của CAK Solution luôn hỗ trợ mọi lúc bạn cần
                        </h5>
                        
                        {/* Contact: */}
                        <div className="grid grid-cols-1 gap-10 py-16 md:grid-cols-2 lg:grid-cols-4">
                            <div className="transition-all hover:shadow-custom drop-shadow-md w-full bg-white px-6 py-4 rounded-xl">
                                <div className="flex justify-center items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-headset"><path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z"/><path d="M21 16v2a4 4 0 0 1-4 4h-5"/></svg>
                                </div>
                                <h5 className="my-4 text-2xl text-[#ed5a26] font-bold text-center">
                                    TƯ VẤN
                                </h5>
                                <div>
                                    <p className="hover:text-main text-center text-gray-600 text-base my-4">
                                        Đăng ký/Gia hạn dịch vụ
                                    </p>
                                    <p className="hover:text-main text-center text-gray-600 text-base my-4">
                                        Email: Info@cak-solution.com
                                    </p>
                                    <p className="hover:text-main text-center text-gray-600 text-base my-4">
                                        Điện thoại: 0287 778 8895
                                    </p>
                                </div>
                            </div>

                            <div className="transition-all hover:shadow-custom drop-shadow-md w-full bg-white px-6 py-4 rounded-xl">
                                <div className="flex justify-center items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-hand-heart"><path d="M11 14h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 16"/><path d="m7 20 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9"/><path d="m2 15 6 6"/><path d="M19.5 8.5c.7-.7 1.5-1.6 1.5-2.7A2.73 2.73 0 0 0 16 4a2.78 2.78 0 0 0-5 1.8c0 1.2.8 2 1.5 2.8L16 12Z"/></svg>
                                </div>
                                <h5 className="my-4 text-2xl text-[#ed5a26] font-bold text-center">
                                    HỖ TRỢ
                                </h5>
                                <div>
                                    <p className="hover:text-main text-center text-gray-600 text-base my-4">
                                    Kỹ thuật (24/7)
                                    </p>
                                    <p className="hover:text-main text-center text-gray-600 text-base my-4">
                                        Email: Info@cak-solution.com
                                    </p>
                                    <p className="hover:text-main text-center text-gray-600 text-base my-4">
                                        Điện thoại: 0287 778 8895
                                    </p>
                                </div>
                            </div>

                            <div className="transition-all hover:shadow-custom drop-shadow-md w-full bg-white px-6 py-4 rounded-xl">
                                <div className="flex justify-center items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-heart-handshake"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/><path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66"/><path d="m18 15-2-2"/><path d="m15 18-2-2"/></svg>
                                </div>
                                <h5 className="my-4 text-2xl text-[#ed5a26] font-bold text-center">
                                    DỊCH VỤ
                                </h5>
                                <div>
                                    <p className="hover:text-main text-center text-gray-600 text-base my-4">
                                        Khách hàng, Kế toán
                                    </p>
                                    <p className="hover:text-main text-center text-gray-600 text-base my-4">
                                        Email: Info@cak-solution.com
                                    </p>
                                    <p className="hover:text-main text-center text-gray-600 text-base my-4">
                                        Điện thoại: 0287 778 8895
                                    </p>
                                </div>
                            </div>

                            <div className="transition-all hover:shadow-custom drop-shadow-md w-full bg-white px-6 py-4 rounded-xl">
                                <div className="flex justify-center items-center">
                                {/* <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-frown"><circle cx="12" cy="12" r="10"/><path d="M16 16s-1.5-2-4-2-4 2-4 2"/><line x1="9" x2="9.01" y1="9" y2="9"/><line x1="15" x2="15.01" y1="9" y2="9"/></svg> */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-handshake"><path d="m11 17 2 2a1 1 0 1 0 3-3"/><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"/><path d="m21 3 1 11h-2"/><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"/><path d="M3 4h8"/></svg>
                                </div>
                                <h5 className="my-4 text-2xl text-[#ed5a26] font-bold text-center">
                                    GÓP Ý
                                </h5>
                                <div>
                                    <p className="hover:text-main text-center text-gray-600 text-base my-4">
                                    Thái độ nhân viên (8h00 – 21h00)
                                    </p>
                                    <p className="hover:text-main text-center text-gray-600 text-base my-4">
                                        Email: Info@cak-solution.com
                                    </p>
                                    <p className="hover:text-main text-center text-gray-600 text-base my-4">
                                        Điện thoại: 0287 778 8895
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Address + Map: */}
                <div className="">
                    <h5 className="text-3xl leading-[3rem] text-center font-bold py-4 uppercase mt-12 bg-gradient-to-r from-my-linear-text-l to-my-linear-text-r bg-clip-text text-transparent">
                        ĐỊA CHỈ LIÊN HỆ
                    </h5>
                    <div className="w-[94%] my-0 mx-auto md:container flex flex-col-reverse lg:flex-row lg:justify-between lg:gap-6">
                        {/* Left: Add + Map */}
                        <div className="w-full lg:w-1/2">
                            <div className="w-full">
                                <h5 className="text-xl font-bold">Chi nhánh tại Thành phố Hồ Chí Minh</h5>
                                <div className="my-4">
                                    <p>Địa chỉ: 542/12/5, Nguyễn Ảnh Thủ, Phường Hiệp Thành, Quận 12, Tp. Hồ Chí Minh</p>
                                    <p>Email:Info@cak-solution.com</p>
                                    <p>Tổng đài: 0287 778 8895</p>
                                </div>
                            </div>
                            <div className="mb-4 lg:mb-auto">
                                <iframe className="rounded-md shadow-custom w-full h-[200px] lg:w-3/4 md:h-[300px]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.05896387872!2d106.62410257573676!3d10.88311995721525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d585a0572849%3A0xdd9f283bab766c94!2sCAK%20Solution!5e0!3m2!1svi!2s!4v1704956245885!5m2!1svi!2s" loading="lazy"></iframe>
                            </div>
                        </div>

                        {/* Right: Form */}
                        <div className="w-full lg:w-1/2">
                            <form className="w-full mx-auto mb-12 lg:mt-10 p-6 md:p-12 bg-white rounded-xl shadow-custom">
                                {/* bg-gradient-to-br from-blue-100 via-orange-100 to-purple-100 bg-clip-text text-transparent */}
                                {/* <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-orange-400 to-purple-200 bg-clip-text text-transparent">
                                    Chúng tôi rất mong muốn được lắng nghe từ bạn! Hãy liên hệ với chúng tôi.
                                </h2> */}
                                <h2 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                                    Chúng tôi rất mong muốn được lắng nghe từ bạn! Hãy liên hệ với chúng tôi.
                                </h2>

                                <div className="mb-8">
                                    <label className="block text-gray-700 font-bold mb-2" >
                                        Họ và tên:
                                        <span className="text-[#FF0000] ml-1" title="Bắt buộc nhập đầy đủ">*</span>
                                    </label>
                                    <div className="flex justify-between items-center relative">
                                        <input className="pl-14 bg-white/20 border-zinc-400/40 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 ring-offset-2 ring-offset-white transition duration-200 shadow appearance-none border rounded-lg w-full py-3 px-3 text-gray-700 leading-tight focus:shadow-outline" required id="name" type="text" placeholder="Nguyễn Văn A" />
                                        <span className="absolute left-3.5 text-[#a0a7b2] pr-1 border-r-[1px]"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-user-round"><circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 0 0-16 0"/></svg></span>
                                    </div>
                                </div>

                                <div className="mb-8">
                                    <label className="block text-gray-700 font-bold mb-2">
                                        Email:
                                        <span className="text-[#FF0000] ml-1" title="Bắt buộc nhập đầy đủ">*</span>
                                    </label>
                                    <div className="flex justify-between items-center relative">
                                        <input className="pl-14 bg-white/20 border-zinc-400/40 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 ring-offset-2 ring-offset-white transition duration-200 shadow appearance-none border rounded-lg w-full py-3 px-3 text-gray-700 leading-tight focus:shadow-outline" required id="email" type="email" placeholder="@gmail.com" />
                                        <span className="absolute left-3.5 text-[#a0a7b2] pr-1 border-r-[1px]"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" /></svg></span>
                                    </div>
                                </div>

                                <div className="mb-8">
                                    <label className="block text-gray-700 font-bold mb-2">
                                        Số điện thoại:
                                        <span className="text-[#FF0000] ml-1" title="Bắt buộc nhập đầy đủ">*</span>
                                    </label>

                                    <div className="flex justify-between items-center relative">
                                        <input className="pl-14 bg-white/20 border-zinc-400/40 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 ring-offset-2 ring-offset-white transition duration-200 shadow appearance-none border rounded-lg w-full py-3 px-3 text-gray-700 leading-tight focus:shadow-outline" required id="phone" type="tel" placeholder="Số điện thoại" inputMode="numeric" pattern="[0-9]*" />
                                        <span className="absolute left-3.5 text-[#a0a7b2] pr-1 border-r-[1px]"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-smartphone"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg></span>
                                    </div>
                                </div>

                                {/* Service Select: */}
                                <ContactSelect data={menudata} />

                                <div className="my-6">
                                    <label className="block text-gray-700 font-bold mb-2">
                                        Mô tả ý tưởng của bạn với chúng tôi (nếu có):
                                    </label>
                                    <textarea 
                                        id="feedback" placeholder="Mô tả ý tưởng của bạn..." className="bg-white/20 border-zinc-400/40 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 ring-offset-2 ring-offset-white transition duration-200 shadow appearance-none border rounded-lg w-full py-3 px-3 text-gray-700 leading-tight focus:shadow-outline" >
                                    </textarea>
                                </div>

                                <button className="transition-all bg-gradient-to-br from-my-linear-text-l to-my-linear-text-r hover:bg-gradient-to-tl hover:from-my-linear-text-l hover:to-my-linear-text-r text-white py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline" type="submit">
                                    Gửi yêu cầu
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )

}
import Link from "next/link";
import Image from "next/image";
import PhoneIcon from "../../../public/images/phone-svg.svg";
import MessIcon from "../../../public/images/messenger.svg";
import TelePhoneIcon from "../../../public/images/telephone.svg";
import CalenIcon from "../../../public/images/worktime.svg";

export default function HotlineComponent() {
    return(
        <>
            <div className="bg-my-main-cream">
                <div className="w-[94%] my-0 mx-auto md:container p-0 py-4 md:py-10">
                    <div className="flex flex-col lg:flex-row items-center justify-between">
                        <Link href={"tel: 0299 88 88 683"} className="w-full lg:w-[22%] flex items-center justify-start lg:justify-center gap-2 py-3 lg:py-0">
                            <div className="w-[50px] h-[50px]">
                                <Image className="object-contain w-full h-auto" src={PhoneIcon} alt="CKexpress"></Image>
                            </div>
                            <div>
                                <h5 className="text-xl font-semibold transition-all hover:opacity-85">0299 88 88 683</h5>
                                <p className="text-base">Hotline (24/7)</p>
                            </div>
                        </Link>
                        <Link href={"https://zalo.me/3681787670720123046"} className="w-full lg:w-[22%] flex items-center  justify-start lg:justify-center gap-2 py-3 lg:py-0">
                            <div className="w-[50px] h-[50px]">
                                <Image className="object-contain w-full h-auto" src={TelePhoneIcon} alt="CKexpress"></Image>
                            </div>
                            <div>
                                <h5 className="text-xl font-semibold transition-all hover:opacity-85">Zalo</h5>
                                <p className="text-base">Tư vấn trực tiếp</p>
                            </div>
                        </Link>
                        <Link href={"http://m.me/giaiphapcongnghecak/"} className="w-full lg:w-[22%] flex items-center  justify-start lg:justify-center gap-2 py-3 lg:py-0">
                            <div className="w-[42px] h-[42px]">
                                <Image className="object-contain w-full h-auto" src={MessIcon} alt="CKexpress"></Image>
                            </div>
                            <div>
                                <h5 className="text-xl font-semibold transition-all hover:opacity-85">Messenger</h5>
                                <p className="text-base">Trò chuyện trực tiếp</p>
                            </div>
                        </Link>
                        <Link href={"/"} className="pointer-events-none w-full lg:w-[22%] flex items-center  justify-start lg:justify-center gap-2 py-3 lg:py-0">
                            <div className="w-[50px] h-[50px]">
                                <Image className="object-contain w-full h-auto" src={CalenIcon} alt="CKexpress"></Image>
                            </div>
                            <div>
                                <h5 className="text-xl font-semibold transition-all hover:opacity-85">8:00 - 22:00</h5>
                                <p className="text-base">Thời gian làm việc (T2 - T6)</p>
                            </div>
                        </Link>
                    </div>
                </div>
		    </div>
        </>
    )
}
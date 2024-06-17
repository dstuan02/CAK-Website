import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

import Image from "next/image";
import Link from "next/link";
import EmailRegisterForm from "../forms/email-resgister-form";
import { handleDataSetting } from "@/utils/handleDataSetting";
import { fetchMenu } from "@/actions/setting";

import Logo from "../.././../public/images/logo.png";
import TWIcon from "../.././../public/images/telephone.svg";
import FBcon from "../.././../public/images/facebook-svg.svg";
import NCSCImg from "../.././../public/images/tin-nhiem-mang-shostvn_cert.webp";
import YoutubeIcon from "../.././../public/images/youtube.svg";
import InstaIcon from "../.././../public/images/phone-icon.png";
import DMCAImg from "../.././../public/images/dmca_protected.png";
import envConfig from "../../../config";
import React from "react";

export default async function FooterData({
  dataSetting = [],
}: {
  dataSetting: any[];
  menuNav: any;
}) {
  // This is how to call API at CAK:
  const menudata = await fetchMenu({
    GroupId: envConfig.NEXT_PUBLIC_GROUPID,
  });

  let setting: any = await handleDataSetting(dataSetting);

  const RenderMenu = ({ className = "" }) => {
    return menudata?.map((item: any, index: any) => {
      if (item?.children?.length > 0) {
        return (
          <AccordionItem
            className="w-full h-full outline-none"
            key={index}
            value={`item-${index}`}
          >
            <div>
              <AccordionTrigger className="px-1 py-6 font-bold text-base lg:text-lg transition-colors focus:text-white hover:no-underline">
                {item.MenuName}
              </AccordionTrigger>
              <AccordionContent className="text-base">
                <ul className="my-2">
                  {item.children?.map((component: any, index: any) => (
                    <li key={index} className="mb-6">
                      <Link
                        className="block w-full"
                        key={component.index}
                        href={"/" + item.key + "/" + component.key}
                      >
                        {component.MenuName}
                      </Link>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </div>
          </AccordionItem>
        );
      }
    });
  };
  // My RenderMenu in footer on mobile! ( RenderMenu() ).

  return (
    // My Code:
    <div className="border-t-[5px] border-[#EF7F41]">
      {/* <div className="w-[94%] my-0 mx-auto md:container">
                Top footer:
                <div className="text-sm lg:text-base w-full flex flex-col items-start gap-8 pt-8">
                    CAK logo:
                    <div className="w-full md:w-[22%]">
                        <Link
                            href={"javascript:;"}
                            className="block w-[100px]"
                        >
                            <Image
                                className="w-full h-auto"
                                src={Logo}
                                alt="logo"
                            ></Image>
                        </Link>
                    </div>
                    CAK Address Info:
                    <div className="w-full md:w-[26%]">
                        <div>
                            <h5 className="text-white text-base lg:text-lg font-semibold">
                                CÔNG TY TNHH GIẢI PHÁP CÔNG NGHỆ CAK
                                SOLUTION
                            </h5>
                            <p>
                                Số ĐKKD: 0317595719 do Sở KH và ĐT cấp
                                ngày 30/06/2022
                            </p>
                        </div>
                        <div className="my-2">
                            <span className="text-white text-base lg:text-lg font-semibold">
                                Số điện thoại liên hệ:{" "}
                            </span>
                            <Link
                                href={"tel:0299 88 88 683"}
                                className=""
                            >
                                0299 88 88 683
                            </Link>
                        </div>
                        <div className="my-2">
                            <span className="text-white text-base lg:text-lg font-semibold">
                                Văn phòng đại diện:{" "}
                            </span>
                            <p className="">
                                17 đường số 6, phường 10, quận Gò Vấp,
                                Thành phố Hồ Chí Minh.
                            </p>
                        </div>
                        <div className="w-[120px] h-[40px]">
                            <Image
                                className="w-full h-auto rounded-lg"
                                src={NCSCImg}
                                alt="NCSC"
                            />
                        </div>
                    </div>
                    Socials:
                    <div className="w-full md:w-[26%]">
                        <h5 className="text-white text-base lg:text-lg font-semibold">
                            Hãy liên hệ với chúng tôi:
                        </h5>
                        <div className="flex items-center mt-7 gap-8">
                            <Link
                                className="w-[36px] h-[36px] "
                                href={"javascript:;"}
                            >
                                <Image
                                    className="w-full h-full transition-all hover:opacity-80"
                                    src={FBcon}
                                    alt="ff"
                                ></Image>
                            </Link>
                            <Link
                                className="w-[36px] h-[36px] "
                                href={"javascript:;"}
                            >
                                <Image
                                    className="w-full h-full transition-all hover:opacity-80"
                                    src={YoutubeIcon}
                                    alt="ff"
                                ></Image>
                            </Link>
                            <Link
                                className="w-[36px] h-[36px] "
                                href={"mailto:info@cak-solution.com"}
                            >
                                <Image
                                    className="w-full h-full transition-all hover:opacity-80"
                                    src={InstaIcon}
                                    alt="ff"
                                ></Image>
                            </Link>
                            <Link
                                className="w-[36px] h-[36px]"
                                href={"javascript:;"}
                            >
                                <Image
                                    className="w-full h-full transition-all hover:opacity-80"
                                    src={TWIcon}
                                    alt="ff"
                                ></Image>
                            </Link>
                        </div>
                    </div>
                </div>

                Mid footer:
                <div className="py-6 md:py-20">
                    <div className="hidden md:block w-full h-[40%]">
                        <div className="flex flex-row flex-wrap justify-between">
                            {menudata?.map((navdata) => (
                                <div className="w-[24%]">
                                    <h5 className="text-white text-lg font-semibold mb-3">
                                        {navdata.MenuName}
                                    </h5>
                                    <ul className="ml-4 list-disc">
                                        {navdata.children?.map(
                                            (component: any) => (
                                                <ListItem
                                                    key={
                                                        component.MenuName
                                                    }
                                                    title={
                                                        component.MenuName
                                                    }
                                                    href={
                                                        "/" +
                                                        navdata.key +
                                                        "/" +
                                                        component.key
                                                    }
                                                ></ListItem>
                                            )
                                        )}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>

                    Menu nav mobile on footer:
                    <Accordion
                        className="w-full block md:hidden"
                        type="single"
                        collapsible
                    >
                        <RenderMenu />
                    </Accordion>
                </div>
            </div> */}

      <div className="w-[94%] my-0 mx-auto md:container">
        <div className="flex flex-col md:flex-row md:gap-4 my-8">
          <div className="w-full md:w-[30%] text-sm lg:text-base flex flex-col items-start gap-4">
            {/* CAK logo: */}
            <div className="w-full">
              <Link href={"/"} className="block w-[150px]">
                <Image className="w-full h-auto" src={Logo} alt="logo"></Image>
              </Link>
            </div>
            {/* CAK Address Info: */}
            <div className="w-full">
              <h5 className="text-white text-base lg:text-lg font-semibold mb-4">
                CÔNG TY TNHH GIẢI PHÁP CÔNG NGHỆ CAK SOLUTION
              </h5>

              <div className="flex items-center gap-2">
                <span className="text-white text-base lg:text-lg font-semibold">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-4"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
                <p className="text-gray-200"> 0299 888 8683</p>
              </div>

              <div className="my-4 flex items-center gap-2">
                <span className="text-white text-base lg:text-lg font-semibold">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-4"
                  >
                    <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                    <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                  </svg>
                </span>
                <p className="text-gray-200">Info@cak-solution.com</p>
              </div>

              <div className="my-4 flex items-start gap-2">
                <span className="text-white text-base lg:text-lg font-semibold mt-[5px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-4"
                  >
                    <path
                      fill-rule="evenodd"
                      d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
                <p className="text-gray-200">
                  17 đường số 6, phường 10, quận Gò Vấp, Thành phố Hồ Chí Minh.
                </p>
              </div>

              <div className="flex gap-2">
                <span className="text-white text-base lg:text-lg font-semibold mt-[5px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-4"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M7.5 5.25a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0 1 12 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 0 1 7.5 5.455V5.25Zm7.5 0v.09a49.488 49.488 0 0 0-6 0v-.09a1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 1.5 1.5Zm-3 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                      clip-rule="evenodd"
                    />
                    <path d="M3 18.4v-2.796a4.3 4.3 0 0 0 .713.31A26.226 26.226 0 0 0 12 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 0 1-6.477-.427C4.047 21.128 3 19.852 3 18.4Z" />
                  </svg>
                </span>
                <p className="text-gray-200">
                  Số ĐKKD: 0317595719 do Sở KH và ĐT cấp ngày 30/06/2022
                </p>
              </div>
            </div>
            {/* Socials: */}
            <div className="w-full">
              <div className="flex items-center gap-6">
                <Link className="w-[36px] h-[36px] " href={"javascript:;"}>
                  <Image
                    className=" hover:-translate-y-1 w-full h-full transition-all hover:opacity-80"
                    src={FBcon}
                    alt="ff"
                  ></Image>
                </Link>
                <Link className="w-[36px] h-[36px] " href={"javascript:;"}>
                  <Image
                    className=" hover:-translate-y-1 w-full h-full transition-all hover:opacity-80"
                    src={YoutubeIcon}
                    alt="ff"
                  ></Image>
                </Link>
                <Link className="w-[36px] h-[36px] " href={"tel:0299 888 8683"}>
                  <Image
                    className=" hover:-translate-y-1 w-full h-full transition-all hover:opacity-80"
                    src={InstaIcon}
                    alt="ff"
                  ></Image>
                </Link>
                <Link
                  className="w-[36px] h-[36px]"
                  href={"https://zalo.me/3681787670720123046"}
                >
                  <Image
                    className=" hover:-translate-y-1 w-full h-full transition-all hover:opacity-80 rounded-[15px] "
                    src={TWIcon}
                    alt="ff"
                  ></Image>
                </Link>
              </div>
            </div>

            {/* DMCA Logo: */}
            <div className="flex flex-row items-center gap-2">
              <div className="w-[90px] h-[40px]">
                <Image
                  className="w-full h-auto rounded-lg"
                  src={NCSCImg}
                  alt="NCSC"
                />
              </div>

              <div className="w-[108px]">
                <Image
                  className="w-full h-auto"
                  src={DMCAImg}
                  alt="protectImg"
                />
              </div>
            </div>
          </div>

          <div className="hidden md:block w-full ">
            <div className="flex flex-row justify-around">
              {menudata?.map((navdata: any, i) => {
                if (navdata?.children?.length > 0) {
                  return (
                    <div key={i} className="w-[26%]">
                      <h5 className="text-white text-lg font-semibold mb-3">
                        {navdata.MenuName}
                      </h5>
                      <ul className="w-full text-white">
                        {navdata.children?.map((component: any) => (
                          <ListItem
                            key={component.MenuName}
                            title={component.MenuName}
                            href={"/" + navdata.key + "/" + component.key}
                            className="text-gray-200"
                          ></ListItem>
                        ))}
                      </ul>
                    </div>
                  );
                }
                return <div key={i}></div>;
              })}
            </div>
          </div>

          {/* Menu nav mobile on footer: */}
          <Accordion
            className="w-full block md:hidden mt-4"
            type="single"
            collapsible
          >
            <RenderMenu />
            {/* <div>
              <div className="w-full border-b-[1px] border-[#e7e5e4]">
                <Link
                  href={"/about-us"}
                  className="block w-full h-full px-1 py-6 font-bold text-base lg:text-lg transition-colors hover:text-white"
                >
                  Về Chúng Tôi
                </Link>
              </div>
              <div className="w-full border-b-[1px] border-[#e7e5e4]">
                <Link
                  href={"/contact"}
                  className="block w-full h-full px-1 py-6 font-bold text-base lg:text-lg transition-colors hover:text-white"
                >
                  Liên Hệ CAK
                </Link>
              </div>
            </div> */}
          </Accordion>
        </div>
      </div>

      {/* Bottom footer: */}
      <div className="bg-main">
        <div className="w-[94%] border-t border-t-white my-0 mx-auto md:container flex flex-col md:flex-row items-center justify-center py-4">
          <p className="text-white font-bold text-sm text-center md:text-start">
            &copy; CAK Solution. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

// Build <ListItem>:
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ title, ...props }, ref) => {
  return (
    <>
      <li className="w-full mb-4 text-my-gray-color">
        <Link
          className="hover:text-opacity-85 w-full transition-all hover:text-white"
          ref={ref}
          {...props}
        >
          {title}
        </Link>
      </li>
    </>
  );
});
ListItem.displayName = "ListItem";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

import { fetchMenu, fetchSetting } from "@/actions/setting";
import TopHeader from "@/components/home/top-header";
import { handleDataSetting } from "@/utils/handleDataSetting";
import Image from "next/image";
import Link from "next/link";
import Logo from "../.././../public/images/logo.png";
import Avatar from "../.././../public/images/avatar.svg";
// import React, { useEffect, useState } from "react";
import envConfig from "../../../config";
import MarketingPage from "@/app/marketing/[slug]/page";
import { Menu } from "../home/menu";
import FooterData from "../home/footer-data";
import MenuMobile from "../home/menu-mobile";

export default async function Header() {
  // Set position fixed when scroll header:
  // useEffect(() => {
  // 	const handleScroll = () => {
  // 		const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  // 		const screenWidth = window.innerWidth;

  // 		const element = document.getElementById('my-header');
  // 		const orangeHeader = document.getElementById('my-header');

  // 		if ( screenWidth >= 1024 && scrollTop >= 104 ) {
  // 			if (element && orangeHeader) {
  // 				element.style.position = 'fixed';
  // 				element.style.width = '94%';
  // 				element.style.left = '50%';
  // 				element.style.right = '50%';
  // 				element.style.top = '7%';
  // 				element.style.transform = 'translate(-50%, -50%)';
  // 				element.style.borderTopLeftRadius = '36px';
  // 				element.style.borderTopRightRadius = '36px';
  // 				element.style.borderBottomLeftRadius = '36px';
  // 				element.style.borderBottomRightRadius = '36px';
  // 			}
  // 		}
  // 		else {
  // 			if (element) {
  // 				element.style.position = 'static';
  // 				element.style.width = '100%';
  // 				element.style.right = 'auto';
  // 				element.style.left = 'auto';
  // 				element.style.top = 'auto';
  // 				element.style.transform = 'none';
  // 				element.style.borderRadius = '0';
  // 			}
  // 		}
  // 	};

  // 	window.addEventListener('scroll', handleScroll);

  // 	return () => {
  // 		window.removeEventListener('scroll', handleScroll);
  // 	};
  // }, []);

  // This is how to call API at CAK:
  const menudata = await fetchMenu({ GroupId: envConfig.NEXT_PUBLIC_GROUPID });

  // const RenderMenu = ({ className = "" }) => {
  // 	return menudata?.map((item: any, index: any) => {
  // 		if (item?.children?.length > 0) {
  // 			return (
  // 				<NavigationMenuItem key={index}>
  // 					<HoverCard openDelay={1} closeDelay={1} >
  // 						<HoverCardTrigger className="px-4 py-6 my-rotate-down-check hover:cursor-pointer hover:opacity-75 font-bold flex items-center gap-2">
  // 							{item.MenuName}
  // 							<svg className="transition-all duration-300 ease-in-out" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
  // 						</HoverCardTrigger>
  // 						<HoverCardContent className="w-[700px] ml-2">
  // 							<div className="w-full gap-2">
  // 								<ul className="flex flex-row flex-wrap justify-between">
  // 									{item?.children.map((component: any, slug: any) => (
  // 										<ListItem
  // 											key={component.MenuName}
  // 											title={component.MenuName}
  // 											href={"/" + item?.key + "/" + component?.key}
  // 											// href={"/marketing/" + `${slug === MarketingPage(data)}` + component?.key}
  // 										>
  // 										</ListItem>
  // 									))}
  // 								</ul>
  // 							</div>
  // 						</HoverCardContent>
  // 					</HoverCard>
  // 				</NavigationMenuItem>
  // 			)
  // 		}
  // 	})
  // }

  /* test open/close mobile nav: */
  //   const [isMenuOpen, setIsMenuOpen] = useState(false);

  //   const toggleMobileMenu = () => {
  //   	setIsMenuOpen(!isMenuOpen);
  //   };

  let setting = await fetchSetting({
    KeySetting: "",
  });

  let dataSetting = await handleDataSetting(setting);

  return (
    <>
      <div className="" id="orange-header">
        {/* contact orange header: */}
        <div className="hidden md:block bg-main ">
          <div className="container my-0 flex flex-row justify-between p-1">
            <div className="w-fit">
              <Link className="text-white font-bold" href={"tel:123"}>
                Tư vấn miễn phí: {dataSetting?.Hotline}
              </Link>
            </div>
            <div className="text-white font-bold float-right w-fit">
              {dataSetting?.Slogan}
            </div>
            {/* <div className="flex">
				<div className="">
					<Link className="text-white font-bold" href={"#"}>
					Khuyến mãi
					</Link>
				</div>
				<div className="md:ml-6 dropdown dropdown-hover">
					<Link className="text-white font-bold" href={"#"}>
					Hỗ trợ
					</Link>
				</div>
				</div> */}
          </div>
        </div>

        {/* Nav header: */}
        <div className="z-50 bg-white my-box-shadow-header" id="my-header">
          <div className="bg-white w-[94%] h-[80px] my-0 mx-auto flex items-center justify-between py-3">
            {/* Left: Logo CAK */}
            <div className="flex items-center justify-between">
              <Link href={"/"} className="mr-8">
                <div className="w-[72px] h-[46px] mr-3">
                  <Image className="w-full h-full" src={Logo} alt="logo" />
                </div>
              </Link>
            </div>

            {/*  Desktop Menu Navbar: */}
            <div className="hidden lg:flex justify-between text-sm md:text-base">
              <Menu myMenuData={menudata} />
            </div>

            {/* Mobile Menu Nav: */}
            <div className="block lg:hidden w-fit bg-white">
              <MenuMobile data={menudata} setting={dataSetting} />
            </div>

            {/* Nav Icon hambuger: */}
            {/* {!isMenuOpen && (
					<div onClick={toggleMobileMenu} className=" lg:hidden p-3 bg-[#f0f0ee] rounded-[50%] flex justify-center items-center transition-opacity hover:opacity-80">
						<svg width="24" height="24" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
					</div>
				)} */}
          </div>
        </div>
      </div>
    </>
  );
}

"use client";

import React, { useState } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import envConfig from "../../../config";
import Logo from "../.././../public/images/logo.png";

import { ScrollArea } from "@/components/ui/scroll-area";
import { fetchMenu } from "@/actions/setting";
export default function MenuMobile({
  data = [],
  setting = {},
}: {
  data: any;
  setting: any;
}) {
  // const RenderMenu = ({ className = "" }) => {
  // 	return data.map((item, index) => {
  // 		if (item?.children?.length > 0) {
  // 			return (
  // 				<AccordionItem value={`item-${index}`} key={index}>
  // 				<AccordionTrigger className="py-4  text-lg hover:no-underline font-bold">
  // 					<Link href={`/${item.key}`}>{item.MenuName}</Link>
  // 				</AccordionTrigger>
  // 				<AccordionContent className="flex flex-col gap-3 ml-4">
  // 					{item?.children.map((component) => (
  // 					<Link
  // 						key={component.MenuId}
  // 						href={"/" + item.key + "/" + component.key}
  // 					>
  // 						<span className="  text-lg hover:no-underline">
  // 						{component.MenuName}
  // 						</span>
  // 					</Link>
  // 					))}
  // 				</AccordionContent>
  // 				</AccordionItem>
  // 			);
  // 		}
  // 		return (
  // 			<AccordionItem value="item-2" key={index} className="py-4">
  // 				<span className="  text-lg hover:no-underline font-bold">
  // 				<Link href={`/${item.key}`}>{item.MenuName}</Link>
  // 				</span>
  // 			</AccordionItem>
  // 		);
  // 	});
  // };

  //   const menudata = await fetchMenu({
  //     GroupId: envConfig.NEXT_PUBLIC_GROUPID,
  //   });
  // My RenderMenu:

	const RenderMenu = ({ className = "" }) => {
		return data?.map((item: any, index: any) => {
			if (item?.children?.length > 0) {
			return (
				<AccordionItem
				className="w-full h-full outline-none"
				key={index}
				value={`item-${index}`}
				>
				<div>
					<AccordionTrigger className="px-1 py-6 font-bold text-base lg:text-lg transition-colors focus:text-main hover:no-underline">
					{item.MenuName}
					</AccordionTrigger>
					<AccordionContent className="text-base">
					<ul className="my-2">
						{item.children?.map((component: any, i: any) => (
						<li className="mb-6" key={i}>
							<Link
								className="block w-full"
								key={component.index}
								href={"/" + item.key + "/" + component.key}
								onClick={() => setIsOpen(!isOpen)}
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

	const AutoCloseMenu = () => {
		const handleClick = () => {
		  setIsOpen(!isOpen);
		};
	  
		return (
			<div>
				<div className="w-full border-b-[1px] border-[#e7e5e4]">
					<Link
					href="/about-us"
					className="block w-full h-full px-1 py-6 font-bold text-base lg:text-lg transition-colors hover:text-main"
					onClick={handleClick}
					>
					Về Chúng Tôi
					</Link>
				</div>
				<div className="w-full border-b-[1px] border-[#e7e5e4]">
					<Link
					href="/contact"
					className="block w-full h-full px-1 py-6 font-bold text-base lg:text-lg transition-colors hover:text-main"
					onClick={handleClick}
					>
					Liên Hệ
					</Link>
				</div>
			</div>
		);
	  };

	const [isOpen, setIsOpen] = useState(false);


  return (
	<div className="h-full lg:hidden flex items-center left-2">
		<Sheet key="left" open={isOpen} onOpenChange={setIsOpen}>
			<SheetTrigger asChild>
				<Button className="" variant="ghost" size="icon">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width={24}
					height={24}
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth={2}
					strokeLinecap="round"
					strokeLinejoin="round"
					className="lucide lucide-align-justify"
				>
					<line x1={3} x2={21} y1={6} y2={6} />
					<line x1={3} x2={21} y1={12} y2={12} />
					<line x1={3} x2={21} y1={18} y2={18} />
				</svg>
				</Button>
			</SheetTrigger>
			<SheetContent side={"left"} className="bg-white w-full p-1">
				<SheetHeader className="items-center">
					<Link
						href="/"
						className="title-font font-medium items-center align-middle text-gray-900 w-fit "
						onClick={() => setIsOpen(!isOpen)}
					>
						<Image
						src={setting?.Logo ?? ""}
						alt={setting?.CompanyName}
						sizes="(max-width: 768px) 30vw, (max-width: 1200px) 100vw, 100vw"
						width={170}
						height={100}
						className="w-auto h-[60px] md:w-[170px] md:h-[100px]"
						/>
					</Link>
				</SheetHeader>
				<div className="grid gap-4 h-full">
					<ScrollArea className="h-[calc(100vh_-_60px)] w-full">
						<Accordion
						type="single"
						collapsible
						className="w-full h-full p-4 "
						>
							<RenderMenu />

							<AutoCloseMenu/>

							{/* <div>
								<div className="w-full border-b-[1px] border-[#e7e5e4]">
									<Link 
										href={"/about-us"} 
										className="block w-full h-full px-1 py-6 font-bold text-base lg:text-lg transition-colors hover:text-main">
										
										Về Chúng Tôi
									</Link>
								</div>
								<div className="w-full border-b-[1px] border-[#e7e5e4]">
									<Link 
										href={"/contact"} 
										className="block w-full h-full px-1 py-6 font-bold text-base lg:text-lg transition-colors hover:text-main">
										
										Liên Hệ CAK
									</Link>
								</div>
							</div> */}
						</Accordion>
					</ScrollArea>
				</div>
				<SheetFooter>
					<SheetClose asChild></SheetClose>
				</SheetFooter>
			</SheetContent>
		</Sheet>
	</div>

    // {/* // My code: Menu Mobile: */}

    // <>
    // <div className="!fixed !top-0 left-0 right-0 bg-white w-full h-[100vh] overflow-hidden">
    // 	<div className="z-50 my-box-shadow-header" id="my-header" >
    // 		<div className="bg-white w-[94%] h-[72px] my-0 mx-auto flex items-center justify-between py-3">
    // 			{/* Left: */}
    // 			<div className="flex items-center justify-between">
    // 				<Link href={"/"} className="mr-8">
    // 					<div className="w-[72px] h-[46px] mr-3">
    // 						<Image className="w-full h-full" src={Logo} alt="logo"/>
    // 					</div>
    // 				</Link>
    // 			</div>

    // 			{/* Right: */}
    // 			<div className="block lg:hidden p-3 bg-[#f0f0ee] rounded-[50%] flex justify-center items-center transition-opacity hover:opacity-80">
    // 				<svg width="24" height="24" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
    // 			</div>
    // 		</div>
    // 	</div>

    // 	<Accordion
    // 		className="w-full block md:hidden p-3"
    // 		type="single"
    // 		collapsible
    // 	>
    // 		<RenderMenu />
    // 	</Accordion>

    // 	<div className="mt-8">
    // 		<h5 className="text-center font-bold text-xl">Follow us </h5>
    // 		<div>

    // 		</div>
    // 	</div>
    // </div>
    // </>
  );
}

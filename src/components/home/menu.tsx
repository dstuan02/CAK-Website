"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { fetchMenu } from "@/actions/setting";
import envConfig from "../../../config";

export async function Menu({ myMenuData = [] }: { myMenuData: any }) {
  const RenderMenu = ({ className = "" }) => {
    return myMenuData.map((item: any, index: any) => {
      /* My code: */
      if (item?.children?.length > 0) {
        return (
          <NavigationMenuItem key={index}>
            <HoverCard openDelay={1} closeDelay={1.5}>
              <HoverCardTrigger className="menu-underline--hover pt-2 pb-1 py-6 my-rotate-down-check transition-all hover:text-main hover:cursor-pointer font-bold flex items-center gap-4">
                {item.MenuName}
                <svg
                  className="transition-all duration-300 ease-in-out"
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z"
                    fill="currentColor"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </HoverCardTrigger>
              <HoverCardContent className="hovercardcontent--padd w-[700px] ml-2 py-0 mt-6">
                <div className="w-full gap-2 mt-4">
                  <ul className="flex flex-row flex-wrap justify-between">
                    {item?.children.map((component: any, slug: any) => (
                      <ListItem
                        key={component.MenuName}
                        title={component.MenuName}
                        href={"/" + item?.key + "/" + component?.key}
                        // href={"/marketing/" + `${slug === MarketingPage(data)}` + component?.key}
                      ></ListItem>
                    ))}
                  </ul>
                </div>
              </HoverCardContent>
            </HoverCard>
          </NavigationMenuItem>
        );
      }
      return (
        <NavigationMenuItem key={index} className={`${className} bg-white`}>
          <Link
            className="w-full"
            href={"/" + item.key}
            legacyBehavior
            passHref
          >
            <NavigationMenuLink
              className={`${navigationMenuTriggerStyle()} data-[state=open]:bg-white data-[active]:bg-white  
			   menu-underline--hover pt-2 pb-1 py-6  px-1 transition-all hover:text-main
			    hover:cursor-pointer !font-bold  !text-base hover:bg-white focus:bg-white`}
            >
              {item.MenuName}
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      );
    });
  };

  return (
    <>
      {/* CAK's main 'return': */}
      {/* <div
		className={`w-full bg-main transition-[display] duration-500 z-30  `}
		>
			<div className=" hidden lg:block container lg:mx-auto py-1">
				<NavigationMenu className="">
					<NavigationMenuList className="bg-main">
						<RenderMenu />
					</NavigationMenuList>
				</NavigationMenu>
			</div>
		</div> */}

      {/* My main 'return': */}
      <div className="hidden lg:block flex">
        <div className="flex items-center gap-8">
          <NavigationMenu className="">
            <NavigationMenuList>
              <RenderMenu />
            </NavigationMenuList>
          </NavigationMenu>

          {/* <div className="flex gap-6">
            <div className="menu-underline--hover">
              <Link
                href="/about-us"
                className="font-bold transition-all hover:text-main block w-full h-full px-1 py-1"
              >
                <div>
                  <h5>Về CAK</h5>
                </div>
              </Link>
            </div>
            <div className="menu-underline--hover">
              <Link
                href="/contact"
                className="font-bold transition-all hover:text-main block w-full h-full px-1 py-[0.368rem]"
              >
                <div>
                  <h5>Liên Hệ</h5>
                </div>
              </Link>
            </div>
          </div> */}

          <div className="my-5 transition-all my-contact-transform--header">
            <Link
              href={"tel:0299 88 88 683"}
              className="my-contact-btn--header"
            >
              0299 88 88 683
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

// const ListItem = React.forwardRef<
//   React.ElementRef<"a">,
//   React.ComponentPropsWithoutRef<"a">
// >(({ className, title, children, ...props }, ref) => {
//   return (
//     <li>
// 		<NavigationMenuLink asChild>
// 			<Link
// 			ref={ref}
// 			className={cn(
// 				"block cursor-pointer select-none space-y-1 text-white rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
// 				className
// 			)}
// 			{...props}
// 			>
// 			<div className="text-base font-medium leading-none">{title}</div>
// 			<p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
// 				{children}
// 			</p>
// 			</Link>
// 		</NavigationMenuLink>
//     </li>
//   );
// });
// ListItem.displayName = "ListItem";

/* My ListItem: */
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li className="w-1/2 mb-2">
      <Link
        ref={ref}
        className={cn(
          "block rounded-lg w-full h-full transition-all hover:bg-main hover:bg-opacity-40 p-2"
        )}
        {...props}
      >
        <div>
          <h5 className="font-bold text-black">{title}</h5>
          <p>Giải pháp tối ưu cho công ty của bạn</p>
        </div>
      </Link>
    </li>
  );
});
ListItem.displayName = "ListItem";

"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import "./phone-button.css";
import PhoneSVG from "../../../public/images/phone-icon.png";

export default function FloatingButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const scrolled = window.scrollY;
      // console.log("scroll : ", scrolled)
      if (scrolled > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const backToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="fixed bottom-14 right-2 flex gap-1 flex-col items-end z-50">
        {/* <div className="relative">
			<button className="absolute translate-x-[-52px] translate-y-[-50px]">
			<Link href={`tel:0299 88 88 683`}>
				<div>
				<div className="position-relative w-[240px] flex flex-row items-center">
				
					<div className="phone-ring-img absolute top-0 z-10">
					<div className="shake-img">
						<Image
						src={PhoneSVG}
						width={44}
						height={44}
						alt="phone"
						/>
					</div>
					</div>
				</div>
				</div>
			</Link>
			</button>
		</div> */}

        {/* button zalo: */}
        {/* <button className="text-main rounded-full p-1 focus:outline-none w-fit h-fit duration-300 transition-transform ease-in-out transform hover:scale-105">
			<a target="_blank" href="https://zalo.me/3681787670720123046">
			<Image
				src="/images/zalo-icon-circle.png"
				width={45}
				height={45}
				alt="Zalo"
				className="object-cover"
			/>
			</a>
		</button> */}

        {/* button messenger: */}
        {/* <button className="text-main rounded-full p-1 focus:outline-none w-fit h-fit duration-300 transition-transform ease-in-out transform hover:scale-105">
			<a target="_blank" href="http://m.me/giaiphapcongnghecak/">
			<Image
				src="/images/messenger-icon.png"
				width={43}
				height={43}
				alt="Zalo"
			/>
			</a>
		</button> */}

        {/* button Back to top: */}
        <button
          className={`text-white rounded-full flex items-center justify-center
			w-[50px] h-[50px] duration-75 transition-transform transform hover:scale-105
			${
        showButton
          ? "duration-300 opacity-100 transition-opacity ease-in"
          : "opacity-0"
      }`}
          onClick={backToTop}
        >
          {showButton ? (
            // <Image
            //   src="/images/back-to-top-icon.svg"
            //   width={50}
            //   height={50}
            //   alt="backToTop"
            // />
            <div className="rounded-[50%] p-3 bg-main">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6"
              >
                <path
                  fill-rule="evenodd"
                  d="M11.47 7.72a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 0 1-1.06-1.06l7.5-7.5Z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
          ) : null}
        </button>
      </div>
    </>
  );
}

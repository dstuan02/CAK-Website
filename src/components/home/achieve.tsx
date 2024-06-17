"use client";

import Link from "next/link";
import Image from "next/image";
import GroupImg from "../../../public/images/group-svg.svg";
import BestCus from "../../../public/images/best-customer-svg.svg";
import ProjectCom from "../../../public/images/pj-complete.svg";
import ExpYear from "../../../public/images/exp-years.svg";
import CountUp from "react-countup";
import { animated } from "@react-spring/web";
import { useState } from "react";
import ScrollTrigger from "react-scroll-trigger";

// JSON:
import GoogleAdsData from "../../data/quang-cao-google-ads.json";

const { section7 } = GoogleAdsData;

export default function AchieveComponent() {
  const [counterOn, setCounterOn] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  const handleEnterViewport = () => {
    // if (!hasTrigger) {...}: Neu ma chua cuon den thi...
    if (!hasTriggered) {
      setCounterOn(true);
      setHasTriggered(true);
    }
  };

  return (
    <>
      <div className="w-[94%] my-0 mx-auto md:container bg-white rounded-b-[100px] py-10 lg:p-10">
        <h3 className="text-2xl md:text-4xl font-bold text-center">
          Những thành tựu mà{" "}
          <span className="bg-gradient-to-r from-[#fdbd00] to-[#F28558] bg-clip-text text-transparent">
            CAK SOLUTION
          </span>{" "}
          đạt được
        </h3>
        <p className="text-base md:text-lg text-center my-3">
          {section7.content}
        </p>

        {/* achievements container: */}
        <ScrollTrigger onEnter={handleEnterViewport}>
          <div className="flex items-center justify-center md:justify-around lg:justify-between flex-wrap pt-12 gap-2 md:gap-0">
            {section7.child.map((projectNum, index) => (
              <div
                key={index}
                className="flex items-center justify-around md:justify-between w-full md:w-[260px]"
              >
                <div className="w-[92px] h-[100px] md:w-[102px] md:h-[110px]">
                  <Image
                    className="w-full h-full"
                    src={BestCus}
                    alt="achieve-img"
                  />
                </div>
                <div className="">
                  <animated.h5 className="font-bold text-4xl md:text-6xl">
                    {/* {projectNum.title} */}
                    {counterOn && (
                      <CountUp
                        start={0}
                        end={projectNum.title}
                        duration={2}
                        delay={0}
                      />
                    )}
                    +
                  </animated.h5>
                  <p className="w-[140px]">{projectNum.content}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollTrigger>
      </div>
    </>
  );
}

"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import Link from "next/link";
import Image from "next/image";
import CKexpress from "../../../public/images/CKexpress.png";
import EuroTravel from "../../../public/images/EuroTravel.png";
import GTel from "../../../public/images/gtel.png";
import MayTinhVN from "../../../public/images/maytinhvn.png";

export default function BrandComponent() {
  const mySrc = [
    CKexpress,
    EuroTravel,
    GTel,
    MayTinhVN,
    CKexpress,
    GTel,
    MayTinhVN,
    EuroTravel,
  ];
  return (
    <>
      <div className="w-[94%] my-14 mx-auto md:container">
        <h3 className="text-black text-2xl md:text-4xl font-bold text-center py-8">
          Được tin tưởng bởi những doanh nghiệp tiêu biểu
        </h3>
        <div className="flex items-center justify-center w-[94%] md:container">
          <Carousel
            className="w-full max-w-6xl mx-auto"
            plugins={[
              Autoplay({
                delay: 3000,
              }),
            ]}
          >
            <CarouselContent className="">
              {mySrc.map((src: any, index) => (
                <CarouselItem
                  key={index}
                  className="pl-1 basis-1/3 md:basis-1/4"
                >
                  <div className="p-1">
                    <Card className="shadow-none border-none flex items-center h-[50px] md:h-[120px]">
                      <CardContent className="flex aspect-video items-center justify-center p-6">
                        <Image
                          className="object-contain transition-all grayscale hover:grayscale-0"
                          src={src}
                          alt="CKexpress"
                        ></Image>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </>
  );
}

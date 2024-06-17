"use client";

import React, { useEffect, useState } from "react";
import HomeBlogItem from "@/components/home/article-data";
import Link from "next/link";

export default function RenderData({ data = [] }: { data: any }) {
  const itemsToShow = 4; // Số lượng item hiển thị
  const [currentItems, setCurrentItems] = useState([]);

  useEffect(() => {
    // Lọc ra các mục có MenuName là "Tin tức"
    const filteredData = data?.filter(
      (item: any) => item.MenuName === "Tin tức"
    );

    // Giới hạn số mục hiển thị là 4
    const itemsToDisplay = filteredData.slice(0, itemsToShow);

    // Cập nhật danh sách các mục hiện tại
    setCurrentItems(itemsToDisplay);
  }, [data]);

  return (
    <>
      {currentItems.length > 0 ? (
        <>
          <div className="flex flex-col md:flex-row flex-wrap justify-center gap-6">
            {currentItems.map((item: any, index: number) => (
              <div className="w-full lg:w-[23%] md:w-[40%]" key={index}>
                <HomeBlogItem blog={item} key={index} />
              </div>
            ))}
          </div>

          <div className=" w-[96px] mt-5 ml-auto">
            <a
              href="/blogs"
              target="_blank"
              className="italic border-2 border-gray-300 rounded-full flex justify-center text-gray-300 hover:bg-main hover:text-white hover:border-main transition-all duration-900"
            >
              <span>Xem thêm</span>
              {/* <svg
                className="transition-all"
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.14645 11.1464C1.95118 11.3417 1.95118 11.6583 2.14645 11.8536C2.34171 12.0488 2.65829 12.0488 2.85355 11.8536L6.85355 7.85355C7.04882 7.65829 7.04882 7.34171 6.85355 7.14645L2.85355 3.14645C2.65829 2.95118 2.34171 2.95118 2.14645 3.14645C1.95118 3.34171 1.95118 3.65829 2.14645 3.85355L5.79289 7.5L2.14645 11.1464ZM8.14645 11.1464C7.95118 11.3417 7.95118 11.6583 8.14645 11.8536C8.34171 12.0488 8.65829 12.0488 8.85355 11.8536L12.8536 7.85355C13.0488 7.65829 13.0488 7.34171 12.8536 7.14645L8.85355 3.14645C8.65829 2.95118 8.34171 2.95118 8.14645 3.14645C7.95118 3.34171 7.95118 3.65829 8.14645 3.85355L11.7929 7.5L8.14645 11.1464Z"
                  fill="currentColor"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                ></path>
              </svg> */}
            </a>
          </div>
        </>
      ) : (
        <div>Chưa có bài viết mới</div>
      )}
    </>
  );
}

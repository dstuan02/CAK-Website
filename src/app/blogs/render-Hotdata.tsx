"use client";
import React, { useEffect, useState } from "react";
import HotBlog from "@/components/blog/HotBlog";
export default function RenderData({ data }: { data: any }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const [currentItems, setCurrentItems] = useState([]);

  useEffect(() => {
    // Lọc ra các mục có MenuName là "Tin tức"
    const newsItems = data.filter((item: any) => item.MenuName === "Tin tức");

    // Xáo trộn mảng dữ liệu đã lọc
    const shuffledData = shuffle(newsItems);

    // Lấy 5 mục đầu tiên
    const randomItems = shuffledData.slice(0, itemsPerPage);

    // Cập nhật state với các mục đã được lọc và xáo trộn
    setCurrentItems(randomItems);
  }, [data]);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      {currentItems.length > 0 ? (
        <div className="max-md:w-full lg:mx-auto ">
          {" "}
          {/* my-4 */}
          {currentItems.map((item: any, index: number) => (
            <div key={index}>
              <HotBlog blog={item} key={index} />
            </div>
          ))}
        </div>
      ) : (
        <div>Chưa có bài viết mới</div>
      )}{" "}
    </>
  );
}

// Hàm xáo trộn mảng
function shuffle(array: any[]) {
  let currentIndex = array.length;
  let temporaryValue;
  let randomIndex;

  // Trong khi còn phần tử để xáo trộn
  while (currentIndex !== 0) {
    // Chọn một phần tử còn lại
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // Hoán đổi nó với phần tử hiện tại
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

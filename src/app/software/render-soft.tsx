"use client";
import React, { useEffect, useState } from "react";
import SoftBlog from "@/components/blog/soft-blog";

export default function RenderData({ data }: { data: any }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [currentItems, setCurrentItems] = useState([]);

  useEffect(() => {
    // Lọc ra các mục có MenuName không phải là "Tin tức"
    const newsItems = data.filter((item: any) => item.MenuName !== "Tin tức");

    // Cập nhật currentItems với mảng đã lọc
    setCurrentItems(newsItems);
  }, [data]);

  return (
    <>
      {currentItems.length > 0 ? (
        <div className="w-full my-4">
          {currentItems.map((item: any, index: number) => (
            <div key={index}>
              <SoftBlog blog={item} key={index} />
            </div>
          ))}
        </div>
      ) : (
        <div>Chưa có bài viết mới</div>
      )}
    </>
  );
}

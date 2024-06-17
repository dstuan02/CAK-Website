"use client";
import React, { useEffect, useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import BlogItem from "@/components/blog/blog-item";

export default function RenderData({ data = [] }: { data: any }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const maxDisplayedPages = 5; // Số trang tối đa hiển thị
  const [currentItems, setCurrentItems] = useState(data);

  useEffect(() => {
    // Lọc ra các mục có MenuName là "Tin tức"
    const filteredData = data.filter(
      (item: any) => item.MenuName === "Tin tức"
    );

    // Tính toán và thiết lập lại trang hiện tại để tránh lỗi nếu trang hiện tại vượt qua số lượng trang mới tính toán
    const newCurrentPage = Math.min(
      currentPage,
      Math.ceil(filteredData.length / itemsPerPage)
    );

    // Cập nhật trang hiện tại
    setCurrentPage(newCurrentPage);

    // Thiết lập danh sách các mục hiện tại dựa trên trang mới tính toán và dữ liệu đã lọc
    const indexOfLastItem = newCurrentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

    // Cập nhật danh sách các mục hiện tại
    setCurrentItems(currentItems);
  }, [currentPage, data]);

  const totalItems = data?.length ?? 0;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (pageNumber: number) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Tạo một mảng chứa các số trang để hiển thị dựa trên trang hiện tại và số trang tối đa hiển thị
  let displayedPages: number[] = [];
  let startPage = Math.max(1, currentPage - Math.floor(maxDisplayedPages / 2));
  let endPage = Math.min(totalPages, startPage + maxDisplayedPages - 1);
  for (let i = startPage; i <= endPage; i++) {
    displayedPages.push(i);
  }

  return (
    <>
      {currentItems.length > 0 ? (
        <div className="">
          {currentItems.map((item: any, index: number) => (
            <div key={index}>
              <BlogItem blog={item} key={index} />
            </div>
          ))}

          <div className="mt-5">
            <Pagination>
              <PaginationContent>
                {currentPage > 1 && ( // Kiểm tra nếu đang ở trang > 1 thì hiển thị nút Previous
                  <PaginationPrevious onClick={handlePreviousPage} />
                )}
                {displayedPages.map((page) => (
                  <PaginationItem key={page}>
                    <PaginationLink
                      href="#"
                      onClick={() => handlePageChange(page)}
                      isActive={page === currentPage}
                    >
                      {page}
                    </PaginationLink>
                  </PaginationItem>
                ))}
                <PaginationNext onClick={handleNextPage} />
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      ) : (
        <div>Chưa có bài viết mới</div>
      )}
    </>
  );
}

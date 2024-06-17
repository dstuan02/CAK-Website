import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface BlogProps {
  blog: {
    UrlDetail: string;
    NewsTitle: string;
    NewsDescription: string;
    ImageNewsShow: string;
    CreateOn: string;
    NewsContent: string;
  };
}

export default function BlogItem({ blog }: BlogProps) {
  return (
    <>
      {/* Article container: */}
      <Link href={`/blogs/${blog.UrlDetail}`}>
        <div
          className="w-full transition-transform hover:translate-y-[-6px] hover:shadow-custom drop-shadow-md 
        bg-my-main-cream rounded-lg px-4 py-4 flex items-center justify-between gap-4 my-4 
        flex-col md:flex-row min-h-52"
        >
          <div className="w-full md:w-[30%] h-[160px]">
            <Image
              width={500}
              height={500}
              className="w-full h-full rounded-lg object-cover"
              src={blog.ImageNewsShow}
              alt="Blog Image"
            />
          </div>

          <div className="w-full md:w-[70%]">
            <div className="text-sm flex gap-4 my-2 md:my-4">
              <h1 className="bg-[#C0E7FD] rounded-xl px-2 py-1 text-[#013879]">
                Những điều cần biết
              </h1>
              <h1 className="font-medium text-gray-400 dark:text-gray-500">
                {format(new Date(blog.CreateOn), "yyyy-MM-dd")}
              </h1>
            </div>
            <h5
              className="line-clamp-2 overflow-hidden font-bold text-lg text-black transition-colors hover:text-main"
              title={blog.NewsTitle}
            >
              {blog.NewsTitle}
            </h5>
            <p className="line-clamp-3 text-my-main-gray my-2 text-sm md:text-base">
              {blog.NewsDescription}
            </p>
          </div>
        </div>
      </Link>
    </>
  );
}

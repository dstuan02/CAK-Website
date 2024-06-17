import React from "react";
import Link from "next/link";
import { format } from "date-fns";
import Image from "next/image";

interface BlogProps {
  NewsTitle: string;
  NewsDescription: string;
  ImageNewsShow: string;
  CreateOn: string;
  NewsContent: string;
  UrlDetail: string;
}

export default function HotBlog({ blog }: BlogProps) {
  return (
    <Link href={`/blogs/${blog.UrlDetail}`}>
      <div
        className="w-full transition-transform hover:translate-y-[-2px] hover:shadow-custom drop-shadow-md
    bg-my-main-cream rounded-lg p-4 flex flex-col md:flex-row items-center justify-between gap-4 mb-4"
      >
        <div className="w-full md:w-[46%] h-[160px]">
          <Image
            width={500}
            height={500}
            className="w-full h-full rounded-lg object-cover"
            src={blog.ImageNewsShow}
            alt={blog.NewsTitle}
          />
        </div>

        <div className="w-full md:w-[50%]">
          <h5
            className="line-clamp-2 overflow-hidden font-bold text-lg text-black transition-colors hover:text-main"
            title={blog.NewsTitle}
          >
            {blog.NewsTitle}
          </h5>
          <p className="line-clamp-3 text-my-main-gray my-2 text-sm md:text-base">
            {blog.NewsDescription}
          </p>
          <span className="mt-2 inline-block text-xs text-gray-400 dark:text-gray-500">
            {format(new Date(blog.CreateOn), "yyyy-MM-dd")}
          </span>
        </div>
      </div>
    </Link>
  );
}

import Link from "next/link";
import Image from "next/image";
import { format } from "date-fns";

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

export default function ArticleData({ blog }: BlogProps) {
  return (
    // <div className="w-[94%] my-0 mx-auto md:container py-8">
    // </div>
    <>
      {/* Article container: */}
      <div className="flex flex-col lg:flex-row gap-2 h-full">
        <Link className="w-full md:h-full" href={`/blogs/${blog.UrlDetail}`}>
          <div
            className="w-full h-full transition-transform hover:translate-y-[-6px] hover:shadow-custom drop-shadow-md 
            bg-my-main-cream rounded-lg p-4 flex flex-col gap-4"
          >
            <div className="w-full h-[180px]">
              <Image
                width={500}
                height={500}
                className="w-full h-full rounded-lg object-cover"
                src={blog.ImageNewsShow}
                alt="Blog Image"
              />
            </div>

            <div className="w-full flex flex-col justify-between">
              <div className="text-xs flex items-start justify-between">
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
      </div>
    </>
  );
}

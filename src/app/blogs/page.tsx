import { fetchBlogs } from "@/actions/setting";
import { Breadcrum } from "@/components/home/bread-crumb";
import { HomeIcon } from "@radix-ui/react-icons";
import RenderData from "./render-data";
import RenderHotData from "./render-Hotdata";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tin tức",
  description:
    "blog, tin tức, tin tức CAK, tin nổi bật, những điều cần biết CAK",
};

export default async function Blogs() {
  const blogs = await fetchBlogs({
    Page: 1,
    Take: 100,
    Url: "",
    UrlParent: "",
  });

  return (
    <>
      <div className="w-[94%] my-0 mx-auto md:container py-8">
        {" "}
        {/* lg:w-[80%] sm:w-full  my-0 mx-auto py-8 */}
        <div className="mx-4">
          <Breadcrum
            items={[
              {
                href: "/",
                title: (
                  <>
                    <HomeIcon />
                  </>
                ),
              },
              { href: "#", title: <>Tin Tức</>, isCurrentPage: true },
            ]}
          />
        </div>
        <div className="flex flex-grow mx-auto max-xl:flex-wrap justify-between">
          {" "}
          {/* flex flex-grow mx-auto max-lg:flex-wrap justify-start */}
          <div className="w-[94%] my-0 mx-auto md:container lg:w-[66%]">
            {" "}
            {/* mx-auto px-4 lg:w-[60%] */}
            {/* <h2 className=" relative text-lg font-bold text-main md:text-4xl dark:text-white pt-8">
					Tin Tức
				</h2> */}
            <h4 className="relative text-3xl font-bold my-6 underline-offset-1 ">
              Tin tức
              <span className="absolute left-[-9px] bottom-[12px] bg-main w-[4px] h-[10px] rounded"></span>
            </h4>
            <RenderData data={blogs} />
          </div>
          <div className="w-[94%] my-0 mx-auto md:container lg:w-[30%] flex flex-col">
            {" "}
            {/* lg:w-[30%] flex flex-col px-3 */}
            {/* <h1 className="max-sm:text-4xl font-bold text-main md:text-4xl dark:text-white pt-8">
					Tin nổi bật
				</h1> */}
            <h4 className="relative text-3xl font-bold my-6 underline-offset-1 ">
              Tin nổi bật
              <span className="absolute left-[-9px] bottom-[12px] bg-main w-[4px] h-[10px] rounded"></span>
            </h4>
            {/* render hot blog */}
            <RenderHotData data={blogs} />
          </div>
        </div>
      </div>
    </>
  );
}

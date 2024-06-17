import { fetchBlogs } from "@/actions/setting";
import { Breadcrum } from "@/components/home/bread-crumb";
import { HomeIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";
import RenderHotData from "../render-Hotdata";


export default async function Blogs_Travel_Experience({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  const blog = await fetchBlogs({
    Page: 1,
    Take: 100,
    Url: slug,
    UrlParent: "",
  });
  const blogs = await fetchBlogs({
    Page: 1,
    Take: 100,
    Url: "",
    UrlParent: "",
  });

  return (
	<div className="w-[94%] my-0 mx-auto md:container py-8"> {/* lg:w-[80%] sm:w-full my-0 mx-auto py-8 */}
		<div className="mx-4">
			<Breadcrum items={[
				{
					href: "/",
					title: (
					<>
						<HomeIcon />
					</>
					),
				},
				{ href: "./", title: "Tin Tức" },
				]}
			/>
		</div>
		
		<div className="flex flex-grow mx-auto max-xl:flex-wrap justify-between gap-3">
			{/* Content */}
			<div className="w-[94%] my-0 mx-auto md:container lg:w-[58%]">
				{blog.map((blog: any, index: number) => (
				<div key={index} className="my-8">
					<span className="mt-2 mb-2 inline-block text-sm text-gray-400 dark:text-gray-500 sm:mt-0">
					Ngày đăng tải:  {format(new Date(blog.CreateOn), "yyyy-MM-dd")}
					</span>
					<h3 className="text-4xl font-bold mb-4">{blog.NewsTitle}</h3>
					<div className="w-full flex flex-col items-center">
						<div
							className="prose max-w-none text-justify"
							dangerouslySetInnerHTML={{ __html: blog.NewsContent }}
						></div>
					</div>
				</div>
				))}
			</div>

			{/* Hot */}
			<div className="w-[94%] my-0 mx-auto md:container lg:w-[34%] flex flex-col">
				{/* <h1 className="max-sm:text-4xl font-bold text-main md:text-4xl dark:text-white pt-8">
				Tin nổi bật
				</h1> */}
				<h4 className="relative text-3xl font-bold my-4 underline-offset-1 ">
					Tin nổi bật
 					<span className="absolute left-[-9px] bottom-[12px] bg-main w-[4px] h-[10px] rounded"></span>
 				</h4>
				
				<RenderHotData data={blogs} />
			</div>
		</div>
	</div>
  );
}

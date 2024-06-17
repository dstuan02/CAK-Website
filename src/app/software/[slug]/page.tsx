// "use client";
import { fetchBlogs } from "@/actions/setting";
import { Breadcrum } from "@/components/home/bread-crumb";
import { HomeIcon } from "@radix-ui/react-icons";
import RenderSoft from "../render-soft";
import type { Metadata, ResolvingMetadata } from "next";
import envConfig from "../../../../config";

type Props = {
  params: { slug: string };
};

// titleMap: [slug-value]: title --> [key: string]: string
const titleMap: any = {
  "cak-cloud-sever": "CAK Cloud Sever",
  "phan-mem-cham-cong-da-tien-ich-tkp": "Phần Mềm Chấm Công Đa Tiện Ích TKP",
  "phan-mem-quan-li-khach-hangcrm": "Phần Mềm Quản Lí Khách Hàng - CRM",
  "phan-mem-quan-ly-ke-toantai-chinh-acm":
    "Phần Mềm Quản Lí Kế Toán - Tài Chính",
  "han-mem-quan-ly-van-tai-tms": "Phần Mềm Quản Lí Vận Tải - TMS",
  "phan-mem-chat-noi-bo": "Phần Mềm Chat Nội Bộ",
  "he-thong-chat-bot-ai": "Hệ Thống Chat Bot AI",
  "dich-vu-email-doanh-nghiep": "Dịch Vụ Email Doanh Nghiệp",
  "phan-mem-quan-ly-kho-thong-minh-wms":
    "Phần Mềm Quản Lý Kho Thông Minh - VMS",
  "giai-phap-phan-mem-theo-yeu-cau": "Giải Pháp Phần Mềm Theo Yêu Cầu",
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const slug = params.slug;
  const blog = await fetchBlogs({
    Page: 1,
    Take: 100,
    Url: slug,
    UrlParent: "",
  });
  if (!blog?.length) {
    return {
      title: "404",
    };
  }
  const b = blog[0];
  return {
    title: b.NewsTitle,
    description: b.MetaDescription,
    openGraph: {
      images: [
        `${envConfig.NEXT_PUBLIC_CDN}${b?.ImageNewsShow?.split(",")[0]}`,
      ],
      url: `${envConfig.NEXT_PUBLIC_APP_URL}/dich-vu/${slug}`,
    },
  };
}

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
            { href: "#", title: "Dịch vụ của CAK", isCurrentPage: true },
          ]}
        />
      </div>
      <div
        className="flex flex-grow max-xl:flex-wrap 
      justify-between"
      >
        {/* Content */}
        <div className="w-[94%] my-0 mx-auto md:container lg:w-[58%] ">
          {" "}
          {/* w-[94%] my-0 mx-auto md:container lg:w-[60%] px-2 */}
          {blog.map((blog: any, index: number) => (
            <div key={index} className="my-8">
              <div className="w-full flex flex-col">
                <h1 className="text-2xl md:text-3xl leading-10 dark:text-white pb-6 font-bold bg-gradient-to-r from-my-linear-text-l to-my-linear-text-r bg-clip-text text-transparent">
                  {blog.NewsTitle}
                </h1>
                <div
                  className="prose max-w-none text-justify"
                  dangerouslySetInnerHTML={{ __html: blog.NewsContent }}
                ></div>
              </div>
            </div>
          ))}
        </div>
        {/* Hot */}
        <div className="w-[94%] my-0 mx-auto md:container lg:w-[38%] flex flex-col px-3">
          {/* <h1 className="max-sm:text-4xl font-bold text-main md:text-4xl dark:text-white pt-8">
            Dịch vụ khác
          </h1> */}

          <h4 className="relative text-3xl font-bold my-6 underline-offset-1 ">
            Dịch vụ khác
            <span className="absolute left-[-9px] bottom-[12px] bg-main w-[4px] h-[10px] rounded"></span>
          </h4>
          <RenderSoft data={blogs} />
        </div>
      </div>
    </div>
  );
}

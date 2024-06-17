import Image from "next/image";
import Link from "next/link";
import AdviseImg from "../../../public/images/advise-svg.svg";
import GoogleAdsData from "../../data/quang-cao-google-ads.json";

export default function DifferentItem({
  reasonJsonData,
}: {
  reasonJsonData: any;
}) {
  // const { section6 } = reasonJsonData;
  // return (
  // <>
  //     {section6?.child?.map((reason: any) =>
  //         <div className="cursor-default transition-all hover:translate-y-[-6px] hover:shadow-custom drop-shadow-md w-full md:w-[46%] lg:w-[30%] h-[180px] bg-white p-6 rounded-xl">
  //             <div className="w-[50px] h-[50px] my-0 mx-auto">
  //                 <Image className="w-[100px]" src={AdviseImg} alt="planimg" />
  //             </div>
  //             <h5 className="text-lg lg:text-base hover:text-main text-center font-[800] text-[#253746] my-4">
  //                 {reason.title}
  //             </h5>
  //         </div>
  //     )}
  // </>
  // )
  // console.log('reasondATA', reasonJsonData?.section6);

  if (reasonJsonData && reasonJsonData?.section6?.child?.length > 0) {
    const { section6 } = reasonJsonData;
    return (
      <>
        {section6?.child?.map((reason: any, index: any) => (
          <div
            key={index}
            className="cursor-default transition-all hover:translate-y-[-6px] hover:shadow-custom drop-shadow-md w-full md:w-[46%] lg:w-[30%] h-[180px] bg-white p-6 rounded-xl"
          >
            <div className="w-[50px] h-[50px] my-0 mx-auto">
              <Image className="w-[100px]" src={AdviseImg} alt="planimg" />
            </div>
            <h5 className="text-lg lg:text-base hover:text-main text-center font-[800] text-[#253746] my-4">
              {reason.title}
            </h5>
          </div>
        ))}
      </>
    );
  }
  // else at main page:
  return (
    <>
      <div className="cursor-default transition-all hover:translate-y-[-6px] hover:shadow-custom drop-shadow-md w-full md:w-[46%] lg:w-[30%] h-[180px] bg-white p-6 rounded-xl">
        <div className="w-[50px] h-[50px] my-0 mx-auto">
          <Image className="w-[100px]" src={AdviseImg} alt="planimg" />
        </div>
        <h5 className="text-lg lg:text-base hover:text-main text-center font-[800] text-[#253746] my-4">
          Chuyên viên tư vấn kinh nghiệm, hỗ trợ tận tâm từ A-Z
        </h5>
      </div>

      <div className="cursor-default transition-all hover:translate-y-[-6px] hover:shadow-custom drop-shadow-md w-full md:w-[46%] lg:w-[30%] h-[180px] bg-white p-6 rounded-xl">
        <div className="w-[50px] h-[50px] my-0 mx-auto">
          <Image className="w-[100px]" src={AdviseImg} alt="planimg" />
        </div>
        <h5 className="text-lg lg:text-base hover:text-main text-center font-[800] text-[#253746] my-4">
          Thiết kế độc đáo, dựa trên nghiên cứu người dùng, nổi bật hơn đối thủ
        </h5>
      </div>

      <div className="cursor-default transition-all hover:translate-y-[-6px] hover:shadow-custom drop-shadow-md w-full md:w-[46%] lg:w-[30%] h-[180px] bg-white p-6 rounded-xl">
        <div className="w-[50px] h-[50px] my-0 mx-auto">
          <Image className="w-[100px]" src={AdviseImg} alt="planimg" />
        </div>
        <h5 className="text-lg lg:text-base hover:text-main text-center font-[800] text-[#253746] my-4">
          Công nghệ mới nhất, hệ thống hoạt động ổn định, bảo mật cao
        </h5>
      </div>

      <div className="cursor-default transition-all hover:translate-y-[-6px] hover:shadow-custom drop-shadow-md w-full md:w-[46%] lg:w-[30%] h-[180px] bg-white p-6 rounded-xl">
        <div className="w-[50px] h-[50px] my-0 mx-auto">
          <Image className="w-[100px]" src={AdviseImg} alt="planimg" />
        </div>
        <h5 className="text-lg lg:text-base hover:text-main text-center font-[800] text-[#253746] my-4">
          Quy trình tiếp nhận và triển khai dự án chuyên nghiệp hàng đầu
        </h5>
      </div>

      <div className="cursor-default transition-all hover:translate-y-[-6px] hover:shadow-custom drop-shadow-md w-full md:w-[46%] lg:w-[30%] h-[180px] bg-white p-6 rounded-xl">
        <div className="w-[50px] h-[50px] my-0 mx-auto">
          <Image className="w-[100px]" src={AdviseImg} alt="planimg" />
        </div>
        <h5 className="text-lg lg:text-base hover:text-main text-center font-[800] text-[#253746] my-4">
          Kết nối chặt chẽ, tương tác và phản hồi liên tục trước và sau dự án
        </h5>
      </div>

      <div className="cursor-default transition-all hover:translate-y-[-6px] hover:shadow-custom drop-shadow-md w-full md:w-[46%] lg:w-[30%] h-[180px] bg-white p-6 rounded-xl">
        <div className="w-[50px] h-[50px] my-0 mx-auto">
          <Image className="w-[100px]" src={AdviseImg} alt="planimg" />
        </div>
        <h5 className="text-lg lg:text-base hover:text-main text-center font-[800] text-[#253746] my-4">
          Đội ngũ kỹ thuật kinh nghiệm thực thi nhiều dự án lớn, phức tạp
        </h5>
      </div>

      <div className="cursor-default transition-all hover:translate-y-[-6px] hover:shadow-custom drop-shadow-md w-full md:w-[46%] lg:w-[30%] h-[180px] bg-white p-6 rounded-xl">
        <div className="w-[50px] h-[50px] my-0 mx-auto">
          <Image className="w-[100px]" src={AdviseImg} alt="planimg" />
        </div>
        <h5 className="text-lg lg:text-base hover:text-main text-center font-[800] text-[#253746] my-4">
          Trách nhiệm, mang lại sản phẩm/ dịch vụ giá trị đến cho khách hàng
        </h5>
      </div>

      <div className="cursor-default transition-all hover:translate-y-[-6px] hover:shadow-custom drop-shadow-md w-full md:w-[46%] lg:w-[30%] h-[180px] bg-white p-6 rounded-xl">
        <div className="w-[50px] h-[50px] my-0 mx-auto">
          <Image className="w-[100px]" src={AdviseImg} alt="planimg" />
        </div>
        <h5 className="text-lg lg:text-base hover:text-main text-center font-[800] text-[#253746] my-4">
          Vận hành và bảo trì đảm bảo website hoạt động trơn tru, không lỗi
        </h5>
      </div>

      <div className="cursor-default transition-all hover:translate-y-[-6px] hover:shadow-custom drop-shadow-md w-full md:w-[46%] lg:w-[30%] h-[180px] bg-white p-6 rounded-xl">
        <div className="w-[50px] h-[50px] my-0 mx-auto">
          <Image className="w-[100px]" src={AdviseImg} alt="planimg" />
        </div>
        <h5 className="text-lg lg:text-base hover:text-main text-center font-[800] text-[#253746] my-4">
          Hỗ trợ đào tạo, tài liệu & hướng dẫn sử dụng miễn phí
        </h5>
      </div>
    </>
  );
}

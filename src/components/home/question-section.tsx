import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

// JSONs:
import GoogleAdsData from '../../data/quang-cao-google-ads.json';
import LandingPageData from '../../data/thiet-ke-landingpage.json';
import FacebookAdsData from '../../data/quang-cao-facebook-ads.json';
import MarketingAdsData from '../../data/dich-vu-content-marketing.json';
import FanPageServiceData from '../../data/dich-vu-cham-soc-fanpage.json';
import WebsiteServiceData from '../../data/dich-vu-cham-soc-website.json';
import TiktokAdsData from '../../data/quang-cao-tiktok-ads.json';
import DesignTemplateData from '../../data/thiet-ke-website-theo-mau.json';



export default function QuestionSection( {jsonData} : {jsonData: any} ) {
    const { section8 } = jsonData;

    return(
        <>
        <div className="w-[92%] my-0 mx-auto md:container lg:p-8">
            <h3 className="my-8 font-bold text-center text-2xl md:text-4xl md:leading-[3rem] bg-gradient-to-r from-my-linear-text-r to-my-linear-text-l bg-clip-text text-transparent">
                {section8.title}
            </h3>
            <Accordion className="w-full" type="single" collapsible>
                {section8.child.map((quesItem: any, index: any) => 
                    <AccordionItem className="w-full h-full outline-none" key={index} value={`item-${index}`}>
                        <AccordionTrigger className="text-start px-1 py-4 font-bold text-base md:text-lg transition-all text-black focus:text-main hover:text-main hover:no-underline">
                            {quesItem.label}
                        </AccordionTrigger>
                        <AccordionContent className="bg-orange-50 text-base p-4 rounded-md">
                            <ul className="my-2">
                                {quesItem?.children?.length > 0 && quesItem?.children?.map((ansContent: any, index: number) => 
                                    <li key={index} className="my-2 text-base md:text-lg">
                                        {ansContent}
                                    </li>
                                )}
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                )}
            </Accordion>
        </div>
        </>
    )
}
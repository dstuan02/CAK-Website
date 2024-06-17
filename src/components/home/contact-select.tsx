"use client";

import React from "react";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";



export default function ContactSelect( {data = []}: {data: any} ) {
    const RenderContactSelect = () => {
        return(
            <Select>
                <SelectTrigger className="text-base w-full px-3 py-6">
                    <SelectValue placeholder="Bạn cần CAK Solution tư vấn dịch vụ hay hợp tác?" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>Dịch vụ tại CAK Solution</SelectLabel>
                        {data?.map((item: any) =>
                        item?.children?.length > 0 ? (
                            item.children.map((component: any) => (
                                <SelectItem
                                    className="p-3"
                                    value={component.MenuName}
                                    key={component.index}
                                >
                                    {component.MenuName}
                                </SelectItem>
                            ))
                        ) : null
                        )}
                    </SelectGroup>
                </SelectContent>
            </Select>
        )
    };

    const RenderContactSelect_2nd = () => {
        return(
            <Select>
                <SelectTrigger className="text-base w-full px-3 py-6">
                    <SelectValue placeholder="Lĩnh vực kinh doanh" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>Lĩnh vực kinh doanh tại CAK Solution</SelectLabel>

                        {data?.map((item: any) =>
                        item?.children?.length > 0 ? (
                            item.children.map((component: any) => (
                                <SelectItem
                                    className="p-3"
                                    value={component.MenuName}
                                    key={component.index}
                                >
                                    {component.MenuName}
                                </SelectItem>
                            ))
                        ) : null
                        )}
                    </SelectGroup>
                </SelectContent>
            </Select>
        )
    }

    return (
    <>
        <div>
            <RenderContactSelect />
        </div>
        <div className="my-4">
            <RenderContactSelect_2nd/>
        </div>
    </>
    )
}
"use client"

import Link from "next/link";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { noticeId } from "./recoil/notice";
import { useEffect } from "react";
import { graphql } from "@/gql";

const deleteNotice: any = graphql(/* GraphQL */ `
        mutation deleteNotice(
            $id: uuid!
        ) {
            delete_rc_notice_by_pk(
                id: $id
            ){
                title
            }
        }
    `)

const NoticeItem = ({e}:any) => {
    return (
        <div className="flex w-[40rem] justify-between items-center oevrflow-hidden py-3 px-4">
            <div className="w-[30rem]">
                <div className="w-[6rem] rounded-2xl mb-3 text-center border border-[#5048e5]">{e.category}</div>
                <div><span className="text-[#5048e5] font-bold">{e.title}</span></div>
                {/* <input type="text" defaultValue={title} onChange={(e) => handleChangeTitle(e)} className=""/> */}
                <div>{e.contents}</div>
            </div>
            <div>
                <Link href={`/edit/${e.id}`}>
                    <button type="button" className="border bg-sky-300 px-2 rounded-md mr-2">수정</button>
                </Link>
                
                <button type="button" className="border bg-red-300 px-2 rounded-md">삭제</button>
            </div>
            
        </div>
    );
}

export default NoticeItem;
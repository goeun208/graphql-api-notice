"use client"
import Link from "next/link";
import { graphql } from "@/gql";
import { UUID } from "crypto";
import request from 'graphql-request'

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
    const API_URL: any = process.env.NEXT_PUBLIC_API_URL;
    const deleteMutation: any =
       (_id: UUID) => {
        request(
                API_URL,
                deleteNotice,
                { id: _id},
                {
                    'X-Hasura-Admin-Secret': 'aniauto-dev',
                }
            )          
       }

    const deleteFn = (id: UUID) => {
        //데이터 삭제
        deleteMutation(id)
        alert('삭제되었습니다.')
    }

    return (
        <div className="flex w-[40rem] justify-between items-center oevrflow-hidden py-3 px-4">
            <div className="w-[30rem]">
                <div className="w-[6rem] rounded-2xl mb-3 text-center border border-[#5048e5]">{e.category}</div>
                <div><span className="text-[#5048e5] font-bold">{e.title}</span></div>
                <div>{e.contents}</div>
            </div>
            <div>
                <Link href={`/edit/${e.id}`}>
                    <button type="button" className="border bg-sky-300 px-2 rounded-md mr-2">수정</button>
                </Link>
                
                <button type="button" className="border bg-red-300 px-2 rounded-md" onClick={() => deleteFn(e.id)}>삭제</button>
            </div>
            
        </div>
    );
}

export default NoticeItem;
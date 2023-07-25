"use client"
import Link from "next/link";
import { graphql } from "@/gql";
import { UUID } from "crypto";
import request from 'graphql-request'
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Noticeprops } from "../App";

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

const NoticeItem = ({ id, title, category, contents }:Noticeprops) => {
    const API_URL: any = process.env.NEXT_PUBLIC_API_URL;
    const SECRET_KEY: any = process.env.NEXT_PUBLIC_PUBLIC_KEY;
    const deleteMutation: any =
       (_id: UUID) => {
        request(
                API_URL,
                deleteNotice,
                { id: _id},
                {
                    'X-Hasura-Admin-Secret': SECRET_KEY,
                }
            )          
       }

    const deleteFn = (id: UUID) => {
        //데이터 삭제
        deleteMutation(id)
        alert('삭제되었습니다.')
    }

    return (
        <div className="flex justify-center items-center oevrflow-hidden py-3 px-4">
            <div className="w-[50rem] flex items-center">
                <div className="w-[6rem] h-[2rem] rounded-2xl mr-5 text-center border border-[#5048e5] pt-[1px]">{category}</div>
                <div  className="w-[40rem]" >
                    <div><span className="text-[1.125rem] text-[#5048e5] font-bold">{title}</span></div>
                    <div>{contents}</div>
                </div>
                
            </div>
            <div className="flex justify-between items-center w-[4rem]">
                <Link href={`/edit/${id}`}>
                    <ModeEditIcon /> 
                    {/* <button type="button" className="bg-sky-300 px-3 py-1 rounded-md mr-2 ">수정</button> */}
                </Link>
                <DeleteIcon onClick={() => deleteFn(id)} />
                {/* <button type="button" className="bg-red-300 px-3 py-1 rounded-md" onClick={() => deleteFn(e.id)}>삭제</button> */}
            </div>
            
        </div>
    );
}

export default NoticeItem;
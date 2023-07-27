"use client"
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import request from 'graphql-request'
import { graphql } from '../../../gql'
import { UUID } from "crypto";
import { useRouter } from "next/navigation";

const currentNotice: any = graphql(/* GraphQL */ `
    query getCurrentRcNotice(
        $id: uuid!
    ) {
        rc_notice_by_pk(
            id: $id
        ) {
            id
            title
            category
            contents
        }
    }
`)
 

const NoticeEdit = ({ params }: { params: { id: string } }) => {
    const API_URL: any = process.env.NEXT_PUBLIC_API_URL;
    const SECRET_KEY: any = process.env.NEXT_PUBLIC_PUBLIC_KEY;
    const editId = params.id;

    const defaultValue = {
        category: '카테고리',
        title: '제목',
        contents: '내용'
    }
    const [category, setCategory] = useState<string>(defaultValue.category);  
    const [title, setTitle] = useState<string>(defaultValue.title);  
    const [contents, setContents] = useState<string>(defaultValue.contents);

    const router = useRouter();

    const handleChangeCategory = (e:any) => {
        setCategory(e.target.value);
    }
    const handleChangeTitle = (e:any) => {
        setTitle(e.target.value);
    }
    const handleChangeContents = (e:any) => {
        setContents(e.target.value);
        console.log(contents, 'contents');
    }

    const { data }:any = useQuery({
        queryKey: ['currentNotice'],
        queryFn: async () =>
        request(
            API_URL,
            currentNotice,
            { id: editId}, // router props로 불러오기
            {
            'X-Hasura-Admin-Secret': SECRET_KEY,
            }
        )
    })

    const setNoticeState = (data:any) => {
        if(data) {
            setCategory(data.rc_notice_by_pk.category)
            setTitle(data.rc_notice_by_pk.title)
            setContents(data.rc_notice_by_pk.contents)
        }
    }

    useEffect(() => {
        setNoticeState(data)
    }, [data])
    
    const updateNotice: any = graphql(/* GraphQL */ `
        mutation updateNotice(
            $id: uuid!,
            $category: String,
            $title: String,
            $contents: String
        ) {
            update_rc_notice_by_pk(
                pk_columns: {id: $id},
                _set: {title: $title, category: $category, contents: $contents}
            ){
                id
                title,
                contents,
                category
            }
        }
    `)

    const updateMutation: any =
       (_id: UUID, _title: String, _category: String, _contents: String) => {
        request(
                API_URL,
                updateNotice,
                { id: _id, title: _title, category: _category, contents: _contents },
                {
                    'X-Hasura-Admin-Secret': SECRET_KEY,
                }
            )
        alert('변경 되었습니다.')
        router.push('/')
       }
    return (
        <div className="flex w-[70rem] mx-auto items-center oevrflow-hidden py-10 px-4">
            <div className="w-full border-2 p-6 rounded-lg bg-slate-100">
                <div>
                    카테고리 <input type="text" value={category} onChange={(e) => handleChangeCategory(e)} className=" rounded-2xl mb-3 text-center border border-[#5048e5]"/>
                </div>
                <div className="p-4 rounded-lg">
                    <div className="h-[3rem] mb-4" >제목 <input type="text" value={title} onChange={(e) => handleChangeTitle(e)} className="border w-[50rem] h-full rounded-lg pl-2 mb-2"/></div>
                    <div className="flex justify-between items-start w-[52.5rem] ">내용 <textarea value={contents} onChange={(e) => handleChangeContents(e)} className="border w-[50rem] h-[30rem] rounded-lg p-2 mb-2 resize-none"/></div> 
                </div>                
                
                <div className="w-[5rem] float-right text-center text-white bg-[#5048e5] mt-4 p-2 rounded-lg">
                    <button onClick={() => {updateMutation(editId, title, category, contents)}}>완료</button>
                </div>
            </div>
        </div>
    );
}

export default NoticeEdit;
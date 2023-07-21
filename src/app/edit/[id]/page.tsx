"use client"
import { useMutation, useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import request from 'graphql-request'
import { graphql } from '../../../gql'
import { UUID } from "crypto";
import { useRouter } from "next/router";

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
    const editId = params.id;

    const defaultValue = {
        category: '카테고리',
        title: '제목',
        contents: '내용'
    }
    const [category, setCategory] = useState<string>(defaultValue.category);  
    const [title, setTitle] = useState<string>(defaultValue.title);  
    const [contents, setContents] = useState<string>(defaultValue.contents);    

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
            'X-Hasura-Admin-Secret': 'aniauto-dev',
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
    
    const queryEdit: any = graphql(/* GraphQL */ `
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
                queryEdit,
                { id: _id, title: _title, category: _category, contents: _contents },
                {
                    'X-Hasura-Admin-Secret': 'aniauto-dev',
                }
            )          
       }
    return (
        <div className="flex w-[75rem] mx-auto items-center oevrflow-hidden py-3 px-4">
            <div className="w-full border-2 p-4">
                <div>
                    <input type="text" value={category} onChange={(e) => handleChangeCategory(e)} className=" rounded-2xl mb-3 text-center border border-[#5048e5]"/>
                </div>
                <div className="border p-4">
                    <div>제목: <input type="text" value={title} onChange={(e) => handleChangeTitle(e)} className="border mb-2"/></div>
                    <div>내용: <input type="text" value={contents} onChange={(e) => handleChangeContents(e)} className="border"/></div> 
                </div>                
                
                <div className="w-[4rem] text-center text-white bg-[#5048e5] mt-2 p-2 rounded-lg">
                    <button onClick={() => {updateMutation(editId, title, category, contents)}}>완료</button>
                </div>
            </div>
        </div>
    );
}

export default NoticeEdit;
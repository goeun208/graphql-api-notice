"use client"
import React from 'react'
import request from 'graphql-request'
import { QueryClient, useQuery, useMutation } from '@tanstack/react-query'
// import Film from './Film'
import { graphql } from '../gql'
import NoticeItem from './components/noticeItem'
import { UUID } from 'crypto'

export interface Noticeprops {
    id: UUID;
    title: string;
    category: string;
    contents: string;
    created_at: Date;
}

const allNotice = graphql(/* GraphQL */ `
    query getRcNotice(
        $limit: Int
        $offset: Int
    ) {
        rc_notice(
            limit: $limit
            offset: $offset
        ) {
            id
            title
            category
            contents
            created_at
        }
    }
`)
 
function App() {

  const API_URL: any = process.env.NEXT_PUBLIC_API_URL;
  const SECRET_KEY: any = process.env.NEXT_PUBLIC_PUBLIC_KEY;
  const { data } = useQuery({
    queryKey: ['allNotice'],
    queryFn: async () =>
      request(
        API_URL,
        allNotice,
        // variables are type-checked too!
        { limit: 30, offset: 0 },
        {
          'X-Hasura-Admin-Secret': SECRET_KEY,
        }
      ),
  })
 
  return (
    <div>
      <div className='flex justify-center items-center w-full h-[25rem] bg-[#5048e5] mb-10' style={{
        background: 'rgb(97,149,206) linear-gradient(94deg, rgba(97,149,206,1) 0%, rgba(80,72,229,1) 78%)'
      }}>
        <h1 className=' text-[2.75rem] text-center font-bold text-white p-2'>공지사항</h1>
      </div>
      
      {
        data &&
        <ul>
          {data.rc_notice?.map((e: Noticeprops, i:number) => e && 
            <div key={i} className='w-[60rem] mx-auto border border-[#eee] rounded-md mb-4 p-[10px] cursor-pointer'>
              <NoticeItem id={e.id} title={e.title} category={e.category} contents={e.contents} created_at={e.created_at} />
            </div>
          )}
        </ul>
      }
    </div>
  )
}
 
export default App
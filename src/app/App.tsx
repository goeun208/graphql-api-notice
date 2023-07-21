"use client"
import React from 'react'
import request from 'graphql-request'
import { QueryClient, useQuery, useMutation } from '@tanstack/react-query'
// import Film from './Film'
import { graphql } from '../gql'
import NoticeItem from './noticeItem'
 
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
  const { data } = useQuery({
    queryKey: ['allNotice'],
    queryFn: async () =>
      request(
        API_URL,
        allNotice,
        // variables are type-checked too!
        { limit: 30, offset: 0 },
        {
          'X-Hasura-Admin-Secret': 'aniauto-dev',
        }
      ),
  })
 
  return (
    <div className="App">
      <div className='h-[3rem] bg-[#5048e5] mb-2'>
        <h1 className='text-[1.4rem] font-bold text-white p-2'>공지사항</h1>
      </div>
      
      {
        data &&
        <ul>
          {data.rc_notice?.map((e:any, i:number) => e && 
            <div key={i} className='border border-black rounded-md mb-[10px] p-[10px]'>
              <NoticeItem e={e} />
            </div>
          )}
        </ul>
      }
    </div>
  )
}
 
export default App
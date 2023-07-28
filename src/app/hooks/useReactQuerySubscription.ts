import { useEffect } from "react";
import { QueryClient } from "react-query";
import request from 'graphql-request';
import { graphql } from "@/gql";

export const useReactQuerySubscription = () => {
    const queryClient = new QueryClient();
    
    const subscriptionNotice :any = graphql(`
        subscription subRcNotice(
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

    useEffect(() => {
      const WS_URL: any = process.env.NEXT_PUBLIC_WS_URL;
      const SECRET_KEY: any = process.env.NEXT_PUBLIC_PUBLIC_KEY;
      const websocket = new WebSocket(`ws://server-url/v1/graphql`, 'graphql-ws');
      websocket.onopen = () => {
        console.log('connected')
      }
      websocket.onmessage = (event) => {
        const data = JSON.parse(event.data)
        const queryData = queryClient.fetchQuery(["getno"], async () =>
        request(
          WS_URL,
          subscriptionNotice,
          { limit: 30, offset: 0 },
          {
            'X-Hasura-Admin-Secret': SECRET_KEY,
          }
        ),
      )
        // const queryKey = [data].filter(Boolean)
        // queryClient.invalidateQueries({ queryKey }) // 현재 데이터는 최신 데이터임을 보장할 수 없고 변경된 모든 상태를 리패칭하자
        // console.log(data, queryKey, 'data', event, 'event')
      }
      websocket.onerror = () => {
        console.log('error...')
      }

      return () => {
        websocket.close() // 웹 소켓 종료
      }
    }, [])
  }
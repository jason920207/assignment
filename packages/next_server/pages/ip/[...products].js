import Link from 'next/link'
import { useRouter } from 'next/router'

import {
    useQuery,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
} from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { request, gql } from "graphql-request";

import ItemComponent from '../../components/itemComponent'
import RecommendCarousel from '../../components/recommendCarousel/recommendCarousel'
import Head from "next/head"
import Container from '@material-ui/core/Container';

const endpoint = "http://localhost:4000/graphql";

const queryClient = new QueryClient();

export async function getServerSideProps(context) {
    const id = context.query.products[1]
    const username = context.query.username
    let usersRecommendedItems = []
    const itemQuery = gql`
        query GetItem($id: ID!) {
            item(id: $id){
            id,
            name,
            img,
            department,
            category,
            weight,
            packagedWeight,
            price
            }
        }
    `

    const itemVariable = {
        "id": id
    }

    const itemResp = await request(endpoint, itemQuery, itemVariable)
    if (username) {
        const recommendedQuery = gql`
        query GetRecommendedItems($username: String!) {
            usersRecommendedItems(username: $username){
            id,
            name,
            img,
            price
        }
    }
    `
        const recommendedItemVariable = {
            "username": username
        }
        const recommnendedItemResp = await request(endpoint, recommendedQuery, recommendedItemVariable)
        console.log(recommnendedItemResp)
        if (recommnendedItemResp.usersRecommendedItems && recommnendedItemResp.usersRecommendedItems.length > 0) {
            usersRecommendedItems = recommnendedItemResp.usersRecommendedItems
        }

    }




    return { props: { item: itemResp.item, recommnendedItems: usersRecommendedItems } }
}

export default function FirstPost({ item, recommnendedItems }) {
    return (
        <>
            <Container>
                <ItemComponent item={item} />
                {
                    (recommnendedItems && recommnendedItems.length > 0) &&
                    <RecommendCarousel recommnendedItems={recommnendedItems.slice(0, 12)} />
                }
            </Container>

        </>
    )
}
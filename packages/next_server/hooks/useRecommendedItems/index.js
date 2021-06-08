import { request, gql } from "graphql-request";
import { useQuery } from 'react-query'

const endpoint = "http://localhost:4000/graphql";

const fetchRecommendedItems = async (username) => {

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

    const { usersRecommendedItems } = await request(endpoint, recommendedQuery, recommendedItemVariable)
    return usersRecommendedItems;
}

const useRecommendedItems = (username) => {
    return useQuery('usersRecommendedItems', () => fetchRecommendedItems(username))
}

export { fetchRecommendedItems, useRecommendedItems }
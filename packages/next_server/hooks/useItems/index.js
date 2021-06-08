import { request, gql } from "graphql-request";
import { useQuery } from 'react-query'

const endpoint = "http://localhost:4000/graphql";

const fetchItem = async (id) => {

    const item = await request(
        endpoint,
        gql`
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
        `, {
        "id": id
    }
    );

    console.log(item)

    return item;
}

const useItem = id => {
    return useQuery(["item", itemId], () => fetchItem(id))
}

export { useItem, fetchItem }

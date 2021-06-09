import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import {
  useQuery,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { request, gql } from "graphql-request";
import { dehydrate } from "react-query/hydration";
import { ItemComponent, RecommendCarousel, Spinner } from "../../components";
import Container from "@material-ui/core/Container";
import {
  useItem,
  fetchItem,
  fetchRecommendedItems,
  useRecommendedItems,
} from "../../hooks";
import { dynamicProductUri } from "../../utils/dynamicProductUri";

const endpoint = "http://localhost:4000/graphql";

const queryClient = new QueryClient();

export async function getServerSideProps(context) {
  const itemId = context.query.products[1];

  if (itemId.indexOf("$") !== -1) {
    return {
      redirect: {
        destination: "/404",
        permanent: false,
      },
    };
  }

  const username = context.query.username ? context.query.username : "";

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["item", itemId], () => fetchItem(itemId));

  let recommnendedItems = [];

  // const item = await fetchItem(id)

  if (username) {
    recommnendedItems = await fetchRecommendedItems(username);
  }
  return {
    props: {
      id: itemId,
      username,
      recommnendedItems: recommnendedItems,
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export default function FirstPost({ id, username, recommnendedItems }) {
  const router = useRouter();
  const [itemId, seItemId] = useState(id);

  const itemData = useQuery(["item", itemId], () => fetchItem(itemId));
  const recommendedItemData = useQuery(
    "usersRecommendedItems",
    () => fetchRecommendedItems(username),
    { initialData: recommnendedItems }
  );

  const handleItem = (e, name, id) => {
    e.preventDefault();
    router.push(dynamicProductUri(name, id, username), undefined, {
      shallow: true,
    });
    seItemId(id);
  };

  return (
    <>
      <Container>
        {itemData.status === "loading" ? (
          <Spinner />
        ) : itemData.status === "error" ? (
          <span>Error: {recommendedItem.error.message}</span>
        ) : (
          <ItemComponent item={itemData.data.item} />
        )}
        {recommendedItemData.status === "loading" ? (
          <Spinner />
        ) : recommendedItemData.status === "error" ? (
          <span>Error: {recommendedItemData.error.message}</span>
        ) : (
          <RecommendCarousel
            recommnendedItems={recommendedItemData.data.slice(0, 12)}
            username={router.query.username}
            handleItem={handleItem}
          />
        )}
      </Container>
    </>
  );
}

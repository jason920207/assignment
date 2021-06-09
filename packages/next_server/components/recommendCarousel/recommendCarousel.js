import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { RecommendCard } from "../index";
import { useState, useEffect, useRef } from "react";
import styles from "./recommendCarousel.module.css";
import Link from "next/link";
import { dynamicProductUri } from "../../utils/dynamicProductUri";

export function RecommendCarousel({ recommnendedItems, username, handleItem }) {
  const [items, setItems] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setItems(recommnendedItems.slice(0, 6));
  }, []);

  const onPressPrev = () => {
    setItems(recommnendedItems.slice(0, 6));
    setIndex(0);
  };

  const onPressNext = () => {
    setItems(recommnendedItems.slice(6, 12));
    setIndex(1);
  };

  if (recommnendedItems.length <= 0) {
    return <></>;
  }

  return (
    <>
      <h2>Products You May Also Like</h2>
      <Grid container spacing={3} className={styles.container}>
        {index === 1 && recommnendedItems.length >= 6 && (
          <button onClick={onPressPrev} className={styles.prev}>
            {"<"}
          </button>
        )}
        {items.map((item, index) => (
          <Grid key={`${item.name}-${index}`} item xs={2}>
            <a
              href={dynamicProductUri(item.name, item.id, username)}
              onClick={(e) => handleItem(e, item.name, item.id)}
            >
              <RecommendCard item={item} />
            </a>
          </Grid>
        ))}
        {index === 0 && recommnendedItems.length >= 6 && (
          <button onClick={onPressNext} className={styles.next}>
            {">"}
          </button>
        )}
      </Grid>
      {recommnendedItems.length >= 6 && (
        <Grid container justify="center" alignItems="center">
          <div className={styles.dotContainer}>
            <span
              className={`${styles.dot} ${index === 0 ? styles.active : ""}`}
              onClick={onPressPrev}
            ></span>
            <span
              className={`${styles.dot} ${index === 1 ? styles.active : ""}`}
              onClick={onPressNext}
            ></span>
          </div>
        </Grid>
      )}
    </>
  );
}

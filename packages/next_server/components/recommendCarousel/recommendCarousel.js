import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import RecommendCard from '../recommendCard'
import { useState, useEffect, useRef } from 'react'
import styles from './recommendCarousel.module.css'
import Link from 'next/link'
import { dynamicProductUri } from '../../utils/dynamicProductUri'

export default function RecommendCarousel({ recommnendedItems, username }) {

  const [items, setItems] = useState([])
  const [index, setIndex] = useState(0)

  useEffect(() => {
    setItems(recommnendedItems.slice(0, 6))
  }, [])

  const onPressPrev = () => {
    setItems(recommnendedItems.slice(0, 6))
    setIndex(0)
  }

  const onPressNext = () => {
    setItems(recommnendedItems.slice(6, 12))
    setIndex(1)
  }


  return (
    <>
      <h2>Products You May Also Like</h2>
      <Grid container spacing={3} className={styles.container} >
        {(index === 1 && recommnendedItems.length >= 6) && <button onClick={onPressPrev} className={styles.prev}>{'<'}</button>}
        {
          items.map((item, index) => (
            <Grid key={`${item.name}-${index}`} item xs={2}>
              <Link href={dynamicProductUri(item.name, item.id, username)}>
                <a>
                  <RecommendCard item={item} />
                </a>
              </Link>
            </Grid>

          ))
        }
        {(index === 0 && recommnendedItems.length >= 6) && <button onClick={onPressNext} className={styles.next}>{'>'}</button>}
      </Grid>
      {
        recommnendedItems.length >= 6 &&
        <Grid container justify="center"
          alignItems="center" >
          <div className={styles.dotContainer}>
            <span className={`${styles.dot} ${index === 0 ? styles.active : ""}`} onClick={onPressPrev}></span>
            <span className={`${styles.dot} ${index === 1 ? styles.active : ""}`} onClick={onPressNext}></span>
          </div>
        </Grid >
      }

    </>
  )
}

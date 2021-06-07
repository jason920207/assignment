import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import RecommendCard from '../recommendCard'
import { useState, useEffect, useRef } from 'react'
import styles from './recommendCarousel.module.css'


export default function RecommendCarousel({ recommnendedItems }) {

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
        {index === 1 && <button onClick={onPressPrev} className={styles.prev}>{'<'}</button>}
        {
          items.map((item, index) => (
            <Grid item xs={2}>
              <RecommendCard key={`${item.name}-${index}`} item={item} />
            </Grid>
          ))
        }
        {index === 0 && <button onClick={onPressNext} className={styles.next}>{'>'}</button>}

      </Grid>
      <Grid container justify="center"
        alignItems="center" >
        <div className={styles.dotContainer}>
          <span className={`${styles.dot} ${index === 0 ? styles.active : ""}`} onClick={onPressPrev}></span>
          <span className={`${styles.dot} ${index === 1 ? styles.active : ""}`} onClick={onPressNext}></span>
        </div>
      </Grid >
    </>
  )
}

import Typography from "@material-ui/core/Typography";
import { weightFormat } from "../../utils/weightConversion";
import Grid from "@material-ui/core/Grid";
import styles from "./itemComponent.module.css";
import { isGrocery } from "../../utils/isGrocery";

export function ItemComponent({ item }) {
  return (
    <Grid container spacing={3}>
      <h2>{item.name}</h2>
      <Grid container xs={12} justify="center" alignItems="center">
        <img src={`/images/${item.img}`} className={styles.image} />
      </Grid>
      <Grid item xs={12}>
        <h2>Products You May Also Like</h2>
        <div>
          <h3>Specifications</h3>
        </div>
        <div>
          <h4>{isGrocery(item.department) ? "Weight" : "Shipping Weight"}</h4>
          <span>{`${weightFormat(item.weight, item.packagedWeight)}`}</span>
        </div>
        <div>
          <h4>Department</h4>
          <span>{item.department}</span>
        </div>
        <div>
          <h4>Category</h4>
          <span>{item.category}</span>
        </div>
      </Grid>
    </Grid>
  );
}

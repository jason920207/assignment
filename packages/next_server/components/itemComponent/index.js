
import Typography from '@material-ui/core/Typography';

export default function ItemComponent({ item }) {
  return (
    <div>
      <section>
        <h2>{item.name}</h2>
        <img src={`/images/${item.img}`} />
      </section>
      <section>
        <h3>About this item</h3>
        <div>
          <span>Specifications</span>
        </div>
        <div>
          <span>Weight</span>
          <span>{`${item.weight} g`}</span>
        </div>
        <div>
          <span>Department</span>
          <span>{item.department}</span>
        </div>
        <div>
          <span>Category</span>
          <span>{item.category}</span>
        </div>
      </section>
    </div>
  )
}
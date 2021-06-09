import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Image from "next/image";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
    width: 200,
  },
});

export function RecommendCard({ item }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <Image src={`/images/${item.img}`} width={500} height={400} />
        <CardContent>
          <Typography gutterBottom variant="body2" component="p">
            {item.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            ${item.price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

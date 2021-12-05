import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";


const useStyles = makeStyles((theme) => ({
  media:{
      height:250,
      [theme.breakpoints.up('sm')]:{
        height:150
      },
  },
  card:{
      marginBottom: theme.spacing(5),
  }
}));

const Post = () => {
  const classes = useStyles()
  return (
    
    <Card className={classes.card}>
        <CardActionArea>
            <CardMedia
                component="img"
                className={classes.media}
                image="https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                title="Mountain Covered Snow Under Star"
            />
            <CardContent>
                <Typography gutterBottom  variant="h5">My Post</Typography>
                <Typography variant="body2">
                Mountain Covered Snow Under Star, Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
                Mountain Covered Snow Under Star, Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
                </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions>
            <Button size="small" color="primary">Share</Button>
            <Button size="small" color="primary">learn more</Button>
        </CardActions>
    </Card>
    
  );
};

export default Post;
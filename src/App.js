import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Leftbar from "./component/Leftbar";
import Navbar from "./component/Navbar";
import Feed from "./component/Feed";
import Rightbar from "./component/Rightbar";
import AddPost from "./component/AddPost";


const useStyles = makeStyles((theme) => ({
  right:{
    [theme.breakpoints.down("sm")]:{
      display: "none"
    }
  }
}));

const App = () => {
  const classes = useStyles()
  return (
    <div>
      <Navbar/>
      <Grid container>
        <Grid item sm={2} xs={2}>
          <Leftbar/>
        </Grid>
        <Grid item sm={7} xs={10}>
          <Feed/>
        </Grid>
        <Grid item sm={3} className={classes.right}>
          <Rightbar />
        </Grid>
      </Grid>
      <AddPost/>
    </div>
  );
};

export default App;
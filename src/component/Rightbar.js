import { Container } from "@mui/material";
import { makeStyles } from "@mui/styles";


const useStyles = makeStyles((theme) => ({
  container:{
    paddingTop:theme.spacing(2)
  }
}));

const Rightbar = () => {
  const classes = useStyles()
  return (
    <Container className={classes.container}>right</Container>
  );
};

export default Rightbar;
import { AppBar, 
    InputBase, 
    Toolbar, 
    Typography, 
    Badge, 
    Avatar} from "@mui/material";

import SearchIcon from '@mui/icons-material/Search';
import MailIcon from '@mui/icons-material/Mail';

import { makeStyles } from "@mui/styles";
import { alpha } from '@mui/material/styles';
import { Cancel, Notifications } from "@mui/icons-material";
import { useState } from "react";


const useStyles = makeStyles((theme) => ({
  Toolbar: {
      display: 'flex',
      justifyContent: 'space-between',
  },
  logoLarge:{
      display: 'none',
      [theme.breakpoints.up('sm')]:{
        display: 'block',
      }
  },
  logoSmall:{
    display: 'block',
    [theme.breakpoints.up('sm')]:{
      display: 'none',
    }
  },
  search:{
    display: 'flex',
    alignItems: 'center',
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover':{
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    borderRadius: theme.shape.borderRadius,
    width:"50%",
    [theme.breakpoints.down('sm')]:{
        display: (props) => (props.open ? "flex" : "none"),
        width:"70%",
    }
  },
  input:{
      color:"white",
      marginLeft:theme.spacing(1),
  },
  searchBtn:{
    marginRight:theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
        display: "none"
    }
  },
  icons:{
      alignItems: "center",
      display: (props) => (props.open ? "none" : "flex")
  },
  cancel:{
    [theme.breakpoints.up("sm")]: {
        display: "none"
    }
  },
  badge:{
      marginRight:theme.spacing(2)
  }
}));

const Navbar = () => {
  const [open,setOpen] = useState(false);
  const classes = useStyles({ open });

  return (
    <AppBar position="fixed">
        <Toolbar className={classes.Toolbar}>
            <Typography variant="h6" className={classes.logoLarge}>
                Tony Logo
            </Typography>
            <Typography variant="h6" className={classes.logoSmall}>
                Logo
            </Typography>
            <div className={classes.search}>
                <SearchIcon/>
                <InputBase placeholder="Search" className={classes.input}/>
                <div className={classes.cancel}>
                    <Cancel onClick={() => setOpen(false)}/>
                </div>
            </div>
            <div className={classes.icons}>
                <div className={classes.searchBtn}>
                    <SearchIcon onClick={() => setOpen(true)} />
                </div>
                <Badge badgeContent={4} color="secondary" className={classes.badge}>
                    <MailIcon />
                </Badge>
                <Badge badgeContent={2} color="secondary" className={classes.badge}>
                    <Notifications />
                </Badge>
                <Avatar alt="Remy Sharp" src="/images/1.jpg" />
            </div>
        </Toolbar>
    </AppBar>
  );
};

export default Navbar;
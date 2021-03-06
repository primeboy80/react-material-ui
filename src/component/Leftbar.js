import { Apps, Camera, Collections, Home, List, LoginOutlined, Person, SettingsOutlined, Storefront, VideoLibrary } from "@mui/icons-material";
import { Container, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";


const useStyles = makeStyles((theme) => ({
    container:{
        height:"100vh",
        color:"white",
        paddingTop: theme.spacing(10),
        backgroundColor: theme.palette.primary.main,
        position:"sticky", //화면에서 사라지지 않게 하는 속성
        top:0,
        [theme.breakpoints.up('sm')]:{
            backgroundColor: "white",
            color:"#555",
            border:"1px solid #ece7e7"
        },
    },
    item:{
        display: 'flex',
        alignItems: 'center',
        marginBottom: theme.spacing(4),
        [theme.breakpoints.up('sm')]:{
            marginBottom: theme.spacing(3),
            cursor: 'pointer'
        }
    },
    icon:{
        marginRight:theme.spacing(1),
        [theme.breakpoints.up('sm')]:{
            fontSize:"20px !important"
        }
    },
    text:{
        fontWeight:"500 !important",
        [theme.breakpoints.down('sm')]:{
            display: 'none',
        }
    }
}));

function Leftbar() {
    const classes = useStyles();
    return (
        <Container className={classes.container} >
            <div className={classes.item}>
                <Home className={classes.icon}/>
                <Typography className={classes.text} >HomePage</Typography>
            </div>
            <div className={classes.item}>
                <Person className={classes.icon}/>
                <Typography className={classes.text} >Freinds</Typography>
            </div>
            <div className={classes.item}>
                <List className={classes.icon}/>
                <Typography className={classes.text} >Lists</Typography>
            </div>
            <div className={classes.item}>
                <Camera className={classes.icon}/>
                <Typography className={classes.text} >Camera</Typography>
            </div>
            <div className={classes.item}>
                <VideoLibrary className={classes.icon}/>
                <Typography className={classes.text} >Videos</Typography>
            </div>
            <div className={classes.item}>
                <Apps className={classes.icon}/>
                <Typography className={classes.text} >Apps</Typography>
            </div>
            <div className={classes.item}>
                <Collections className={classes.icon}/>
                <Typography className={classes.text} >Collections</Typography>
            </div>
            <div className={classes.item}>
                <Storefront className={classes.icon}/>
                <Typography className={classes.text} >Market Place</Typography>
            </div>
            <div className={classes.item}>
                <SettingsOutlined className={classes.icon}/>
                <Typography className={classes.text} >Setting</Typography>
            </div>
            <div className={classes.item}>
                <SettingsOutlined className={classes.icon}/>
                <Typography className={classes.text} >Setting</Typography>
            </div>
            <div className={classes.item}>
                <LoginOutlined className={classes.icon}/>
                <Typography className={classes.text} >Logout</Typography>
            </div>
        </Container>
    );
}

export default Leftbar;
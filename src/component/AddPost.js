import { Add as AddIcon } from "@mui/icons-material";
import { Fab, Tooltip } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
    fab:{
        position:"fixed !important",
        bottom:20,
        right:20
    }
}));

const AddPost = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false)
  return (
    <Tooltip title="Add" aria-label="Add" onClick={() => setOpen(true)}>
      <Fab color="primary" className={classes.fab}>
        <AddIcon/>
      </Fab>
    </Tooltip>
  );
};

export default AddPost;
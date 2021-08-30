import React, { useState } from "react";
import {
  makeStyles,
  Typography,
  Collapse,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLess from "@material-ui/icons/ExpandLess";
import Spider from "../img/1.jpg";

const useStyles = makeStyles((theme) => ({
  cardWrapper: {
    border: "1px solid #F5F5F5",
    background: "#b4b5b8",
    borderRadius: 8,
    minHeight: 100,
    boxShadow:
      "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
    transition: "transform .6s",
    "&:hover": {
      transform: "scale(1.02)",
      zIndex: -1,
    },
  },
  img: {
    height: "125px",
    width: "100%",
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
    marginBottom: 10,
  },
  detail: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    cursor: "pointer",
  },
}));

function Card(props) {
  const classes = useStyles();
  const { data } = props;
  const [detail, setDetail] = useState(false);

  const handleDetail = () => {
    setDetail(!detail);
  };
  return (
    <div className={classes.cardWrapper}>
      <img src={data.thumb} className={classes.img} alt="img" />
      <Typography align="center" variant="subtitle2">
        {data.title}
      </Typography>
      <Collapse in={detail} timeout="auto" unmountOnExit>
        <ListItem>
          <Typography variant="caption">{data.desc}</Typography>
        </ListItem>
        <ListItem>
          <ListItemText primary="Author" />
          <ListItemText primary={data.author} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Tag" />
          <ListItemText primary={data.tag} />
        </ListItem>
      </Collapse>

      {detail ? (
        <ExpandLess onClick={handleDetail} className={classes.detail} />
      ) : (
        <ExpandMoreIcon onClick={handleDetail} className={classes.detail} />
      )}
    </div>
  );
}

export default Card;

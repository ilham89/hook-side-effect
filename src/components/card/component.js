import React, { useState } from "react";
import {
  Typography,
  Collapse,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLess from "@material-ui/icons/ExpandLess";

function Card(props) {
  const { data, classes } = props;
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

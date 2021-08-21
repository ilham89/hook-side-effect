import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import { Container, InputBase, makeStyles } from "@material-ui/core";
import CardMovie from "./components/cardMovie";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundImage: "linear-gradient(#141e30, #243b55)",
    minHeight: "100vh",
    borderRight: "1px solid #f1f1f1",
    borderLeft: "1px solid #f1f1f1",
    maxWidth: 444,
    width: "100%",
    height: "100%",
    paddingTop: 80,
    paddingBottom: 16,
    padding: 0
  },
  searchWrapper: {
    position: "fixed",
    top: 0,
    maxWidth: 444,
    zIndex: 999,
    width: "95%",
    boxShadow: "0 4px 2px -2px gray",
    backgroundColor: "currentColor"
  },
  searchDiv: {
    height: 25,
    borderRadius: 8,
    padding: "8px 16px ",
    backgroundColor: "#F1F2F6",
    display: "flex",
    alignItems: "center",
    margin: "16px 0px"
  },
  searchIcon: {
    color: "#707585",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    marginLeft: 32,
    color: "inherit",
    width: "100%",
    height: "100%"
  },
  inputInput: {
    width: "100%",
    fontSize: "14px !important",
    fontWeight: 500,
    color: "#808080"
  }
}));

export default function App() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Container maxWidth="xs" className={classes.container}>
        <div>
          <div className={classes.searchWrapper}>
            <div style={{ padding: "0px 16px" }}>
              <div className={classes.searchDiv}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  placeholder="Cari disini ..."
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput
                  }}
                  InputProps={{
                    "aria-label": "search"
                  }}
                />
              </div>
            </div>
          </div>
          <div>
            <div style={{ marginBottom: 16, padding: "0px 16px" }}>
              <CardMovie />
            </div>
          </div>
        </div>
      </Container>
    </React.Fragment>
  );
}

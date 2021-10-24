const styles = (theme) => ({
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
});

export default styles;

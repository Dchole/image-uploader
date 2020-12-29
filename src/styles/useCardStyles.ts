import { createStyles, makeStyles } from "@material-ui/core/styles";

const useCardStyles = makeStyles(theme =>
  createStyles({
    paper: {
      padding: theme.spacing(5, 4),
      "& h1": {
        marginBottom: 15
      },
      "& p": {
        marginBottom: 30
      },
      "& #upload-image": {
        display: "none"
      },

      [theme.breakpoints.down("xs")]: {
        height: "100vh",
        width: "100%",
        display: "grid",
        placeItems: "center"
      }
    }
  })
);

export default useCardStyles;

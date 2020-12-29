import { createStyles, makeStyles } from "@material-ui/core/styles";

const useAppStyles = makeStyles(() =>
  createStyles({
    container: {
      height: "100vh",
      display: "grid",
      placeItems: "center"
    }
  })
);

export default useAppStyles;

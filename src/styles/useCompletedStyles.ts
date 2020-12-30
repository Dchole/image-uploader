import { createStyles, makeStyles } from "@material-ui/core/styles";

const useCompletedStyles = makeStyles(theme =>
  createStyles({
    icon: {
      color: theme.palette.success.main
    },
    preview: {
      width: "100%",
      borderRadius: theme.shape.borderRadius
    },
    grid: {
      padding: theme.spacing(0.5, 0.5, 0.5, 1),
      marginTop: theme.spacing(2.5),
      display: "grid",
      gap: 16,
      alignItems: "center",
      gridTemplateColumns: "1fr auto",
      border: "2px solid #e0e0e0",
      backgroundColor: theme.palette.background.default,
      borderRadius: theme.shape.borderRadius
    }
  })
);

export default useCompletedStyles;

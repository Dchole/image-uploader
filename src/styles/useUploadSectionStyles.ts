import { createStyles, makeStyles } from "@material-ui/core/styles";

const useUploadSectionStyles = makeStyles(theme =>
  createStyles({
    root: {
      position: "relative",
      backgroundColor: theme.palette.background.default,
      border: `1px dashed ${theme.palette.primary.main}`,
      borderRadius: theme.shape.borderRadius,
      padding: theme.spacing(4.5, 10),
      marginBottom: 15,

      [theme.breakpoints.down("xs")]: {
        padding: theme.spacing(4.5, 1.5, 0)
      },

      "& img": {
        width: "75%",
        marginBottom: 37
      },

      "& #drag-and-drop": {
        width: "100%",
        height: 0,

        "&:before": {
          content: "''",
          position: "absolute",
          top: 0,
          left: 0,
          height: "100%",
          width: "100%"
        }
      }
    }
  })
);

export default useUploadSectionStyles;

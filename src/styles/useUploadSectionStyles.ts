import { createStyles, makeStyles } from "@material-ui/core/styles";

const useUploadSectionStyles = makeStyles(theme =>
  createStyles({
    root: {
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
      }
    }
  })
);

export default useUploadSectionStyles;

import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#2F80ED"
    },
    background: {
      default: "#F6F8FB"
    }
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
    allVariants: {
      textAlign: "center",
      fontWeight: 500
    },
    button: {
      fontFamily: "'Noto Sans', sans-serif",
      textTransform: "initial"
    }
  }
});

export default theme;

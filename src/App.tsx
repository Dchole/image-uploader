import { useTheme, ThemeProvider } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Card from "./components/Card";
import theme from "./lib/theme";
import useAppStyles from "./styles/useAppStyles";

const App = () => {
  const { breakpoints } = useTheme();
  const mobile = useMediaQuery(breakpoints.down("xs"));
  const classes = useAppStyles();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container
        component="main"
        maxWidth="sm"
        className={classes.container}
        disableGutters={mobile}
      >
        <Card />
      </Container>
    </ThemeProvider>
  );
};

export default App;

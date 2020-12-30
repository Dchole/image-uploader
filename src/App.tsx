import { useTheme, ThemeProvider } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import CardContent from "./components/CardContent";
import theme from "./lib/theme";
import useAppStyles from "./styles/useAppStyles";
import firebaseConfig from "./lib/firebaseConfig";

import firebase from "firebase/app";
import "firebase/storage";

firebase.initializeApp(firebaseConfig);

export const storageRef = firebase.storage().ref();

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
        <Paper component="section" className={classes.paper}>
          <CardContent />
        </Paper>
      </Container>
    </ThemeProvider>
  );
};

export default App;

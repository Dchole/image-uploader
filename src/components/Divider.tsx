import Box from "@material-ui/core/Box";
import MuiDivider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";

const Divider = () => {
  return (
    <Box
      mt={3}
      width="100%"
      display="grid"
      alignItems="center"
      justifyContent="center"
      gridTemplateColumns="1fr 2.5rem 1fr"
    >
      <MuiDivider light />
      <Typography component="span" variant="body2" color="textSecondary">
        OR
      </Typography>
      <MuiDivider light />
    </Box>
  );
};

export default Divider;

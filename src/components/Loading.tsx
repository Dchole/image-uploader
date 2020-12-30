import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Typography from "@material-ui/core/Typography";
import LinearProgress from "@material-ui/core/LinearProgress";

interface ILoadingCardProps {
  progress: number;
}

const LoadingCard: React.FC<ILoadingCardProps> = ({ progress }) => {
  const { breakpoints } = useTheme();
  const mobile = useMediaQuery(breakpoints.down("xs"));

  return (
    <>
      <Typography component="h1" variant="h5">
        Uploading...
      </Typography>
      <LinearProgress
        variant="determinate"
        value={progress}
        style={{ width: 280 }}
      />
    </>
  );
};

export default LoadingCard;

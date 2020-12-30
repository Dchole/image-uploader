import Typography from "@material-ui/core/Typography";
import LinearProgress from "@material-ui/core/LinearProgress";

interface ILoadingCardProps {
  progress: number;
}

const LoadingCard: React.FC<ILoadingCardProps> = ({ progress }) => {
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

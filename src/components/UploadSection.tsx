import Typography from "@material-ui/core/Typography";
import placeholder from "../assets/image.svg";
import useUploadSectionStyles from "../styles/useUploadSectionStyles";

interface IUploadSectionProps {
  preview: string | ArrayBuffer | null;
}

const UploadSection: React.FC<IUploadSectionProps> = ({ preview }) => {
  const classes = useUploadSectionStyles();

  return (
    <section className={classes.root}>
      <img src={String(preview || placeholder)} alt="Placeholder" />
      <Typography color="textSecondary">Drag & Drop your image here</Typography>
    </section>
  );
};

export default UploadSection;

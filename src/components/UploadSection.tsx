import Typography from "@material-ui/core/Typography";
import placeholder from "../assets/image.svg";
import useUploadSectionStyles from "../styles/useUploadSectionStyles";

interface IUploadSectionProps {
  setFile: React.Dispatch<React.SetStateAction<File | null>>;
}

const UploadSection: React.FC<IUploadSectionProps> = ({ setFile }) => {
  const classes = useUploadSectionStyles();

  const handleDrop = (event: React.DragEvent<HTMLElement>) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "copy";
    const file = event.dataTransfer.files[0];
    setFile(file);
  };

  return (
    <section
      onDrop={handleDrop}
      onDragOver={e => e.preventDefault()}
      aria-labelledby="description"
      className={classes.root}
    >
      <img src={placeholder} alt="Placeholder" />
      <Typography id="description" color="textSecondary">
        Drag & Drop your image here
      </Typography>
    </section>
  );
};

export default UploadSection;

import { useRef } from "react";
import Typography from "@material-ui/core/Typography";
import Divider from "./Divider";
import Button from "@material-ui/core/Button";
import UploadSection from "./UploadSection";

interface IUploadCardContent {
  setFile: React.Dispatch<React.SetStateAction<File | null>>;
  handleUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const UploadCard: React.FC<IUploadCardContent> = ({
  setFile,
  handleUpload
}) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  return (
    <>
      <Typography component="h1" variant="h5">
        Upload your image
      </Typography>
      <Typography color="textSecondary">
        File should be Jpeg, Png,...
      </Typography>
      <UploadSection setFile={setFile} />
      <Divider />
      <input
        accept="image/*"
        type="file"
        id="upload-image"
        name="upload-image"
        ref={inputRef}
        onChange={handleUpload}
      />
      <Button
        color="primary"
        variant="contained"
        style={{ marginTop: 21 }}
        onClick={() => inputRef?.current?.click()}
      >
        Choose a file
      </Button>
    </>
  );
};

export default UploadCard;

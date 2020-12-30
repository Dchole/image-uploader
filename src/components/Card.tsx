import { useEffect, useRef, useState } from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import UploadSection from "./UploadSection";
import useCardStyles from "../styles/useCardStyles";
import Divider from "./Divider";
import validFileType from "../lib/validFileTypes";

const Card = () => {
  const classes = useCardStyles();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [upload, setUpload] = useState<string | ArrayBuffer | null>(null);

  const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files![0];
    validFileType(file) && setFile(file);
  };

  const saveImage = () => {
    if (file) {
      try {
        const reader = new FileReader();
        reader.readAsDataURL(file as File);
        reader.onloadend = () => {
          setUpload(reader.result);
        };
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(saveImage, [file]);

  return (
    <Paper component="section" className={classes.paper}>
      <Typography component="h1" variant="h5">
        Upload your image
      </Typography>
      <Typography color="textSecondary">
        File should be Jpeg, Png,...
      </Typography>
      <UploadSection setFile={setFile} />
      <Divider />
      <input
        accept="image/png, image/jpeg"
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
    </Paper>
  );
};

export default Card;

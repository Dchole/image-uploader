import { useRef, useState } from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import UploadSection from "./UploadSection";
import useCardStyles from "../styles/useCardStyles";
import Divider from "./Divider";

const Card = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const classes = useCardStyles();
  const [upload, setUpload] = useState<string | ArrayBuffer | null>(null);

  const handleKeyInput = (event: React.KeyboardEvent<HTMLSpanElement>) => {
    if (event.key === " " || event.key === "Enter") {
      inputRef?.current?.click();
    }
  };

  const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    try {
      const file = event.target.files![0];
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onloadend = () => {
        setUpload(reader.result);
      };
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Paper component="section" className={classes.paper}>
      <Typography component="h1" variant="h5">
        Upload your image
      </Typography>
      <Typography color="textSecondary">
        File should be Jpeg, Png,...
      </Typography>
      <UploadSection preview={upload} />
      <Divider />
      <input
        accept="image/png, image/jpeg"
        type="file"
        id="upload-image"
        name="upload-image"
        ref={inputRef}
        onChange={handleUpload}
      />
      <label htmlFor="upload-image">
        <Button
          component="span"
          color="primary"
          variant="contained"
          style={{ marginTop: 21 }}
          onKeyDown={handleKeyInput}
        >
          Choose a file
        </Button>
      </label>
    </Paper>
  );
};

export default Card;

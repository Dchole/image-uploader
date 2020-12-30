import { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import useCompletedStyles from "../styles/useCompletedStyles";
import Toast from "./Toast";

interface ICompletedCardProps {
  preview: string;
}

const CompletedCard: React.FC<ICompletedCardProps> = ({ preview }) => {
  const classes = useCompletedStyles();
  const [copied, setCopied] = useState(false);

  const copyLink = () => {
    navigator.clipboard.writeText(preview);
    setCopied(true);
  };

  const handleClose = () => setCopied(false);

  return (
    <>
      <div>
        <CheckCircleIcon fontSize="large" className={classes.icon} />
        <Typography component="h1" variant="h5">
          Uploaded Successfully!
        </Typography>
      </div>
      <img src={preview} alt="preview" className={classes.preview} />
      <div className={classes.grid}>
        <Typography
          component={Link}
          href={preview}
          target="_blank"
          rel="noopener noreferrer"
          noWrap
        >
          {preview}
        </Typography>
        <Button
          color="primary"
          variant="contained"
          startIcon={<FileCopyIcon />}
          onClick={copyLink}
        >
          Copy Link
        </Button>
      </div>
      <Toast open={copied} message="Link Copied!" handleClose={handleClose} />
    </>
  );
};

export default CompletedCard;

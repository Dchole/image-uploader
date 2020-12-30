import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";

interface IToastProps {
  open: boolean;
  severity?: "success" | "error";
  message: string;
  handleClose: () => void;
}

const Toast: React.FC<IToastProps> = ({
  open,
  message,
  severity = "success",
  handleClose
}) => {
  return (
    <>
      <Snackbar
        open={open}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        autoHideDuration={2000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity={severity}>
          {message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default Toast;

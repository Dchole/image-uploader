import { useEffect, useState } from "react";
import { storageRef } from "../App";
import Upload from "./Upload";
import Loading from "./Loading";
import Completed from "./Completed";
import Toast from "./Toast";

const Card = () => {
  const [file, setFile] = useState<File | null>(null);
  const [progress, setProgress] = useState(0);
  const [uploading, setUploading] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [error, setError] = useState("");
  const [preview, setPreview] = useState("");

  const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files![0];

    file.type.includes("image/")
      ? setFile(file)
      : setError("Invalid file type");
  };

  const clearError = () => setError("");

  useEffect(() => {
    if (file) {
      try {
        const uploadTask = storageRef.child(`images/${file.name}`).put(file);
        uploadTask.on("state_changed", ({ bytesTransferred, totalBytes }) => {
          setProgress((bytesTransferred / totalBytes) * 100);
          setUploading(true);
        });
        uploadTask.then(snapshot => {
          setUploading(false);
          setCompleted(true);
          snapshot.ref
            .getDownloadURL()
            .then(downloadURL => setPreview(downloadURL));
        });
      } catch (error) {
        console.log(error);
      }
    }
  }, [file]);

  return (
    <>
      {uploading ? (
        <Loading progress={progress} />
      ) : completed ? (
        <Completed preview={preview} />
      ) : (
        <Upload setFile={setFile} handleUpload={handleUpload} />
      )}
      <Toast
        open={Boolean(error)}
        severity="error"
        message={error}
        handleClose={clearError}
      />
    </>
  );
};

export default Card;

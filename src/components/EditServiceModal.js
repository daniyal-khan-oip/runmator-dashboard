import React, { useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import MDTypography from "./MDTypography";
import { toast } from "react-toastify";

import { useState } from "react";

export default function EditServiceModal({
  isModalVisible,
  setIsModalVisible,
  onSubmit,
  selectedItem,
  isLoading,
  title,
}) {
  const [imageFile, setImageFile] = useState(null);
  const [imageResult, setImageResult] = useState("");
  const [newText, setNewText] = useState(selectedItem?.services_name);
  const [newPrice, setNewPrice] = useState(selectedItem?.services_price);

  const handleClickOpen = () => {
    setIsModalVisible(true);
  };

  const handleClose = () => {
    setImageFile(null);
    setNewText("");
    setIsModalVisible(false);
  };

  const onImageChange = (event) => {
    let fileSize = event.target.files[0]?.size;

    let fileExtension = event.target.files[0].name.replace(/^.*\./, "");

    if (fileExtension !== "png" && fileExtension !== "jpg") {
      toast.info("Not an image file.");
    } else if (fileSize > 2097152) {
      toast.info("Image size should be less than 2MBs.");
    } else {
      if (event.target.files[0]) {
        let img = event.target.files[0];
        setImageFile(img);
        let reader = new FileReader();
        reader.onload = (e) => {
          setImageResult(e.target.result);
        };
        reader.readAsDataURL(event.target.files[0]);
      }
    }
  };

  return (
    <Dialog color="primary" open={isModalVisible} onClose={handleClose}>
      <MDTypography
        fontWeight="regular"
        color="info"
        // fontWeight="medium"
        textGradient
      >
        {title}
      </MDTypography>

      <DialogContent>
        <TextField
          margin="dense"
          id="sname"
          value={newText}
          label={"Service Name"}
          onChange={(e) => setNewText(e.target.value)}
          fullWidth
          variant="standard"
        />
      </DialogContent>
      <DialogContent>
        <TextField
          margin="dense"
          id="sname"
          value={newPrice}
          label={"Service Price"}
          onChange={(e) => setNewPrice(e.target.value)}
          fullWidth
          variant="standard"
        />
      </DialogContent>
      <div className="upload-section-modal">
        <TextField
          id="sname"
          value={
            imageFile?.name ||
            selectedItem?.services_icon ||
            "Browse icon image file to upload."
          }
          label={"Service Icon"}
          disabled={true}
          variant="standard"
        />
        <div className="edit-modal-upload-button ">
          <Button variant="contained" component="label">
            Upload File
            <input type="file" hidden onChange={(e) => onImageChange(e)} />
          </Button>
        </div>
      </div>
      <DialogActions>
        {isLoading ? (
          <MDTypography
            variant="button"
            fontWeight="regular"
            display="block"
            color="info"
            // fontWeight="medium"
            textGradient
          >
            Please Wait
          </MDTypography>
        ) : newPrice?.length > 0 &&
          newText?.length > 0 &&
          (imageFile?.name || selectedItem?.services_icon) ? (
          <>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={() => onSubmit(newText, imageFile, newPrice)}>
              Submit
            </Button>
          </>
        ) : (
          <MDTypography
            variant="button"
            fontWeight="regular"
            display="block"
            color="info"
            // fontWeight="medium"
            textGradient
          >
            All fields should be filled.
          </MDTypography>
        )}
      </DialogActions>
    </Dialog>
  );
}

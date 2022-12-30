import { useState } from "react";
import { useParams } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import {
  Container,
  Typography,
  CssBaseline,
  Button,
  TextField,
  InputAdornment,
  Box,
  createTheme,
} from "@mui/material";

const Edit = ({ fishList, handleEdit }) => {
  const { fishID } = useParams();
  const fish = fishList.find((f) => f._id === fishID);

  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm();

  // console.log(errors);
  // console.log(watch());

  const errorMessage = createTheme({
    typography: {
      align: "left",
      fontSize: 12,
    },
  });

  const [imgName, setImgName] = useState(false);

  const onImgUpload = () => {
    setImgName(true);
    console.log(imgName);
  };

  return (
    <>
      <CssBaseline />
      <div>
        <Container maxWidth="med" align="center" sx={{ mt: 2 }}>
          <Typography component="h1" variant="h3" sx={{ mb: 2 }}>
            Update {fish.species}
          </Typography>

          <form
            onSubmit={handleSubmit((data) => {
              handleEdit({ ...data, _id: fish._id });
            })}
          >
            <TextField
              type="text"
              label="Species"
              sx={{ width: 300 }}
              defaultValue={fish.species}
              {...register("Species", { required: "Species type is required" })}
            />
            <Box sx={{ color: "red", width: 300 }}>
              <Typography align="left" sx={{ fontSize: 12 }}>
                {errors.species?.message}
              </Typography>
            </Box>

            <TextField
              type="textarea"
              {...register("description", {
                required: "Description of item is required",
              })}
              label="Description of item"
              sx={{ width: 300, mt: 2 }}
              defaultValue={fish.description}
            />
            <Box sx={{ color: "red", width: 300 }}>
              <Typography align="left" sx={{ fontSize: 12 }}>
                {errors.description?.message}
              </Typography>
            </Box>

            <TextField
              type="number"
              {...register("price", { required: "Price is required" })}
              label="Price"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">$</InputAdornment>
                ),
              }}
              sx={{ width: 300, mt: 2 }}
              defaultValue={fish.price}
            />
            <Box sx={{ color: "red", width: 300 }}>
              <Typography align="left" sx={{ fontSize: 12 }}>
                {errors.price?.message}
              </Typography>
            </Box>

            <TextField
              type="number"
              {...register("stock", {
                required: "Amount of stock is required",
              })}
              label="Amount of Stock"
              sx={{ width: 300, mt: 2 }}
              defaultValue={fish.stock}
            />
            <Box sx={{ color: "red", width: 300 }}>
              <Typography align="left" sx={{ fontSize: 12 }}>
                {errors.stock?.message}
              </Typography>
            </Box>

            <TextField
              type="text"
              {...register("caughtBy", {
                required: "Fishmonger's name is required",
              })}
              label="Caught By..."
              sx={{ width: 300, mt: 2 }}
              defaultValue={fish.caughtBy}
            />
            <Box sx={{ color: "red", width: 300 }}>
              <Typography align="left" sx={{ fontSize: 12 }}>
                {errors.caughtBy?.message}
              </Typography>
            </Box>

            <Controller
              render={({ field: { onChange, value } }) => (
                <Button
                  variant="outlined"
                  component="label"
                  sx={{ mt: 2, width: 300 }}
                  onChange={onImgUpload}
                >
                  Upload Image
                  <input
                    accept="image/*"
                    hidden
                    multiple
                    type="file"
                    name="image"
                    id="image"
                    {...register("file")}
                  />
                </Button>
              )}
              name="image"
              control={control}
            />

            {imgName && (
              <Box sx={{ color: "grey", width: 300 }}>
                <Typography align="left" sx={{ fontSize: 12 }}>
                  Image Uploaded ✅
                </Typography>
              </Box>
            )}
            {!imgName && <br />}

            <Button
              type="submit"
              variant="contained"
              sx={{ width: 300, my: 2 }}
            >
              Update Item
            </Button>
          </form>
        </Container>
      </div>
    </>
  );
};

export default Edit;

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import {
  Container,
  Typography,
  CssBaseline,
  Button,
  TextField,
  InputAdornment,
  Box,
} from "@mui/material";

const Create = (props) => {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm();

  const [imgName, setImgName] = useState(false);

  const onImgUpload = () => {
    let file = watch("file");
    setImgName(file[0].name);
  };

  return (
    <>
      <CssBaseline />
      <div>
        <Container maxWidth="med" align="center" sx={{ mt: 2, pb: 10 }}>
          <Typography component="h1" variant="h3" sx={{ mb: 2 }}>
            Add A New Item
          </Typography>

          <form
            onSubmit={handleSubmit((data) => {
              props.handleNewFish(data);
            })}
          >
            <TextField
              type="text"
              label="Species"
              sx={{ width: 300 }}
              {...register("species", { required: "Species type is required" })}
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
                <Typography align="left" sx={{ mt: 1, fontSize: 12 }}>
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
              Add Item
            </Button>
          </form>
        </Container>
      </div>
    </>
  );
};

export default Create;

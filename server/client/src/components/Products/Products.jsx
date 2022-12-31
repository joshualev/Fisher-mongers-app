import React from "react";
import Logo from "../../hooked-green.svg";
import Grid from "@mui/material/Grid";
import Product from "./Product/Product";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";

import Box from "@mui/material/Box";
const Products = ({ fishList, addToCart, removeFromCart }) => {
  return (
    <>
      <main>
        {/* Hero unit */}
        <Container
          disableGutters
          maxWidth="md"
          sx={{ justifyContent: "center", alignItems: "center" }}
        >
          <>
            <Container align="center">
              <Box sx={{ width: "auto", maxWidth: 500 }}>
                <CardMedia
                  image={Logo}
                  align="center"
                  sx={{
                    paddingTop: "56.25%",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                  }}
                />

                <Typography
                  sx={{ mt: 3 }}
                  variant="h5"
                  align="center"
                  color="text.secondary"
                  component="p"
                >
                  A collection of locally caught, sustainable seafood
                </Typography>
              </Box>
            </Container>
          </>
        </Container>
        {/* End hero unit */}
        <Grid sx={{ p: 8 }} container justify="center" spacing={4}>
          {fishList.map((fish) => {
            return (
              <Grid item key={fish._id} xs={12} sm={6} md={4} lg={3}>
                <Product
                  addToCart={addToCart}
                  removeFromCart={removeFromCart}
                  fish={fish}
                />
              </Grid>
            );
          })}
        </Grid>
      </main>
    </>
  );
};

export default Products;

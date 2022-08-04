import * as React from 'react';
import { useState } from "react"
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function AddressForm({handleAddressSubmitStep, addressState}) {
    const [fields, setFields] = useState({
      firstName: "",
      lastName: "",
      address1: "",
      address2: "",
      city: "",
      state: "",
      zip: "",
      country: "",
      saveAddress: false,
    })
    const handleChange = (event) => {
      setFields({
        ...fields,
        [event.target.name]: event.target.value
      })
    }

    const handleSubmit = () => {
      handleAddressSubmitStep(fields)
    }

    return (
      <React.Fragment>
        <Typography variant="h6" gutterBottom>
          Shipping address
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="firstName"
              name="firstName"
              value={addressState.firstName}
              label="First name"
              fullWidth
              autoComplete="given-name"
              variant="standard"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="lastName"
              name="lastName"
              value={addressState.lastName}
              label="Last name"
              fullWidth
              autoComplete="family-name"
              variant="standard"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="address1"
              name="address1"
              value={addressState.address1}
              label="Address line 1"
              fullWidth
              autoComplete="shipping address-line1"
              variant="standard"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="address2"
              name="address2"
              label="Address line 2"
              value={addressState.address2}
              fullWidth
              autoComplete="shipping address-line2"
              variant="standard"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="city"
              name="city"
              value={addressState.city}
              label="City"
              fullWidth
              autoComplete="shipping address-level2"
              variant="standard"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="state"
              name="state"
              value={addressState.state}
              label="State/Province/Region"
              fullWidth
              variant="standard"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="zip"
              name="zip"
              value={addressState.zip}
              label="Zip / Postal code"
              fullWidth
              autoComplete="shipping postal-code"
              variant="standard"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="country"
              name="country"
              value={addressState.country}
              label="Country"
              fullWidth
              autoComplete="shipping country"
              variant="standard"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
              label="Use this address for payment details"
              onChange={handleChange}
            />
          </Grid>
        </Grid>
        <Button onClick={handleSubmit}>Save</Button>
      </React.Fragment>
    );
  }
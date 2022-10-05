import {
  Button,
  CircularProgress,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createCompanyService } from "../services/company";

export interface FormCompany {
  name: string;
  address: string;
  nit: string;
  phoneNumber: string;
}

export default function Form() {
  let navigate = useNavigate();
  const [formCompany, setFormCompany] = useState<FormCompany>({
    name: "",
    address: "",
    nit: "",
    phoneNumber: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormCompany({
      ...formCompany,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const createCompanyServiceService = await createCompanyService(
        formCompany
      );
      navigate("/list-companies");
      return createCompanyServiceService;
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <Grid
          container
          justifyContent="center"
          direction="column"
          alignItems="center"
        >
          <Typography variant="h4" gutterBottom mb={3} mt={5}>
            Create a Company
          </Typography>
          <Grid
            container
            direction="column"
            justifyContent="space-between"
            spacing={2}
            alignContent="center"
          >
            <Grid item>
              <TextField
                id="name"
                name="name"
                label="Name"
                variant="outlined"
                onChange={handleOnChange}
              />
            </Grid>
            <Grid item>
              <TextField
                id="address"
                name="address"
                label="Address"
                variant="outlined"
                onChange={handleOnChange}
              />
            </Grid>
            <Grid item>
              <TextField
                id="nit"
                name="nit"
                label="NIT"
                variant="outlined"
                onChange={handleOnChange}
              />
            </Grid>
            <Grid item>
              <TextField
                id="phoneNumber"
                name="phoneNumber"
                label="Phone Number"
                variant="outlined"
                onChange={handleOnChange}
              />
            </Grid>
          </Grid>
          <Grid item mt={2}>
            <Button type="submit" variant="outlined">
              {isLoading ? <CircularProgress /> : "Send"}
            </Button>
          </Grid>
          <Grid item mt={2} sx={{ a: { textDecoration: "none" } }}>
            <Link to="/list-companies">
              <Button variant="outlined" color="info">
                List companies
              </Button>
            </Link>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}

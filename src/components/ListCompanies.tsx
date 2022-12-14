import {
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Button,
} from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import { getCompaniesService } from "../services/company";
import { Link } from "react-router-dom";
import TableRowCompanies from "./TableRowCompanies";

export interface ListCompanies {
  id: string;
  name: string;
  address: string;
  nit: string;
  phoneNumber: string;
}

export default function ListCompanies() {
  const [companies, setCompanies] = useState<ListCompanies[]>([]);

  const getCompanies = async () => {
    try {
      const companiesResponse = await getCompaniesService();
      setCompanies(companiesResponse);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCompanies();
  }, []);

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Typography variant="h4" gutterBottom>
        Lite Thinking Test
      </Typography>
      <Grid item sx={{ a: { textDecoration: "none" } }}>
        <Link to="/form">
          <Button variant="outlined" color="info">
            Create a New Company
          </Button>
        </Link>
      </Grid>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name Company</TableCell>
              <TableCell align="center">Address Company</TableCell>
              <TableCell align="center">Phone Number</TableCell>
              <TableCell align="center">NIT</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {companies.length > 0 ? (
              <Fragment>
                {companies?.map((row) => (
                  <TableRowCompanies key={row.id} getCompanies={getCompanies} {...row} />
                ))}
              </Fragment>
            ) : (
              <TableRow>
                <TableCell component="th" scope="row" align="center" colSpan={5}>No Rows</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
}

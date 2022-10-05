import {
  TableCell,
  TableRow,
  Button,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useReducer, useState } from "react";

import {
  deleteCompanyService,
  getCompaniesService,
  updateCompanyService,
} from "../services/company";

interface Props {
  id: string;
  name: string;
  address: string;
  nit: string;
  phoneNumber: string;
}

export default function TableRowCompanies({
  id,
  name,
  address,
  nit,
  phoneNumber,
}: Props) {
  const [isEditMode, toggleEditMode] = useReducer((state) => !state, false);
  const initialState = {
    name,
    address,
    nit,
    phoneNumber,
  };

  const [companyEdit, setCompanyEdit] = useState(initialState);

  const deleteCompany = async (companyId: string) => {
    try {
      await deleteCompanyService(companyId);
      await getCompaniesService();
    } catch (error) {
      console.log(error);
    }
  };

  const handleOnChange = (name: string, value: string) => {
    setCompanyEdit({
      ...companyEdit,
      [name]: value,
    });
  };

  const updateCompany = async (companyId: string, formValues: any) => {
    try {
      await updateCompanyService(companyId, formValues);
      await getCompaniesService();
      toggleEditMode();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TableRow key={id}>
      <TableCell component="th" scope="row">
        <Field
          value={companyEdit.name}
          name="name"
          onChange={handleOnChange}
          isEditMode={isEditMode}
          label="Name"
        />
      </TableCell>
      <TableCell align="center">
        <Field
          value={companyEdit.address}
          name="address"
          onChange={handleOnChange}
          isEditMode={isEditMode}
          label="Name"
        />
      </TableCell>
      <TableCell align="center">
        <Field
          value={companyEdit.phoneNumber}
          name="phoneNumber"
          onChange={handleOnChange}
          isEditMode={isEditMode}
          label="Phone Number"
        />
      </TableCell>
      <TableCell align="center">
        <Field
          value={companyEdit.nit}
          name="nit"
          onChange={handleOnChange}
          isEditMode={isEditMode}
          label="NIT"
        />
      </TableCell>
      <TableCell align="center">
        {!isEditMode ? (
          <Stack spacing={2} direction="row" justifyContent="center">
            <Button variant="outlined" onClick={toggleEditMode}>
              Edit
            </Button>
            <Button
              variant="outlined"
              color="error"
              onClick={() => deleteCompany(id)}
            >
              Delete
            </Button>
          </Stack>
        ) : (
          <Stack spacing={2} direction="row" justifyContent="center">
            <Button
              variant="outlined"
              onClick={() => updateCompany(id, companyEdit)}
            >
              Save
            </Button>
            <Button
              variant="outlined"
              color="error"
              onClick={() => {
                setCompanyEdit(initialState);
                toggleEditMode();
              }}
            >
              Cancel
            </Button>
          </Stack>
        )}
      </TableCell>
    </TableRow>
  );
}

type FieldProps = {
  value: string;
  isEditMode: boolean;
  onChange: (name: string, value: string) => void;
  name: string;
  label: string;
};

const Field = ({ value, isEditMode, onChange, name, label }: FieldProps) => {
  return isEditMode ? (
    <TextField
      name={name}
      label={label}
      variant="outlined"
      onChange={(e) => onChange(e.target.name, e.target.value)}
      value={value}
    />
  ) : (
    <Typography>{value}</Typography>
  );
};

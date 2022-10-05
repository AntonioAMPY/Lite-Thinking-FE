import axios from "axios";
import { FormCompany } from "../components/Form";
import { ListCompanies } from "../components/ListCompanies";

export const createCompanyService = async (company: FormCompany) => {
  const response = await axios.post(
    `${import.meta.env.VITE_API_URL}/company`,
    company
  );
  return response;
};

export const getCompaniesService = async (): Promise<ListCompanies[]> => {
  const response = await axios.get(`${import.meta.env.VITE_API_URL}/companies`);
  return response.data;
};

export const deleteCompanyService = async (companyId: string) => {
  const response = await axios.delete(
    `${import.meta.env.VITE_API_URL}/company/${companyId}`
  );

  return response;
};

export const updateCompanyService = async (
  companyId: string,
  formValues: FormCompany
) => {
  const response = await axios.patch(
    `${import.meta.env.VITE_API_URL}/company/${companyId}`,
    formValues
  );
  return response;
};

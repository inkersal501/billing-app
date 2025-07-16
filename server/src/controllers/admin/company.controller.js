import { adminServices } from "../../services/index.js";
const { companyService } = adminServices;

export const getCompany = async (req, res) => {
  try {
    const company = await companyService.getCompany();
    res.status(200).json({ company });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const createCompany = async (req, res) => {
  try {
    const company = await companyService.createCompany(req.body);
    res.status(201).json(company);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

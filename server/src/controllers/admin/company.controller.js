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
    const company = await companyService.createCompany(req.body, req.user.id);
    res.status(201).json(company);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getCompanyDetails = async (req, res) => {
  try {
    const company = await companyService.getCompanyDetails(req.params.id);
    res.status(200).json(company);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const updateCompany = async (req, res) => {
  try {
    const company = await companyService.updateCompany(req.body);
    res.status(200).json(company);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getCompanyUsers = async (req, res) => {
  const {companyId} = req.params;
  try {    
    const users = await companyService.getCompanyUsers(companyId);
    res.status(200).json(users);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const createCompanyUser = async (req, res) => {
  const {companyId} = req.params;
  try {
    const user = await companyService.createCompanyUser(companyId, req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};


export const updateCompanyUser = async (req, res) => {
  const {companyId} = req.params;
  try {
    const user = await companyService.updateCompanyUser(companyId, req.body);
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};  

export const createCompanyFromUser = async (req, res) =>{ 
  try {
    const company = await companyService.createCompanyFromUser(req.body);
    res.status(201).json(company);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
import { userServices } from "../../services/index.js";
const { customerService } = userServices;

export const add = async (req, res) => {
  try {
    const customer = await customerService.addCustomer(req.body);
    res.status(201).json(customer);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getAll = async (req, res) => {
  try {
    const customers = await customerService.getCustomers();
    res.json(customers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getByPhone = async (req, res) => {
  try {
    const customers = await customerService.getCustomersByPhone(
      req.params.phone
    );
    res.json(customers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const update = async (req, res) => {
  try {
    const updated = await customerService.updateCustomer(
      req.params.id,
      req.body
    );
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const remove = async (req, res) => {
  try {
    await customerService.deleteCustomer(req.params.id);
    res.status(204).end();
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

import { billsServices } from "../../services/index.js";
const { billService } = billsServices;

export const create = async (req, res) => {
  try {
    const data = {...req.body, company: req.user.company};
    const bill = await billService.createBill(data);
    res.status(201).json(bill);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getAll = async (req, res) => {
  const { startDate, endDate } = req.query;
  try {
    const bills = await billService.getBills(req.user.company, startDate, endDate);
    res.json(bills);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

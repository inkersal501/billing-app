import { userServices } from "../../services/index.js";
const { billService } = userServices;

export const create = async (req, res) => {
  try {
    const bill = await billService.createBill(req.body);
    res.status(201).json(bill);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getAll = async (req, res) => {
  const { startDate, endDate } = req.query;
  try {
    const bills = await billService.getBills(startDate, endDate);
    res.json(bills);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

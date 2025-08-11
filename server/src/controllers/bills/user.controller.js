import { billsServices } from "../../services/index.js";
const { userService } = billsServices;

export const getUsers = async (req, res) => {
    try {
        const users = await userService.getUsers(req.user.company);
        res.status(200).json(users);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

export const createUser = async (req, res) => {
    try {
        const user = await userService.createUser(req.user.company, req.body);
        res.status(201).json(user);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

export const updateUser = async (req, res) => {
    try {
        const data = await userService.updateUser(req.params.userId, req.body);
        res.status(200).json(data);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
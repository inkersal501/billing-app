import { toast } from "react-toastify";
import { apiEndpoint } from "../config";
import axios from "axios";
 
const fetchUsers = async (token) => {
  try {
    const result = await axios.get(`${apiEndpoint}/bills/users`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return result.data;
  } catch (error) {
    return error;
  }
};

const createUser = async (data, token) => {
  try {
    const result = await axios.post(`${apiEndpoint}/bills/users`, {...data}, {
      headers: { Authorization: `Bearer ${token}`},
    });
    if(result.status === 201){
      toast.success("Staff Created Successully.");        
      return true;
    }
  } catch (error) {
    toast.error(error.response.data.error);
    return false;
  }
};

const updateUser = async (userId, data, token) => {
  try {
    const result = await axios.patch(`${apiEndpoint}/bills/users/${userId}`, {...data}, {
      headers: {Authorization: `Bearer ${token}`}
    });
    if(result.status === 200){
      toast.success("Staff details Updated Successully.");        
      return true;
    }
  } catch (error) {
    toast.error(error.response.data.error);
    return false;
  }
};
export { fetchUsers, createUser, updateUser };

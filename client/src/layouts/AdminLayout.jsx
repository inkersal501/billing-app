import Header from "@admincomponents/Header";
import { Outlet } from "react-router-dom";
import useAuth from '@adminhooks/useAuth';

const AdminLayout = () => {
  useAuth();
  return (
    <div>
      <Header />
      <Outlet />      
    </div>
  );
};

export default AdminLayout;
import {Outlet} from "react-router-dom";
import Header from "../Header/index.js";

const Layout = () => {
  return (
    <div>
        <Header/>
        <Outlet/>
    </div>
  );
};
export default Layout;
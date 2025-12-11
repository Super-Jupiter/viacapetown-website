import { Outlet } from "react-router-dom";
import BaseFooter from "../components/BaseFooter";
import BaseNavbar from "../components/BaseNavbar";

const BaseLayout = () => {
  return (
    <div className="layout">
      <BaseNavbar />
      <main className="page-content">
        <Outlet />
      </main>
      <BaseFooter />
    </div>
  );
};

export default BaseLayout;

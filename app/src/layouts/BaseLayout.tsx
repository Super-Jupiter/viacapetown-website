import { Outlet } from "react-router-dom";
import BaseFooter from "../components/BaseFooter";
import BaseNavbar from "../components/BaseNavbar";
import { CurrencyProvider } from "../context/CurrencyContext";

const BaseLayout = () => {
  return (
    <CurrencyProvider>
      <div className="layout">
        <BaseNavbar />
        <main className="page-content">
          <Outlet />
        </main>
        <BaseFooter />
      </div>
    </CurrencyProvider>
  );
};

export default BaseLayout;

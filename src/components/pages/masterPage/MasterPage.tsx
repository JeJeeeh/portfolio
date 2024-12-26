import Header from "../../shared/header/Header";
import Footer from "../../footer/Footer";
import { Outlet } from "react-router";
import "./MasterPage.scss";

const MasterPage = () => {
  return (
    <div className="container">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MasterPage;

import React from "react";
import styleCSS from "./InsertPage.module.css";
import SideNavbar from "../../components/sidebar/sidebar";
import { useParams } from "react-router-dom";
import CreateLink from "../../components/Create/CreateLink";

const InsertPage = () => {
  const { template } = useParams();

  return (
    <div className={styleCSS.insertPageMainContent}>
      <div className={styleCSS.insertPageSideBar}>
        <SideNavbar />
      </div>
      <div className={styleCSS.insertPageRightSide}>
        <CreateLink template={template} />
      </div>
    </div>
  );
};

export default InsertPage;

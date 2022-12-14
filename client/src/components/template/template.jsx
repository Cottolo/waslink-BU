import React, { usesState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import styleCSS from "./template.module.css";
import phone1 from "../../assets/Phone1.png";
import phone2 from "../../assets/Phone2.png";
import phone3 from "../../assets/Phone3.png";
import phone4 from "../../assets/Phone4.png";
import { UserContext } from "../../context/userContext";
import { API } from "../../config/api";

const Template = () => {
  const [state, dispatch] = useContext(UserContext);
  const navigate = useNavigate();
  return (
    <div className={styleCSS.templateContent}>
      <div className={styleCSS.templateHeader}>
        <p className="
            fs-3
            fw-bold
            py-4
            mr-5
        ">Template</p>
      </div>
      <div className={styleCSS.templateBody}>
        <div className={styleCSS.bodyContent}>
          <img
            src={phone1}
            alt="template 1"
            onClick={() => navigate("/insert-link/phone1")}
          />
        </div>
       
      </div>
    </div>
  );
};

export default Template;

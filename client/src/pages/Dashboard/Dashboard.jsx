import React, { useState, useEffect, useContext } from "react"
import styleCSS from "./Dashboard.module.css"
import SideNavbar from "../../components/sidebar/sidebar"
import Template from "../../components/template/template"
import { UserContext } from "../../context/userContext"


const Dashboard = () => {
    const [state, dispatch] = useContext(UserContext)
    return(
        <div className={styleCSS.dashboardmaincontent}>
            <div className={styleCSS.dashboardsidenav}>
                <SideNavbar />
            </div>
            <div className={styleCSS.dashboardRightContent}>
                <Template />
            </div>
        </div>
    )
}

export default Dashboard
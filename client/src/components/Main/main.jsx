import React, { useState } from "react";
import ToolBar from "../ToolBar/toolBar";
import Form from "../Form/form";
import Buttons from "../Buttons/buttons";
import Table from "../Table/table";
const Main = () => {
    const [ReportsArr, setReportsArr] = useState(false);
    const [openReportTool, setOpenReportTool] = useState(false);
    const [ReportSelected, setReportSelected] = useState({});
    return (
        <div className="container pt-5">
            <div className="row d-flex flex-row-reverse">
                <div className="col-md-10">
                    {ReportsArr === false && <> <h1 className="m-5"> Welcome To Report Task</h1>  <ToolBar setReportsArr={setReportsArr} ReportsArr={ReportsArr} /></>}
                    {ReportsArr !== false && <div style={{ display: "contents" }}>
                       
                        <h3 className="m-10">משימות</h3>
                        <Table setReportSelected={setReportSelected} ReportSelected={ReportSelected} ReportsArr={ReportsArr} />
                        <div className="mr-2  justify-content-start">
                            <Buttons ReportSelected={ReportSelected} setReportSelected={setReportSelected} setReportsArr={setReportsArr} setOpenReportTool={setOpenReportTool} />
                            {openReportTool && <Form ReportSelected={ReportSelected} setReportSelected={setReportSelected} openReportTool={openReportTool} setReportsArr={setReportsArr} setOpenReportTool={setOpenReportTool} />}
                        </div>
                    </div>
                    }
                </div>
            </div>
        </div >
    )
}
export default Main
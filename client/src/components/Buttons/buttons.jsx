import {React} from 'react'
import api from "../../api/api";

const Buttons = ({ setOpenReportTool, setReportSelected, ReportSelected = {}, setReportsArr, })=>{
    const isReportSelected = Object.keys(ReportSelected).length > 0;

    const openFormClickHendler = (isCreateNewReport) => {
        if (isCreateNewReport)
        setReportSelected({})
        setOpenReportTool(true)
    }
    const deleteReportFromServer = async () => {
        const data = await api.delete('deletereporthour/' + ReportSelected.id)
        setReportsArr(data)
        setOpenReportTool(false)
    };
return(
    <>
    <button className="btn btn-outline-primary m-2" onClick={() => openFormClickHendler(true)}>הוסף</button>
    <button disabled={!isReportSelected} className="btn btn-outline-primary m-2" onClick={() => openFormClickHendler(false)}>עדכן</button>
    <button disabled={!isReportSelected} className="btn btn-outline-danger m-2" onClick={deleteReportFromServer}>מחק</button>
    </>

)
}
export default Buttons
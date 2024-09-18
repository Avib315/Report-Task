import React from "react";
import './table.css'
const Table = ({ReportsArr,ReportSelected,setReportSelected}) => {
  const clickSelectReportHandler = (b)=>{
    if(b.id === ReportSelected.id)
      setReportSelected({})
    else
      setReportSelected(b)  
  }
    return <table className="table m-5">
    <thead>
      <tr>
        <th scope="col">מזהה</th>
        <th scope="col">שם משימה</th>
        <th scope="col">מס שעות</th>
        <th scope="col">תאריך</th>
      </tr>
    </thead>
    <tbody>
      {ReportsArr && ReportsArr.map(t=>(
        <tr key={"tr-"+t.id} className={`${ReportSelected.id === t.id ? "selectedReport" :"noneSelected" } `} onClick={()=>clickSelectReportHandler(t)}>
        <td>{t.id}</td>
        <td>{t.taskName}</td>
        <td>{t.hoursWorked}</td>
        <td>{t.date}</td>
      </tr>
      ))}
    </tbody>
  </table>
}
export default Table
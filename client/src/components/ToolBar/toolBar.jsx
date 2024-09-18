import React  from "react";
import api from "../../api/api";

const ToolBar = ({setReportsArr , ReportsArr = []}) => {
    const getData = async () => {
        const resData = await api.get('getreporthours')
        console.log(resData);
        
        setReportsArr(resData);
        
    };
    return (
        <div className="col-md-2 float-right">
            <div className="btn-toolbar float-right justify-content-end" role="toolbar" aria-label="Toolbar with button groups">
                <button disabled={ReportsArr.length > 0} className="btn btn-primary float-right btn-lg" onClick={getData}>Enter</button>
            </div>
        </div>
    );
};

export default ToolBar;
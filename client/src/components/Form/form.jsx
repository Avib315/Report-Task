import React, { useState } from "react";
import api from "../../api/api";
import './form.css'
const inputArray = [
    { name: "TaskName", label: "שם משימה", type: "text", placeholder: "הכנס שם משימה" },
    { name: "HoursWorked", label: "מס שעות", type: "text", placeholder: "הכנס מס שעות" }
];

const Form = ({ setEditOpen, setReportSelected, ReportSelected = {}, setReportsArr }) => {
    const isReportSelected = Object.keys(ReportSelected).length > 0;

    const resetValues = () => {
        setReportSelected({});
        setEditOpen(false);
    };
    const onSubmitHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);

        const formValues = {};
        formData.forEach((value, key) => {
            formValues[key] = value;
        });

        if (isReportSelected) {
            await updateAReportToServer(formValues);
        } else {
            await postANewReportToServer(formValues);
        }
    };

    const postANewReportToServer = async (formValues) => {
        const data = await api.post('addnewreporthour', formValues);
        setReportsArr(data);
        resetValues();
    };

    const updateAReportToServer = async (formValues) => {
        const data = await api.put('updatereporthour/' + ReportSelected.id, {
            ...formValues
        });
        setReportsArr(data);
        resetValues();
    };

    return (
        <>
            <hr />
            <div className="Form container mt-3">
                <h5>{isReportSelected ? "ערוך" : "הוסף"} משימה</h5>
                <form onSubmit={onSubmitHandler}>
                    <div className="input-group p-2 mb-3 d-flex justify-content-around">
                        {inputArray.map((inputProp, index) => (
                            <div key={index} className="input-wrapper">
                                <span className="input-group-text ms-2">{inputProp.label}</span>
                                <input
                                    name={inputProp.name}
                                    defaultValue={isReportSelected ? ReportSelected[inputProp.name] : ""}
                                    type={inputProp.type}
                                    placeholder={inputProp.placeholder}
                                    required
                                    className="form-control m-5"
                                    aria-label={inputProp.label}
                                    aria-describedby="inputGroup-sizing-default"
                                />
                            </div>
                        ))}
                    </div>
                    <button  type="submit" className="btn btn-primary ms-2">שמירה</button>
                    <button
                        type="button"
                        className="btn btn-outline-secondary ms-2"
                        onClick={() => {
                            setEditOpen(false);
                            resetValues();
                        }}
                    >
                        ביטול
                    </button>
                </form>
            </div>
        </>
    );
};

export default Form;

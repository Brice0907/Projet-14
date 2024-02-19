import './style/datePicker.css'
import { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function PickerDate() {

    const [startDate, setStartDate] = useState();

    return <>
        <label htmlFor="start-date" className='create_bloc_form_label label_margin'>Start Date</label>
        <DatePicker className='create_bloc_form_input' id="start-date" type="text" selected={startDate} onChange={(date) => setStartDate(date)} dateFormat="dd/MM/yyyy" />
    </>
}
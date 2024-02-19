import './style/birthPicker.css'
import { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function BirthPicker() {

    const [startBirth, setStartBirth] = useState(new Date());

    return <>
        <label htmlFor="date-of-birth" className='create_bloc_form_label label_margin'>Date of Birth</label>
        <DatePicker className='create_bloc_form_input' id="date-of-birth" type="text" selected={startBirth} onChange={(date) => setStartBirth(date)} dateFormat="dd/MM/yyyy" />
    </>
}
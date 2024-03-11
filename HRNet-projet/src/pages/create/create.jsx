import './style/create.css';
import { useState } from 'react';
import data from '../../data/dataState.json'
import CreateNav from '../../components/createNav/createNav';
import BirthPicker from '../../components/birthPicker/birthPicker';
import PickerDate from '../../components/datePicker/datePicker';
import SelectDepartement from '../../components/selectDepartement/selectDepartement';
import SelectState from '../../components/selectState/selectState';
import ModalForm from '../../components/modalForm/modalForm';
// import { useDispatch } from 'react-redux';

export default function Create() {

    // const dispatch = useDispatch();
    const [modalOpen, setModalOpen] = useState(false)

    function sending(e) {
        e.preventDefault()
        const firstName = document.getElementById('first-name').value;
        const lastName = document.getElementById('last-name').value;
        const dateOfBirth = document.getElementById('date-of-birth').value;
        const startDate = document.getElementById('start-date').value;
        const department = document.getElementById('department');
        const street = document.getElementById('street').value;
        const city = document.getElementById('city').value;
        const state = document.getElementById('state');
        const zipCode = document.getElementById('zip-code').value;

        const employees = JSON.parse(localStorage.getItem('employees')) || [];
        const employee = {
            'First Name': firstName,
            'Last Name': lastName,
            'Start Date': startDate,
            'Department': department.children[3].value,
            'Date Of Birth': dateOfBirth,
            'Street': street,
            'City': city,
            'State': state.children[3].value,
            'Zip Code': zipCode
        };
        employees.push(employee);
        localStorage.setItem('employees', JSON.stringify(employees))
        // dispatch({ type: 'ADD', payload: [employee] })
        setModalOpen(true)
    }

    return <div className='create'>
        <CreateNav />
        <div className='create_bloc'>

            <h2 className='create_bloc_title'>Create Employee</h2>

            <form className='create_bloc_form' id="create-employee">
                <label htmlFor="first-name" className='create_bloc_form_label label_margin'>First Name</label>
                <input type="text" id="first-name" className='create_bloc_form_input'></input>

                <label htmlFor="last-name" className='create_bloc_form_label label_margin'>Last Name</label>
                <input type="text" id="last-name" className='create_bloc_form_input'></input>

                <BirthPicker />

                <PickerDate />

                <fieldset className="address create_bloc_form_field">
                    <legend>Address</legend>

                    <label htmlFor="street" className='create_bloc_form_label'>Street</label>
                    <input id="street" type="text" className='create_bloc_form_field_input' />

                    <label htmlFor="city" className='create_bloc_form_label'>City</label>
                    <input id="city" type="text" className='create_bloc_form_field_input' />

                    <SelectState option={data} />

                    <label htmlFor="zip-code" className='create_bloc_form_label'>Zip Code</label>
                    <input id="zip-code" type="number" className='create_bloc_form_field_input' />
                </fieldset>

                <SelectDepartement />
            </form>

            <div onClick={sending} className='create_bloc_button'>Save</div>
        </div>
        <ModalForm isOpen={modalOpen} onRequestClose={() => setModalOpen(false)} />
    </div>
}
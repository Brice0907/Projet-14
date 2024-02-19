import './style/create.css';
import CreateNav from '../../components/createNav/createNav';
import BirthPicker from '../../components/birthPicker/birthPicker';
import PickerDate from '../../components/datePicker/datePicker';

export default function Create() {

    function sending(e) {
        e.preventDefault()
        console.log('CLICK');
        const firstName = document.getElementById('first-name');
        const lastName = document.getElementById('last-name');
        const dateOfBirth = document.getElementById('date-of-birth');
        const startDate = document.getElementById('start-date');
        const department = document.getElementById('department');
        const street = document.getElementById('street');
        const city = document.getElementById('city');
        const state = document.getElementById('state');
        const zipCode = document.getElementById('zip-code');
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

                    <label htmlFor="state" className='create_bloc_form_label'>State</label>
                    <select name="state" id="state" className='create_bloc_form_field_input'></select>

                    <label htmlFor="zip-code" className='create_bloc_form_label'>Zip Code</label>
                    <input id="zip-code" type="number" className='create_bloc_form_field_input' />
                </fieldset>

                <label htmlFor="department" className='create_bloc_form_label label_margin'>Department</label>
                <select name="department" id="department" className='create_bloc_form_input'>
                    <option>Sales</option>
                    <option>Marketing</option>
                    <option>Engineering</option>
                    <option>Human Resources</option>
                    <option>Legal</option>
                </select>
            </form>

            <div onClick={sending} className='create_bloc_button'>Save</div>
        </div>
    </div>
}
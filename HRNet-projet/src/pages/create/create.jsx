import './style/create.css';
import CreateNav from '../../components/createNav/createNav';

export default function Create() {
    return <div className='create'>
        <CreateNav />
        <div className='create_bloc'>

            <h2 className='create_bloc_title'>Create Employee</h2>

            <form className='create_bloc_form' id="create-employee">
                <label htmlFor="first-name" className='create_bloc_form_label label_margin'>First Name</label>
                <input type="text" id="first-name" className='create_bloc_form_input'></input>

                <label htmlFor="last-name" className='create_bloc_form_label label_margin'>Last Name</label>
                <input type="text" id="last-name" className='create_bloc_form_input'></input>

                <label htmlFor="date-of-birth" className='create_bloc_form_label label_margin'>Date of Birth</label>
                <input id="date-of-birth" type="text" className='create_bloc_form_input'></input>

                <label htmlFor="start-date" className='create_bloc_form_label label_margin'>Start Date</label>
                <input id="start-date" type="text" className='create_bloc_form_input'></input>

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

            <div className='create_bloc_button'>Save</div>

        </div>
    </div>
}
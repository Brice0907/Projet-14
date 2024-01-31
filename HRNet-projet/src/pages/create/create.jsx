import './style/create.css';
import CreateNav from '../../components/createNav/createNav';

export default function Create() {
    return <div className='create'>
        <CreateNav />
        <div className='create_bloc'>

            <h2 className='create_bloc_title'>Create Employee</h2>

            <form className='create_bloc_form' id="create-employee">
                <label htmlFor="first-name">First Name</label>
                <input type="text" id="first-name"></input>

                <label htmlFor="last-name">Last Name</label>
                <input type="text" id="last-name"></input>

                <label htmlFor="date-of-birth">Date of Birth</label>
                <input id="date-of-birth" type="text"></input>

                <label htmlFor="start-date">Start Date</label>
                <input id="start-date" type="text"></input>

                <fieldset className="address">
                    <legend>Address</legend>

                    <label htmlFor="street">Street</label>
                    <input id="street" type="text" />

                    <label htmlFor="city">City</label>
                    <input id="city" type="text" />

                    <label htmlFor="state">State</label>
                    <select name="state" id="state"></select>

                    <label htmlFor="zip-code">Zip Code</label>
                    <input id="zip-code" type="number" />
                </fieldset>

                <label htmlFor="department">Department</label>
                <select name="department" id="department">
                    <option>Sales</option>
                    <option>Marketing</option>
                    <option>Engineering</option>
                    <option>Human Resources</option>
                    <option>Legal</option>
                </select>
            </form>

            <button className='create_bloc_button'>Save</button>

        </div>
    </div>
}
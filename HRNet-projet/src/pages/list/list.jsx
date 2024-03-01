import './style/list.css'
import EmployeNav from '../../components/employeNav/employeNav'
import { useState } from 'react';

export default function List() {

    const [tab, setTab] = useState(10);

    const employees = JSON.parse(localStorage.getItem('employees'));
    const displayedEmployees = employees.slice(0, tab);

    function changeSelect(e) {
        const value = parseInt(e.target.value)
        setTab(value)
    }

    return <>
        <EmployeNav />

        <div className='entries'>
            Show
            <select name="entries" id="entries" className='entries_select' onChange={changeSelect}>
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
                <option value="100">100</option>
            </select>
            entries
        </div>

        <table className='list'>
            <thead>
                <tr>
                    <th className='list_thead'>First Name</th>
                    <th className='list_thead'>Last Name</th>
                    <th className='list_thead'>Start Date</th>
                    <th className='list_thead'>Department</th>
                    <th className='list_thead'>Date of Birth</th>
                    <th className='list_thead'>Street</th>
                    <th className='list_thead'>City</th>
                    <th className='list_thead'>State</th>
                    <th className='list_thead'>Zip Code</th>
                </tr>
            </thead>
            <tbody>
                {displayedEmployees.map((employee, index) => (
                    <tr key={index}>
                        <td className={index !== 0 ? 'list_tbody list_line' : 'list_tbody'}>{employee.firstName}</td>
                        <td className={index !== 0 ? 'list_tbody list_line' : 'list_tbody'}>{employee.lastName}</td>
                        <td className={index !== 0 ? 'list_tbody list_line' : 'list_tbody'}>{employee.startDate}</td>
                        <td className={index !== 0 ? 'list_tbody list_line' : 'list_tbody'}>{employee.department}</td>
                        <td className={index !== 0 ? 'list_tbody list_line' : 'list_tbody'}>{employee.dateOfBirth}</td>
                        <td className={index !== 0 ? 'list_tbody list_line' : 'list_tbody'}>{employee.street}</td>
                        <td className={index !== 0 ? 'list_tbody list_line' : 'list_tbody'}>{employee.city}</td>
                        <td className={index !== 0 ? 'list_tbody list_line' : 'list_tbody'}>{employee.state}</td>
                        <td className={index !== 0 ? 'list_tbody list_line' : 'list_tbody'}>{employee.zipCode}</td>
                    </tr>
                ))}
            </tbody>
        </table>

    </>
}
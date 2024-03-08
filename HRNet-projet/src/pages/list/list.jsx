import './style/list.css'
import EmployeNav from '../../components/employeNav/employeNav'
import Tableau from '../../components/tableau/tableau';
import { useSelector } from 'react-redux';

export default function List() {

    // const employees = JSON.parse(localStorage.getItem('employees'));
    const employee = useSelector((state) => state.auth.employees);

    return <>
        <EmployeNav />

        <Tableau content={employee} />
    </>
}
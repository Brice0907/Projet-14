import './style/list.css'
import EmployeNav from '../../components/employeNav/employeNav'
import Tableau from '../../components/tableau/tableau';

export default function List() {

    const employees = JSON.parse(localStorage.getItem('employees'));

    return <>
        <EmployeNav />

        <Tableau content={employees} />
    </>
}
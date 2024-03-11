import './style/list.css'
import EmployeNav from '../../components/employeNav/employeNav'
import Tableau from '../../components/tableau/tableau';
// import { useSelector } from 'react-redux';

export default function List() {

    const employees = JSON.parse(localStorage.getItem('employees'));
    // const employees = useSelector((state) => state.auth.employees);
    const entrie = ['10', '25', '50', '100']

    return <>
        <EmployeNav />

        {employees === null ?
            (<div className='text_tab'>Veuillez ajouter un tableau d&apos;objet au composant Tableau</div>)
            :
            (<Tableau content={employees} entries={entrie} />)
        }
    </>
}
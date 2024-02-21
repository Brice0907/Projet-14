import './style/selectDepartement.css'
import Select from 'react-select'

export default function SelectDepartement() {

    const departmentOption = [
        { value: 'Sales', label: 'Sales' },
        { value: 'Marketing', label: 'Marketing' },
        { value: 'Engineering', label: 'Engineering' },
        { value: 'Human Resources', label: 'Human Resources' },
        { value: 'Legal', label: 'Legal' }
    ]

    return <>
        <label htmlFor="department" className='create_bloc_form_label label_margin'>Department</label>
        <Select name="department" id="department" className='select_dep' options={departmentOption} defaultValue={departmentOption[0]} />
    </>
}
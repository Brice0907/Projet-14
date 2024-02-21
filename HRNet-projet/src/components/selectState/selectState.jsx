import './style/selectState.css'
import Select from 'react-select'

export default function SelectState(option) {

    return <>
        <label htmlFor="state" className='create_bloc_form_label'>State</label>
        <Select name="state" id="state" className='' options={option.option} defaultValue={option.option[0]} />
    </>
}
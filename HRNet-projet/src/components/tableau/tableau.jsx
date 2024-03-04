/* eslint-disable react/prop-types */
import './style/tableau.css'
import { useState } from 'react';


export default function Tableau({ content }) {

    const [tab, setTab] = useState(10);

    const columns = Object.keys(content[0]);
    const displayedContent = content.slice(0, tab);

    function changeSelect(e) {
        const value = parseInt(e.target.value)
        setTab(value)
    }

    function Next() {
        console.log('next');
    }

    return <>
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
                    {columns.map((content, index) => (
                        <th key={index} className='list_thead'>{content}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {displayedContent.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                        {columns.map((content, index) => (
                            <td key={index} className={rowIndex !== 0 ? 'list_tbody list_line' : 'list_tbody'}>
                                {row[content]}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>

        <div className='show'>
            <div>Showing  to  of {content.length} entries</div>
            <div>
                <div>Previous</div>
                <div onClick={Next}>Next</div>
            </div>
        </div>

    </>
}
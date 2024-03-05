/* eslint-disable react/prop-types */
import './style/tableau.css'
import { useState } from 'react';


export default function Tableau({ content }) {

    const [tab, setTab] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);

    const allPages = Math.ceil(content.length / tab)

    const startIndex = (currentPage - 1) * tab;
    const endIndex = startIndex + tab;

    const currentContent = content.slice(startIndex, endIndex)

    const columns = Object.keys(currentContent[0]);
    const displayedContent = currentContent.slice(0, tab);

    function changeSelect(e) {
        const value = parseInt(e.target.value)
        setTab(value)
    }

    function changePage(pageNumber) {
        if (pageNumber !== 0 && pageNumber !== allPages + 1) {
            setCurrentPage(pageNumber)
        }
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
            <div>Showing {startIndex} to {endIndex > content.length ? content.length : endIndex} of {content.length} entries</div>
            <div className='show_page'>
                <div className='show_page_prev' onClick={() => changePage(currentPage - 1)}>Previous</div>
                <div>{currentPage}/{allPages}</div>
                <div className='show_page_next' onClick={() => changePage(currentPage + 1)}>Next</div>
            </div>
        </div>

    </>
}
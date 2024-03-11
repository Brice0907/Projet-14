/* eslint-disable react/prop-types */
import './style/tableau.css'
import { useState } from 'react';

// PASSER LE TOUT EN LIBRAIRI INSTALABLE AVEC NPM (AUTRE PROJET JUSTE POUR SE COMPOSANT)
export default function Tableau({ content, entries }) {

    const [tab, setTab] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });
    const [searchTerm, setSearchTerm] = useState('');

    let columns = [];
    let displayedContent = [];

    let allPages = Math.ceil(content.length / tab)

    const startIndex = (currentPage - 1) * tab;
    const endIndex = startIndex + tab;

    function changeSelect(e) {
        const value = parseInt(e.target.value)
        setTab(value)
    }

    function changePage(pageNumber) {
        if (pageNumber !== 0 && pageNumber !== allPages + 1) {
            setCurrentPage(pageNumber)
        }
    }

    // Function de tri
    function ColumnTri(key) {
        let direction = 'ascending';
        if (sortConfig.key === key || sortConfig.direction === 'ascending') {
            direction = 'descending';
        }
        setSortConfig({ key, direction });
    }

    const formatDateString = (dateString) => {
        const [day, month, year] = dateString.split('/');
        return new Date(`${year}-${month}-${day}`);
    };

    // Trier les données
    if (sortConfig.key) {
        content.sort((a, b) => {
            const valueA = a[sortConfig.key.content];
            const valueB = b[sortConfig.key.content];

            const isDateA = /^\d{2}\/\d{2}\/\d{4}$/.test(valueA);
            const isDateB = /^\d{2}\/\d{2}\/\d{4}$/.test(valueB);

            if (isDateA && isDateB) {
                const dateA = formatDateString(a[sortConfig.key.content]);
                const dateB = formatDateString(b[sortConfig.key.content]);

                if (dateA < dateB) {
                    return sortConfig.direction === 'ascending' ? 1 : -1;
                }
                if (dateA > dateB) {
                    return sortConfig.direction === 'ascending' ? -1 : 1;
                }
            } else {
                if (a[sortConfig.key.content] < b[sortConfig.key.content]) {
                    return sortConfig.direction === 'ascending' ? 1 : -1;
                }
                if (a[sortConfig.key.content] > b[sortConfig.key.content]) {
                    return sortConfig.direction === 'ascending' ? -1 : 1;
                }
            }
        });
    }

    if (content.length > 0) {
        let currentContent = content.slice(startIndex, endIndex);
        columns = Object.keys(currentContent[0] || {});
        displayedContent = currentContent.slice(0, tab);
    }

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredContent = content.filter((row) => {
        return columns.some((content) => {
            const cellValue = row[content].toString().toLowerCase();
            return cellValue.includes(searchTerm.toLowerCase());
        });
    });

    if (filteredContent.length < content.length) {
        let currentContent = filteredContent.slice(startIndex, endIndex);
        columns = Object.keys(currentContent[0] || {});
        displayedContent = currentContent.slice(0, tab);
        allPages = Math.ceil(filteredContent.length / tab)
    }

    return <>
        <div className='show'>
            <div>
                Show
                <select name="entries" id="entries" className='show_select' onChange={changeSelect}>
                    {entries.map((content, index) => {
                        return <option key={index} value={content}>{content}</option>
                    })}
                </select>
                entries
            </div>
            <input className='search' type="search" placeholder='Search' onChange={handleChange} />
        </div>

        <table className='list'>
            {filteredContent.length === 0 ? <div>La recherche n&apos;a donné aucun résultat correspondant à votre requête.</div> : null}
            <thead>
                <tr>
                    {columns.map((content, index) => (
                        <th key={index} onClick={() => ColumnTri({ content })} className='list_thead'>{content}</th>
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

        {filteredContent.length === 0 ? null : <div className='show'>
            <div>
                Showing {startIndex + 1} to {filteredContent.length < content.length ?
                    endIndex > filteredContent.length ? filteredContent.length : endIndex : endIndex > content.length ? content.length : endIndex} of {filteredContent.length < content.length ? filteredContent.length : content.length} entries
            </div>
            <div className='show_page'>
                <div className='show_page_prev' onClick={() => changePage(currentPage - 1)}>Previous</div>
                <div>{currentPage}/{allPages}</div>
                <div className='show_page_next' onClick={() => changePage(currentPage + 1)}>Next</div>
            </div>
        </div>}
    </>
}
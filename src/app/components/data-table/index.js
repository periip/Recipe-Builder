'use client';
import React, { useEffect } from 'react';

export default function DataTable({ attributes, id }) {
    useEffect(() => {
        const targetNode = document.getElementById(id); 
        const observer = new MutationObserver(() => {
            const tableBody = targetNode.querySelector('tbody');
            if (tableBody) {
                const rows = tableBody.querySelectorAll('tr');
                
                const colCount = rows[0].querySelectorAll('td').length
                let hasNonBoolean = new Array(colCount).fill(false);
                for (let i = 0; i < colCount; i++) {;
                    for (let j = 0; j < rows.length; j++) {
                        const cells = rows[j].querySelectorAll('td')
                        if (cells[i].textContent !== '0' && cells[i].textContent !== '1') {
                            hasNonBoolean[i] = true;
                            break;
                        }
                    }
                    for (let j = 0; j < rows.length; j++) {
                        const cells = rows[j].querySelectorAll('td')
                        if (cells[i].textContent === '') {
                            cells[i].textContent = 'N/A';
                        }
                        if (hasNonBoolean[i]) {
                            continue;
                        }
                        if (cells[i].textContent === '0') {
                            cells[i].textContent = 'No'
                        }
                        if (cells[i].textContent === '1') {
                            cells[i].textContent = 'Yes'
                        }
                    }
                }
            }
        })

        observer.observe(targetNode, { childList: true, subtree: true });
        return () => observer.disconnect();
    }, []);
    
    return (
        <table id={id} border="1">
            <thead>
                <tr>
                    {attributes?.map((attr, index) => <th key={index}>{attr}</th>)}
                </tr>
            </thead>
            <tbody>
            </tbody>
        </table>
    )
}
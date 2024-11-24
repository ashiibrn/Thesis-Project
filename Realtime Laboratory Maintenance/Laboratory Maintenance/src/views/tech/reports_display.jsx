import React, { useEffect, useState } from 'react';
import axiosClient from '../../axiosClient.js';

function Reports_Display() {
    const [reports, setReports] = useState([]);

    useEffect(() => {
        const fetchReports = async () => {
            try {
                const response = await axiosClient.get('/reports');
                setReports(response.data);
            } catch (error) {
                console.error('There was an error fetching the reports!', error);
            }
        };

        fetchReports();
    }, []);

    return (
        <div>
            <h1>Submitted Reports</h1>
            {reports.length === 0 ? (
                <p>No reports available</p>
            ) : (
                reports.map((report) => (
                    <div key={report.id}>
                        <p><strong>Laboratory:</strong> {report.laboratory}</p>
                        <p><strong>Issue Type:</strong> {report.issue_type}</p>
                        <p><strong>Specific Issue:</strong> {report.specific_issue}</p>
                        <hr />
                    </div>
                ))
            )}
        </div>
    );
}

export default Reports_Display;

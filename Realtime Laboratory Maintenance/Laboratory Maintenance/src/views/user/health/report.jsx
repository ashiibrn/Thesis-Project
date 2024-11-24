import React, { useState } from 'react';
import axiosClient from '../../../axiosClient.js';

function Report() {
    const [laboratory, setLaboratory] = useState('');
    const [issueType, setIssueType] = useState('');
    const [specificIssue, setSpecificIssue] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axiosClient.post('/reports', {
                laboratory,
                issue_type: issueType,
                specific_issue: specificIssue,
            });

            if (response.status === 201) {
                alert('Report submitted successfully');
                setLaboratory('');
                setIssueType('');
                setSpecificIssue('');
            }
        } catch (error) {
            console.error('There was an error!', error);
            alert('Error submitting the report');
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="report_lab_input">Laboratory: </label>
                <select
                    name="Lab Input"
                    id="report_lab_input"
                    value={laboratory}
                    onChange={(e) => setLaboratory(e.target.value)}
                >
                    <option value="Lab 1">Lab 1</option>
                    <option value="Lab 1">Lab 2</option>
                    <option value="Lab 1">Lab 3</option>
                    <option value="Lab 1">Lab 4</option>
                    <option value="Lab 1">Lab 5</option>
                    <option value="Lab 1">Lab 6</option>
                </select>
                <label htmlFor="issueType">Type Issue: </label>
                <select
                    name="Issue Type"
                    id="issueType"
                    value={issueType}
                    onChange={(e) => setIssueType(e.target.value)}
                >
                    <option value="Hardware Issue">Hardware Issue</option>
                    <option value="Software Issue">Software Issue</option>
                    <option value="Network Issue">Network Issue</option>
                </select>
                <label htmlFor="specIssue">Specific Issue: </label>
                <input
                    type="text"
                    id="specIssue"
                    value={specificIssue}
                    onChange={(e) => setSpecificIssue(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Report;

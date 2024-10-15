import React, { useState } from 'react';
import axios from 'axios';

const GenerateReport = () => {
  const [month, setMonth] = useState('');
  const [reportLink, setReportLink] = useState(null);
  const [error, setError] = useState('');

  const handleGenerateReport = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/reports/monthly/${month}`);
      setReportLink(res.data.filePath);
    } catch (err) {
      setError('Error generating report');
    }
  };

  return (
    <div>
      <h2>Generate Monthly Report</h2>
      <input
        type="month"
        value={month}
        onChange={(e) => setMonth(e.target.value)}
        placeholder="Select month"
      />
      <button onClick={handleGenerateReport}>Generate</button>
      {reportLink && <a href={reportLink} download>Download Report</a>}
      {error && <p>{error}</p>}
    </div>
  );
};

export default GenerateReport;

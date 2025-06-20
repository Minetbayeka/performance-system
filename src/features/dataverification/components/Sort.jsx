import React, { useState } from 'react';
import SelectInput from './SelectInput'; // Assuming this path is correct

const Sort = ({ isOpen, onClose, onApplySort, internNames, priorities, statuses }) => {
  const [sortByInternName, setSortByInternName] = useState('');
  const [sortByPriority, setSortByPriority] = useState('');
  const [sortByStatus, setSortByStatus] = useState('');
  const [sortBySubmissionDate, setSortBySubmissionDate] = useState('');

  if (!isOpen) return null;

  const handleApply = () => {
    onApplySort({
      internName: sortByInternName,
      priority: sortByPriority,
      status: sortByStatus,
      submissionDate: sortBySubmissionDate,
    });
    onClose();
  };

  const handleCancel = () => {
    // Optionally reset state to initial values or clear them
    setSortByInternName('');
    setSortByPriority('');
    setSortByStatus('');
    setSortBySubmissionDate('');
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Sort by</h2>

        <SelectInput
          label="Intern name"
          options={[
            { value: 'name-az', label: 'A-Z' },
            { value: 'name-za', label: 'Z-A' },
          ]}
          value={sortByInternName}
          onChange={(e) => setSortByInternName(e.target.value)}
          placeholder="Select intern name sort"
        />

        <SelectInput
          label="Priority"
          options={priorities.map(p => ({ value: p.toLowerCase().replace(' ', '-'), label: p }))}
          value={sortByPriority}
          onChange={(e) => setSortByPriority(e.target.value)}
          placeholder="Select priority sort"
        />

        <SelectInput
          label="Status"
          options={statuses.map(s => ({ value: s.toLowerCase().replace(' ', '-'), label: s }))}
          value={sortByStatus}
          onChange={(e) => setSortByStatus(e.target.value)}
          placeholder="Select status sort"
        />

        <SelectInput
          label="Submission date"
          options={[
            { value: 'newest-oldest', label: 'Newest - Oldest' },
            { value: 'oldest-newest', label: 'Oldest - Newest' },
          ]}
          value={sortBySubmissionDate}
          onChange={(e) => setSortBySubmissionDate(e.target.value)}
          placeholder="Select date sort"
        />

        <div className="mt-6 flex justify-end space-x-3">
          <button
            onClick={handleCancel}
            className="px-4 py-2 text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
          >
            CANCEL
          </button>
          <button
            onClick={handleApply}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            APPLY
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sort;
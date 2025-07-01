
import React, { useState } from 'react';
import SelectInput from './SelectInput';


const Filter = ({ isOpen, onClose, onApplyFilters, internNames, submitters, statuses, priorities }) => {
  const [selectedInternName, setSelectedInternName] = useState('');
  const [selectedSubmitter, setSelectedSubmitter] = useState('');
  const [selectedSubmissionDateRange, setSelectedSubmissionDateRange] = useState('');
  const [selectedVerificationStatus, setSelectedVerificationStatus] = useState('');
  const [selectedPriorityLevel, setSelectedPriorityLevel] = useState('');

  if (!isOpen) return null;

  const handleApply = () => {
    onApplyFilters({
      internName: selectedInternName,
      submitter: selectedSubmitter,
      submissionDateRange: selectedSubmissionDateRange,
      verificationStatus: selectedVerificationStatus,
      priorityLevel: selectedPriorityLevel,
    });
    onClose();
  };

  const handleCancel = () => {
    // Optionally reset state to initial values or clear them
    setSelectedInternName('');
    setSelectedSubmitter('');
    setSelectedSubmissionDateRange('');
    setSelectedVerificationStatus('');
    setSelectedPriorityLevel('');
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Filter by</h2>

        <SelectInput
          label="Intern name"
          options={internNames.map(name => ({ value: name, label: name }))}
          value={selectedInternName}
          onChange={(e) => setSelectedInternName(e.target.value)}
          placeholder="Select intern name"
        />

        <SelectInput
          label="Submitter"
          options={submitters.map(name => ({ value: name, label: name }))}
          value={selectedSubmitter}
          onChange={(e) => setSelectedSubmitter(e.target.value)}
          placeholder="Select submitter"
        />

        <SelectInput
          label="Submission date range"
          options={[
            { value: 'last7days', label: 'Last 7 Days' },
            { value: 'last30days', label: 'Last 30 Days' },
            { value: 'thismonth', label: 'This Month' },
            { value: 'custom', label: 'Custom Range' },
          ]}
          value={selectedSubmissionDateRange}
          onChange={(e) => setSelectedSubmissionDateRange(e.target.value)}
          placeholder="Select date range"
        />

        <SelectInput
          label="Verification Status"
          options={statuses.map(status => ({ value: status, label: status }))}
          value={selectedVerificationStatus}
          onChange={(e) => setSelectedVerificationStatus(e.target.value)}
          placeholder="Select status"
        />

        <SelectInput
          label="Priority Level"
          options={priorities.map(priority => ({ value: priority, label: priority }))}
          value={selectedPriorityLevel}
          onChange={(e) => setSelectedPriorityLevel(e.target.value)}
          placeholder="Select priority"
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

export default Filter;


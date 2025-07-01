const SelectInput = ({ label, options, value, onChange, placeholder }) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-medium mb-2">
        {label}
      </label>
      <select
        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        value={value}
        onChange={onChange}
      >
        {placeholder && (
          <option value="" disabled hidden>{placeholder}</option>
        )}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;
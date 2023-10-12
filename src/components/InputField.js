import React from 'react';

const InputField = ({ value, onChange }) => {
  return (
    <input
      type="text"
      placeholder="Enter your birth year"
      value={value}
      onChange={onChange}
    />
  );
};

export default InputField;

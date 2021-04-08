import React from 'react';

const InputFeild = ({ label, type, value, handleChange, name }) => {
  return (
    <div className="form-group col-md-6">
      <label>{label}</label>
      {type === 'textarea' ? (
        <textarea
          placeholder={`Enter ${label}`}
          type={type}
          name={name}
          className="form-control"
          value={value}
          onChange={handleChange}
          required
          cols="10"
          rows="2"
        ></textarea>
      ) : (
        <input
          placeholder={`Enter ${label}`}
          type={type}
          name={name}
          className="form-control"
          value={value}
          onChange={handleChange}
          required
        />
      )}
    </div>
  );
};
InputFeild.defautProps = {
  type: 'text',
};
export default InputFeild;

import React from "react"; 

const Password = ({ valid, showPassword, label, value, onChange }) => {
    return (
      <div>
        <label>{label}</label>
        <input
          type={ showPassword ? 'text' : 'password'}
          onChange={(event) => onChange(event.target.value)}
          style={{
            borderColor: valid ? 'gray' : 'red',
            margin: 10,
          }}
         />
      </div>
    ) 
  }
  export default Password; 
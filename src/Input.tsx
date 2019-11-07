import React from 'react';

interface InputProps {
  label: string;
  id: string;
  type: string;
  onChange: React.ChangeEventHandler;
  value: string;
}

const Input: React.FunctionComponent<InputProps> = props => {
  return (
    <div>
      <label htmlFor={props.id}>{props.label}</label>
      <br />
      <input
        id={props.id}
        type={props.type}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
};

export default Input;

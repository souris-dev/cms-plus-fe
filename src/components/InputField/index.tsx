import * as React from 'react';
import PropTypes, { InferProps } from 'prop-types';

import './InputField.css';

const InputFieldPropTypes = {
  label: PropTypes.string,
  onChange: PropTypes.func,
  textFieldId: PropTypes.string,
  inputType: PropTypes.string
}

type InputFieldProps = InferProps<typeof InputFieldPropTypes>;

const InputField: React.FC<InputFieldProps>
  = ({ label, onChange, textFieldId, inputType }: InputFieldProps): JSX.Element => {
    return <>
      <div className="flex flex-col w-full mt-6">
        <label htmlFor={textFieldId || 'textField'} className="text-gray-500">{label}</label>
        <input type={inputType || 'text'} id={textFieldId || 'textField'} 
          onChange={(e) => onChange && onChange(e)}
          className="w-full mt-2 p-2 rounded-md text-black border border-blue-600" />
      </div>
    </>;
  }

InputField.propTypes = InputFieldPropTypes;

export default InputField;


import * as React from 'react';
import PropTypes, { InferProps } from 'prop-types';

import './StyledButton.css';

const StyledButtonPropTypes = {
  key: PropTypes.number,
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'submit', 'reset'])
}

type StyledButtonProps = InferProps<typeof StyledButtonPropTypes>;

const StyledButton: React.FC<StyledButtonProps>
  = ({ text, key, className, type, onClick }: StyledButtonProps): JSX.Element => {
    return <>
      <button onClick={(e) => onClick && onClick(e)} 
        key={key || 1} 
        type={(type as 'button' | 'reset' | 'submit' | undefined) || 'button'}
        className={`bg-gradient-to-r from-btn-start to-btn-end text-white p-2 rounded-md ${className || ''}`}
      >
        {text}
      </button>
    </>;
}

StyledButton.propTypes = StyledButtonPropTypes;

export default StyledButton;


import * as React from 'react';
import PropTypes, { InferProps } from 'prop-types';
import FieldEntry from '../FieldEntry';

import './FieldsDisplay.css';
import editCtypeNameIcon from '../../assets/edit-ctype-name.png';

const FieldsDisplayPropTypes = {
  contentTypeId: PropTypes.number
}

type FieldsDisplayProps = InferProps<typeof FieldsDisplayPropTypes>;

const FieldsDisplay: React.FC<FieldsDisplayProps>
  = ({ contentTypeId }: FieldsDisplayProps): JSX.Element => {
    return <>
      <div className="bg-generic w-3/4 pl-8 pr-8">
            <div className="mt-8 text-3xl font-bold text-gray-600 flex items-center">
              <div>Company_Profile</div>
              <button>
                <img src={editCtypeNameIcon} className="ml-3 h-6 cursor-pointer" />
              </button>
            </div>
            <div className="mt-3 text-2xl font-normal text-gray-600">
              13 Fields
            </div>

            <div className="bg-generic-light mt-6 cursor-pointer font-semibold border-dotted border-2 rounded-md flex items-center justify-center border-primary p-3 text-primary">
              Add another field
            </div>

            <FieldEntry fieldName="Name" />
            <FieldEntry fieldName="Contact Number" />
            <FieldEntry fieldName="Age" />
          </div>
    </>;
}

FieldsDisplay.propTypes = FieldsDisplayPropTypes;

export default FieldsDisplay;


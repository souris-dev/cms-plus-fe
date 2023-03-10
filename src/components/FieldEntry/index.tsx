import * as React from 'react';
import PropTypes, { InferProps } from 'prop-types';

import './FieldEntry.css';

import deleteFieldIcon from '../../assets/delete-field.png';
import editFieldIcon from '../../assets/edit-field.png';

const FieldEntryPropTypes = {
  contentTypeId: PropTypes.number,
  fieldId: PropTypes.number,
  fieldName: PropTypes.string.isRequired
}

type FieldEntryProps = InferProps<typeof FieldEntryPropTypes>;

const FieldEntry: React.FC<FieldEntryProps>
  = ({ fieldName }: FieldEntryProps): JSX.Element => {
    return <>
      <div className="bg-white shadow-sm mt-4 text-sm rounded-md flex items-center justify-between">
        <div className="flex flex-row">
          <div className="bg-cobalt-blue p-4 text-white rounded-l-md">Ab</div>
          <div className="font-semibold text-gray-600 p-4 w-48">{fieldName}</div>
        </div>
        <div className="font-normal text-gray-400">Text</div>
        <div className="flex flex-row">
          <button>
            <img src={editFieldIcon} className="mr-5 h-4" />
          </button>
          <button>
            <img src={deleteFieldIcon} className="mr-6 h-4" />
          </button>
        </div>
      </div>
    </>;
  }

FieldEntry.propTypes = FieldEntryPropTypes;

export default FieldEntry;


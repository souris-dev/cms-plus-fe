import * as React from 'react';
import PropTypes, { InferProps } from 'prop-types';

import './InstanceTableEntry.css';

import deleteFieldIcon from '../../assets/delete-field.png';
import editFieldIcon from '../../assets/edit-field.png';

const InstanceTableEntryPropTypes = {
  data: PropTypes.object,
  instanceId: PropTypes.number,
  contentTypeId: PropTypes.number
}

type InstanceTableEntryProps = InferProps<typeof InstanceTableEntryPropTypes>;

const InstanceTableEntry: React.FC<InstanceTableEntryProps>
  = ({ data }: InstanceTableEntryProps): JSX.Element => {
    const propsData = data as any;
    return <>
    <div className="bg-white shadow-sm mt-4 text-sm rounded-md flex items-center">
      <div className="flex flex-row flex-grow items-center">
        <div className=" text-gray-600 items-center justify-center flex w-12 font-semibold rounded-l-md">{propsData.id}</div>
        <div className="font-semibold text-gray-600 p-4 w-32">{propsData.data[0]}</div>
        <div className="font-semibold text-gray-600">{propsData.data[1]}</div>
      </div>

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

InstanceTableEntry.propTypes = InstanceTableEntryPropTypes;

export default InstanceTableEntry;


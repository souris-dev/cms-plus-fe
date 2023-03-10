import * as React from 'react';
import PropTypes, { InferProps } from 'prop-types';
import { Modal, StyledButton, InputField, FieldEntry } from '..';

import './FieldsDisplay.css';
import editCtypeNameIcon from '../../assets/edit-ctype-name.png';

const FieldsDisplayPropTypes = {
  contentTypeId: PropTypes.number
}

type FieldsDisplayProps = InferProps<typeof FieldsDisplayPropTypes>;

const FieldsDisplay: React.FC<FieldsDisplayProps>
  = ({ contentTypeId }: FieldsDisplayProps): JSX.Element => {
    const [createFieldModalOpen, setCreateFieldModalOpen] = React.useState<boolean>(false);

    return <>
      <div className="bg-generic w-3/4 pl-8 pr-8">
        {contentTypeId != undefined && contentTypeId > 0
          &&
          <>
            <div className="mt-8 text-3xl font-bold text-gray-600 flex items-center">
              <div>Company_Profile</div>
              <button>
                <img src={editCtypeNameIcon} className="ml-3 h-6 cursor-pointer" />
              </button>
            </div>
            <div className="mt-3 text-2xl font-normal text-gray-600">
              13 Fields
            </div>

            <button
              onClick={() => setCreateFieldModalOpen(true)}
              className="bg-generic-light mt-6 w-full cursor-pointer font-semibold border-dotted border-2 rounded-md flex items-center justify-center border-primary p-3 text-primary">
              Add another field
            </button>

            <FieldEntry fieldName="Name" />
            <FieldEntry fieldName="Contact Number" />
            <FieldEntry fieldName="Age" />

            <Modal isOpen={createFieldModalOpen} buttons={
              [
                <button key={1} className="rounded-md p-2 font-semibold mb-4 mr-2"
                  onClick={() => setCreateFieldModalOpen(false)}>
                  Cancel
                </button>,
                <StyledButton key={2} text="Create" className="ml-6 mb-4 mr-6 w-28" />
              ]
            }>
              <div className="flex flex-col w-full">
                <h3 className="text-gray-600 font-bold text-xl">Create a new field</h3>
                <InputField label={'Name of the field'} onChange={() => { return; }} />
              </div>
            </Modal>
          </>}
      </div>
    </>;
  }

FieldsDisplay.propTypes = FieldsDisplayPropTypes;

export default FieldsDisplay;


import * as React from 'react';

import './ContentTypeBuilder.css';

import { ContentTypeEntry, FieldsDisplay, InputField, Modal, Sidebar, StyledButton } from '../../components';

const ContentTypeBuilder: React.FC = (): JSX.Element => {
  const [activeContentTypeId, setActiveContentTypeId] = React.useState<number>(-1);
  const [createContentTypeModalOpen, setCreateContentTypeModalOpen] = React.useState<boolean>(false);

  return <>
    <div className="flex flex-row w-full min-h-screen max-h-screen">
      <Sidebar />

      <div className="w-4/5 flex flex-col">
        <div className="w-full shadow-sm h-16 items-center flex text-gray-600 text-xl font-bold pl-6 flex-grow-0">
          Content Types
        </div>

        <div className="flex-grow flex flex-row">

          <div className="w-1/4 flex flex-col">
            <div className="bg-generic-dull flex-grow pl-5 pr-5">
              <div className="mt-8 text-gray-600">
                <div className="font-semibold uppercase">
                  7 types
                </div>

                <div className="mt-5">
                  <button
                    className="bg-generic-light cursor-pointer w-full font-semibold border-dotted border-2 rounded-md flex items-center justify-center border-primary p-3 text-primary"
                    onClick={() => setCreateContentTypeModalOpen(true)}
                  >
                    + New Type
                  </button>

                  <ContentTypeEntry
                    activeContentTypeId={activeContentTypeId}
                    contentTypeId={1}
                    contentTypeName="Company_Profile"
                    numInstance={13}
                    onClick={() => setActiveContentTypeId(1)}
                  />

                  <ContentTypeEntry
                    activeContentTypeId={activeContentTypeId}
                    contentTypeId={2}
                    contentTypeName="Company_Profile"
                    numInstance={13}
                    onClick={() => setActiveContentTypeId(2)}
                  />
                </div>
              </div>
            </div>
          </div>

          <FieldsDisplay contentTypeId={activeContentTypeId} />
        </div>
      </div>

      <Modal isOpen={createContentTypeModalOpen} buttons={
        [
          <button key={1} className="rounded-md p-2 font-semibold mb-4 mr-2"
            onClick={() => setCreateContentTypeModalOpen(false)}>
            Cancel
          </button>,
          <StyledButton key={2} text="Create" className="ml-6 mb-4 mr-6 w-28" />
        ]
      }>
        <div className="flex flex-col w-full">
          <h3 className="text-gray-600 font-bold text-xl">Create a new content type</h3>
          <InputField label={'Name of the content type'} onChange={() => {return;}} />
        </div>
      </Modal>
    </div>
  </>;
}

export default ContentTypeBuilder;


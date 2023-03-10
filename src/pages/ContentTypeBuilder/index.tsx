import * as React from 'react';

import './ContentTypeBuilder.css';

import { ContentTypeEntry, FieldsDisplay, InputField, Modal, Sidebar, StyledButton } from '../../components';
import makeRequest from '../../utils/makeRequest';
import { CREATE_CONTENT_TYPE, GET_ALL_CONTENT_TYPES } from '../../constants/apiEndpoints';

const ContentTypeBuilder: React.FC = (): JSX.Element => {
  const [activeContentTypeId, setActiveContentTypeId] = React.useState<number>(-1);
  const [activeContentTypeName, setActiveContentTypeName] = React.useState<string>();
  const [activeContentTypeNumInstances, setActiveContentTypeNumInstances] = React.useState<number>();
  const [createContentTypeModalOpen, setCreateContentTypeModalOpen] = React.useState<boolean>(false);

  const [contentTypes, setContentTypes] = React.useState<any[]>();
  const [newContentTypeName, setNewContentTypeName] = React.useState<string>();

  React.useEffect(() => {
    makeRequest(GET_ALL_CONTENT_TYPES)
      .then((data) => setContentTypes(data))
      .catch((err) => console.log(err));
  }, []);

  const handleCreateNewContentType = () => {
    makeRequest(CREATE_CONTENT_TYPE, {
      data: {
        name: newContentTypeName,
        fields: []
      }
    }).then((data) => {
      data.numInstances = 0;
      if (contentTypes) {
        setContentTypes(JSON.parse(JSON.stringify([...contentTypes, data])))
      }
      else {
        setContentTypes(JSON.parse(JSON.stringify([data])));
      }
      setCreateContentTypeModalOpen(false);
    }).catch((err) => console.error(err));
  };

  return <>
    <div className="flex flex-row w-full min-h-screen max-h-screen">
      <Sidebar contentTypes={contentTypes == undefined ? [] : [...contentTypes]} />

      <div className="w-4/5 flex flex-col">
        <div className="w-full shadow-sm h-16 items-center flex text-gray-600 text-xl font-bold pl-6 flex-grow-0">
          Content Types
        </div>

        <div className="flex-grow flex flex-row">

          <div className="w-1/4 flex flex-col">
            <div className="bg-generic-dull flex-grow pl-5 pr-5">
              <div className="mt-8 text-gray-600">
                <div className="font-semibold uppercase">
                  {contentTypes != undefined ? contentTypes.length + ' type(s)' : ''}
                </div>

                <div className="mt-5">
                  <button
                    className="bg-generic-light cursor-pointer w-full font-semibold border-dotted border-2 rounded-md flex items-center justify-center border-primary p-3 text-primary"
                    onClick={() => setCreateContentTypeModalOpen(true)}
                  >
                    + New Type
                  </button>

                  {contentTypes != undefined ? 
                    contentTypes.map((contentType) => {
                      return <ContentTypeEntry
                      key={contentType.id}
                      activeContentTypeId={activeContentTypeId}
                      contentTypeId={contentType.id}
                      contentTypeName={contentType.name}
                      numInstance={contentType.numInstances}
                      onClick={() => {
                        setActiveContentTypeId(contentType.id);
                        setActiveContentTypeName(contentType.name);
                        setActiveContentTypeNumInstances(contentType.numInstances);
                      }}
                    />
                    }) : <div className="mt-4">Loading...</div>
                  }
                </div>
              </div>
            </div>
          </div>

          <FieldsDisplay 
            contentTypeId={activeContentTypeId} 
            contentTypeName={activeContentTypeName} 
            contentTypeNumInstances={activeContentTypeNumInstances}
          />
        </div>
      </div>

      <Modal isOpen={createContentTypeModalOpen} buttons={
        [
          <button key={1} className="rounded-md p-2 font-semibold mb-4 mr-2"
            onClick={() => setCreateContentTypeModalOpen(false)}>
            Cancel
          </button>,
          <StyledButton key={2} text="Create" className="ml-6 mb-4 mr-6 w-28" onClick={handleCreateNewContentType} />
        ]
      }>
        <div className="flex flex-col w-full">
          <h3 className="text-gray-600 font-bold text-xl">Create a new content type</h3>
          <InputField label={'Name of the content type'} onChange={(e: any) => {
            setNewContentTypeName(e.target.value);
          }} />
        </div>
      </Modal>
    </div>
  </>;
}

export default ContentTypeBuilder;


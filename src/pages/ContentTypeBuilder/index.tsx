import * as React from 'react';

import './ContentTypeBuilder.css';

import { ContentTypeEntry, FieldsDisplay, Sidebar } from '../../components';

const ContentTypeBuilder: React.FC = (): JSX.Element => {
  const [activeContentTypeId, setActiveContentTypeId] = React.useState<number>(-1);

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
                  <div className="bg-generic-light cursor-pointer font-semibold border-dotted border-2 rounded-md flex items-center justify-center border-primary p-3 text-primary">
                    + New Type
                  </div>
                  
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
    </div>
  </>;
}

export default ContentTypeBuilder;


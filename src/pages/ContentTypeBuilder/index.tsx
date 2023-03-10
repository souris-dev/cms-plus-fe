import * as React from 'react';

import './ContentTypeBuilder.css';

import editCtypeNameIcon from '../../assets/edit-ctype-name.png';
import { ContentTypeEntry, FieldEntry } from '../../components';

const ContentTypeBuilder: React.FC = (): JSX.Element => {
  return <>
    <div className="flex flex-row w-full min-h-screen max-h-screen">
      <div className="w-1/5 flex flex-col">
        <div className="w-full bg-primary flex items-center h-16 text-white text-3xl font-semibold pl-4 flex-grow-0">
          CMS+
        </div>

        <div className="bg-slate-black flex-grow">
          <div className="mt-8 text-gray-200">
            <div className="font-semibold uppercase pl-4 pr-3">
              Collection Types
            </div>

            <ul className="mt-4 list-disc">
              <li className="mt-2 pt-1 pb-1 pl-4 pr-3 text-gray-400 cursor-pointer hover:bg-black">Company_Profile</li>
              <li className="mt-2 pt-1 pb-1 pl-4 pr-3 text-gray-400 cursor-pointer hover:bg-black">Trials</li>
              <li className="mt-2 pt-1 pb-1 pl-4 pr-3 text-gray-400 cursor-pointer hover:bg-black">Stages</li>
              <li className="mt-2 pt-1 pb-1 pl-4 pr-3 text-gray-400 cursor-pointer hover:bg-black">People</li>
            </ul>

            <div className="font-semibold uppercase mt-8 bg-black pt-1 pb-1 pl-4 pr-3">
              Content Type Builder
            </div>
          </div>
        </div>
      </div>

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
                  
                  <ContentTypeEntry selected contentTypeName="Company_Profile" numInstance={13} />
                  <ContentTypeEntry contentTypeName="Company_Profile" numInstance={13} />
                </div>
              </div>
            </div>
          </div>

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
        </div>
      </div>
    </div>
  </>;
}

export default ContentTypeBuilder;


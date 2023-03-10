import * as React from 'react';

import './Collections.css';

import deleteFieldIcon from '../../assets/delete-field.png';
import editFieldIcon from '../../assets/edit-field.png';

const Collections: React.FC = (): JSX.Element => {
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
              <li className="mt-2 pt-1 pb-1 pl-4 pr-3 text-gray-400 cursor-pointer bg-black">Company_Profile</li>
              <li className="mt-2 pt-1 pb-1 pl-4 pr-3 text-gray-400 cursor-pointer hover:bg-black">Trials</li>
              <li className="mt-2 pt-1 pb-1 pl-4 pr-3 text-gray-400 cursor-pointer hover:bg-black">Stages</li>
              <li className="mt-2 pt-1 pb-1 pl-4 pr-3 text-gray-400 cursor-pointer hover:bg-black">People</li>
            </ul>

            <div className="font-semibold uppercase mt-8 hover:bg-black pt-1 pb-1 pl-4 pr-3">
              Content Type Builder
            </div>
          </div>
        </div>
      </div>

      <div className="w-4/5 flex flex-col">
        <div className="w-full shadow-sm h-16 items-center flex text-gray-600 text-xl font-bold pl-6 flex-grow-0">
          Company_Profile
        </div>

        <div className="flex-grow flex flex-row">

          <div className="bg-generic w-full pl-8 pr-8">
            <div className="mt-8 text-3xl mb-8 font-bold text-gray-600 flex items-center justify-between">
              <div>13 Entries Found</div>
              <button className="font-semibold text-primary text-xl p-1">Add a new entry</button>
            </div>

            {/* Header start (table header) */}
            <div className="mt-4 text-sm rounded-md flex items-center">
              <div className="flex flex-row flex-grow items-center">
                <div className="text-gray-600 justify-center flex w-12 rounded-l-md">ID</div>
                <div className="text-gray-600 pl-4 w-32">Name</div>
                <div className="text-gray-600">Text</div>
              </div>

              <div className="flex flex-row pr-6">
                Actions
              </div>
            </div>
            {/* Header end (table header) */}
            
            {/* Instance Entry Start */}
            <div className="bg-white shadow-sm mt-4 text-sm rounded-md flex items-center">
              <div className="flex flex-row flex-grow items-center">
                <div className=" text-gray-600 items-center justify-center flex w-12 font-semibold rounded-l-md">1</div>
                <div className="font-semibold text-gray-600 p-4 w-32">People</div>
                <div className="font-semibold text-gray-600">Text</div>
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
            {/* Instance Entry End */}

            {/* Instance Entry Start */}
            <div className="bg-white shadow-sm mt-4 text-sm rounded-md flex items-center">
              <div className="flex flex-row flex-grow items-center">
                <div className=" text-gray-600 items-center justify-center flex w-12 font-semibold rounded-l-md">1</div>
                <div className="font-semibold text-gray-600 p-4 w-32">People</div>
                <div className="font-semibold text-gray-600">Text</div>
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
            {/* Instance Entry End */}
            {/* Instance Entry Start */}
            <div className="bg-white shadow-sm mt-4 text-sm rounded-md flex items-center">
              <div className="flex flex-row flex-grow items-center">
                <div className=" text-gray-600 items-center justify-center flex w-12 font-semibold rounded-l-md">1</div>
                <div className="font-semibold text-gray-600 p-4 w-32">People</div>
                <div className="font-semibold text-gray-600">Text</div>
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
            {/* Instance Entry End */}
          </div>
        </div>
      </div>
    </div>
  </>;
}

export default Collections;


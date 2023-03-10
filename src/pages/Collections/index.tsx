import * as React from 'react';
import { InstanceTableEntry, Sidebar } from '../../components';

import './Collections.css';

const Collections: React.FC = (): JSX.Element => {
  return <>
    <div className="flex flex-row w-full min-h-screen max-h-screen">
      
      <Sidebar />

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

            <InstanceTableEntry data={{
              id: 1,
              data: ['Name', '98798798798']
            }} />

            <InstanceTableEntry data={{
              id: 2,
              data: ['Name', '98798798798']
            }} />
          </div>
        </div>
      </div>
    </div>
  </>;
}

export default Collections;


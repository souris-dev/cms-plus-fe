import * as React from 'react';
import { useParams } from 'react-router-dom';
import { InstanceTableEntry, Sidebar } from '../../components';
import { GET_ALL_CONTENT_TYPES, GET_ALL_FIELDS_OF_CTYPE, GET_ALL_INSTANCES_OF_CTYPE, GET_CYPE_BY_ID } from '../../constants/apiEndpoints';
import makeRequest from '../../utils/makeRequest';

import './Collections.css';

const Collections: React.FC = (): JSX.Element => {
  const { contentTypeId } = useParams();
  const [contentTypes, setContentTypes] = React.useState<any[]>();
  const [instanceData, setInstanceData] = React.useState<any[]>();
  const [fieldData, setFieldData] = React.useState<any[]>();
  const [contentTypeName, setContentTypeName] = React.useState<string>();

  React.useEffect(() => {
    makeRequest(GET_ALL_CONTENT_TYPES)
      .then((data) => setContentTypes(data))
      .catch((err) => console.error(err));

    if (contentTypeId) {
      makeRequest(GET_ALL_INSTANCES_OF_CTYPE(contentTypeId))
      .then((data) => setInstanceData(data))
      .catch((err) => console.error(err));
    }

    if (contentTypeId) {
      makeRequest(GET_CYPE_BY_ID(contentTypeId))
      .then((data) => setContentTypeName(data.name))
      .catch((err) => console.error(err));
    }

    if (contentTypeId) {
      makeRequest(GET_ALL_FIELDS_OF_CTYPE(contentTypeId))
      .then((data) => {
        if (data.length > 4) {
          // take only first 4 fields
          setFieldData([ data[0], data[1], data[2], data[3] ])
        }
        else {
          setFieldData(data);
        }
      })
      .catch((err) => console.error(err));
    }
  }, [])

  return <>
    <div className="flex flex-row w-full min-h-screen max-h-screen">
      
      <Sidebar contentTypes={contentTypes || []} />

      <div className="w-4/5 flex flex-col">
        <div className="w-full shadow-sm h-16 items-center flex text-gray-600 text-xl font-bold pl-6 flex-grow-0">
          {contentTypeName}
        </div>

        <div className="flex-grow flex flex-row">

          <div className="bg-generic w-full pl-8 pr-8">
            <div className="mt-8 text-3xl mb-8 font-bold text-gray-600 flex items-center justify-between">
              <div>{instanceData != undefined ? instanceData.length + ' Entries Found' : 'Loading...'}</div>
              <button className="font-semibold text-primary text-xl p-1">Add a new entry</button>
            </div>

            {/* Header start (table header) */}
            <div className="mt-4 text-sm rounded-md flex items-center">
              <div className="flex flex-row flex-grow items-center justify-between mr-10">
                {fieldData != undefined ? fieldData.map((fieldInfo) => {
                  console.log(fieldInfo);
                  return <div key={fieldInfo.id} className="text-gray-600 justify-center flex rounded-l-md">{fieldInfo.name}</div>
                }) : <></>}
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


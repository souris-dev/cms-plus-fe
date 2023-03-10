import * as React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import SidebarCollectionEntry from '../SidebarCollectionEntry';

import './Sidebar.css';

const Sidebar: React.FC
  = (): JSX.Element => {
    const location = useLocation();
    const pathParams = useParams();

    const [isContentTypeBuilder, setIsContentTypeBuilder] = React.useState<boolean>(
      location.pathname.includes('contentTypes')
    );
    const [collectionContentTypeId, setCollectionContentTypeId] = React.useState<number>(-1);

    React.useEffect(() => {
      if (location.pathname.includes('contentTypes')) {
        setIsContentTypeBuilder(true);
      }
      else if ('contentTypeId' in pathParams) {
        setIsContentTypeBuilder(false);
        setCollectionContentTypeId(Number(pathParams.contentTypeId));
      }
    }, [location])

    return <>
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
              <SidebarCollectionEntry activeContentTypeId={collectionContentTypeId} contentTypeId={1} contentTypeName="Company_Profile" />
              <SidebarCollectionEntry activeContentTypeId={collectionContentTypeId} contentTypeId={2} contentTypeName="Company_Profile" />
            </ul>

            <a href="/contentTypes" className={`font-semibold block uppercase mt-8 ${isContentTypeBuilder ? 'bg-black' : 'hover:bg-black'} pt-1 pb-1 pl-4 pr-3`}>
              Content Type Builder
            </a>
          </div>
        </div>
      </div>
    </>;
  }

export default Sidebar;


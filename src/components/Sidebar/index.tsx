import * as React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import PropTypes, { InferProps } from 'prop-types';
import SidebarCollectionEntry from '../SidebarCollectionEntry';

import './Sidebar.css';
import makeRequest from '../../utils/makeRequest';
import { GET_ALL_CONTENT_TYPES } from '../../constants/apiEndpoints';

const SidebarPropTypes = {
  contentTypes: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    numInstances: PropTypes.number.isRequired
  })).isRequired
}

type SidebarProps = InferProps<typeof SidebarPropTypes>;

const Sidebar: React.FC<SidebarProps>
  = ({ contentTypes }: SidebarProps): JSX.Element => {
    const location = useLocation();
    const pathParams = useParams();
    // const [contentTypesData, setContentTypesData] = React.useState<typeof contentTypes>(contentTypes);

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
    }, [])

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
              {contentTypes && contentTypes.map((contentType) => {
                if (contentType == undefined) {
                  return <></>;
                }

                return <SidebarCollectionEntry
                  key={contentType.id}
                  activeContentTypeId={collectionContentTypeId} 
                  contentTypeId={contentType.id} 
                  contentTypeName={contentType.name} />
              })}
            </ul>

            <a href="/contentTypes" className={`font-semibold block uppercase mt-8 ${isContentTypeBuilder ? 'bg-black' : 'hover:bg-black'} pt-1 pb-1 pl-4 pr-3`}>
              Content Type Builder
            </a>
          </div>
        </div>
      </div>
    </>;
  }

Sidebar.propTypes = SidebarPropTypes;

export default Sidebar;

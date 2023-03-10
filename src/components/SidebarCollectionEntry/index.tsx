import * as React from 'react';
import PropTypes, { InferProps } from 'prop-types';

import './SidebarCollectionEntry.css';

const SidebarCollectionEntryPropTypes = {
  activeContentTypeId: PropTypes.number,
  contentTypeId: PropTypes.number,
  contentTypeName: PropTypes.string,
  selected: PropTypes.bool
}

type SidebarCollectionEntryProps = InferProps<typeof SidebarCollectionEntryPropTypes>;

const SidebarCollectionEntry: React.FC<SidebarCollectionEntryProps>
  = ({ contentTypeName, activeContentTypeId, contentTypeId, selected }: SidebarCollectionEntryProps): JSX.Element => {
    if (selected === undefined) {
      selected = (activeContentTypeId == contentTypeId);
    }
    return <li><a href={`/collections/${contentTypeId}`}
     className={`block mt-2 pt-1 pb-1 pl-4 pr-3 text-gray-400 cursor-pointer ${selected ? 'bg-black' : 'hover:bg-black'}`}>
      {contentTypeName}
    </a></li>;
  }

SidebarCollectionEntry.propTypes = SidebarCollectionEntryPropTypes;

export default SidebarCollectionEntry;


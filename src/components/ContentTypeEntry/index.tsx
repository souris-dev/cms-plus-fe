import * as React from 'react';
import PropTypes, { InferProps } from 'prop-types';

import './ContentTypeEntry.css';

const ContentTypeEntryPropTypes = {
  selected: PropTypes.bool,
  contentTypeName: PropTypes.string.isRequired,
  contentTypeId: PropTypes.number,
  numInstance: PropTypes.number.isRequired
}

type ContentTypeEntryProps = InferProps<typeof ContentTypeEntryPropTypes>;

const ContentTypeEntry: React.FC<ContentTypeEntryProps>
  = ({ selected, contentTypeName, numInstance }: ContentTypeEntryProps): JSX.Element => {
    return <>
      <div className={selected ? 'bg-primary shadow-sm cursor-pointer mt-4 font-bold text-sm rounded-md flex items-center justify-between p-4 text-white' : 
      'bg-white shadow-sm cursor-pointer mt-4 font-bold text-sm rounded-md flex items-center justify-between p-4 text-gray-600'}>
        <div>{contentTypeName}</div>
        <div>{numInstance}</div>
      </div>
    </>;
  }

ContentTypeEntry.propTypes = ContentTypeEntryPropTypes;

export default ContentTypeEntry;


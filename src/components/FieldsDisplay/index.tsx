import * as React from 'react';
import PropTypes, { InferProps } from 'prop-types';
import { Modal, StyledButton, InputField, FieldEntry } from '..';

import './FieldsDisplay.css';
import editCtypeNameIcon from '../../assets/edit-ctype-name.png';
import makeRequest from '../../utils/makeRequest';
import { CREATE_FIELD, DELETE_FIELD, GET_ALL_FIELDS_OF_CTYPE, RENAME_FIELD } from '../../constants/apiEndpoints';

const FieldsDisplayPropTypes = {
  contentTypeId: PropTypes.number,
  contentTypeName: PropTypes.string,
  contentTypeNumInstances: PropTypes.number
}

type FieldsDisplayProps = InferProps<typeof FieldsDisplayPropTypes>;

const FieldsDisplay: React.FC<FieldsDisplayProps>
  = ({ contentTypeId, contentTypeName, contentTypeNumInstances }: FieldsDisplayProps): JSX.Element => {
    const [createFieldModalOpen, setCreateFieldModalOpen] = React.useState<boolean>(false);
    const [renameFieldModalOpen, setRenameFieldModalOpen] = React.useState<boolean>(false);
    const [renamingFieldId, setRenamingFieldId] = React.useState<number | string>();
    const [renamingFieldOldName, setRenamingFieldOldName] = React.useState<string>();

    const [fieldsData, setFieldsData] = React.useState<any[]>();

    const [newFieldName, setNewFieldName] = React.useState<string>();
    const [newRenamedFieldName, setNewRenamedFieldName] = React.useState<string>();

    React.useEffect(() => {
      if (contentTypeId != undefined && contentTypeId > 0) {
        makeRequest(GET_ALL_FIELDS_OF_CTYPE(contentTypeId))
          .then((data) => setFieldsData(data))
          .catch((err) => console.log(err));
      }
    }, [contentTypeId]);

    const handleCreateField = () => {
      contentTypeId && makeRequest(CREATE_FIELD(contentTypeId), {
        data: {
          name: newFieldName
        }
      }).then((data) => {
        if (fieldsData) {
          setFieldsData([...fieldsData, data])
        }
        else {
          setFieldsData([data]);
        }
        setCreateFieldModalOpen(false);
      }).catch((err) => console.error(err));
    }

    const handleOnDeleteField = (fieldId: number | string) => {
      if (contentTypeId) {
        makeRequest(DELETE_FIELD(contentTypeId, fieldId))
          .then(() => {
            if (fieldsData) {
              setFieldsData([
                ...fieldsData.filter((field) => field.id != fieldId)
              ]);
            }
          });
      }
    };

    const handleOnRenameField = (fieldId: number | string) => {
      if (contentTypeNumInstances && contentTypeNumInstances > 0) {
        return;
      }

      if (contentTypeId) {
        makeRequest(RENAME_FIELD(contentTypeId, fieldId), {
          data: {
            name: newRenamedFieldName
          }
        })
          .then(() => {
            if (fieldsData) {
              setFieldsData([
                ...fieldsData.map((field) => {
                  if (field.id == fieldId) {
                    field.name = newRenamedFieldName;
                  }
                  return field;
                })
              ]);
            }
            setRenameFieldModalOpen(false);
          });
      }
    };

    return <>
      <div className="bg-generic w-3/4 pl-8 pr-8">
        {contentTypeId != undefined && contentTypeId > 0
          &&
          <>
            <div className="mt-8 text-3xl font-bold text-gray-600 flex items-center">
              <div>{contentTypeName}</div>
              <button>
                <img src={editCtypeNameIcon} className="ml-3 h-6 cursor-pointer" />
              </button>
            </div>
            <div className="mt-3 text-2xl font-normal text-gray-600">
              {(fieldsData?.length + ' Field(s)' || 'Loading...')}
            </div>

            <button
              onClick={() => setCreateFieldModalOpen(true)}
              className="bg-generic-light mt-6 w-full cursor-pointer font-semibold border-dotted border-2 rounded-md flex items-center justify-center border-primary p-3 text-primary">
              Add another field
            </button>

            {fieldsData != undefined
              ? fieldsData.map((fieldInfo) => {
                return <FieldEntry
                  key={fieldInfo.id}
                  fieldName={fieldInfo.name}
                  contentTypeId={fieldInfo.contentTypeId}
                  onDeleteClick={() => handleOnDeleteField(fieldInfo.id)}
                  onEditClick={() => {
                    if (contentTypeNumInstances && contentTypeNumInstances > 0) {
                      alert('This content type has instances, so cannot rename its fields.');
                      return;
                    }
                    setRenamingFieldId(fieldInfo.id);
                    setRenamingFieldOldName(fieldInfo.name);
                    setRenameFieldModalOpen(true);
                  }}
                />
              })
              : <div className="mt-6">Loading...</div>
            }

            <Modal isOpen={createFieldModalOpen} buttons={
              [
                <button key={1} className="rounded-md p-2 font-semibold mb-4 mr-2"
                  onClick={() => setCreateFieldModalOpen(false)}>
                  Cancel
                </button>,
                <StyledButton key={2} text="Create" className="ml-6 mb-4 mr-6 w-28" onClick={handleCreateField} />
              ]
            }>
              <div className="flex flex-col w-full">
                <h3 className="text-gray-600 font-bold text-xl">Create a new field</h3>
                <InputField label={'Name of the field'} onChange={(e: any) => {
                  setNewFieldName(e.target.value)
                }} />
              </div>
            </Modal>

            <Modal isOpen={renameFieldModalOpen} buttons={
              [
                <button key={1} className="rounded-md p-2 font-semibold mb-4 mr-2"
                  onClick={() => setRenameFieldModalOpen(false)}>
                  Cancel
                </button>,
                <StyledButton key={2} text="Rename" className="ml-6 mb-4 mr-6 w-28" onClick={
                  () => renamingFieldId && handleOnRenameField(renamingFieldId)
                } />
              ]
            }>
              <div className="flex flex-col w-full">
                <h3 className="text-gray-600 font-bold text-xl">Rename field {renamingFieldOldName}</h3>
                <InputField label={'Name of the field'} onChange={(e: any) => {
                  setNewRenamedFieldName(e.target.value)
                }} />
              </div>
            </Modal>
          </>}
      </div>
    </>;
  }

FieldsDisplay.propTypes = FieldsDisplayPropTypes;

export default FieldsDisplay;


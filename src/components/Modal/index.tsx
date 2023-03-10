import * as React from 'react';
import PropTypes, { InferProps } from 'prop-types';

import './Modal.css';

const ModalPropTypes = {
  children: PropTypes.node,
  isOpen: PropTypes.bool,
  buttons: PropTypes.arrayOf(PropTypes.node)
}

type ModalProps = InferProps<typeof ModalPropTypes>;

const Modal: React.FC<ModalProps>
  = ({ children, isOpen, buttons }: ModalProps): JSX.Element => {
    return <>
      <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        {isOpen && <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>}

        {isOpen && <>
          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">

              <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    {children}
                  </div>
                </div>
                <div className="px-4 py-3 justify-end flex flex-row">
                  {buttons && buttons.map((btn) => {
                    return btn
                  })}
                </div>
              </div>
            </div>
          </div>
        </>}
      </div>
    </>;
  }

Modal.propTypes = ModalPropTypes;

export default Modal;


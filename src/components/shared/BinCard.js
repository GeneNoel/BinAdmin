import React, { Fragment, useState } from 'react';
import { Modal } from '../shared';

const ActiveState = ({ status }) => {
  if (status == true) {
    return (
      <Fragment>
        <span className="flex rounded-full bg-green-400 uppercase px-4 py-1 text-xs font-bold mr-3 text-white">
          true
        </span>
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        <span className="flex rounded-full bg-indigo-400 uppercase px-4 py-1 text-xs font-bold mr-3 text-white">
          false
        </span>
      </Fragment>
    );
  }
};

const BinCard = ({ id, latititude, longitude, status }) => {
  const [openDeleteModal, setDeleteState] = useState(false);
  const [openAssignModal, setAssignState] = useState(false);
  return (
    <Fragment>
      <div className=" flex bg-white w-full p-4 pl-6 border font-inter items-center">
        <div className="w-1/6 text-gray-800">Bin's id</div>
        <div className="w-1/4 text-gray-800">Latititude</div>
        <div className="w-1/5 text-gray-800">Longitude</div>
        <div className="w-1/6 text-gray-800 flex justify-center">
          <ActiveState status={status} />
        </div>
        <div className="w-1/3 flex item-center justify-center font-maison">
          <button className="mx-3 text-blue p-1 cursor" onClick={() => setDeleteState(true)}>
            Edit
          </button>
          <button className="mx-3 text-red p-1 cursor" onClick={() => setDeleteState(true)}>
            Delete
          </button>
          <button className="mx-3 text-green-600 p-1 cursor" onClick={() => setAssignState(true)}>
            Assign
          </button>
        </div>
      </div>

      {openDeleteModal ? (
        <Modal>
          <div className="modal-content font-maison">
            <div className="box bg-white w-full p-5 shadow rounded">
              <p className=" font-maison text-lg text-gray-800">
                Are you sure you want to delete this Bin ?
              </p>

              <div className="flex items-center row justify-start mt-5">
                <button className="mr-2 bg-red text-white p-2 px-6 rounded shadow">Delete</button>
                <button
                  className="mr-2 bg-blue text-white p-2 px-6 rounded shadow"
                  onClick={() => setDeleteState(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </Modal>
      ) : null}
    </Fragment>
  );
};

export default BinCard;

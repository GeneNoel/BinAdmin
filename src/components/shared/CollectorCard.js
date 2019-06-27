import React, { Fragment, useState } from 'react';
import { Modal } from '../shared';

const CollectorCard = ({ name, location, car_number }) => {
  const [openDeleteModal, setDeleteState] = useState(false);
  const [openAssignModal, setAssignState] = useState(false);
  return (
    <Fragment>
      <div className="border  flex bg-white w-full p-4 pl-6 font-inter items-center ">
        <div className="text-gray-800">
          <img
            src="https://tinyfac.es/data/avatars/26CFEFB3-21C8-49FC-8C19-8E6A62B6D2E0-200w.jpeg"
            alt=""
            className="rounded-full w-10 border mr-6 img"
          />
        </div>
        <div className="w-1/4 text-gray-800">Collector's Name</div>
        <div className="w-1/4  text-gray-700">Abeka Junction</div>
        <div className="w-1/6  text-gray-700 ">Car Number</div>
        <div className="w-1/3 flex item-center justify-center font-maison ">
          <button className="mx-3 text-blue p-1  cursor" onClick={() => setDeleteState(true)}>
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
                Are you sure you want to delete this collector ?
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

      {openAssignModal ? (
        <Modal>
          <div className="modal-content font-maison">
            <div className="box bg-white w-full p-5 shadow rounded">
              <p className="font-maison">
                <ul className="text-gray-800">
                  <li>Bin 1</li>
                  <li>Bin 2</li>
                  <li>Bin 3</li>
                  <li>Bin 4</li>
                </ul>
              </p>

              <button
                className="mr-2 bg-blue-800 text-white p-2 px-6 rounded shadow"
                onClick={() => setAssignState(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </Modal>
      ) : null}
    </Fragment>
  );
};

export default CollectorCard;

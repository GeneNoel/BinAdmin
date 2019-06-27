import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { useForm } from '../../hooks';

const LoginForm = ({ collectFormData, toggleForm }) => {
  const { values, handleChange, handleSubmit } = useForm(collectFormData);
  return (
    <Fragment>
      <div className="w-full max-w-xs">
        <form
          className="bg-white shadow shadow-lg rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label className="block text-gray-900 text-sm   mb-2" htmlFor="username">
              Email
            </label>
            <input
              className="appearance-none border  border-gray-300  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow"
              id="email"
              type="text"
              placeholder="Email"
              onChange={handleChange}
              name="email"
              value={values.email}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-900 text-sm  mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="appearance-none border  border-gray-300  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow"
              id="password"
              type="password"
              placeholder="******************"
              onChange={handleChange}
              name="password"
              value={values.password}
            />
            {/* <p className="text-red-500 text-xs italic">Please choose a password.</p> */}
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue hover:bg-blue-800  text-white  py-2 px-4 rounded-sm focus:outline-none focus:shadow-outline cursor-pointer"
              type="button"
            >
              Login
            </button>
            <span
              className="inline-block align-baseline font-sans font-bold  text-sm text-blue-500 hover:text-blue-800 cursor-pointer"
              onClick={toggleForm}
            >
              Signup
            </span>
          </div>
        </form>
        <p className="text-center text-gray-500 text-xs">©2019 Dave's App. All rights reserved.</p>
      </div>
    </Fragment>
  );
};

LoginForm.propTypes = {
  collectFormData: PropTypes.func.isRequired,
  toggleForm: PropTypes.func.isRequired,
};

export default LoginForm;

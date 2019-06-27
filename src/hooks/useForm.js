import { useState } from 'react';

// global form handler using hooks

const useForm = (callback) => {
  const [values, setValues] = useState({});

  const handleSubmit = async (event) => {
    if (event) event.preventDefault();
    await callback();
    setValues({});
  };

  const handleChange = (event) => {
    // console.log({
    //   [event.target.name]: event.target.value,
    // });
    event.persist();
    setValues((values) => ({ ...values, [event.target.name]: event.target.value }));
  };

  return {
    handleChange,
    handleSubmit,
    values,
  };
};

export default useForm;

import React from 'react';
import { useForm } from 'react-hook-form';

const EditUserForm = (props) => {
  const { register, errors, handleSubmit } = useForm();
  const onSubmit = (data, e) => {
    debugger;
    console.log(data);


    // limpiar campos
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Name</label>
      <input type="text" {...register('name', { required: 'name is required' })} />
      <div>{errors?.name?.message}</div>

      <label>Username</label>
      <input type="text" {...register('username', { required: 'username is required' })} />

      <div>{errors?.username?.message}</div>
      <button>Edit user</button>
    </form>
  );
};

export default EditUserForm;
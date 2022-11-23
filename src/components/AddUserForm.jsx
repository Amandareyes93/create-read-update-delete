import React from 'react';
import { useForm } from 'react-hook-form';

const AddUserForm = (props) => {
  const { register, errors, handleSubmit } = useForm();
  const onSubmit = (data, e) => {
    debugger;
    // console.log(data);
    props.addUser(data);

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
      <button>Add new user</button>
    </form>
  );
};

export default AddUserForm;

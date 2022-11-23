import { useState } from 'react';
import UserTable from './components/UserTable';
import { v4 as uuidv4 } from 'uuid';
import AddUserForm from './components/AddUserForm';
import EditUserForm from './components/EditUserForm';

function App() {
  const usersData = [
    { id: uuidv4(), name: 'Tania', username: 'floppydiskette' },
    { id: uuidv4(), name: 'Craig', username: 'siliconeidolon' },
    { id: uuidv4(), name: 'Ben', username: 'benisphere' },
  ];

  //state

  const [users, setUsers] = useState(usersData);

  //Agregar usuarios

  const addUser = (user) => {
    user.id = uuidv4();
    setUsers([...users, user]);
  };

  // Eliminar Usuarios

  const deleteUser = (id) => {
    const newUsers = users.filter((user) => {
      debugger;
      return user.id !== id;
    });
    setUsers(newUsers);
  };

  //Editar usuarios

  const [editing, setEditing] = useState(false);

  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <div>
              <h2>Edit user</h2>
              <EditUserForm />
            </div>
          ) : (
            <div>
              <h2>Add user</h2>
              <AddUserForm addUser={addUser} />
            </div>
          )}
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable users={users} deleteUser={deleteUser} setEditing={setEditing}/>
        </div>
      </div>
    </div>
  );
}

export default App;

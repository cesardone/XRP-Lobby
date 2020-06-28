const users = [];

const addUser = ({ id, name, walletInfo }) => {
  const existingUser = users.find((user) => user.name === name);

  if (existingUser) {
    return { error: 'Username is taken' };
  }

  const user = { id, name, walletInfo };
  console.log('userWallet: ', user);

  users.push(user);
  return { users };
};

const removeUser = (id) => {
  const indx = users.findIndex((user) => user.id === id);
  if (indx !== -1) {
    return users.splice(indx, 1);
  }
};

const getUser = (id) => {
  users.find((user) => user.id === id);
};

const allUsers = () => {
  return users;
};

module.exports = { addUser, removeUser, getUser, allUsers };

export const getUsers = async () => {
  const res = await fetch("http://localhost:7007/users");
  const data = await res.json();
  return data;
};

export const getUsersById = async (userId) => {
  const res = await fetch(`http://localhost:7007/users/${userId}`);
  const data = await res.json();
  return data;
};

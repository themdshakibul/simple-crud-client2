import AddUserModal from "@/Components/Apps/AddUserModal";
import { getUsers } from "@/Components/lib/data";
import UsersTables from "@/Components/Apps/UsersTables";
import { createUsers, deleteUser } from "@/Components/lib/actions";

const UserPage = async () => {
  const users = await getUsers();

  return (
    <div>
      <div className="flex items-center justify-center">
        <h2>User Manegment {users.length}</h2>
        <AddUserModal CreateUserAction={createUsers} />
      </div>

      <div className="grid grid-cols-3 gap-5">
        <UsersTables users={users} deleteUserAction={deleteUser} />
      </div>
    </div>
  );
};

export default UserPage;

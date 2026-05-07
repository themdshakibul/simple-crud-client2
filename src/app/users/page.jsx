import { use } from "react";
import { getUsers } from "../lib/data";
import UsersTables from "@/Components/Apps/UsersTables";

const UserPage = async () => {
  const users = await getUsers();
  console.log(users);

  return (
    <div>
      <h2>User Manegment {users.length}</h2>

      <div className="grid grid-cols-3 gap-5">
        <UsersTables users={users} />
      </div>
    </div>
  );
};

export default UserPage;

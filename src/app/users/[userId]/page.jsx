import { getUsersById } from "@/Components/lib/data";
import React from "react";

const UserDetailsPage = async ({ params }) => {
  const { userId } = await params;
  const user = await getUsersById(userId);
  console.log(user);

  return (
    <div>
      <h2>User Details page {user.name}</h2>
    </div>
  );
};

export default UserDetailsPage;

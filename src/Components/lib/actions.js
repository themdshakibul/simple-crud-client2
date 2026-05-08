import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const createUsers = async (formData) => {
  "use server";
  const newUsers = Object.fromEntries(formData.entries());

  const res = await fetch("http://localhost:7007/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newUsers),
  });
  const data = await res.json();
  if (data.insertedId) {
    revalidatePath("/users");
  }
  return data;
};

export const upadteFormData = async (userId, formData) => {
  "use server";
  const updateUser = Object.fromEntries(formData.entries());

  const res = await fetch(`http://localhost:7007/users/${userId}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updateUser),
  });
  const data = await res.json();

  if (data.modifiedCount > 0) {
    revalidatePath("/users");
    redirect("/users");
  }
  return data;
};

export const deleteUser = async (userId) => {
  "use server";
  const res = await fetch(`http://localhost:7007/users/${userId}`, {
    method: "DELETE",
  });
  const data = await res.json();
  if (data.deletedCount > 0) {
    revalidatePath("/users");
  }
  return data;
};

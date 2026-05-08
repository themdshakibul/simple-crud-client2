import { upadteFormData } from "@/Components/lib/actions";
import { getUsersById } from "@/Components/lib/data";
import { Button, Input, Label, Modal, TextField } from "@heroui/react";
import { use } from "react";

const UserEditPage = async ({ params }) => {
  const { userId } = await params;
  const user = await getUsersById(userId);

  const updateUserWraper = async (formData) => {
    "use server";
    return upadteFormData(userId, formData);
  };

  return (
    <div>
      <h2>Editing User: </h2>
      <div>
        <form
          action={updateUserWraper}
          className="w-1/3 mx-auto space-y-5 bg-slate-200 p-5 rounded-2xl"
        >
          <TextField
            className="w-full"
            name="name"
            defaultValue={user?.name}
            type="text"
          >
            <Label>Name</Label>
            <Input placeholder="Enter your name" />
          </TextField>
          <TextField
            className="w-full"
            name="email"
            defaultValue={user?.email}
            type="email"
          >
            <Label>Email</Label>
            <Input placeholder="Enter your email" />
          </TextField>
          <TextField
            className="w-full"
            name="role"
            defaultValue={user?.role}
            type="text"
          >
            <Label>Role</Label>
            <Input placeholder="Enter your role" />
          </TextField>
          <Modal.Footer>
            <Button slot="close" variant="secondary">
              Cancel
            </Button>
            <Button type="submit" slot="close">
              Add Users
            </Button>
          </Modal.Footer>
        </form>
      </div>
    </div>
  );
};

export default UserEditPage;

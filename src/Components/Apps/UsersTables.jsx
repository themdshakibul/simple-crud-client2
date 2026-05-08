"use client";

import { AlertDialog, Button, Table } from "@heroui/react";
import Link from "next/link";

const UsersTables = ({ users, deleteUserAction }) => {
  const handelDelete = async (userId) => {
    await deleteUserAction(userId);
  };

  return (
    <section className="mx-auto w-400 p-6">
      <div className="mx-auto container rounded-3xl bg-white p-6 shadow-xl">
        {/* Heading */}
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold text-gray-800">
              User Management
            </h2>
            <p className="mt-1 text-gray-500">Manage all users from here</p>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <Table className="w-350">
            <Table.ScrollContainer className="w-400">
              <Table.Content aria-label="Users Table">
                {/* Header */}
                <Table.Header className="bg-gray-50">
                  <Table.Column isRowHeader>Name</Table.Column>
                  <Table.Column>Email</Table.Column>
                  <Table.Column>Role</Table.Column>
                  <Table.Column>Actions</Table.Column>
                </Table.Header>

                {/* Body */}
                <Table.Body>
                  {users.map((user) => (
                    <Table.Row
                      key={user._id}
                      className="transition hover:bg-gray-50"
                    >
                      {/* Name */}
                      <Table.Cell>
                        <div>
                          <h3 className="font-semibold text-gray-800">
                            {user.name}
                          </h3>
                        </div>
                      </Table.Cell>

                      {/* Email */}
                      <Table.Cell>
                        <span className="text-gray-600">{user.email}</span>
                      </Table.Cell>

                      {/* Role */}
                      <Table.Cell>
                        <span
                          className={`rounded-full px-3 py-1 text-sm font-medium ${
                            user.role === "admin"
                              ? "bg-red-100 text-red-600"
                              : "bg-green-100 text-green-600"
                          }`}
                        >
                          {user.role}
                        </span>
                      </Table.Cell>

                      {/* Actions */}
                      <Table.Cell>
                        <div className="flex flex-wrap gap-2">
                          {/* Details */}
                          <Link href={`/users/${user._id}`}>
                            <Button variant="outline" size="sm">
                              Details
                            </Button>
                          </Link>

                          {/* Edit */}
                          <Link href={`/users/edit/${user._id}`}>
                            <Button variant="outline" color="warning" size="sm">
                              Edit
                            </Button>
                          </Link>

                          {/* Delete */}
                          <AlertDialog>
                            <Button variant="danger" size="sm">
                              Delete
                            </Button>

                            <AlertDialog.Backdrop>
                              <AlertDialog.Container>
                                <AlertDialog.Dialog className="sm:max-w-md rounded-2xl">
                                  <AlertDialog.CloseTrigger />

                                  <AlertDialog.Header>
                                    <AlertDialog.Icon status="danger" />
                                    <AlertDialog.Heading>
                                      Delete User?
                                    </AlertDialog.Heading>
                                  </AlertDialog.Header>

                                  <AlertDialog.Body>
                                    <p className="text-gray-600">
                                      This will permanently delete{" "}
                                      <strong>{user.name}</strong>. This action
                                      cannot be undone.
                                    </p>
                                  </AlertDialog.Body>

                                  <AlertDialog.Footer>
                                    <Button slot="close" variant="tertiary">
                                      Cancel
                                    </Button>

                                    <Button
                                      onClick={() => handelDelete(user._id)}
                                      slot="close"
                                      variant="danger"
                                    >
                                      Confirm Delete
                                    </Button>
                                  </AlertDialog.Footer>
                                </AlertDialog.Dialog>
                              </AlertDialog.Container>
                            </AlertDialog.Backdrop>
                          </AlertDialog>
                        </div>
                      </Table.Cell>
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table.Content>
            </Table.ScrollContainer>
          </Table>
        </div>
      </div>
    </section>
  );
};

export default UsersTables;

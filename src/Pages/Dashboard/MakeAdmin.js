import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import User from "./User";

const MakeAdmin = () => {
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("users", () =>
    fetch(`https://manufacturer-website-server-side-shova29.vercel.app/user`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="ml-8 mr-8">
      <div className="shadow-md overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>No</th>
              <th>User</th>
              <th>Roll</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, index) => (
              <User
                key={user?._id}
                user={user}
                refetch={refetch}
                index={index}
              ></User>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MakeAdmin;

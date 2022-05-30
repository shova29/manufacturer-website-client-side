import React, { useEffect, useState } from "react";
import { useAuthState, useUpdateProfile } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";

const MyProfile = () => {
  const [myProfile, setMyProfile] = useState([]);
  const [reload, setReload] = useState(false);
  const [user] = useAuthState(auth);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
  });

  const { isLoading, refetch } = useQuery();

  useEffect(() => {
    fetch(
      `https://evening-escarpment-83437.herokuapp.com/profiles/${user?.email}`,
      {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accesstoken")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((result) => {
        setReload(!reload);
        // refetch();
        setMyProfile(result);
      });
  }, [user, reload]);

  const onSubmit = (data) => {
    fetch(
      `https://evening-escarpment-83437.herokuapp.com/profiles/${user?.email}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      }
    )
      .then((res) => res.json())
      .then((result) => {
        if (result.modifiedCount > 0) {
          console.log(result);
          reset();
          refetch();
          toast.success("Successfully updated your profile!");
        }
      });
    console.log("data");
  };

  if (isLoading) {
    <Loading></Loading>;
  }

  return (
    <div>
      <h2 className="text-3xl text-center font-bold text-secondary mt-6 mb-6">
        My Profile
      </h2>
      <div className="flex lg:max-w-lg mx-auto mb-8">
        <div className="mt-8 mr-6 card lg:w-full max-w-max shadow-xl mb-8">
          <div className="avatar justify-center p-5">
            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={myProfile?.photoURL} alt="user" />
            </div>
          </div>
          <div className="card-body items-center text-center">
            <h2 className="">{user?.displayName}</h2>
            <p className="">Email: {user?.email}</p>
            <p className="">Education: {myProfile?.education}</p>
            <p className="">Address: {myProfile?.address}</p>
            <p className="">PhoneNumber: {myProfile?.phoneNumber}</p>
            <p className="">LinkedIn: {myProfile?.linkedIn}</p>
          </div>
        </div>

        <div className="xl:ml-8 mb-12 p-6 mt-8 h-full rounded-lg shadow-lg bg-white w-11/12 max-w-5xl">
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              placeholder="Your Education"
              className="input input-bordered  input-secondary w-full max-w-sm mb-3"
              {...register("education", { required: true })}
            />
            {errors.education?.type === "required" && "Education is required"}
            <input
              type="text"
              placeholder="Your Address"
              className="input input-bordered  input-secondary w-full max-w-sm mb-3"
              {...register("address", { required: true })}
            />
            {errors.address?.type === "required" && "Address is required"}
            <input
              type="number"
              placeholder="Your Phone Number"
              className="input input-bordered input-secondary w-full max-w-sm mb-3"
              {...register("phoneNumber", { required: true })}
              required
            />
            {errors.phoneNumber?.type === "required" &&
              "Phone Number is required"}
            <input
              className="input input-bordered input-secondary w-full max-w-sm mb-3"
              placeholder="Photo URL"
              {...register("photoURL")}
            />
            {errors.photoURL?.type === "required" && "Photo URL is required"}
            <input
              type="url"
              name="linkedin"
              placeholder="Your LinkedIn Link"
              className="input input-bordered input-secondary w-full max-w-sm mb-3"
              {...register("linkedIn", { required: true })}
            />{" "}
            {errors.linkedin?.type === "required" &&
              "LinkedIn Link is required"}
            <input
              type="submit"
              className="btn btn-primary text-white w-full max-w-lg"
              disabled={!isValid}
              value="Update Profile"
            />
          </form>
        </div>
        {/* <div>
        <input
          type="checkbox"
          id="update-profile-modal"
          className="modal-toggle"
        />
        <div className="modal lg:w-1/2 mx-auto">
          <div className="modal-box w-11/12 max-w-5xl">
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                type="text"
                placeholder="Your Education"
                className="input input-bordered  input-secondary w-full max-w-sm mb-3"
                {...register("education", { required: true })}
              />
              {errors.education?.type === "required" && "Education is required"}
              <input
                type="text"
                placeholder="Your Address"
                className="input input-bordered  input-secondary w-full max-w-sm mb-3"
                {...register("address", { required: true })}
              />
              {errors.address?.type === "required" && "Address is required"}
              <input
                type="number"
                placeholder="Your Phone Number"
                className="input input-bordered input-secondary w-full max-w-sm mb-3"
                {...register("phoneNumber", { required: true })}
                required
              />
              {errors.phoneNumber?.type === "required" &&
                "Phone Number is required"}
              <input
                className="input input-bordered input-secondary w-full max-w-sm mb-3"
                placeholder="Photo URL"
                {...register("photoURL")}
              />
              {errors.photoURL?.type === "required" && "Photo URL is required"}
              <input
                type="url"
                name="linkedin"
                placeholder="Your LinkedIn Link"
                className="input input-bordered input-secondary w-full max-w-sm mb-3"
                {...register("linkedin", { required: true })}
              />{" "}
              {errors.linkedin?.type === "required" &&
                "LinkedIn Link is required"}
              <div className="modal-action justify-center">
                <label
                  htmlFor="update-profile-modal"
                  className="btn btn-primary text-white"
                  disabled={!isValid}
                  type="submit"
                >
                  Update Profile
                </label>
              </div>
            </form>
          </div>
        </div>
      </div> */}
      </div>
    </div>
  );
};

export default MyProfile;

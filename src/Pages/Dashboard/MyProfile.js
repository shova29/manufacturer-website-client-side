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
      `https://manufacturer-website-server-side-shova29.vercel.app/profiles/${user?.email}`,
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
      <div className="flex flex-col lg:flex-row  items-center justify-around mb-8 gap-4">
        {/* profile card */}
        <div className="mt-8 card w-[80%] lg:max-w-[50%] shadow-xl mb-8">
          <div className="avatar justify-center p-5">
            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img
                src={
                  myProfile?.photoURL
                    ? myProfile?.photoURL
                    : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
                }
                alt="user"
              />
            </div>
          </div>
          <div className="card-body items-center text-center">
            <h2 className="">{user?.displayName}</h2>
            <a className="">Email: {user?.email}</a>
            <p className="">Education: {myProfile?.education}</p>
            <p className="">Address: {myProfile?.address}</p>
            <p className="">PhoneNumber: {myProfile?.phoneNumber}</p>
            <a className="">LinkedIn: {myProfile?.linkedIn}</a>
          </div>
        </div>
        {/* input */}
        <div className="mb-12 p-6 mt-8 h-full rounded-lg shadow-lg bg-white w-[80%] lg:max-w-[50%]">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="form-control items-center"
          >
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
              type="tel"
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
              className="btn btn-primary text-white w-full max-w-sm"
              disabled={!isValid}
              value="Update Profile"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;

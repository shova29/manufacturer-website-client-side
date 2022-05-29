import React from "react";
import { useAuthState, useUpdateProfile } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const MyProfile = () => {
  const [user] = useAuthState(auth);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
  });

  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("users", () =>
    fetch("http://localhost:5000/user", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  const onSubmit = () => {
    const { email } = user;
    fetch(`http://localhost:5000/profiles/${email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          console.log(data);
          refetch();
          toast.success("Successfully updated your profile!");
        }
      });
  };

  return (
    <div className="card bg-base-100 shadow-xl lg:w-1/2 mx-auto">
      <div className="avatar justify-center p-5">
        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          <img src={user?.photoURL} alt="user" />
        </div>
      </div>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{user?.displayName}</h2>
        <p className="card-title">{user?.email}</p>
        <p className="card-title">{user?.phoneNumber}</p>
        <p className="card-title">{user?.address}</p>
        <p className="card-title">{}</p>
      </div>
      <div className="card-actions justify-center mb-5">
        <label htmlFor="my-modal-5" className="btn btn-primary text-white">
          Update Profile
        </label>
      </div>
      <div>
        <input type="checkbox" id="my-modal-5" className="modal-toggle" />
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
                placeholder="Your Location"
                className="input input-bordered  input-secondary w-full max-w-sm mb-3"
                {...register("location", { required: true })}
              />
              {errors.location?.type === "required" && "Location is required"}
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
                  htmlFor="my-modal-5"
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
      </div>
    </div>
  );
};

export default MyProfile;

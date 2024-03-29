import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const AddReview = () => {
  const [user] = useAuthState(auth);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({
    mode: "onChange",
  });

  console.log(user);
  const onSubmit = async (data) => {
    data.name = user?.displayName;
    data.image = user?.photoURL;
    data.rating = parseInt(data.rating);
    fetch(`https://manufacturer-website-server-side-shova29.vercel.app/reviews`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        reset();
        toast.success("Added Review Successfully!");
        console.log(result);
      });
  };

  return (
    <div className="mb-10 lg:w-2/3 lg:mx-auto">
      <h2 className="text-3xl text-center font-bold text-secondary mt-6 mb-6">
        Add Review
      </h2>
      <div className="lg:ml-44 lg:w-1/2">
        <form onSubmit={handleSubmit(onSubmit)}>
          <textarea
            className="input input-bordered input-secondary w-full max-w-lg h-12 mb-3"
            placeholder="Address"
            {...register("address", { required: true })}
          />{" "}
          {errors.address?.type === "required" && "Address is required"}
          <textarea
            className="input input-bordered input-secondary w-full max-w-lg h-24 mb-3"
            placeholder="Review"
            {...register("reviews", { required: true })}
          />{" "}
          {errors.reviews?.type === "required" && "review is required"}
          <input
            type="number"
            className="input input-bordered input-secondary w-full max-w-lg mb-3"
            placeholder="Ratings (1 to 5)"
            {...register("rating", {
              min: 1,
              max: 5,
            })}
          />
          {errors.rating?.type === "required" && "Rating is required"}
          <input
            type="submit"
            className="btn btn-primary w-full max-w-lg"
            disabled={!isValid}
          />
        </form>
      </div>
    </div>
  );
};

export default AddReview;

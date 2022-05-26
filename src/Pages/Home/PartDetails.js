import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import usePartDetails from "../../hooks/usePartDetails";
import useParts from "../../hooks/useParts";
import Loading from "../Shared/Loading";

const PartDetails = () => {
  const { partId } = useParams();
  const { parts, reload, setReload } = usePartDetails(partId);
  const [user] = useAuthState(auth);
  const customId = "custom-id-yes";
  // let min = parts.minQuantity;
  // let max = parts.availableQuantity;
  let quantity;
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    isDirty,
    isValid,
  } = useForm({ mode: "onChange" });
  if (reload) {
    return <Loading></Loading>;
  }

  const onSubmit = (data) => {
    data.email = user?.email;

    const purchase = {
      partId: parts._id,
      part: parts.name,
      userName: user.displayName,
      userEmail: user.email,
    };
    const url = `http://localhost:5000/purchase`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        // console.log(result);
        if (result) {
          reset();
          toast.success(`${parts?.name} Purchase Successfully!!`, {
            toastId: customId,
          });
        } else
          toast.error(` Purchase Successfully!!`, {
            toastId: customId,
          });
      });
  };
  return (
    <div className="container my-24 px-20 mx-auto">
      <h2>Details of {parts?.name} </h2>
      <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-8 sm:mb-6">
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src={parts?.image}
              alt={parts.image}
              className="rounded-xl w-44"
            />
          </figure>
          <div className="card-body items-start text-justify">
            <h2 className="card-title">{parts?.name}</h2>
            <p className="text-sm">{parts?.description}</p>
            <p className="text-sm font-bold">
              Brand: <span className="text-primary">{parts?.brand}</span>
            </p>
            <p className="text-sm font-bold">
              Category: <span className="text-primary">{parts?.category}</span>
            </p>
            <p className="text-sm font-bold">
              Min. Quantity:{" "}
              <span className="text-primary">{parts?.minQuantity}</span>
            </p>
            <p className="text-sm font-bold">
              Available Quantity:{" "}
              <span className="text-primary">{parts?.availableQuantity}</span>
            </p>
            <p className="text-sm font-bold">
              Price:{" "}
              <span className="text-primary">${parts?.perUnitPrice}</span> (Per
              Unit Price){" "}
            </p>
          </div>
        </div>
        <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12  mb-12 md:mb-0 block p-6  h-full rounded-lg shadow-lg bg-white">
          <h2 className="text-cyan-700 text-center text-2xl font-bold mb-6">
            Purchase Form
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="">
            <div className="mb-4">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="name"
                value={user?.displayName || ""}
                readOnly
                className="w-full px-4 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-cyan-700 focus:outline-none"
                placeholder="Your Name"
                {...register("name")}
              />
            </div>
            <div className="mb-4">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                value={user?.email || ""}
                readOnly
                placeholder="Email"
                className="block w-full px-4 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-cyan-700 focus:outline-none"
                {...register("email")}
              />
            </div>
            <div className="mb-4">
              <label className="label">
                <span className="label-text">Parts Name</span>
              </label>
              <input
                type="text"
                value={parts?.name}
                readOnly
                placeholder="Parts Name"
                className="block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-cyan-700 focus:outline-none"
                {...register("parts")}
              />
            </div>
            <div className="mb-4">
              <label className="label">
                <span className="label-text">Address</span>
              </label>
              <input
                type="text"
                placeholder="Address"
                className="block w-full px-4 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-cyan-700 focus:outline-none"
                {...register("address", {
                  required: {
                    value: true,
                    message: "Address is required",
                  },
                  maxLength: 30,
                })}
              />
              <label className="label">
                {errors.address?.type === "required" && (
                  <span className="label-text-alt text-sm text-red-500">
                    {errors.address.message}
                  </span>
                )}
                {errors.address?.type === "maxLength" && (
                  <span className="label-text-alt text-sm text-red-500">
                    {errors.address.message}
                  </span>
                )}
              </label>
            </div>
            <div className="mb-4">
              <label className="label">
                <span className="label-text">Phone Number</span>
              </label>
              <input
                type="number"
                name="phone"
                placeholder="Phone Number"
                className="block w-full px-4 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-cyan-600 focus:outline-none"
                {...register("phoneNumber", {
                  required: {
                    value: true,
                    message: "Phone Number is required",
                  },
                  maxLength: 15,
                })}
              />{" "}
              <label className="label">
                {errors.phoneNumber?.type === "required" && (
                  <span className="label-text-alt text-sm text-red-500">
                    {errors.phoneNumber.message}
                  </span>
                )}
                {errors.phoneNumber?.type === "maxLength" && (
                  <span className="label-text-alt text-sm text-red-500">
                    {errors.phoneNumber.message}
                  </span>
                )}
              </label>
            </div>
            <div className="mb-4">
              <label className="label">
                <span className="label-text">Quantity</span>
              </label>
              <input
                type="number"
                defaultValue={parts?.minQuantity}
                className="block w-full px-4 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-cyan-700 focus:outline-none"
                {...register("quantity", {
                  required: {
                    value: `${parts?.minQuantity}`,
                    message: "Quantity is required",
                  },
                  min: {
                    value: `${parts?.minQuantity}`,
                    message: "Purchase atleast minimum order quantity.",
                  },
                  max: {
                    value: `${parts?.availableQuantity}`,
                    message:
                      "Purchase can't be higher than available quantity.",
                  },
                })}
              />
              <label className="label">
                {errors.quantity?.type === "required" && (
                  <span className="label-text-alt text-sm text-red-500">
                    {errors.quantity.message}
                  </span>
                )}
                {errors.quantity?.type === "min" && (
                  <span className="label-text-alt text-sm text-red-500">
                    {errors.quantity.message}
                  </span>
                )}
                {errors.quantity?.type === "max" && (
                  <span className="label-text-alt text-sm text-red-500">
                    {errors.quantity.message}
                  </span>
                )}
              </label>
            </div>
            {/* <div className="mb-4">
              <label className="label">
                <span className="label-text">Total Price</span>
              </label>
              <input
                type="number"
                placeholder="Total Price"
                onChange={parts?.minQuantity * parts?.perUnitPrice}
                className="block w-full px-4 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-cyan-700 focus:outline-none"
                {...register("price", {
                  required: {
                    value: `${parts?.minQuantity * parts?.perUnitPrice}`,
                  },
                })}
              />
              
            </div>{" "} */}
            <div className="text-left lg:text-center">
              <button
                type="submit"
                // disabled={
                //   min < parts.minQuantity && max > parts.availableQuantity
                //     ? true
                //     : false
                // }
                className="inline-block px-7 py-3 bg-cyan-600 text-white font-medium text-sm  uppercase rounded shadow-md  focus:outline-none focus:ring-0 active:bg-cyan-800 active:shadow-lg transition duration-150 ease-in-out cursor-not-alloweds"
                // disabled hover:bg-cyan-700 hover:shadow-lg focus:bg-cyan-700 focus:shadow-lg
                // disabled={!isDirty || !isValid}
                disabled={
                  quantity < parts?.minQuantity &&
                  quantity > parts?.availableQuantity
                    ? true
                    : false
                }
              >
                Purchase
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PartDetails;

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

const Purchase = () => {
  const { partId } = useParams();
  const { parts } = usePartDetails(partId);
  const [user] = useAuthState(auth);
  const customId = "custom-id-yes";
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    getValues,
    reset,
  } = useForm({ mode: "onChange" });

  const onSubmit = (data) => {
    data.quantity = parseInt(getValues("quantity"));
    data.price = parseInt(getValues("quantity")) * parseInt(parts.perUnitPrice);
    data.parts = parts?.name;
    const url = `https://evening-escarpment-83437.herokuapp.com/purchase`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result) {
          reset();
          // setReload(!reload);
          toast.success(`${parts?.name} Purchase Successfully!!`, {
            toastId: customId,
          });
        } else
          toast.error(`Purchase Successfully!!`, {
            toastId: customId,
          });
      });
  };
  return (
    <div className="container my-24 px-20 mx-auto">
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
        <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12  mb-12 md:mb-0 block p-6 lg:mt-4 md:mt-10 sm:mt-16 h-full rounded-lg shadow-lg bg-white">
          <h2 className="text-cyan-700 text-center text-2xl font-bold mb-6">
            Purchase Form
          </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
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
                })}
              />
              <label className="label">
                {errors.address?.type === "required" && (
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
                type="tel"
                name="phone"
                placeholder="Phone Number"
                className="block w-full px-4 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-cyan-600 focus:outline-none"
                {...register("phoneNumber", {
                  required: {
                    value: true,
                    message: "Phone Number is required",
                  },
                  maxLength: {
                    value: 11,
                    message: "Phone Number must be 11 digit.",
                  },
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
                // defaultValue={parts?.minQuantity}
                className="block w-full px-4 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-cyan-700 focus:outline-none"
                {...register("quantity", {
                  required: {
                    value: `${parts?.minQuantity}`,
                    message: "Quantity is required",
                  },
                  min: {
                    value: `${parts?.minQuantity}`,
                    message: `Purchase atleast minimum ${parts?.minQuantity} quantity.`,
                  },
                  max: {
                    value: `${parts?.availableQuantity}`,
                    message: `Purchase can't be higher than ${parts?.availableQuantity} available quantity.`,
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
            <div className="text-left lg:text-center">
              <input
                type="submit"
                disabled={!isValid}
                className="btn btn-primary w-full text-white text-sm uppercase"
                value="Purchase"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Purchase;

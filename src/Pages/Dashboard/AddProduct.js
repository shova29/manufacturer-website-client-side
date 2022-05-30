import React from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import Loading from "../Shared/Loading";

const AddProduct = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const imageStorageKey = "80a52c797fd62dae17bebd7ea7d1fc2b";

  const onSubmit = async (data) => {
    // console.log(data);
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        // console.log("imgbb", result);
        if (result.success) {
          const img = result.data.url;
          const addProduct = {
            name: data.name,
            shortDescription: data.shortDescription,
            description: data.description,
            minQuantity: parseInt(data.minimumQuantity),
            availableQuantity: parseInt(data.availableQuantity),
            perUnitPrice: parseInt(data.price),
            image: img,
          };
          fetch(`http://localhost:5000/part`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(addProduct),
          })
            .then((res) => res.json())
            .then((inserted) => {
              if (inserted.insertedId) {
                toast.success("Bicycle Product Added Successfully");
                reset();
              } else {
                toast.error("Failed to Add the Product");
              }
            });
        }
      });
  };

  return (
    <div className="mb-10">
      <h2 className="text-2xl text-primary text-center">Add a New Product</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="ml-80 mx-auto">
        <div className="form-control w-full max-w-sm">
          <label className="label">
            <span className="label-text">Product Name</span>
          </label>
          <input
            type="text"
            placeholder="Product Name"
            className="input input-bordered input-secondary w-full max-w-sm"
            {...register("name", {
              required: {
                value: true,
                message: "Product Name is required",
              },
            })}
          />
          <label className="label">
            {errors.name?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.name.message}
              </span>
            )}
          </label>
        </div>
        <div className="form-control w-full max-w-sm">
          <label className="label">
            <span className="label-text">Short Description</span>
          </label>
          <textarea
            placeholder="short Description"
            className="input input-bordered input-secondary w-full max-w-sm h-16"
            {...register("shortDescription", {
              required: {
                value: true,
                message: "Short Description is required",
              },
            })}
          />
          <label className="label">
            {errors.shortDescription?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.shortDescription.message}
              </span>
            )}
          </label>
        </div>
        <div className="form-control w-full max-w-sm">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <textarea
            placeholder="Description"
            className="input input-bordered input-secondary w-full max-w-sm h-28"
            {...register("description", {
              required: {
                value: true,
                message: "Description is required",
              },
            })}
          />
          <label className="label">
            {errors.description?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.description.message}
              </span>
            )}
          </label>
        </div>
        <div className="form-control w-full max-w-sm">
          <label className="label">
            <span className="label-text">Minimum Quantity</span>
          </label>
          <input
            type="number"
            placeholder="Minimum Quantity"
            className="input input-bordered input-secondary w-full max-w-sm"
            {...register("minimumQuantity", {
              required: {
                value: true,
                message: "Minimum Quantity is required",
              },
            })}
          />
          <label className="label">
            {errors.minimumQuantity?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.minimumQuantity.message}
              </span>
            )}
          </label>
        </div>
        <div className="form-control w-full max-w-sm">
          <label className="label">
            <span className="label-text">Available Quantity</span>
          </label>
          <input
            type="number"
            placeholder="Available Quantity"
            className="input input-bordered input-secondary w-full max-w-sm mb-3"
            {...register("availableQuantity", {
              required: {
                value: true,
                message: "Available Quantity is required",
              },
            })}
          />
          <label className="label">
            {errors.availableQuantity?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.availableQuantity.message}
              </span>
            )}
          </label>
        </div>
        <div className="form-control w-full max-w-sm">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input
            type="number"
            placeholder="Price in $"
            className="input input-bordered input-secondary w-full max-w-sm mb-3"
            {...register("price", {
              required: {
                value: true,
                message: "Price is required",
              },
            })}
          />
          <label className="label">
            {errors.price?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.price.message}
              </span>
            )}
          </label>
        </div>

        <div className="form-control w-full max-w-sm">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input
            type="file"
            className="input input-bordered input-secondary w-full max-w-sm"
            {...register("image", {
              required: {
                value: true,
                message: "Image is required",
              },
            })}
          />
          <label className="label">
            {errors.file?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.file.message}
              </span>
            )}
          </label>
        </div>
        <input
          className="btn btn-secondary w-full max-w-sm text-white"
          type="submit"
          value="Add Product"
        />
      </form>
    </div>
  );
};

export default AddProduct;

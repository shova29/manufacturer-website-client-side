import React from "react";
import { useNavigate } from "react-router-dom";

const Part = ({ part }) => {
  const {
    _id,
    name,
    image,
    minQuantity,
    availableQuantity,
    perUnitPrice,
    shortDescription,
  } = part;
  const navigate = useNavigate();
  const navigateToPartDetails = (id) => {
    navigate(`/part/${id}`);
  };
  return (
    <div class="card lg:card-side bg-base-100 shadow-xl">
      <figure>
        <img className="px-2 w-40" src={image} alt={image} />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{name}</h2>
        <p className="text-sm">{shortDescription}</p>
        <p className="text-sm font-bold">
          Min. Quantity: <span className="text-primary">{minQuantity}</span>
        </p>
        <p className="text-sm font-bold">
          Available Quantity:{" "}
          <span className="text-primary">{availableQuantity}</span>
        </p>
        <p className="text-sm font-bold">
          Price: <span className="text-primary">${perUnitPrice}</span> (Per Unit
          Price){" "}
        </p>
        <div class="card-actions justify-end">
          <button
            onClick={() => navigateToPartDetails(_id)}
            class="btn btn-primary text-white"
          >
            Purchase
          </button>
        </div>
      </div>
    </div>
  );
};

export default Part;

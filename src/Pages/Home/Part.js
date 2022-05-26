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
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <figure>
        <img className="px-2 w-40" src={image} alt={image} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
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
        <div className="card-actions justify-end">
          <button
            onClick={() => navigateToPartDetails(_id)}
            className="btn btn-primary text-white"
          >
            Purchase
          </button>
        </div>
      </div>
    </div>
  );
};

export default Part;

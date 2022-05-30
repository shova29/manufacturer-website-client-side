import React from "react";

const FeaturedPart = ({ part }) => {
  const { name, image, perUnitPrice } = part;
  return (
    <div class="card w-96 bg-base-100 shadow-xl image-full">
      <figure>
        <img src={image} alt={name} />
      </figure>
      <div class="card-body">
        <h2 class="card-title text-white">{name}</h2>
        <div class="card-actions justify-start mt-4">
          <p class="text-white font-bold">
            Price: <span>$ {perUnitPrice}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPart;

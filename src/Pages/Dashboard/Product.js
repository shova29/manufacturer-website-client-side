import React from "react";
import { AiFillDelete } from "react-icons/ai";

const Product = ({ product, index, refetch, setParts }) => {
  const { name, image, minQuantity, availableQuantity, perUnitPrice } = product;
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{name}</td>
      <td>
        <div className="avatar">
          <div className="w-8 rounded">
            <img src={image} alt={name} />
          </div>
        </div>
      </td>
      <td>{minQuantity}</td>
      <td>{availableQuantity}</td>
      <td>{perUnitPrice}</td>
      <td>
        {" "}
        <label
          onClick={() => setParts(product)}
          htmlFor="delete-confirm-modal"
          className="btn btn-xs btn-error"
        >
          Delete
          <AiFillDelete></AiFillDelete>
        </label>
      </td>
    </tr>
  );
};

export default Product;

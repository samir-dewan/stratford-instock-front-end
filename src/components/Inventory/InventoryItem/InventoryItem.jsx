import "../../Utilities/List/ListCard/ListCard.scss";
import "./InventoryItem.scss";
import { GET_SINGLE_INVENTORY_API_URL } from "../../../api/endpoints";
import React, { useEffect, useState } from "react";
import edit from "../../../assets/icons/edit-24px.svg";
import back from "../../../assets/icons/arrow_back-24px.svg";
import axios from "axios";

const InventoryItem = (routerProps) => {
  const [data, setData] = useState({});
  const id = routerProps.match.params.inventoryId;
  useEffect(async () => {
    try {
      const res = await axios.get(GET_SINGLE_INVENTORY_API_URL(id));
      setData(res.data);
    } catch {
      console.log("Trouble connecting with the server");
      return (
        <>
          <div className="list-error">
            We apologise. There has been a problem retrieving the data.
          </div>
        </>
      );
    }
  }, []);
  return (
    <>
      <img src={back} />
      <h2>{data.itemName}</h2>
      <button>
        <img src={edit} />
        <p className="button__disappearing-text">Edit</p>
      </button>
      <label>item description:</label>
      <p>{data.description}</p>
      <label>category:</label>
      <p>{data.category}</p>
      <div>
        <label>status:</label>
        <p>{data.status}</p>
      </div>
      <label>quantity:</label>
      <p>{data.quantity}</p>
      <label>warehouse:</label>
      <p>{data.warehouseName}</p>
    </>
  );
};
export default InventoryItem;

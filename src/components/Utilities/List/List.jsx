/** @format */

//IMPORT MODULES
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./List.scss";
import "../Footer/Footer.scss";

//IMPORT COMPONENTS
import ListHeader from "./ListHeader/ListHeader";
import ListCard from "./ListCard/ListCard";
import ListWarehouseColumns from "./ListWarehouseColumns/ListWarehouseColumns";

const List = ({ title, itemType, apiUrl, url }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(apiUrl)
      .then((res) => setData(res.data))
      .catch(() => {
        console.log("Trouble connecting with the server");
        return (
          <>
            <div className="list-error">
              We apologise. There has been a problem retrieving the data.
            </div>
          </>
        );
      });
  }, [apiUrl]);

  return (
    <div className="footer">
      <div className="list__container">
        {/* Gives a title e.g. Warehouses and an item type e.g. warehouse */}
        <ListHeader title={title} itemType={itemType} />
        {/* Conditional import of Column Names */}
        <ListWarehouseColumns />
        {data.length === 0 && (
          <div className="list__error">
            We apologise. There has been a problem retrieving the data.
          </div>
        )}
        {/* Creates a card for every item */}
        {data.map((dataItem, cardIndex) => (
          <ListCard
            key={data.id}
            cardIndex={cardIndex}
            cardType={title}
            data={dataItem}
            url={url}
          />
        ))}
      </div>
      <div className="footer__text">© InStock Inc. All Rights Reserved.</div>
    </div>
  );
};

export default List;

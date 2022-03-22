/** @format */

//IMPORT MODULES
import React from "react";
import { Link } from "react-router-dom";

//IMPORT COMPONENTS
import "../List/ListHeader/ListHeader.scss";
import "./SingleItemHeader.scss";
import "../../Warehouse/WarehouseAddNew/WarehouseAddNew.scss";
import backArrow from "../../../assets/icons/arrow_back-24px.svg";
import edit from "../../../assets/icons/edit-24px.svg";

const SingleItemHeader = ({ data }) => {
  // const goBack = () => {
  //   props.history.goBack();
  // };
  if (data) {
    const title = data.name || data.itemName;
    return (
      <>
        <div className="header-container list__header item-header">
          <div className="item-header__wrapper">
            <img src={backArrow} alt="back" className="item-header__icon" />
            <h1 className="list__title item-header__title">{title}</h1>
          </div>

          <Link to={`/inventory/${data.id}/edit`}>
            <img
              src={edit}
              alt="edit"
              className="item-header__icon item-header__edit-icon"
            />
          </Link>
        </div>
      </>
    );
  } else {
    return <></>;
  }
};

export default SingleItemHeader;

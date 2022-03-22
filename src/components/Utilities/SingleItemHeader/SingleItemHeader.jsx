/** @format */

//IMPORT MODULES
import React from "react";
import { Link } from "react-router-dom";

//IMPORT COMPONENTS
import "../List/ListHeader/ListHeader.scss";
import "../../Warehouse/WarehouseAddNew/WarehouseAddNew.scss";
import backArrow from "../../../assets/icons/arrow_back-24px.svg";

const SingleItemHeader = ({ title, itemType }) => {
	return (
		<>
			<div className="item-header">
				<h1 className="item-header__title">{title}</h1>
				<img className="item-header__icon" src={backArrow} alt="back arrow" />
			</div>
		</>
	);
};

export default SingleItemHeader;

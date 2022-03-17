/** @format */

//IMPORT MODULES
import React from "react";
import { Link } from "react-router-dom";
import "./ListCard.scss";

//IMPORT COMPONENTS
import ListDataWarehouse from "../ListDataWarehouse/ListDataWarehouse";
import ListDataInventory from "../ListDataInventory/ListDataInventory";

const ListCard = ({ cardType, data }) => {
	return (
		<div className="card">
			{/* conditional render depending on card type */}
			{cardType === "Warehouses" && <ListDataWarehouse data={data} />}
			{cardType === "Inventory" && <ListDataInventory data={data} />}
			<Link to="/{data.id}/delete">
				<div className="card__delete-btn"></div>
			</Link>
			<Link to="/{data.id}/edit">
				<div className="card__edit-btn"></div>
			</Link>
		</div>
	);
};

export default ListCard;

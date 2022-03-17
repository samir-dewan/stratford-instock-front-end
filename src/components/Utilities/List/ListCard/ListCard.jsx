/** @format */

//IMPORT MODULES
import React from "react";
import { Link } from "react-router-dom";
import "./ListCard.scss";

//IMPORT COMPONENTS

switch (cardType) {
	case "Warehouse":
		<>
			<label className="card__label">Warehouse</label>
			<Link to="/">
				<p className="card__info">{data.name}</p>
			</Link>
			<label className="card__label">Address</label>
			<p className="card__info">
				{data.address + ", " + data.address + ", " + data.country}
			</p>
			<label className="card__label">Contact Name</label>
			<p className="card__info">{data.contact.name}</p>
			<label className="card__label">Contact Information</label>
			<p className="card__info">
				{data.contact.phone}
				<br />
				{data.contact.email}
			</p>
		</>;
		break;
	case "Inventory":
		<>
			<label className="card__label">Inventory Item</label>
			<Link to="/">
				<p className="card__info">{data.itemName}</p>
			</Link>
			<label className="card__label">Category</label>
			<p className="card__info">{data.category}</p>
			<label className="card__label">Status</label>
			<p className="card__info card__status">{data.status}</p>
			<label className="card__label">QTY</label>
			<p className="card__info">{data.quantity}</p>
			<label className="card__label">Warehouse</label>
			<p className="card__info">{data.warehouseName}</p>
		</>;
		break;
}

const ListCard = ({ cardType }, { data }) => {
	return (
		<div className="card">
			{/* conditional render depending on card type */}
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

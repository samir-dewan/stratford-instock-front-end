import React from "react";
import { Link } from "react-router-dom";

const ListDataInventory = ({ data }) => {
	return (
		<div>
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
		</div>
	);
};

export default ListDataInventory;

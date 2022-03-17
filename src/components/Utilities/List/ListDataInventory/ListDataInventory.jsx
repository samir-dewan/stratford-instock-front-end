import React from "react";
import { Link } from "react-router-dom";

const ListDataInventory = ({ data }) => {
	return (
		<div>
			<div className="card__data">
				<label className="card__label">Inventory Item</label>
				<Link to="/">
					<p className="card__info">{data.itemName}</p>
				</Link>
			</div>
			<div className="card__data">
				<label className="card__label">Category</label>
				<p className="card__info">{data.category}</p>
			</div>
			<div className="card__data">
				<label className="card__label">Status</label>
				<p className="card__info card__status">{data.status}</p>
			</div>
			<div className="card__data">
				<label className="card__label">QTY</label>
				<p className="card__info">{data.quantity}</p>
			</div>
			<div className="card__data">
				<label className="card__label">Warehouse</label>
				<p className="card__info">{data.warehouseName}</p>
			</div>
		</div>
	);
};

export default ListDataInventory;

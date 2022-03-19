import React from "react";
import { Link } from "react-router-dom";

import "../ListCard/ListCard.scss";

const ListDataWarehouse = ({ data }) => {
	return (
		<div>
			<label className="card__label">Warehouse</label>
			<Link to="/">
				<p className="card__info">{data.name}</p>
			</Link>
			<label className="card__label">Address</label>
			<p className="card__info">
				{data.address + ", " + data.city + ", " + data.country}
			</p>
			<label className="card__label">Contact Name</label>
			<p className="card__info">{data.contact.name}</p>
			<label className="card__label">Contact Information</label>
			<p className="card__info">
				{data.contact.phone}
				<br />
				{data.contact.email}
			</p>
		</div>
	);
};

export default ListDataWarehouse;

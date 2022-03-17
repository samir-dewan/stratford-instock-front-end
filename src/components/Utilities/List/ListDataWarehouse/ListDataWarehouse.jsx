import React from "react";
import { Link } from "react-router-dom";

const ListDataWarehouse = ({ data }) => {
	return (
		<div>
			<div className="card__data">
				<label className="card__label">Warehouse</label>
				<Link to="/">
					<p className="card__info">{data.name}</p>
				</Link>
			</div>
			<div className="card__data">
				<label className="card__label">Address</label>
				<p className="card__info">
					{data.address + ", " + data.city + ", " + data.country}
				</p>
			</div>
			<div className="card__data">
				<label className="card__label">Contact Name</label>
				<p className="card__info">{data.contact.name}</p>
			</div>
			<div className="card__data">
				<label className="card__label">Contact Information</label>
				<p className="card__info">
					{data.contact.phone}
					<br />
					{data.contact.email}
				</p>
			</div>
		</div>
	);
};

export default ListDataWarehouse;

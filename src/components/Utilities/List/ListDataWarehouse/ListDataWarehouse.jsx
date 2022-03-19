import React from "react";
import { Link } from "react-router-dom";

import "../ListCard/ListCard.scss";

const ListDataWarehouse = ({ data }) => {
	return (
		<div className="card__content-wrapper">
			<div className="card__col-one">
				<div className="card__content-piece">
					<label className="card__label">Warehouse</label>
					<Link to="/">
						<p className="card__info">{data.name}</p>
					</Link>
				</div>
				<div className="card__content-piece">
					<label className="card__label">Address</label>
					<p className="card__info">
						{data.address + ", " + data.city + ", " + data.country}
					</p>
				</div>
			</div>
			<div className="card__col-two">
				<div className="card__content-piece">
					<label className="card__label">Contact Name</label>
					<p className="card__info">{data.contact.name}</p>
				</div>
				<div className="card__content-piece">
					<label className="card__label">Contact Information</label>
					<p className="card__info">
						{data.contact.phone}
						<br />
						{data.contact.email}
					</p>
				</div>
			</div>
		</div>
	);
};

export default ListDataWarehouse;

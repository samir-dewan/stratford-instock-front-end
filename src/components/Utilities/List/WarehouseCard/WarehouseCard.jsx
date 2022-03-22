import React from "react";

import "../ListCard/ListCard.scss";

const WarehouseCard = ({ data }) => {
	if (data) {
		return (
			<>
				<div className="card">
					<div className="card__content-wrapper">
						<div className="card__col-one">
							<div className="card__content-piece warehouse-label-2">
								<label className="card__label">Warehouse Address</label>
								<p className="card__info">
									{data.address + ", " + data.city + ", " + data.country}
								</p>
							</div>
							<div className="card__content-piece warehouse-label-3">
								<label className="card__label">Contact Name</label>
								<p className="card__info">{data.contact.name}</p>
							</div>
						</div>
						<div className="card__col-two">
							<div className="card__content-piece warehouse-label-4">
								<label className="card__label">Contact Information</label>
								<p className="card__info">
									{data.contact.phone}
									<br />
									{data.contact.email}
								</p>
							</div>
						</div>
					</div>
				</div>
			</>
		);
	} else {
		return <></>;
	}
};

export default WarehouseCard;

import { GET_SINGLE_INVENTORY_API_URL } from "../../../api/endpoints";
import React, { useState, useEffect } from "react";
import axios from "axios";

import SingleItemHeader from "../../Utilities/SingleItemHeader/SingleItemHeader";
import "../../Utilities/SingleItemHeader/SingleItemHeader.scss";
import "../../Utilities/List/ListCard/ListCard.scss";
import "./InventoryItem.scss";

const InventoryItem = (routerProps) => {
	const [data, setData] = useState([]);

	const id = routerProps.match.params.inventoryId;
	console.log(id);

	useEffect(() => {
		axios
			.get(GET_SINGLE_INVENTORY_API_URL(id))
			.then(console.log(id))
			.then((res) => setData(res.data))
			.catch(() => {
				console.log("Trouble connecting with the server");
				return (
					<>
						<div className="list-error">
							We apologise. There has been a problem retrieving the data.
						</div>
					</>
				);
			});
	}, [id]);

	console.log(data);

	return (
		<>
			<SingleItemHeader data={data} />
			<div className="card">
				<div className="card__content-wrapper">
					<div className="card__col-one">
						<div className="card__content-piece warehouse-label-2">
							<label className="card__label">item description: </label>
							<p className="card__info">{data.description}</p>
						</div>
						<div className="card__content-piece warehouse-label-3">
							<label className="card__label">category:</label>
							<p className="card__info">{data.category}</p>
						</div>
					</div>
					<div className="card__col-two">
						<div className="card__content-piece warehouse-label-3">
							<label className="card__label">status:</label>
							<p
								className={
									"card__status " +
									(data.status === "In Stock"
										? "card__status--in-stock"
										: "card__status--out-of-stock")
								}>
								{data.status}
							</p>
						</div>
						<div className="card__content-piece warehouse-label-3">
							<label className="card__label">quantity:</label>
							<p className="card__info">{data.quantity}</p>
						</div>
						<div className="card__content-piece warehouse-label-4">
							<label className="card__label">warehouse</label>
							<p className="card__info">{data.warehouseName}</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default InventoryItem;

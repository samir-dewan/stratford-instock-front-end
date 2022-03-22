/** @format */

//IMPORT MODULES
import React, { useState } from "react";
import axios from "axios";
import { GET_INVENTORY_BY_WAREHOUSE_API_URL } from "../../../api/endpoints";

//IMPORT COMPONENTS
import List from "../../Utilities/List/List";
import "../../Utilities/List/ListCard/ListCard.scss";
import "./WarehouseDetails.scss";
import SingleItemHeader from "../../Utilities/SingleItemHeader/SingleItemHeader";

// Images

const WarehouseDetails = (routerProps) => {
	const url = routerProps.match.url;
	const id = routerProps.match.params.warehouseId;
	axios
		.get(GET_INVENTORY_BY_WAREHOUSE_API_URL(id))
		.then((res) => console.log(res));

	return (
		<>
			<List
				title="Inventory"
				itemType="Items"
				apiUrl={GET_INVENTORY_BY_WAREHOUSE_API_URL(id)}
				url={`${url}/${id}`}
			/>
		</>
	);
};

export default WarehouseDetails;

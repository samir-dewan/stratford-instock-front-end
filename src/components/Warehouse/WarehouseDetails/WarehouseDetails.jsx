/** @format */

//IMPORT MODULES
import React, { useState } from "react";
import axios from "axios";
import { GET_SINGLE_WAREHOUSE_API_URL } from "../../../api/endpoints";

//IMPORT COMPONENTS
import List from "../../Utilities/List/List";
import "../../Utilities/List/ListCard/ListCard.scss";
import "./WarehouseDetails.scss";

// Images

const WarehouseDetails = (routerProps) => {
	const url = routerProps.match.url;
	const path = routerProps.match.path;
	const id = routerProps.match.params.warehouseId;
	axios.get(GET_SINGLE_WAREHOUSE_API_URL(id)).then((res) => console.log(res));

	return (
		<>
			<List
				title="Inventory"
				itemType="Items"
				apiUrl={GET_SINGLE_WAREHOUSE_API_URL(id)}
				url={`${url}/${id}`}
				path={path}
			/>
		</>
	);
};

export default WarehouseDetails;

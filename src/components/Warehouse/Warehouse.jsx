/** @format */

//IMPORT MODULES
import React from "react";
import { Route, Switch } from "react-router-dom";
import { GET_WAREHOUSES_API_URL } from "../../api/endpoints";

//IMPORT COMPONENTS
// import WarehouseAddNew from "./WarehouseAddNew/WarehouseAddNew";
// import WarehouseDetails from "./WarehouseDetails/WarehouseDetails";
// import WarehouseEdit from "./WarehouseEdit/WarehouseEdit";
// import Header from "../Header/Header";
import List from "../Utilities/List/List";

const Warehouse = (routerProps) => {
	const url = routerProps.match.url;
	return (
		<>
			<List
				title="Warehouses"
				itemType="Warehouse"
				apiUrl={GET_WAREHOUSES_API_URL}
				url={url}
			/>
		</>
	);
};

export default Warehouse;

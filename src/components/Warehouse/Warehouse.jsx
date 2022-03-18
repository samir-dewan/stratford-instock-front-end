/** @format */

//IMPORT MODULES
import React from "react";
import { Switch, Route } from "react-router-dom";
import { GET_WAREHOUSES_API_URL } from "../../api/endpoints";

//IMPORT COMPONENTS
// import WarehouseAddNew from "./WarehouseAddNew/WarehouseAddNew";
// import WarehouseDetails from "./WarehouseDetails/WarehouseDetails";
// import WarehouseEdit from "./WarehouseEdit/WarehouseEdit";
import List from "../Utilities/List/List";

const Warehouse = ({ match }) => {
	return (
		<>
			{/* <Switch>
					<Route
						path="/:warehouseId"
						exact
						render={(routerProps) => <WarehouseDetails {...routerProps} />}
					/>
					<Route
						path="/:warehouseId/delete"
						exact
						render={(routerProps) => <WarehouseDetails {...routerProps} />}
					/>
					<Route
						path="/:warehouseId/edit"
						exact
						render={(routerProps) => <WarehouseEdit {...routerProps} />}
					/>
					<Route
						path="/:warehouseId/add-new"
						exact
						render={(routerProps) => <WarehouseAddNew {...routerProps} />}
					/>
				</Switch> */}
			<List
				title="Warehouses"
				itemType="Warehouse"
				apiUrl={GET_WAREHOUSES_API_URL}
				url={match.url}
			/>
		</>
	);
};

export default Warehouse;

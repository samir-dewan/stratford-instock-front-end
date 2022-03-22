/** @format */

//IMPORT MODULES
import React, { Component } from "react";
// import { Switch, Route } from "react-router-dom";
import { GET_INVENTORIES_API_URL } from "../../api/endpoints";

//IMPORT COMPONENTS
// import InventoryItem from "./InventoryItem/InventoryItem";
// import InventoryEdit from "./InventoryEdit/InventoryEdit";
// import InventoryAddNew from "./InventoryAddNew/InventoryAddNew";
import List from "../Utilities/List/List";

const Inventory = (routerProps) => {
	const url = routerProps.match.url;
	return (
		<>
			{/* <Switch>
					<Route
						path="/:inventoryId"
						exact
						render={(routerProps) => <InventoryItem {...routerProps} />}
					/>
					<Route
						path="/:inventoryId/delete"
						exact
						render={(routerProps) => <InventoryItem {...routerProps} />}
					/>
					<Route
						path="/:inventoryId/edit"
						exact
						render={(routerProps) => <InventoryEdit {...routerProps} />}
					/>
					<Route
						path="/:inventoryId/add-new"
						exact
						render={(routerProps) => <InventoryAddNew {...routerProps} />}
					/>
				</Switch> */}
			<List
				title="Inventory"
				itemType="Item"
				apiUrl={GET_INVENTORIES_API_URL}
				url={url}
			/>
		</>
	);
};

export default Inventory;

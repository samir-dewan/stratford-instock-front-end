/** @format */

//IMPORT MODULES
import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

//IMPORT COMPONENTS
import WarehouseAddNew from "./WarehouseAddNew/WarehouseAddNew";
import WarehouseDetails from "./WarehouseDetails/WarehouseDetails";
import WarehouseEdit from "./WarehouseEdit/WarehouseEdit";

export default class Warehouse extends Component {
	render() {
		return (
			<>
				<Switch>
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
				</Switch>
			</>
		);
	}
}

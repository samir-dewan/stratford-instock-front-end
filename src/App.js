/** @format */

import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/Header/Header";

import WarehouseAddNew from "./components/Warehouse/WarehouseAddNew/WarehouseAddNew";

export default function App() {
	return (
		<>
			<Header />
			<Switch>
				{/* <Route exact path="/">
          <Redirect to="/warehouse" />
        </Route>
        <Route
          path="/warehouse"
          exact
          render={(routerProps) => <Warehouse {...routerProps} />}
        />
        <Route
          path="/warehouse/:warehouseId"
          exact
          render={(routerProps) => <WarehouseDetails {...routerProps} />}
        />
        <Route
          path="/warehouse/:warehouseId/edit"
          exact
          render={(routerProps) => <WarehouseEdit {...routerProps} />}
        /> */}
				<Route
					path="/warehouse/add-new"
					exact
					render={(routerProps) => <WarehouseAddNew {...routerProps} />}
				/>
				{/* <Route
          path="/inventory"
          exact
          render={(routerProps) => <Inventory {...routerProps} />}
        />
        <Route
          path="/inventory/:itemId"
          exact
          render={(routerProps) => <InventoryItem {...routerProps} />}
        />
        <Route
          path="/inventory/:itemId/edit"
          exact
          render={(routerProps) => <InventoryEdit {...routerProps} />}
        />
        <Route
          path="/inventory/:itemId/add-new"
          exact
          render={(routerProps) => <InventoryAddNew {...routerProps} />}
        /> */}
			</Switch>
		</>
	);
}

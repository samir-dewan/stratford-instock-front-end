/** @format */

//IMPORT MODULES
import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

//IMPORT COMPONENTS
import Header from "./components/Header/Header";
import Warehouse from "./components/Warehouse/Warehouse";
import Inventory from "./components/Inventory/Inventory";

export default function App() {
	return (
		<>
			<Header />
			<Switch>
				<Route exact path="/">
					<Redirect to="/warehouse" />
				</Route>
				<Route
					path="/warehouse"
					exact
					render={(routerProps) => <Warehouse {...routerProps} />}
				/>

				<Route
					path="/inventory"
					exact
					render={(routerProps) => <Inventory {...routerProps} />}
				/>
			</Switch>
		</>
	);
}

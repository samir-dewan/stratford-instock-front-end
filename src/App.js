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

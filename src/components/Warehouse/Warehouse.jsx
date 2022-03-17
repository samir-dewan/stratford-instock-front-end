/** @format */

//IMPORT MODULES
import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

//IMPORT COMPONENTS
import WarehouseAddNew from "./WarehouseAddNew/WarehouseAddNew";
// import WarehouseDetails from "./WarehouseDetails/WarehouseDetails";
// import WarehouseEdit from "./WarehouseEdit/WarehouseEdit";
// import Header from "../Header/Header";

export default class Warehouse extends Component {
  render() {
    console.log(this.props.match.path);
    return (
      <>
        {/* <Header /> */}
        {/* <Route
            path="/:warehouseId"
            exact
            render={(routerProps) => <WarehouseDetails {...routerProps} />}
            />
            <Route
            path="/:warehouseId/edit"
            render={(routerProps) => <WarehouseEdit {...routerProps} />}
          /> */}
        <Switch>
          <Route exact path="/">
            <h1>Warehouse HOME</h1>
          </Route>
          <Route
            path="/add-new"
            exact
            render={(routerProps) => <WarehouseAddNew {...routerProps} />}
          />
        </Switch>
      </>
    );
  }
}

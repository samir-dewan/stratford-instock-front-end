/** @format */

//IMPORT MODULES
import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

//IMPORT COMPONENTS

export default class Inventory extends Component {
  render() {
    return (
      <>
        <Switch>
          <Route
            path="/:inventoryId"
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
        </Switch>
      </>
    );
  }
}

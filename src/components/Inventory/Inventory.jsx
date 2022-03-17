/** @format */

//IMPORT MODULES
import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

//IMPORT COMPONENTS
import InventoryItem from "./InventoryItem/InventoryItem"
import InventoryEdit from "./InventoryEdit/InventoryEdit";
import InventoryAddNew from "./InventoryAddNew/InventoryAddNew";

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

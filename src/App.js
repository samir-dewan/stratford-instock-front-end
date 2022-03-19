/** @format */

//IMPORT MODULES
import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

//IMPORT COMPONENTS
import Header from "./components/Header/Header";
import Warehouse from "./components/Warehouse/Warehouse";
import WarehouseDetails from "./components/Warehouse/WarehouseDetails/WarehouseDetails.jsx";
import WarehouseEdit from "./components/Warehouse/WarehouseEdit/WarehouseEdit.jsx";
import WarehouseAddNew from "./components/Warehouse/WarehouseAddNew/WarehouseAddNew.jsx";

import Inventory from "./components/Inventory/Inventory";
import InventoryItem from "./components/Inventory/InventoryItem/InventoryItem";
import InventoryEdit from "./components/Inventory/InventoryEdit/InventoryEdit";
import InventoryAddNew from "./components/Inventory/InventoryAddNew/InventoryAddNew";

export default function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route
          path="/warehouse"
          exact
          render={(routerProps) => <Warehouse {...routerProps} />}
        />
        {/* <Route
          path="/warehouse/:warehouseId"
          exact
          render={(routerProps) => <WarehouseDetails {...routerProps} />}
        /> */}
        <Route
          // path="/:warehouseId/edit"
          path="/warehouse/edit"
          exact
          render={(routerProps) => <WarehouseEdit {...routerProps} />}
        />
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
          path="/add-new"
          exact
          render={(routerProps) => <InventoryAddNew {...routerProps} />}
        /> */}
      </Switch>
    </>
  );
}

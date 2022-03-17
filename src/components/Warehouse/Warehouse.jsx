/** @format */

//IMPORT MODULES
import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import axios from "axios";

//IMPORT COMPONENTS
import WarehouseAddNew from "./WarehouseAddNew/WarehouseAddNew";
import WarehouseDetails from "./WarehouseDetails/WarehouseDetails";
import WarehouseEdit from "./WarehouseEdit/WarehouseEdit";

const API_URL_NEW_WAREHOUSE = `localhost:5000/warehouse/add-new`;
export default class Warehouse extends Component {
  state = {
    warehouseName: "",
    streetAddress: "",
    city: "",
    country: "",
    contact: {
      contactName: "",
      position: "",
      phoneNumber: "",
      email: "",
    },
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // toast.configure();
    this.createNewWarehouse(e);
    // this.isFormValid(e);
  };

  isFormValid = (e) => {
    if (this.state.title.length < 3 || this.state.description.length < 5) {
      if (this.state.title.length < 3) {
        this.setState({ inputTitleValid: false });
        // toast.error("Error: Insert Video Title");
        if (this.state.description.length < 5) {
          this.setState({ inputDescriptionValid: false });
          // toast.error("Error: Insert Video Description");
        } else {
          this.setState({ inputDescriptionValid: true });
        }
      } else {
        this.setState({ inputTitleValid: true });
        // toast.error("Error: Insert a Video Description");
        return;
      }
    } else {
      this.setState({ inputTitleValid: true, inputDescriptionValid: true });
      // toast.success("Uploading...");
      this.uploadVideo();
      e.target.title.value = null;
      e.target.description.value = null;
      this.delayTimerRedirect();
    }
  };

  //******** API Call To Upload A Video ******** */
  //Posts A Comment To The Video
  createNewWarehouse = async (event) => {
    const newWarehouse = {
      warehouseName: this.state.warehouseName,
      streetAddress: this.state.streetAddress,
      city: this.state.city,
      country: this.state.country,
      contact: {
        contactName: this.state.contactName,
        position: this.state.position,
        phoneNumber: this.state.phoneNumber,
        email: this.state.email,
      },
    };
    await axios.post(API_URL_NEW_WAREHOUSE, newWarehouse).then((response) => {
      // this.getNewComment();
    });
  };

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
            path="/:warehouseId/edit"
            exact
            render={(routerProps) => <WarehouseEdit {...routerProps} />}
          />
          <Route
            path="/add-new"
            exact
            render={(routerProps) => (
              <WarehouseAddNew
                {...routerProps}
                handleSubmit={this.handleSubmit}
              />
            )}
          />
        </Switch>
      </>
    );
  }
}

/** @format */

import "./InventoryAddNew.scss";
// import Button from "../../Utilities/Button/Button.jsx";
import backArrow from "../../../assets/icons/arrow_back-24px.svg";
import error from "../../../assets/icons/error-24px.svg";
import React, { Component } from "react";
import axios from "axios";

const API_URL_NEW_WAREHOUSE = `http://localhost:5000/warehouse/add-new`;

const input = document.querySelector(".form__input");
export default class AddNewInventoryItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //VALIDATION STATES
      itemNameValid: true,
      descriptionValid: true,
      categoryValid: true,
      statusValid: true,
      inStockValid: true,
      outOfStockValid: true,
      quantityValid: true,
      warehouseValid: true,
      //FORM STATES
      itemName: "",
      description: "",
      category: "",
      status: "",
      quantity: "",
      warehouse: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  // handleContactChange = (e) => {
  //   this.setState({
  //     contact: { ...this.state.contact, [e.target.name]: e.target.value },
  //   });
  // };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.validate()) {
      // this.createNewWarehouse();
    }
  };

  itemNameValidation = () => {
    //Warehouse Name
    if (this.state.itemName.length > 4) {
      this.setState({ itemNameValid: true });
      // console.log("valid return");
      return true;
    } else {
      this.setState({ itemNameValid: false });
      return false;
    }
  };

  descriptionValidation = () => {
    // //Address Name
    if (this.state.description.length > 6) {
      this.setState({ descriptionValid: true });
      return true;
    } else {
      this.setState({ descriptionValid: false });
      return false;
    }
  };

  categoryValidation = () => {
    // //City
    // console.log(this.state.category);
    if (this.state.category > 0) {
      this.setState({ categoryValid: true });
      return true;
    } else {
      this.setState({ categoryValid: false });
      return false;
    }
  };

  // inStockValidation = () => {
  //   // //Country
  //   if (this.state.inStock.value == true) {
  //     this.setState({ inStockValid: true });
  //     return true;
  //   } else if (this.state.outOfStockName.checked == true) {
  //     this.setState({ outOfStockValid: true });
  //     return true;
  //   } else {
  //     this.setState({ outOfStockValid: false, inStockValid: false });
  //     return false;
  //   }
  // };

  statusValidation = () => {
    //quantity
    // console.log(this.state.status);
    if (this.state.status == "1") {
      this.setState({
        statusValid: true,
        inStockValid: true,
        outOfStockValid: false,
      });
      return true;
    } else if (this.state.status == "0") {
      this.setState({
        statusValid: true,
        outOfStockValid: true,
        inStockValid: false,
      });
      return true;
    } else {
      this.setState({
        statusValid: false,
      });
    }
  };

  quantityValidation = () => {
    //quantity
    // console.log(this.state.quantity.value);
    console.log(this.state.outOfStockValid);
    if (
      this.state.inStockValid == false &&
      this.state.outOfStockValid == true
    ) {
      this.setState({ quantityValid: true, quantity: "0" });
      return true;
    }
    if (this.state.quantity > 0) {
      this.setState({ quantityValid: true });
      return true;
    } else if (this.state.quantity == "0") {
      this.setState({ quantityValid: true });
      return true;
    } else this.setState({ quantityValid: false });
    return false;
  };

  warehouseValidation = () => {
    //Phone Number
    if (this.state.warehouse > 0) {
      this.setState({ warehouseValid: true });
      return true;
    } else {
      this.setState({ warehouseValid: false });
      return false;
    }
  };

  validate = (e) => {
    //put all the functions in one line.
    if (!this.itemNameValidation()) {
      return false;
    }

    if (!this.descriptionValidation()) {
      return false;
    }

    if (!this.categoryValidation()) {
      return false;
    }

    if (!this.statusValidation()) {
      return false;
    }
    if (!this.quantityValidation()) {
      return false;
    }
    if (!this.warehouseValidation()) {
      return false;
    }
    console.log("Validated");
    return true;
  };

  //******** API Call To Upload A Video ******** */
  //Posts A Comment To The Video
  createNewWarehouse = async (e) => {
    const newWarehouse = {
      warehouseName: this.state.warehouseName,
      streetAddress: this.state.streetAddress,
      city: this.state.city,
      country: this.state.country,
      contact: {
        contactName: this.state.contact.contactName,
        position: this.state.contact.position,
        phoneNumber: this.state.contact.phoneNumber,
        email: this.state.contact.email,
      },
    };
    await axios
      .post(API_URL_NEW_WAREHOUSE, newWarehouse)
      .then((response) => {});
  };

  render() {
    return (
      <section>
        <div className="warehouse">
          <div className="warehouse__header">
            <img className="warehouse__icon" src={backArrow} alt="back arrow" />
            <h1 className="warehouse__title">Add New Inventory Item</h1>
          </div>
          <form className="form-container" onSubmit={this.handleSubmit}>
            <div className="form">
              <h2 className="form__heading">Item Details</h2>
              <label className="form__label">Item Name</label>
              <input
                className={`${
                  !this.state.itemNameValid
                    ? "form__input form__input--error"
                    : "form__input form__input--active"
                }`}
                type="text"
                name="itemName"
                placeholder="Item Name"
                onChange={this.handleChange}
              />
              <p
                className={`${
                  this.state.itemNameValid
                    ? "form__error form__error--active"
                    : "form__error"
                }`}
              >
                <img className="form__error-icon" src={error} />
                This field is required
              </p>
              <label className="form__label">Description</label>
              <textarea
                className={`${
                  !this.state.descriptionValid
                    ? "form__textarea form__textarea--error"
                    : "form__textarea"
                }`}
                type="text"
                name="description"
                placeholder="Please enter a brief item description..."
                onChange={this.handleChange}
              />
              <p
                className={`${
                  this.state.descriptionValid
                    ? "form__error form__error--active"
                    : "form__error"
                }`}
              >
                <img className="form__error-icon" src={error} />
                This field is required
              </p>
              <label className="form__label ">Category</label>
              <select
                className={`${
                  !this.state.categoryValid
                    ? "form__dropdown form__dropdown--error"
                    : "form__dropdown"
                }`}
                type="text"
                id="category"
                name="category"
                placeholder="Please Select"
                onChange={this.handleChange}
              >
                <option value="0">Please select</option>
                <option value="1">Accessories</option>
                <option value="2">Apparel</option>
                <option value="3">Electronics</option>
                <option value="4">Gear</option>
                <option value="5">Health</option>
              </select>
              <p
                className={`${
                  this.state.categoryValid
                    ? "form__error form__error--active"
                    : "form__error"
                }`}
              >
                <img className="form__error-icon" src={error} />
                This field is required
              </p>
            </div>
            <div className="form">
              <h2 className="form__heading">Item Availability</h2>
              <label className="form__label">Status</label>
              <div className="input-container">
                <input
                  className={`${
                    !this.state.inStockValid
                      ? "form__radio-input form__radio-input--error"
                      : "form__radio-input"
                  }`}
                  type="radio"
                  id="inStock"
                  name="status"
                  value="1"
                  onChange={this.handleChange}
                />
                <label className="form__label radio-label">In Stock</label>
                <input
                  className={`${
                    !this.state.inStockValid
                      ? "form__radio-input form__radio-input--error"
                      : "form__radio-input"
                  }`}
                  type="radio"
                  id="outOfStock"
                  name="status"
                  value="0"
                  onChange={this.handleChange}
                />
                <label className="form__label radio-label">Out of Stock</label>
                <p
                  className={`${
                    this.state.statusValid
                      ? "form__error form__error--active"
                      : "form__error"
                  }`}
                >
                  <img className="form__error-icon" src={error} />
                  This field is required
                </p>
              </div>
              <label className="form__label">Quantity</label>
              <input
                className={`${
                  !this.state.quantityValid
                    ? "form__input form__input--error quantity"
                    : "form__input quantity"
                }`}
                type="text"
                id="quantity"
                name="quantity"
                placeholder="Quantity"
                onChange={this.handleChange}
              />
              <p
                className={`${
                  this.state.quantityValid
                    ? "form__error form__error--active"
                    : "form__error"
                }`}
              >
                <img className="form__error-icon" src={error} />
                This field is required
              </p>
              <label className="form__label ">Warehouse</label>
              <select
                className={`${
                  !this.state.warehouseValid
                    ? "form__dropdown form__dropdown--error"
                    : "form__dropdown"
                }`}
                type="text"
                name="warehouse"
                onChange={this.handleChange}
              >
                <option value="0">Please select</option>
                <option value="1">Boston</option>
                <option value="2">Jersey</option>
                <option value="3">Manhattan</option>
                <option value="4">Miami</option>
                <option value="5">San Fran</option>
                <option value="6">Santa Monica</option>
                <option value="7">Seattle</option>
                <option value="8">Washington</option>
              </select>
              <p
                className={`${
                  this.state.warehouseValid
                    ? "form__error form__error--active"
                    : "form__error"
                }`}
              >
                <img className="form__error-icon" src={error} />
                This field is required
              </p>
            </div>
            <div className="button__container">
              <button
                className="form-button form-button__cancel"
                label="Cancel"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="form-button form-button__warehouse"
                label="Add Inventory Item"
              >
                + Add Item
              </button>
            </div>
          </form>
        </div>
      </section>
    );
  }
}

/** @format */

import "./WarehouseAddNew.scss";
import Button from "../../Utilities/Button/Button.jsx";
import backArrow from "../../../assets/icons/arrow_back-24px.svg";
import error from "../../../assets/icons/error-24px.svg";
import React, { Component } from "react";
import axios from "axios";

const API_URL_NEW_WAREHOUSE = `http://localhost:5000/warehouse/add-new`;

export default class WarehouseAddNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //VALIDATION STATES
      formValid: false,
      warehouseNameValid: true,
      addressValid: true,
      cityValid: true,
      countryValid: true,
      contactNameValid: true,
      positionValid: true,
      phoneValid: true,
      emailValid: true,
      //FORM STATES
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
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleContactChange = (e) => {
    this.setState({
      contact: { ...this.state.contact, [e.target.name]: e.target.value },
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.validate()) {
      this.createNewWarehouse();
    }
  };

  warehouseNameValidation = () => {
    //Warehouse Name
    if (this.state.warehouseName.length > 4) {
      this.setState({ warehouseNameValid: true });
      // console.log("valid return");
      return true;
    } else {
      this.setState({ warehouseNameValid: false });
      return false;
    }
  };

  addressValidation = () => {
    // //Address Name
    if (this.state.streetAddress.length > 6) {
      this.setState({ addressValid: true });
      return true;
    } else {
      this.setState({ addressValid: false });
      return false;
    }
  };

  cityValidation = () => {
    // //City
    if (this.state.city.length > 6) {
      this.setState({ cityValid: true });
      return true;
    } else {
      this.setState({ cityValid: false });
      return false;
    }
  };

  countryValidation = () => {
    // //Country
    if (this.state.country.length > 6) {
      this.setState({ countryValid: true });
      return true;
    } else {
      this.setState({ countryValid: false });
      return false;
    }
  };

  contactNameValidation = () => {
    //Contact Name
    // console.log(this.state.contact.contactName.length);
    if (this.state.contact.contactName.length > 4) {
      console.log(this.state.contact.contactName.length);
      this.setState({ contactNameValid: true });
      return true;
    } else {
      console.log(this.state.contact.contactName);
      this.setState({ contactNameValid: false });
      return false;
    }
  };

  positionValidation = () => {
    //Position
    if (this.state.contact.position.length > 6) {
      this.setState({ positionValid: true });
      return true;
    } else {
      this.setState({ positionValid: false });
      return false;
    }
  };

  phoneValidation = () => {
    //Phone Number
    if (this.state.contact.phoneNumber.length > 6) {
      this.setState({ phoneValid: true });
      return true;
    } else {
      this.setState({ phoneValid: false });
      return false;
    }
  };

  emailValidation = () => {
    //Email
    if (
      this.state.contact.email.length > 6 &&
      this.state.contact.email.includes("@")
    ) {
      this.setState({ emailValid: true });
      return true;
    } else {
      this.setState({ emailValid: false });
      return false;
    }
  };

  validate = (e) => {
    //put all the functions in one line.
    if (!this.warehouseNameValidation()) {
      return false;
    }

    if (!this.addressValidation()) {
      return false;
    }

    if (!this.cityValidation()) {
      return false;
    }

    if (!this.countryValidation()) {
      return false;
    }
    if (!this.contactNameValidation()) {
      return false;
    }
    if (!this.positionValidation()) {
      return false;
    }
    if (!this.phoneValidation()) {
      return false;
    }

    if (!this.emailValidation()) {
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
            <h1 className="warehouse__title">Add New Warehouse</h1>
          </div>
          <form className="form-container" onSubmit={this.handleSubmit}>
            <div className="form">
              <h2 className="form__heading">Warehouse Details</h2>
              <label className="form__label">Warehouse Name</label>
              <input
                className={`${
                  !this.state.warehouseNameValid
                    ? "form__input form__input--error"
                    : "form__input"
                }`}
                type="text"
                name="warehouseName"
                placeholder="Warehouse Name"
                onChange={this.handleChange}
              />
              <p
                className={`${
                  this.state.warehouseNameValid
                    ? "form__error form__error--active"
                    : "form__error"
                }`}
              >
                <img className="form__error-icon" src={error} />
                This field is required
              </p>
              <label className="form__label">Street Address</label>
              <input
                className={`${
                  !this.state.addressValid
                    ? "form__input form__input--error"
                    : "form__input"
                }`}
                type="text"
                name="streetAddress"
                placeholder="Street Address"
                onChange={this.handleChange}
              />
              <p
                className={`${
                  this.state.addressValid
                    ? "form__error form__error--active"
                    : "form__error"
                }`}
              >
                <img className="form__error-icon" src={error} />
                This field is required
              </p>
              <label className="form__label ">City</label>
              <input
                className={`${
                  !this.state.cityValid
                    ? "form__input form__input--error"
                    : "form__input"
                }`}
                type="text"
                name="city"
                placeholder="City"
                onChange={this.handleChange}
              />
              <p
                className={`${
                  this.state.cityValid
                    ? "form__error form__error--active"
                    : "form__error"
                }`}
              >
                <img className="form__error-icon" src={error} />
                This field is required
              </p>
              <label className="form__label">Country</label>
              <input
                className={`${
                  !this.state.countryValid
                    ? "form__input form__input--error"
                    : "form__input"
                }`}
                type="text"
                name="country"
                placeholder="Country"
                onChange={this.handleChange}
              />
              <p
                className={`${
                  this.state.countryValid
                    ? "form__error form__error--active"
                    : "form__error"
                }`}
              >
                <img className="form__error-icon" src={error} />
                This field is required
              </p>
            </div>
            <div className="form">
              <h2 className="form__heading">Contact Details</h2>
              <label className="form__label">Contact Name</label>
              <input
                className={`${
                  !this.state.contactNameValid
                    ? "form__input form__input--error"
                    : "form__input"
                }`}
                type="text"
                name="contactName"
                placeholder="Contact Name"
                onChange={this.handleContactChange}
              />
              <p
                className={`${
                  this.state.contactNameValid
                    ? "form__error form__error--active"
                    : "form__error"
                }`}
              >
                <img className="form__error-icon" src={error} />
                This field is required
              </p>
              <label className="form__label">Position</label>
              <input
                className={`${
                  !this.state.positionValid
                    ? "form__input form__input--error"
                    : "form__input"
                }`}
                type="text"
                name="position"
                placeholder="Position"
                onChange={this.handleContactChange}
              />
              <p
                className={`${
                  this.state.positionValid
                    ? "form__error form__error--active"
                    : "form__error"
                }`}
              >
                <img className="form__error-icon" src={error} />
                This field is required
              </p>
              <label className="form__label">Phone Number</label>
              <input
                className={`${
                  !this.state.phoneValid
                    ? "form__input form__input--error"
                    : "form__input"
                }`}
                type="text"
                name="phoneNumber"
                placeholder="Phone Number"
                onChange={this.handleContactChange}
              />
              <p
                className={`${
                  this.state.phoneValid
                    ? "form__error form__error--active"
                    : "form__error"
                }`}
              >
                <img className="form__error-icon" src={error} />
                This field is required
              </p>
              <label className="form__label">Email</label>
              <input
                className={`${
                  !this.state.emailValid
                    ? "form__input form__input--error"
                    : "form__input"
                }`}
                type="text"
                name="email"
                placeholder="Email"
                onChange={this.handleContactChange}
              />
              <p
                className={`${
                  this.state.emailValid
                    ? "form__error form__error--active"
                    : "form__error"
                }`}
              >
                <img className="form__error-icon" src={error} />
                This field is required
              </p>
            </div>
            <div className="button__container">
              <button className="button button__cancel" label="Cancel">
                Cancel
              </button>
              <button
                type="submit"
                className="button button__warehouse"
                label="+ Add Warehouse"
              >
                + Add Warehouse
              </button>
            </div>
          </form>
        </div>
      </section>
    );
  }
}

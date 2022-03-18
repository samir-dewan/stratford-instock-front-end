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

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submit Pressed");
    this.validate(e);

    // console.log(e);
    // toast.configure();
    // this.createNewWarehouse();
    // this.isFormValid(e);
  };

  validate = (e) => {
    // console.log("Validated Function Started");
    // console.log(this.state.warehouseName.length);
    // let warehouseNameError = "";

    //Warehouse Name
    if (this.state.warehouseName.length > 6) {
      console.log("Valid");
      this.setState({ warehouseNameValid: true }, () => {
        console.log(this.state);
      });
    } else {
      console.log("Invalid");
      this.setState({ warehouseNameValid: false }, () => {
        console.log(this.state);
      });
    }
    //Address Name
    if (this.state.streetAddress.length > 6) {
      console.log("Valid");
      this.setState({ addressValid: true }, () => {
        // console.log(this.state);
      });
    } else {
      console.log("Invalid");
      this.setState({ addressValid: false }, () => {
        // console.log(this.state);
      });
    }

    //City
    if (this.state.city.length > 6) {
      console.log("Valid");
      this.setState({ cityValid: true }, () => {
        // console.log(this.state);
      });
    } else {
      console.log("Invalid");
      this.setState({ cityValid: false }, () => {
        // console.log(this.state);
      });
    }

    //Country
    if (this.state.country.length > 6) {
      console.log("Valid");
      this.setState({ countryValid: true }, () => {
        // console.log(this.state);
      });
    } else {
      console.log("Invalid");
      this.setState({ countryValid: false }, () => {
        // console.log(this.state);
      });
    }

    //Contact Name
    if (this.state.contact.contactName.length > 6) {
      console.log("Valid");
      this.setState({ contactNameValid: true }, () => {
        // console.log(this.state);
      });
    } else {
      console.log("Invalid");
      this.setState({ contactNameValid: false }, () => {
        // console.log(this.state);
      });
    }

    //Position
    if (this.state.contact.position.length > 6) {
      console.log("Valid");
      this.setState({ positionValid: true }, () => {
        // console.log(this.state);
      });
    } else {
      console.log("Invalid");
      this.setState({ positionValid: false }, () => {
        // console.log(this.state);
      });
    }

    //Phone Number
    if (this.state.contact.phoneNumber.length > 6) {
      console.log("Valid");
      this.setState({ phoneValid: true }, () => {
        // console.log(this.state);
      });
    } else {
      console.log("Invalid");
      this.setState({ phoneValid: false }, () => {
        // console.log(this.state);
      });
    }

    //Email
    if (this.state.contact.email.length > 6) {
      console.log("Valid");
      this.setState({ emailValid: true }, () => {
        // console.log(this.state);
      });
    } else {
      console.log("Invalid");
      this.setState({ emailValid: false }, () => {
        // console.log(this.state);
      });
    }
  };

  // isFormValid = (e) => {
  //   if (this.state.title.length < 3 || this.state.description.length < 5) {
  //     if (this.state.title.length < 3) {
  //       this.setState({ inputTitleValid: false });
  //       // toast.error("Error: Insert Video Title");
  //       if (this.state.description.length < 5) {
  //         this.setState({ inputDescriptionValid: false });
  //         // toast.error("Error: Insert Video Description");
  //       } else {
  //         this.setState({ inputDescriptionValid: true });
  //       }
  //     } else {
  //       this.setState({ inputTitleValid: true });
  //       // toast.error("Error: Insert a Video Description");
  //       return;
  //     }
  //   } else {
  //     this.setState({ inputTitleValid: true, inputDescriptionValid: true });
  //     // toast.success("Uploading...");
  //     this.uploadVideo();
  //     e.target.title.value = null;
  //     e.target.description.value = null;
  //     this.delayTimerRedirect();
  //   }
  // };

  //******** API Call To Upload A Video ******** */
  //Posts A Comment To The Video
  createNewWarehouse = async (e) => {
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
    // console.log(newWarehouse);
    await axios.post(API_URL_NEW_WAREHOUSE, newWarehouse).then((response) => {
      // this.getNewComment();
    });
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
                onChange={this.handleChange}
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
                onChange={this.handleChange}
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
                onChange={this.handleChange}
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
                onChange={this.handleChange}
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
              <button className="button button__cancel" label="Cancel" />
              <button
                type="submit"
                className="button button__warehouse"
                label="+ Add Warehouse"
              />
            </div>
          </form>
        </div>
      </section>
    );
  }
}

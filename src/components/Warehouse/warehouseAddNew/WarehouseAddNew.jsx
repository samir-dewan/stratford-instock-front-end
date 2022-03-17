/** @format */

import "./WarehouseAddNew.scss";
import Button from "../../Utilities/Button/Button.jsx";
import backArrow from "../../../assets/icons/arrow_back-24px.svg";
import error from "../../../assets/icons/error-24px.svg";

const WarehouseAddNew = () => {
  console.log("hello");
  return (
    <section>
      <div className="warehouse">
        <div className="warehouse__header">
          <img className="warehouse__icon" src={backArrow} alt="back arrow" />
          <h1 className="warehouse__title">Add New Warehouse</h1>
        </div>
        <div className="form-container">
          <form className="form">
            <h2 className="form__heading">Warehouse Details</h2>
            <label className="form__label">Warehouse Name</label>
            <input
              className="form__input form__input--error"
              input="text"
              name="warehouseName"
              placeholder="Warehouse Name"
            />
            <p className="form__error form__error--active">
              <img className="form__error-icon" src={error} alt="" />
              This field is required
            </p>
            <label className="form__label">Street Address</label>
            <input
              className="form__input form__input--error"
              input="text"
              name="streetAddress"
              placeholder="Street Address"
            />
            <p className="form__error form__error--active">
              <img className="form__error-icon" src={error} />
              This field is required
            </p>
            <label className="form__label ">City</label>
            <input
              className="form__input form__input--error"
              input="text"
              name="city"
              placeholder="City"
            />
            <p className="form__error form__error--active">
              <img className="form__error-icon" src={error} />
              This field is required
            </p>
            <label className="form__label">Country</label>
            <input
              className="form__input form__input--error"
              input="text"
              name="country"
              placeholder="Country"
            />
            <p className="form__error form__error--active">
              <img className="form__error-icon" src={error} />
              This field is required
            </p>
          </form>
          <form className="form">
            <h2 className="form__heading">Contact Details</h2>
            <label className="form__label">Contact Name</label>
            <input
              className="form__input form__input--error"
              input="text"
              name="contactName"
              placeholder="Contact Name"
            />
            <p className="form__error form__error--active">
              <img className="form__error-icon" src={error} />
              This field is required
            </p>
            <label className="form__label">Position</label>
            <input
              className="form__input form__input--error"
              input="text"
              name="position"
              placeholder="Position"
            />
            <p className="form__error form__error--active">
              <img className="form__error-icon" src={error} />
              This field is required
            </p>
            <label className="form__label">Phone Number</label>
            <input
              className="form__input form__input--error"
              input="text"
              name="phoneNumber"
              placeholder="Phone Number"
            />
            <p className="form__error form__error--active">
              <img className="form__error-icon" src={error} />
              This field is required
            </p>
            <label className="form__label">Email</label>
            <input
              className="form__input form__input--error"
              input="text"
              name="email"
              placeholder="Email"
            />
            <p className="form__error form__error--active">
              <img className="form__error-icon" src={error} />
              This field is required
            </p>
          </form>
        </div>
        <div className="button__container">
          <Button className="button button__cancel" label="Cancel" />
          <Button
            className="button button__warehouse"
            label="+ Add Warehouse"
          />
        </div>
      </div>
    </section>
  );
};

export default WarehouseAddNew;

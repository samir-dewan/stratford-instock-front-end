/** @format */

import "./WarehouseAddNew.scss";
import backArrow from "../assets/icons/arrow_back-24px.svg";

const WarehouseAddNew = () => {
  return (
    <section>
      <div>
        <div>
          <img src={backArrow} />
          <h1>Add New Warehouse</h1>
        </div>
        <form className="warehouse__form">
          <h2 className="warehouse__heading">Warehouse Details</h2>
          <label className="warehouse__label">Warehouse Name</label>
          <input
            className="warehouse__input"
            input="text"
            name="name"
            placeholder="Warehouse Name"
          />
          <p className="warehouse__error warehouse__error--active">
            This field is required
          </p>
          <label>Street Address</label>
          <input
            className="warehouse__input"
            input="text"
            name="address"
            placeholder="Street Address"
          />
          <p className="warehouse__error warehouse__error--active">
            This field is required
          </p>
          <label>City</label>
          <input
            className="warehouse__input"
            input="text"
            name="city"
            placeholder="City"
          />
          <p className="warehouse__error warehouse__error--active">
            This field is required
          </p>
          <label>Country</label>
          <input
            className="warehouse__input"
            input="text"
            name="Country"
            placeholder="Country"
          />
          <p className="warehouse__error warehouse__error--active">
            This field is required
          </p>
        </form>
        <form className="contact__form">
          <h2>Contact Details</h2>
          <label>Contact Name</label>
          <input />
          <p>This field is required</p>
          <label>Position</label>
          <input />
          <p>This field is required</p>
          <label>Phone Number</label>
          <input />
          <p>This field is required</p>
          <label>Email</label>
          <input />
          <p>This field is required</p>
        </form>
      </div>
    </section>
  );
};

export default WarehouseAddNew;
